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
      "La escuela es 100% gratuita para las familias. No se cobra matrícula, mensualidades ni materiales de estudio, ya que cuenta con subvención estatal.",
  },
];

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-b border-border bg-gradient-to-b from-white to-[#fffdf5] py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
        {/* Encabezado */}
        <div className="lg:pt-2">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-brand-yellow-dark">
            Preguntas frecuentes
          </p>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-foreground sm:text-5xl leading-tight font-display">
            Respuestas antes de comenzar
          </h2>
          <p className="mb-8 text-base font-semibold leading-relaxed text-foreground/65">
            Revisa las dudas principales de nuestros apoderados y contáctanos si necesitas orientación para tu caso particular.
          </p>
          <Link
            href="/preguntas-frecuentes"
            className="inline-flex items-center gap-1.5 text-sm font-black text-primary transition-all hover:text-primary-dark group"
          >
            Ver todas las preguntas
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Acordeón */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-preview-button-${index}`;
            const panelId = `faq-preview-panel-${index}`;

            return (
              <article
                key={faq.question}
                className={`overflow-hidden rounded-[2rem] border-2 bg-white transition-all duration-300 card-hover ${
                  isOpen ? "border-primary shadow-xl shadow-primary/5" : "border-border/60"
                }`}
              >
                <button
                  id={buttonId}
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5.5 text-left font-black text-lg text-foreground transition-colors hover:bg-surface-blue/30 sm:px-8"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="tracking-tight leading-snug">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="border-t border-primary/10 bg-surface-blue/20 px-6 py-5 sm:px-8"
                >
                  <p className="text-base font-semibold leading-relaxed text-foreground/70">
                    {faq.answer}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
