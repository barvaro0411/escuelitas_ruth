import { describe, expect, it } from "vitest";
import sitemap from "./sitemap";
import robots from "./robots";
import { siteConfig } from "@/lib/site";
import { familyResources } from "@/content/family-resources";

describe("sitemap", () => {
  const entries = sitemap();

  it("incluye todas las rutas declaradas y los recursos de familias", () => {
    const urls = entries.map((entry) => entry.url);
    for (const route of siteConfig.routes) {
      const expected = `${siteConfig.url}${route === "/" ? "" : route}`;
      expect(urls).toContain(expected);
    }
    for (const resource of familyResources) {
      expect(urls).toContain(
        `${siteConfig.url}/familias/${resource.slug}`,
      );
    }
  });

  it("solo emite URLs absolutas HTTPS sin doble barra", () => {
    for (const entry of entries) {
      expect(entry.url.startsWith("https://")).toBe(true);
      expect(entry.url.slice("https://".length)).not.toContain("//");
    }
  });

  it("da máxima prioridad a la portada y frecuencia semanal a matrículas", () => {
    const home = entries.find((entry) => entry.url === siteConfig.url);
    expect(home?.priority).toBe(1);

    const matriculas = entries.find((entry) =>
      entry.url.endsWith("/matriculas-2027-conchali"),
    );
    expect(matriculas?.changeFrequency).toBe("weekly");
  });

  it("no contiene rutas duplicadas", () => {
    const urls = entries.map((entry) => entry.url);
    expect(new Set(urls).size).toBe(urls.length);
  });
});

describe("robots", () => {
  const rules = robots();

  it("permite el rastreo completo y apunta al sitemap", () => {
    expect(rules.rules).toMatchObject({ userAgent: "*", allow: "/" });
    expect(rules.sitemap).toBe(`${siteConfig.url}/sitemap.xml`);
    expect(rules.host).toBe(siteConfig.url);
  });
});
