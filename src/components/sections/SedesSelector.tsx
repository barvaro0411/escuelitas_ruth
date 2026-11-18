import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarClock,
  Camera,
  CheckCircle2,
  ExternalLink,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { createWhatsAppUrl } from "@/lib/site";
import FiestasPatriasMode from "@/components/seasonal/FiestasPatriasMode";
import { campuses } from "@/content/school-data";

export default function SedesSelector() {
  return (
    <section data-cta="sedes" className="border-b border-border bg-surface py-14 sm:py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center" data-reveal>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-primary">
            <MapPin className="h-4 w-4 text-action" aria-hidden="true" />
            Dos Sedes en Conchalí
          </div>
          <h2 className="mb-3 font-display font-extrabold tracking-tight text-ink text-3xl sm:text-4xl">
            Elige la sede más cercana a tu hogar
          </h2>
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            Compara direcciones, jornadas y cómo llegar antes de consultar
            disponibilidad.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2" data-reveal-group>
          {campuses.map((campus) => {
            const coverImage = campus.gallery[0];
            const whatsappUrl = createWhatsAppUrl({
              source: "campus",
              campusId: campus.id,
            });

            return (
              <article
                key={campus.rbd}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface shadow-xs card-interactive"
              >
                <div>
                  {/* Banner superior con foto o cabecera institucional */}
                  {coverImage ? (
                    <div className="relative h-52 w-full overflow-hidden bg-primary-dark">
                      <Image
                        src={coverImage.src}
                        alt={`Fachada de ${campus.name}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/40 to-transparent" />
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-primary-dark/80 px-3 py-1 text-xs font-extrabold text-white backdrop-blur-sm">
                          <ShieldCheck className="h-3.5 w-3.5 text-action" aria-hidden="true" />
                          RBD {campus.rbd}
                        </span>
                        <Link
                          href={`/sedes#${campus.id}`}
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-primary-dark/80 px-3 py-1 text-[11px] font-extrabold text-white backdrop-blur-sm transition-colors hover:border-action hover:text-accent-on-dark"
                        >
                          <Camera className="h-3 w-3 text-accent-on-dark" aria-hidden="true" />
                          <span>{campus.gallery.length} fotos</span>
                        </Link>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="text-xs font-semibold uppercase tracking-wider text-accent-on-dark">
                          {campus.id === "vascongados" ? "Sede Principal" : "Sede Conchalí"}
                        </p>
                        <h3 className="font-display text-2xl font-extrabold leading-tight text-white">
                          {campus.name}
                        </h3>
                      </div>
                    </div>
                  ) : (
                    <div className="relative bg-gradient-to-br from-primary-dark to-[#0f2b80] p-6 sm:p-7 text-white">
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-extrabold text-white">
                          <ShieldCheck className="h-3.5 w-3.5 text-action" aria-hidden="true" />
                          RBD {campus.rbd}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-action px-3 py-1 text-[11px] font-extrabold text-primary-dark">
                          Cupos 2027
                        </span>
                      </div>
                      <div className="mt-6 flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                          <Building2 className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-accent-on-dark">
                            Sede Conchalí
                          </p>
                          <h3 className="font-display text-2xl font-extrabold leading-tight text-white">
                            {campus.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Cuerpo de la tarjeta */}
                  <div className="p-6 sm:p-7">
                    <FiestasPatriasMode>
                      <p className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#b4232e]/15 bg-red-50 px-3 py-1 text-xs font-extrabold text-[#9f1d29]">
                        <span aria-hidden="true">★</span>
                        ¡Celebramos Chile!
                      </p>
                    </FiestasPatriasMode>

                    <div className="flex items-start justify-between gap-3 text-sm font-bold text-primary mb-3">
                      <div className="flex items-start gap-2.5">
                        <MapPin
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                          aria-hidden="true"
                        />
                        <div>
                          <span>{campus.address}</span>
                          <span className="block text-xs font-semibold text-muted mt-0.5">
                            {campus.reference}
                          </span>
                        </div>
                      </div>
                      <a
                        href={campus.mapHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Cómo llegar a ${campus.name} en Google Maps`}
                        className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-border bg-paper px-2.5 py-1.5 text-[11px] font-bold text-primary transition-colors hover:border-primary hover:bg-surface-sunk"
                      >
                        <span>Mapa</span>
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                      </a>
                    </div>

                    <p className="text-sm leading-relaxed text-muted">
                      {campus.description}
                    </p>

                    <div className="mt-5 rounded-xl border border-border/80 bg-surface-sunk p-4 space-y-2.5">
                      <p className="text-xs font-bold uppercase tracking-wider text-primary">
                        Información de la sede:
                      </p>
                      <ul className="space-y-2 text-xs font-semibold text-ink/80">
                        <li className="flex items-center gap-2">
                          <CalendarClock
                            className="h-4 w-4 shrink-0 text-primary"
                            aria-hidden="true"
                          />
                          <span>
                            <strong>Jornadas:</strong> Mañana (08:15–12:15) y
                            Tarde (13:30–17:15)
                          </span>
                        </li>
                        {campus.highlights.slice(0, 2).map((highlight) => (
                          <li key={highlight} className="flex items-center gap-2">
                            <CheckCircle2
                              className="h-4 w-4 shrink-0 text-primary"
                              aria-hidden="true"
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer de botones */}
                <div className="p-6 sm:p-7 pt-0 space-y-2.5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir WhatsApp para consultar cupos en ${campus.name}`}
                    className="flex w-full min-h-12 items-center justify-center gap-2 rounded-xl bg-action px-4 py-3 text-sm font-extrabold text-primary-dark transition-all hover:bg-action-hover active:scale-[0.98] btn-action-glow text-center cursor-pointer"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>Consultar cupos en {campus.shortName}</span>
                  </a>

                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <Link
                      href={`/contacto?sede=${campus.id}`}
                      className="flex min-h-11 items-center justify-center gap-1.5 rounded-xl border border-primary/25 bg-surface-sunk px-3 py-2 text-xs font-extrabold text-primary transition-colors hover:border-primary hover:bg-surface text-center"
                    >
                      <span>Dejar mis datos</span>
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>

                    <Link
                      href={`/sedes#${campus.id}`}
                      aria-label={`Conocer información completa de ${campus.name}`}
                      className="group/link inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl border border-border bg-surface px-3 py-2 text-xs font-bold text-ink transition-colors hover:border-primary hover:text-primary text-center"
                    >
                      <span>Ver fotos y detalles</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-1" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Banner de comunas vecinas */}
        <div className="mx-auto mt-8 flex max-w-5xl flex-col items-center justify-between gap-4 rounded-2xl border border-primary/20 bg-surface-sunk/60 p-6 text-center shadow-xs sm:flex-row sm:p-7 sm:text-left">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary">
              Familias de comunas cercanas en Santiago Norte
            </p>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              Si vives en <strong>Huechuraba, Renca, Recoleta, Independencia o Quilicura</strong>,
              también te orientamos sobre vacantes y el proceso de admisión.
            </p>
          </div>
          <Link
            href="/matriculas-2027-santiago-norte"
            className="group inline-flex min-h-11 shrink-0 items-center gap-2 rounded-xl border border-primary/25 bg-surface px-4 py-2.5 text-sm font-bold text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
          >
            <span>Ver rutas Santiago Norte</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
