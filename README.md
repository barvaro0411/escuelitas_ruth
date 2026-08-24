# Escuelitas Ruth

Sitio institucional de la Escuela de Lenguaje Ruth, construido con Next.js 16, React 19 y Tailwind CSS 4.

## Desarrollo

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Comandos

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
npm run verify
npm run start
```

## Estructura

- `src/app`: rutas del sitio con App Router.
- `src/components/layout`: header y footer.
- `src/components/sections`: secciones reutilizadas en la portada.
- `src/components/ui`: componentes de interfaz compartidos.
- `src/lib/site.ts`: datos de contacto, rutas, WhatsApp y JSON-LD.
- `public`: imágenes y assets estáticos.

## Notas

El sitio prioriza consultas de matrícula 2027 por WhatsApp, páginas estáticas optimizadas para SEO local y metadata declarativa de Next.js.

## Configuración

Copiar `.env.example` a `.env.local` y definir el dominio HTTPS público. Sin esta variable se utiliza temporalmente el dominio de Vercel documentado en `src/lib/site.ts`.

El build estable usa Webpack. `npm run build:turbo` permite comprobar Turbopack por separado mientras se investiga su incompatibilidad con algunos entornos restringidos.

Las pruebas E2E requieren Chromium. Instalarlo una vez con `npx playwright install chromium`. El CI instala además sus dependencias del sistema.

## Mantenimiento anual

El año y la fecha de corte de admisión se configuran en `src/content/school-data.ts`. Después de modificarlos se deben ejecutar lint, typecheck, tests y build, además de revisar textos editoriales y páginas de matrícula cuyo slug contiene el año.

La revisión y aprobación de contenidos legales y clínicos se registra siguiendo `docs/content-governance.md`.
