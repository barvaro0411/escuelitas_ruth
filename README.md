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
npm run build
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

El sitio prioriza consultas de matrícula 2026 por WhatsApp, páginas estáticas optimizadas para SEO local y metadata declarativa de Next.js.
