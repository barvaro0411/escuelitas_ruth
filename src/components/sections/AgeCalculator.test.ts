import { describe, expect, it } from "vitest";
import { calculateEligibility } from "./AgeCalculator";

describe("calculateEligibility", () => {
  it.each([
    ["2024-03-31", "medio-mayor", 3],
    ["2023-03-31", "prekinder", 4],
    ["2022-03-31", "kinder", 5],
  ])("asigna %s al nivel correspondiente", (birthdate, levelId, years) => {
    const result = calculateEligibility(birthdate);
    expect(result).toMatchObject({
      status: "eligible",
      levelId,
      ageAtCutoff: { years },
    });
  });

  it("clasifica como menor a quien cumple tres años después del corte", () => {
    expect(calculateEligibility("2024-04-01")).toMatchObject({
      status: "too_young",
    });
  });

  it("clasifica como mayor a quien ya cumplió seis años al corte", () => {
    expect(calculateEligibility("2021-03-31")).toMatchObject({
      status: "too_old",
    });
  });

  it.each(["", "texto", "2024-02-30", "2028-01-01"])(
    "rechaza la fecha inválida %s",
    (value) => {
      expect(calculateEligibility(value)).toBeNull();
    },
  );
});
