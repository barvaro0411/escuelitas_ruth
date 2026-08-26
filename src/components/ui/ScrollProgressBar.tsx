"use client";

import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scrolled = (totalScroll / windowHeight) * 100;
        setScrollProgress(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-1 origin-left bg-transparent pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-primary via-action to-action-hover transition-all duration-75 ease-out shadow-[0_0_8px_rgba(250,204,21,0.6)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
