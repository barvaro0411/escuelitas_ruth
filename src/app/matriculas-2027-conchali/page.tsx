import { Metadata } from "next";
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
import { buildBreadcrumbsJsonLd, buildWhatsAppUrl, siteConfig } from "@/lib/site";

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
    images: ["/hero-children.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matrículas 2027 | Escuela de Lenguaje Ruth en Conchalí",
    description: "Educación gratuita y evaluación fonoaudiológica sin costo. Dos sedes en Conchalí.",
    images: ["/hero-children.jpg"],
  },
};

const mainWhatsAppUrl = buildWhatsAppUrl(
  "Hola, quisiera consultar cupos 2027 para mi hijo(a) en Escuela de Lenguaje Ruth y agendar una evaluación fonoaudiológica gratuita."
);

const sedeVascongadosWhatsApp = buildWhatsAppUrl(
  "Hola, quiero consultar cupo 2027 para la Sede Vascongados 4314 en Conchalí."
);

const sedeGambinoWhatsApp = buildWhatsAppUrl(
  "Hola, quiero consultar cupo 2027 para la Sede Gral. Gambino 4613 en Conchalí."
);

const faqsConchali = [
  {
    question: "¿Cómo sé si mi hijo(a) necesita una escuela de lenguaje?",
    answer:
      "Si notas que tu hijo de 3 a 5 años habla poco, no se le entiende al hablar, confunde sonidos, o le cuesta formular oraciones para su edad, puede presentar Trastorno Específico del Lenguaje (TEL). No necesitas venir con un examen previo: nuestras fonoaudiólogas realizan una evaluación diagnóstica completa y sin costo en la escuela.",
  },
  {
    question: "¿Es realmente 100% gratuita? ¿Hay cobros de mensualidad o matrícula?",
    answer:
      "Es 100% gratuita. Al ser una escuela particular subvencionada por el Estado de Chile (MINEDUC), no se cobra matrícula, colegiatura, mensualidad ni cuotas sorpresa. Además, todos los materiales y útiles escolares son provistos por la escuela.",
  },
  {
    question: "¿Qué jornadas y niveles están disponibles?",
    answer:
      "Atendemos Medio Mayor (3 años), Pre-Kínder (4 años) y Kínder (5 años) en dos jornadas: Mañana (08:15 a 12:15 hrs) y Tarde (13:30 a 17:15 hrs) de lunes a viernes en ambas sedes de Conchalí.",
  },
  {
    question: "¿Podemos postular si vivimos en comunas cercanas como Huechuraba o Renca?",
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

      <div className="pt-24 sm:pt-28 overflow-hidden bg-background">
        {/* ── HERO SECTION HUMANO & OFICIAL ── */}
        <section className="relative border-b border-border bg-gradient-to-b from-[#FDFBF7] via-surface-yellow/20 to-white py-12 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Columna Izquierda: Mensaje de Confianza & CTA */}
              <div className="lg:col-span-7">
                {/* Badge Oficial MINEDUC */}
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200/80 px-3.5 py-1.5 text-xs font-black text-emerald-800 mb-5 shadow-sm">
                  <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Reconocido Oficialmente por MINEDUC · RBD 10375-6 y 26106-8</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight font-display leading-[1.08] mb-5">
                  Educación y Fonoaudiología <span className="text-primary underline decoration-brand-yellow decoration-4 underline-offset-4">100% Gratuita</span> en Conchalí
                </h1>

                <p className="text-base sm:text-xl text-foreground/80 font-semibold leading-relaxed mb-6 max-w-2xl">
                  Especialistas en niños y niñas de <strong>3 a 5 años 11 meses</strong> con dificultades del lenguaje (TEL). Te orientamos y realizamos la <strong>evaluación fonoaudiológica sin costo</strong> en nuestras escuelas.
                </p>

                {/* Micro-puntos de certeza inmediata */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 text-xs sm:text-sm font-bold text-foreground/85">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Sin cobro de matrícula ni mensualidades</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Útiles y materiales escolares incluidos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Fonoaudiólogas y Educadoras Especialistas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>2 Sedes céntricas en Conchalí</span>
                  </div>
                </div>

                {/* CTA Principal WhatsApp Dominante */}
                <div className="space-y-3">
                  <a
                    href={mainWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-black text-lg shadow-xl shadow-[#25D366]/25 hover:scale-[1.02] active:scale-95 transition-all text-center"
                  >
                    <MessageCircle className="h-6 w-6 shrink-0" />
                    <span>Consultar Cupo 2027 por WhatsApp</span>
                  </a>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-foreground/65 pt-1">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      Atención directa para familias
                    </span>
                    <span>·</span>
                    <a
                      href={siteConfig.contact.phone.href}
                      className="text-primary font-black hover:underline inline-flex items-center gap-1"
                    >
                      <PhoneCall className="h-3.5 w-3.5" />
                      Llamar al {siteConfig.contact.phone.label}
                    </a>
                  </div>
                </div>
              </div>

              {/* Columna Derecha: Tarjeta Fotográfica de la Escuela */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Marco fotográfico con calidez */}
                  <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-white aspect-[4/3] sm:aspect-[4/3]">
                    <Image
                      src="/hero-children.jpg"
                      alt="Niños aprendiendo felices en Escuela de Lenguaje Ruth Conchalí"
                      fill
                      sizes="(min-width: 1024px) 40vw, 90vw"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs font-extrabold uppercase tracking-wider text-brand-yellow">
                        Ambiente Cálido y Seguro
                      </p>
                      <p className="text-sm sm:text-base font-black leading-snug">
                        Salas acondicionadas y apoyo fonoaudiológico continuo
                      </p>
                    </div>
                  </div>

                  {/* Badge flotante inferior */}
                  <div className="mt-4 p-4 rounded-2xl bg-white border border-border shadow-md flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="text-xs">
                      <p className="font-black text-foreground">2 Sedes en Conchalí:</p>
                      <p className="text-foreground/70 font-semibold">
                        Sede Vascongados 4314 · Sede Gral. Gambino 4613
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PILARES DE CONFIANZA: GARANTÍAS PARA LA FAMILIA ── */}
        <section className="py-16 sm:py-20 bg-white border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-wider mb-3">
                ¿Por qué elegir Escuela Ruth?
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-foreground font-display tracking-tight">
                Lo que toda familia necesita saber antes de postular
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Garantía 1 */}
              <div className="rounded-2xl border-2 border-emerald-100 bg-emerald-50/40 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-md shadow-emerald-600/20">
                    <WalletCards className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-black text-foreground font-display mb-2">
                    $0 Costo Total
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/75 font-semibold leading-relaxed">
                    Escuela particular subvencionada 100% gratuita por el Estado. No cobramos matrícula, mensualidades ni cuotas de centro de padres.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-emerald-200/60 text-[11px] font-black text-emerald-800">
                  ✓ Gratuidad Oficial MINEDUC
                </div>
              </div>

              {/* Garantía 2 */}
              <div className="rounded-2xl border-2 border-primary/10 bg-surface-raised p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-primary text-white flex items-center justify-center mb-4 shadow-md shadow-primary/20">
                    <ClipboardCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-black text-foreground font-display mb-2">
                    Evaluación TEL Gratuita
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/75 font-semibold leading-relaxed">
                    ¿No tienes diagnóstico? Nuestras fonoaudiólogas evalúan a tu hijo en la escuela sin costo alguno para determinar si requiere apoyo.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/80 text-[11px] font-black text-primary">
                  ✓ Sin necesidad de informe previo
                </div>
              </div>

              {/* Garantía 3 */}
              <div className="rounded-2xl border-2 border-primary/10 bg-surface-raised p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-brand-yellow-dark text-white flex items-center justify-center mb-4 shadow-md shadow-brand-yellow/30">
                    <PackageCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-black text-foreground font-display mb-2">
                    Materiales Incluidos
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/75 font-semibold leading-relaxed">
                    Todos los útiles, cuadernos y materiales pedagógicos son entregados directamente en la sala de clases. Sin listas costosas.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/80 text-[11px] font-black text-brand-yellow-dark">
                  ✓ Alivio al presupuesto familiar
                </div>
              </div>

              {/* Garantía 4 */}
              <div className="rounded-2xl border-2 border-primary/10 bg-surface-raised p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-primary-dark text-white flex items-center justify-center mb-4 shadow-md shadow-primary-dark/20">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-black text-foreground font-display mb-2">
                    Grupos Reducidos
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/75 font-semibold leading-relaxed">
                    Máximo 15 niños por sala con atención personalizada de una Educadora Diferencial y sesiones continuas con Fonoaudióloga.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/80 text-[11px] font-black text-primary-dark">
                  ✓ Mayor avance y cuidado
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CALCULADORA DE NIVEL (MICROINTERACCIÓN) ── */}
        <AgeCalculator />

        {/* ── PROCESO TRANSPARENTE "PASO A PASO" ── */}
        <section className="py-16 sm:py-24 bg-white border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-5">
                <span className="inline-block px-3.5 py-1 rounded-full bg-accent text-primary-dark text-xs font-black uppercase tracking-wider mb-3">
                  Proceso de Admisión 2027
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-foreground font-display tracking-tight leading-tight mb-4">
                  Postular es simple y te acompañamos en cada etapa
                </h2>
                <p className="text-sm sm:text-base text-foreground/75 font-semibold leading-relaxed mb-6">
                  Sabemos que el proceso escolar puede generar dudas. Te explicamos los 4 pasos claros para asegurar la vacante de tu hijo(a) sin trámites innecesarios.
                </p>

                <div className="p-4 rounded-2xl bg-surface-yellow border border-border/80 mb-6">
                  <p className="text-xs font-bold text-foreground/80 leading-relaxed">
                    💡 <strong>Importante:</strong> Los cupos por nivel (Medio Mayor, Pre-Kínder y Kínder) son limitados por normativa del MINEDUC para garantizar grupos pequeños.
                  </p>
                </div>

                <a
                  href={mainWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-primary text-white font-black text-sm sm:text-base shadow-lg shadow-primary/20 hover:bg-primary-dark transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Iniciar postulación por WhatsApp</span>
                </a>
              </div>

              <div className="lg:col-span-7">
                <div className="space-y-4">
                  {/* Paso 1 */}
                  <div className="p-5 sm:p-6 rounded-2xl border border-border bg-surface-raised flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-primary text-white flex items-center justify-center font-black text-base shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-base font-black text-foreground font-display mb-1">
                        Contáctanos por WhatsApp o Teléfono
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/70 font-semibold leading-relaxed">
                        Nos indicas la fecha de nacimiento de tu hijo(a), tu jornada de preferencia (mañana o tarde) y la sede que te queda más cómoda.
                      </p>
                    </div>
                  </div>

                  {/* Paso 2 */}
                  <div className="p-5 sm:p-6 rounded-2xl border border-border bg-surface-raised flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-primary text-white flex items-center justify-center font-black text-base shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-base font-black text-foreground font-display mb-1">
                        Agendamos la Evaluación Fonoaudiológica Gratuita
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/70 font-semibold leading-relaxed">
                        Vienes a la escuela junto a tu hijo(a). Una fonoaudióloga especializada realizará una sesión lúdica y cercana para evaluar su lenguaje sin ningún costo.
                      </p>
                    </div>
                  </div>

                  {/* Paso 3 */}
                  <div className="p-5 sm:p-6 rounded-2xl border border-border bg-surface-raised flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-primary text-white flex items-center justify-center font-black text-base shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-base font-black text-foreground font-display mb-1">
                        Entrega de Resultados y Orientación
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/70 font-semibold leading-relaxed">
                        Te explicamos con total claridad el diagnóstico y cómo la escuela ayudará a su desarrollo comunicativo, social y pedagógico.
                      </p>
                    </div>
                  </div>

                  {/* Paso 4 */}
                  <div className="p-5 sm:p-6 rounded-2xl border-2 border-emerald-200 bg-emerald-50/50 flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-base shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-base font-black text-foreground font-display mb-1">
                        Matrícula Oficial y Bienvenida
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/70 font-semibold leading-relaxed">
                        Se formaliza la ficha de ingreso ($0 costo) y tu hijo queda matriculado con su vacante asegurada para el año escolar 2027.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SEDES EN CONCHALÍ (TRANSPARENCIA TOTAL) ── */}
        <section className="py-16 sm:py-20 bg-surface-raised border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-wider mb-3">
                Ubicaciones en Conchalí
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-foreground font-display tracking-tight">
                Elige la sede más cercana a tu hogar
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Sede Vascongados */}
              <div className="rounded-3xl border border-border bg-white p-7 sm:p-8 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-black">
                      <Building2 className="h-3.5 w-3.5" />
                      Sede 1
                    </div>
                    <span className="text-xs font-bold text-foreground/60">RBD 10375-6</span>
                  </div>

                  <h3 className="text-2xl font-black text-foreground font-display mb-2">
                    Escuela Vascongados
                  </h3>
                  <p className="text-sm font-bold text-foreground/80 flex items-center gap-2 mb-4">
                    <MapPin className="h-4 w-4 text-primary shrink-0" />
                    Vascongados 4314, Conchalí
                  </p>

                  <div className="space-y-2 text-xs font-semibold text-foreground/70 mb-6 bg-surface-raised p-4 rounded-xl">
                    <div className="flex items-center gap-2">
                      <Clock3 className="h-4 w-4 text-primary shrink-0" />
                      <span>Mañana: 08:15 – 12:15 hrs · Tarde: 13:30 – 17:15 hrs</span>
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
                    className="inline-flex flex-1 items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-white font-black text-xs hover:bg-primary-dark transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Consultar Sede Vascongados
                  </a>
                  <a
                    href="https://maps.google.com/?q=Vascongados+4314+Conchali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl border border-border text-foreground/80 font-bold text-xs hover:bg-surface-raised transition-colors"
                  >
                    <MapPin className="h-4 w-4" />
                    Ver Mapa
                  </a>
                </div>
              </div>

              {/* Sede Gambino */}
              <div className="rounded-3xl border border-border bg-white p-7 sm:p-8 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow/20 text-brand-yellow-dark text-xs font-black">
                      <Building2 className="h-3.5 w-3.5" />
                      Sede 2
                    </div>
                    <span className="text-xs font-bold text-foreground/60">RBD 26106-8</span>
                  </div>

                  <h3 className="text-2xl font-black text-foreground font-display mb-2">
                    Escuela Gral. Gambino
                  </h3>
                  <p className="text-sm font-bold text-foreground/80 flex items-center gap-2 mb-4">
                    <MapPin className="h-4 w-4 text-brand-yellow-dark shrink-0" />
                    Gral. Gambino 4613, Conchalí
                  </p>

                  <div className="space-y-2 text-xs font-semibold text-foreground/70 mb-6 bg-surface-raised p-4 rounded-xl">
                    <div className="flex items-center gap-2">
                      <Clock3 className="h-4 w-4 text-brand-yellow-dark shrink-0" />
                      <span>Mañana: 08:15 – 12:15 hrs · Tarde: 13:30 – 17:15 hrs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Baby className="h-4 w-4 text-brand-yellow-dark shrink-0" />
                      <span>Niveles: Medio Mayor, Pre-Kínder y Kínder</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={sedeGambinoWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-yellow text-primary-dark font-black text-xs hover:bg-brand-yellow-light transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Consultar Sede Gambino
                  </a>
                  <a
                    href="https://maps.google.com/?q=Gral+Gambino+4613+Conchali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl border border-border text-foreground/80 font-bold text-xs hover:bg-surface-raised transition-colors"
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
        <section className="py-16 sm:py-20 bg-white border-b border-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-block px-3.5 py-1 rounded-full bg-accent text-primary-dark text-xs font-black uppercase tracking-wider mb-3">
                Dudas Frecuentes
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-foreground font-display tracking-tight">
                Preguntas comunes de los apoderados
              </h2>
            </div>

            <div className="space-y-4">
              {faqsConchali.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-border p-5 sm:p-6 bg-surface-raised"
                >
                  <h3 className="text-base sm:text-lg font-black text-foreground font-display flex items-start gap-3 mb-2">
                    <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/75 font-semibold leading-relaxed pl-8">
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-brand-yellow text-xs font-black uppercase tracking-widest mb-4">
              Cupos Limitados por Sala
            </span>

            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight mb-5 leading-tight">
              Asegura el cupo escolar de tu hijo(a) para 2027
            </h2>

            <p className="text-base sm:text-xl text-white/90 font-semibold leading-relaxed max-w-2xl mx-auto mb-8">
              Escríbenos hoy por WhatsApp. Te orientamos con los requisitos y coordinamos tu visita para la evaluación fonoaudiológica sin costo.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href={mainWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-black text-lg shadow-2xl hover:scale-105 active:scale-95 transition-transform"
              >
                <MessageCircle className="h-6 w-6" />
                <span>Hablar directamente por WhatsApp</span>
              </a>

              <Link
                href="/admision"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-7 py-5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-black text-base transition-colors"
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
