"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/site";

const whatsappUrl = buildWhatsAppUrl(
  "Hola, quiero recibir más información sobre las matrículas 2027."
);

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-4 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md shadow-black/20 transition-colors hover:bg-[#1ebe5d] sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
