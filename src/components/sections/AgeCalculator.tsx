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
import VoiceContour from "@/components/ui/VoiceContour";
import { createWhatsAppUrl } from "@/lib/site";
import {
  admissionCutoff,
  campuses,
  schoolLevels,
  type CampusId,
  type LevelId,
} from "@/content/school-data";

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

export function calculateEligibility(
  dateStr: string,
): CalculationResult | null {
  if (!dateStr) return null;

  const [yearValue, monthValue, dayValue] = dateStr.split("-");
  const year = Number(yearValue);
  const month = Number(monthValue) - 1;
  const day = Number(dayValue);

  if (!year || month < 0 || !day || year < 1900 || year > admissionCutoff.year)
    return null;

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
      description: `Cumple los requisitos para ingresar a Medio Mayor en ${admissionCutoff.year}.`,
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
      description: `Cumple los requisitos para ingresar a Pre-Kínder en ${admissionCutoff.year}.`,
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
      description: `Cumple los requisitos para ingresar a Kínder en ${admissionCutoff.year}.`,
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
      description: `Al ${admissionCutoff.label} tendrá menos de 3 años. Escríbenos para orientación.`,
      bulletPoints: [
        `La edad mínima para Medio Mayor es 3 años cumplidos al ${admissionCutoff.label}.`,
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
    description: `Al ${admissionCutoff.label} tendrá 6 años o más. Podemos orientarte.`,
    bulletPoints: [
      "Las escuelas de lenguaje atienden hasta Kínder (5 años 11 meses).",
      "Te asesoramos en los pasos siguientes de postulación.",
    ],
  };
}

const MESES = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const DIAS = Array.from({ length: 31 }, (_, index) => index + 1);
// El rango cubre a quienes podrían postular al proceso vigente.
const ANIOS = Array.from(
  { length: 8 },
  (_, index) => admissionCutoff.year - 8 + index,
);

export default function AgeCalculator() {
  // Tres selectores en vez de <input type="date">: el formato del campo nativo
  // depende del idioma del navegador y llegaba a mostrarse como mm/dd/yyyy.
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [hasCalculated, setHasCalculated] = useState(false);

  const birthdate =
    day && month && year
      ? `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`
      : "";
  const result = hasCalculated ? calculateEligibility(birthdate) : null;
  const hasDateError = hasCalculated && !result;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasCalculated(true);
  };

  const handleReset = () => {
    setDay("");
    setMonth("");
    setYear("");
    setHasCalculated(false);
  };

  const selectClass = `block w-full min-w-0 cursor-pointer rounded-xl border-2 bg-surface-sunk px-3 py-3 text-sm font-semibold text-ink outline-none transition-colors focus:bg-surface focus:ring-4 ${
    hasDateError
      ? "border-red-500 focus:border-red-600 focus:ring-red-500/10"
      : "border-border/70 focus:border-primary focus:ring-primary/10"
  }`;

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
  const resultCampuses =
    result?.campusIds
      .map((campusId) => campuses.find((campus) => campus.id === campusId))
      .filter((campus): campus is (typeof campuses)[number] =>
        Boolean(campus),
      ) ?? [];
  const ageAtCutoffLabel = result
    ? `${result.ageAtCutoff.years} ${result.ageAtCutoff.years === 1 ? "año" : "años"} y ${result.ageAtCutoff.months} ${result.ageAtCutoff.months === 1 ? "mes" : "meses"}`
    : "";

  return (
    <section className="relative w-full overflow-hidden border-b border-border bg-surface-sunk py-16 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado compacto en móvil */}
        <div className="mb-6 sm:mb-8 lg:mb-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-surface px-3.5 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-accent border border-accent/20 shadow-xs mb-3">
            <Sparkles size={14} className="shrink-0 text-action" />
            Calculadora de Nivel 2027
          </div>

          <h2 className="mb-3 font-extrabold tracking-tight text-ink font-display leading-tight text-3xl sm:text-4xl">
            ¿Qué nivel le corresponde a tu hijo?
          </h2>

          <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-muted">
            Ingresa la fecha de nacimiento para conocer el nivel educativo y
            orientación según la edad al <strong>31 de marzo de 2027</strong>.
          </p>

          <VoiceContour
            variant="rule"
            className="mt-6 h-4 w-full max-w-md text-accent/45"
          />
        </div>

        {/* Grid: 1 columna en móvil, 2 en desktop */}
        <div className="grid min-w-0 grid-cols-1 items-start gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Panel de entrada */}
          <form
            noValidate
            onSubmit={handleSubmit}
            className="min-w-0 w-full rounded-2xl border border-border/80 bg-surface p-5 sm:p-7 lg:col-span-5 lg:p-8 shadow-xs"
          >
            <fieldset
              aria-invalid={hasDateError}
              aria-describedby={
                hasDateError ? "birthdate-error" : "birthdate-help"
              }
            >
              <legend className="sr-only">Fecha de nacimiento</legend>

              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Calendar className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-sm font-extrabold leading-tight text-ink sm:text-base">
                    Fecha de nacimiento
                  </p>
                  <p className="text-[10px] font-semibold text-muted sm:text-xs">
                    Edad calculada al 31 de marzo de 2027
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[1fr_1.5fr_1fr] gap-2">
                <div>
                  <label
                    htmlFor="birth-day"
                    className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.1em] text-muted"
                  >
                    Día
                  </label>
                  <select
                    id="birth-day"
                    value={day}
                    onChange={(event) => {
                      setDay(event.target.value);
                      setHasCalculated(false);
                    }}
                    className={selectClass}
                  >
                    <option value="">—</option>
                    {DIAS.map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="birth-month"
                    className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.1em] text-muted"
                  >
                    Mes
                  </label>
                  <select
                    id="birth-month"
                    value={month}
                    onChange={(event) => {
                      setMonth(event.target.value);
                      setHasCalculated(false);
                    }}
                    className={selectClass}
                  >
                    <option value="">—</option>
                    {MESES.map((name, index) => (
                      <option key={name} value={index + 1}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="birth-year"
                    className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.1em] text-muted"
                  >
                    Año
                  </label>
                  <select
                    id="birth-year"
                    value={year}
                    onChange={(event) => {
                      setYear(event.target.value);
                      setHasCalculated(false);
                    }}
                    className={selectClass}
                  >
                    <option value="">—</option>
                    {ANIOS.map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </fieldset>

            {hasDateError ? (
              <p
                id="birthdate-error"
                role="alert"
                className="mt-3 rounded-lg bg-red-50 p-2.5 text-xs font-extrabold leading-relaxed text-red-700 border border-red-200"
              >
                Ingresa una fecha válida dentro del rango indicado para el
                proceso {admissionCutoff.year}.
              </p>
            ) : (
              <p
                id="birthdate-help"
                className="mt-3 text-xs leading-relaxed text-muted"
              >
                El corte oficial MINEDUC es al <strong>31 de marzo</strong>: si
                cumple años antes o después de esa fecha cambia el nivel asignado.
              </p>
            )}

            <div className="mt-5 flex gap-2">
              <button
                type="submit"
                className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-extrabold text-white transition-all hover:bg-primary-dark active:scale-[0.98] shadow-xs cursor-pointer"
              >
                <Calendar className="h-4 w-4" aria-hidden="true" />
                Calcular nivel para 2027
              </button>
              {hasCalculated && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border bg-surface-sunk px-3 text-xs font-semibold text-muted hover:bg-surface hover:text-ink transition-colors cursor-pointer"
                  title="Limpiar fecha"
                >
                  Limpiar
                </button>
              )}
            </div>

            <p className="mt-4 flex items-start gap-2 text-[11px] sm:text-xs leading-relaxed text-muted border-t border-border/50 pt-3">
              <Lightbulb className="h-4 w-4 shrink-0 mt-0.5 text-accent" />
              <span>
                La vacante definitiva se oficializa con la evaluación
                fonoaudiológica <strong>gratuita</strong>.
              </span>
            </p>
          </form>

          {/* Panel de resultado */}
          <div aria-live="polite" className="min-w-0 w-full lg:col-span-7">
            {!result ? (
              <div className="min-w-0 rounded-2xl border border-border/80 bg-surface p-6 sm:p-8 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-primary mb-2">
                  <span>Guía de Referencia</span>
                </div>
                <h3 className="font-display text-xl font-extrabold leading-tight text-ink sm:text-2xl">
                  Niveles educativos según edad
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  Selecciona el año de nacimiento o ingresa la fecha exacta para
                  ver el nivel asignado según la normativa oficial al {admissionCutoff.label}.
                </p>

                <ul className="mt-5 space-y-3">
                  {schoolLevels.map((level) => (
                    <li
                      key={level.id}
                      className="flex items-center justify-between gap-4 rounded-xl border border-border bg-surface-sunk p-4 transition-all hover:border-primary/40 hover:bg-surface"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          {level.id === "medio-mayor" ? (
                            <Baby className="h-5 w-5" aria-hidden="true" />
                          ) : (
                            <GraduationCap
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="font-display text-base font-extrabold leading-tight text-ink">
                            {level.name}
                          </p>
                          <p className="text-xs text-muted">
                            {level.ageYears} años cumplidos al {admissionCutoff.label}
                          </p>
                        </div>
                      </div>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-extrabold text-primary shrink-0">
                        {level.journeys.join(" · ")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="animate-fade-up relative flex min-w-0 flex-col justify-between overflow-hidden rounded-2xl border-2 border-primary/20 bg-surface p-5 sm:p-7 lg:p-8 shadow-sm">
                <VoiceContour
                  variant="arc"
                  className="pointer-events-none absolute right-5 top-6 h-9 w-24 text-accent/30"
                />

                {/* Barra de estado superior */}
                <div
                  className={`absolute top-0 inset-x-0 h-2 ${
                    result.status === "eligible" ? "bg-primary" : "bg-accent"
                  }`}
                />

                {/* Header con icono y badge */}
                <div className="mb-4 flex min-w-0 items-start justify-between gap-3 pt-1">
                  <div className="flex min-w-0 items-center gap-3">
                    <div
                      className={`flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl shrink-0 ${
                        result.status === "eligible"
                          ? "bg-primary text-white"
                          : "bg-accent/15 text-accent"
                      }`}
                    >
                      <result.icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-muted">
                        Resultado del cálculo
                      </p>
                      <h3 className="min-w-0 font-extrabold leading-tight text-ink font-display text-xl sm:text-2xl">
                        {result.status === "eligible"
                          ? `Le corresponde ${result.levelName}`
                          : result.levelName}
                      </h3>
                    </div>
                  </div>
                  <span
                    className={`hidden sm:inline-flex rounded-full px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider shrink-0 ${
                      result.status === "eligible"
                        ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                        : "bg-amber-100 text-amber-900 border border-amber-300"
                    }`}
                  >
                    {result.status === "eligible"
                      ? "✓ Cumple requisito"
                      : "ℹ Orientación"}
                  </span>
                </div>

                {/* Badge solo en móvil, debajo del título */}
                <span
                  className={`sm:hidden inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider mb-3 ${
                    result.status === "eligible"
                      ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                      : "bg-amber-100 text-amber-900 border border-amber-300"
                  }`}
                >
                  {result.status === "eligible"
                    ? "✓ Cumple requisito de edad"
                    : "ℹ Requiere orientación"}
                </span>

                <p className="mb-4 text-sm sm:text-base leading-relaxed text-ink/90 font-medium">
                  {result.description}
                </p>

                <div className="mb-4 rounded-xl border border-primary/15 bg-surface-sunk p-4 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
                      Edad calculada al {admissionCutoff.label}
                    </p>
                    <p className="mt-0.5 font-display text-xl font-extrabold text-ink">
                      {ageAtCutoffLabel}
                    </p>
                  </div>
                  <span className="rounded-lg bg-surface px-3 py-1 text-xs font-extrabold text-primary border border-border">
                    {formattedDate}
                  </span>
                </div>

                {result.status === "eligible" && (
                  <div className="mb-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-border bg-surface-sunk/60 p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
                        Sedes donde se imparte
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {resultCampuses.map((campus) => (
                          <li
                            key={campus.id}
                            className="flex items-start gap-2 text-xs font-extrabold text-ink"
                          >
                            <CheckCircle2
                              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary"
                              aria-hidden="true"
                            />
                            {campus.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl border border-border bg-surface-sunk/60 p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
                        Jornadas disponibles
                      </p>
                      <p className="mt-2 text-xs font-extrabold text-ink">
                        {result.journeys.join(" y ")}
                      </p>
                      <p className="mt-1 text-[10px] leading-relaxed text-muted">
                        Mañana 08:15–12:15 · Tarde 13:30–17:15
                      </p>
                    </div>
                  </div>
                )}

                <ul className="space-y-2 mb-5">
                  {result.bulletPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-muted leading-snug"
                    >
                      {result.status === "eligible" ? (
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      ) : (
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      )}
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {result.status === "eligible" && (
                  <div className="mb-5 flex items-center justify-between gap-3 rounded-xl bg-primary px-4 py-3 text-white shadow-xs">
                    <div>
                      <span className="text-xs font-extrabold block">
                        Educación 100% Gratuita & Evaluación
                      </span>
                      <span className="text-[10px] text-white/80">
                        Subvención MINEDUC · Sin mensualidad
                      </span>
                    </div>
                    <strong className="font-display text-2xl text-action font-extrabold">
                      $0
                    </strong>
                  </div>
                )}

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-action px-5 py-4 text-sm sm:text-base font-extrabold text-primary-dark transition-all hover:bg-action-hover active:scale-[0.98] shadow-md shadow-amber-500/10 text-center"
                >
                  <MessageCircle className="h-5 w-5 shrink-0" />
                  <span>
                    {result.status === "eligible"
                      ? `Consultar cupos para ${result.levelName}`
                      : "Pedir Orientación por WhatsApp"}
                  </span>
                </a>
                {result.status === "eligible" && (
                  <Link
                    href="/sedes"
                    className="mt-3 flex min-h-11 w-full items-center justify-center text-center text-xs font-bold text-primary hover:text-primary-dark sm:text-sm"
                  >
                    Conocer fotos, direcciones y horarios de las sedes →
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
