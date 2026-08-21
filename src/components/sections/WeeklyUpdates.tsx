import Link from "next/link";
import { BookOpen, CalendarDays, HeartHandshake, Music2, Palette, ArrowRight } from "lucide-react";
import { weeklyUpdates, type WeeklyUpdate } from "@/content/school-life";
import { campuses } from "@/content/school-data";

const icons = {
  book: BookOpen,
  music: Music2,
  palette: Palette,
  community: HeartHandshake,
  calendar: CalendarDays,
} satisfies Record<WeeklyUpdate["icon"], typeof BookOpen>;

export default function WeeklyUpdates() {
  const updates = weeklyUpdates.filter((update) => update.published).slice(0, 5);

  return (
    <section className="border-b border-border bg-white py-14 sm:py-18" aria-labelledby="weekly-updates-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">Información al día</p>
            <h2 id="weekly-updates-title" className="mt-2 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Esta semana en Escuelitas Ruth
            </h2>
            <p className="mt-3 font-semibold leading-relaxed text-muted">
              Novedades breves para que las familias sepan qué está ocurriendo en la comunidad escolar.
            </p>
          </div>
          <Link href="/vida-escolar" className="inline-flex min-h-11 items-center gap-2 text-sm font-extrabold text-primary hover:text-primary-dark">
            Ver Vida Escolar
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {updates.length > 0 ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {updates.map((update) => {
              const Icon = icons[update.icon];
              const campusLabel = update.campusIds === "all"
                ? "Ambas sedes"
                : update.campusIds.map((id) => campuses.find((campus) => campus.id === id)?.shortName).filter(Boolean).join(" · ");
              return (
                <article key={update.id} className="rounded-2xl border border-border bg-surface-blue/30 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-extrabold text-foreground">{update.title}</h3>
                  {update.description && <p className="mt-2 text-sm font-semibold leading-relaxed text-muted">{update.description}</p>}
                  <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.12em] text-primary">{campusLabel}</p>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-primary/25 bg-surface-blue/25 px-6 py-7 sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div>
              <p className="font-display text-lg font-extrabold text-foreground">Sin novedades publicadas por ahora</p>
              <p className="mt-1 text-sm font-semibold leading-relaxed text-muted">
                Este espacio se actualizará únicamente con actividades confirmadas por la escuela.
              </p>
            </div>
            <Link href="/contacto" className="mt-4 inline-flex min-h-11 items-center text-sm font-extrabold text-primary hover:text-primary-dark sm:mt-0">
              Consultar información actual
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
