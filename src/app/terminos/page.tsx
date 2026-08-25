import { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos de Uso",
  description:
    "Condiciones generales de uso del sitio web oficial de Escuela de Lenguaje Ruth.",
  alternates: {
    canonical: "/terminos",
  },
  openGraph: {
    title: "Términos de Uso | Escuela de Lenguaje Ruth",
    description:
      "Condiciones generales de uso del sitio web oficial de Escuela de Lenguaje Ruth.",
    url: "/terminos",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Términos de Uso | Escuela de Lenguaje Ruth",
    description:
      "Condiciones generales de uso del sitio web oficial de Escuela de Lenguaje Ruth.",
    images: ["/og-image.jpg"],
  },
};

export default function TerminosPage() {
  return (
    <>
      <PageHero
        variant="light"
        eyebrow="Información legal"
        eyebrowIcon={FileText}
        title="Términos de Uso"
      />

      <div className="py-16 sm:py-20 bg-paper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-muted leading-relaxed space-y-6">
            <p>
              <strong>Última actualización:</strong> 24 de agosto de 2026.
            </p>
            <p>
              Este sitio entrega información institucional, de admisión y
              contacto de {siteConfig.name}. Los contenidos pueden actualizarse
              para reflejar cambios en cupos, horarios, requisitos o procesos
              internos.
            </p>
            <p>
              La información publicada no reemplaza la orientación directa del
              equipo de la escuela. Para confirmar cupos, fechas de evaluación o
              documentos requeridos, comunícate por los canales oficiales.
            </p>
            <p>
              Los enlaces externos, como Google Maps, WhatsApp o Instagram,
              funcionan bajo las políticas de sus respectivas plataformas.
            </p>
          </div>
          <Link
            href="/matriculas-2027-conchali"
            className="mt-10 inline-flex items-center px-7 py-4 rounded-2xl bg-primary text-white font-extrabold hover:bg-primary-dark transition-colors"
          >
            Ver matrículas 2027
            <ArrowRight className="ml-3 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}
