"use client";

import { useState } from "react";
import {
  Apple,
  Clock,
  Heart,
  MessageCircle,
  Moon,
  Palette,
  Smile,
  Sparkles,
  Star,
  Sun,
  Users,
} from "lucide-react";

type RoutineStep = {
  morningTime: string;
  afternoonTime: string;
  title: string;
  emoji: string;
  tag: string;
  description: string;
  icon: typeof Sun;
  headerGradient: string;
  iconBg: string;
  cardBorder: string;
  badgeStyle: string;
};

const routineSteps: RoutineStep[] = [
  {
    morningTime: "08:15 - 08:45",
    afternoonTime: "13:30 - 14:00",
    title: "Bienvenida y Círculo de Saludo",
    emoji: "☀️",
    tag: "Abrazo y acogida",
    description:
      "Recibimiento afectuoso de cada niño y niña en sala. Cantamos la canción del saludo, revisamos el panel del tiempo y cómo nos sentimos hoy.",
    icon: Heart,
    headerGradient: "from-pink-500 to-rose-400",
    iconBg: "bg-pink-100 text-pink-700",
    cardBorder: "border-pink-200/80 hover:border-pink-400",
    badgeStyle: "bg-pink-100 text-pink-800 border-pink-200",
  },
  {
    morningTime: "08:45 - 09:45",
    afternoonTime: "14:00 - 15:00",
    title: "Estimulación Fonoaudiológica y Habla",
    emoji: "🗣️",
    tag: "Juegos del lenguaje",
    description:
      "Talleres en grupos pequeños con nuestras fonoaudiólogas: juegos frente al espejo, rimas, trabalenguas lúdicos, cuentos gigantes y articulación de sonidos.",
    icon: MessageCircle,
    headerGradient: "from-sky-500 to-cyan-400",
    iconBg: "bg-sky-100 text-sky-700",
    cardBorder: "border-sky-200/80 hover:border-sky-400",
    badgeStyle: "bg-sky-100 text-sky-800 border-sky-200",
  },
  {
    morningTime: "09:45 - 10:30",
    afternoonTime: "15:00 - 15:45",
    title: "Taller de Pequeños Artistas",
    emoji: "🎨",
    tag: "Creatividad y motricidad",
    description:
      "Plastilinas de colores, dactilopintura con deditos, rasgado de papel volantín y encajes que fortalecen la motricidad fina y la imaginación.",
    icon: Palette,
    headerGradient: "from-amber-400 to-yellow-300",
    iconBg: "bg-amber-100 text-amber-800",
    cardBorder: "border-amber-200/80 hover:border-amber-400",
    badgeStyle: "bg-amber-100 text-amber-900 border-amber-200",
  },
  {
    morningTime: "10:30 - 11:00",
    afternoonTime: "15:45 - 16:15",
    title: "Colación Compartida y Autonomía",
    emoji: "🍎",
    tag: "Hábitos saludables",
    description:
      "¡Hora de reponer energías! Lavado de manitos con espuma divertida, abrir sus colaciones de forma autónoma y compartir modales en la mesita con amigos.",
    icon: Apple,
    headerGradient: "from-emerald-500 to-teal-400",
    iconBg: "bg-emerald-100 text-emerald-800",
    cardBorder: "border-emerald-200/80 hover:border-emerald-400",
    badgeStyle: "bg-emerald-100 text-emerald-800 border-emerald-200",
  },
  {
    morningTime: "11:00 - 11:45",
    afternoonTime: "16:15 - 17:00",
    title: "Recreo Feliz en Patio Techado",
    emoji: "🏰",
    tag: "Juegos y movimiento",
    description:
      "Casitas de muñecas, autitos, rayuela y risas en patios completamente techados protegidos del sol y lluvia, siempre con tías atentas acompañando el juego.",
    icon: Smile,
    headerGradient: "from-purple-500 to-violet-400",
    iconBg: "bg-purple-100 text-purple-700",
    cardBorder: "border-purple-200/80 hover:border-purple-400",
    badgeStyle: "bg-purple-100 text-purple-800 border-purple-200",
  },
  {
    morningTime: "11:45 - 12:15",
    afternoonTime: "17:00 - 17:15",
    title: "Cierre, Estrellita y Despedida",
    emoji: "⭐",
    tag: "¡Hasta mañana!",
    description:
      "Canción final de despedida, entrega de sus trabajitos y encuentro cariñoso con papá, mamá o apoderado, contándoles cómo estuvo su gran día.",
    icon: Star,
    headerGradient: "from-blue-600 to-indigo-500",
    iconBg: "bg-blue-100 text-blue-800",
    cardBorder: "border-blue-200/80 hover:border-blue-400",
    badgeStyle: "bg-blue-100 text-blue-800 border-blue-200",
  },
];

export default function DailyRoutine() {
  const [activeShift, setActiveShift] = useState<"manana" | "tarde">("manana");

  return (
    <section
      aria-labelledby="daily-routine-title"
      className="relative overflow-hidden border-b border-border bg-gradient-to-b from-paper via-white to-surface-sunk/30 py-18 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-action/40 bg-action/25 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-primary-dark shadow-xs mb-3">
              <Sparkles className="h-4 w-4 text-amber-500" aria-hidden="true" />
              <span>Un día lleno de amor y juego</span>
            </div>
            <h2
              id="daily-routine-title"
              className="font-display font-extrabold text-ink text-3xl sm:text-4xl lg:text-5xl tracking-tight"
            >
              Así es un día en Escuelitas Ruth
            </h2>
            <p className="mt-3 text-base text-muted leading-relaxed sm:text-lg">
              Cada momento de la jornada está diseñado para que los niños se
              sientan seguros, felices y motivados a comunicarse. ¡Cambia de
              jornada para ver los horarios!
            </p>
          </div>

          {/* Selector de jornada tipo cápsula interactiva */}
          <div className="inline-flex rounded-2xl border-2 border-primary/20 bg-white p-1.5 shadow-md">
            <button
              type="button"
              onClick={() => setActiveShift("manana")}
              className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-xs sm:text-sm font-extrabold transition-all duration-200 cursor-pointer ${
                activeShift === "manana"
                  ? "bg-gradient-to-r from-amber-400 to-amber-500 text-primary-dark shadow-xs scale-102"
                  : "text-muted hover:text-ink"
              }`}
            >
              <Sun className="h-4 w-4 text-amber-900" aria-hidden="true" />
              <span>Jornada Mañana</span>
              <span className="hidden sm:inline font-bold opacity-85">(08:15 - 12:15)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveShift("tarde")}
              className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-xs sm:text-sm font-extrabold transition-all duration-200 cursor-pointer ${
                activeShift === "tarde"
                  ? "bg-gradient-to-r from-primary to-primary-dark text-white shadow-xs scale-102"
                  : "text-muted hover:text-ink"
              }`}
            >
              <Moon className="h-4 w-4 text-accent-on-dark" aria-hidden="true" />
              <span>Jornada Tarde</span>
              <span className="hidden sm:inline font-bold opacity-85">(13:30 - 17:15)</span>
            </button>
          </div>
        </div>

        {/* Cuadrícula de momentos de la rutina */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {routineSteps.map((step, index) => {
            const timeLabel =
              activeShift === "manana" ? step.morningTime : step.afternoonTime;
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${step.cardBorder}`}
              >
                {/* Franja superior de color */}
                <div className={`h-2.5 w-full bg-gradient-to-r ${step.headerGradient}`} />

                <div className="p-6 sm:p-7">
                  {/* Top Bar: Icono + Horario destacado */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div
                      className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 shadow-xs ${step.iconBg}`}
                    >
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="font-display text-sm sm:text-base font-extrabold text-ink">
                        {timeLabel}
                      </span>
                      <span
                        className={`mt-1 inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-extrabold ${step.badgeStyle}`}
                      >
                        {step.tag}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl" aria-hidden="true">
                      {step.emoji}
                    </span>
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-muted">
                      Momento {index + 1}
                    </p>
                  </div>

                  <h3 className="font-display font-extrabold text-ink text-xl leading-snug">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>

                <div className="px-6 py-3 bg-paper/60 border-t border-border/50 text-[11px] font-bold text-primary flex items-center justify-between">
                  <span>Acompañamiento cercano</span>
                  <span className="text-muted">Paso {index + 1} de 6</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
