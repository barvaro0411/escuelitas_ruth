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

  if (
    Number.isNaN(birthDate.getTime()) ||
    birthDate.getFullYear() !== year ||
    birthDate.getMonth() !== month ||
    birthDate.getDate() !== day
  ) {
    return null;
  }

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
        "Cumple los requisitos para ingresar a Medio Mayor en 2027.",
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
        "Cumple los requisitos para ingresar a Pre-Kínder en 2027.",
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
  const result = calculateEligibility(birthdate);

  const formattedDate = birthdate
    ? birthdate.split("-").reverse().join("/")
    : "";
  const whatsappMessage =
    result?.status === "eligible"
      ? `Hola, usé la calculadora en su web. Mi hijo(a) nació el ${formattedDate} y califica para ${result.levelName} en 2027. Quisiera agendar la evaluación fonoaudiológica gratuita.`
      : `Hola, usé la calculadora en su web. Mi hijo(a) nació el ${formattedDate} y quisiera recibir orientación sobre cupos.`;
  const whatsappUrl = result ? buildWhatsAppUrl(whatsappMessage) : "#";

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-start">

          {/* Panel de entrada */}
          <div className="lg:col-span-5 w-full rounded-2xl lg:rounded-[2rem] border border-border/80 bg-white p-4 sm:p-6 lg:p-8 shadow-md">
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
              onChange={(event) => setBirthdate(event.target.value)}
              max="2027-03-31"
              min="2019-01-01"
              className="w-full rounded-xl border-2 border-border/70 bg-surface-raised px-3 sm:px-4 py-3 text-sm font-black text-foreground outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 cursor-pointer mb-4"
            />

            <p className="text-xs font-bold leading-relaxed text-foreground/70">
              Necesitamos el día, mes y año exactos: el nivel puede cambiar si el cumpleaños es antes o después del 31 de marzo.
            </p>

            <p className="mt-4 flex items-start gap-2 text-[10px] sm:text-xs font-bold leading-relaxed text-foreground/65 border-t border-border/50 pt-3">
              <Lightbulb className="h-3.5 w-3.5 shrink-0 mt-0.5 text-brand-yellow-dark" />
              <span>La vacante se oficializa con la evaluación fonoaudiológica gratuita.</span>
            </p>
          </div>

          {/* Panel de resultado */}
          <div aria-live="polite" className="lg:col-span-7 w-full">
            {!result ? (
              <div className="flex flex-col items-center justify-center rounded-2xl lg:rounded-[2rem] border-2 border-dashed border-primary/15 bg-white/70 p-6 sm:p-8 lg:p-10 text-center min-h-[140px] sm:min-h-[180px] lg:min-h-[300px]">
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
              <div className="relative flex flex-col justify-between rounded-2xl lg:rounded-[2rem] border-2 border-primary/15 bg-white p-4 sm:p-6 lg:p-8 shadow-lg overflow-hidden">
                {/* Barra de estado superior */}
                <div
                  className={`absolute top-0 inset-x-0 h-1.5 sm:h-2 ${
                    result.status === "eligible"
                      ? "bg-gradient-to-r from-emerald-500 via-emerald-400 to-secondary"
                      : "bg-gradient-to-r from-amber-500 via-amber-400 to-brand-yellow"
                  }`}
                />

                {/* Header con icono y badge */}
                <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4 pt-1">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                      <result.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-foreground leading-tight font-display">
                      {result.levelName}
                    </h3>
                  </div>
                  <span
                    className={`hidden sm:inline-flex rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wider shrink-0 ${
                      result.status === "eligible"
                        ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                        : "bg-amber-100 text-amber-900 border border-amber-300"
                    }`}
                  >
                    {result.status === "eligible" ? "Cumple requisitos" : "Orientación"}
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
                  {result.status === "eligible" ? "✓ Cumple requisitos" : "⚠ Orientación especial"}
                </span>

                <p className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold leading-relaxed text-foreground/70">
                  {result.description}
                </p>

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

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-yellow px-4 py-3 sm:py-3.5 text-xs sm:text-sm font-black text-primary-dark shadow-lg shadow-brand-yellow/20 transition-all hover:bg-brand-yellow-light active:scale-[0.97] text-center"
                >
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                  <span>
                    {result.status === "eligible"
                      ? "Agendar Evaluación Gratis"
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
