import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos de Uso",
  description: "Condiciones generales de uso del sitio web oficial de Escuela de Lenguaje Ruth.",
  alternates: {
    canonical: "/terminos",
  },
  openGraph: {
    title: "Términos de Uso | Escuela de Lenguaje Ruth",
    description: "Condiciones generales de uso del sitio web oficial de Escuela de Lenguaje Ruth.",
    url: "/terminos",
    images: ["/hero-children.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Términos de Uso | Escuela de Lenguaje Ruth",
    description: "Condiciones generales de uso del sitio web oficial de Escuela de Lenguaje Ruth.",
    images: ["/hero-children.jpg"],
  },
};

export default function TerminosPage() {
  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block px-4 py-2 rounded-full bg-accent text-primary-dark font-black uppercase tracking-widest text-xs mb-6">
          Información legal
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-foreground tracking-tight mb-8">
          Términos de Uso
        </h1>
        <div className="prose prose-lg max-w-none text-foreground/75 font-semibold leading-relaxed space-y-6">
          <p>
            Este sitio entrega información institucional, de admisión y contacto de {siteConfig.name}. Los contenidos pueden actualizarse para reflejar cambios en cupos, horarios, requisitos o procesos internos.
          </p>
          <p>
            La información publicada no reemplaza la orientación directa del equipo de la escuela. Para confirmar cupos, fechas de evaluación o documentos requeridos, comunícate por los canales oficiales.
          </p>
          <p>
            Los enlaces externos, como Google Maps, WhatsApp o Instagram, funcionan bajo las políticas de sus respectivas plataformas.
          </p>
        </div>
        <Link
          href="/matriculas-2027-conchali"
          className="mt-10 inline-flex items-center px-7 py-4 rounded-2xl bg-primary text-white font-black hover:bg-primary-dark transition-colors"
        >
          Ver matrículas 2027
          <ArrowRight className="ml-3 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
