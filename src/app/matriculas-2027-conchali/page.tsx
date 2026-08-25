import { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Image from "next/image";
import Link from "next/link";
import AgeCalculator from "@/components/sections/AgeCalculator";
import JsonLd from "@/components/seo/JsonLd";
import {
  ArrowRight,
  Baby,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  HelpCircle,
  MapPin,
  MessageCircle,
  PackageCheck,
  PhoneCall,
  ShieldCheck,
  Users,
  WalletCards,
} from "lucide-react";
import {
  buildBreadcrumbsJsonLd,
  buildWhatsAppUrl,
  siteConfig,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Matrículas 2027 Escuela de Lenguaje en Conchalí | 100% Gratuita",
  description:
    "Postula a cupos 2027 en Escuela de Lenguaje Ruth, Conchalí. Especialistas en TEL, evaluación fonoaudiológica gratuita, $0 matrícula y útiles incluidos.",
  alternates: {
    canonical: "/matriculas-2027-conchali",
  },
  openGraph: {
    title: "Matrículas 2027 Escuela de Lenguaje Ruth | Conchalí",
    description:
      "Educación y fonoaudiología 100% gratuita para niños de 3 a 5 años 11 meses con TEL en Conchalí. Reconocido por MINEDUC (RBD 10375-6 y 26106-8).",
    url: "/matriculas-2027-conchali",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matrículas 2027 | Escuela de Lenguaje Ruth en Conchalí",
    description:
      "Educación gratuita y evaluación fonoaudiológica sin costo. Dos sedes en Conchalí.",
    images: ["/og-image.jpg"],
  },
};

const mainWhatsAppUrl = buildWhatsAppUrl(
  "Hola, quisiera consultar cupos 2027 para mi hijo(a) en Escuela de Lenguaje Ruth y agendar una evaluación fonoaudiológica gratuita.",
);

const sedeVascongadosWhatsApp = buildWhatsAppUrl(
  "Hola, quiero consultar cupo 2027 para la Sede Vascongados 4314 en Conchalí.",
);

const sedeGambinoWhatsApp = buildWhatsAppUrl(
  "Hola, quiero consultar cupo 2027 para la Sede Gral. Gambino 4613 en Conchalí.",
);

const faqsConchali = [
  {
    question: "¿Cómo sé si mi hijo(a) necesita una escuela de lenguaje?",
    answer:
      "Si notas que tu hijo de 3 a 5 años habla poco, no se le entiende al hablar, confunde sonidos, o le cuesta formular oraciones para su edad, puede presentar Trastorno Específico del Lenguaje (TEL). No necesitas venir con un examen previo: nuestras fonoaudiólogas realizan una evaluación diagnóstica completa y sin costo en la escuela.",
  },
  {
    question:
      "¿Es realmente 100% gratuita? ¿Hay cobros de mensualidad o matrícula?",
    answer:
      "Es 100% gratuita. Al ser una escuela particular subvencionada por el Estado de Chile (MINEDUC), no se cobra matrícula, colegiatura, mensualidad ni cuotas sorpresa. Además, todos los materiales y útiles escolares son provistos por la escuela.",
  },
  {
    question: "¿Qué jornadas y niveles están disponibles?",
    answer:
      "Atendemos Medio Mayor (3 años), Pre-Kínder (4 años) y Kínder (5 años) en dos jornadas: Mañana (08:15 a 12:15 hrs) y Tarde (13:30 a 17:15 hrs) de lunes a viernes en ambas sedes de Conchalí.",
  },
  {
    question:
      "¿Podemos postular si vivimos en comunas cercanas como Huechuraba o Renca?",
    answer:
      "¡Sí! Aunque estamos ubicados en Conchalí, recibimos niños y niñas de todas las comunas cercanas (Huechuraba, Renca, Recoleta, Independencia, Quilicura) sin restricción de domicilio.",
  },
];

export default function MatriculasConchaliPage() {
  const breadcrumbsJsonLd = buildBreadcrumbsJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Matrículas 2027 Conchalí", url: "/matriculas-2027-conchali" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbsJsonLd} />

      <div className="pt-24 sm:pt-28 overflow-hidden bg-paper">
        {/* ── HERO SECTION HUMANO & OFICIAL ── */}
        <PageHero
          variant="light"
          eyebrow="Reconocido por MINEDUC · RBD 10375-6 y 26106-8"
          eyebrowIcon={ShieldCheck}
          title={
            <>
              Educación y Fonoaudiología{" "}
              <span className="text-primary underline decoration-action decoration-4 underline-offset-4">
                100% Gratuita
              </span>{" "}
              en Conchalí
            </>
          }
          lead={
            <>
              Especialistas en niños y niñas de{" "}
              <strong>3 a 5 años 11 meses</strong> con dificultades del lenguaje
              (TEL). Te orientamos y realizamos la{" "}
              <strong>evaluación fonoaudiológica sin costo</strong> en nuestras
              escuelas.
            </>
          }
          aside={
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-4 border-white bg-surface">
                <Image
                  src="/hero-children.jpg"
                  alt="Niños aprendiendo felices en Escuela de Lenguaje Ruth Conchalí"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                  priority
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 from-15% via-primary-dark/70 via-40% to-transparent"
                  aria-hidden="true"
                />

                <div className="absolute inset-x-4 bottom-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent-on-dark">
                    Ambiente cálido y seguro
                  </p>
                  <p className="text-sm font-extrabold leading-snug sm:text-base">
                    Salas acondicionadas y apoyo fonoaudiológico continuo
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-border bg-surface p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="text-xs">
                  <p className="font-extrabold text-ink">
                    2 Sedes en Conchalí:
                  </p>
                  <p className="text-muted">
                    Sede Vascongados 4314 · Sede Gral. Gambino 4613
                  </p>
                </div>
              </div>
            </div>
          }
        >
          <div className="mb-8 grid grid-cols-1 gap-2.5 text-xs font-semibold text-muted sm:grid-cols-2 sm:text-sm">
            {[
              "Sin cobro de matrícula ni mensualidades",
              "Útiles y materiales escolares incluidos",
              "Fonoaudiólogas y Educadoras Especialistas",
              "2 Sedes céntricas en Conchalí",
            ].map((punto) => (
              <div key={punto} className="flex items-center gap-2">
                <CheckCircle2
                  className="h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span>{punto}</span>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <a
              href={mainWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-action px-7 py-4 text-center text-base font-extrabold text-primary-dark transition-colors hover:bg-action-hover sm:w-auto"
            >
              <MessageCircle className="h-6 w-6 shrink-0" aria-hidden="true" />
              <span>Consultar disponibilidad por WhatsApp</span>
            </a>

            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-semibold text-muted">
              <span className="flex items-center gap-1.5">
                <span
                  className="h-2 w-2 rounded-full bg-primary"
                  aria-hidden="true"
                />
                Atención directa para familias
              </span>
              <span aria-hidden="true">·</span>
              <a
                href={siteConfig.contact.phone.href}
                className="inline-flex items-center gap-1 font-extrabold text-primary hover:underline"
              >
                <PhoneCall className="h-3.5 w-3.5" aria-hidden="true" />
                Llamar al {siteConfig.contact.phone.label}
              </a>
            </div>
          </div>
        </PageHero>

        {/* ── PILARES DE CONFIANZA: GARANTÍAS PARA LA FAMILIA ── */}
        <section className="py-16 sm:py-20 bg-surface border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                ¿Por qué elegir Escuela Ruth?
              </span>
              <h2 className="font-extrabold text-ink font-display tracking-tight text-3xl sm:text-4xl">
                Lo que toda familia necesita saber antes de postular
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Garantía 1 */}
              <div className="rounded-2xl border border-primary/25 bg-surface-sunk p-6 flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-primary text-white flex items-center justify-center mb-4">
                    <WalletCards className="h-6 w-6" />
                  </div>
                  <h3 className="font-extrabold text-ink font-display mb-2 text-base">
                    $0 Costo Total
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    Escuela particular subvencionada 100% gratuita por el
                    Estado. No cobramos matrícula, mensualidades ni cuotas de
                    centro de padres.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-primary/60 text-[11px] font-extrabold text-primary">
                  ✓ Gratuidad Oficial MINEDUC
                </div>
              </div>

              {/* Garantía 2 */}
              <div className="rounded-2xl border-2 border-primary/10 bg-surface-sunk p-6 flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-primary text-white flex items-center justify-center mb-4">
                    <ClipboardCheck className="h-6 w-6" />
                  </div>
                  <h3 className="font-extrabold text-ink font-display mb-2 text-base">
                    Evaluación TEL Gratuita
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    ¿No tienes diagnóstico? Nuestras fonoaudiólogas evalúan a tu
                    hijo en la escuela sin costo alguno para determinar si
                    requiere apoyo.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/80 text-[11px] font-extrabold text-primary">
                  ✓ Sin necesidad de informe previo
                </div>
              </div>

              {/* Garantía 3 */}
              <div className="rounded-2xl border-2 border-primary/10 bg-surface-sunk p-6 flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-accent text-white flex items-center justify-center mb-4">
                    <PackageCheck className="h-6 w-6" />
                  </div>
                  <h3 className="font-extrabold text-ink font-display mb-2 text-base">
                    Materiales Incluidos
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    Todos los útiles, cuadernos y materiales pedagógicos son
                    entregados directamente en la sala de clases. Sin listas
                    costosas.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/80 text-[11px] font-extrabold text-accent">
                  ✓ Alivio al presupuesto familiar
                </div>
              </div>

              {/* Garantía 4 */}
              <div className="rounded-2xl border-2 border-primary/10 bg-surface-sunk p-6 flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-primary-dark text-white flex items-center justify-center mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="font-extrabold text-ink font-display mb-2 text-base">
                    Grupos Reducidos
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    Máximo 15 niños por sala con atención personalizada de una
                    Educadora Diferencial y sesiones continuas con
                    Fonoaudióloga.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/80 text-[11px] font-extrabold text-primary-dark">
                  ✓ Mayor avance y cuidado
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CALCULADORA DE NIVEL (MICROINTERACCIÓN) ── */}
        <AgeCalculator />

        {/* ── PROCESO TRANSPARENTE"PASO A PASO" ── */}
        <section className="py-16 sm:py-24 bg-surface border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-5">
                <span className="inline-block px-3.5 py-1 rounded-full bg-surface-sunk text-primary-dark text-xs font-semibold uppercase tracking-wider mb-3">
                  Proceso de Admisión 2027
                </span>
                <h2 className="font-extrabold text-ink font-display tracking-tight leading-tight mb-4 text-3xl sm:text-4xl">
                  Postular es simple y te acompañamos en cada etapa
                </h2>
                <p className="text-sm sm:text-base text-muted leading-relaxed mb-6">
                  Sabemos que el proceso escolar puede generar dudas. Te
                  explicamos los 4 pasos claros para asegurar la vacante de tu
                  hijo(a) sin trámites innecesarios.
                </p>

                <div className="p-4 rounded-2xl bg-surface-sunk border border-border/80 mb-6">
                  <p className="text-xs text-muted leading-relaxed">
                    💡 <strong>Importante:</strong> Los cupos por nivel (Medio
                    Mayor, Pre-Kínder y Kínder) son limitados por normativa del
                    MINEDUC para garantizar grupos pequeños.
                  </p>
                </div>

                <a
                  href={mainWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-primary text-white font-extrabold text-sm sm:text-base hover:bg-primary-dark transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Consultar disponibilidad por WhatsApp</span>
                </a>
              </div>

              <div className="lg:col-span-7">
                <div className="space-y-4">
                  {/* Paso 1 */}
                  <div className="p-5 sm:p-6 rounded-2xl border border-border bg-surface flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-primary text-white flex items-center justify-center font-extrabold text-base shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-extrabold text-ink font-display mb-1 text-base">
                        Contáctanos por WhatsApp o Teléfono
                      </h3>
                      <p className="text-xs sm:text-sm text-muted leading-relaxed">
                        Nos indicas la fecha de nacimiento de tu hijo(a), tu
                        jornada de preferencia (mañana o tarde) y la sede que te
                        queda más cómoda.
                      </p>
                    </div>
                  </div>

                  {/* Paso 2 */}
                  <div className="p-5 sm:p-6 rounded-2xl border border-border bg-surface flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-primary text-white flex items-center justify-center font-extrabold text-base shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-extrabold text-ink font-display mb-1 text-base">
                        Agendamos la Evaluación Fonoaudiológica Gratuita
                      </h3>
                      <p className="text-xs sm:text-sm text-muted leading-relaxed">
                        Vienes a la escuela junto a tu hijo(a). Una
                        fonoaudióloga especializada realizará una sesión lúdica
                        y cercana para evaluar su lenguaje sin ningún costo.
                      </p>
                    </div>
                  </div>

                  {/* Paso 3 */}
                  <div className="p-5 sm:p-6 rounded-2xl border border-border bg-surface flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-primary text-white flex items-center justify-center font-extrabold text-base shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-extrabold text-ink font-display mb-1 text-base">
                        Entrega de Resultados y Orientación
                      </h3>
                      <p className="text-xs sm:text-sm text-muted leading-relaxed">
                        Te explicamos con total claridad el diagnóstico y cómo
                        la escuela ayudará a su desarrollo comunicativo, social
                        y pedagógico.
                      </p>
                    </div>
                  </div>

                  {/* Paso 4 */}
                  <div className="p-5 sm:p-6 rounded-2xl border border-primary/25 bg-surface-sunk flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-primary text-white flex items-center justify-center font-extrabold text-base shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-extrabold text-ink font-display mb-1 text-base">
                        Matrícula Oficial y Bienvenida
                      </h3>
                      <p className="text-xs sm:text-sm text-muted leading-relaxed">
                        Se formaliza la ficha de ingreso ($0 costo) y tu hijo
                        queda matriculado con su vacante asegurada para el año
                        escolar 2027.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SEDES EN CONCHALÍ (TRANSPARENCIA TOTAL) ── */}
        <section className="py-16 sm:py-20 bg-surface-sunk border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                Ubicaciones en Conchalí
              </span>
              <h2 className="font-extrabold text-ink font-display tracking-tight text-3xl sm:text-4xl">
                Elige la sede más cercana a tu hogar
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Sede Vascongados */}
              <div className="rounded-2xl border border-border bg-surface p-7 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-extrabold">
                      <Building2 className="h-3.5 w-3.5" />
                      Sede 1
                    </div>
                    <span className="text-xs font-semibold text-muted">
                      RBD 10375-6
                    </span>
                  </div>

                  <h3 className="font-extrabold text-ink font-display mb-2 text-xl">
                    Escuela Vascongados
                  </h3>
                  <p className="text-sm font-semibold text-muted flex items-center gap-2 mb-4">
                    <MapPin className="h-4 w-4 text-primary shrink-0" />
                    Vascongados 4314, Conchalí
                  </p>

                  <div className="space-y-2 text-xs font-semibold text-muted mb-6 bg-surface-sunk p-4 rounded-xl">
                    <div className="flex items-center gap-2">
                      <Clock3 className="h-4 w-4 text-primary shrink-0" />
                      <span>
                        Mañana: 08:15 – 12:15 hrs · Tarde: 13:30 – 17:15 hrs
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Baby className="h-4 w-4 text-primary shrink-0" />
                      <span>Niveles: Medio Mayor, Pre-Kínder y Kínder</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={sedeVascongadosWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-white font-extrabold text-xs hover:bg-primary-dark transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Consultar Sede Vascongados
                  </a>
                  <a
                    href="https://maps.google.com/?q=Vascongados+4314+Conchali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl border border-border text-muted font-semibold text-xs hover:bg-surface-sunk transition-colors"
                  >
                    <MapPin className="h-4 w-4" />
                    Ver Mapa
                  </a>
                </div>
              </div>

              {/* Sede Gambino */}
              <div className="rounded-2xl border border-border bg-surface p-7 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-action/20 text-accent text-xs font-extrabold">
                      <Building2 className="h-3.5 w-3.5" />
                      Sede 2
                    </div>
                    <span className="text-xs font-semibold text-muted">
                      RBD 26106-8
                    </span>
                  </div>

                  <h3 className="font-extrabold text-ink font-display mb-2 text-xl">
                    Escuela Gral. Gambino
                  </h3>
                  <p className="text-sm font-semibold text-muted flex items-center gap-2 mb-4">
                    <MapPin className="h-4 w-4 text-accent shrink-0" />
                    Gral. Gambino 4613, Conchalí
                  </p>

                  <div className="space-y-2 text-xs font-semibold text-muted mb-6 bg-surface-sunk p-4 rounded-xl">
                    <div className="flex items-center gap-2">
                      <Clock3 className="h-4 w-4 text-accent shrink-0" />
                      <span>
                        Mañana: 08:15 – 12:15 hrs · Tarde: 13:30 – 17:15 hrs
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Baby className="h-4 w-4 text-accent shrink-0" />
                      <span>Niveles: Medio Mayor, Pre-Kínder y Kínder</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={sedeGambinoWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 px-5 py-3 rounded-xl bg-action text-primary-dark font-extrabold text-xs hover:bg-action-hover transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Consultar Sede Gambino
                  </a>
                  <a
                    href="https://maps.google.com/?q=Gral+Gambino+4613+Conchali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl border border-border text-muted font-semibold text-xs hover:bg-surface-sunk transition-colors"
                  >
                    <MapPin className="h-4 w-4" />
                    Ver Mapa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ: RESOLUCIÓN DE MIEDOS Y DUDAS ── */}
        <section className="py-16 sm:py-20 bg-surface border-b border-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-block px-3.5 py-1 rounded-full bg-surface-sunk text-primary-dark text-xs font-semibold uppercase tracking-wider mb-3">
                Dudas Frecuentes
              </span>
              <h2 className="font-extrabold text-ink font-display tracking-tight text-3xl sm:text-4xl">
                Preguntas comunes de los apoderados
              </h2>
            </div>

            <div className="space-y-4">
              {faqsConchali.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-border p-5 sm:p-6 bg-surface-sunk"
                >
                  <h3 className="font-extrabold text-ink font-display flex items-start gap-3 mb-2 text-base">
                    <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed pl-8">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL CÁLIDO & CONFIABLE ── */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-primary-dark via-primary to-primary-dark text-white relative overflow-hidden">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-accent-on-dark text-xs font-semibold uppercase tracking-widest mb-4">
              Consulta disponibilidad por nivel y jornada
            </span>

            <h2 className="font-extrabold font-display tracking-tight mb-5 leading-tight text-3xl sm:text-4xl">
              Asegura el cupo escolar de tu hijo(a) para 2027
            </h2>

            <p className="text-base sm:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
              Escríbenos hoy por WhatsApp. Te orientamos con los requisitos y
              coordinamos tu visita para la evaluación fonoaudiológica sin
              costo.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href={mainWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-action px-7 py-4 text-base font-extrabold text-primary-dark transition-colors hover:bg-action-hover sm:w-auto"
              >
                <MessageCircle className="h-6 w-6" />
                <span>Consultar disponibilidad por WhatsApp</span>
              </a>

              <Link
                href="/admision"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-7 py-5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold text-base transition-colors"
              >
                <span>Ver requisitos de admisión</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
