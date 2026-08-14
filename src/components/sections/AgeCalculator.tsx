"use client";

import { useState, type ComponentType } from "react";
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
import { buildWhatsAppUrl } from "@/lib/site";

type CalculationResult = {
  status: "eligible" | "too_young" | "too_old";
  levelName: string;
  description: string;
  bulletPoints: string[];
  icon: ComponentType<{ className?: string }>;
};

function calculateEligibility(dateStr: string): CalculationResult | null {
  if (!dateStr) return null;

  const [yearValue, monthValue, dayValue] = dateStr.split("-");
  const year = Number(yearValue);
  const month = Number(monthValue) - 1;
  const day = Number(dayValue);

  if (!year || month < 0 || !day || year < 1900 || year > 2027) return null;

  const birthDate = new Date(year, month, day);
  const cutoffDate = new Date(2027, 2, 31);

  if (Number.isNaN(birthDate.getTime())) return null;

  let age = cutoffDate.getFullYear() - birthDate.getFullYear();
  const monthDiff = cutoffDate.getMonth() - birthDate.getMonth();
  const dayDiff = cutoffDate.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) age -= 1;

  if (age === 3) {
    return {
      status: "eligible",
      levelName: "Medio Mayor",
      icon: Baby,
      description:
        "Por edad, cumple los requisitos para ingresar a Medio Mayor en el año escolar 2027.",
      bulletPoints: [
        "Educación 100% gratuita para la familia.",
        "Evaluación fonoaudiológica inicial sin costo.",
        "Apoyo pedagógico y estimulación continua del lenguaje.",
      ],
    };
  }

  if (age === 4) {
    return {
      status: "eligible",
      levelName: "Pre-Kínder (NT1)",
      icon: GraduationCap,
      description:
        "Por edad, cumple los requisitos para ingresar a Pre-Kínder en el año escolar 2027.",
      bulletPoints: [
        "Educación 100% gratuita para la familia.",
        "Evaluación fonoaudiológica inicial sin costo.",
        "Trabajo integrado de articulación y conciencia fonológica.",
      ],
    };
  }

  if (age === 5) {
    return {
      status: "eligible",
      levelName: "Kínder (NT2)",
      icon: GraduationCap,
      description:
        "Por edad, cumple los requisitos para ingresar a Kínder en el año escolar 2027.",
      bulletPoints: [
        "Preparación para la transición a Educación Básica.",
        "Acompañamiento de educadoras diferenciales y fonoaudiólogas.",
        "Fortalecimiento de la autonomía y habilidades pre-lectoras.",
      ],
    };
  }

  if (age < 3) {
    return {
      status: "too_young",
      levelName: "Menor de 3 años",
      icon: Baby,
      description:
        "Al 31 de marzo de 2027 tendrá menos de 3 años. Puedes escribirnos para recibir orientación para los próximos periodos.",
      bulletPoints: [
        "La edad mínima legal para Medio Mayor es de 3 años cumplidos al 31 de marzo de 2027.",
        "Te invitamos a contactarnos para orientarte en estimulación temprana.",
      ],
    };
  }

  return {
    status: "too_old",
    levelName: "Mayor de 5 años 11 meses",
    icon: GraduationCap,
    description:
      "Al 31 de marzo de 2027 tendrá 6 años o más. Podemos orientarte con alternativas para educación básica regular con PIE.",
    bulletPoints: [
      "Las escuelas de lenguaje atienden hasta el nivel Kínder (5 años 11 meses).",
      "Te asesoramos en los pasos siguientes de postulación.",
    ],
  };
}

export default function AgeCalculator() {
  const [birthdate, setBirthdate] = useState("");
  const result = calculateEligibility(birthdate);

  const formattedDate = birthdate
    ? birthdate.split("-").reverse().join("/")
    : "";
  const whatsappMessage =
    result?.status === "eligible"
      ? `Hola, usé la calculadora de admisión en su web. Mi hijo(a) nació el ${formattedDate} y califica para ${result.levelName} en 2027. Quisiera agendar la evaluación fonoaudiológica gratuita.`
      : `Hola, usé la calculadora de admisión en su web. Mi hijo(a) nació el ${formattedDate} y quisiera recibir orientación sobre cupos.`;
  const whatsappUrl = result ? buildWhatsAppUrl(whatsappMessage) : "#";

  return (
    <section className="relative w-full max-w-full overflow-hidden border-b border-border bg-gradient-to-b from-white via-surface-yellow/30 to-white py-12 sm:py-20 md:py-28">
      {/* Elementos decorativos de fondo con overflow controlado */}
      <div className="absolute top-1/4 left-0 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-brand-yellow/15 blur-3xl -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-primary/10 blur-3xl translate-x-1/2 pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 box-border">
        {/* Encabezado */}
        <div className="mb-6 sm:mb-10 max-w-3xl relative">
          <div
            className="absolute -top-4 right-0 hidden lg:inline-flex items-center gap-2 rounded-2xl bg-white border border-border shadow-lg px-4 py-2.5 animate-float"
            style={{ animationDelay: "600ms" }}
          >
            <Lightbulb className="h-4 w-4 text-brand-yellow-dark shrink-0" />
            <span className="text-xs font-black text-foreground">
              Cálculo oficial al 31 de marzo de 2027
            </span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/20 px-3.5 py-1.5 text-xs font-black uppercase tracking-wider text-brand-yellow-dark mb-3 sm:mb-4">
            <Sparkles size={14} className="shrink-0" />
            Calculadora de Nivel 2027
          </div>

          <h2 className="mb-3 text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground font-display leading-tight break-words">
            Revisa qué nivel le corresponde a tu hijo por edad
          </h2>

          <p className="text-sm sm:text-base md:text-lg font-semibold leading-relaxed text-foreground/75">
            Ingresa la fecha de nacimiento de tu hijo(a). El cálculo oficial se realiza según la edad cumplida al <strong>31 de marzo de 2027</strong>.
          </p>
        </div>

        {/* Grid de 2 Columnas responsivo */}
        <div className="grid w-full max-w-full min-w-0 grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-stretch box-border">
          {/* Panel Izquierdo - Entrada de Fecha */}
          <div className="lg:col-span-5 w-full max-w-full min-w-0 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] border border-border/90 bg-white p-4 sm:p-6 md:p-8 shadow-md flex flex-col justify-between box-border">
            <div className="w-full min-w-0">
              <div className="mb-4 sm:mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-primary/10 text-primary shrink-0">
                  <Calendar className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <label
                    htmlFor="birthdate"
                    className="block text-sm sm:text-base font-black text-foreground font-display leading-tight"
                  >
                    Fecha de nacimiento
                  </label>
                  <p className="text-[11px] sm:text-xs font-bold text-foreground/60 mt-0.5 truncate">
                    Edad al 31 de marzo de 2027
                  </p>
                </div>
              </div>

              {/* Input de Fecha Nativo con ancho 100% real */}
              <div className="w-full min-w-0 mb-4 sm:mb-5">
                <input
                  id="birthdate"
                  type="date"
                  value={birthdate}
                  onChange={(event) => setBirthdate(event.target.value)}
                  max="2027-03-31"
                  min="2019-01-01"
                  className="w-full max-w-full min-w-0 box-border rounded-xl sm:rounded-2xl border-2 border-border/80 bg-surface-raised px-3.5 sm:px-5 py-3 text-sm sm:text-base font-black text-foreground outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 cursor-pointer"
                />
              </div>

              {/* Botones Rápidos por Año de Nacimiento */}
              <div className="w-full min-w-0">
                <p className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-foreground/60 mb-2">
                  O presiona el año de nacimiento:
                </p>
                <div className="grid grid-cols-4 gap-1.5 sm:gap-2 w-full min-w-0">
                  {[
                    { year: "2023", label: "2023", date: "2023-05-15" },
                    { year: "2022", label: "2022", date: "2022-05-15" },
                    { year: "2021", label: "2021", date: "2021-05-15" },
                    { year: "2020", label: "2020", date: "2020-05-15" },
                  ].map((preset) => (
                    <button
                      key={preset.year}
                      type="button"
                      onClick={() => setBirthdate(preset.date)}
                      className={`min-w-0 w-full rounded-xl sm:rounded-2xl py-2.5 sm:py-3 text-xs sm:text-sm font-black transition-all text-center truncate ${
                        birthdate.startsWith(preset.year)
                          ? "bg-primary text-white shadow-md shadow-primary/20 scale-[1.02]"
                          : "bg-surface-raised border border-border/80 text-foreground/80 hover:bg-primary/10 hover:text-primary active:scale-95"
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-5 sm:mt-7 flex items-start gap-2 text-[11px] sm:text-xs font-bold leading-relaxed text-foreground/60 border-t border-border/60 pt-3.5 sm:pt-4">
              <Lightbulb className="h-4 w-4 shrink-0 mt-0.5 text-brand-yellow-dark" />
              <span>La vacante se oficializa con la evaluación fonoaudiológica sin costo en la escuela.</span>
            </p>
          </div>

          {/* Panel Derecho - Resultado Animado */}
          <div aria-live="polite" className="lg:col-span-7 w-full max-w-full min-w-0 min-h-[200px] sm:min-h-[260px] flex flex-col justify-stretch">
            {!result ? (
              <div className="flex h-full min-h-[200px] sm:min-h-[260px] flex-col items-center justify-center rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] border-2 border-dashed border-primary/20 bg-white/80 backdrop-blur-md p-5 sm:p-8 text-center box-border">
                <div className="h-11 w-11 sm:h-14 sm:w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3 animate-bounce shrink-0">
                  <Baby className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <h3 className="mb-1 text-lg sm:text-2xl font-black text-foreground font-display leading-tight">
                  Ingresa la fecha de tu hijo(a)
                </h3>
                <p className="max-w-xs text-xs sm:text-sm font-semibold text-foreground/65 leading-relaxed">
                  Selecciona la fecha o presiona un año arriba para conocer el nivel pedagógico al instante.
                </p>
              </div>
            ) : (
              <div className="relative flex h-full w-full max-w-full min-w-0 flex-col justify-between rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] border-2 border-primary/20 bg-white p-4 sm:p-6 md:p-8 shadow-xl transition-all overflow-hidden box-border">
                <div
                  className={`absolute top-0 inset-x-0 h-2 ${
                    result.status === "eligible"
                      ? "bg-gradient-to-r from-emerald-500 via-emerald-400 to-secondary"
                      : "bg-gradient-to-r from-amber-500 via-amber-400 to-brand-yellow"
                  }`}
                />
                <div className="w-full min-w-0">
                  <div className="mb-3.5 sm:mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-primary/10 text-primary shrink-0">
                        <result.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <span className="text-xs font-black text-foreground/60 sm:hidden">Resultado:</span>
                    </div>

                    <span
                      className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-[11px] sm:text-xs font-black uppercase tracking-wider text-center w-full sm:w-auto ${
                        result.status === "eligible"
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                          : "bg-amber-100 text-amber-900 border border-amber-300"
                      }`}
                    >
                      {result.status === "eligible"
                        ? "Cumple Requisitos"
                        : "Orientación Especial"}
                    </span>
                  </div>

                  <h3 className="mb-2 text-xl sm:text-2xl md:text-3xl font-black text-foreground leading-tight font-display break-words">
                    {result.levelName}
                  </h3>

                  <p className="mb-3.5 sm:mb-5 text-xs sm:text-sm md:text-base font-semibold leading-relaxed text-foreground/75">
                    {result.description}
                  </p>

                  <ul className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-6">
                    {result.bulletPoints.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-xs sm:text-sm font-bold text-foreground/85 leading-snug"
                      >
                        {result.status === "eligible" ? (
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                        ) : (
                          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                        )}
                        <span className="break-words">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 sm:mt-5 flex w-full max-w-full min-w-0 items-center justify-center gap-2 rounded-xl sm:rounded-2xl bg-brand-yellow px-3 sm:px-6 py-3.5 sm:py-4 font-black text-primary-dark shadow-xl shadow-brand-yellow/25 transition-all hover:bg-brand-yellow-light active:scale-95 text-center box-border"
                >
                  <MessageCircle className="h-5 w-5 shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base leading-snug break-words">
                    {result.status === "eligible"
                      ? "Agendar Evaluación Fonoaudiológica Gratis"
                      : "Pedir Orientación por WhatsApp"}
                  </span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
