import { Metadata } from "next";
import Image from "next/image";
import { Heart, Target, Eye, Sparkles, Smile } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import { buildBreadcrumbsJsonLd } from "@/lib/site";

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
        url: "/equipo-escuela-ruth.jpg",
        width: 1024,
        height: 683,
        alt: "Equipo educativo de Escuela de Lenguaje Ruth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Nosotros | Escuela de Lenguaje Ruth",
    description: "Misión, visión y equipo de Escuela de Lenguaje Ruth.",
    images: ["/equipo-escuela-ruth.jpg"],
  },
};

const values = [
  {
    title: "Misión",
    description: "Corregir los trastornos de la comunicación presentes en la población infantil para lograr la superación de las alteraciones en el lenguaje.",
    icon: Target,
    bg: "bg-primary",
    color: "text-white",
    rotation: "-rotate-2",
  },
  {
    title: "Visión",
    description: "Entregar un servicio integral con apoyo preventivo y social. El accionar pedagógico se enfoca en el desarrollo de los niños con valores.",
    icon: Eye,
    bg: "bg-secondary",
    color: "text-primary-dark",
    rotation: "rotate-2",
  },
  {
    title: "Valores Institucionales",
    description: "El respeto, el diálogo, la tolerancia, la responsabilidad, la honestidad y la amistad son la base de nuestra convivencia escolar.",
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
      <div className="pt-32 pb-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="max-w-3xl mb-24 animate-fade-up text-center mx-auto">
            <span className="inline-block px-5 py-2 rounded-full bg-accent text-primary-dark font-black uppercase tracking-widest mb-6 shadow-sm">
              Nuestra Esencia
            </span>
            <h1 className="text-5xl sm:text-7xl font-black text-foreground mb-6 tracking-tighter leading-tight">
              Historia y <br />
              <span className="text-primary">Compromiso.</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed font-semibold">
              La Escuela de Lenguaje Ruth nació con el firme propósito de acompañar a las familias de Conchalí en el desarrollo comunicativo de sus hijos, poniendo el corazón en cada terapia.
            </p>
          </div>

          {/* Misión, Visión, Valores */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 mb-32">
            {values.map((item, index) => (
              <div 
                key={item.title} 
                className={`rounded-2xl p-8 ${item.bg} shadow-sm transition-shadow duration-200 hover:shadow-md animate-fade-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-white/30 backdrop-blur-md flex items-center justify-center mb-8 shadow-inner">
                  <item.icon size={32} className={item.color} />
                </div>
                <h2 className={`text-3xl font-black ${item.color} mb-4 leading-tight`}>{item.title}</h2>
                <p className={`${item.color} opacity-90 font-semibold leading-relaxed`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Philosophy Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="relative animate-fade-up">
              <div className="relative aspect-square overflow-hidden rounded-2xl border-4 border-white bg-surface-blue shadow-lg">
                <Image
                  src="/equipo-escuela-ruth.jpg"
                  alt="Integrantes del equipo educativo de la Escuela de Lenguaje Ruth"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-dark/80 to-transparent px-8 pb-8 pt-20">
                  <p className="text-xl font-black text-white drop-shadow-md">Nuestro equipo educativo</p>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -left-4 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-secondary shadow-md">
                <Sparkles size={24} className="text-primary-dark" />
              </div>
            </div>
            
            <div className="animate-fade-up animate-delay-200">
              <span className="inline-block px-3 py-1 rounded-full bg-pastel-mint/20 text-foreground text-xs font-black uppercase tracking-widest mb-4">Filosofía</span>
              <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-8 tracking-tighter">Nuestros Sellos <span className="text-primary">Educativos</span></h2>
              <div className="space-y-6 text-foreground/70 font-semibold leading-relaxed text-lg">
                <p className="mb-8">
                  En Escuelitas Ruth, nuestra labor se distingue por características únicas que guían nuestro quehacer pedagógico diario:
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start bg-white p-4 rounded-3xl shadow-sm border border-border/50 hover:-translate-y-1 transition-transform">
                    <div className="mr-4 mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
                      <Heart size={20} className="fill-white" />
                    </div>
                    <div><strong className="text-foreground font-black block text-xl mb-1">Currículo humanista</strong> Valoramos y respetamos la singularidad de cada niño y niña.</div>
                  </li>
                  <li className="flex items-start bg-white p-4 rounded-3xl shadow-sm border border-border/50 hover:-translate-y-1 transition-transform">
                    <div className="h-10 w-10 rounded-xl bg-secondary text-primary-dark flex items-center justify-center mr-4 mt-0.5 shrink-0 shadow-sm">
                      <Smile size={20} />
                    </div>
                    <div><strong className="text-foreground font-black block text-xl mb-1">Autonomía y crecimiento</strong> Potenciamos activamente la independencia personal en cada estudiante.</div>
                  </li>
                  <li className="flex items-start bg-white p-4 rounded-3xl shadow-sm border border-border/50 hover:-translate-y-1 transition-transform">
                    <div className="mr-4 mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
                      <Eye size={20} />
                    </div>
                    <div><strong className="text-foreground font-black block text-xl mb-1">Enfoque en procesos</strong> Nos centramos en el camino de aprendizaje, no únicamente en los resultados.</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Team Preview Section */}
          <div className="relative overflow-hidden rounded-2xl bg-primary p-9 text-center text-white shadow-lg animate-fade-up lg:p-16">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl sm:text-6xl font-black mb-8 tracking-tighter drop-shadow-md">Un equipo a su <span className="text-secondary drop-shadow-none">servicio</span></h2>
              <p className="text-xl sm:text-2xl mb-12 font-semibold opacity-90 leading-relaxed">
                Nuestro equipo está compuesto por educadoras diferenciales con mención en lenguaje, fonoaudiólogos, técnicos en educación parvularia y personal administrativo, todos comprometidos con la excelencia y el buen trato.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {["Fonoaudiólogos", "Educadoras", "Técnicos Parvularios", "Administrativos"].map((prof) => (
                  <div key={prof} className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 text-white font-black text-lg shadow-lg hover:bg-secondary hover:text-primary-dark hover:border-secondary transition-all cursor-default">
                    {prof}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <CTASection />
      </div>
    </>
  );
}
