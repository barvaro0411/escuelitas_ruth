import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/site";

export default function SedesSelector() {
  const vascongadosUrl = buildWhatsAppUrl(
    "Hola, quisiera consultar por vacantes 2027 para la Escuela Vascongados en Conchalí."
  );
  const gambinoUrl = buildWhatsAppUrl(
    "Hola, quisiera consultar por vacantes 2027 para la Escuela Gral. Gambino en Conchalí."
  );

  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-white via-surface-blue/40 to-white py-20 sm:py-28">
      {/* Decorative blurred background shapes */}
      <div className="absolute top-1/2 left-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-yellow/15 blur-3xl pointer-events-none" />
      <div className="absolute top-32 -right-16 h-56 w-56 rounded-full bg-pastel-blue/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 -left-16 h-56 w-56 rounded-full bg-pastel-mint/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto relative">
          <div
            className="absolute -top-6 right-6 hidden xl:inline-flex items-center gap-2 rounded-2xl bg-white border border-border shadow-lg px-4 py-2.5 animate-float"
            style={{ animationDelay: "500ms" }}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
              <ShieldCheck size={16} />
            </span>
            <span className="text-xs font-black text-foreground leading-tight text-left">
              Subvención estatal
              <br />
              100% gratuita
            </span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4.5 py-2 text-xs font-black uppercase tracking-wider text-primary mb-4 shadow-sm">
            <MapPin size={15} />
            Escuelas en Conchalí
          </div>
          <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-5xl mb-4 font-display">
            Nuestras 2 Escuelas en Conchalí
          </h2>
          <p className="text-base sm:text-lg font-semibold leading-relaxed text-foreground/75">
            Escuela de Lenguaje Ruth cuenta con 2 escuelas equipadas en Conchalí. Atendemos a familias de <strong>Conchalí, Huechuraba, Renca, Recoleta, Independencia y sectores del norte de Santiago</strong>.
          </p>
        </div>

        {/* 2 Main Official Campuses Bento Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 items-stretch max-w-5xl mx-auto mb-12">
          {/* Escuela 1: Vascongados */}
          <article className="relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border-2 border-primary/20 bg-gradient-to-br from-white via-surface-blue/50 to-white p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 card-hover">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Building2 size={160} className="text-primary" />
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-yellow px-4 py-1.5 text-xs font-black uppercase tracking-wider text-primary-dark shadow-sm">
                  <Sparkles size={14} />
                  RBD 10375-6
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-black text-emerald-800 bg-emerald-100/90 px-3.5 py-1.5 rounded-full border border-emerald-200">
                  <ShieldCheck size={14} />
                  Matrículas 2027
                </span>
              </div>

              <h3 className="text-3xl font-black text-foreground mb-2 leading-tight font-display">
                Escuela Vascongados
              </h3>
              <p className="text-base font-bold text-primary mb-4 flex items-center gap-2">
                <MapPin size={18} className="shrink-0" />
                Vascongados 4314, Conchalí
              </p>
              <p className="text-sm font-semibold text-foreground/75 mb-6">
                Infraestructura adaptada para atención fonoaudiológica, salas de estimulación temprana y patio de juegos.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2.5 text-xs font-black text-foreground/85">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  Niveles: Medio Mayor, Pre-Kínder y Kínder
                </li>
                <li className="flex items-center gap-2.5 text-xs font-black text-foreground/85">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  Evaluación fonoaudiológica 100% gratuita
                </li>
                <li className="flex items-center gap-2.5 text-xs font-black text-foreground/85">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  Jornadas Mañana y Tarde
                </li>
              </ul>
            </div>

            <div className="space-y-3 pt-6 border-t border-border/60">
              <a
                href={vascongadosUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-yellow px-6 py-4.5 text-sm font-black text-primary-dark shadow-md hover:bg-brand-yellow-light transition-all"
              >
                <MessageCircle size={18} />
                Consultar Cupo Escuela Vascongados
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Vascongados%204314%2C%20Conchal%C3%AD%2C%20Chile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-2xl border border-border bg-white px-6 py-3.5 text-xs font-black text-foreground/80 hover:bg-surface-raised transition-all"
              >
                Ver mapa de cómo llegar
                <ArrowRight size={14} />
              </a>
            </div>
          </article>

          {/* Escuela 2: Gral. Gambino */}
          <article className="relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border-2 border-primary/20 bg-gradient-to-br from-white via-surface-yellow/50 to-white p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 card-hover">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Building2 size={160} className="text-primary" />
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-yellow px-4 py-1.5 text-xs font-black uppercase tracking-wider text-primary-dark shadow-sm">
                  <Sparkles size={14} />
                  RBD 26106-8
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-black text-emerald-800 bg-emerald-100/90 px-3.5 py-1.5 rounded-full border border-emerald-200">
                  <ShieldCheck size={14} />
                  Matrículas 2027
                </span>
              </div>

              <h3 className="text-3xl font-black text-foreground mb-2 leading-tight font-display">
                Escuela Gral. Gambino
              </h3>
              <p className="text-base font-bold text-primary mb-4 flex items-center gap-2">
                <MapPin size={18} className="shrink-0" />
                Gral. Gambino 4613, Conchalí
              </p>
              <p className="text-sm font-semibold text-foreground/75 mb-6">
                Espacios educativos luminosos, laboratorio pedagógico y gabinete de atención fonoaudiológica individual.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2.5 text-xs font-black text-foreground/85">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  Niveles: Medio Mayor, Pre-Kínder y Kínder
                </li>
                <li className="flex items-center gap-2.5 text-xs font-black text-foreground/85">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  Educación 100% gratuita sin mensualidad
                </li>
                <li className="flex items-center gap-2.5 text-xs font-black text-foreground/85">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  Jornadas Mañana y Tarde
                </li>
              </ul>
            </div>

            <div className="space-y-3 pt-6 border-t border-border/60">
              <a
                href={gambinoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-yellow px-6 py-4.5 text-sm font-black text-primary-dark shadow-md hover:bg-brand-yellow-light transition-all"
              >
                <MessageCircle size={18} />
                Consultar Cupo Escuela Gral. Gambino
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Gral.%20Gambino%204613%2C%20Conchal%C3%AD%2C%20Chile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-2xl border border-border bg-white px-6 py-3.5 text-xs font-black text-foreground/80 hover:bg-surface-raised transition-all"
              >
                Ver mapa de cómo llegar
                <ArrowRight size={14} />
              </a>
            </div>
          </article>
        </div>

        {/* Coverage Card for Nearby Communes */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/15 bg-gradient-to-br from-white via-surface-blue/60 to-white p-8 sm:p-10 max-w-4xl mx-auto text-center shadow-xl card-hover">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-yellow/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4.5 py-2 text-xs font-black uppercase tracking-wider text-primary mb-4 shadow-sm">
              <MapPin size={14} />
              Cobertura Comunas Cercanas
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-foreground mb-3 font-display">
              Atendemos familias de comunas vecinas
            </h4>
            <p className="text-sm sm:text-base font-semibold text-foreground/75 leading-relaxed max-w-2xl mx-auto mb-7">
              Por nuestra ubicación en Conchalí y excelente locomoción, recibimos a familias de{" "}
              <strong>Huechuraba, Renca, Recoleta, Independencia, Quilicura y Santiago Norte</strong>.
              Todos nuestros estudiantes acceden al beneficio de educación y atención fonoaudiológica 100% gratuita.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "Familias de Renca", href: "/matriculas-2027-renca" },
                { name: "Familias de Huechuraba", href: "/matriculas-2027-huechuraba" },
                { name: "Santiago Norte", href: "/matriculas-2027-santiago-norte" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="inline-flex items-center gap-2 rounded-2xl border border-border bg-white px-5 py-3 text-sm font-black text-primary shadow-sm transition-all hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-0.5 group"
                >
                  {link.name}
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
