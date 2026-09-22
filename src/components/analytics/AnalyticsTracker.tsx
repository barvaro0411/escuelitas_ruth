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
 *
 * Además del `path`, se registra la zona del CTA (`location`). Hay más de veinte
 * enlaces de contacto repartidos entre portada, landings y cabecera: sin la
 * ubicación no se puede saber cuál genera las consultas y cualquier ajuste
 * posterior sería a ciegas. La zona se declara una vez por componente con
 * `data-cta` en el contenedor, y el listener la busca hacia arriba con
 * `closest`, de modo que añadir un enlace nuevo no exige tocar la medición.
 */
export default function AnalyticsTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const path = window.location.pathname;
      const location = resolveCtaLocation(anchor);

      if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        track("whatsapp_click", { path, location });
      } else if (href.startsWith("mailto:")) {
        track("email_click", { path, location });
      } else if (href.startsWith("tel:")) {
        track("phone_click", { path, location });
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () =>
      document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}

/**
 * Zona del CTA pulsado. Prioriza la declaración explícita `data-cta`; si falta,
 * cae en el `id` de la sección contenedora y por último en la región del
 * documento, para que un enlace sin anotar siga aportando un dato utilizable en
 * lugar de perderse.
 */
function resolveCtaLocation(anchor: HTMLAnchorElement) {
  const declared = anchor.closest<HTMLElement>("[data-cta]")?.dataset.cta;
  if (declared) return declared;

  const sectionId = anchor.closest("section")?.id;
  if (sectionId) return sectionId;

  if (anchor.closest("header")) return "header";
  if (anchor.closest("footer")) return "footer";

  return "sin-atribuir";
}
