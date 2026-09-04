import { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Image from "next/image";
import { Heart, Target, Eye, Sparkles, Smile } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import { buildBreadcrumbsJsonLd } from "@/lib/site";
import TeamSection from "@/components/sections/TeamSection";

export const metadata: Metadata = {
  title: "Sobre Nosotros — Historia, Misión y Equipo Educativo",
  description:
    "Conoce la historia, sellos pedagógicos y el equipo de fonoaudiólogos y educadoras diferenciales de Escuela de Lenguaje Ruth en Conchalí.",
  alternates: {
    canonical: "/nosotros",
  },
  openGraph: {
    title: "Sobre Nosotros | Escuela de Lenguaje Ruth",
    description:
      "Compromiso con el desarrollo del lenguaje, valores y acompañamiento integral a las familias de Conchalí y zona norte.",
    url: "/nosotros",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Equipo educativo de Escuela de Lenguaje Ruth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Nosotros | Escuela de Lenguaje Ruth",
    description: "Misión, visión y equipo de Escuela de Lenguaje Ruth.",
    images: ["/og-image.jpg"],
  },
};

const values = [
  {
    title: "Misión",
    description:
      "Corregir los trastornos de la comunicación presentes en la población infantil para lograr la superación de las alteraciones en el lenguaje.",
    icon: Target,
    bg: "bg-primary",
    color: "text-white",
    rotation: "-rotate-2",
  },
  {
    title: "Visión",
    description:
      "Entregar un servicio integral con apoyo preventivo y social. El accionar pedagógico se enfoca en el desarrollo de los niños con valores.",
    icon: Eye,
    bg: "bg-surface-sunk",
    color: "text-primary-dark",
    rotation: "rotate-2",
  },
  {
    title: "Valores Institucionales",
    description:
      "El respeto, el diálogo, la tolerancia, la responsabilidad, la honestidad y la amistad son la base de nuestra convivencia escolar.",
    icon: Heart,
    bg: "bg-primary",
    color: "text-white",
    rotation: "-rotate-1",
  },
];

export default function NosotrosPage() {
  const breadcrumbsJsonLd = buildBreadcrumbsJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Nosotros", url: "/nosotros" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbsJsonLd} />
      <PageHero
        variant="light"
        eyebrow="Nuestra esencia"
        eyebrowIcon={Heart}
        title={
          <>
            Historia y <span className="text-primary">compromiso</span>
          </>
        }
        lead="La Escuela de Lenguaje Ruth nació con el firme propósito de acompañar a las familias de Conchalí en el desarrollo comunicativo de sus hijos, poniendo el corazón en cada terapia."
      />

      <div className="pb-24 pt-16 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Misión, Visión, Valores */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 mb-32">
            {values.map((item, index) => (
              <div
                key={item.title}
                className={`rounded-2xl p-8 ${item.bg} transition-shadow duration-200 hover:shadow-md animate-fade-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-white/30 backdrop-blur-md flex items-center justify-center mb-8">
                  <item.icon size={32} className={item.color} />
                </div>
                <h2
                  className={`font-extrabold ${item.color} mb-4 leading-tight text-3xl sm:text-4xl`}
                >
                  {item.title}
                </h2>
                <p className={`${item.color} opacity-90 leading-relaxed`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Philosophy Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="relative animate-fade-up">
              <div className="relative aspect-square overflow-hidden rounded-2xl border-4 border-white bg-surface-sunk">
                <Image
                  src="/hero-children.jpg"
                  alt="Ilustración de una educadora acompañando actividades de lenguaje con niños y niñas"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-dark/80 to-transparent px-8 pb-8 pt-20">
                  <p className="text-xl font-extrabold text-white drop-shadow-md">
                    Acompañar con cercanía
                  </p>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -left-4 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-accent">
                <Sparkles size={24} className="text-primary-dark" />
              </div>
            </div>

            <div className="animate-fade-up animate-delay-200">
              <span className="inline-block px-3 py-1 rounded-full bg-surface-sunk text-ink text-xs font-semibold uppercase tracking-widest mb-4">
                Filosofía
              </span>
              <h2 className="font-extrabold text-ink mb-8 tracking-tight text-3xl sm:text-4xl">
                Nuestros Sellos <span className="text-primary">Educativos</span>
              </h2>
              <div className="space-y-6 text-muted leading-relaxed text-lg">
                <p className="mb-8">
                  En Escuelitas Ruth, nuestra labor se distingue por
                  características únicas que guían nuestro quehacer pedagógico
                  diario:
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start bg-surface p-4 rounded-2xl border border-border/50 hover:-translate-y-1 transition-transform">
                    <div className="mr-4 mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                      <Heart size={20} className="fill-white" />
                    </div>
                    <div>
                      <strong className="text-ink font-extrabold block text-xl mb-1">
                        Currículo humanista
                      </strong>{" "}
                      Valoramos y respetamos la singularidad de cada niño y
                      niña.
                    </div>
                  </li>
                  <li className="flex items-start bg-surface p-4 rounded-2xl border border-border/50 hover:-translate-y-1 transition-transform">
                    <div className="h-10 w-10 rounded-xl bg-accent text-white flex items-center justify-center mr-4 mt-0.5 shrink-0">
                      <Smile size={20} />
                    </div>
                    <div>
                      <strong className="text-ink font-extrabold block text-xl mb-1">
                        Autonomía y crecimiento
                      </strong>{" "}
                      Potenciamos activamente la independencia personal en cada
                      estudiante.
                    </div>
                  </li>
                  <li className="flex items-start bg-surface p-4 rounded-2xl border border-border/50 hover:-translate-y-1 transition-transform">
                    <div className="mr-4 mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                      <Eye size={20} />
                    </div>
                    <div>
                      <strong className="text-ink font-extrabold block text-xl mb-1">
                        Enfoque en procesos
                      </strong>{" "}
                      Nos centramos en el camino de aprendizaje, no únicamente
                      en los resultados.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <TeamSection />
        <CTASection />
      </div>
    </>
  );
}
