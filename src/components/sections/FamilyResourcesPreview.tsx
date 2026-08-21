import Link from "next/link";
import { ArrowRight, BookHeart } from "lucide-react";
import { familyResources } from "@/content/family-resources";

export default function FamilyResourcesPreview() {
  return (
    <section className="border-b border-border bg-surface-blue/35 py-16 sm:py-20" aria-labelledby="family-resources-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">Acompañamiento en casa</p>
            <h2 id="family-resources-title" className="mt-2 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Recursos para familias</h2>
            <p className="mt-3 font-semibold leading-relaxed text-muted">Lecturas breves y claras para acompañar el lenguaje y la comunicación en situaciones cotidianas.</p>
          </div>
          <Link href="/familias" className="inline-flex min-h-11 items-center gap-2 text-sm font-extrabold text-primary hover:text-primary-dark">Ver todos los recursos <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {familyResources.slice(0, 3).map((resource) => (
            <article key={resource.slug} className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm">
              <BookHeart className="h-7 w-7 text-primary" aria-hidden="true" />
              <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.12em] text-primary">{resource.category}</p>
              <h3 className="mt-2 font-display text-xl font-extrabold leading-tight text-foreground">{resource.title}</h3>
              <p className="mt-3 flex-1 text-sm font-semibold leading-relaxed text-muted">{resource.description}</p>
              <Link href={`/familias/${resource.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-primary hover:text-primary-dark">Leer recurso <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
