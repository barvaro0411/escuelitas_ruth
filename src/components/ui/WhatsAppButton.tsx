"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/site";

const whatsappUrl = createWhatsAppUrl({ source: "floating" });

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const scrolled = window.scrollY > 380;
      setIsVisible(scrolled);
      if (scrolled && !tooltipDismissed) {
        setShowTooltip(true);
      }
    };
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, [tooltipDismissed]);

  return (
    <div
      className={`pointer-events-none fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-40 flex items-center gap-3 transition-[opacity,transform] duration-300 sm:bottom-6 sm:right-6 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0"
      }`}
    >
      {/* Tooltip en desktop */}
      {showTooltip && !tooltipDismissed && isVisible && (
        <div className="pointer-events-auto hidden sm:flex items-center gap-2 rounded-2xl border border-emerald-200/60 bg-white/95 px-4 py-2.5 shadow-lg shadow-emerald-950/10 backdrop-blur-md animate-fade-up">
          <span className="text-xs font-extrabold text-ink">
            ¿Consultas de matrícula? Escríbenos
          </span>
          <button
            type="button"
            onClick={() => {
              setShowTooltip(false);
              setTooltipDismissed(true);
            }}
            aria-label="Cerrar aviso de WhatsApp"
            className="text-muted hover:text-ink cursor-pointer p-0.5 rounded-md hover:bg-surface-sunk transition-colors"
          >
            <X size={13} />
          </button>
        </div>
      )}

      {/* Botón flotante con halo de pulso */}
      <div className="relative flex items-center justify-center">
        {isVisible && (
          <span
            className="absolute -inset-1.5 rounded-full bg-[#25D366]/40 animate-radar-pulse pointer-events-none"
            aria-hidden="true"
          />
        )}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir WhatsApp para consultar disponibilidad 2027"
          aria-hidden={!isVisible}
          tabIndex={isVisible ? 0 : -1}
          className={`relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-600/30 transition-all duration-200 hover:scale-105 hover:bg-[#1ebe5d] hover:shadow-xl hover:shadow-emerald-600/40 active:scale-95 ${
            isVisible ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <MessageCircle size={26} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
