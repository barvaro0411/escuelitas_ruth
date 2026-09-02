import Link from "next/link";
import { ArrowRight, MessageCircle, PhoneCall } from "lucide-react";
import { createWhatsAppUrl, siteConfig } from "@/lib/site";

const ctaWhatsAppUrl = createWhatsAppUrl({ source: "hero" });

export default function CTASection() {
  return (
    <section className="relative isolate overflow-hidden bg-primary-dark py-20 sm:py-24">
      <div
        className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_18%_18%,#f59e0b_0,transparent_26%),radial-gradient(circle_at_82%_75%,#2563eb_0,transparent_28%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-on-dark">
            Consulta cupos 2027
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display font-extrabold leading-tight text-white text-3xl sm:text-4xl">
            Te orientamos sobre nivel, jornada y evaluación
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Escríbenos sin compromiso. Revisamos la edad de tu hijo, la sede más
            cercana y los pasos para continuar.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href={ctaWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir WhatsApp para consultar disponibilidad 2027"
              className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-action px-7 py-4 text-base font-extrabold text-primary-dark transition-all hover:bg-action-hover focus-visible:ring-4 focus-visible:ring-white btn-action-glow cursor-pointer"
            >
              <MessageCircle className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
              <span>Consultar disponibilidad</span>
            </a>
            <a
              href={siteConfig.contact.phone.href}
              className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/5 px-6 py-4 text-base font-semibold text-white transition-all hover:bg-white/15 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:ring-4 focus-visible:ring-white cursor-pointer"
            >
              <PhoneCall className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
              <span>{siteConfig.contact.phone.label}</span>
            </a>
          </div>

          <Link
            href="/admision"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors"
          >
            <span>Revisar requisitos de admisión</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
