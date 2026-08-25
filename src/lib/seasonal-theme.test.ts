import { describe, expect, it } from "vitest";
import { getActiveSeasonalTheme } from "./seasonal-theme";

describe("getActiveSeasonalTheme", () => {
  it("activa Fiestas Patrias dentro de la ventana configurada", () => {
    expect(getActiveSeasonalTheme(new Date("2026-09-18T12:00:00Z"))).toBe(
      "fiestas-patrias",
    );
  });

  it("no activa un tema fuera de su ventana", () => {
    expect(getActiveSeasonalTheme(new Date("2026-10-01T12:00:00Z"))).toBeNull();
  });
});
