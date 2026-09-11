# Auditoría y renovación de Escuela de Lenguaje Ruth

Fecha: 11 de septiembre de 2026. Alcance: repositorio local y build de producción; no se ha desplegado ni enviado consultas a la escuela.

## Objetivo y criterio editorial

Ayudar a una familia a entender qué ofrece Ruth, reconocer el establecimiento, elegir una sede y consultar por matrícula. Conservar logo, celeste y amarillo; usar las fotografías existentes de la escuela, lenguaje cotidiano y una jerarquía de acciones clara. La identidad debe surgir del equipo, las instalaciones y las prácticas educativas. No fabricar testimonios, resultados clínicos, nombres, cupos ni fechas.

## Método y línea base

- Inspección de App Router, componentes compartidos, datos, configuración, dependencias, metadatos y pruebas.
- `npm test`: 56 pruebas aprobadas, 10 archivos.
- `npm run lint`: 0 errores y 6 advertencias de imports sin uso.
- `npm run build`: correcto, rutas prerenderizadas, Next.js 16.3.1 / React 19.2.4.
- `npm audit --omit=dev`: 2 paquetes vulnerables: Next.js (crítico) y sharp (alto).
- Navegación y axe WCAG A/AA a 1440×900 y 390×844; menú comprobado también a 390×568.
- Script reproducible: `scripts/audit-site.mjs`. Evidencia local en `test-results/audit-before/`; capturas adicionales `audit-before-*.png`.
- Transferencia inicial de recursos de portada: 421.419 bytes en escritorio y 360.047 en móvil. Excluye HTML principal y prefetch de rutas; no equivale a Lighthouse ni a Core Web Vitals de usuarios reales.

## Hallazgos priorizados

| Prioridad | Área | Evidencia y efecto | Acción |
| --- | --- | --- | --- |
| P0 | Seguridad | Next 16.3.1 y sharp afectados según auditoría de npm. | Actualizar parches compatibles, reconstruir y volver a auditar. |
| P1 | Consultas | `ContactoClient` interpreta el retorno nulo de `window.open(..., 'noopener,noreferrer')` como bloqueo. Ese retorno es normal con noopener. | Preparar mensaje con enlace explícito de continuación; validación y alternativa de correo equivalentes. |
| P1 | Móvil | `Header` limita menú a 580 px, oculta desbordamiento y bloquea el scroll del cuerpo. Los últimos enlaces quedan inaccesibles con pantalla corta. | Panel desplazable ajustado al viewport, cierre con Escape, gestión del foco y cambio a escritorio. |
| P1 | Formulario | Expresión de teléfono acepta 8 espacios o guiones; fecha opcional sin validación de formulario; correo evita validación y consentimiento. | Validar dígitos, fechas y consentimiento para ambos canales. |
| P1 | Accesibilidad | Axe detecta contraste insuficiente en Programa Educativo y Vida Escolar, fuera del conjunto de 4 rutas de pruebas original. | Corregir colores reales y ampliar cobertura de navegación/contraste. |
| P1 | Confianza | Pasos de admisión prometen “Vacante asegurada”, disponibilidad “en minutos” y calculadora dice “Cumple los requisitos” solo con la edad. | Explicar disponibilidad y evaluación sin garantizar admisión; conservar reglas de edad. |
| P1 | Identidad visual | Hero oscuro con foto genérica y texto encima; fotografía del equipo disponible pero poco aprovechada; sucesión de tarjetas, chips y CTA casi idénticos. | Portada editorial con foto de equipo, colores de Ruth, menos repeticiones y tamaños legibles. |
| P1 | Conversión móvil | Contacto muestra primero un bloque largo de direcciones y redes; formulario queda más abajo. Menú no destaca a la escuela/equipo. | Formulario primero en móvil y acceso directo a conocer la escuela. |
| P2 | SEO/contenido | FAQ duplicada entre `page.tsx` y `FAQPreview` con diferencias de texto. Niveles/edades duplicados en varias páginas. | FAQ compartida para HTML y JSON-LD; niveles derivados de `school-data`. |
| P2 | Fechas/hidratación | `ImportantDates` calcula “hoy” al renderizar un componente cliente prerenderizado. Al cambiar el día desde el build puede diferir servidor/navegador. | Reloj de cliente con instantánea de servidor estable y relectura de fecha. |
| P2 | Mantenimiento | Lenis instalado pero sin uso; `SmoothScroll` y `ScrollReveal` globales redundantes; seis imports innecesarios. | Retirar código sin consumidores y conservar scroll nativo respetuoso de movimiento reducido. |
| P2 | Galería | Los filtros no anuncian selección; avanzar cambia el elemento que se usa para devolver foco al cerrar. | `aria-pressed`, contador anunciado y foco de regreso al botón original. |
| P2 | Medición | Eventos por página pero sin ubicación del CTA; apertura de WhatsApp se denomina submit aunque no acredita recepción. | Diferenciar preparación de consulta y clic de salida; registrar ubicación sin datos personales. |
| P3 | Contenido institucional | `teamMembers` y testimonios vacíos. Hay afirmaciones sobre credenciales sin documentación vinculada en el repo. | Dirección debe aportar perfiles, autorizaciones y respaldo antes de publicar afirmaciones nuevas. |

## Arquitectura y calidad

Next.js App Router está bien elegido para un sitio institucional. Las rutas son estáticas, los componentes de servidor cubren gran parte del contenido y los componentes cliente resuelven calculadora, filtros y formularios. No hay API, base de datos ni sistema de matrículas: la conversión termina en un enlace externo a WhatsApp, correo o teléfono. Esta arquitectura reduce mantenimiento; no hace falta incorporar un CMS o backend para mejorar la web actual.

`src/content/school-data.ts` centraliza sedes, RBD, edades, jornadas y fecha de corte. `src/lib/site.ts` centraliza canales, sanitización de mensajes y JSON-LD. Conviene extender esa consistencia a las FAQ y al resumen de niveles. El plan anual mezcla contenido y clases de presentación: se conserva por compatibilidad, pero merece separación si crece. El sitio cuenta con error boundary, 404, TypeScript, lint, Vitest y Playwright. Las pruebas iniciales del formulario cubren únicamente el envío vacío; faltan recorridos válidos y estados del menú/galería.

## Diseño y experiencia

La paleta institucional es reconocible. La repetición de insignias, degradados, sombras, iconos genéricos y frases publicitarias compite con la información escolar. La portada es demasiado extensa en móvil para repetir horarios, gratuidad y niveles en varias tarjetas. Propuesta: presentación breve con equipo → sedes → niveles y calculadora → pasos de ingreso → vida escolar/agenda → dudas → contacto. Usar pies de foto descriptivos y enlaces que indiquen el destino; no etiquetas defensivas como “Foto real”.

La consulta principal debe verse antes de desplazarse en 390×844. Los controles deben ser utilizables con teclado, ampliación y pantallas cortas; los formularios deben comunicar errores junto al campo y no atribuir éxito a un envío externo que la web no puede confirmar.

## Rendimiento y accesibilidad

Se utilizan `next/image`, tamaños responsivos, formatos modernos y fuentes locales generadas por `next/font`. Los originales más grandes rondan 800 KB pero se sirven optimizados; el tamaño del archivo original no es la transferencia del visitante. Se mantendrá prerenderizado e imágenes con espacio reservado, priorizando solo la imagen principal. El presupuesto E2E original de 2,5 MB es amplio frente al peso medido y puede detectar únicamente regresiones grandes.

Hay enlace para saltar al contenido, idioma `es-CL`, un H1 por ruta, formularios etiquetados, Escape en galería y estilos para movimiento reducido. Falta comprobar los estados interactivos y las rutas fuera del grupo inicial de axe. La aprobación automatizada no certifica accesibilidad completa ni sustituye una sesión con lector de pantalla o pruebas en Safari/iPhone real.

## SEO local

Se conservan dominio canónico `https://escuelitasruth.cl`, sitemap, robots, metadatos por página, Open Graph, breadcrumbs, redirecciones de dominios y consolidación de páginas de comunas. No crear páginas casi idénticas para cada barrio. Las sedes deben mantener nombre, dirección, teléfono y RBD coherentes. La portada debe nombrar la escuela y Conchalí de forma natural. Compartir fuente de FAQ evita divergencias entre contenido visible y marcado. Los slugs con 2027 requieren redirecciones y revisión editorial en el cambio anual; cambiar solo una constante no basta.

No se han inspeccionado Search Console, ficha de Google, indexación efectiva, enlaces externos, posiciones, conversiones ni configuración de producción. No atribuir mejoras de ranking a cambios locales.

## Seguridad y privacidad

La CSP, `nosniff`, bloqueo de frames, política de referencia, restricciones de permisos y HSTS están configurados. JSON-LD escapa `<` y separadores Unicode; los mensajes limitan longitud y eliminan caracteres de control. No hay subida de archivos ni credenciales necesarias para este sitio. CSP permite scripts inline para prerenderizado: es una limitación conocida; nonces por respuesta cambiarían el modelo de renderizado y no se incorporan sin necesidad. No se ejecutan pruebas de explotación.

Fuentes de las alertas: [Next.js en Windows](https://github.com/advisories/GHSA-p293-qw3h-jr36), [optimizador AVIF](https://github.com/advisories/GHSA-2xp9-vwfh-vxw4), [sharp/libheif](https://github.com/advisories/GHSA-rgj7-g3m4-5g8c). Referencia del falso bloqueo: [Window.open y noopener](https://developer.mozilla.org/en-US/docs/Web/API/Window/open).

La fecha de nacimiento es opcional y los datos no deben incorporarse a analítica ni URL internas. La vía correo debe respetar el mismo consentimiento que WhatsApp. Se conserva el proveedor de medición existente. La escuela debe validar textos clínicos, autorizaciones de imagen y política de privacidad según `docs/content-governance.md`; este trabajo no certifica cumplimiento legal o clínico.

## Etapas de implementación y aceptación

1. **Base segura y consultas:** actualizar parches, reparar validación y salida del formulario, probar ambos canales sin enviar mensajes reales. Aceptación: auditoría sin alertas, tests/build correctos.
2. **Identidad y móvil:** renovar portada y navegación, simplificar sedes/niveles/pasos, adelantar contacto en móvil. Aceptación: capturas escritorio/móvil, menú corto y teclado, calculadora y enlaces funcionales.
3. **Consistencia y accesibilidad:** FAQ compartida, reloj estable, galería y contrastes; retirar código muerto, mejorar atribución de clics. Aceptación: todas las rutas, axe, sin errores de hidratación y presupuesto de recursos.
4. **Cierre técnico:** suite completa, revisión de diff y registro de resultados. Entrega local lista para revisión. Pendiente externo: autorización editorial y publicación, más medición real de consultas/matrículas después del despliegue.

Cada etapa agrupa cambios relacionados y se comprueba antes de avanzar. Los resultados finales y límites se registrarán al final de este documento.
