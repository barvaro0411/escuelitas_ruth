import Link from "next/link";
import { ArrowRight, MessageCircle, PhoneCall, Sparkles } from "lucide-react";
import { buildWhatsAppUrl, siteConfig } from "@/lib/site";

const ctaWhatsAppUrl = buildWhatsAppUrl(
  "Hola, quiero consultar por un cupo 2027 en la Escuela de Lenguaje Ruth."
);

export default function CTASection() {
  return (
    <section className="bg-gradient-to-b from-white via-surface-blue/30 to-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-primary-dark via-primary to-[#06102a] shadow-2xl shadow-primary/25 border border-white/10">
          {/* Decorative glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-primary-light/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />

          {/* Rainbow Accent Top Bar */}
          <div className="h-2 w-full bg-gradient-to-r from-brand-yellow via-brand-yellow-light to-emerald-accent" />

          {/* Badges flotantes decorativos */}
          <div
            className="absolute top-10 right-8 hidden lg:inline-flex items-center gap-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2.5 shadow-lg animate-float"
            style={{ animationDelay: "700ms" }}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-yellow text-primary-dark">
              <Sparkles size={16} />
            </span>
            <span className="text-xs font-black text-white leading-tight text-left">
              Evaluación
              <br />
              sin costo
            </span>
          </div>
          <div
            className="absolute bottom-10 left-10 hidden lg:inline-flex items-center gap-2 rounded-2xl bg-secondary/20 backdrop-blur-md border border-secondary/40 px-4 py-2.5 shadow-lg animate-float-reverse"
            style={{ animationDelay: "300ms" }}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-secondary text-primary-dark">
              <MessageCircle size={16} />
            </span>
            <span className="text-xs font-black text-white leading-tight text-left">
              Respuesta
              <br />
              rápida
            </span>
          </div>

          <div className="relative z-10 px-8 py-14 sm:px-14 sm:py-20 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/20 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-brand-yellow-light mb-4">
                <Sparkles size={15} />
                Matrículas 2027 Abiertas
              </div>
              <h2 className="mb-5 text-3xl font-black tracking-tight text-white sm:text-5xl leading-tight font-display">
                Consulta vacantes por nivel y jornada en nuestras sedes
              </h2>
              <p className="text-base sm:text-lg font-semibold leading-relaxed text-white/85 max-w-xl">
                Te orientamos sin compromiso sobre la evaluación fonoaudiológica
                sin costo, los horarios de jornada mañana/tarde y el proceso de
                admisión.
              </p>
            </div>

            <div className="mt-10 flex shrink-0 flex-col gap-4 lg:mt-0 lg:min-w-[260px]">
              <a
                href={ctaWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-yellow px-8 py-5 text-base font-black text-primary-dark shadow-xl shadow-brand-yellow/30 transition-all hover:bg-brand-yellow-light hover:-translate-y-1 animate-pulse-glow"
              >
                <MessageCircle size={22} />
                Consultar Cupo por WhatsApp
              </a>
              <a
                href={siteConfig.contact.phone.href}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-md px-7 py-4.5 text-sm font-black text-white transition-all hover:bg-white/20 hover:border-white/40"
              >
                <PhoneCall size={18} />
                Llamar Directamente
              </a>
              <Link
                href="/matriculas-2027-conchali"
                className="inline-flex items-center justify-center gap-2 py-2 text-sm font-extrabold text-white/80 transition-all hover:text-white group"
              >
                Ver Requisitos de Admisión
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
