import { Metadata } from "next";
import { ClipboardCheck, FileText, Calendar, CheckCircle, Info, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { buildWhatsAppUrl, buildBreadcrumbsJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Admisión y Matrículas 2027",
  description:
    "Consulta cupos 2027, agenda evaluación fonoaudiológica gratuita y revisa requisitos para matricular en Escuela de Lenguaje Ruth, Conchalí.",
  alternates: {
    canonical: "/admision",
  },
  openGraph: {
    title: "Admisión y Matrículas 2027 | Escuela de Lenguaje Ruth",
    description:
      "Educación gratuita y evaluación fonoaudiológica sin costo en Conchalí para niños con TEL de 3 a 5 años 11 meses.",
    url: "/admision",
    images: [
      {
        url: "/hero-children.jpg",
        width: 1024,
        height: 1024,
        alt: "Admisión Escuela de Lenguaje Ruth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Admisión y Matrículas 2027 | Escuela de Lenguaje Ruth",
    description: "Requisitos y pasos para postular a Escuela de Lenguaje Ruth.",
    images: ["/hero-children.jpg"],
  },
};

const steps = [
  {
    title: "1. Contáctanos",
    description: "Escríbenos por WhatsApp o llámanos. Te orientaremos sobre los cupos y responderemos tus dudas de inmediato.",
    icon: Calendar,
    bg: "bg-pastel-blue/20",
    color: "text-foreground",
    rotation: "-rotate-2",
  },
  {
    title: "2. Evaluación Gratuita",
    description: "Te invitaremos a una evaluación diagnóstica. Si no tienes un informe fonoaudiológico previo, ¡nosotros lo hacemos gratis!",
    icon: ClipboardCheck,
    bg: "bg-secondary/20",
    color: "text-primary-dark",
    rotation: "rotate-1",
  },
  {
    title: "3. Bienvenida",
    description: "Con la evaluación lista y el cupo confirmado, te pediremos documentos básicos para oficializar la matrícula.",
    icon: FileText,
    bg: "bg-primary",
    color: "text-white",
    rotation: "-rotate-1",
  },
];

const documents = [
  "Certificado de Nacimiento para todo trámite.",
  "Informe fonoaudiológico (si cuenta con uno externo).",
  "Certificado de vacunas al día.",
  "Ficha de matrícula (entregada en la escuela).",
];

const admissionWhatsAppUrl = buildWhatsAppUrl(
  "Hola, quiero consultar por cupos 2027 y saber qué necesito para matricular."
);

export default function AdmisionPage() {
  const breadcrumbsJsonLd = buildBreadcrumbsJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Admisión 2027", url: "/admision" },
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
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary rounded-full blur-[100px] opacity-20 translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-24 animate-fade-up text-center mx-auto">
            <span className="inline-block px-5 py-2 rounded-full bg-accent text-primary-dark font-black uppercase tracking-widest mb-6 shadow-sm">
              Matrículas
            </span>
            <h1 className="text-5xl sm:text-7xl font-black text-foreground mb-6 tracking-tighter leading-tight">
              Admisión 2027 <br />
              <span className="text-primary">sin costo para tu familia.</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed font-semibold">
              Te orientamos paso a paso para consultar cupo, agendar evaluación gratuita y completar la matrícula sin trámites innecesarios.
            </p>
          </div>

          {/* Steps */}
          <div className="mb-32">
            <h2 className="text-4xl font-black text-foreground mb-12 text-center tracking-tighter">¿Cómo empezamos?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div 
                  key={step.title} 
                  className={`relative p-8 rounded-[2.5rem] ${step.bg} shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ${step.rotation} animate-fade-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/30 backdrop-blur-md flex items-center justify-center mb-8 shadow-inner">
                    <step.icon size={32} className={step.color} />
                  </div>
                  <h3 className={`text-2xl font-black ${step.color} mb-4 leading-tight`}>{step.title}</h3>
                  <p className={`${step.color} opacity-90 font-semibold leading-relaxed`}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements and Info */}
          <div id="requisitos" className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center scroll-mt-32">
            <div className="bg-white rounded-[3rem] p-10 lg:p-14 border border-border/50 shadow-2xl relative rotate-1 hover:rotate-0 transition-transform duration-500 animate-fade-up">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-pastel-pink rounded-full flex items-center justify-center shadow-lg -rotate-12 animate-bounce-slow border-4 border-white">
                <FileText size={32} className="text-white" />
              </div>
              
              <h2 className="text-3xl font-black text-foreground mb-8">¿Qué documentos necesitas?</h2>
              <ul className="space-y-6">
                {documents.map((doc) => (
                  <li key={doc} className="flex items-start bg-accent/30 p-4 rounded-2xl border border-white">
                    <CheckCircle className="h-6 w-6 text-primary mr-4 shrink-0" />
                    <span className="text-lg font-semibold text-foreground/80">{doc}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 p-6 bg-secondary/20 rounded-3xl border border-secondary/30 flex items-start">
                <Info className="h-8 w-8 text-primary-dark mr-4 shrink-0" />
                <p className="text-sm font-bold text-primary-dark leading-relaxed">
                  <span className="block text-lg mb-1">¿No tienes diagnóstico?</span>
                  No te preocupes, sabemos que las evaluaciones externas pueden ser costosas. Nosotros contamos con fonoaudióloga y realizaremos el informe fonoaudiológico totalmente gratis.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-10 animate-fade-up animate-delay-200">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-pastel-blue text-foreground text-xs font-black uppercase tracking-widest mb-3">Requisitos</span>
                <h3 className="text-2xl font-black text-foreground mb-3">¿Quiénes pueden matricularse?</h3>
                <p className="text-lg text-foreground/70 leading-relaxed font-semibold">
                  Niños y niñas que presenten un Trastorno Específico del Lenguaje (TEL) y que tengan entre 3 años y 5 años 11 meses al 31 de marzo del año escolar.
                </p>
              </div>
              
              <div className="relative p-8 rounded-[2rem] bg-primary text-white shadow-xl hover:-translate-y-1 transition-transform">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <h3 className="text-2xl font-black mb-3">Costo de Matrícula</h3>
                <p className="text-lg leading-relaxed font-semibold opacity-90">
                  En Escuelitas Ruth <span className="text-secondary font-black">no cobramos matrícula ni mensualidad</span>. Somos una escuela 100% gratuita financiada por el Ministerio de Educación.
                </p>
              </div>
              
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-pastel-mint text-foreground text-xs font-black uppercase tracking-widest mb-3">Horarios</span>
                <h3 className="text-2xl font-black text-foreground mb-3">Horarios de las Jornadas</h3>
                <p className="text-lg text-foreground/70 leading-relaxed font-semibold">
                  Jornada de mañana de 08:15 a 12:15 y jornada de tarde de 13:30 a 17:15, de lunes a viernes.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-secondary rounded-[4rem] p-12 sm:p-20 text-center text-primary-dark relative overflow-hidden shadow-2xl animate-fade-up">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-6xl font-black mb-6 tracking-tighter">¿Tienes alguna duda?</h2>
              <p className="text-xl sm:text-2xl mb-12 font-bold max-w-2xl mx-auto opacity-80">
                Escríbenos ahora y revisamos contigo edad, nivel, cupo disponible y fecha para evaluación.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href={admissionWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-primary text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-lg hover:bg-primary-dark hover:scale-105 transition-all shadow-xl shadow-primary/30">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  WhatsApp Directo
                </a>
                <Link href="/contacto" className="inline-flex items-center justify-center bg-white text-primary-dark px-10 py-5 rounded-full font-black uppercase tracking-widest text-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-xl shadow-black/5">
                  Formulario de contacto
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
