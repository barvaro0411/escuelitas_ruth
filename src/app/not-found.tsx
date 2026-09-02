import Link from "next/link";
import { ArrowLeft, Home, MapPin, MessageCircle, Search } from "lucide-react";
import { buildWhatsAppUrl, siteConfig } from "@/lib/site";

export default function NotFound() {
  const whatsAppUrl = buildWhatsAppUrl(
    "Hola, no encontré una página en su sitio web y quisiera consultar información sobre la Escuela de Lenguaje Ruth.",
  );

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-paper px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-surface-sunk px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-primary shadow-xs">
          <Search className="h-3.5 w-3.5" aria-hidden="true" />
          Página no encontrada (Error 404)
        </div>

        <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Parece que esta página no está disponible
        </h1>

        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          La dirección que ingresaste puede haber cambiado o ya no existe. No te
          preocupes, aquí tienes los accesos principales para orientarte:
        </p>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 text-left">
          <Link
            href="/"
            className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-5 transition-all hover:border-primary/40 hover:shadow-sm"
          >
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <Home className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="mt-3 font-display text-base font-extrabold text-ink">
                Portada Principal
              </h2>
              <p className="mt-1 text-xs text-muted">
                Calculadora de nivel, requisitos y novedades.
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-extrabold text-primary">
              Ir al inicio →
            </span>
          </Link>

          <Link
            href="/sedes"
            className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-5 transition-all hover:border-primary/40 hover:shadow-sm"
          >
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="mt-3 font-display text-base font-extrabold text-ink">
                Nuestras Sedes
              </h2>
              <p className="mt-1 text-xs text-muted">
                Vascongados 4314 y Gral. Gambino 4613.
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-extrabold text-primary">
              Ver direcciones →
            </span>
          </Link>

          <Link
            href="/admision"
            className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-5 transition-all hover:border-primary/40 hover:shadow-sm"
          >
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <Search className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="mt-3 font-display text-base font-extrabold text-ink">
                Admisión 2027
              </h2>
              <p className="mt-1 text-xs text-muted">
                Proceso paso a paso y evaluación gratuita.
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-extrabold text-primary">
              Ver admisión →
            </span>
          </Link>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-extrabold text-white transition-colors hover:bg-primary-dark sm:w-auto"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Volver a la página principal
          </Link>

          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-action bg-action px-6 py-3 text-sm font-extrabold text-primary-dark transition-colors hover:bg-action-hover sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Consultar por WhatsApp
          </a>
        </div>

        <p className="mt-8 text-xs text-muted">
          Si necesitas asistencia inmediata, llámanos al{" "}
          <a
            href={siteConfig.contact.phone.href}
            className="font-extrabold text-primary underline hover:text-primary-dark"
          >
            {siteConfig.contact.phone.label}
          </a>
        </p>
      </div>
    </div>
  );
}
