import { describe, expect, it } from "vitest";
import {
  admissionCutoff,
  campuses,
  gambinoGallery,
  schoolLevels,
  vascongadosGallery,
} from "./school-data";

describe("Datos Institucionales de Sedes y RBDs", () => {
  it("define exactamente las 2 sedes de Conchalí", () => {
    expect(campuses).toHaveLength(2);
    const ids = campuses.map((c) => c.id);
    expect(ids).toContain("vascongados");
    expect(ids).toContain("gambino");
  });

  it("asigna los RBD oficiales exactos a cada sede", () => {
    const vascongados = campuses.find((c) => c.id === "vascongados");
    const gambino = campuses.find((c) => c.id === "gambino");

    expect(vascongados).toBeDefined();
    expect(vascongados?.rbd).toBe("26106-8");
    expect(vascongados?.address).toContain("Vascongados 4314");

    expect(gambino).toBeDefined();
    expect(gambino?.rbd).toBe("10375-6");
    expect(gambino?.address).toContain("Gral. Gambino 4613");
  });

  it("ambas sedes están en Conchalí con código postal y coordenadas válidas", () => {
    for (const campus of campuses) {
      expect(campus.locality).toBe("Conchalí");
      expect(campus.region).toBe("Región Metropolitana");
      expect(campus.country).toBe("CL");
      expect(campus.postalCode).toBe("8540000");

      // Coordenadas válidas en el sector norte de Santiago
      expect(campus.geo.latitude).toBeLessThan(-33.0);
      expect(campus.geo.latitude).toBeGreaterThan(-34.0);
      expect(campus.geo.longitude).toBeLessThan(-70.0);
      expect(campus.geo.longitude).toBeGreaterThan(-71.0);
    }
  });

  it("ambas sedes imparten los 3 niveles en ambas jornadas", () => {
    for (const campus of campuses) {
      expect(campus.levelIds).toEqual(["medio-mayor", "prekinder", "kinder"]);
      expect(campus.journeys).toContain("Mañana");
      expect(campus.journeys).toContain("Tarde");
    }
  });

  it("define los 3 niveles educativos con sus edades reglamentarias", () => {
    expect(schoolLevels).toHaveLength(3);
    const mm = schoolLevels.find((l) => l.id === "medio-mayor");
    const pk = schoolLevels.find((l) => l.id === "prekinder");
    const kd = schoolLevels.find((l) => l.id === "kinder");

    expect(mm?.ageYears).toBe(3);
    expect(pk?.ageYears).toBe(4);
    expect(kd?.ageYears).toBe(5);
  });

  it("ambas galerías de sedes tienen fotografías con textos descriptivos válidos", () => {
    expect(vascongadosGallery.length).toBeGreaterThanOrEqual(3);
    expect(gambinoGallery.length).toBeGreaterThanOrEqual(3);

    for (const img of [...vascongadosGallery, ...gambinoGallery]) {
      expect(img.src.startsWith("/")).toBe(true);
      expect(img.alt.trim().length).toBeGreaterThan(10);
      expect(img.title.trim().length).toBeGreaterThan(3);
    }
  });
});
