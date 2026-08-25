import { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
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
import {
  buildBreadcrumbsJsonLd,
  buildWhatsAppUrl,
  siteConfig,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Matrículas 2027 Escuela de Lenguaje cerca de Renca",
  description:
    "Cupos 2027 en Escuela de Lenguaje Ruth, cerca de Renca. Educación gratuita con apoyo fonoaudiológico para niños de 3 a 5 años 11 meses con TEL.",
  alternates: {
    canonical: "/matriculas-2027-renca",
  },
  openGraph: {
    title: "Matrículas 2027 Escuela de Lenguaje cerca de Renca",
    description:
      "Cupos 2027 en Escuela de Lenguaje Ruth, cerca de Renca. Educación gratuita con apoyo fonoaudiológico para niños de 3 a 5 años 11 meses con TEL.",
    url: "/matriculas-2027-renca",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matrículas 2027 cerca de Renca | Escuela de Lenguaje Ruth",
    description:
      "Escuela gratuita en Conchalí, accesible desde Renca, con apoyo fonoaudiológico.",
    images: ["/og-image.jpg"],
  },
};

const whatsappUrl = buildWhatsAppUrl(
  "Hola, soy de Renca y quiero consultar cupo 2027 en Escuela de Lenguaje Ruth.",
);

const highlights = [
  {
    title: "Sin matrícula ni mensualidad",
    description:
      "Escuela particular subvencionada, gratuita para las familias.",
    icon: WalletCards,
  },
  {
    title: "Evaluación gratuita",
    description:
      "Si no tienes diagnóstico, podemos orientar y evaluar en la escuela.",
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

export default function MatriculasRencaPage() {
  const breadcrumbsJsonLd = buildBreadcrumbsJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Matrículas Renca", url: "/matriculas-2027-renca" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbsJsonLd} />
      <div className="pt-28 overflow-hidden bg-paper">
        <PageHero
          eyebrow="Cupos 2027 cerca de Renca"
          eyebrowIcon={ShieldCheck}
          title="Matrícula en escuela de lenguaje cerca de Renca"
          lead="Accesible desde Renca, con 2 sedes en Conchalí (Vascongados 4314 y Gral. Gambino 4613). Educación gratuita con apoyo fonoaudiológico para niños y niñas con TEL de 3 a 5 años 11 meses."
          decoration={
            <>
              <Image
                src="/hero-children.jpg"
                alt=""
                fill
                sizes="100vw"
                className="object-cover opacity-40"
                priority
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/88 to-primary-dark/45"
                aria-hidden="true"
              />
            </>
          }
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-14 gap-2 rounded-xl bg-action px-7 py-4 text-base font-extrabold text-primary-dark transition-colors hover:bg-action-hover"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Consultar cupo ahora
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center min-h-14 gap-2 rounded-xl border border-white/40 px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Dejar mis datos
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm font-semibold text-white/80">
              <span className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-accent" />2 Sedes en Conchalí:
                Vascongados 4314 · Gral. Gambino 4613
              </span>
              <span className="hidden sm:block text-white/60">|</span>
              <span>{siteConfig.contact.hours}</span>
            </div>
          </div>
        </PageHero>

        <section className="py-20 bg-surface border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border p-7 bg-paper"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-5">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h2 className="font-extrabold text-ink mb-3 leading-tight text-2xl">
                    {item.title}
                  </h2>
                  <p className="text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <AgeCalculator />

        <section className="py-24 bg-paper">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-surface-sunk text-primary-dark font-semibold uppercase tracking-widest text-xs mb-5">
                Proceso simple
              </span>
              <h2 className="font-extrabold text-ink tracking-tight leading-tight mb-6 text-3xl sm:text-4xl">
                En una conversación resolvemos el primer paso.
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Sabemos que muchas familias de Renca no tienen claro si
                corresponde escuela de lenguaje, qué documentos necesitan o si
                el diagnóstico tiene costo. Te orientamos antes de pedir
                cualquier trámite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-4 rounded-2xl bg-primary text-white font-extrabold hover:bg-primary-dark transition-colors"
                >
                  <MessageCircle className="mr-3 h-5 w-5" />
                  Hablar por WhatsApp
                </a>
                <a
                  href={siteConfig.contact.phone.href}
                  className="inline-flex items-center justify-center px-7 py-4 rounded-2xl bg-surface text-primary-dark font-extrabold border border-border hover:-translate-y-0.5 transition-transform"
                >
                  <PhoneCall className="mr-3 h-5 w-5" />
                  {siteConfig.contact.phone.label}
                </a>
              </div>
            </div>

            <div className="bg-surface rounded-2xl border border-border p-8 sm:p-10">
              <h3 className="font-extrabold text-ink mb-7 text-xl">
                Pasos de postulación
              </h3>
              <ol className="space-y-5">
                {steps.map((step, index) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-extrabold shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-lg text-muted leading-relaxed">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
              <div className="mt-8 p-5 rounded-2xl bg-surface-sunk border border-border flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <p className="text-muted leading-relaxed">
                  Si no cuentas con informe fonoaudiológico, la escuela puede
                  orientar la evaluación inicial sin costo para la familia.
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
