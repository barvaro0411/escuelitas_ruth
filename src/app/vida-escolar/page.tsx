import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Camera, Images, Sparkles } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import ImportantDates from "@/components/sections/ImportantDates";
import PhotoGallery from "@/components/sections/PhotoGallery";
import WeeklyUpdates from "@/components/sections/WeeklyUpdates";
import JsonLd from "@/components/seo/JsonLd";
import { galleryImages } from "@/content/gallery";
import { schoolLifeEvents } from "@/content/school-life";
import { buildBreadcrumbsJsonLd } from "@/lib/site";

function formatSchoolDate(date: string) {
  return new Intl.DateTimeFormat("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "America/Santiago",
  }).format(new Date(`${date}T12:00:00`));
}

export const metadata: Metadata = {
  title: "Vida Escolar — Actividades y Comunidad",
  description: "Conoce las actividades, novedades, fechas importantes y fotografías autorizadas de la comunidad de Escuela de Lenguaje Ruth en Conchalí.",
  alternates: { canonical: "/vida-escolar" },
  openGraph: {
    title: "Vida Escolar | Escuela de Lenguaje Ruth",
    description: "Actividades, novedades y comunidad escolar de Escuelitas Ruth.",
    url: "/vida-escolar",
    images: [{ url: "/equipo-escuela-ruth.jpg", width: 1024, height: 683, alt: "Equipo educativo de Escuela de Lenguaje Ruth" }],
  },
  twitter: { card: "summary_large_image", title: "Vida Escolar | Escuela de Lenguaje Ruth", description: "Actividades y comunidad escolar en Conchalí.", images: ["/equipo-escuela-ruth.jpg"] },
};

export default function VidaEscolarPage() {
  const breadcrumbsJsonLd = buildBreadcrumbsJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Vida Escolar", url: "/vida-escolar" },
  ]);
  const publishedEvents = schoolLifeEvents.filter((event) => event.published);

  return (
    <>
      <JsonLd data={breadcrumbsJsonLd} />
      <section className="relative overflow-hidden bg-primary-dark pb-16 pt-36 text-white sm:pb-20 sm:pt-40">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,#f59e0b_0,transparent_24%),radial-gradient(circle_at_80%_70%,#10b981_0,transparent_22%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em]"><Sparkles className="h-4 w-4 text-brand-yellow" aria-hidden="true" />Nuestra comunidad</div>
            <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight sm:text-6xl">Vida Escolar</h1>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-relaxed text-white/82 sm:text-xl">Así vivimos y aprendemos en Escuelitas Ruth. Aquí encontrarás actividades confirmadas, fechas importantes y fotografías autorizadas por la escuela.</p>
          </div>
        </div>
      </section>

      <WeeklyUpdates />
      <ImportantDates />

      <section className="border-b border-border bg-white py-16 sm:py-20" aria-labelledby="activities-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">Aprender y compartir</p>
            <h2 id="activities-title" className="mt-2 font-display text-3xl font-extrabold text-foreground sm:text-4xl">Actividades y celebraciones</h2>
            <p className="mt-3 font-semibold leading-relaxed text-muted">La estructura está preparada para publicar actividades por categoría, fecha y sede sin modificar los componentes.</p>
          </div>

          {publishedEvents.length > 0 ? (
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {publishedEvents.map((event) => (
                <article key={event.id} className="rounded-2xl border border-border bg-surface-blue/25 p-6">
                  <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-primary">{event.category}</p>
                  <h3 className="mt-2 font-display text-xl font-extrabold text-foreground">{event.title}</h3>
                  <time dateTime={event.date} className="mt-2 block text-xs font-bold text-muted">{formatSchoolDate(event.date)}</time>
                  <p className="mt-3 text-sm font-semibold leading-relaxed text-muted">{event.summary}</p>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-dashed border-primary/25 bg-surface-blue/25 p-7">
              <CalendarDays className="h-7 w-7 text-primary" aria-hidden="true" />
              <h3 className="mt-3 font-display text-xl font-extrabold text-foreground">Próximamente publicaremos actividades</h3>
              <p className="mt-2 max-w-2xl text-sm font-semibold leading-relaxed text-muted">No mostramos actividades de ejemplo como si fueran reales. Esta sección se activará al agregar información y fotografías confirmadas.</p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-surface-raised py-16 sm:py-20" aria-labelledby="gallery-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-primary"><Camera className="h-4 w-4" aria-hidden="true" />Galería fotográfica</div>
              <h2 id="gallery-title" className="mt-2 font-display text-3xl font-extrabold text-foreground sm:text-4xl">Momentos de Escuelitas Ruth</h2>
              <p className="mt-3 font-semibold leading-relaxed text-muted">Selecciona una fotografía para verla en tamaño ampliado. Incorporaremos nuevas categorías al recibir material autorizado.</p>
            </div>
            <div className="inline-flex items-center gap-2 text-sm font-extrabold text-muted"><Images className="h-5 w-5 text-primary" aria-hidden="true" />{galleryImages.length} fotografía{galleryImages.length === 1 ? "" : "s"}</div>
          </div>
          <div className="mt-8"><PhotoGallery images={galleryImages} /></div>
          <Link href="/contacto" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-xl border border-primary/25 bg-white px-5 py-3 text-sm font-extrabold text-primary hover:border-primary">Consultar por actividades o visitas <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
