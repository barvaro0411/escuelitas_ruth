import {
  Building2,
  CheckCircle2,
  GraduationCap,
  Heart,
  HeartHandshake,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Smile,
  Sparkles,
  Users,
} from "lucide-react";

type TeamArea = {
  title: string;
  role: string;
  badge: string;
  description: string;
  keyPoints: string[];
  icon: typeof MessageCircle;
  accentGradient: string;
  badgeStyle: string;
  borderStyle: string;
  iconBg: string;
};

const teamAreasData: TeamArea[] = [
  {
    title: "Área Fonoaudiológica",
    role: "Fonoaudiólogas Clínicas y Educacionales",
    badge: "En ambas sedes",
    description:
      "Profesionales tituladas e inscritas en el Registro Nacional de Prestadores de Salud. Encargadas de la evaluación diagnóstica de ingreso y terapias de estimulación del lenguaje.",
    keyPoints: [
      "Evaluaciones fonoaudiológicas integrales sin costo",
      "Salas de fonoaudiología equipadas en cada sede",
      "Plan de Apoyo Individualizado (PEI) y seguimiento continuo",
    ],
    icon: MessageCircle,
    accentGradient: "from-sky-500 to-cyan-400",
    badgeStyle: "bg-sky-100 text-sky-800 border-sky-300",
    borderStyle: "border-sky-200/80 hover:border-sky-400",
    iconBg: "bg-sky-100 text-sky-700",
  },
  {
    title: "Educación Diferencial",
    role: "Profesoras Especialistas en TEL",
    badge: "Docencia Especializada",
    description:
      "Educadoras diferenciales dedicadas por completo a las salas de Medio Mayor, Pre-Kínder y Kínder. Adaptan las bases curriculares con metodologías lúdicas y fonoaudiológicas.",
    keyPoints: [
      "Planificaciones pedagógicas adaptadas por nivel",
      "Talleres de conciencia fonológica y apresto escolar",
      "Grupos reducidos por sala para mayor dedicación",
    ],
    icon: GraduationCap,
    accentGradient: "from-amber-400 to-yellow-400",
    badgeStyle: "bg-amber-100 text-amber-900 border-amber-300",
    borderStyle: "border-amber-200/80 hover:border-amber-400",
    iconBg: "bg-amber-100 text-amber-800",
  },
  {
    title: "Asistentes de Aula",
    role: "Técnicas en Educación Parvularia",
    badge: "Cuidado y Afecto",
    description:
      "Técnicas con vocación y calidez que acompañan permanentemente a los párvulos en sala, rutinas de higiene, colación compartida, recreos y contención socioemocional.",
    keyPoints: [
      "Acompañamiento cercano durante toda la jornada",
      "Fomento de hábitos de autonomía y autocuidado",
      "Supervisión atenta en patios techados de juegos",
    ],
    icon: Heart,
    accentGradient: "from-pink-500 to-rose-400",
    badgeStyle: "bg-pink-100 text-pink-800 border-pink-300",
    borderStyle: "border-pink-200/80 hover:border-pink-400",
    iconBg: "bg-pink-100 text-pink-700",
  },
  {
    title: "Dirección y Convivencia",
    role: "Gestión Pedagógica y Familia",
    badge: "Vínculo con el Hogar",
    description:
      "Equipo de liderazgo enfocado en mantener una comunicación abierta y transparente con padres y apoderados, velando por la gratuidad MINEDUC y el bienestar integral de la comunidad.",
    keyPoints: [
      "Atención directa y personalizada a los apoderados",
      "Talleres de parentalidad y orientación en el hogar",
      "Gestión de matrículas, beneficios y convenios de apoyo",
    ],
    icon: Users,
    accentGradient: "from-emerald-500 to-teal-400",
    badgeStyle: "bg-emerald-100 text-emerald-800 border-emerald-300",
    borderStyle: "border-emerald-200/80 hover:border-emerald-400",
    iconBg: "bg-emerald-100 text-emerald-800",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 sm:py-24" aria-labelledby="team-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-action/40 bg-action/25 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-primary-dark shadow-xs mb-3">
            <HeartHandshake className="h-4 w-4 text-amber-500" aria-hidden="true" />
            <span>Comunidad y Vocación</span>
          </div>
          <h2
            id="team-title"
            className="font-display font-extrabold tracking-tight text-ink text-3xl sm:text-4xl lg:text-5xl"
          >
            Nuestro Equipo Multidisciplinario
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Un trabajo coordinado y afectuoso entre fonoaudiólogas, educadoras
            diferenciales, técnicas en párvulos y equipo directivo para acompañar
            el desarrollo de cada niño y niña en nuestras dos sedes de Conchalí.
          </p>
        </div>

        {/* Tarjeta institucional de equidad y respaldo entre ambas sedes */}
        <div className="mx-auto mt-12 max-w-5xl rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-surface via-surface-sunk/40 to-surface p-5 sm:p-8 lg:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-border/70 pb-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-extrabold text-primary mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                Mismo estándar de calidad y cariño en ambas sedes
              </span>
              <h3 className="font-display font-extrabold text-ink text-2xl sm:text-3xl leading-snug">
                Equipos completos y dedicados en Conchalí
              </h3>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted">
                Tanto en Sede Vascongados como en Sede General Gambino contamos
                con equipos profesionales independientes, estables y
                comprometidos, asegurando que cada niño reciba la misma calidad de
                enseñanza y fonoaudiología gratuita.
              </p>
            </div>

            {/* Fichas compactas de las 2 sedes */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full md:w-auto">
              <div className="rounded-2xl border border-primary/20 bg-white p-4 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-extrabold text-primary">
                  <Building2 className="h-4 w-4" />
                  <span>Sede Vascongados 4314</span>
                </div>
                <p className="text-[11px] font-semibold text-muted mt-1 flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-muted" />
                  RBD 26106-8 · Conchalí
                </p>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-white p-4 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-extrabold text-accent">
                  <Building2 className="h-4 w-4" />
                  <span>Sede Gral. Gambino 4613</span>
                </div>
                <p className="text-[11px] font-semibold text-muted mt-1 flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-muted" />
                  RBD 10375-6 · Conchalí
                </p>
              </div>
            </div>
          </div>

          {/* Tres sellos de confianza compartidos */}
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-ink">
                  Habilitadas por MINEDUC y Salud
                </h4>
                <p className="mt-1 text-xs text-muted leading-relaxed">
                  Títulos reconocidos por el Estado y especialización clínica en TEL.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400/20 text-amber-800">
                <Smile className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-ink">
                  Atención en Grupos Reducidos
                </h4>
                <p className="mt-1 text-xs text-muted leading-relaxed">
                  Cupos limitados por sala para garantizar dedicación personal a cada niño.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-500/15 text-pink-700">
                <Heart className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-ink">
                  Canal Abierto con las Familias
                </h4>
                <p className="mt-1 text-xs text-muted leading-relaxed">
                  Reuniones periódicas, informes semestrales y comunicación constante.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Las 4 Áreas Profesionales Interdisciplinarias */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamAreasData.map((area) => {
            const Icon = area.icon;
            return (
              <article
                key={area.title}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 bg-surface shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${area.borderStyle}`}
              >
                {/* Franja superior de color */}
                <div className={`h-2.5 w-full bg-gradient-to-r ${area.accentGradient}`} />

                <div className="p-6 sm:p-7">
                  {/* Top: Icono + Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-xs transition-transform duration-300 group-hover:scale-110 ${area.iconBg}`}
                    >
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider ${area.badgeStyle}`}
                    >
                      {area.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-ink text-xl leading-tight">
                    {area.title}
                  </h3>

                  <p className="mt-1 text-xs font-bold text-primary">
                    {area.role}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted">
                    {area.description}
                  </p>

                  <div className="mt-5 border-t border-border/60 pt-4">
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-ink mb-2">
                      Rol fundamental:
                    </p>
                    <ul className="space-y-1.5">
                      {area.keyPoints.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-1.5 text-xs text-muted leading-tight"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600"
                            aria-hidden="true"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-paper px-6 py-3 text-[11px] font-bold text-primary border-t border-border/50 flex items-center justify-between">
                  <span>Presentes en ambas sedes</span>
                  <span className="text-muted">100% Gratuito</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
