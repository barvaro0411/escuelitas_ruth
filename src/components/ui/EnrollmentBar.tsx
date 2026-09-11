"use client";

import { useEffect, useState } from "react";
import { MessageCircle, PhoneCall } from "lucide-react";
import { createWhatsAppUrl, siteConfig } from "@/lib/site";

const stickyWhatsAppUrl = createWhatsAppUrl({ source: "sticky" });

/**
 * Barra fija de matrícula para móvil y tablet.
 *
 * En móvil la consulta de matrícula quedaba a 8.000 px de scroll: el hero tiene
 * el botón y el cierre también, pero entre ambos no había forma de consultar
 * sin volver arriba. Esta barra acompaña toda la lectura y desaparece cuando el
 * bloque de cierre ya está en pantalla, para no repetir la misma acción dos
 * veces seguidas.
 *
 * En escritorio no se muestra: allí la cabecera fija ya lleva el botón ámbar y
 * está siempre visible.
 */
export default function EnrollmentBar() {
  const [pastHero, setPastHero] = useState(false);
  const [finalCtaVisible, setFinalCtaVisible] = useState(false);
  const [formFocused, setFormFocused] = useState(false);

  useEffect(() => {
    const updateScroll = () => setPastHero(window.scrollY > 420);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    const finalCta = document.getElementById("consulta-final");
    if (!finalCta || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFinalCtaVisible(entry.isIntersecting),
      { threshold: 0.12 },
    );
    observer.observe(finalCta);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Mientras se completa un formulario la barra estorba: con el teclado
    // abierto tapa el botón de enviar y deja la mitad de la pantalla ocupada
    // por una acción que la persona ya decidió no usar.
    const syncFocus = () => {
      const active = document.activeElement;
      setFormFocused(
        active instanceof HTMLElement &&
          active !== document.body &&
          Boolean(active.closest("form")),
      );
    };
    const onFocusOut = () => requestAnimationFrame(syncFocus);

    document.addEventListener("focusin", syncFocus);
    document.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("focusin", syncFocus);
      document.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  const isVisible = pastHero && !finalCtaVisible && !formFocused;

  return (
    <div
      inert={!isVisible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t-2 border-action bg-primary-dark/98 backdrop-blur-md transition-[transform,opacity] duration-300 lg:hidden ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto flex max-w-3xl items-center gap-2.5 px-3 py-2.5">
        {/* A 390 px el ancho es el que manda: el texto se mantiene corto para
            que nunca se recorte a mitad de palabra. */}
        <div className="min-w-0 flex-1">
          <p className="flex items-center gap-1.5 font-display text-[13px] font-extrabold leading-tight text-white">
            <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-action animate-radar-pulse" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-action" />
            </span>
            <span className="truncate">
              Matrícula {siteConfig.admissionYear}
              <span className="hidden min-[430px]:inline"> abierta</span>
            </span>
          </p>
          <p className="mt-0.5 truncate text-[10px] font-semibold uppercase tracking-wide text-white/75">
            Gratuita · Conchalí
          </p>
        </div>

        <a
          href={stickyWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Abrir WhatsApp para consultar cupos ${siteConfig.admissionYear}`}
          className="inline-flex min-h-12 shrink-0 items-center justify-center gap-1.5 rounded-xl bg-action px-3.5 py-3 text-[13px] font-extrabold text-action-ink transition-colors hover:bg-action-hover"
        >
          <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
          <span>Consultar cupos</span>
        </a>

        <a
          href={siteConfig.contact.phone.href}
          aria-label={`Llamar al colegio, ${siteConfig.contact.phone.label}`}
          className="inline-flex h-12 w-11 shrink-0 items-center justify-center rounded-xl border border-white/40 text-white transition-colors hover:bg-white/15"
        >
          <PhoneCall className="h-[18px] w-[18px]" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
