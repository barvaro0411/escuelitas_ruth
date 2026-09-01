import { describe, expect, it } from "vitest";
import {
  buildBreadcrumbsJsonLd,
  buildContactMailtoUrl,
  buildContactWhatsAppMessage,
  buildFaqJsonLd,
  buildSchoolJsonLd,
  buildWhatsAppUrl,
  createWhatsAppMessage,
  createWhatsAppUrl,
  siteConfig,
} from "./site";
import { campuses } from "@/content/school-data";

describe("buildSchoolJsonLd", () => {
  const jsonLd = buildSchoolJsonLd();
  const organization = jsonLd["@graph"][0];

  it("declara la organización educativa gratuita", () => {
    expect(organization["@type"]).toContain("School");
    expect(organization.isAccessibleForFree).toBe(true);
    expect(organization.url).toBe(siteConfig.url);
    expect(organization.email).toBe(siteConfig.contact.email.label);
  });

  it("publica una sub-sede por cada campus con su RBD y geolocalización", () => {
    expect(organization.subOrganization).toHaveLength(campuses.length);
    for (const [index, sede] of organization.subOrganization.entries()) {
      expect(sede.identifier.value).toBe(campuses[index].rbd);
      expect(sede.geo.latitude).toBe(campuses[index].geo.latitude);
      expect(sede.address.addressCountry).toBe(campuses[index].country);
    }
  });

  it("usa @id absolutos y sin dobles barras", () => {
    const ids = [
      organization["@id"],
      ...organization.subOrganization.map((sede) => sede["@id"]),
    ];
    for (const id of ids) {
      expect(id.startsWith("https://")).toBe(true);
      expect(id.slice("https://".length)).not.toContain("//");
    }
  });

  it("serializa a JSON válido", () => {
    expect(() => JSON.parse(JSON.stringify(jsonLd))).not.toThrow();
  });
});

describe("buildFaqJsonLd", () => {
  it("acepta ambas formas de par pregunta/respuesta", () => {
    const jsonLd = buildFaqJsonLd([
      { q: "¿Cuánto cuesta?", a: "Es gratuita." },
      { question: "¿Dónde están?", answer: "En Conchalí." },
    ]);

    expect(jsonLd["@type"]).toBe("FAQPage");
    expect(jsonLd.mainEntity).toHaveLength(2);
    expect(jsonLd.mainEntity[0].name).toBe("¿Cuánto cuesta?");
    expect(jsonLd.mainEntity[0].acceptedAnswer.text).toBe("Es gratuita.");
    expect(jsonLd.mainEntity[1].name).toBe("¿Dónde están?");
    expect(jsonLd.mainEntity[1].acceptedAnswer.text).toBe("En Conchalí.");
  });
});

describe("buildBreadcrumbsJsonLd", () => {
  it("numera las posiciones desde 1 y normaliza las URLs", () => {
    const jsonLd = buildBreadcrumbsJsonLd([
      { name: "Inicio", url: "/" },
      { name: "Familias", url: "familias" },
    ]);

    expect(jsonLd.itemListElement[0].position).toBe(1);
    expect(jsonLd.itemListElement[0].item).toBe(`${siteConfig.url}/`);
    expect(jsonLd.itemListElement[1].position).toBe(2);
    expect(jsonLd.itemListElement[1].item).toBe(`${siteConfig.url}/familias`);
  });
});

describe("createWhatsAppMessage", () => {
  const year = String(siteConfig.admissionYear);

  it("prioriza el resultado de la calculadora con fecha", () => {
    const message = createWhatsAppMessage({
      source: "calculator",
      level: "Medio Mayor",
      birthdate: "31/03/2024",
    });
    expect(message).toContain("Medio Mayor");
    expect(message).toContain("31/03/2024");
    expect(message).toContain(year);
  });

  it("nombra la sede cuando se entrega un campusId", () => {
    const message = createWhatsAppMessage({
      source: "campus",
      campusId: "gambino",
    });
    expect(message).toContain(campuses[1].shortName);
    expect(message).toContain(year);
  });

  it("usa un mensaje por defecto para orígenes sin plantilla", () => {
    const message = createWhatsAppMessage({ source: "level" as never });
    expect(message).toContain(year);
  });

  it("incluye el tema en los recursos para familias", () => {
    const message = createWhatsAppMessage({
      source: "family-resource",
      topic: "conciencia fonológica",
    });
    expect(message).toContain("conciencia fonológica");
  });
});

describe("createWhatsAppUrl", () => {
  it("produce una URL wa.me con el número configurado", () => {
    const url = new URL(createWhatsAppUrl({ source: "hero" }));
    expect(url.hostname).toBe("wa.me");
    expect(url.pathname).toBe(`/${siteConfig.contact.whatsapp.number}`);
    expect(url.searchParams.get("text")).toContain(
      String(siteConfig.admissionYear),
    );
  });
});

describe("buildWhatsAppUrl", () => {
  it("recorta mensajes larguísimos a 2000 puntos de código", () => {
    const url = new URL(buildWhatsAppUrl("a".repeat(5000)));
    expect(url.searchParams.get("text")!.length).toBe(2000);
  });

  it("sanea sustitutos Unicode sueltos", () => {
    const url = new URL(buildWhatsAppUrl("Hola \uD800 mundo"));
    expect(url.searchParams.get("text")).toBe("Hola � mundo");
  });

  it("preserva pares sustitutos válidos (emoji)", () => {
    const url = new URL(buildWhatsAppUrl("Hola 👋"));
    expect(url.searchParams.get("text")).toBe("Hola 👋");
  });
});

describe("buildContactWhatsAppMessage", () => {
  it("omite las líneas de campos vacíos", () => {
    const message = buildContactWhatsAppMessage({
      nombreApoderado: "Ana",
      telefono: "+56 9 1234 5678",
    });
    const lines = message.split("\n");
    expect(lines.some((line) => line.startsWith("Apoderado/a: Ana"))).toBe(true);
    expect(lines.some((line) => line.startsWith("Correo:"))).toBe(false);
    expect(lines.some((line) => line.startsWith("Comuna:"))).toBe(false);
  });

  it("colapsa saltos de línea y recorta el mensaje del usuario", () => {
    const message = buildContactWhatsAppMessage({
      nombreApoderado: "Ana",
      mensaje: `linea1\nlinea2 ${"z".repeat(600)}`,
    });
    const mensajeLine = message
      .split("\n")
      .find((line) => line.startsWith("Mensaje:"))!;
    expect(mensajeLine).not.toContain("\r");
    expect(mensajeLine.length).toBeLessThanOrEqual("Mensaje: ".length + 500);
    expect(mensajeLine).toContain("linea1 linea2");
  });

  it("usa nombre como respaldo de nombreApoderado", () => {
    const message = buildContactWhatsAppMessage({ nombre: "Pedro" });
    expect(message).toContain("Apoderado/a: Pedro");
  });
});

describe("buildContactMailtoUrl", () => {
  it("apunta al correo oficial con asunto y cuerpo codificados", () => {
    const url = buildContactMailtoUrl({
      nombreApoderado: "Ana",
      telefono: "+56 9 1234 5678",
    });

    expect(url.startsWith(`${siteConfig.contact.email.href}?`)).toBe(true);
    const query = new URLSearchParams(url.split("?")[1]);
    expect(query.get("subject")).toBe(
      `Consulta de matrícula ${siteConfig.admissionYear}`,
    );
    expect(query.get("body")).toContain("Apoderado/a: Ana");
    expect(query.get("body")).toContain("Teléfono: +56 9 1234 5678");
  });

  it("sanea los campos igual que el mensaje de WhatsApp", () => {
    const url = buildContactMailtoUrl({
      nombreApoderado: "Ana\nfalso",
      mensaje: "x".repeat(900),
    });
    const body = new URLSearchParams(url.split("?")[1]).get("body")!;
    expect(body).toContain("Apoderado/a: Ana falso");
    const mensajeLine = body
      .split("\n")
      .find((line) => line.startsWith("Mensaje:"))!;
    expect(mensajeLine.length).toBeLessThanOrEqual("Mensaje: ".length + 500);
  });
});
