import { ClipboardCheck, MapPin, WalletCards } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    title: "$0 para las familias",
    description:
      "Sin matrícula ni mensualidad. Los materiales escolares están incluidos.",
    icon: WalletCards,
    iconStyle: "bg-emerald-50 text-emerald-700 border border-emerald-200/80",
    badge: "100% Gratuito",
    badgeStyle: "bg-emerald-100/70 text-emerald-800 border-emerald-200",
  },
  {
    title: "Dos sedes en Conchalí",
    description:
      "Vascongados 4314 y Gral. Gambino 4613, con jornada mañana y tarde.",
    icon: MapPin,
    iconStyle: "bg-sky-50 text-primary border border-sky-200/80",
    badge: "Conchalí",
    badgeStyle: "bg-sky-100/70 text-sky-800 border-sky-200",
  },
  {
    title: "Evaluación sin costo",
    description:
      "Te orientamos aunque todavía no tengas un informe fonoaudiológico.",
    icon: ClipboardCheck,
    iconStyle: "bg-amber-50 text-amber-800 border border-amber-200/80",
    badge: "Fonoaudiología",
    badgeStyle: "bg-amber-100/70 text-amber-900 border-amber-200",
  },
];

export default function EnrollmentPush() {
  return (
    <section
      aria-labelledby="informacion-clave"
      className="border-b border-border bg-paper py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Antes de postular
            </p>
            <h2
              id="informacion-clave"
              className="mt-1 font-display font-extrabold text-ink text-3xl sm:text-4xl"
            >
              Lo esencial para decidir con tranquilidad
            </h2>
          </div>
          <Link
            href="/matriculas-2027-conchali"
            className="group inline-flex items-center gap-1.5 text-sm font-extrabold text-primary hover:text-primary-dark transition-colors"
          >
            <span>Ver requisitos y vacantes</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-xs card-interactive"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 shadow-2xs ${item.iconStyle}`}
                  >
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span
                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-extrabold ${item.badgeStyle}`}
                  >
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-display font-extrabold text-ink text-lg leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
