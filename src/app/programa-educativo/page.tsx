import { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import {
  BookOpen,
  Music,
  Users2,
  Speech,
  Sparkles,
  Brain,
  Ban,
  Rocket,
  Calendar,
  Baby,
  MessageCircle,
  GraduationCap,
} from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import { buildBreadcrumbsJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Programa Educativo y Fonoaudiológico — Niveles Medio Mayor a Kínder",
  description:
    "Descubre nuestro modelo pedagógico parvulario y la intervención fonoaudiológica para niños con TEL en niveles Medio Mayor, Pre-Kínder y Kínder en Conchalí.",
  alternates: {
    canonical: "/programa-educativo",
  },
  openGraph: {
    title: "Programa Educativo | Escuela de Lenguaje Ruth",
    description:
      "Modelo pedagógico integral y fonoaudiológico gratuito para niños de 3 a 5 años en Conchalí.",
    url: "/programa-educativo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Programa Educativo Escuela de Lenguaje Ruth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Programa Educativo | Escuela de Lenguaje Ruth",
    description:
      "Niveles Medio Mayor, Pre-Kínder y Kínder con terapia fonoaudiológica integrada.",
    images: ["/og-image.jpg"],
  },
};

const programs = [
  {
    title: "Medio Mayor",
    age: "3 a 4 años",
    description:
      "Iniciamos el camino del lenguaje a través del juego libre, la música y la exploración sensorial. Fomentamos la interacción y el descubrimiento.",
    icon: Music,
    bg: "bg-surface-sunk",
    color: "text-ink",
    chip: "bg-white/50",
    rotation: "-rotate-2",
    stage: "01",
  },
  {
    title: "Pre-Kínder",
    age: "4 a 5 años",
    description:
      "Fortalecemos la estructura del lenguaje y la interacción social en un ambiente lúdico. Comenzamos a integrar rutinas escolares y habilidades pre-académicas.",
    icon: Users2,
    bg: "bg-surface-sunk",
    color: "text-primary-dark",
    chip: "bg-white/40",
    rotation: "rotate-2",
    stage: "02",
  },
  {
    title: "Kínder",
    age: "5 a 5 años 11 meses",
    description:
      "Preparamos la transición a la educación básica regular con énfasis en la conciencia fonológica y el desarrollo integral de sus habilidades de comunicación.",
    icon: BookOpen,
    bg: "bg-primary",
    color: "text-white",
    chip: "bg-white/20",
    rotation: "-rotate-1",
    stage: "03",
  },
];

const focusAreas = [
  {
    title: "Juego y exploración",
    description:
      "Aprendemos a través del juego libre, la música y la exploración sensorial.",
    icon: Baby,
    bg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "Comunicación y lenguaje",
    description:
      "Estimulamos la interacción y el desarrollo del lenguaje en un ambiente lúdico.",
    icon: MessageCircle,
    bg: "bg-action/15",
    iconColor: "text-primary-dark",
  },
  {
    title: "Socialización",
    description:
      "Fomentamos la interacción social, las rutinas y las habilidades pre-académicas.",
    icon: Users2,
    bg: "bg-primary",
    iconColor: "text-primary",
  },
  {
    title: "Transición escolar",
    description:
      "Preparamos la entrada a la educación básica con conciencia fonológica.",
    icon: GraduationCap,
    bg: "bg-surface-sunk",
    iconColor: "text-primary-dark",
  },
];

export default function ProgramaPage() {
  const breadcrumbsJsonLd = buildBreadcrumbsJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Programa Educativo", url: "/programa-educativo" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbsJsonLd} />
      <PageHero
        variant="light"
        eyebrow="Educación y terapia"
        eyebrowIcon={Sparkles}
        title={
          <>
            Nuestro <span className="text-primary">modelo educativo</span>
          </>
        }
        lead="Un enfoque centrado en el bienestar, el juego y el desarrollo natural de las habilidades de comunicación de tu hijo(a)."
      />

      <div className="pb-24 pt-16 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* ¿Qué es el TEL? Section */}
          <div className="mb-28">
            <div className="relative overflow-hidden rounded-2xl bg-primary-dark p-8 text-white animate-fade-up lg:p-14">

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-white font-semibold text-xs uppercase tracking-widest mb-6">
                    Información Clave
                  </span>
                  <h2
                    id="que-es-tel"
                    className="font-extrabold mb-8 leading-tight tracking-tight text-3xl sm:text-4xl"
                  >
                    ¿Qué es el <span className="text-accent-on-dark">TEL?</span>
                  </h2>
                  <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                    <p>
                      El Trastorno Específico del Lenguaje (TEL) es una
                      dificultad en el desarrollo del lenguaje que no tiene una
                      causa médica o física evidente.
                    </p>
                    <p>
                      No se trata de falta de inteligencia ni de problemas de
                      audición. Los niños con TEL simplemente necesitan un apoyo
                      especializado y estrategias pedagógicas diferentes para
                      desarrollar su capacidad de comunicarse verbalmente.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                    <div className="p-4 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-md">
                      <Ban className="text-accent-on-dark mb-3" size={24} />
                      <p className="text-sm text-white font-semibold leading-snug">
                        Sin causa médica evidente
                      </p>
                    </div>
                    <div className="p-4 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-md">
                      <Brain className="text-accent-on-dark mb-3" size={24} />
                      <p className="text-sm text-white font-semibold leading-snug">
                        No es falta de inteligencia
                      </p>
                    </div>
                    <div className="p-4 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-md">
                      <Rocket className="text-accent-on-dark mb-3" size={24} />
                      <p className="text-sm text-white font-semibold leading-snug">
                        Se supera con apoyo temprano
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-2xl border border-white/20 mt-8 backdrop-blur-md">
                    <p className="text-white font-semibold m-0 flex items-center">
                      <Speech className="mr-4 text-accent shrink-0" size={32} />
                      Con la intervención adecuada y temprana, los niños superan
                      estas dificultades exitosamente.
                    </p>
                  </div>
                </div>

                <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border-4 border-white/15 bg-primary">
                  <div
                    className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute -bottom-12 -left-12 w-48 h-48 bg-accent/20 rounded-full"
                    aria-hidden="true"
                  />
                  <Speech
                    size={140}
                    className="text-accent opacity-80"
                    strokeWidth={1}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute left-8 top-8 flex h-14 w-14 items-center justify-center rounded-xl bg-action/90">
                    <Sparkles size={26} className="text-primary-dark" />
                  </div>
                  <div className="absolute bottom-8 right-8 flex h-12 w-12 items-center justify-center rounded-full bg-accent/90">
                    <Speech size={22} className="text-primary-dark" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nuestro Enfoque */}
          <div id="niveles" className="mb-24 scroll-mt-36">
            <div className="text-center mb-14 animate-fade-up">
              <span className="inline-block px-4 py-1.5 rounded-full bg-surface-sunk text-accent font-semibold text-xs uppercase tracking-widest mb-5">
                Nuestro Enfoque
              </span>
              <h2 className="font-extrabold text-ink tracking-tight text-3xl sm:text-4xl">
                Así acompañamos cada etapa
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {focusAreas.map((area, index) => (
                <div
                  key={area.title}
                  className="bg-surface rounded-2xl p-8 border border-border/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 animate-fade-up group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${area.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <area.icon size={26} className={area.iconColor} />
                  </div>
                  <h3 className="font-extrabold text-ink mb-2 text-xl">
                    {area.title}
                  </h3>
                  <p className="text-muted leading-relaxed m-0">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Niveles Educativos */}
          <div className="mb-24">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="font-extrabold text-ink tracking-tight text-3xl sm:text-4xl">
                Nuestros Niveles
              </h2>
              <p className="text-xl text-muted mt-4 font-semibold">
                Organizamos el aprendizaje respetando la etapa evolutiva de cada
                niño.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <div
                  key={program.title}
                  className={`relative overflow-hidden rounded-2xl p-8 ${program.bg} transition-shadow duration-200 hover:shadow-md animate-fade-up group`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >

                  <span className="absolute top-6 right-6 px-3.5 py-1.5 rounded-full bg-primary-dark/70 text-white text-xs font-semibold uppercase tracking-widest">
                    Nivel {program.stage}
                  </span>

                  <div
                    className={`w-16 h-16 rounded-2xl ${program.chip} backdrop-blur-md flex items-center justify-center mb-8`}
                  >
                    <program.icon size={32} className={program.color} />
                  </div>

                  <span
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${program.chip} text-xs font-semibold uppercase tracking-widest mb-5 ${program.color}`}
                  >
                    <Calendar size={14} />
                    {program.age}
                  </span>

                  <h3
                    className={`font-extrabold ${program.color} mb-4 leading-tight drop-shadow-sm text-xl`}
                  >
                    {program.title}
                  </h3>

                  <p
                    className={`text-lg ${program.color} opacity-90 leading-relaxed`}
                  >
                    {program.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <CTASection />
      </div>
    </>
  );
}
