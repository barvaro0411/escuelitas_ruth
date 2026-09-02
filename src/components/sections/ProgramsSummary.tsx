import Link from "next/link";
import {
  ArrowRight,
  Baby,
  CheckCircle2,
  GraduationCap,
  MessageCircle,
  Sparkles,
  Users2,
} from "lucide-react";
import { createWhatsAppUrl } from "@/lib/site";

const programs = [
  {
    title: "Medio Mayor",
    age: "3 años cumplidos",
    ageCutoff: "Al 31 de marzo de 2027",
    category: "Estimulación temprana",
    description:
      "Desarrollo temprano del habla, incremento de vocabulario y expresión mediante el juego guiado y estimulación sensorial.",
    features: [
      "Juego guiado y estimulación del habla",
      "Intervención fonoaudiológica sin costo",
      "Jornadas Mañana (08:15–12:15) y Tarde (13:30–17:15)",
    ],
    icon: Baby,
    badgeColor: "bg-primary/10 text-primary border-primary/20",
    borderTop: "border-t-4 border-t-primary",
  },
  {
    title: "Pre-Kínder (NT1)",
    age: "4 años cumplidos",
    ageCutoff: "Al 31 de marzo de 2027",
    category: "Lenguaje y socialización",
    description:
      "Estructuración de oraciones, habilidades de interacción con pares y desarrollo de la autonomía en un entorno cálido.",
    features: [
      "Estructuración de frases y pronunciación",
      "Rutinas escolares y socialización con pares",
      "Jornadas Mañana (08:15–12:15) y Tarde (13:30–17:15)",
    ],
    icon: Users2,
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    borderTop: "border-t-4 border-t-action",
  },
  {
    title: "Kínder (NT2)",
    age: "5 años cumplidos",
    ageCutoff: "Al 31 de marzo de 2027",
    category: "Transición a Básica",
    description:
      "Preparación integral para primero básico con énfasis en conciencia fonológica, habilidades pre-lectoras y seguridad.",
    features: [
      "Conciencia fonológica y pre-lectura",
      "Preparación y seguridad para 1° Básico",
      "Acompañamiento fonoaudiológico continuo",
    ],
    icon: GraduationCap,
    badgeColor: "bg-primary/10 text-primary border-primary/20",
    borderTop: "border-t-4 border-t-primary-dark",
  },
];

export default function ProgramsSummary() {
  return (
    <section className="border-b border-border bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-primary mb-3">
              <Sparkles className="h-3.5 w-3.5 text-action" aria-hidden="true" />
              Niveles educativos 2027
            </div>
            <h2 className="font-display font-extrabold leading-tight text-ink text-3xl sm:text-4xl">
              Acompañamiento especializado según la edad de tu hijo
            </h2>
            <p className="mt-2 text-base text-muted leading-relaxed">
              Educación parvularia y apoyo fonoaudiológico 100% gratuito (sin
              matrícula ni mensualidades) en Conchalí.
            </p>
          </div>
          <Link
            href="/programa-educativo"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark transition-colors self-start sm:self-auto"
          >
            Ver modelo pedagógico completo
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((program) => {
            const whatsappUrl = createWhatsAppUrl({
              source: "level",
              level: program.title,
            });

            return (
              <article
                key={program.title}
                className={`group flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 sm:p-7 shadow-xs card-interactive ${program.borderTop}`}
              >
                <div>
                  {/* Top Bar: Icono + Categoría */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                      <program.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span
                      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-extrabold ${program.badgeColor}`}
                    >
                      {program.age}
                    </span>
                  </div>

                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-muted">
                    {program.category}
                  </span>

                  <h3 className="mt-1 font-display font-extrabold text-ink text-2xl">
                    {program.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {program.description}
                  </p>

                  <div className="mt-6 border-t border-border/60 pt-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                      Qué incluye:
                    </p>
                    <ul className="space-y-2.5">
                      {program.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-xs font-semibold text-ink/80 leading-snug"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
                            aria-hidden="true"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 space-y-3 border-t border-border/60 pt-5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-action px-4 py-3 text-xs sm:text-sm font-extrabold text-primary-dark transition-all hover:bg-action-hover active:scale-[0.98] btn-action-glow text-center cursor-pointer"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>Consultar cupos {program.title}</span>
                  </a>

                  <Link
                    href="/programa-educativo"
                    className="group/link inline-flex w-full items-center justify-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark transition-colors py-1"
                  >
                    <span>Conocer este nivel en detalle</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
