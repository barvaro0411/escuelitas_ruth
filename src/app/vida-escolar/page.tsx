import { Metadata } from "next";
import Image from "next/image";
import { Camera, Heart, Sparkles } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import { buildBreadcrumbsJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vida Escolar — Actividades, Talleres y Comunidad",
  description:
    "Descubre la vida escolar, ambientes lúdicos, salas de estimulación y comunidad de familias en Escuela de Lenguaje Ruth, Conchalí.",
  alternates: {
    canonical: "/vida-escolar",
  },
  openGraph: {
    title: "Vida Escolar | Escuela de Lenguaje Ruth",
    description: "Ambiente cálido, seguro y estimulante para el aprendizaje y desarrollo del habla.",
    url: "/vida-escolar",
    images: [
      {
        url: "/hero-children.jpg",
        width: 1024,
        height: 1024,
        alt: "Vida Escolar Escuela de Lenguaje Ruth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vida Escolar | Escuela de Lenguaje Ruth",
    description: "Galería de actividades y espacios de aprendizaje en Conchalí.",
    images: ["/hero-children.jpg"],
  },
};

const galleryItems = [
  {
    title: "Actividades Significativas",
    category: "Aprendizaje Activo",
    image: "/hero-children.jpg",
    alt: "Niños participando en actividades de aprendizaje",
    height: "h-64 sm:h-80",
  },
  {
    title: "Acompañamiento Familiar",
    category: "Comunidad",
    image: "/family-support.jpg",
    alt: "Familia acompañada por Escuela de Lenguaje Ruth",
    height: "h-80 sm:h-96",
  },
  {
    title: "Ambiente Cercano",
    category: "Buen Trato",
    image: "/testimonial-avatars.jpg",
    alt: "Comunidad de familias de Escuela de Lenguaje Ruth",
    height: "h-56 sm:h-72",
  },
  {
    title: "Apoyo Fonoaudiológico",
    category: "Especializado",
    image: "/hero-children.jpg",
    alt: "Apoyo especializado para niños y niñas",
    height: "h-72 sm:h-96",
  },
  {
    title: "Juego y Lenguaje",
    category: "Desarrollo",
    image: "/family-support.jpg",
    alt: "Desarrollo de lenguaje con juego y acompañamiento",
    height: "h-56 sm:h-72",
  },
  {
    title: "Comunidad Ruth",
    category: "Familias",
    image: "/testimonial-avatars.jpg",
    alt: "Familias y comunidad escolar",
    height: "h-64 sm:h-80",
  },
];

export default function VidaEscolarPage() {
  const breadcrumbsJsonLd = buildBreadcrumbsJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Vida Escolar", url: "/vida-escolar" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbsJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="pt-32 pb-24 overflow-hidden relative">
        {/* Background elements */}
        <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-secondary rounded-full blur-[100px] opacity-20 -translate-x-1/2 pointer-events-none" />
        <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-20 animate-fade-up text-center mx-auto">
            <span className="inline-block px-5 py-2 rounded-full bg-accent text-primary-dark font-black uppercase tracking-widest mb-6 shadow-sm">
              Nuestra Comunidad
            </span>
            <h1 className="text-5xl sm:text-7xl font-black text-foreground mb-6 tracking-tighter leading-tight">
              Vida <span className="text-primary">Escolar.</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed font-semibold">
              Creemos que los niños aprenden mejor cuando están felices. Fomentamos un ambiente colorido y seguro donde el juego es el motor del aprendizaje.
            </p>
          </div>

          {/* Masonry-style Gallery */}
          <div className="mb-32">
            <h2 className="sr-only">Galería de actividades y ambiente escolar</h2>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {galleryItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`group relative w-full ${item.height} rounded-[3rem] overflow-hidden bg-primary shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-up break-inside-avoid border-4 border-transparent hover:border-white/50 hover:scale-[1.02]`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay with info */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-all duration-500`}>
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-black uppercase tracking-widest mb-3 w-fit shadow-sm">
                      {item.category}
                    </span>
                    <h3 className="text-white font-black text-2xl sm:text-3xl leading-tight drop-shadow-md">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <span className="inline-block px-3 py-1 rounded-full bg-pastel-yellow text-primary-dark text-xs font-black uppercase tracking-widest mb-4">Instalaciones</span>
              <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-8 tracking-tighter">Espacios <span className="text-secondary">Seguros</span></h2>
              <p className="text-xl text-foreground/70 leading-relaxed font-semibold mb-8">
                Nuestras instalaciones han sido diseñadas pensando en la seguridad y estimulación constante de tus hijos.
              </p>
              <ul className="space-y-6">
                {[
                  "Salas climatizadas, coloridas y luminosas",
                  "Patio de juegos seguro con pasto sintético",
                  "Sala de fonoaudiología equipada",
                  "Material didáctico especializado"
                ].map((text, i) => (
                  <li key={i} className="flex items-center bg-white p-4 rounded-2xl shadow-sm border border-border/50 hover:-translate-y-1 transition-transform">
                    <div className="h-12 w-12 rounded-xl bg-primary text-white flex items-center justify-center mr-5 shrink-0 shadow-md">
                      <Camera size={24} />
                    </div>
                    <span className="text-lg font-bold text-foreground/80">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-primary rounded-[4rem] p-12 lg:p-16 text-white relative shadow-2xl animate-fade-up animate-delay-200 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <Heart size={64} className="text-secondary mb-8 drop-shadow-md" />
              <h2 className="text-3xl font-black mb-6 drop-shadow-sm">Nuestra Comunidad</h2>
              <p className="text-xl leading-relaxed font-semibold opacity-90 mb-8">
                &quot;Más que una escuela, somos una gran familia. Celebramos cada logro, por pequeño que parezca, porque sabemos el esfuerzo que hay detrás de cada nueva palabra.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-secondary text-primary-dark flex items-center justify-center shadow-lg mr-4">
                  <Sparkles size={20} />
                </div>
                <p className="font-black tracking-wider uppercase">El Equipo Ruth</p>
              </div>
            </div>
          </div>
        </div>
        <CTASection />
      </div>
    </>
  );
}
