"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostrar cuando se ha scrolleado más de 350px
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Volver arriba"
      className={`fixed bottom-20 right-4 sm:bottom-22 sm:right-6 z-40 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/95 border-2 border-primary/20 text-primary-dark shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110 active:scale-95 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
}
