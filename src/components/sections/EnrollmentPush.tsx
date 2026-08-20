import { ClipboardCheck, MapPin, WalletCards } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    title: "$0 para las familias",
    description: "Sin matrícula ni mensualidad. Los materiales escolares están incluidos.",
    icon: WalletCards,
  },
  {
    title: "Dos sedes en Conchalí",
    description: "Vascongados 4314 y Gral. Gambino 4613, con jornada mañana y tarde.",
    icon: MapPin,
  },
  {
    title: "Evaluación sin costo",
    description: "Te orientamos aunque todavía no tengas un informe fonoaudiológico.",
    icon: ClipboardCheck,
  },
];

export default function EnrollmentPush() {
  return (
    <section aria-labelledby="informacion-clave" className="border-b border-border bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">
              Antes de postular
            </p>
            <h2 id="informacion-clave" className="mt-1 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
              Lo esencial para decidir con tranquilidad
            </h2>
          </div>
          <Link href="/matriculas-2027-conchali" className="text-sm font-extrabold text-primary hover:text-primary-dark">
            Ver todos los detalles →
          </Link>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="flex gap-4 rounded-2xl border border-border bg-surface-blue/35 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-base font-extrabold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm font-semibold leading-relaxed text-muted">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
