import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, HeartHandshake, LineChart } from "lucide-react";

const steps = [
  {
    title: "Consulta y orientación",
    description: "Revisamos la edad, tus dudas y la sede o jornada que te acomoda.",
    icon: ClipboardCheck,
  },
  {
    title: "Evaluación especializada",
    description: "Coordinamos la evaluación fonoaudiológica necesaria para orientar el ingreso.",
    icon: HeartHandshake,
  },
  {
    title: "Seguimiento con la familia",
    description: "Compartimos avances y orientaciones para acompañar el proceso desde el hogar.",
    icon: LineChart,
  },
];

export default function HowWeWork() {
  return (
    <section className="border-b border-border bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl shadow-md">
          <div className="relative aspect-[4/3]">
            <Image
              src="/equipo-escuela-ruth.jpg"
              alt="Equipo educativo de la Escuela de Lenguaje Ruth"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-dark/85 to-transparent px-6 pb-6 pt-16">
            <p className="text-base font-extrabold text-white">Un equipo que acompaña a tu familia</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">Cómo trabajamos</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
            Un proceso cercano y coordinado
          </h2>
          <p className="mt-4 max-w-2xl text-base font-semibold leading-relaxed text-muted">
            La familia recibe orientación desde la primera consulta y participa activamente en el acompañamiento del niño o niña.
          </p>

          <div className="mt-8 space-y-3">
            {steps.map((step, index) => (
              <article key={step.title} className="flex gap-4 rounded-2xl border border-border bg-surface-blue/30 p-5">
                <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand-yellow text-[11px] font-extrabold text-primary-dark">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-base font-extrabold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm font-semibold leading-relaxed text-muted">{step.description}</p>
                </div>
              </article>
            ))}
          </div>

          <Link href="/nosotros" className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-primary hover:text-primary-dark">
            Conocer al equipo y la escuela
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
