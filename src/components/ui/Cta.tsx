import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

/**
 * Tres niveles de compromiso, uno por intención:
 *
 * - `matricular` — ámbar sólido. Es la única acción de alto compromiso y va
 *   como máximo una vez por pantalla. Si aparece ámbar, hay que decidir.
 * - `evaluar` — filete azul. Un paso intermedio: calcular, comparar, ver una
 *   sede. Invita sin pedir nada.
 * - `entender` — enlace de texto. Para quien todavía está averiguando y no
 *   quiere que le pidan nada.
 *
 * Antes todo era el mismo botón ámbar, así que a quien recién llegaba se le
 * pedía lo mismo que a quien ya había decidido.
 */
type Tier = "matricular" | "evaluar" | "entender";

type CtaProps = {
  tier?: Tier;
  href: string;
  children: ReactNode;
  icon?: LucideIcon;
  iconAfter?: LucideIcon;
  /** Sobre azul institucional los niveles 2 y 3 invierten el filete. */
  onDark?: boolean;
  external?: boolean;
  full?: boolean;
  className?: string;
  "aria-label"?: string;
};

const BASE =
  "group inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 cursor-pointer";

function estilo(tier: Tier, onDark: boolean) {
  if (tier === "matricular") {
    return `${BASE} min-h-14 rounded-xl bg-action px-7 py-4 text-base font-extrabold text-action-ink hover:bg-action-hover btn-action-glow`;
  }
  if (tier === "evaluar") {
    return onDark
      ? `${BASE} min-h-14 rounded-xl border border-white/40 bg-white/5 px-6 py-4 text-base text-white hover:bg-white/15 hover:-translate-y-0.5 active:scale-[0.98]`
      : `${BASE} min-h-14 rounded-xl border border-primary/25 bg-surface px-6 py-4 text-base text-primary hover:border-primary hover:bg-surface-sunk btn-primary-glow`;
  }
  return onDark
    ? `${BASE} min-h-11 text-sm text-white/80 hover:text-white hover:underline underline-offset-4`
    : `${BASE} min-h-11 text-sm text-primary hover:text-primary-dark hover:underline underline-offset-4`;
}

export default function Cta({
  tier = "evaluar",
  href,
  children,
  icon: Icon,
  iconAfter: IconAfter,
  onDark = false,
  external = false,
  full = false,
  className = "",
  ...rest
}: CtaProps) {
  const classes = `${estilo(tier, onDark)}${full ? " w-full" : ""} ${className}`;
  const content = (
    <>
      {Icon && <Icon className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />}
      {children}
      {IconAfter && <IconAfter className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />}
    </>
  );

  if (external || href.startsWith("http") || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className={classes}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}
