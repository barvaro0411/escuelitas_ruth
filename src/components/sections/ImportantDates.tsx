"use client";

import { useMemo } from "react";
import { CalendarDays, MapPin } from "lucide-react";
import { calendarEvents } from "@/content/school-life";
import { campuses } from "@/content/school-data";

function getTodayInChile() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Santiago",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

// Ver la nota de `hideWhenEmpty` en WeeklyUpdates.
export default function ImportantDates({
  hideWhenEmpty = false,
}: {
  hideWhenEmpty?: boolean;
}) {
  const events = useMemo(() => {
    const today = getTodayInChile();
    return calendarEvents
      .filter(
        (event) => event.published && (event.endDate ?? event.date) >= today,
      )
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(0, 6);
  }, []);

  if (events.length === 0 && hideWhenEmpty) return null;

  return (
    <section
      className="border-b border-border bg-surface-sunk py-14 sm:py-18"
      aria-labelledby="important-dates-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            Agenda escolar
          </div>
          <h2
            id="important-dates-title"
            className="mt-4 font-display font-extrabold tracking-tight text-ink text-3xl sm:text-4xl"
          >
            Próximas fechas importantes
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Revisa reuniones, celebraciones y actividades publicadas
            oficialmente.
          </p>
        </div>

        {events.length > 0 ? (
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => {
              const date = new Date(`${event.date}T12:00:00`);
              const day = new Intl.DateTimeFormat("es-CL", {
                day: "2-digit",
                timeZone: "America/Santiago",
              }).format(date);
              const month = new Intl.DateTimeFormat("es-CL", {
                month: "short",
                timeZone: "America/Santiago",
              })
                .format(date)
                .replace(".", "")
                .toUpperCase();
              const campusLabel =
                event.campusIds === "all"
                  ? "Ambas sedes"
                  : event.campusIds
                      .map(
                        (id) =>
                          campuses.find((campus) => campus.id === id)
                            ?.shortName,
                      )
                      .filter(Boolean)
                      .join(" ·");
              return (
                <article
                  key={event.id}
                  className="flex gap-4 rounded-2xl border border-border bg-surface p-5"
                >
                  <time
                    dateTime={event.date}
                    className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-primary text-white"
                  >
                    <span className="font-display text-2xl font-extrabold leading-none">
                      {day}
                    </span>
                    <span className="mt-1 text-[10px] font-extrabold tracking-[0.12em]">
                      {month}
                    </span>
                  </time>
                  <div className="min-w-0">
                    <h3 className="font-display font-extrabold leading-tight text-ink text-base">
                      {event.title}
                    </h3>
                    {event.description && (
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {event.description}
                      </p>
                    )}
                    <p className="mt-3 flex items-center gap-1.5 text-xs font-extrabold text-primary">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {event.location || campusLabel}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-action/45 bg-white/80 p-6">
            <p className="font-display text-lg font-extrabold text-ink">
              No hay fechas confirmadas publicadas
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              La agenda aparecerá aquí cuando la escuela confirme nuevas
              actividades.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
