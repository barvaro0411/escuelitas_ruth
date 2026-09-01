import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/admision",
  "/compartir",
  "/contacto",
  "/familias",
  "/familias/estimular-lenguaje-jugando",
  "/familias/cuando-consultar-fonoaudiologo",
  "/familias/conciencia-fonologica-en-casa",
  "/matriculas-2027-conchali",
  "/matriculas-2027-santiago-norte",
  "/nosotros",
  "/preguntas-frecuentes",
  "/privacidad",
  "/programa-educativo",
  "/sedes",
  "/terminos",
  "/trastorno-especifico-lenguaje",
  "/vida-escolar",
];

test("todas las rutas públicas responden y tienen estructura semántica", async ({
  page,
}) => {
  test.setTimeout(90_000);
  for (const route of routes) {
    const response = await page.goto(route);
    expect(response?.status(), route).toBe(200);
    await expect(page.locator("main#main-content"), route).toBeVisible();
    await expect(page.locator("h1"), route).toHaveCount(1);
    await expect(page).toHaveTitle(
      /Escuela|Escuelitas|TEL|Familias|Términos|Privacidad/i,
    );
  }
});

test("las páginas de comuna consolidadas redirigen a Santiago Norte", async ({
  page,
}) => {
  for (const legacy of [
    "/matriculas-2027-renca",
    "/matriculas-2027-huechuraba",
  ]) {
    const response = await page.goto(legacy);
    expect(response?.status(), legacy).toBe(200);
    expect(new URL(page.url()).pathname, legacy).toBe(
      "/matriculas-2027-santiago-norte",
    );
  }
});

test("los enlaces internos descubiertos no terminan en error", async ({
  page,
  request,
}) => {
  await page.goto("/");
  const hrefs = await page
    .locator('a[href^="/"]')
    .evaluateAll((links) => [
      ...new Set(
        links
          .map(
            (link) =>
              (link as HTMLAnchorElement).getAttribute("href")?.split("#")[0],
          )
          .filter(Boolean),
      ),
    ]);

  for (const href of hrefs) {
    const response = await request.get(href!);
    expect(response.status(), href).toBeLessThan(400);
  }
});

test("las páginas críticas no tienen infracciones serias de accesibilidad", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const route of [
    "/",
    "/contacto",
    "/admision",
    "/trastorno-especifico-lenguaje",
  ]) {
    await page.goto(route);
    await page.waitForTimeout(50);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    const serious = results.violations.filter(
      (violation) =>
        violation.impact === "serious" || violation.impact === "critical",
    );
    expect(
      serious,
      `${route}: ${serious.map((item) => item.id).join(", ")}`,
    ).toEqual([]);
  }
});

test("la calculadora asigna el nivel esperado", async ({ page }) => {
  await page.goto("/");
  await page.getByLabel("Día").selectOption("31");
  await page.getByLabel("Mes").selectOption("3");
  await page.getByLabel("Año").selectOption("2024");
  await page.getByRole("button", { name: /Calcular nivel/ }).click();
  await expect(
    page.getByText("Medio Mayor", { exact: true }).first(),
  ).toBeVisible();
});

test("el formulario informa los campos obligatorios sin enviar datos", async ({
  page,
}) => {
  await page.goto("/contacto");
  await page
    .getByRole("button", { name: "Abrir WhatsApp con mi consulta" })
    .click();
  await expect(page.locator("form [role='alert']")).toHaveCount(3);
});

test("la portada cumple el presupuesto de transferencia", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  const resources = await page.evaluate(() =>
    performance
      .getEntriesByType("resource")
      .map((entry) => entry as PerformanceResourceTiming)
      // Next.js precarga rutas enlazadas en segundo plano. El presupuesto mide
      // los recursos necesarios para presentar la portada, no ese caché futuro.
      .filter((entry) => entry.initiatorType !== "fetch")
      .map((entry) => ({
        name: entry.name,
        bytes: entry.encodedBodySize,
        type: entry.initiatorType,
      }))
      .sort((a, b) => b.bytes - a.bytes),
  );
  const compressedBodyBytes = resources.reduce(
    (total, entry) => total + entry.bytes,
    0,
  );
  expect(compressedBodyBytes).toBeLessThan(2_500_000);
});
