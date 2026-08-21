import Link from "next/link";
import { ArrowRight, MessageCircle, PhoneCall } from "lucide-react";
import { createWhatsAppUrl, siteConfig } from "@/lib/site";

const ctaWhatsAppUrl = createWhatsAppUrl({ source: "hero" });

export default function CTASection() {
  return (
    <section className="border-t border-border bg-surface-blue/35 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-primary-dark px-6 py-12 text-center sm:px-12 sm:py-14">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-yellow-light">
            Consulta cupos 2027
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Te orientamos sobre nivel, jornada y evaluación
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-semibold leading-relaxed text-white/80 sm:text-lg">
            Escríbenos sin compromiso. Revisamos la edad de tu hijo, la sede más cercana y los pasos para continuar.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href={ctaWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir WhatsApp para consultar disponibilidad 2027"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-brand-yellow px-7 py-4 text-base font-extrabold text-primary-dark transition-colors hover:bg-brand-yellow-light focus-visible:ring-4 focus-visible:ring-white"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Consultar disponibilidad
            </a>
            <a
              href={siteConfig.contact.phone.href}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/40 px-6 py-4 text-base font-bold text-white transition-colors hover:bg-white/10 focus-visible:ring-4 focus-visible:ring-white"
            >
              <PhoneCall className="h-5 w-5" aria-hidden="true" />
              {siteConfig.contact.phone.label}
            </a>
          </div>

          <Link href="/admision" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white/75 hover:text-white">
            Revisar requisitos de admisión
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
