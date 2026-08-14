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
        "Apoyo pedagógico y terapia de lenguaje continua.",
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
        "Trabajo integrado de desarrollo cognitivo y fonológico.",
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
        "Acompañamiento especializado de educadoras y fonoaudióloga.",
        "Fortalecimiento de la autonomía y habilidades de articulación.",
      ],
    };
  }

  if (age < 3) {
    return {
      status: "too_young",
      levelName: "Aún no cumple la edad mínima de ingreso",
      icon: Baby,
      description:
        "Al 31 de marzo de 2027 tendrá menos de 3 años. Puedes escribirnos para recibir orientación personalizada para los próximos años.",
      bulletPoints: [
        "La edad mínima legal para Medio Mayor es de 3 años cumplidos al 31 de marzo de 2027.",
        "Te invitamos a dejar tus datos para notificarte en el siguiente proceso.",
      ],
    };
  }

  return {
    status: "too_old",
    levelName: "Edad superior al nivel Kínder",
    icon: GraduationCap,
    description:
      "Al 31 de marzo de 2027 tendrá 6 años o más. Podemos orientarte con alternativas para educación básica.",
    bulletPoints: [
      "Las escuelas de lenguaje atienden hasta el nivel Kínder.",
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
      ? `Hola, usé la calculadora de admisión. Mi hijo(a) nació el ${formattedDate} y califica para ${result.levelName} en 2027. Quisiera agendar la evaluación fonoaudiológica gratuita.`
      : `Hola, usé la calculadora de admisión. Mi hijo(a) nació el ${formattedDate} y quisiera recibir orientación sobre cupos.`;
  const whatsappUrl = result ? buildWhatsAppUrl(whatsappMessage) : "#";

  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-white via-surface-yellow/40 to-white py-20 sm:py-28">
      {/* Elementos decorativos */}
      <div className="absolute top-1/4 left-0 h-96 w-96 rounded-full bg-brand-yellow/15 blur-3xl -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl translate-x-1/2 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 max-w-3xl relative">
          <div
            className="absolute -top-4 right-0 hidden lg:inline-flex items-center gap-2 rounded-2xl bg-white border border-border shadow-lg px-4 py-2.5 animate-float"
            style={{ animationDelay: "600ms" }}
          >
            <Lightbulb className="h-4 w-4 text-brand-yellow-dark" />
            <span className="text-xs font-black text-foreground">
              Cálculo oficial al 31 de marzo de 2027
            </span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/20 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-brand-yellow-dark mb-4">
            <Sparkles size={14} />
            Calculadora de Nivel 2027
          </div>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-foreground sm:text-5xl font-display">
            Revisa qué nivel le corresponde a tu hijo por edad
          </h2>
          <p className="text-lg font-semibold leading-relaxed text-foreground/75">
            Ingresa la fecha de nacimiento de tu hijo(a). El cálculo oficial se realiza según la edad cumplida al <strong>31 de marzo de 2027</strong>.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] items-stretch">
          {/* Panel Izquierdo - Entrada de Fecha */}
          <div className="rounded-[2.5rem] border border-border/90 bg-white p-7 sm:p-9 shadow-lg card-hover flex flex-col justify-between">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Calendar className="h-7 w-7" />
                </div>
                <div>
                  <label
                    htmlFor="birthdate"
                    className="block text-lg font-black text-foreground font-display"
                  >
                    Fecha de nacimiento
                  </label>
                  <p className="text-xs font-bold text-foreground/60">
                    Cálculo oficial al 31 de marzo de 2027
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
                className="w-full rounded-2xl border-2 border-border/80 bg-surface-raised px-6 py-4.5 text-base font-black text-foreground outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 cursor-pointer mb-5"
              />

              {/* Botones Rápidos por Año de Nacimiento */}
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-foreground/60 mb-3">
                  O presiona el año de nacimiento:
                </p>
                <div className="grid grid-cols-4 gap-2">
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
                      className={`rounded-2xl py-3 text-xs font-black transition-all ${
                        birthdate.startsWith(preset.year)
                          ? "bg-primary text-white shadow-md shadow-primary/20 scale-105"
                          : "bg-surface-raised border border-border/80 text-foreground/80 hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-8 flex items-start gap-2 text-xs font-bold leading-relaxed text-foreground/60 border-t border-border/60 pt-5">
              <Lightbulb className="h-4 w-4 shrink-0 mt-0.5 text-brand-yellow-dark" />
              La confirmación definitiva de la vacante requiere de la evaluación fonoaudiológica sin costo que realizamos en nuestras sedes.
            </p>
          </div>

          {/* Panel Derecho - Resultado Animado */}
          <div aria-live="polite" className="min-h-72">
            {!result ? (
              <div className="flex h-full min-h-72 flex-col items-center justify-center rounded-[2.5rem] border-2 border-dashed border-primary/20 bg-white/70 backdrop-blur-md p-8 text-center card-hover">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 animate-bounce">
                  <Baby size={32} />
                </div>
                <h3 className="mb-2 text-2xl font-black text-foreground font-display">
                  Ingresa la fecha de tu hijo
                </h3>
                <p className="max-w-xs text-sm font-semibold text-foreground/65 leading-relaxed">
                  Selecciona la fecha o presiona un año arriba para conocer el nivel pedagógico al instante.
                </p>
              </div>
            ) : (
              <div className="relative flex h-full flex-col justify-between rounded-[2.5rem] border-2 border-primary/20 bg-white p-7 sm:p-9 shadow-xl hover:shadow-2xl transition-all overflow-hidden">
                <div
                  className={`absolute top-0 inset-x-0 h-2.5 ${
                    result.status === "eligible"
                      ? "bg-gradient-to-r from-emerald-500 via-emerald-400 to-secondary"
                      : "bg-gradient-to-r from-amber-500 via-amber-400 to-brand-yellow"
                  }`}
                />
                <div>
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <result.icon className="h-7 w-7" />
                    </div>
                    <span
                      className={`rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-wider ${
                        result.status === "eligible"
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                          : "bg-amber-100 text-amber-900 border border-amber-300"
                      }`}
                    >
                      {result.status === "eligible"
                        ? "Cumple Requisitos de Ingreso"
                        : "Requiere Evaluación Especial"}
                    </span>
                  </div>

                  <h3 className="mb-3 text-3xl font-black text-foreground leading-tight font-display">
                    {result.levelName}
                  </h3>
                  <p className="mb-6 text-base font-semibold leading-relaxed text-foreground/75">
                    {result.description}
                  </p>

                  <ul className="space-y-3.5 mb-6">
                    {result.bulletPoints.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm font-bold text-foreground/85"
                      >
                        {result.status === "eligible" ? (
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                        ) : (
                          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                        )}
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-yellow px-8 py-4.5 font-black text-primary-dark shadow-xl shadow-brand-yellow/25 transition-all hover:bg-brand-yellow-light hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-5 w-5" />
                  {result.status === "eligible"
                    ? "Agendar Evaluación Fonoaudiológica Gratis"
                    : "Pedir Orientación por WhatsApp"}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
