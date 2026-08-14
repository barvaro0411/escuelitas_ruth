# UI/UX Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the full UI/UX redesign for Escuelitas Ruth including Hero section enhancements, EnrollmentPush floating highlights, a new Bento Grid Multi-Sede selector, and an interactive Age Calculator with quick year presets and animated states.

**Architecture:** Component-driven updates using Next.js 16 (App Router), React 19, Lucide icons, and Tailwind CSS v4 design tokens defined in `globals.css`.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, Lucide React, Sonner.

## Global Constraints

- Preserve all existing routes (`/matriculas-2027-conchali`, `/matriculas-2027-huechuraba`, `/matriculas-2027-renca`, `/matriculas-2027-santiago-norte`).
- Maintain accessibility standards (contrast ratios, `aria-live` regions, keyboard focus styles).
- Ensure 0 build or lint errors (`npm run build`).

---

### Task 1: Rediseñar Hero y EnrollmentPush Highlights

**Files:**
- Modify: `src/components/sections/Hero.tsx`
- Modify: `src/components/sections/EnrollmentPush.tsx`

**Interfaces:**
- Consumes: `buildWhatsAppUrl` from `@/lib/site`, Lucide icons.
- Produces: Enhanced visual Hero and Floating Highlights component.

- [ ] **Step 1: Update Hero component with multi-layer overlays and glassmorphism badges**

Edit `src/components/sections/Hero.tsx` to add live badges, high-contrast gradient title text, enhanced benefits checkmark cards, and pulsing glow CTAs.

- [ ] **Step 2: Update EnrollmentPush floating Bento card**

Edit `src/components/sections/EnrollmentPush.tsx` to add interactive hover scales, subtle glass borders, and responsive grid layout.

- [ ] **Step 3: Verify Hero and EnrollmentPush rendering**

Run build or check TypeScript compiler: `npx tsc --noEmit`
Expected: 0 errors.

---

### Task 2: Crear e Integrar Componente Multi-Sede Bento Grid (`SedesSelector.tsx`)

**Files:**
- Create: `src/components/sections/SedesSelector.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: Next.js `Link`, Lucide icons, `buildWhatsAppUrl` from `@/lib/site`.
- Produces: `SedesSelector` component exported as default function.

- [ ] **Step 1: Create `src/components/sections/SedesSelector.tsx`**

Build the Bento Grid component displaying Conchalí (featured main card with Vascongados & Gral. Gambino addresses) alongside Huechuraba, Renca, and Santiago Norte cards with status badges and direct action buttons.

- [ ] **Step 2: Integrate `SedesSelector` in `src/app/page.tsx`**

Import and place `<SedesSelector />` into `src/app/page.tsx` between `ProgramsSummary` and `HowWeWork`.

- [ ] **Step 3: Run TypeScript check**

Run: `npx tsc --noEmit`
Expected: PASS with 0 errors.

---

### Task 3: Rediseñar la Calculadora de Edad (`AgeCalculator.tsx`)

**Files:**
- Modify: `src/components/sections/AgeCalculator.tsx`

**Interfaces:**
- Consumes: React `useState`, `calculateEligibility` helper function, `buildWhatsAppUrl`.
- Produces: High-engagement interactive age calculator with year presets and animated result cards.

- [ ] **Step 1: Add quick year preset buttons to `AgeCalculator.tsx`**

Add year preset buttons (`2020`, `2021`, `2022`, `2023`) that set a representative birthdate with a single click (`2020-05-15`, etc.).

- [ ] **Step 2: Enhance result card visualization**

Update the right column with animated borders, esmeralda checkmarks for eligible status, and dynamic WhatsApp button parameters.

- [ ] **Step 3: Run TypeScript check**

Run: `npx tsc --noEmit`
Expected: PASS with 0 errors.

---

### Task 4: Verificación Final y Build de Producción

**Files:**
- All modified files.

- [ ] **Step 1: Run full lint & build checks**

Run: `npm run build`
Expected: Clean build output with zero errors.
