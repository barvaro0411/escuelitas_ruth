import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AgeCalculator from "@/components/sections/AgeCalculator";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  MapPin,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import { buildBreadcrumbsJsonLd, buildWhatsAppUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Matrículas 2027 Escuela de Lenguaje cerca de Huechuraba",
  description:
    "Cupos 2027 en Escuela de Lenguaje Ruth, cerca de Huechuraba. Gratuita, evaluación fonoaudiológica sin costo para niños 3 a 5 años con TEL.",
  alternates: {
    canonical: "/matriculas-2027-huechuraba",
  },
  openGraph: {
    title: "Matrículas 2027 Escuela de Lenguaje cerca de Huechuraba",
    description:
      "Cupos 2027 en Escuela de Lenguaje Ruth, cerca de Huechuraba. Gratuita, evaluación fonoaudiológica sin costo para niños 3 a 5 años con TEL.",
    url: "/matriculas-2027-huechuraba",
    images: ["/hero-children.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matrículas 2027 cerca de Huechuraba | Escuela de Lenguaje Ruth",
    description: "Escuela gratuita en Conchalí, a minutos de Huechuraba, con evaluación fonoaudiológica sin costo.",
    images: ["/hero-children.jpg"],
  },
};

const whatsappUrl = buildWhatsAppUrl(
  "Hola, soy de Huechuraba y quiero consultar cupo 2027 en Escuela de Lenguaje Ruth."
);

const highlights = [
  {
    title: "Sin matrícula ni mensualidad",
    description: "Escuela particular subvencionada, gratuita para las familias.",
    icon: WalletCards,
  },
  {
    title: "Evaluación gratuita",
    description: "Si no tienes diagnóstico, podemos orientar y evaluar en la escuela.",
    icon: ClipboardCheck,
  },
  {
    title: "3 a 5 años 11 meses",
    description: "Medio Mayor, Pre-Kínder y Kínder, según edad al 31 de marzo.",
    icon: CalendarCheck,
  },
];

const steps = [
  "Nos escribes por WhatsApp o formulario.",
  "Revisamos edad, cupo, jornada y requisitos.",
  "Agendamos evaluación o visita a la escuela.",
  "Confirmamos documentos y matrícula.",
];

export default function MatriculasHuechurabaPage() {
  const breadcrumbsJsonLd = buildBreadcrumbsJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Matrículas Huechuraba", url: "/matriculas-2027-huechuraba" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbsJsonLd} />
      <div className="pt-28 overflow-hidden bg-background">
        <section className="relative min-h-[76vh] flex items-center bg-primary-dark text-white">
          <Image
            src="/hero-children.jpg"
            alt="Niños aprendiendo en Escuela de Lenguaje Ruth"
            fill
            sizes="100vw"
            className="object-cover opacity-45"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/90 to-primary/35" />
          <div className="absolute inset-0 dot-pattern opacity-10" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary text-primary-dark text-xs font-black uppercase tracking-widest mb-6 shadow-xl">
                <ShieldCheck className="mr-2 h-4 w-4" />
                Cupos 2027 cerca de Huechuraba
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.98] tracking-tight mb-7">
                Matrícula en escuela de lenguaje cerca de Huechuraba.
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 font-bold leading-snug max-w-2xl mb-8">
                A minutos de Huechuraba, en Vascongados 4314, Conchalí. Consulta cupo 2027 con evaluación fonoaudiológica sin costo para niños y niñas con TEL.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-5 rounded-2xl bg-secondary text-primary-dark font-black text-lg shadow-xl shadow-secondary/30 hover:scale-[1.03] active:scale-95 transition-transform"
                >
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Consultar cupo ahora
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center px-8 py-5 rounded-2xl bg-white text-primary-dark font-black text-lg shadow-xl shadow-black/10 hover:scale-[1.03] active:scale-95 transition-transform"
                >
                  Dejar mis datos
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-white/85 font-bold">
                <span className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-secondary" />
                  A minutos de Huechuraba, en {siteConfig.contact.address.label}
                </span>
                <span className="hidden sm:block text-white/40">|</span>
                <span>{siteConfig.contact.hours}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border p-7 shadow-sm bg-background">
                  <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-5">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl font-black text-foreground mb-3 leading-tight">{item.title}</h2>
                  <p className="text-foreground/70 font-semibold leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <AgeCalculator />

        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-accent text-primary-dark font-black uppercase tracking-widest text-xs mb-5">
                Proceso simple
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight leading-tight mb-6">
                En una conversación resolvemos el primer paso.
              </h2>
              <p className="text-lg text-foreground/70 font-semibold leading-relaxed mb-8">
                Sabemos que muchas familias de Huechuraba no tienen claro si corresponde escuela de lenguaje, qué documentos necesitan o si el diagnóstico tiene costo. Te orientamos antes de pedir cualquier trámite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-4 rounded-2xl bg-primary text-white font-black shadow-xl shadow-primary/25 hover:bg-primary-dark transition-colors"
                >
                  <MessageCircle className="mr-3 h-5 w-5" />
                  Hablar por WhatsApp
                </a>
                <a
                  href={siteConfig.contact.phone.href}
                  className="inline-flex items-center justify-center px-7 py-4 rounded-2xl bg-white text-primary-dark font-black border border-border shadow-sm hover:-translate-y-0.5 transition-transform"
                >
                  <PhoneCall className="mr-3 h-5 w-5" />
                  {siteConfig.contact.phone.label}
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-border shadow-xl p-8 sm:p-10">
              <h3 className="text-3xl font-black text-foreground mb-7">Pasos de postulación</h3>
              <ol className="space-y-5">
                {steps.map((step, index) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="w-10 h-10 rounded-full bg-secondary text-primary-dark flex items-center justify-center font-black shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-lg text-foreground/80 font-bold leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-8 p-5 rounded-2xl bg-accent border border-border flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <p className="text-foreground/75 font-bold leading-relaxed">
                  Si no cuentas con informe fonoaudiológico, la escuela puede orientar la evaluación inicial sin costo para la familia.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </div>
    </>
  );
}
