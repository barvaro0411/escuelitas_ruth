import { describe, expect, it } from "vitest";
import { annualPlanUnits, calendarEvents } from "./school-life";

describe("Plan Anual Oficial (Marzo a Diciembre)", () => {
  it("contiene exactamente las 10 unidades mensuales en orden", () => {
    expect(annualPlanUnits).toHaveLength(10);
    const months = annualPlanUnits.map((u) => u.month);
    expect(months).toEqual([
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ]);
  });

  it("cada unidad tiene objetivos redactados para los 3 niveles", () => {
    for (const unit of annualPlanUnits) {
      expect(unit.unitTitle.length).toBeGreaterThan(5);
      expect(unit.generalObjective.length).toBeGreaterThan(20);
      expect(unit.objectivesByLevel.medioMayor.length).toBeGreaterThanOrEqual(1);
      expect(unit.objectivesByLevel.prekinder.length).toBeGreaterThanOrEqual(1);
      expect(unit.objectivesByLevel.kinder.length).toBeGreaterThanOrEqual(1);

      // Verificamos que los textos no estén vacíos
      for (const obj of unit.objectivesByLevel.medioMayor) {
        expect(obj.trim().length).toBeGreaterThan(5);
      }
      for (const obj of unit.objectivesByLevel.prekinder) {
        expect(obj.trim().length).toBeGreaterThan(5);
      }
      for (const obj of unit.objectivesByLevel.kinder) {
        expect(obj.trim().length).toBeGreaterThan(5);
      }
    }
  });

  it("cada unidad tiene configuración visual y colores accesibles", () => {
    for (const unit of annualPlanUnits) {
      expect(unit.accentColor.badge).toBeDefined();
      expect(unit.accentColor.border).toBeDefined();
      expect(unit.accentColor.header).toBeDefined();
      expect(unit.accentColor.iconBg).toBeDefined();
    }
  });

  it("cada unidad incluye hitos o fechas clave del mes", () => {
    for (const unit of annualPlanUnits) {
      expect(unit.highlights.length).toBeGreaterThanOrEqual(1);
    }
  });
});

describe("Agenda Escolar y Eventos de Calendario", () => {
  it("todos los eventos tienen IDs únicos y fechas ISO válidas", () => {
    const ids = calendarEvents.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);

    const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/;
    for (const event of calendarEvents) {
      expect(event.date).toMatch(isoDateRegex);
      if (event.endDate) {
        expect(event.endDate).toMatch(isoDateRegex);
        expect(event.endDate >= event.date).toBe(true);
      }
      expect(event.title.trim().length).toBeGreaterThan(3);
      expect(event.description?.trim().length ?? 0).toBeGreaterThan(5);
    }
  });

  it("incluye los hitos institucionales obligatorios", () => {
    const titles = calendarEvents.map((e) => e.title);
    expect(titles).toContain("Inicio de Terapias Fonoaudiológicas");
    expect(titles).toContain("Acto Oficial de Fiestas Patrias");
    expect(titles).toContain("Vacaciones de Invierno");
    expect(titles).toContain("Graduación de Kínder y Término de Año");
  });
});
