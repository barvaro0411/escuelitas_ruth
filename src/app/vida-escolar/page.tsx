import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Heart,
  Images,
  Instagram,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import ImportantDates from "@/components/sections/ImportantDates";
import PhotoGallery from "@/components/sections/PhotoGallery";
import WeeklyUpdates from "@/components/sections/WeeklyUpdates";
import DailyRoutine from "@/components/sections/DailyRoutine";
import SpecialWorkshops from "@/components/sections/SpecialWorkshops";
import AnnualTraditions from "@/components/sections/AnnualTraditions";
import JsonLd from "@/components/seo/JsonLd";
import { galleryImages } from "@/content/gallery";
import { schoolLifeEvents } from "@/content/school-life";
import { buildBreadcrumbsJsonLd, siteConfig } from "@/lib/site";

function formatSchoolDate(date: string) {
  return new Intl.DateTimeFormat("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "America/Santiago",
  }).format(new Date(`${date}T12:00:00`));
}

export const metadata: Metadata = {
  title: "Vida Escolar — Alegría, Talleres y Rutina",
  description:
    "Conoce cómo es un día en Escuela de Lenguaje Ruth, sus talleres lúdicos (mini chefs, cuentacuentos), hitos anuales y dependencias preparadas en Conchalí.",
  alternates: { canonical: "/vida-escolar" },
  openGraph: {
    title: "Vida Escolar | Escuela de Lenguaje Ruth",
    description:
      "Rutinas, talleres, actividades y comunidad escolar de Escuelitas Ruth.",
    url: "/vida-escolar",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Equipo educativo de Escuela de Lenguaje Ruth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vida Escolar | Escuela de Lenguaje Ruth",
    description: "Rutinas, actividades y comunidad escolar en Conchalí.",
    images: ["/og-image.jpg"],
  },
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
      <PageHero
        eyebrow="Nuestra comunidad"
        eyebrowIcon={Sparkles}
        title="Vida Escolar"
        lead="¡En Escuelitas Ruth aprender a hablar es pura alegría! Rutinas afectuosas, talleres prácticos, estimulación fonoaudiológica continua y espacios diseñados para que los niños crezcan felices."
        decoration={
          <div
            className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_20%_20%,#f59e0b_0,transparent_30%),radial-gradient(circle_at_80%_60%,#0284c7_0,transparent_35%),radial-gradient(circle_at_50%_90%,#ec4899_0,transparent_25%)]"
            aria-hidden="true"
          />
        }
      >
        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-action/40 bg-action px-3.5 py-1.5 text-xs font-extrabold text-primary-dark shadow-xs">
            ⭐ 100% Gratuito MINEDUC
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5 text-xs font-extrabold text-white backdrop-blur-sm">
            🗣️ Fonoaudiología sin costo
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5 text-xs font-extrabold text-white backdrop-blur-sm">
            🎨 Aprender jugando
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5 text-xs font-extrabold text-white backdrop-blur-sm">
            🏰 Patios techados protegidos
          </span>
        </div>
      </PageHero>

      {/* Talleres y experiencias lúdicas que despiertan el habla */}
      <SpecialWorkshops />

      {/* Un día en Escuelitas Ruth: Rutina diaria interactiva y colorida */}
      <DailyRoutine />

      {/* Novedades y fechas (se ocultan automáticamente si no hay elementos cargados) */}
      <WeeklyUpdates hideWhenEmpty />
      <ImportantDates hideWhenEmpty />

      {/* Eventos puntuales confirmados (solo si hay publicados) */}
      {publishedEvents.length > 0 && (
        <section
          className="border-b border-border bg-surface py-16 sm:py-20"
          aria-labelledby="activities-title"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Aprender y compartir
              </p>
              <h2
                id="activities-title"
                className="mt-2 font-display font-extrabold text-ink text-3xl sm:text-4xl"
              >
                Actividades confirmadas
              </h2>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {publishedEvents.map((event) => (
                <article
                  key={event.id}
                  className="rounded-2xl border border-border bg-surface p-6 card-interactive"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                    {event.category}
                  </p>
                  <h3 className="mt-2 font-display font-extrabold text-ink text-xl">
                    {event.title}
                  </h3>
                  <time
                    dateTime={event.date}
                    className="mt-2 block text-xs font-semibold text-muted"
                  >
                    {formatSchoolDate(event.date)}
                  </time>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {event.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Hitos y tradiciones del año escolar */}
      <AnnualTraditions />

      {/* Galería de espacios e instalaciones preparadas */}
      <section
        className="bg-surface-sunk/40 py-16 sm:py-24"
        aria-labelledby="gallery-title"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end mb-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <Camera className="h-4 w-4" aria-hidden="true" />
                Galería institucional
              </div>
              <h2
                id="gallery-title"
                className="mt-2 font-display font-extrabold text-ink text-3xl sm:text-4xl"
              >
                Espacios e instalaciones preparadas
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                Conoce las dependencias de nuestras dos sedes en Conchalí: salas
                de fonoaudiología, patios techados de juegos y áreas de
                aprendizaje diseñadas con alegría para el desarrollo infantil.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-sm font-extrabold text-muted shrink-0">
              <Images className="h-5 w-5 text-primary" aria-hidden="true" />
              {galleryImages.length} fotografías
            </div>
          </div>

          {/* Banner de protección y privacidad infantil */}
          <div className="mb-8 rounded-3xl border-2 border-primary/20 bg-white p-6 sm:p-7 shadow-sm flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <ShieldCheck className="h-7 w-7" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <h3 className="font-display font-extrabold text-ink text-lg sm:text-xl">
                Cuidado y protección de la identidad digital de nuestros párvulos
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-muted leading-relaxed">
                Por respeto a los derechos de la niñez y normativas de protección de datos, no exponemos fotografías con rostros de menores en plataformas públicas abiertas. Las imágenes de nuestra galería destacan nuestras salas pedagógicas, salas de fonoaudiología, áreas de juego y equipo docente.
              </p>
            </div>
          </div>

          <div>
            <PhotoGallery images={galleryImages} />
          </div>

          {/* Gran tarjeta comunitaria hacia Instagram */}
          <div className="mt-12 overflow-hidden rounded-3xl border-2 border-pink-200 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 p-8 sm:p-10 text-white shadow-xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-white backdrop-blur-sm mb-3">
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  <span>Comunidad activa en redes</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold leading-tight text-white">
                  ¡Sigue el día a día en nuestro Instagram oficial!
                </h3>
                <p className="mt-2 text-sm sm:text-base text-white/90 leading-relaxed">
                  Videos de celebraciones, bailes típicos, actividades de convivencia y comunicados para apoderados en <strong>@escuelitasruthoficial_</strong>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-extrabold text-pink-700 shadow-md transition-all hover:bg-white/90 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Instagram className="h-5 w-5 text-pink-600" aria-hidden="true" />
                  <span>Seguir en Instagram</span>
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/15 px-6 py-3.5 text-sm font-extrabold text-white transition-all hover:bg-white/25 cursor-pointer backdrop-blur-sm"
                >
                  <Heart className="h-4 w-4" />
                  <span>Agendar visita</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
