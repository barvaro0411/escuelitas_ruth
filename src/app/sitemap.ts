import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const priorities: Record<string, number> = {
  "/": 1.0,
  "/matriculas-2027-conchali": 0.95,
  "/admision": 0.9,
  "/contacto": 0.9,
  "/trastorno-especifico-lenguaje": 0.9,
  "/matriculas-2027-huechuraba": 0.9,
  "/matriculas-2027-renca": 0.9,
  "/matriculas-2027-santiago-norte": 0.9,
  "/programa-educativo": 0.85,
  "/nosotros": 0.8,
  "/preguntas-frecuentes": 0.8,
  "/vida-escolar": 0.75,
  "/compartir": 0.6,
  "/privacidad": 0.3,
  "/terminos": 0.3,
};

export default function sitemap(): MetadataRoute.Sitemap {
  return siteConfig.routes.map((route) => ({
    url: `${siteConfig.url}${route === "/" ? "" : route}`,
    changeFrequency: route === "/" || route.includes("matriculas") || route === "/admision" || route === "/contacto" ? "weekly" : "monthly",
    priority: priorities[route] ?? 0.7,
  }));
}
