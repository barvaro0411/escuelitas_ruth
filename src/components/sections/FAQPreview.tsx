"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FaqItem from "@/components/ui/FaqItem";

const faqs = [
  {
    question: "¿Qué es el TEL?",
    answer:
      "Es una dificultad en el desarrollo del lenguaje que puede afectar la expresión, la comprensión o la construcción de frases en la etapa infantil.",
  },
  {
    question: "¿Qué documentos necesito para matricular?",
    answer:
      "Principalmente el certificado de nacimiento para todo trámite. Si no cuentas con una evaluación fonoaudiológica previa, nosotros te orientamos y la realizamos en la escuela sin costo.",
  },
  {
    question: "¿Cuál es el costo?",
    answer:
      "La escuela es 100% gratuita para las familias. No se cobra matrícula, mensualidad ni materiales de estudio, ya que cuenta con subvención estatal.",
  },
];

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section data-cta="faq" className="border-b border-border bg-surface py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
        <div data-reveal="left">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Preguntas frecuentes
          </p>
          <h2 className="mt-2 font-display font-extrabold leading-tight text-ink text-3xl sm:text-4xl">
            Respuestas antes de comenzar
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            Revisa las dudas principales de nuestros apoderados y contáctanos si
            necesitas orientación para tu caso.
          </p>
          <Link
            href="/preguntas-frecuentes"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Ver todas las preguntas
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {/* El grupo va en la lista y no en la rejilla de dos columnas: así
            escalona pregunta por pregunta en vez de columna contra columna. */}
        <div className="space-y-3" data-reveal-group>
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              idPrefix={`faq-preview-${index}`}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
