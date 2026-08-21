import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookHeart, Info } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { familyResources } from "@/content/family-resources";
import { buildBreadcrumbsJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Recursos para Familias — Lenguaje y Comunicación",
  description: "Orientaciones generales y juegos cotidianos para acompañar el lenguaje y la comunicación infantil en casa.",
  alternates: { canonical: "/familias" },
  openGraph: { title: "Recursos para Familias | Escuela de Lenguaje Ruth", description: "Lecturas breves para acompañar el lenguaje en casa.", url: "/familias", images: [{ url: "/family-support.jpg", width: 1024, height: 1024, alt: "Familia compartiendo una lectura" }] },
};

export default function FamiliasPage() {
  const breadcrumbsJsonLd = buildBreadcrumbsJsonLd([{ name: "Inicio", url: "/" }, { name: "Recursos para familias", url: "/familias" }]);
  return (
    <>
      <JsonLd data={breadcrumbsJsonLd} />
      <section className="bg-primary-dark pb-16 pt-36 text-white sm:pb-20 sm:pt-40"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-yellow-light">Acompañamiento cotidiano</p><h1 className="mt-3 max-w-4xl font-display text-4xl font-extrabold tracking-tight sm:text-6xl">Recursos para familias</h1><p className="mt-5 max-w-2xl text-lg font-semibold leading-relaxed text-white/80">Ideas claras y breves para acompañar la comunicación y el lenguaje en casa con tranquilidad.</p></div></section>
      <section className="bg-surface-raised py-16 sm:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{familyResources.map((resource) => <article key={resource.slug} className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm"><BookHeart className="h-7 w-7 text-primary" aria-hidden="true" /><p className="mt-4 text-xs font-extrabold uppercase tracking-[0.12em] text-primary">{resource.category} · {resource.readingTime}</p><h2 className="mt-2 font-display text-2xl font-extrabold leading-tight text-foreground">{resource.title}</h2><p className="mt-3 flex-1 text-sm font-semibold leading-relaxed text-muted">{resource.description}</p><Link href={`/familias/${resource.slug}`} className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-extrabold text-primary hover:text-primary-dark">Leer recurso <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></article>)}</div><div className="mt-10 flex items-start gap-3 rounded-2xl border border-primary/15 bg-surface-blue/40 p-6"><Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" /><p className="text-sm font-semibold leading-relaxed text-muted">Estos contenidos son orientaciones generales y no reemplazan una evaluación profesional. Si tienes dudas sobre el desarrollo de tu hijo o hija, solicita orientación individual.</p></div></div></section>
    </>
  );
}
