import { describe, expect, it } from "vitest";
import { buildChecklistSummary } from "./SpeechChecklist";

describe("guía orientativa de señales del habla", () => {
  it("devuelve cadena vacía cuando no hay señales seleccionadas", () => {
    expect(buildChecklistSummary([])).toBe("");
  });

  it("ordena y formatea las señales seleccionadas para la consulta", () => {
    expect(buildChecklistSummary(["frases", "pronunciacion"])).toBe(
      "pronunciación, armar frases",
    );
  });
});
