import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookHeart } from "lucide-react";
import { familyResources } from "@/content/family-resources";

export default function CommunityPreview() {
  return (
    <section className="border-b border-border bg-surface py-12 sm:py-16" aria-labelledby="community-preview-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="community-preview-title" className="font-display text-3xl font-extrabold text-ink sm:text-4xl" data-reveal>
          Conoce nuestra comunidad
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2" data-reveal-group>
          <article className="overflow-hidden rounded-2xl border border-border bg-paper">
            <div className="relative h-40 sm:h-48">
              <Image
                src="/celebracion-patio-techado.jpg"
                alt="Patio techado de Escuelitas Ruth preparado para una celebración"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="font-display text-2xl font-extrabold text-ink">Vida escolar</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Descubre nuestras rutinas, talleres, celebraciones y fotografías.
              </p>
              <Link href="/vida-escolar" className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark">
                Conocer la vida escolar <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
          <article className="rounded-2xl border border-border bg-surface-sunk p-5 sm:p-6">
            <BookHeart className="h-7 w-7 text-primary" aria-hidden="true" />
            <h3 className="mt-3 font-display text-2xl font-extrabold text-ink">Recursos para familias</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Ideas sencillas para acompañar el lenguaje de tu hijo en casa.
            </p>
            <ul className="mt-4 divide-y divide-border">
              {familyResources.slice(0, 2).map((resource) => (
                <li key={resource.slug}>
                  <Link href={`/familias/${resource.slug}`} className="flex min-h-12 items-center justify-between gap-3 py-3 text-sm font-semibold text-primary hover:text-primary-dark">
                    {resource.title}
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/familias" className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark">
              Ver todos los recursos <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
