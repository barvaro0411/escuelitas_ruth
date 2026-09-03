import {
  Compass,
  Heart,
  Music,
  Palette,
  PartyPopper,
  Sparkles,
  Smile,
  Utensils,
} from "lucide-react";

type Workshop = {
  title: string;
  badge: string;
  tagline: string;
  description: string;
  benefits: string[];
  icon: typeof Sparkles;
  accentBg: string;
  iconBg: string;
  borderAccent: string;
};

const workshops: Workshop[] = [
  {
    title: "Taller de Mini Chefs",
    badge: "¡Con gorritos de chef!",
    tagline: "Vocabulario, texturas y seguimiento de recetas",
    description:
      "Con sus gorritos de chef y delantales, los párvulos decoran alfajores, galletitas y brochetas de fruta. Una experiencia donde manipular ingredientes estimula el habla y la motricidad fina.",
    benefits: [
      "Secuencias temporales (primero, luego, al final)",
      "Nuevas palabras (sabores, texturas, utensilios)",
      "Coordinación viso-motriz de dedos y manos",
    ],
    icon: Utensils,
    accentBg: "bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent",
    iconBg: "bg-amber-400 text-amber-950 shadow-amber-300/50",
    borderAccent: "border-amber-300/80 hover:border-amber-400",
  },
  {
    title: "Cuentacuentos y Teatro de Títeres",
    badge: "¡Magia en la sala!",
    tagline: "Expresión oral, entonación y emociones",
    description:
      "A través de marionetas y personajes gigantes, los niños participan activamente de historias interactivas. El juego dramático desbloquea la timidez y despierta la pronunciación espontánea.",
    benefits: [
      "Articulación de sonidos y modulación de la voz",
      "Identificación y expresión de emociones",
      "Comprensión de narraciones orales",
    ],
    icon: Smile,
    accentBg: "bg-gradient-to-br from-pink-500/10 via-rose-500/5 to-transparent",
    iconBg: "bg-pink-400 text-pink-950 shadow-pink-300/50",
    borderAccent: "border-pink-300/80 hover:border-pink-400",
  },
  {
    title: "Rondas, Rimas y Música Sonora",
    badge: "¡Al compás del juego!",
    tagline: "Ritmo silábico y discriminación auditiva",
    description:
      "Con maracas, pandero y canciones creadas por fonoaudiólogas, segmentamos palabras en sílabas y reconocemos sonidos iniciales y finales mientras bailamos en círculo.",
    benefits: [
      "Conciencia fonológica preventiva para la lectura",
      "Separación de palabras en sílabas aplaudiendo",
      "Desarrollo del ritmo y coordinación auditiva",
    ],
    icon: Music,
    accentBg: "bg-gradient-to-br from-purple-500/10 via-indigo-500/5 to-transparent",
    iconBg: "bg-purple-400 text-purple-950 shadow-purple-300/50",
    borderAccent: "border-purple-300/80 hover:border-purple-400",
  },
  {
    title: "Pequeños Científicos y Naturaleza",
    badge: "¡Curiosidad al máximo!",
    tagline: "Exploración sensorial y descripción",
    description:
      "Experimentos seguros con agua, burbujas, masas elásticas y elementos del jardín escolar. Los niños formulan hipótesis simples, describen colores y enriquecen su lenguaje explicativo.",
    benefits: [
      "Uso de adjetivos (suave, áspero, frío, pegajoso)",
      "Formulación de preguntas ('¿por qué?', '¿cómo?')",
      "Asombro y trabajo cooperativo en equipo",
    ],
    icon: Compass,
    accentBg: "bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent",
    iconBg: "bg-emerald-400 text-emerald-950 shadow-emerald-300/50",
    borderAccent: "border-emerald-300/80 hover:border-emerald-400",
  },
];

export default function SpecialWorkshops() {
  return (
    <section
      aria-labelledby="workshops-title"
      className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface via-surface-sunk/35 to-surface py-18 sm:py-24"
    >
      {/* Círculos decorativos de fondo alegres */}
      <div
        className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-pink-100/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-action/40 bg-action/20 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-primary-dark shadow-xs mb-3">
            <Sparkles className="h-4 w-4 text-amber-500" aria-hidden="true" />
            <span>Talleres que despiertan el habla</span>
          </div>

          <h2
            id="workshops-title"
            className="font-display font-extrabold tracking-tight text-ink text-3xl sm:text-4xl lg:text-5xl"
          >
            Aprender jugando con alegría y color
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            En Escuelitas Ruth cada actividad está pensada para que los niños se
            diviertan, sonrían y ganen confianza. ¡Aquí el juego es la mejor
            herramienta para soltar la lengua!
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {workshops.map((workshop) => {
            const Icon = workshop.icon;
            return (
              <article
                key={workshop.title}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${workshop.borderAccent} ${workshop.accentBg}`}
              >
                <div>
                  {/* Icono + Sticker badge */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${workshop.iconBg}`}
                    >
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-ink shadow-2xs border border-border">
                      {workshop.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-ink text-xl leading-tight">
                    {workshop.title}
                  </h3>

                  <p className="mt-1 text-xs font-bold text-primary">
                    {workshop.tagline}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted">
                    {workshop.description}
                  </p>

                  <div className="mt-5 border-t border-border/60 pt-4">
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-ink mb-2">
                      ¿Qué estimulamos?
                    </p>
                    <ul className="space-y-1.5">
                      {workshop.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-2 text-xs font-semibold text-muted leading-tight"
                        >
                          <span
                            className="mt-0.5 text-action-hover font-bold text-sm"
                            aria-hidden="true"
                          >
                            ★
                          </span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-border/40 flex items-center justify-between text-xs font-bold text-primary">
                  <span className="inline-flex items-center gap-1">
                    <Heart className="h-3.5 w-3.5 text-pink-500 fill-pink-500" />
                    100% Gratuito
                  </span>
                  <span className="text-[11px] text-muted">Ambas sedes</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
