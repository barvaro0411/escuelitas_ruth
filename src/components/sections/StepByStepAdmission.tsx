import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { createWhatsAppUrl, siteConfig } from "@/lib/site";

const admissionWhatsAppUrl = createWhatsAppUrl({ source: "admission" });

export interface StepByStepAdmissionProps {
  title?: string;
  subtitle?: string;
  className?: string;
  /**
   * `band` pinta la franja ámbar completa y reserva el ancla `#matricula`.
   * `inline` la deja sin fondo para incrustarla en una página que ya tiene su
   * propio ritmo de color.
   */
  variant?: "band" | "inline";
}

export default function StepByStepAdmission({
  title = "Matrícula 2027 en 3 simples pasos",
  subtitle = "Te acompañamos desde la primera consulta hasta el primer día de clases. Sin trámites difíciles ni cobros sorpresa.",
  className = "",
  variant = "band",
}: StepByStepAdmissionProps) {
  const isBand = variant === "band";

  const steps = [
    {
      number: "1",
      badge: "Primer contacto",
      title: "Escríbenos por WhatsApp",
      description:
        "Indícanos la fecha de nacimiento de tu hijo(a) y la sede que te queda más cerca en Conchalí (Vascongados o Gambino).",
      details: [
        "Respuesta rápida y orientación sin compromiso",
        "Revisamos disponibilidad de cupos en minutos",
        "Te explicamos los requisitos según su edad",
      ],
      icon: MessageCircle,
      actionText: "Consultar por WhatsApp",
      actionHref: admissionWhatsAppUrl,
      isExternal: true,
    },
    {
      number: "2",
      badge: "100% Gratuito en el colegio",
      title: "Evaluación Fonoaudiológica Gratuita",
      description:
        "Vienes con tu pequeño a una sesión lúdica, afectuosa y cercana con nuestras fonoaudiólogas especialistas en lenguaje.",
      details: [
        "Ahorro total: no necesitas pagar consultas externas",
        "Evaluación cálida a través de juegos didácticos",
        "Entrega de diagnóstico e informe oficial sin costo",
      ],
      icon: ClipboardCheck,
      actionText: "Conoce a nuestro equipo",
      actionHref: "/nosotros",
      isExternal: false,
    },
    {
      number: "3",
      badge: "Vacante asegurada",
      title: "Matrícula $0 y Bienvenida",
      description:
        "Con la evaluación lista, formalizamos el ingreso con documentos sencillos (Certificado de Nacimiento para todo trámite).",
      details: [
        "$0 costo: sin matrícula ni mensualidades (MINEDUC)",
        "Útiles escolares y materiales incluidos todo el año",
        "¡Tu hijo inicia su camino hacia un lenguaje feliz!",
      ],
      icon: GraduationCap,
      actionText: "Ver requisitos completos",
      actionHref: "/admision",
      isExternal: false,
    },
  ];

  return (
    <section
      id={isBand ? "matricula" : undefined}
      aria-labelledby="step-by-step-admission-title"
      className={
        isBand
          ? `matricula-band relative isolate scroll-mt-24 overflow-hidden border-y-[3px] border-action-line py-20 sm:py-28 ${className}`
          : `relative overflow-hidden ${className}`
      }
    >
      {/* Ambiente cálido de la franja. El resto del sitio es celeste, así que
          basta muy poca textura para que este bloque se lea distinto. */}
      {isBand && (
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        >
          <div className="dot-pattern-amber absolute inset-0 opacity-50 [mask-image:radial-gradient(68%_58%_at_50%_38%,#000,transparent)]" />
          <div className="absolute -left-24 top-8 h-64 w-64 rounded-full bg-white/70 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#fcd34d]/50 blur-3xl" />
        </div>
      )}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabecera de sección */}
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-dark px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-accent-on-dark shadow-sm">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            <span>Proceso de Admisión Escuelitas Ruth</span>
          </div>
          <h2
            id="step-by-step-admission-title"
            className="mt-5 font-display font-extrabold tracking-tight text-ink text-3xl sm:text-5xl lg:text-6xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/75 sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Tarjetas de los 3 Pasos */}
        <div className="mt-14 grid gap-8 md:grid-cols-3" data-reveal-group>
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.number}
                className="relative flex flex-col justify-between rounded-3xl border border-amber-300/70 bg-white p-6 shadow-[0_12px_32px_-16px_rgba(146,64,14,0.45)] transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400 hover:shadow-[0_22px_44px_-16px_rgba(146,64,14,0.5)] sm:p-8"
              >
                <div>
                  {/* Encabezado de la tarjeta: Número y Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-dark font-display text-2xl font-extrabold text-accent-on-dark ring-4 ring-amber-200/70">
                      {step.number}
                    </div>
                    <span className="rounded-full border border-primary/15 bg-surface-sunk px-3 py-1 text-xs font-extrabold text-primary-dark">
                      {step.badge}
                    </span>
                  </div>

                  {/* Título y descripción */}
                  <h3 className="mt-5 font-display font-extrabold text-ink text-xl sm:text-2xl leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>

                  {/* Puntos destacados con check */}
                  <ul className="mt-6 space-y-2.5 border-t border-amber-200/70 pt-6">
                    {step.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-ink/85 font-semibold"
                      >
                        <CheckCircle2
                          className="h-4 w-4 shrink-0 text-primary mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botón de acción por paso */}
                <div className="mt-8 pt-4">
                  {step.isExternal ? (
                    <a
                      href={step.actionHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-action px-4 py-3.5 text-sm font-extrabold text-action-ink transition-all hover:bg-action-hover focus-visible:ring-4 focus-visible:ring-primary/20 btn-action-glow"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      <span>{step.actionText}</span>
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </a>
                  ) : (
                    <Link
                      href={step.actionHref}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary/25 bg-surface px-4 py-3.5 text-sm font-extrabold text-primary-dark transition-colors hover:border-primary hover:bg-surface-sunk focus-visible:ring-4 focus-visible:ring-primary/20"
                    >
                      <span>{step.actionText}</span>
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Banner de Garantía y Confianza Institucional */}
        <div
          className="mt-12 rounded-3xl bg-primary-dark p-6 shadow-lg shadow-amber-900/10 sm:p-8"
          data-reveal
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-action text-action-ink">
                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-white text-lg sm:text-xl">
                  Garantía 100% Gratuita subvencionada por el Estado de Chile
                  (MINEDUC)
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-white/80 leading-relaxed max-w-3xl">
                  Escuela de Lenguaje Ruth cuenta con reconocimiento oficial (RBD
                  10375-6 y RBD 26106-8). Las familias nunca pagan matrícula,
                  mensualidades ni cuotas de centro de padres obligatorias.
                  Además, todos los materiales educativos son provistos por el
                  colegio.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto">
              <a
                href={admissionWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-action px-6 py-3 text-sm font-extrabold text-action-ink transition-all hover:bg-action-hover focus-visible:ring-4 focus-visible:ring-action/40 btn-action-glow"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Consultar cupos ahora</span>
              </a>
              <a
                href={siteConfig.contact.phone.href}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/40 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/15"
              >
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
                <span>Llamar al colegio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
