import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarClock,
  CheckCircle2,
  ExternalLink,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { createWhatsAppUrl } from "@/lib/site";
import FiestasPatriasMode from "@/components/seasonal/FiestasPatriasMode";
import { campuses, schoolLevels } from "@/content/school-data";

export default function SedesSelector() {
  return (
    <section className="border-b border-border bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-primary">
            <MapPin className="h-4 w-4 text-action" aria-hidden="true" />
            Dos Sedes en Conchalí
          </div>
          <h2 className="mb-3 font-display font-extrabold tracking-tight text-ink text-3xl sm:text-4xl">
            Elige la sede más cercana a tu hogar
          </h2>
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            Ambas escuelas cuentan con los mismos niveles educativos gratuitos,
            evaluación fonoaudiológica sin costo y jornadas mañana y tarde.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
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
                        <span className="inline-flex items-center gap-1 rounded-full bg-action px-3 py-1 text-[11px] font-extrabold text-primary-dark">
                          Cupos 2027
                        </span>
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

                    <div className="flex items-start gap-2.5 text-sm font-bold text-primary mb-3">
                      <MapPin
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <span>{campus.address}</span>
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
                          <CheckCircle2
                            className="h-4 w-4 shrink-0 text-emerald-600"
                            aria-hidden="true"
                          />
                          <span>
                            <strong>Niveles:</strong>{" "}
                            {schoolLevels
                              .filter((level) =>
                                campus.levelIds.includes(level.id),
                              )
                              .map((level) => level.name)
                              .join(", ")}
                          </span>
                        </li>
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
                        <li className="flex items-center gap-2">
                          <Sparkles
                            className="h-4 w-4 shrink-0 text-action"
                            aria-hidden="true"
                          />
                          <span>
                            <strong>Costo:</strong> 100% Gratuita · Subvención
                            MINEDUC
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer de botones */}
                <div className="p-6 sm:p-7 pt-0 space-y-3">
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

                  <div className="flex flex-col sm:flex-row gap-2 pt-1">
                    <Link
                      href={`/sedes#${campus.id}`}
                      aria-label={`Conocer información completa de ${campus.name}`}
                      className="group/link flex-1 inline-flex min-h-10 items-center justify-center gap-1.5 rounded-xl border border-border bg-surface px-3 py-2 text-xs font-bold text-ink transition-colors hover:border-primary hover:text-primary text-center"
                    >
                      <span>Ver detalles y fotos</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-1" aria-hidden="true" />
                    </Link>

                    <a
                      href={campus.mapHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/map inline-flex min-h-10 items-center justify-center gap-1.5 rounded-xl border border-border bg-surface px-3 py-2 text-xs font-bold text-muted transition-colors hover:border-primary hover:text-primary text-center"
                    >
                      <MapPin className="h-3.5 w-3.5 text-primary transition-transform duration-200 group-hover/map:scale-110" aria-hidden="true" />
                      <span>Cómo llegar</span>
                      <ExternalLink className="h-3 w-3 text-muted/70" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Banner de comunas vecinas */}
        <div className="mx-auto mt-8 max-w-5xl rounded-2xl border border-primary/20 bg-surface p-6 sm:p-8 text-center shadow-xs">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary">
            Familias de comunas cercanas en Santiago Norte
          </p>
          <p className="mx-auto mt-2 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            Si vives en <strong>Huechuraba, Renca, Recoleta, Independencia o Quilicura</strong>,
            también te orientamos sobre vacantes y el proceso de admisión sin costo.
          </p>
          <Link
            href="/matriculas-2027-santiago-norte"
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark transition-colors"
          >
            Revisar información para Santiago Norte
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
