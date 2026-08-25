import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type PageHeroProps = {
  /** `dark` sobre azul institucional; `light` sobre el fondo claro de matrícula. */
  variant?: "light" | "dark";
  eyebrow?: string;
  eyebrowIcon?: LucideIcon;
  title: ReactNode;
  lead?: ReactNode;
  /** Botones, badges o listas bajo la bajada. */
  children?: ReactNode;
  /** Columna derecha opcional: tarjeta de datos, fotografía, mapa. */
  aside?: ReactNode;
  /** Capas de fondo (imagen, degradado, patrón). Van detrás del contenido. */
  decoration?: ReactNode;
  className?: string;
};

/**
 * Hero único para las páginas interiores. Antes cada página resolvía su propia
 * cabecera —tres tratamientos distintos y ocho escalas de titular—; este
 * componente fija la escala, la retícula y el tratamiento del eyebrow.
 */
export default function PageHero({
  variant = "dark",
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  title,
  lead,
  children,
  aside,
  decoration,
  className = "",
}: PageHeroProps) {
  const dark = variant === "dark";

  return (
    <section
      className={`relative isolate overflow-hidden pb-16 pt-36 sm:pb-20 sm:pt-40 ${
        dark
          ? "bg-primary-dark text-white"
          : "border-b border-border bg-gradient-to-b from-[#fdfbf7] via-surface-sunk to-surface text-ink"
      } ${className}`}
    >
      {decoration}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={
            aside
              ? "grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14"
              : ""
          }
        >
          <div className="max-w-3xl">
            {eyebrow && (
              <p
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] ${
                  dark
                    ? "border border-white/20 bg-white/10 text-white"
                    : "border border-primary/15 bg-surface text-primary"
                }`}
              >
                {EyebrowIcon && (
                  <EyebrowIcon
                    className={`h-4 w-4 ${dark ? "text-accent-on-dark" : "text-primary"}`}
                    aria-hidden="true"
                  />
                )}
                {eyebrow}
              </p>
            )}

            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
              {title}
            </h1>

            {lead && (
              <p
                className={`mt-5 max-w-2xl text-lg leading-relaxed ${
                  dark ? "text-white/80" : "text-muted"
                }`}
              >
                {lead}
              </p>
            )}

            {children && <div className="mt-8">{children}</div>}
          </div>

          {aside && <div className="lg:justify-self-end">{aside}</div>}
        </div>
      </div>
    </section>
  );
}
