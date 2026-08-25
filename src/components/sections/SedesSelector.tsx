import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { createWhatsAppUrl } from "@/lib/site";
import FiestasPatriasMode from "@/components/seasonal/FiestasPatriasMode";
import { campuses, schoolLevels } from "@/content/school-data";

export default function SedesSelector() {
  return (
    <section className="border-b border-border bg-paper py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Escuelas en Conchalí
          </div>
          <h2 className="mb-4 font-display font-extrabold tracking-tight text-ink text-3xl sm:text-4xl">
            Elige la sede más cercana a tu hogar
          </h2>
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            Dos sedes, los mismos niveles educativos y orientación directa para
            tu familia.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
          {campuses.map((campus) => (
            <article
              key={campus.rbd}
              className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md sm:p-8"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
                    <Building2 className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-extrabold text-primary">
                    <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                    RBD {campus.rbd}
                  </span>
                </div>

                <FiestasPatriasMode>
                  <p className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-[#b4232e]/15 bg-red-50 px-3 py-1 text-xs font-extrabold text-[#9f1d29]">
                    <span aria-hidden="true">★</span>
                    ¡Celebramos Chile!
                  </p>
                </FiestasPatriasMode>
                <h3 className="mt-6 font-display font-extrabold text-ink text-xl">
                  {campus.name}
                </h3>
                <p className="mt-2 flex items-start gap-2 text-sm font-extrabold text-primary">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0"
                    aria-hidden="true"
                  />
                  {campus.address}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {campus.description}
                </p>

                <ul className="mt-6 space-y-2 text-sm font-semibold text-muted">
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    {schoolLevels
                      .filter((level) => campus.levelIds.includes(level.id))
                      .map((level) => level.name)
                      .join(",")}
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    Jornada mañana y tarde
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    Evaluación fonoaudiológica sin costo
                  </li>
                </ul>
              </div>

              <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row">
                <a
                  href={createWhatsAppUrl({
                    source: "campus",
                    campusId: campus.id,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir WhatsApp para consultar ${campus.name}`}
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-primary/25 px-4 py-3 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-surface-sunk"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Consultar esta sede
                </a>
                <Link
                  href={`/sedes#${campus.id}`}
                  aria-label={`Conocer información completa de ${campus.name}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
                >
                  Conoce nuestra sede
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <a
                href={campus.mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex min-h-11 items-center justify-center text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Ver ubicación en Google Maps
              </a>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-6 max-w-5xl rounded-2xl border border-primary/15 bg-surface p-6 text-center sm:p-8">
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-primary">
            Familias de comunas cercanas
          </p>
          <p className="mx-auto mt-2 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            También orientamos a familias de Huechuraba, Renca, Recoleta,
            Independencia, Quilicura y otros sectores del norte de Santiago.
          </p>
          <Link
            href="/matriculas-2027-santiago-norte"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Revisar información para Santiago Norte
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
