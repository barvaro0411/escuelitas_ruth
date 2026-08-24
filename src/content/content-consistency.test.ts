import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { admissionCutoff, birthdateInputBounds } from "./school-data";

describe("consistencia editorial anual", () => {
  it("deriva los límites de nacimiento de la fecha de admisión", () => {
    expect(birthdateInputBounds.max).toBe(admissionCutoff.isoDate);
    expect(birthdateInputBounds.min).toBe(`${admissionCutoff.year - 8}-01-01`);
  });

  it("el README anuncia el mismo año configurado", () => {
    const readme = readFileSync(new URL("../../README.md", import.meta.url), "utf8");
    expect(readme).toContain(`matrícula ${admissionCutoff.year}`);
    expect(readme).not.toContain(`matrícula ${admissionCutoff.year - 1}`);
  });
});
