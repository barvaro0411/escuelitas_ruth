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
}

export default function StepByStepAdmission({
  title = "Matrícula 2027 en 3 simples pasos",
  subtitle = "Te acompañamos desde la primera consulta hasta el primer día de clases. Sin trámites difíciles ni cobros sorpresa.",
  className = "",
}: StepByStepAdmissionProps) {
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
      cardAccent: "border-primary/30 hover:border-primary",
      badgeBg: "bg-surface-sunk text-primary-dark",
      numberBg: "bg-primary text-white",
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
      cardAccent: "border-amber-300 hover:border-amber-400",
      badgeBg: "bg-amber-100 text-amber-900",
      numberBg: "bg-amber-500 text-amber-950",
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
      cardAccent: "border-emerald-300 hover:border-emerald-400",
      badgeBg: "bg-emerald-100 text-emerald-900",
      numberBg: "bg-emerald-600 text-white",
    },
  ];

  return (
    <section
      aria-labelledby="step-by-step-admission-title"
      className={`relative overflow-hidden border-b border-border bg-paper py-18 sm:py-24 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabecera de sección */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-surface px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-primary shadow-xs">
            <Sparkles className="h-4 w-4 text-amber-500" aria-hidden="true" />
            <span>Proceso de Admisión Escuelitas Ruth</span>
          </div>
          <h2
            id="step-by-step-admission-title"
            className="mt-4 font-display font-extrabold tracking-tight text-ink text-3xl sm:text-4xl lg:text-5xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Tarjetas de los 3 Pasos */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.number}
                className={`relative flex flex-col justify-between rounded-3xl border-2 bg-surface p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${step.cardAccent}`}
              >
                <div>
                  {/* Encabezado de la tarjeta: Número y Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl font-display text-xl font-extrabold shadow-xs ${step.numberBg}`}
                    >
                      {step.number}
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-extrabold ${step.badgeBg}`}
                    >
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
                  <ul className="mt-6 space-y-2.5 border-t border-border/60 pt-6">
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
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-extrabold text-white shadow-xs transition-colors hover:bg-primary-dark focus-visible:ring-4 focus-visible:ring-primary/20"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      <span>{step.actionText}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </a>
                  ) : (
                    <Link
                      href={step.actionHref}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface-sunk/40 px-4 py-3 text-sm font-extrabold text-primary-dark transition-colors hover:border-primary/40 hover:bg-surface-sunk focus-visible:ring-4 focus-visible:ring-primary/20"
                    >
                      <span>{step.actionText}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Banner de Garantía y Confianza Institucional */}
        <div className="mt-12 rounded-3xl border-2 border-primary/20 bg-surface-sunk/60 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-xs">
                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-display font-extrabold text-ink text-lg sm:text-xl">
                  Garantía 100% Gratuita subvencionada por el Estado de Chile (MINEDUC)
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-muted leading-relaxed max-w-3xl">
                  Escuela de Lenguaje Ruth cuenta con reconocimiento oficial (RBD 10375-6 y RBD 26106-8). Las familias nunca pagan matrícula, mensualidades ni cuotas de centro de padres obligatorias. Además, todos los materiales educativos son provistos por el colegio.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto">
              <a
                href={admissionWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-action px-6 py-3 text-sm font-extrabold text-primary-dark shadow-xs transition-all hover:bg-action-hover focus-visible:ring-4 focus-visible:ring-action/40"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Consultar cupos ahora</span>
              </a>
              <a
                href={siteConfig.contact.phone.href}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-bold text-ink transition-colors hover:bg-surface-sunk"
              >
                <PhoneCall className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>Llamar al colegio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
