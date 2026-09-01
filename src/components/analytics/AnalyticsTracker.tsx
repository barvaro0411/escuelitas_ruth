"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

/**
 * Registra los clics en los canales de contacto como eventos de conversión.
 *
 * El sitio no tiene backend: cada consulta sale hacia WhatsApp, correo o
 * teléfono. Sin esta medición no hay forma de saber qué página o llamada a la
 * acción genera contactos. Se usa un único listener delegado para no tocar cada
 * enlace; en desarrollo `track` no envía nada.
 */
export default function AnalyticsTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest("a");
      const href = anchor?.getAttribute("href");
      if (!href) return;

      const path = window.location.pathname;

      if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        track("whatsapp_click", { path });
      } else if (href.startsWith("mailto:")) {
        track("email_click", { path });
      } else if (href.startsWith("tel:")) {
        track("phone_click", { path });
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () =>
      document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}
