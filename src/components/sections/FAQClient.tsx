"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
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
          {faqs.map((category) => (
            <section
              key={category.category}
              aria-labelledby={`faq-category-${category.category}`}
            >
              <h2
                id={`faq-category-${category.category}`}
                className="mb-4 font-display font-extrabold text-ink text-3xl sm:text-4xl"
              >
                {category.category}
              </h2>
              <div className="space-y-3">
                {category.questions.map((faq, index) => {
                  const isOpen = activeIndices[category.category] === index;
                  const buttonId = `faq-button-${category.category}-${index}`;
                  const panelId = `faq-panel-${category.category}-${index}`;

                  return (
                    <article
                      key={faq.q}
                      className={`overflow-hidden rounded-xl border bg-surface transition-colors ${isOpen ? "border-primary" : "border-border"}`}
                    >
                      <button
                        id={buttonId}
                        type="button"
                        className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-extrabold text-ink hover:bg-surface-sunk sm:px-6"
                        onClick={() =>
                          toggleAccordion(category.category, index)
                        }
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`h-5 w-5 shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        />
                      </button>
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        hidden={!isOpen}
                        className="border-t border-border bg-surface-sunk px-5 py-4 sm:px-6"
                      >
                        <p className="text-sm leading-relaxed text-muted sm:text-base">
                          {faq.a}
                        </p>
                      </div>
                    </article>
                  );
                })}
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
