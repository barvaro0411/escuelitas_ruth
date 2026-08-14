import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/site";

const heroWhatsAppUrl = buildWhatsAppUrl(
  "Hola, quiero consultar por un cupo 2027 y agendar la evaluación fonoaudiológica gratuita."
);

const highlights = [
  "Evaluación fonoaudiológica 100% gratuita",
  "Sin costo de matrícula ni mensualidad",
  "Materiales escolares totalmente incluidos",
  "Atención de 3 a 5 años 11 meses (Conchalí)",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[780px] items-center overflow-hidden pb-32 pt-32 sm:min-h-[820px] sm:pt-36 lg:min-h-[860px]">
      {/* Imagen de Fondo de Alta Calidad */}
      <Image
        src="/hero-kids.jpg"
        alt="Niños felices aprendiendo en la Escuela de Lenguaje Ruth"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />

      {/* Overlays Multicapa de Gradiente Azul Institucional */}
      <div className="absolute inset-0 bg-primary-dark/85 lg:bg-gradient-to-r lg:from-primary-dark/98 lg:via-primary-dark/90 lg:to-primary-dark/45" />

      {/* Resplandores decorativos de luz */}
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-brand-yellow/15 blur-3xl pointer-events-none" />
      <div className="absolute top-24 left-1/3 h-80 w-80 rounded-full bg-primary-light/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 h-72 w-72 rounded-full bg-emerald-accent/15 blur-3xl pointer-events-none" />

      {/* Borde vertical decorativo */}
      <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-brand-yellow via-primary-light to-brand-yellow hidden lg:block" />

      {/* Ola inferior de transición a la siguiente sección */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="h-16 sm:h-20 w-full text-white"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M0,56 C180,96 360,8 540,24 C720,40 900,88 1080,72 C1260,56 1350,32 1440,40 L1440,90 L0,90 Z"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 lg:pl-12 grid lg:grid-cols-12 gap-12 items-center">
        {/* Columna Izquierda: Mensaje Principal */}
        <div className="lg:col-span-7 max-w-2xl">
          {/* Badge de Estado con animación Ping */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-brand-yellow via-brand-yellow-light to-brand-yellow px-5 py-2 text-xs font-black uppercase tracking-wider text-primary-dark shadow-xl shadow-brand-yellow/25">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-dark opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-dark"></span>
            </span>
            <ShieldCheck size={16} />
            Matrículas 2027 Abiertas en Conchalí
          </div>

          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.25em] text-brand-yellow-light">
            Educación Gratuita · Especialistas en Lenguaje (TEL)
          </p>

          {/* Headline Principal con Gradiente */}
          <h1 className="mb-6 text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl font-display">
            Acompañamos a tu hijo a descubrir el poder de su{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow-light via-brand-yellow to-amber-300 relative z-10">
                propia voz
              </span>
              <span
                className="absolute inset-x-[-4%] bottom-[4%] h-[38%] bg-primary-dark/40 rounded-lg -rotate-1"
                aria-hidden="true"
              />
            </span>
          </h1>

          <p className="mb-8 max-w-xl text-base font-semibold leading-relaxed text-white/90 sm:text-lg">
            Impartimos educación parvularia gratuita con evaluación
            fonoaudiológica y terapia continua para niños y niñas de 3 a 5 años
            en Conchalí.
          </p>

          {/* Highlights en Tarjetas Translúcidas */}
          <div className="grid sm:grid-cols-2 gap-3 mb-9">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-md px-4 py-3 border border-white/15 text-xs font-bold text-white shadow-sm transition-all duration-300 hover:bg-white/15 hover:border-white/25 hover:-translate-y-0.5"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-yellow" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTAs de Alta Conversión */}
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href={heroWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shine-effect animate-pulse-glow inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-brand-yellow px-8 py-4.5 text-base font-black text-primary-dark shadow-xl shadow-brand-yellow/30 hover:bg-brand-yellow-light hover:-translate-y-1 transition-all sm:w-auto"
            >
              <MessageCircle size={22} />
              Consultar Cupo por WhatsApp
            </a>

            <Link
              href="/matriculas-2027-conchali"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-md px-7 py-4 text-sm font-black text-white hover:bg-white/20 hover:border-white/50 transition-all"
            >
              Ver Sedes y Requisitos
              <ArrowRight size={18} />
            </Link>
          </div>

          <p className="mt-6 flex items-center gap-2 text-xs font-bold text-white/75">
            <Clock3 className="h-4 w-4 text-brand-yellow shrink-0" />
            Jornadas Mañana (08:15 - 12:15) y Tarde (13:30 - 17:15)
          </p>
        </div>

        {/* Columna Derecha: Tarjeta Flotante de Confianza & Stats */}
        <div className="hidden lg:block lg:col-span-5 relative">
          {/* Fondo difuminado detrás de la tarjeta */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-brand-yellow/15 to-emerald-accent/20 rounded-[3rem] blur-2xl pointer-events-none" />

          {/* Badges flotantes decorativos (esquinas seguras, sin tapar caras) */}
          <div
            className="absolute -top-5 -right-3 z-20 inline-flex items-center gap-2 rounded-2xl bg-white/95 backdrop-blur px-4 py-2.5 shadow-xl animate-float border border-brand-yellow/40"
            style={{ animationDelay: "400ms" }}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-accent/15 text-emerald-accent">
              <HeartHandshake size={16} />
            </span>
            <span className="text-xs font-black text-primary-dark leading-tight">
              Acompañamiento
              <br />
              familiar continuo
            </span>
          </div>

          <div
            className="absolute -bottom-6 -left-4 z-20 inline-flex items-center gap-2 rounded-2xl bg-brand-yellow shadow-xl animate-float-reverse border border-primary-dark/10"
            style={{ animationDelay: "800ms" }}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary-dark text-brand-yellow">
              <Sparkles size={16} />
            </span>
            <span className="text-xs font-black text-primary-dark leading-tight pr-3">
              Evaluación inicial
              <br />
              100% sin costo
            </span>
          </div>

          <div className="relative glass-dark rounded-[2.5rem] p-8 border border-white/20 shadow-2xl animate-float space-y-6 max-w-md ml-auto">
            {/* Header de la Tarjeta */}
            <div className="flex items-center justify-between border-b border-white/15 pb-5">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-brand-yellow/20 flex items-center justify-center text-brand-yellow border border-brand-yellow/40">
                  <Award size={26} />
                </div>
                <div>
                  <h3 className="font-black text-white text-lg leading-tight font-display">
                    Escuela Ruth
                  </h3>
                  <p className="text-brand-yellow-light text-xs font-extrabold uppercase tracking-wider">
                    Excelencia Fonoaudiológica
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
                <Star size={14} className="fill-brand-yellow text-brand-yellow" />
                <span className="text-xs font-black text-white">5.0</span>
              </div>
            </div>

            {/* Pilares Institucionales y Garantías Oficiales */}
            <div className="space-y-3.5 pt-1">
              <div className="flex items-start gap-3 bg-white/5 rounded-2xl p-3.5 border border-white/10">
                <div className="h-8 w-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <p className="text-xs font-black text-white">Educación 100% Gratuita</p>
                  <p className="text-[11px] text-white/70 font-semibold leading-relaxed">
                    Subvención oficial del Estado sin matrícula ni mensualidades.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 rounded-2xl p-3.5 border border-white/10">
                <div className="h-8 w-8 rounded-xl bg-brand-yellow/20 text-brand-yellow flex items-center justify-center shrink-0 mt-0.5 border border-brand-yellow/30">
                  <Sparkles size={18} />
                </div>
                <div>
                  <p className="text-xs font-black text-white">Fonoaudiología Integrada</p>
                  <p className="text-[11px] text-white/70 font-semibold leading-relaxed">
                    Evaluación inicial sin costo y terapia continua en sala de clases.
                  </p>
                </div>
              </div>
            </div>

            {/* Counter Grid */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/15 text-center">
              <div className="bg-white/5 rounded-2xl p-3 border border-white/10 transition-colors hover:bg-white/10">
                <p className="text-lg font-black text-brand-yellow font-display">
                  +500
                </p>
                <p className="text-[10px] font-bold text-white/70 uppercase">
                  Niños Atendidos
                </p>
              </div>
              <div className="bg-white/5 rounded-2xl p-3 border border-white/10 transition-colors hover:bg-white/10">
                <p className="text-lg font-black text-emerald-400 font-display">
                  100%
                </p>
                <p className="text-[10px] font-bold text-white/70 uppercase">
                  Gratuito
                </p>
              </div>
              <div className="bg-white/5 rounded-2xl p-3 border border-white/10 transition-colors hover:bg-white/10">
                <p className="text-lg font-black text-sky-400 font-display">2</p>
                <p className="text-[10px] font-bold text-white/70 uppercase">
                  Sedes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
