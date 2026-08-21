import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, CalendarClock, Camera, CheckCircle2, MapPin, MessageCircle, ShieldCheck, Video } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import { campuses, schoolLevels } from "@/content/school-data";
import { buildBreadcrumbsJsonLd, createWhatsAppUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sedes en Conchalí — Vascongados y Gral. Gambino",
  description: "Conoce direcciones, RBD, niveles, jornadas y mapas de las dos sedes de Escuela de Lenguaje Ruth en Conchalí.",
  alternates: { canonical: "/sedes" },
  openGraph: { title: "Sedes | Escuela de Lenguaje Ruth", description: "Información de las sedes Vascongados y Gral. Gambino en Conchalí.", url: "/sedes" },
};

export default function SedesPage() {
  const breadcrumbsJsonLd = buildBreadcrumbsJsonLd([{ name: "Inicio", url: "/" }, { name: "Sedes", url: "/sedes" }]);

  return (
    <>
      <JsonLd data={breadcrumbsJsonLd} />
      <section className="bg-primary-dark pb-16 pt-36 text-white sm:pb-20 sm:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-yellow-light">Dos sedes en Conchalí</p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-extrabold tracking-tight sm:text-6xl">Conoce nuestras sedes</h1>
          <p className="mt-5 max-w-2xl text-lg font-semibold leading-relaxed text-white/80">Compara ubicación, niveles y jornadas. La disponibilidad de cupos se confirma directamente con la escuela.</p>
        </div>
      </section>

      <section className="bg-surface-raised py-16 sm:py-20">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          {campuses.map((campus) => {
            const levels = schoolLevels.filter((level) => campus.levelIds.includes(level.id));
            const whatsappUrl = createWhatsAppUrl({ source: "campus", campusId: campus.id });
            const hasPublishedMedia = campus.gallery.length > 0 || campus.media.videoUrl || campus.media.virtualTourUrl || campus.media.panoramas.length > 0;
            return (
              <article id={campus.id} key={campus.id} className="scroll-mt-36 overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="bg-primary-dark p-7 text-white sm:p-10">
                    <div className="flex items-center justify-between gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-yellow text-primary-dark"><Building2 className="h-6 w-6" aria-hidden="true" /></div><span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-extrabold"><ShieldCheck className="h-4 w-4" aria-hidden="true" />RBD {campus.rbd}</span></div>
                    <h2 className="mt-7 font-display text-3xl font-extrabold">{campus.name}</h2>
                    <p className="mt-3 flex items-start gap-2 font-bold text-white/85"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow" aria-hidden="true" />{campus.address}</p>
                    <p className="mt-5 text-sm font-semibold leading-relaxed text-white/70">{campus.description}</p>
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-yellow px-5 py-3 text-sm font-extrabold text-primary-dark"><MessageCircle className="h-4 w-4" aria-hidden="true" />Consultar disponibilidad</a>
                      <a href={campus.mapHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/35 px-5 py-3 text-sm font-extrabold text-white">Abrir mapa <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
                    </div>
                  </div>

                  <div className="p-7 sm:p-10">
                    <h3 className="font-display text-2xl font-extrabold text-foreground">Información educativa</h3>
                    <div className="mt-6 grid gap-5 sm:grid-cols-2">
                      <div className="rounded-xl border border-border bg-surface-blue/30 p-5"><p className="text-xs font-extrabold uppercase tracking-[0.12em] text-primary">Niveles impartidos</p><ul className="mt-3 space-y-2">{levels.map((level) => <li key={level.id} className="flex items-start gap-2 text-sm font-bold text-foreground/80"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-accent" aria-hidden="true" />{level.name}</li>)}</ul></div>
                      <div className="rounded-xl border border-border bg-surface-yellow/50 p-5"><p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-brand-yellow-dark"><CalendarClock className="h-4 w-4" aria-hidden="true" />Jornadas</p><p className="mt-3 text-sm font-bold text-foreground/80">{campus.journeys.join(" y ")}</p><p className="mt-2 text-xs font-semibold leading-relaxed text-muted">Consulta disponibilidad para la jornada que necesita tu familia.</p></div>
                    </div>

                    <div className="mt-6 rounded-xl border border-dashed border-primary/25 p-5">
                      <div className="flex items-center gap-3"><Camera className="h-5 w-5 text-primary" aria-hidden="true" /><Video className="h-5 w-5 text-primary" aria-hidden="true" /><h3 className="font-display text-lg font-extrabold text-foreground">Fotografías y recorrido virtual</h3></div>
                      {hasPublishedMedia ? (
                        <div className="mt-4 space-y-4">
                          {campus.gallery.length > 0 && (
                            <div className="grid grid-cols-2 gap-3">
                              {campus.gallery.map((image) => (
                                <figure key={image.src} className="overflow-hidden rounded-xl border border-border bg-surface-raised">
                                  <div className="relative aspect-[4/3]"><Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" /></div>
                                  <figcaption className="p-2 text-xs font-bold text-foreground/75">{image.title}</figcaption>
                                </figure>
                              ))}
                            </div>
                          )}
                          {campus.media.panoramas.length > 0 && (
                            <div className="grid grid-cols-2 gap-3">
                              {campus.media.panoramas.map((image) => (
                                <figure key={image.src} className="overflow-hidden rounded-xl border border-border bg-surface-raised">
                                  <div className="relative aspect-[2/1]"><Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" /></div>
                                  <figcaption className="p-2 text-xs font-bold text-foreground/75">{image.title}</figcaption>
                                </figure>
                              ))}
                            </div>
                          )}
                          {campus.media.videoUrl && <a href={campus.media.videoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-sm font-extrabold text-primary">Ver video de la sede</a>}
                          {campus.media.virtualTourUrl && <a href={campus.media.virtualTourUrl} target="_blank" rel="noopener noreferrer" className="ml-4 inline-flex min-h-11 items-center text-sm font-extrabold text-primary">Iniciar recorrido virtual</a>}
                        </div>
                      ) : <p className="mt-2 text-sm font-semibold leading-relaxed text-muted">La estructura admite fotografías, video, panorámicas y un futuro tour 360°. Se mostrará cuando exista material real y autorizado.</p>}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
          <div className="text-center"><Link href="/contacto" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-extrabold text-white">Coordinar una visita <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
