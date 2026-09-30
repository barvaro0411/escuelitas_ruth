import Link from "next/link";
import { ArrowRight, Baby, GraduationCap, MessageCircle, Users2 } from "lucide-react";
import { admissionCutoff, schoolLevels } from "@/content/school-data";
import { createWhatsAppUrl } from "@/lib/site";

const learningFocus = {
  "medio-mayor": {
    icon: Baby,
    description: "Juego guiado para ampliar el vocabulario, la comprensión y la expresión oral.",
  },
  prekinder: {
    icon: Users2,
    description: "Lenguaje, socialización y autonomía a través de actividades con sus pares.",
  },
  kinder: {
    icon: GraduationCap,
    description: "Conciencia fonológica y habilidades para una transición acompañada a primero básico.",
  },
};

export default function ProgramsSummary() {
  return (
    <section data-cta="niveles" className="border-b border-border bg-surface-sunk py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 max-w-2xl" data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Niveles educativos {admissionCutoff.year}
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Un nivel para cada etapa
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Edad cumplida al {admissionCutoff.label}. En ambas sedes, con jornadas de mañana y tarde.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3" data-reveal-group>
          {schoolLevels.map((level) => {
            const focus = learningFocus[level.id];
            const Icon = focus.icon;
            return (
              <article key={level.id} className="flex flex-col rounded-2xl border border-border bg-surface p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <Icon className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-xl font-extrabold text-ink">{level.name}</h3>
                    <p className="text-sm font-semibold text-primary">{level.ageYears} años cumplidos</p>
                  </div>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{focus.description}</p>
                <a
                  href={createWhatsAppUrl({ source: "level", level: level.name })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-action px-3 py-3 text-sm font-extrabold text-action-ink transition-colors hover:bg-action-hover"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Consultar cupos {level.name}
                </a>
              </article>
            );
          })}
        </div>
        <Link href="/programa-educativo#niveles" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark">
          Conocer el programa y los niveles en detalle
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
