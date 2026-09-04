"use client";

import { useState } from "react";
import {
  Baby,
  Calendar,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Users2,
} from "lucide-react";
import { annualPlanUnits } from "@/content/school-life";

type LevelFilter = "all" | "medioMayor" | "prekinder" | "kinder";

export default function AnnualTraditions() {
  const [selectedLevel, setSelectedLevel] = useState<LevelFilter>("all");

  return (
    <section
      aria-labelledby="annual-plan-title"
      className="relative overflow-hidden border-b border-border bg-paper py-18 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-action/40 bg-action/25 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-primary-dark shadow-xs mb-3">
              <CalendarDays className="h-4 w-4 text-amber-500" aria-hidden="true" />
              <span>Planificación Pedagógica y Fonoaudiológica</span>
            </div>
            <h2
              id="annual-plan-title"
              className="font-display font-extrabold text-ink text-3xl sm:text-4xl lg:text-5xl tracking-tight"
            >
              Plan Anual: 10 Unidades de Aprendizaje
            </h2>
            <p className="mt-3 text-base text-muted leading-relaxed sm:text-lg">
              De marzo a diciembre, organizamos cada mes en torno a una unidad
              temática con objetivos específicos de lenguaje para cada etapa del
              desarrollo infantil.
            </p>
          </div>

          {/* Selector interactivo de nivel */}
          <div className="flex flex-wrap gap-1.5 rounded-2xl border border-border bg-surface p-1.5 shadow-xs">
            <button
              type="button"
              onClick={() => setSelectedLevel("all")}
              className={`rounded-xl px-3.5 py-2 text-xs font-extrabold transition-all cursor-pointer ${
                selectedLevel === "all"
                  ? "bg-primary text-white shadow-xs"
                  : "text-muted hover:text-ink"
              }`}
            >
              Ver todos
            </button>
            <button
              type="button"
              onClick={() => setSelectedLevel("medioMayor")}
              className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-extrabold transition-all cursor-pointer ${
                selectedLevel === "medioMayor"
                  ? "bg-primary text-white shadow-xs"
                  : "text-muted hover:text-ink"
              }`}
            >
              <Baby className="h-3.5 w-3.5" />
              <span>Medio Mayor (3a)</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedLevel("prekinder")}
              className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-extrabold transition-all cursor-pointer ${
                selectedLevel === "prekinder"
                  ? "bg-primary text-white shadow-xs"
                  : "text-muted hover:text-ink"
              }`}
            >
              <Users2 className="h-3.5 w-3.5" />
              <span>Pre-Kínder (4a)</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedLevel("kinder")}
              className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-extrabold transition-all cursor-pointer ${
                selectedLevel === "kinder"
                  ? "bg-primary text-white shadow-xs"
                  : "text-muted hover:text-ink"
              }`}
            >
              <GraduationCap className="h-3.5 w-3.5" />
              <span>Kínder (5a)</span>
            </button>
          </div>
        </div>

        {/* Cuadrícula de las 10 Unidades Mensuales */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {annualPlanUnits.map((unit, index) => {
            return (
              <article
                key={unit.id}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 bg-surface shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${unit.accentColor.border}`}
              >
                {/* Cabecera decorativa superior */}
                <div className={`h-2.5 w-full bg-gradient-to-r ${unit.accentColor.header}`} />

                <div className="p-6 sm:p-7">
                  {/* Top Bar: Mes + Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-extrabold text-primary">
                        {index + 1}
                      </span>
                      <span className="font-display text-2xl font-extrabold text-ink">
                        {unit.month}
                      </span>
                    </div>
                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-extrabold ${unit.accentColor.badge}`}
                    >
                      {unit.badge}
                    </span>
                  </div>

                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-muted mb-1">
                    Unidad Temática
                  </p>
                  <h3 className="font-display font-extrabold text-ink text-xl leading-snug">
                    “{unit.unitTitle}”
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted border-l-2 border-primary/30 pl-3 py-0.5">
                    {unit.generalObjective}
                  </p>

                  {/* Objetivos por nivel */}
                  <div className="mt-5 border-t border-border/60 pt-4 space-y-3">
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-primary">
                      Objetivos de Lenguaje:
                    </p>

                    {/* Medio Mayor */}
                    {(selectedLevel === "all" || selectedLevel === "medioMayor") && (
                      <div className="rounded-xl bg-surface-sunk/60 p-3">
                        <div className="flex items-center gap-1.5 text-xs font-extrabold text-primary mb-1.5">
                          <Baby className="h-3.5 w-3.5" />
                          <span>Medio Mayor (3 años):</span>
                        </div>
                        <ul className="space-y-1 text-xs text-muted">
                          {unit.objectivesByLevel.medioMayor.map((obj) => (
                            <li key={obj} className="flex items-start gap-1.5">
                              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{obj}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Pre-Kínder */}
                    {(selectedLevel === "all" || selectedLevel === "prekinder") && (
                      <div className="rounded-xl bg-surface-sunk/60 p-3">
                        <div className="flex items-center gap-1.5 text-xs font-extrabold text-indigo-700 mb-1.5">
                          <Users2 className="h-3.5 w-3.5" />
                          <span>Pre-Kínder (4 años):</span>
                        </div>
                        <ul className="space-y-1 text-xs text-muted">
                          {unit.objectivesByLevel.prekinder.map((obj) => (
                            <li key={obj} className="flex items-start gap-1.5">
                              <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600 shrink-0 mt-0.5" />
                              <span>{obj}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Kínder */}
                    {(selectedLevel === "all" || selectedLevel === "kinder") && (
                      <div className="rounded-xl bg-surface-sunk/60 p-3">
                        <div className="flex items-center gap-1.5 text-xs font-extrabold text-purple-700 mb-1.5">
                          <GraduationCap className="h-3.5 w-3.5" />
                          <span>Kínder (5 años):</span>
                        </div>
                        <ul className="space-y-1 text-xs text-muted">
                          {unit.objectivesByLevel.kinder.map((obj) => (
                            <li key={obj} className="flex items-start gap-1.5">
                              <CheckCircle2 className="h-3.5 w-3.5 text-purple-600 shrink-0 mt-0.5" />
                              <span>{obj}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer de la tarjeta con hitos y efemérides del mes */}
                <div className="px-6 py-3.5 bg-paper border-t border-border/60 text-xs">
                  <p className="font-extrabold text-ink text-[11px] mb-1 flex items-center gap-1">
                    <Calendar className="h-3 w-3 text-primary" />
                    <span>Hitos del mes:</span>
                  </p>
                  <ul className="space-y-0.5 text-[11px] text-muted">
                    {unit.highlights.map((h) => (
                      <li key={h}>• {h}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
