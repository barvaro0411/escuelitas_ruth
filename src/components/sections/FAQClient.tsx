"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle, Sparkles } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/site";

export type FAQCategory = {
  category: string;
  bg: string;
  color: string;
  questions: Array<{
    q: string;
    a: string;
  }>;
};

type FAQClientProps = {
  faqs: FAQCategory[];
};

const faqWhatsAppUrl = buildWhatsAppUrl(
  "Hola, tengo una pregunta sobre matrículas 2027 en la Escuela de Lenguaje Ruth."
);

export default function FAQClient({ faqs }: FAQClientProps) {
  const [activeIndices, setActiveIndices] = useState<Record<string, number | null>>({});

  const toggleAccordion = (category: string, index: number) => {
    setActiveIndices((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };

  return (
    <div className="pt-32 pb-24 overflow-hidden relative">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pastel-yellow rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pastel-blue rounded-full blur-[100px] opacity-20 translate-y-1/3 -translate-x-1/3 pointer-events-none" />
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 animate-fade-up">
          <span className="inline-block px-5 py-2 rounded-full bg-accent text-primary-dark font-black uppercase tracking-widest mb-6 shadow-sm">
            Tus Dudas Resueltas
          </span>
          <h1 className="text-5xl sm:text-7xl font-black text-foreground mb-6 tracking-tighter">
            Preguntas <br />
            <span className="text-primary">Frecuentes.</span>
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed font-semibold">
            Encuentra respuestas rápidas a las dudas más comunes de nuestros apoderados sobre TEL, gratuidad y matrículas.
          </p>
        </div>

        <div className="space-y-16">
          {faqs.map((cat, catIdx) => (
            <div key={cat.category} className="animate-fade-up" style={{ animationDelay: `${catIdx * 100}ms` }}>
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-4 h-8 rounded-full ${cat.bg}`} />
                <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                  {cat.category}
                </h2>
              </div>
              <div className="space-y-4">
                {cat.questions.map((faq, idx) => (
                  <div
                    key={idx}
                    className={`bg-white rounded-[2rem] border border-border/50 overflow-hidden shadow-lg transition-all duration-300 ${
                      activeIndices[cat.category] === idx ? `ring-4 ring-primary/20 scale-[1.02]` : `hover:shadow-xl hover:-translate-y-1`
                    }`}
                  >
                    <button
                      id={`faq-button-${catIdx}-${idx}`}
                      type="button"
                      className="w-full flex items-center justify-between p-6 sm:p-8 text-left font-black text-foreground transition-colors group"
                      onClick={() => toggleAccordion(cat.category, idx)}
                      aria-expanded={activeIndices[cat.category] === idx}
                      aria-controls={`faq-panel-${catIdx}-${idx}`}
                    >
                      <span className="text-xl sm:text-2xl tracking-tight leading-tight group-hover:text-primary transition-colors pr-4">{faq.q}</span>
                      <div className={`shrink-0 transition-transform duration-500 bg-accent text-primary-dark p-2 rounded-full ${activeIndices[cat.category] === idx ? `${cat.bg} ${cat.bg === 'bg-secondary' ? 'text-primary-dark' : 'text-white'} rotate-180` : ""}`}>
                        <ChevronDown size={24} strokeWidth={3} />
                      </div>
                    </button>
                    <div
                      id={`faq-panel-${catIdx}-${idx}`}
                      role="region"
                      aria-labelledby={`faq-button-${catIdx}-${idx}`}
                      aria-hidden={activeIndices[cat.category] !== idx}
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        activeIndices[cat.category] === idx ? "max-h-[500px] opacity-100 pb-8 px-6 sm:px-8" : "max-h-0 opacity-0 px-6 sm:px-8"
                      }`}
                    >
                      <div className={`pl-6 border-l-4 border-primary/20`}>
                        <p className="text-lg text-foreground/70 leading-relaxed font-semibold">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="mt-32 bg-primary-dark rounded-[4rem] p-12 lg:p-20 text-center text-white shadow-2xl relative overflow-hidden animate-fade-up">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-primary-dark mb-8 shadow-xl animate-bounce-slow">
              <Sparkles size={40} />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black mb-6 tracking-tighter">¿Tienes otra pregunta?</h2>
            <p className="text-xl leading-relaxed font-semibold opacity-90 mb-10 max-w-2xl mx-auto">
              Nuestro equipo está disponible para responder cualquier duda adicional que puedas tener sobre nuestra escuela o el desarrollo de tu hijo(a).
            </p>
            <a
              href={faqWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-secondary text-primary-dark font-black uppercase tracking-widest text-lg rounded-full hover:bg-secondary-light hover:scale-105 transition-all shadow-xl shadow-secondary/30"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Chatear por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
