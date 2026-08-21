"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/site";

const whatsappUrl = createWhatsAppUrl({ source: "floating" });

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 420);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp para consultar disponibilidad 2027"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={`fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md shadow-black/20 transition-[opacity,transform,background-color] duration-200 hover:bg-[#1ebe5d] sm:bottom-6 sm:right-6 ${
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  );
}
