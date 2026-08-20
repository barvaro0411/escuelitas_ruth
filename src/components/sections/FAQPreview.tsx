"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

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
    <section className="border-b border-border bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">Preguntas frecuentes</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
            Respuestas antes de comenzar
          </h2>
          <p className="mt-4 max-w-xl text-base font-semibold leading-relaxed text-muted">
            Revisa las dudas principales de nuestros apoderados y contáctanos si necesitas orientación para tu caso.
          </p>
          <Link href="/preguntas-frecuentes" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-primary hover:text-primary-dark">
            Ver todas las preguntas
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-preview-button-${index}`;
            const panelId = `faq-preview-panel-${index}`;

            return (
              <article key={faq.question} className={`overflow-hidden rounded-xl border bg-white transition-colors ${isOpen ? "border-primary" : "border-border"}`}>
                <button
                  id={buttonId}
                  type="button"
                  className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-extrabold text-foreground hover:bg-surface-blue/30 sm:px-6"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
                <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen} className="border-t border-border bg-surface-blue/25 px-5 py-4 sm:px-6">
                  <p className="text-sm font-semibold leading-relaxed text-muted sm:text-base">{faq.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
