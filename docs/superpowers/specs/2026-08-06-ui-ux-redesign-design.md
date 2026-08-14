# Design Spec: Rediseño UI/UX Completo - Escuelitas Ruth

**Fecha:** 2026-08-06  
**Proyecto:** Escuelitas Ruth (Next.js 16 + React 19 + Tailwind CSS v4)  
**Estado:** Aprobado por el usuario  

---

## 1. Resumen y Objetivos

El objetivo de esta especificación es renovar la experiencia visual (UI) y de usuario (UX) del sitio web de **Escuelitas Ruth**, aplicando principios modernos de diseño web (glassmorphism, profundidad visual, animaciones fluidas, paleta cromática balanceada) y optimizando el embudo de conversión para familias interesadas en matrículas y evaluaciones fonoaudiológicas gratuitas.

### Objetivos Principales:
1. **Modernizar la estética del Hero & Sección Flotante**: Incrementar el impacto visual y la confianza mediante gradientes institucionales, etiquetas vivas (*live badges*) y micro-interacciones.
2. **Introducir un Selector Bento Grid Multi-Sede**: Permitir que los padres identifiquen de inmediato las 4 sedes (*Conchalí, Huechuraba, Renca, Santiago Norte*) y accedan a la información correspondiente con un clic.
3. **Optimizar la Calculadora de Edad**: Facilitar el cálculo del nivel pedagógico (*Medio Mayor, Pre-Kínder, Kínder*) con accesos rápidos por año de nacimiento, animaciones de transición y llamadas a la acción (CTA) dinámicas a WhatsApp.

---

## 2. Sistema de Diseño y Estética Visua

- **Paleta Corporativa**:
  - Azul Institucional Primario: `#1a3baa`, `#2f64e8`, Azul Oscuro: `#102680`
  - Amarillo Marca (Brillante/Acceso): `#f5a700`, `#ffd04d`, `#fff8e1`
  - Verdes de Confirmación: Esmeralda `#10b981` / `#ecfdf5`
- **Tipografía**: Font Nunito / Sans-serif con jerarquía de grosores (`font-black`, `font-extrabold`, `font-bold`).
- **Efectos y Animaciones**:
  - `glass-card`: Fondo translúcido con `backdrop-blur-md` y bordes sutiles en `rgba(255,255,255,0.2)`.
  - `card-hover`: Elevación fluida en estado hover (`transform: translateY(-4px)` y sombras extendidas).
  - `animate-pulse-glow`: Resplandor suave e intermitente para CTAs prioritarios.

---

## 3. Especificación Detallada de Componentes

### Componente 1: Hero Moderno (`src/components/sections/Hero.tsx`)
- **Overlay Dinámico**: Degradado multicapa desde azul oscuro `#102680` a transparente con resplandores dorados blur-3xl en el fondo.
- **Badges de Confianza**: Badge superior amarillo con indicador verde/azul pulsante (`animate-ping`) indicando *"Matrículas 2026 Abiertas"*.
- **Jerarquía de Títulos**: Título H1 amplio con gradiente cromático en las palabras claves (*"desarrollo del lenguaje"*).
- **Lista de Beneficios**: Iconos vectoriales `CheckCircle2` en color amarillo vibrante con texto nítido contrastado.
- **Acciones (CTAs)**:
  - Botón principal de WhatsApp con icono `MessageCircle`, sombra con tinte amarillo y efecto de pulso glow.
  - Botón secundario con efecto cristal (*glassmorphic border*) para navegar al selector de sedes.

### Componente 2: Barra Flotante Bento Grid (`src/components/sections/EnrollmentPush.tsx`)
- Contenedor elevado con margen superior negativo (`-mt-12`), borde sutil de cristal y gradiente azul corporativo.
- Grid de 5 ítems clave: *Dos sedes en Conchalí*, *Jornadas Mañana/Tarde*, *3 a 5 años*, *100% Gratuito*, *Materiales incluidos*.
- Iconos con fondo circular retroiluminado y escalado interactivo en hover.

### Componente 3: Selector Interactivo Multi-Sede (`src/components/sections/SedesSelector.tsx`)
- Nuevo componente destacado ubicado en la página de inicio.
- **Layout Bento Grid**:
  - Tarjeta Principal (Conchalí): Ancho doble, detalle de direcciones (Vascongados y Gral. Gambino), teléfono directo y estado de cupos.
  - Tarjetas de Sedes Regionales (Huechuraba, Renca, Santiago Norte): Diseño compacto con badge de disponibilidad, mapa/icono y enlace a su landing de matrícula.
- Hover elevativo y botón con parámetro de WhatsApp precargado por sede.

### Componente 4: Calculadora de Edad Ilustrada (`src/components/sections/AgeCalculator.tsx`)
- **Panel de Entrada**:
  - Campo de fecha con diseño curvo premium (`rounded-2xl`) y selector nativo optimizado.
  - **Presets de Año de Nacimiento**: Botones de un solo toque `[2020] [2021] [2022] [2023]` que completan automáticamente la fecha estimada.
- **Panel de Resultados**:
  - Animación de entrada fluida al cambiar el cálculo.
  - **Estado Elegible**: Muestra la tarjeta del nivel correspondiente (*Medio Mayor*, *Pre-Kínder* o *Kínder*) con color distintivo, viñetas de beneficio y botón directo de WhatsApp que incluye el nivel calculado en el mensaje.
  - **Estado Orientación**: Mensaje explicativo para niños menores de 3 o mayores de 5 con CTA de orientación personalizada.

---

## 4. Criterios de Accesibilidad y Rendimiento

1. **Accesibilidad (WAI-ARIA)**:
   - Uso de `aria-live="polite"` en el contenedor de resultados de la calculadora.
   - Contrastes cromáticos acordes a las pautas WCAG AA en todos los textos e iconos.
   - Atributos `aria-label` descriptivos en tarjetas completas clicables.
2. **Rendimiento**:
   - Componentes React de cliente (`"use client"`) optimizados sin re-renderizados innecesarios.
   - Optimización de imágenes mediante Next.js `<Image />` con atributos `priority` e `sizes` idóneos.

---

## 5. Próximos Pasos

Una vez validado este documento, se procederá a generar el plan de implementación detallado (`task plan`) paso a paso.
