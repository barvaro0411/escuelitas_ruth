"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Revelado al hacer scroll con un único IntersectionObserver para toda la
 * página.
 *
 * Antes existían la clase `.reveal-on-scroll` y este observador, pero ninguna
 * sección los usaba: la página bajaba 8.000 px sin un solo movimiento. Ahora el
 * marcado se declara con `data-reveal` (un elemento) o `data-reveal-group`
 * (una rejilla que entra escalonada) y los estilos viven en `globals.css`.
 *
 * El estado inicial oculto depende de `html.js`, que añade el script de
 * arranque en `layout.tsx`. Si el JavaScript no llega, ese script retira la
 * clase y el contenido se muestra completo: nunca queda una sección invisible.
 */
const REVEAL_SELECTOR = "[data-reveal], [data-reveal-group]";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    // Confirma al script de arranque que el revelado ya tiene quien lo active.
    root.setAttribute("data-reveal-ready", "");

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
    );

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, instance) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          // Una sola vez: al volver a subir el contenido no se esconde.
          instance.unobserve(entry.target);
        });
      },
      {
        root: null,
        // Se dispara un poco antes del borde inferior para que la entrada
        // termine cuando el bloque ya está cómodo en pantalla.
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.05,
      },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
