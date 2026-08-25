import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Info, MessageCircle } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { familyResources, getFamilyResource } from "@/content/family-resources";
import {
  buildBreadcrumbsJsonLd,
  createWhatsAppUrl,
  siteConfig,
} from "@/lib/site";

type ResourcePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return familyResources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({
  params,
}: ResourcePageProps): Promise<Metadata> {
  const resource = getFamilyResource((await params).slug);
  if (!resource) return {};
  return {
    title: resource.title,
    description: resource.description,
    alternates: { canonical: `/familias/${resource.slug}` },
    openGraph: {
      title: `${resource.title} | Escuelitas Ruth`,
      description: resource.description,
      url: `/familias/${resource.slug}`,
    },
  };
}

export default async function FamilyResourcePage({
  params,
}: ResourcePageProps) {
  const resource = getFamilyResource((await params).slug);
  if (!resource) notFound();
  const whatsappUrl = createWhatsAppUrl({
    source: "family-resource",
    topic: resource.title,
  });
  const breadcrumbsJsonLd = buildBreadcrumbsJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Familias", url: "/familias" },
    { name: resource.title, url: `/familias/${resource.slug}` },
  ]);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.title,
    description: resource.description,
    mainEntityOfPage: `${siteConfig.url}/familias/${resource.slug}`,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <JsonLd data={breadcrumbsJsonLd} />
      <JsonLd data={articleJsonLd} />
      <article className="bg-surface pb-20 pt-36 sm:pt-40">
        <header className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/familias"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Volver a recursos
          </Link>
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {resource.category} · {resource.readingTime}
          </p>
          <h1 className="mt-3 font-display font-extrabold leading-tight tracking-tight text-ink text-4xl sm:text-5xl">
            {resource.title}
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-muted">
            {resource.intro}
          </p>
        </header>
        <div className="mx-auto mt-12 max-w-3xl space-y-12 px-4 sm:px-6 lg:px-8">
          {resource.sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display font-extrabold text-ink text-3xl sm:text-4xl">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base font-semibold leading-8 text-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.tips && (
                <ul className="mt-5 space-y-2 rounded-2xl bg-surface-sunk p-5">
                  {section.tips.map((tip) => (
                    <li
                      key={tip}
                      className="flex items-start gap-2 text-sm font-semibold text-muted"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      {tip}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <div className="flex items-start gap-3 rounded-2xl border border-primary/15 bg-surface-sunk p-6">
            <Info
              className="mt-0.5 h-5 w-5 shrink-0 text-accent"
              aria-hidden="true"
            />
            <p className="text-sm leading-relaxed text-muted">
              Contenido educativo general. No reemplaza una evaluación ni
              constituye un diagnóstico.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-action px-6 py-4 text-center font-extrabold text-primary-dark hover:bg-action-hover"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Solicitar orientación
          </a>
        </div>
      </article>
    </>
  );
}
