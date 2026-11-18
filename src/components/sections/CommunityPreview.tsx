import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookHeart, Camera } from "lucide-react";
import { familyResources } from "@/content/family-resources";

export default function CommunityPreview() {
  return (
    <section className="border-b border-border bg-surface py-14 sm:py-18" aria-labelledby="community-preview-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl" data-reveal>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary">
            Comunidad escolar
          </p>
          <h2 id="community-preview-title" className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Conoce nuestra comunidad
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Actividades diarias, talleres lúdicos y guías breves para acompañar el lenguaje desde el hogar.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2" data-reveal-group>
          <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-paper shadow-xs card-interactive">
            <div className="relative h-48 sm:h-56 overflow-hidden bg-primary-dark">
              <Image
                src="/celebracion-patio-techado.jpg"
                alt="Patio techado de Escuelitas Ruth preparado para una celebración"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent" aria-hidden="true" />
              <span className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-primary-dark/80 px-3 py-1 text-xs font-extrabold text-white backdrop-blur-xs">
                <Camera className="h-3.5 w-3.5 text-accent-on-dark" aria-hidden="true" />
                Galería y talleres
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-2xl font-extrabold text-ink">Vida escolar</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                Descubre nuestras rutinas diarias, talleres de estimulación, celebraciones y fotografías de ambas sedes.
              </p>
              <Link href="/vida-escolar" className="group/link mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-extrabold text-primary hover:text-primary-dark">
                <span>Conocer la vida escolar</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </article>

          <article className="flex flex-col justify-between rounded-2xl border border-border bg-surface-sunk p-6 shadow-xs card-interactive">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface text-primary shadow-2xs border border-border/60">
                <BookHeart className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-extrabold text-ink">Recursos para familias</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Ideas sencillas y prácticas para acompañar el lenguaje de tu hijo en casa.
              </p>
              <ul className="mt-5 divide-y divide-border/80 rounded-xl border border-border/80 bg-surface/80 px-4">
                {familyResources.slice(0, 2).map((resource) => (
                  <li key={resource.slug}>
                    <Link
                      href={`/familias/${resource.slug}`}
                      className="group/item flex min-h-14 items-center justify-between gap-3 py-3 text-sm font-bold text-ink transition-colors hover:text-primary"
                    >
                      <div className="min-w-0">
                        <span className="block truncate">{resource.title}</span>
                        <span className="mt-0.5 block text-[11px] font-semibold text-muted">
                          {resource.category} · {resource.readingTime}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-primary transition-transform duration-200 group-hover/item:translate-x-1" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/familias" className="group/link mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-extrabold text-primary hover:text-primary-dark">
              <span>Ver todos los recursos</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" aria-hidden="true" />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
