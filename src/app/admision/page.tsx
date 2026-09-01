import { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import {
  ClipboardCheck,
  FileText,
  Calendar,
  CheckCircle,
  Info,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { createWhatsAppUrl, buildBreadcrumbsJsonLd } from "@/lib/site";

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
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Admisión Escuela de Lenguaje Ruth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Admisión y Matrículas 2027 | Escuela de Lenguaje Ruth",
    description: "Requisitos y pasos para postular a Escuela de Lenguaje Ruth.",
    images: ["/og-image.jpg"],
  },
};

const steps = [
  {
    title: "1. Contáctanos",
    description:
      "Escríbenos por WhatsApp o llámanos. Te orientaremos sobre los cupos y responderemos tus dudas de inmediato.",
    icon: Calendar,
    bg: "bg-surface-sunk",
    color: "text-ink",
    rotation: "-rotate-2",
  },
  {
    title: "2. Evaluación Gratuita",
    description:
      "Te invitaremos a una evaluación diagnóstica. Si no tienes un informe fonoaudiológico previo, ¡nosotros lo hacemos gratis!",
    icon: ClipboardCheck,
    bg: "bg-surface-sunk",
    color: "text-primary-dark",
    rotation: "rotate-1",
  },
  {
    title: "3. Bienvenida",
    description:
      "Con la evaluación lista y el cupo confirmado, te pediremos documentos básicos para oficializar la matrícula.",
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

const admissionWhatsAppUrl = createWhatsAppUrl({ source: "admission" });

export default function AdmisionPage() {
  const breadcrumbsJsonLd = buildBreadcrumbsJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Admisión 2027", url: "/admision" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbsJsonLd} />
      <PageHero
        variant="light"
        eyebrow="Matrículas 2027"
        eyebrowIcon={ClipboardCheck}
        title={
          <>
            Admisión 2027{" "}
            <span className="text-primary">sin costo para tu familia</span>
          </>
        }
        lead="Te orientamos paso a paso para consultar cupo, agendar evaluación gratuita y completar la matrícula sin trámites innecesarios."
      />

      <div className="pb-24 pt-16 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Steps */}
          <div className="mb-32">
            <h2 className="font-extrabold text-ink mb-12 text-center tracking-tight text-3xl sm:text-4xl">
              ¿Cómo empezamos?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className={`relative rounded-2xl border border-border p-7 ${step.bg} transition-shadow duration-200 hover:shadow-md animate-fade-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/30 backdrop-blur-md flex items-center justify-center mb-8">
                    <step.icon size={32} className={step.color} />
                  </div>
                  <h3
                    className={`font-extrabold ${step.color} mb-4 leading-tight text-xl`}
                  >
                    {step.title}
                  </h3>
                  <p className={`${step.color} opacity-90 leading-relaxed`}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements and Info */}
          <div
            id="requisitos"
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center scroll-mt-32"
          >
            <div className="relative rounded-2xl border border-border bg-surface p-8 lg:p-10 animate-fade-up">
              <h2 className="font-extrabold text-ink mb-8 text-3xl sm:text-4xl">
                ¿Qué documentos necesitas?
              </h2>
              <ul className="space-y-6">
                {documents.map((doc) => (
                  <li
                    key={doc}
                    className="flex items-start bg-surface-sunk p-4 rounded-2xl border border-white"
                  >
                    <CheckCircle className="h-6 w-6 text-primary mr-4 shrink-0" />
                    <span className="text-lg font-semibold text-muted">
                      {doc}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 p-6 bg-surface-sunk rounded-2xl border border-accent/30 flex items-start">
                <Info className="h-8 w-8 text-primary-dark mr-4 shrink-0" />
                <p className="text-sm text-primary-dark leading-relaxed">
                  <span className="block text-lg mb-1">
                    ¿No tienes diagnóstico?
                  </span>
                  No te preocupes, sabemos que las evaluaciones externas pueden
                  ser costosas. Nosotros contamos con fonoaudióloga y
                  realizaremos el informe fonoaudiológico totalmente gratis.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-10 animate-fade-up animate-delay-200">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-accent text-white text-xs font-semibold uppercase tracking-widest mb-3">
                  Requisitos
                </span>
                <h3 className="font-extrabold text-ink mb-3 text-xl">
                  ¿Quiénes pueden matricularse?
                </h3>
                <p className="text-lg text-muted leading-relaxed">
                  Niños y niñas que presenten un Trastorno Específico del
                  Lenguaje (TEL) y que tengan entre 3 años y 5 años 11 meses al
                  31 de marzo del año escolar.
                </p>
              </div>

              <div className="relative p-8 rounded-2xl bg-primary-dark text-white hover:-translate-y-1 transition-transform">
                <h3 className="font-extrabold mb-3 text-xl">
                  Costo de Matrícula
                </h3>
                <p className="text-lg leading-relaxed opacity-90">
                  En Escuelitas Ruth{" "}
                  <span className="text-accent-on-dark font-extrabold">
                    no cobramos matrícula ni mensualidad
                  </span>
                  . Somos una escuela 100% gratuita financiada por el Ministerio
                  de Educación.
                </p>
              </div>

              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-accent text-white text-xs font-semibold uppercase tracking-widest mb-3">
                  Horarios
                </span>
                <h3 className="font-extrabold text-ink mb-3 text-xl">
                  Horarios de las Jornadas
                </h3>
                <p className="text-lg text-muted leading-relaxed">
                  Jornada de mañana de 08:15 a 12:15 y jornada de tarde de 13:30
                  a 17:15, de lunes a viernes.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl bg-accent p-10 text-center text-white sm:p-14 animate-fade-up">

            <div className="relative z-10">
              <h2 className="font-extrabold mb-6 tracking-tight text-3xl sm:text-4xl">
                ¿Tienes alguna duda?
              </h2>
              <p className="text-xl sm:text-2xl mb-12 font-semibold max-w-2xl mx-auto text-white/85">
                Escríbenos ahora y revisamos contigo edad, nivel, cupo
                disponible y fecha para evaluación.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href={admissionWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir WhatsApp para consultar disponibilidad 2027"
                  className="inline-flex min-h-14 items-center justify-center rounded-xl bg-action px-8 py-4 text-base font-extrabold text-primary-dark transition-colors hover:bg-action-hover"
                >
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Consultar disponibilidad
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center bg-surface text-primary-dark px-10 py-5 rounded-full font-extrabold uppercase tracking-widest text-lg hover:bg-gray-100 hover:scale-105 transition-all"
                >
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
