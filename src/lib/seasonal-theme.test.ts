import { describe, expect, it } from "vitest";
import { getActiveSeasonalTheme } from "./seasonal-theme";

describe("getActiveSeasonalTheme", () => {
  it("no activa temas deshabilitados", () => {
    expect(
      getActiveSeasonalTheme(new Date("2026-09-18T12:00:00Z")),
    ).toBeNull();
  });

  it("no activa un tema fuera de su ventana", () => {
    expect(getActiveSeasonalTheme(new Date("2026-10-01T12:00:00Z"))).toBeNull();
  });
});
