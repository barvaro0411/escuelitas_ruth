import {
  BookOpen,
  CalendarDays,
  Flag,
  GraduationCap,
  HeartHandshake,
  Music,
  PartyPopper,
  Sparkles,
  TreePine,
  Trophy,
} from "lucide-react";

type Milestone = {
  month: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof CalendarDays;
  badgeColor: string;
};

const annualMilestones: Milestone[] = [
  {
    month: "Marzo",
    title: "Bienvenida y Período de Adaptación",
    subtitle: "Acogida y diagnósticos",
    description:
      "Recepción amorosa a los párvulos, adaptación gradual a la jornada y realización de las evaluaciones fonoaudiológicas iniciales de diagnóstico sin costo.",
    icon: Sparkles,
    badgeColor: "bg-sky-100/70 text-sky-800 border-sky-200",
  },
  {
    month: "Abril",
    title: "Semana del Libro y la Literatura Infantil",
    subtitle: "Estimulación lingüística",
    description:
      "Cuentacuentos interactivos, rincones de lectura compartida y creación de historias familiares para estimular la comprensión y el vocabulario expresivo.",
    icon: BookOpen,
    badgeColor: "bg-indigo-100/70 text-indigo-800 border-indigo-200",
  },
  {
    month: "Mayo",
    title: "Mes de la Familia y Parentalidad",
    subtitle: "Comunidad y afecto",
    description:
      "Encuentros reflexivos con padres y apoderados, talleres prácticos de estimulación en el hogar y actividades conjuntas que fortalecen el lazo afectivo.",
    icon: HeartHandshake,
    badgeColor: "bg-pink-100/70 text-pink-800 border-pink-200",
  },
  {
    month: "Junio",
    title: "Medioambiente y Pueblos Originarios",
    subtitle: "Cultura y naturaleza",
    description:
      "Conmemoración del We Tripantu (Año Nuevo Indígena), respeto por la diversidad cultural, conocimiento de nuestras raíces y actividades ecológicas.",
    icon: TreePine,
    badgeColor: "bg-emerald-100/70 text-emerald-800 border-emerald-200",
  },
  {
    month: "Agosto",
    title: "Mes de la Niñez y Juego Terapéutico",
    subtitle: "Derechos y diversión",
    description:
      "Jornadas de juegos tradicionales, circuitos psicomotores, teatro de títeres y dinámicas donde el juego es el motor principal para desbloquear el habla.",
    icon: Music,
    badgeColor: "bg-amber-100/70 text-amber-900 border-amber-200",
  },
  {
    month: "Septiembre",
    title: "Fiestas Patrias y Tradición Chilena",
    subtitle: "¡Tiki Tiki Tiii!",
    description:
      "Convivencia escolar con juegos criollos adaptados (emboque, rayuela infantil), trajes típicos, bailes tradicionales y vivencia del folclore en familia.",
    icon: Flag,
    badgeColor: "bg-red-100/70 text-red-800 border-red-200",
  },
  {
    month: "Octubre",
    title: "Semana de la Fonoaudiología y Lenguaje",
    subtitle: "Comunidad abierta",
    description:
      "Talleres abiertos a las familias donde las fonoaudiólogas comparten estrategias para seguir estimulando la articulación y la estructuración de frases.",
    icon: PartyPopper,
    badgeColor: "bg-purple-100/70 text-purple-800 border-purple-200",
  },
  {
    month: "Noviembre",
    title: "Semana de la Educación Parvularia",
    subtitle: "Muestra de aprendizajes",
    description:
      "Celebración del rol pedagógico en la primera infancia y exposición de los progresos comunicativos y proyectos desarrollados por cada nivel.",
    icon: Trophy,
    badgeColor: "bg-blue-100/70 text-blue-800 border-blue-200",
  },
  {
    month: "Diciembre",
    title: "Cierre de Año y Licenciatura de Kínder",
    subtitle: "Paso a Enseñanza Básica",
    description:
      "Ceremonia de graduación para los niños y niñas que egresan preparados y con alta fonoaudiológica, listos para ingresar con seguridad a 1° Básico.",
    icon: GraduationCap,
    badgeColor: "bg-emerald-100/70 text-emerald-800 border-emerald-200",
  },
];

export default function AnnualTraditions() {
  return (
    <section
      aria-labelledby="annual-traditions-title"
      className="border-b border-border bg-surface py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-primary mb-3">
            <CalendarDays className="h-3.5 w-3.5 text-action" aria-hidden="true" />
            Tradición y comunidad
          </div>
          <h2
            id="annual-traditions-title"
            className="font-display font-extrabold text-ink text-3xl sm:text-4xl"
          >
            Hitos y celebraciones del año escolar
          </h2>
          <p className="mt-3 text-base text-muted leading-relaxed sm:text-lg">
            A lo largo de todo el ciclo escolar, nuestras sedes viven momentos
            significativos donde el aprendizaje, la fonoaudiología y la familia se
            encuentran de forma cercana y coordinada.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {annualMilestones.map((milestone) => {
            const Icon = milestone.icon;
            return (
              <article
                key={milestone.month}
                className="group flex flex-col justify-between rounded-2xl border border-border bg-paper p-6 shadow-xs card-interactive"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="font-display text-lg font-extrabold text-primary">
                      {milestone.month}
                    </span>
                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-extrabold ${milestone.badgeColor}`}
                    >
                      {milestone.subtitle}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-display font-extrabold text-ink text-lg leading-snug">
                      {milestone.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {milestone.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
