import Link from "next/link";
import { ArrowRight, BookOpen, Music, Users2 } from "lucide-react";

const programs = [
  {
    title: "Medio Mayor",
    age: "3 años cumplidos",
    description: "Estimulación temprana del habla y vocabulario a través del juego guiado.",
    icon: Music,
    accent: "bg-primary",
  },
  {
    title: "Pre-Kínder (NT1)",
    age: "4 años cumplidos",
    description: "Fortalecimiento del lenguaje, interacción social y autonomía personal.",
    icon: Users2,
    accent: "bg-brand-yellow text-primary-dark",
  },
  {
    title: "Kínder (NT2)",
    age: "5 años cumplidos",
    description: "Preparación para la educación básica con foco en conciencia fonológica.",
    icon: BookOpen,
    accent: "bg-emerald-accent",
  },
];

export default function ProgramsSummary() {
  return (
    <section className="border-b border-border bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">
              Niveles educativos
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
              Acompañamiento según la etapa de desarrollo
            </h2>
          </div>
          <Link href="/programa-educativo" className="inline-flex items-center gap-2 text-sm font-extrabold text-primary hover:text-primary-dark">
            Conocer el programa
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {programs.map((program) => (
            <article key={program.title} className="flex flex-col rounded-2xl border border-border bg-surface-blue/25 p-6 shadow-sm transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md">
              <div className="flex items-start justify-between gap-4">
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${program.accent} ${program.title === "Pre-Kínder (NT1)" ? "" : "text-white"}`}>
                  <program.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="rounded-full border border-border bg-white px-3 py-1 text-xs font-extrabold text-muted">
                  {program.age}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-extrabold text-foreground">{program.title}</h3>
              <p className="mt-2 flex-1 text-sm font-semibold leading-relaxed text-muted">{program.description}</p>
              <Link href="/programa-educativo" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-primary hover:text-primary-dark">
                Conocer este nivel
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
