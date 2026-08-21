"use client";

import { useState, type ComponentType, type FormEvent } from "react";
import Link from "next/link";
import {
  AlertCircle,
  Baby,
  Calendar,
  CheckCircle2,
  GraduationCap,
  Lightbulb,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { createWhatsAppUrl } from "@/lib/site";
import { admissionCutoff, campuses, schoolLevels, type CampusId, type LevelId } from "@/content/school-data";

type CalculationResult = {
  status: "eligible" | "too_young" | "too_old";
  levelName: string;
  levelId?: LevelId;
  ageAtCutoff: { years: number; months: number };
  campusIds: readonly CampusId[];
  journeys: readonly string[];
  description: string;
  bulletPoints: string[];
  icon: ComponentType<{ className?: string }>;
};

export function calculateEligibility(dateStr: string): CalculationResult | null {
  if (!dateStr) return null;

  const [yearValue, monthValue, dayValue] = dateStr.split("-");
  const year = Number(yearValue);
  const month = Number(monthValue) - 1;
  const day = Number(dayValue);

  if (!year || month < 0 || !day || year < 1900 || year > admissionCutoff.year) return null;

  const birthDate = new Date(year, month, day);
  const cutoffDate = new Date(admissionCutoff.year, 2, 31);

  if (
    Number.isNaN(birthDate.getTime()) ||
    birthDate.getFullYear() !== year ||
    birthDate.getMonth() !== month ||
    birthDate.getDate() !== day
  ) {
    return null;
  }

  let age = cutoffDate.getFullYear() - birthDate.getFullYear();
  let ageMonths = cutoffDate.getMonth() - birthDate.getMonth();
  if (cutoffDate.getDate() < birthDate.getDate()) ageMonths -= 1;
  if (ageMonths < 0) {
    age -= 1;
    ageMonths += 12;
  }

  const level = schoolLevels.find((item) => item.ageYears === age);

  if (level?.id === "medio-mayor") {
    return {
      status: "eligible",
      levelName: level.name,
      levelId: level.id,
      ageAtCutoff: { years: age, months: ageMonths },
      campusIds: level.campusIds,
      journeys: level.journeys,
      icon: Baby,
      description:
        "Cumple los requisitos para ingresar a Medio Mayor en 2027.",
      bulletPoints: [
        "Educación 100% gratuita para la familia.",
        "Evaluación fonoaudiológica inicial sin costo.",
        "Apoyo pedagógico y estimulación continua del lenguaje.",
      ],
    };
  }

  if (level?.id === "prekinder") {
    return {
      status: "eligible",
      levelName: level.name,
      levelId: level.id,
      ageAtCutoff: { years: age, months: ageMonths },
      campusIds: level.campusIds,
      journeys: level.journeys,
      icon: GraduationCap,
      description:
        "Cumple los requisitos para ingresar a Pre-Kínder en 2027.",
      bulletPoints: [
        "Educación 100% gratuita para la familia.",
        "Evaluación fonoaudiológica inicial sin costo.",
        "Trabajo integrado de articulación y conciencia fonológica.",
      ],
    };
  }

  if (level?.id === "kinder") {
    return {
      status: "eligible",
      levelName: level.name,
      levelId: level.id,
      ageAtCutoff: { years: age, months: ageMonths },
      campusIds: level.campusIds,
      journeys: level.journeys,
      icon: GraduationCap,
      description:
        "Cumple los requisitos para ingresar a Kínder en 2027.",
      bulletPoints: [
        "Preparación para la transición a Educación Básica.",
        "Acompañamiento de educadoras y fonoaudiólogas.",
        "Fortalecimiento de la autonomía y habilidades pre-lectoras.",
      ],
    };
  }

  if (age < 3) {
    return {
      status: "too_young",
      levelName: "Menor de 3 años",
      ageAtCutoff: { years: age, months: ageMonths },
      campusIds: [],
      journeys: [],
      icon: Baby,
      description:
        "Al 31 de marzo de 2027 tendrá menos de 3 años. Escríbenos para orientación.",
      bulletPoints: [
        "La edad mínima para Medio Mayor es 3 años cumplidos al 31 de marzo de 2027.",
        "Te invitamos a contactarnos para orientarte en estimulación temprana.",
      ],
    };
  }

  return {
    status: "too_old",
    levelName: "Mayor de 5 años 11 meses",
    ageAtCutoff: { years: age, months: ageMonths },
    campusIds: [],
    journeys: [],
    icon: GraduationCap,
    description:
      "Al 31 de marzo de 2027 tendrá 6 años o más. Podemos orientarte.",
    bulletPoints: [
      "Las escuelas de lenguaje atienden hasta Kínder (5 años 11 meses).",
      "Te asesoramos en los pasos siguientes de postulación.",
    ],
  };
}

export default function AgeCalculator() {
  const [birthdate, setBirthdate] = useState("");
  const [hasCalculated, setHasCalculated] = useState(false);
  const result = hasCalculated ? calculateEligibility(birthdate) : null;
  const hasDateError = hasCalculated && !result;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasCalculated(true);
  };

  const formattedDate = birthdate
    ? birthdate.split("-").reverse().join("/")
    : "";
  const whatsappUrl = result
    ? createWhatsAppUrl({
        source: "calculator",
        level: result.status === "eligible" ? result.levelName : undefined,
        birthdate: formattedDate,
      })
    : "#";
  const resultCampuses = result?.campusIds
    .map((campusId) => campuses.find((campus) => campus.id === campusId))
    .filter((campus): campus is (typeof campuses)[number] => Boolean(campus)) ?? [];
  const ageAtCutoffLabel = result
    ? `${result.ageAtCutoff.years} ${result.ageAtCutoff.years === 1 ? "año" : "años"} y ${result.ageAtCutoff.months} ${result.ageAtCutoff.months === 1 ? "mes" : "meses"}`
    : "";

  return (
    <section className="relative w-full overflow-hidden border-b border-border bg-gradient-to-b from-white via-surface-yellow/30 to-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado compacto en móvil */}
        <div className="mb-5 sm:mb-8 lg:mb-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/20 px-3 py-1.5 text-[11px] sm:text-xs font-black uppercase tracking-wider text-brand-yellow-dark mb-2 sm:mb-3">
            <Sparkles size={14} className="shrink-0" />
            Calculadora de Nivel 2027
          </div>

          <h2 className="mb-2 text-xl sm:text-3xl lg:text-5xl font-black tracking-tight text-foreground font-display leading-tight">
            ¿Qué nivel le corresponde a tu hijo?
          </h2>

          <p className="text-xs sm:text-sm lg:text-lg font-semibold leading-relaxed text-foreground/70">
            Ingresa la fecha de nacimiento. El cálculo se realiza según la edad al <strong>31 de marzo de 2027</strong>.
          </p>
        </div>

        {/* Grid: 1 columna en móvil, 2 en desktop */}
        <div className="grid min-w-0 grid-cols-1 items-start gap-4 sm:gap-6 lg:grid-cols-12 lg:gap-8">

          {/* Panel de entrada */}
          <form
            noValidate
            onSubmit={handleSubmit}
            className="min-w-0 w-full rounded-2xl border border-border/80 bg-white p-4 shadow-md sm:p-6 lg:col-span-5 lg:rounded-[2rem] lg:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                <Calendar className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <label
                  htmlFor="birthdate"
                  className="block text-sm sm:text-base font-black text-foreground font-display leading-tight"
                >
                  Fecha de nacimiento
                </label>
                <p className="text-[10px] sm:text-xs font-bold text-foreground/65">
                  Edad al 31 de marzo de 2027
                </p>
              </div>
            </div>

            <input
              id="birthdate"
              type="date"
              value={birthdate}
              onChange={(event) => {
                setBirthdate(event.target.value);
                setHasCalculated(false);
              }}
              max="2027-03-31"
              min="2019-01-01"
              required
              aria-invalid={hasDateError}
              aria-describedby={hasDateError ? "birthdate-error" : "birthdate-help"}
              className={`block box-border min-w-0 w-full max-w-full cursor-pointer rounded-xl border-2 bg-surface-raised px-3 py-3 text-sm font-black text-foreground outline-none transition-all focus:bg-white focus:ring-4 sm:px-4 ${
                hasDateError
                  ? "border-red-500 focus:border-red-600 focus:ring-red-500/10"
                  : "border-border/70 focus:border-primary focus:ring-primary/10"
              }`}
            />

            {hasDateError ? (
              <p id="birthdate-error" role="alert" className="mt-3 text-xs font-extrabold leading-relaxed text-red-700">
                Ingresa una fecha válida entre el 1 de enero de 2019 y el 31 de marzo de 2027.
              </p>
            ) : (
              <p id="birthdate-help" className="mt-3 text-xs font-bold leading-relaxed text-foreground/70">
                Necesitamos el día, mes y año exactos: el nivel puede cambiar si el cumpleaños es antes o después del 31 de marzo.
              </p>
            )}

            <button
              type="submit"
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-extrabold text-white shadow-sm transition-colors hover:bg-primary-dark"
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              Calcular nivel para 2027
            </button>

            <p className="mt-4 flex items-start gap-2 text-[10px] sm:text-xs font-bold leading-relaxed text-foreground/65 border-t border-border/50 pt-3">
              <Lightbulb className="h-3.5 w-3.5 shrink-0 mt-0.5 text-brand-yellow-dark" />
              <span>La vacante se oficializa con la evaluación fonoaudiológica gratuita.</span>
            </p>
          </form>

          {/* Panel de resultado */}
          <div aria-live="polite" className="min-w-0 w-full lg:col-span-7">
            {!result ? (
              <div className="flex min-w-0 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-primary/15 bg-white/70 p-6 text-center sm:min-h-[180px] sm:p-8 lg:min-h-[300px] lg:rounded-[2rem] lg:p-10">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2.5 animate-bounce shrink-0">
                  <Baby className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="mb-1 text-base sm:text-lg lg:text-2xl font-black text-foreground font-display leading-tight">
                  Ingresa la fecha de tu hijo(a)
                </h3>
                <p className="max-w-xs text-[11px] sm:text-xs lg:text-sm font-semibold text-foreground/60 leading-relaxed">
                  Selecciona la fecha o presiona un año para conocer el nivel al instante.
                </p>
              </div>
            ) : (
              <div className="relative flex min-w-0 flex-col justify-between overflow-hidden rounded-2xl border-2 border-primary/15 bg-white p-4 shadow-lg sm:p-6 lg:rounded-[2rem] lg:p-8">
                {/* Barra de estado superior */}
                <div
                  className={`absolute top-0 inset-x-0 h-1.5 sm:h-2 ${
                    result.status === "eligible"
                      ? "bg-gradient-to-r from-emerald-500 via-emerald-400 to-secondary"
                      : "bg-gradient-to-r from-amber-500 via-amber-400 to-brand-yellow"
                  }`}
                />

                {/* Header con icono y badge */}
                <div className="mb-3 flex min-w-0 items-center justify-between gap-2 pt-1 sm:mb-4">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                      <result.icon className="h-5 w-5" />
                    </div>
                    <h3 className="min-w-0 text-lg font-black leading-tight text-foreground font-display sm:text-xl lg:text-2xl">
                      {result.status === "eligible" ? `Le correspondería ${result.levelName}` : result.levelName}
                    </h3>
                  </div>
                  <span
                    className={`hidden sm:inline-flex rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wider shrink-0 ${
                      result.status === "eligible"
                        ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                        : "bg-amber-100 text-amber-900 border border-amber-300"
                    }`}
                  >
                    {result.status === "eligible" ? "Cumple requisito de edad" : "Orientación"}
                  </span>
                </div>

                {/* Badge solo en móvil, debajo del título */}
                <span
                  className={`sm:hidden inline-flex w-fit rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-wider mb-2.5 ${
                    result.status === "eligible"
                      ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                      : "bg-amber-100 text-amber-900 border border-amber-300"
                  }`}
                >
                  {result.status === "eligible" ? "✓ Cumple requisito de edad" : "⚠ Requiere orientación"}
                </span>

                <p className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold leading-relaxed text-foreground/70">
                  {result.description}
                </p>

                <div className="mb-4 rounded-xl border border-primary/15 bg-surface-blue/45 p-4">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-primary">Edad al {admissionCutoff.label}</p>
                  <p className="mt-1 font-display text-xl font-black text-foreground">{ageAtCutoffLabel}</p>
                </div>

                {result.status === "eligible" && (
                  <div className="mb-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-border bg-white p-4">
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-primary">Este nivel se imparte en</p>
                      <ul className="mt-2 space-y-1.5">
                        {resultCampuses.map((campus) => (
                          <li key={campus.id} className="flex items-start gap-2 text-xs font-extrabold text-foreground/80">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-accent" aria-hidden="true" />
                            {campus.shortName}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl border border-border bg-white p-4">
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-primary">Jornadas que se imparten</p>
                      <p className="mt-2 text-xs font-extrabold text-foreground/80">{result.journeys.join(" y ")}</p>
                      <p className="mt-1 text-[10px] font-semibold leading-relaxed text-muted">La jornada y los cupos se confirman al consultar.</p>
                    </div>
                  </div>
                )}

                <ul className="space-y-2 mb-4">
                  {result.bulletPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-xs sm:text-sm font-bold text-foreground/80 leading-snug"
                    >
                      {result.status === "eligible" ? (
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      ) : (
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                      )}
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {result.status === "eligible" && (
                  <div className="mb-4 flex items-center justify-between gap-3 rounded-xl bg-emerald-50 px-4 py-3 text-emerald-900">
                    <span className="text-xs font-extrabold">Evaluación fonoaudiológica</span>
                    <strong className="font-display text-lg">$0</strong>
                  </div>
                )}

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-yellow px-4 py-3 sm:py-3.5 text-xs sm:text-sm font-black text-primary-dark shadow-lg shadow-brand-yellow/20 transition-all hover:bg-brand-yellow-light active:scale-[0.97] text-center"
                >
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                  <span>
                    {result.status === "eligible"
                      ? `Consultar disponibilidad para ${result.levelName}`
                      : "Pedir Orientación por WhatsApp"}
                  </span>
                </a>
                {result.status === "eligible" && (
                  <Link href="/sedes" className="mt-3 flex min-h-11 w-full items-center justify-center text-center text-xs font-extrabold text-primary hover:text-primary-dark sm:text-sm">
                    Conocer sedes, direcciones y jornadas
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
