"use client";

import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const totalScroll =
            document.documentElement.scrollTop || document.body.scrollTop;
          const windowHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
          if (windowHeight > 0) {
            const progress = (totalScroll / windowHeight) * 100;
            setScrollProgress(Math.min(100, Math.max(0, progress)));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="relative h-full bg-gradient-to-r from-primary via-action to-action-hover transition-[width] duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      >
        {/* Punto de brillo en la punta del indicador */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-action shadow-[0_0_10px_2px_rgba(250,204,21,0.85)]" />
      </div>
    </div>
  );
}
