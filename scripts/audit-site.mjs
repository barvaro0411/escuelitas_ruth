import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { mkdir, writeFile } from 'node:fs/promises';

// Read-only browser audit. Contact destinations are never opened or submitted.
const baseURL = process.env.AUDIT_URL || 'http://127.0.0.1:3100';
const label = process.argv[2] || 'current';
if (!/^[a-z0-9-]+$/.test(label)) throw new Error('Invalid audit label');
const browser = await chromium.launch({
  channel: process.env.PLAYWRIGHT_CHANNEL || undefined,
});
const routes = ['/', '/admision', '/contacto', '/sedes', '/nosotros',
  '/programa-educativo', '/vida-escolar', '/familias',
  '/familias/estimular-lenguaje-jugando', '/familias/cuando-consultar-fonoaudiologo',
  '/familias/conciencia-fonologica-en-casa', '/preguntas-frecuentes',
  '/matriculas-2027-conchali', '/matriculas-2027-santiago-norte',
  '/trastorno-especifico-lenguaje', '/privacidad', '/terminos', '/compartir'];
const output = `test-results/audit-${label}`;
await mkdir(output, { recursive: true });
const report = [];
try {
  for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
    const context = await browser.newContext({ baseURL, viewport, reducedMotion: 'reduce' });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    for (const route of routes) {
      errors.length = 0;
      const response = await page.goto(route);
      await page.waitForLoadState('networkidle');
      const data = await page.evaluate(() => ({
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.content,
        canonical: document.querySelector('link[rel="canonical"]')?.href,
        h1: [...document.querySelectorAll('h1')].map(h => h.textContent),
        width: document.documentElement.scrollWidth,
        viewport: innerWidth,
        height: document.documentElement.scrollHeight,
        imageErrors: [...document.images].filter(i => i.complete && !i.naturalWidth).map(i => i.src),
        resources: performance.getEntriesByType('resource')
          .filter(r => r.initiatorType !== 'fetch')
          .reduce((sum, r) => sum + (r.encodedBodySize || 0), 0),
      }));
      const axe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
      const violations = axe.violations.map(v => ({
        id: v.id, impact: v.impact, nodes: v.nodes.map(n => n.target),
      }));
      report.push({ route, viewport, status: response.status(), ...data, errors: [...errors], violations });
      if (['/', '/contacto'].includes(route)) {
        await page.screenshot({ path: `${output}/${route === '/' ? 'home' : 'contact'}-${viewport.width}.png`, fullPage: true });
      }
      console.log(JSON.stringify({ route, width: viewport.width, status: response.status(), overflow: data.width > data.viewport, bytes: data.resources, violations: violations.map(v => v.id), errors }));
    }
    await context.close();
  }
  await writeFile(`${output}/report.json`, JSON.stringify(report, null, 2));
} finally {
  await browser.close();
}
