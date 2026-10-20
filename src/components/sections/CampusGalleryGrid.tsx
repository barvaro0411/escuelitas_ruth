"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import type { CampusGalleryImage } from "@/content/school-data";

export default function CampusGalleryGrid({
  images,
  campusName,
}: {
  images: readonly CampusGalleryImage[];
  campusName: string;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);

  const selected = selectedIndex === null ? null : images[selectedIndex];

  const close = useCallback(() => {
    setSelectedIndex(null);
    requestAnimationFrame(() => openerRef.current?.focus());
  }, []);

  const showPrevious = useCallback(
    () =>
      setSelectedIndex((index) =>
        index === null ? null : (index - 1 + images.length) % images.length,
      ),
    [images.length],
  );

  const showNext = useCallback(
    () =>
      setSelectedIndex((index) =>
        index === null ? null : (index + 1) % images.length,
      ),
    [images.length],
  );

  useEffect(() => {
    if (selectedIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft" && images.length > 1) showPrevious();
      if (event.key === "ArrowRight" && images.length > 1) showNext();
      if (event.key === "Tab" && dialogRef.current) {
        const controls = [
          ...dialogRef.current.querySelectorAll<HTMLElement>(
            "button:not([disabled]), a[href]",
          ),
        ];
        const first = controls[0];
        const last = controls.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [close, images.length, selectedIndex, showNext, showPrevious]);

  if (images.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={(event) => {
              openerRef.current = event.currentTarget;
              setSelectedIndex(index);
            }}
            aria-label={`Ampliar fotografía de ${campusName}: ${image.title}`}
            className="group overflow-hidden rounded-xl border border-border bg-surface text-left transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-sm cursor-pointer"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-surface-sunk">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span
                className="absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-lg bg-primary-dark/80 text-white opacity-85 transition-opacity group-hover:opacity-100"
                aria-hidden="true"
              >
                <Expand className="h-3.5 w-3.5" />
              </span>
            </div>
            <p className="p-2.5 text-xs font-extrabold text-ink group-hover:text-primary transition-colors">
              {image.title}
            </p>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-primary-dark/95 p-3 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${campusName}: ${selected.title}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <div
            ref={dialogRef}
            className="relative flex h-full w-full max-w-5xl flex-col"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              className="ml-auto mb-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface text-primary-dark cursor-pointer hover:bg-action transition-colors"
              aria-label="Cerrar fotografía"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="relative min-h-0 flex-1 overflow-hidden rounded-2xl bg-black/30">
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-3 flex items-center justify-between gap-3 text-white">
              <div>
                <p className="font-display text-lg font-extrabold">
                  {selected.title}
                </p>
                <p className="text-xs font-semibold text-white/80">
                  {campusName} · Foto {(selectedIndex ?? 0) + 1} de{" "}
                  {images.length}
                </p>
              </div>
              {images.length > 1 && (
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={showPrevious}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/35 bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                    aria-label="Fotografía anterior"
                  >
                    <ChevronLeft aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/35 bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                    aria-label="Fotografía siguiente"
                  >
                    <ChevronRight aria-hidden="true" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
