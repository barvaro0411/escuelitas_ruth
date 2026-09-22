"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import FaqItem from "@/components/ui/FaqItem";
import { createWhatsAppUrl } from "@/lib/site";

export type FAQCategory = {
  category: string;
  bg: string;
  color: string;
  questions: Array<{ q: string; a: string }>;
};

type FAQClientProps = { faqs: FAQCategory[] };

const faqWhatsAppUrl = createWhatsAppUrl({ source: "faq" });

export default function FAQClient({ faqs }: FAQClientProps) {
  const [activeIndices, setActiveIndices] = useState<
    Record<string, number | null>
  >({});

  const toggleAccordion = (category: string, index: number) => {
    setActiveIndices((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };

  return (
    <div className="bg-paper pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Preguntas frecuentes
          </p>
          <h1 className="mt-2 font-display font-extrabold leading-tight text-ink text-4xl sm:text-5xl">
            Respuestas para tu familia
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Encuentra respuestas sobre TEL, gratuidad, edades, sedes y el
            proceso de admisión.
          </p>
        </div>

        <div className="space-y-10">
          {/* El id se arma con el índice y no con el nombre de la categoría:
              "Sobre el TEL" y "Admisión y Costos" llevan espacios, y un id con
              espacios hace que aria-controls se lea como una lista de varios
              ids, de modo que el botón no anuncia el panel que controla. */}
          {faqs.map((category, categoryIndex) => (
            <section
              key={category.category}
              aria-labelledby={`faq-category-${categoryIndex}`}
            >
              <h2
                id={`faq-category-${categoryIndex}`}
                className="mb-4 font-display font-extrabold text-ink text-3xl sm:text-4xl"
              >
                {category.category}
              </h2>
              <div className="space-y-3" data-reveal-group>
                {category.questions.map((faq, index) => (
                  <FaqItem
                    key={faq.q}
                    idPrefix={`faq-${categoryIndex}-${index}`}
                    question={faq.q}
                    answer={faq.a}
                    isOpen={activeIndices[category.category] === index}
                    onToggle={() => toggleAccordion(category.category, index)}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-2xl bg-primary-dark px-6 py-10 text-center sm:px-10">
          <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl">
            ¿Tienes otra pregunta?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
            Escríbenos y te orientamos sobre el nivel, la evaluación y la
            disponibilidad.
          </p>
          <a
            href={faqWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir WhatsApp para hacer una pregunta"
            className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Consultar por WhatsApp
          </a>
        </section>
      </div>
    </div>
  );
}
