import Link from "next/link";
import { ArrowRight, BookOpen, Music, Sparkles, Users2 } from "lucide-react";

const programs = [
  {
    title: "Medio Mayor",
    age: "3 años cumplidos",
    stage: "01",
    description:
      "Estimulación temprana del habla y vocabulario a través del juego guiado, música y experiencias pedagógicas afectivas.",
    icon: Music,
    gradient: "from-primary via-primary-light to-blue-600",
    badge: "bg-primary/10 text-primary border border-primary/20",
  },
  {
    title: "Pre-Kínder (NT1)",
    age: "4 años cumplidos",
    stage: "02",
    description:
      "Fortalecimiento de la articulación del lenguaje, interacción social con pares y desarrollo de la autonomía personal.",
    icon: Users2,
    gradient: "from-brand-yellow via-amber-500 to-brand-yellow-dark",
    badge: "bg-brand-yellow/20 text-brand-yellow-dark border border-brand-yellow/40",
  },
  {
    title: "Kínder (NT2)",
    age: "5 años cumplidos",
    stage: "03",
    description:
      "Preparación intensiva para la transición a Educación Básica con foco prioritario en conciencia fonológica y lectoescritura inicial.",
    icon: BookOpen,
    gradient: "from-emerald-600 via-teal-600 to-emerald-700",
    badge: "bg-emerald-100 text-emerald-800 border border-emerald-300",
  },
];

export default function ProgramsSummary() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-white via-surface-blue/30 to-white py-20 sm:py-28">
      <div className="absolute top-40 -left-24 h-80 w-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-24 h-80 w-80 rounded-full bg-brand-yellow/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="mb-14 flex flex-col justify-between gap-4 sm:flex-row sm:items-end border-b border-border/60 pb-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-primary mb-3">
              <Sparkles size={14} />
              Niveles Educativos Parvularios
            </div>
            <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-5xl font-display">
              Acompañamiento especializado según su etapa de desarrollo
            </h2>
          </div>
          <Link
            href="/programa-educativo"
            className="inline-flex items-center gap-2 rounded-2xl bg-primary/10 px-6 py-3.5 text-sm font-black text-primary hover:bg-primary hover:text-white transition-all group"
          >
            Conocer Programa Pedagógico
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-border/80 bg-white p-8 sm:p-9 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 card-hover"
            >
              {/* Top border gradient line */}
              <div className={`absolute top-0 inset-x-0 h-2.5 bg-gradient-to-r ${program.gradient}`} />

              <div
                className="absolute -bottom-6 -right-6 text-9xl font-black text-foreground/[0.04] select-none"
                aria-hidden="true"
              >
                {program.stage}
              </div>

              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${program.gradient} text-white shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <program.icon size={28} />
                  </div>
                  <span className={`inline-block rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-wider ${program.badge}`}>
                    {program.age}
                  </span>
                </div>

                <div className="mb-3 flex items-center gap-2">
                  <span className="text-xs font-black uppercase tracking-widest text-foreground/40">
                    Nivel {program.stage}
                  </span>
                  <span className="h-px flex-1 bg-border/60" />
                </div>

                <h3 className="text-2xl font-black text-foreground mb-3 leading-tight font-display group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                
                <p className="text-sm font-semibold leading-relaxed text-foreground/75 mb-8">
                  {program.description}
                </p>
              </div>

              <div className="relative pt-5 border-t border-border/60 flex items-center justify-between text-xs font-black uppercase tracking-wider text-primary group-hover:text-primary-dark">
                <span>Ver Requisitos del Nivel</span>
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
              </div>

              {/* Enlace global en la tarjeta */}
              <Link href="/programa-educativo" className="absolute inset-0" aria-label={`Ver programa para ${program.title}`} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
