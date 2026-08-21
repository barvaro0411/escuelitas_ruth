"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/site";

type SeasonalMessage = {
  eyebrow: string;
  title: string;
  description: string;
};

const pageMessages: Record<string, SeasonalMessage> = {
  "/nosotros": {
    eyebrow: "Septiembre junto al equipo",
    title: "Conoce a quienes acompañarán cada pequeño gran paso",
    description: "Mientras celebramos nuestras tradiciones, mantenemos el mismo compromiso: una orientación cercana para tu familia.",
  },
  "/programa-educativo": {
    eyebrow: "Aprender también es celebrar",
    title: "Juego, lenguaje y tradiciones que se viven en comunidad",
    description: "Este septiembre cada experiencia educativa se llena de música, expresión y oportunidades para comunicarse.",
  },
  "/vida-escolar": {
    eyebrow: "Vida escolar en septiembre",
    title: "Tradiciones que se aprenden jugando",
    description: "Conoce el ambiente cercano y alegre que queremos compartir con cada niño y niña de Escuelitas Ruth.",
  },
  "/trastorno-especifico-lenguaje": {
    eyebrow: "Orientación para tu familia",
    title: "Este septiembre, da el primer paso con tranquilidad",
    description: "Si tienes dudas sobre lenguaje o evaluación, nuestro equipo puede orientarte de forma clara y sin costo.",
  },
  "/admision": {
    eyebrow: "Matrículas 2027",
    title: "Que septiembre también sea el comienzo de un nuevo camino",
    description: "Consulta requisitos, sede y evaluación para avanzar acompañado desde la primera conversación.",
  },
  "/contacto": {
    eyebrow: "Conversemos este septiembre",
    title: "Estamos listos para orientar a tu familia",
    description: "Escríbenos para resolver dudas sobre cupos, edades, sedes y evaluación fonoaudiológica.",
  },
  "/preguntas-frecuentes": {
    eyebrow: "¿Aún tienes dudas?",
    title: "Después de la cueca, conversemos sobre el próximo paso",
    description: "Nuestro equipo responde tus preguntas de matrícula y evaluación por WhatsApp de manera directa.",
  },
};

function getPageMessage(pathname: string): SeasonalMessage {
  if (pathname.startsWith("/matriculas-2027")) {
    return {
      eyebrow: "Fiestas Patrias y matrículas 2027",
      title: "Celebremos un septiembre con más oportunidades",
      description: "Revisa la sede que te acomoda y consulta directamente por cupos, requisitos y evaluación sin costo.",
    };
  }

  return pageMessages[pathname] ?? {
    eyebrow: "Septiembre en Escuelitas Ruth",
    title: "Una celebración llena de aprendizaje y nuevas oportunidades",
    description: "Si estás buscando apoyo de lenguaje para tu hijo o hija, conversemos sobre cupos y evaluación.",
  };
}

export default function FiestasPatriasPageCta() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const message = getPageMessage(pathname);
  const whatsAppUrl = createWhatsAppUrl({ source: "seasonal" });

  return (
    <div className="fiestas-only">
      <section aria-label="Orientación de matrícula en septiembre" className="relative overflow-hidden border-t border-[#d8c39d] bg-[#fffaf0] py-12 sm:py-14">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#b4232e] via-white to-primary" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-8 top-5 h-28 w-28 rotate-12 rounded-[2rem] border-[14px] border-[#b4232e]/10" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-5 bottom-0 h-20 w-20 rotate-45 border-[12px] border-primary/10" aria-hidden="true" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#9f1d29]">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              {message.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-2xl font-extrabold leading-tight text-foreground sm:text-3xl">
              {message.title}
            </h2>
            <p className="mt-2 text-sm font-semibold leading-relaxed text-muted sm:text-base">
              {message.description}
            </p>
          </div>

          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir WhatsApp para consultar cupos y evaluación"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#b4232e] px-5 py-3 text-sm font-extrabold text-white shadow-sm transition-colors hover:bg-[#961c27]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Consultar cupos 2027
            </a>
            <Link
              href="/matriculas-2027-conchali"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-primary/25 bg-white px-5 py-3 text-sm font-extrabold text-primary transition-colors hover:border-primary hover:bg-primary/5"
            >
              Ver requisitos
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
