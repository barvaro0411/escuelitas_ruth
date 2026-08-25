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

        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <div className="flex items-center gap-3">
                <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-action text-[11px] font-extrabold text-primary-dark">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-display font-extrabold leading-tight text-ink text-base">
                  {step.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <Link
          href="/nosotros"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark"
        >
          Conocer al equipo y la escuela
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
