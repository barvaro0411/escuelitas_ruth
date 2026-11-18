import Link from "next/link";
import { ArrowRight, Baby, Clock, GraduationCap, MessageCircle, Users2 } from "lucide-react";
import { admissionCutoff, schoolLevels } from "@/content/school-data";
import { createWhatsAppUrl } from "@/lib/site";

const learningFocus = {
  "medio-mayor": {
    icon: Baby,
    topBar: "from-sky-400 to-cyan-500",
    iconBg: "bg-sky-100 text-sky-700",
    badge: "bg-sky-50 text-sky-800 border-sky-200",
    stage: "Etapa 1",
    description: "Juego guiado para ampliar el vocabulario, la comprensión y la expresión oral.",
  },
  prekinder: {
    icon: Users2,
    topBar: "from-amber-400 to-yellow-500",
    iconBg: "bg-amber-100 text-amber-800",
    badge: "bg-amber-50 text-amber-900 border-amber-200",
    stage: "Etapa 2",
    description: "Lenguaje, socialización y autonomía a través de actividades con sus pares.",
  },
  kinder: {
    icon: GraduationCap,
    topBar: "from-primary to-primary-dark",
    iconBg: "bg-primary/12 text-primary-dark",
    badge: "bg-surface-sunk text-primary-dark border-border",
    stage: "Etapa 3",
    description: "Conciencia fonológica y habilidades para una transición acompañada a primero básico.",
  },
};

export default function ProgramsSummary() {
  return (
    <section data-cta="niveles" className="border-b border-border bg-surface-sunk py-14 sm:py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end mb-8" data-reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary">
              Niveles educativos {admissionCutoff.year}
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">
              Un nivel para cada etapa
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Edad cumplida al <strong>{admissionCutoff.label}</strong>. En ambas sedes, con jornadas de mañana y tarde.
            </p>
          </div>
          <Link
            href="/programa-educativo#niveles"
            className="group inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark"
          >
            <span>Conocer el programa en detalle</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3" data-reveal-group>
          {schoolLevels.map((level) => {
            const focus = learningFocus[level.id];
            const Icon = focus.icon;
            return (
              <article
                key={level.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-xs card-interactive"
              >
                <div
                  className={`h-1.5 w-full bg-gradient-to-r ${focus.topBar}`}
                  aria-hidden="true"
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${focus.iconBg}`}
                    >
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-extrabold ${focus.badge}`}
                    >
                      {focus.stage}
                    </span>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-display text-xl font-extrabold text-ink sm:text-2xl">
                      {level.name}
                    </h3>
                    <p className="mt-0.5 text-sm font-bold text-primary">
                      {level.ageYears} años cumplidos
                    </p>
                  </div>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {focus.description}
                  </p>

                  <div className="mt-4 flex items-center gap-1.5 rounded-xl bg-paper px-3 py-2 text-xs font-semibold text-muted border border-border/60">
                    <Clock className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                    <span>Jornada {level.journeys.join(" y ")} · Ambas sedes</span>
                  </div>

                  <div className="mt-4 space-y-2">
                    <a
                      href={createWhatsAppUrl({ source: "level", level: level.name })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-action px-3 py-3 text-sm font-extrabold text-action-ink transition-all hover:bg-action-hover btn-action-glow"
                    >
                      <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>Consultar cupos {level.name}</span>
                    </a>
                    <Link
                      href={`/contacto?level=${encodeURIComponent(level.name)}`}
                      className="inline-flex min-h-10 w-full items-center justify-center gap-1.5 rounded-xl border border-border bg-surface text-xs font-bold text-primary transition-colors hover:border-primary hover:bg-surface-sunk"
                    >
                      <span>O dejar consulta por formulario</span>
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
