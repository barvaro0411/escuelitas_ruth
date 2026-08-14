import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, HeartHandshake, LineChart } from "lucide-react";

const steps = [
  {
    title: "Evaluación y orientación",
    description:
      "Revisamos antecedentes y realizamos la evaluación necesaria para orientar el ingreso.",
    icon: ClipboardCheck,
  },
  {
    title: "Apoyo especializado",
    description:
      "Educadoras y fonoaudióloga coordinan el trabajo pedagógico y de lenguaje.",
    icon: HeartHandshake,
  },
  {
    title: "Seguimiento con la familia",
    description:
      "Compartimos avances y orientaciones para acompañar el proceso desde el hogar.",
    icon: LineChart,
  },
];

export default function HowWeWork() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-white py-20 sm:py-28">
      <div className="absolute top-24 -right-24 h-72 w-72 rounded-full bg-pastel-pink/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-24 h-72 w-72 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16 lg:px-8">
        {/* Imagen */}
        <div className="relative aspect-[4/3] group">
          <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] shadow-2xl">
            <Image
              src="/equipo-escuela-ruth.jpg"
              alt="Equipo educativo de la Escuela de Lenguaje Ruth"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Enmarcado con borde de color de marca con desfase */}
            <div className="absolute inset-0 rounded-[2.5rem] border-4 border-brand-yellow/85 -rotate-1 group-hover:rotate-0 transition-transform duration-500 pointer-events-none" />
          </div>

          {/* Badge flotante fuera de la foto (borde inferior) para no tapar el rostro del equipo */}
          <div className="absolute -bottom-5 left-8 inline-flex items-center gap-2 rounded-2xl bg-white/95 backdrop-blur px-4 py-2.5 shadow-xl animate-float border border-brand-yellow/40">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <HeartHandshake size={16} />
            </span>
            <span className="text-xs font-black text-primary-dark leading-tight">
              Equipo educativo
              <br />
              especializado
            </span>
          </div>
        </div>

        {/* Contenido */}
        <div>
          <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-primary">
            Equipo Ruth
          </p>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-foreground sm:text-5xl leading-tight font-display">
            Un proceso cercano y{" "}
            <span className="relative inline-block text-primary">
              <span className="absolute inset-x-[-2%] bottom-[6%] h-[30%] bg-brand-yellow/50 rounded-lg -z-10" />
              <span className="relative">coordinado</span>
            </span>
          </h2>
          <p className="mb-8 text-base font-semibold leading-relaxed text-foreground/70">
            La familia recibe orientación desde la primera consulta y participa
            activamente en el acompañamiento del niño o niña durante su
            desarrollo.
          </p>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="flex gap-5 rounded-[2rem] border border-border/50 bg-surface-blue/40 p-6 hover:bg-white hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-0.5 transition-all duration-300 card-hover"
              >
                <div className="relative">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-md shadow-primary/20 transition-transform duration-300 group-hover:scale-110">
                    <step.icon size={22} />
                  </div>
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-yellow text-[10px] font-black text-primary-dark shadow-md">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <p className="mb-1 text-xs font-black uppercase tracking-wider text-brand-yellow-dark">
                    Paso {index + 1}
                  </p>
                  <h3 className="mb-1.5 text-lg font-black text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm font-semibold leading-relaxed text-foreground/65">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/nosotros"
              className="inline-flex items-center gap-1.5 text-sm font-black text-primary transition-all hover:text-primary-dark group"
            >
              Conocer más sobre la escuela
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
