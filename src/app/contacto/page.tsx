import type { Metadata } from "next";
import ContactoClient from "@/components/sections/ContactoClient";
import JsonLd from "@/components/seo/JsonLd";
import { buildBreadcrumbsJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto y Agendamiento de Evaluación Fonoaudiológica",
  description:
    "Contáctanos para consultar cupos y agendar una evaluación fonoaudiológica gratuita para tu hijo(a) en Escuela de Lenguaje Ruth, Conchalí.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto y Evaluación Gratuita | Escuela de Lenguaje Ruth",
    description:
      "Consulta cupos 2027 y agenda evaluación fonoaudiológica sin costo en Conchalí. Atención de Medio Mayor a Kínder.",
    url: "/contacto",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contacto Escuela de Lenguaje Ruth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto y Evaluación Gratuita | Escuela de Lenguaje Ruth",
    description:
      "Consulta cupos 2027 y agenda evaluación fonoaudiológica gratuita en Conchalí.",
    images: ["/og-image.jpg"],
  },
};

export default function ContactoPage() {
  const breadcrumbsJsonLd = buildBreadcrumbsJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Contacto", url: "/contacto" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbsJsonLd} />
      <ContactoClient />
    </>
  );
}
