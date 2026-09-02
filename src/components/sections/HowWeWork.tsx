import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  HeartHandshake,
  LineChart,
} from "lucide-react";

const steps = [
  {
    title: "Consulta y orientación",
    description:
      "Revisamos la edad, tus dudas y la sede o jornada que te acomoda.",
    icon: ClipboardCheck,
  },
  {
    title: "Evaluación especializada",
    description:
      "Coordinamos la evaluación fonoaudiológica necesaria para orientar el ingreso.",
    icon: HeartHandshake,
  },
  {
    title: "Seguimiento con la familia",
    description:
      "Compartimos avances y orientaciones para acompañar el proceso desde el hogar.",
    icon: LineChart,
  },
];

// Sin fotografía: la única imagen real del equipo se usa una sola vez en la
// portada, en Vida Escolar, en vez de repetirse en tres secciones.
export default function HowWeWork() {
  return (
    <section
      className="border-b border-border bg-paper py-14"
      aria-labelledby="how-we-work-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Cómo trabajamos
          </p>
          <h2
            id="how-we-work-title"
            className="mt-2 font-display font-extrabold leading-tight text-ink text-3xl sm:text-4xl"
          >
            Un proceso cercano y coordinado
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            La familia recibe orientación desde la primera consulta y participa
            activamente en el acompañamiento del niño o niña.
          </p>
        </div>

        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-xs card-interactive"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white shadow-2xs">
                    <step.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-action font-display text-xs font-extrabold text-primary-dark shadow-2xs">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-display font-extrabold leading-snug text-ink text-lg">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <Link
          href="/nosotros"
          className="group mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-primary hover:text-primary-dark transition-colors"
        >
          <span>Conocer al equipo docente y la escuela</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
