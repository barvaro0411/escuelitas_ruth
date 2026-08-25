import { describe, expect, it } from "vitest";
import {
  buildContactWhatsAppMessage,
  buildWhatsAppUrl,
  createWhatsAppMessage,
  siteConfig,
} from "./site";

describe("mensajes de contacto", () => {
  it("usa el año centralizado en los mensajes", () => {
    expect(createWhatsAppMessage({ source: "header" })).toContain(
      String(siteConfig.admissionYear),
    );
  });

  it("elimina controles y limita campos entregados por el usuario", () => {
    const message = buildContactWhatsAppMessage({
      nombreApoderado: `Ana\nCampo falso: valor${"x".repeat(150)}`,
      mensaje: "Consulta\u0000 privada",
    });

    expect(message).not.toContain("\u0000");
    expect(message).toContain("Ana Campo falso: valor");
    expect(
      message.split("\n").find((line) => line.startsWith("Apoderado/a:"))
        ?.length,
    ).toBeLessThanOrEqual(113);
  });

  it("genera una URL HTTPS de WhatsApp con texto codificado", () => {
    const url = new URL(buildWhatsAppUrl("Hola, matrícula"));
    expect(url.protocol).toBe("https:");
    expect(url.hostname).toBe("wa.me");
    expect(url.searchParams.get("text")).toBe("Hola, matrícula");
  });
});
