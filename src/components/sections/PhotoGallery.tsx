"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ImageIcon, X } from "lucide-react";
import type { GalleryImage } from "@/content/gallery";

export default function PhotoGallery({ images }: { images: GalleryImage[] }) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);

  const counts = useMemo(
    () => ({
      all: images.length,
      celebraciones: images.filter((img) => img.category === "Celebraciones").length,
      vascongados: images.filter((img) => img.campusId === "vascongados").length,
      gambino: images.filter((img) => img.campusId === "gambino").length,
    }),
    [images],
  );

  const filterTabs = useMemo(
    () =>
      [
        { id: "all", label: "Todas las fotos", count: counts.all },
        { id: "celebraciones", label: "🎉 Celebraciones y Vida Escolar", count: counts.celebraciones },
        { id: "vascongados", label: "🏫 Sede Vascongados", count: counts.vascongados },
        { id: "gambino", label: "🏫 Sede Gambino", count: counts.gambino },
      ].filter((tab) => tab.count > 0),
    [counts],
  );

  const filteredImages = useMemo(() => {
    if (activeFilter === "celebraciones") {
      return images.filter((img) => img.category === "Celebraciones");
    }
    if (activeFilter === "vascongados") {
      return images.filter((img) => img.campusId === "vascongados");
    }
    if (activeFilter === "gambino") {
      return images.filter((img) => img.campusId === "gambino");
    }
    return images;
  }, [activeFilter, images]);

  const selected = selectedIndex === null ? null : filteredImages[selectedIndex];

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    setSelectedIndex(null);
  };

  const close = useCallback(() => {
    setSelectedIndex(null);
    requestAnimationFrame(() => openerRef.current?.focus());
  }, []);

  const showPrevious = useCallback(
    () =>
      setSelectedIndex((index) =>
        index === null ? null : (index - 1 + filteredImages.length) % filteredImages.length,
      ),
    [filteredImages.length],
  );
  const showNext = useCallback(
    () =>
      setSelectedIndex((index) =>
        index === null ? null : (index + 1) % filteredImages.length,
      ),
    [filteredImages.length],
  );

  useEffect(() => {
    if (selectedIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft" && filteredImages.length > 1) showPrevious();
      if (event.key === "ArrowRight" && filteredImages.length > 1) showNext();
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
  }, [close, filteredImages.length, selectedIndex, showNext, showPrevious]);

  if (images.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-primary/25 bg-surface-sunk p-8 text-center">
        <ImageIcon
          className="mx-auto h-8 w-8 text-primary"
          aria-hidden="true"
        />
        <p className="mt-3 font-display text-xl font-extrabold text-ink">
          Galería preparada para nuevas fotografías
        </p>
        <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted">
          Las imágenes se publicarán cuando la escuela disponga de fotografías
          autorizadas de actividades y espacios.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Selector interactivo de categorías */}
      {filterTabs.length > 1 && (
        <div className="mb-8 flex flex-wrap items-center gap-2">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleFilterChange(tab.id)}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                  isActive
                    ? "bg-primary text-white shadow-sm ring-2 ring-primary/20"
                    : "border border-border bg-surface text-ink hover:border-primary/40 hover:bg-surface-sunk"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-surface-sunk text-muted"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredImages.map((image, index) => (
          <button
            key={image.id}
            ref={(element) => {
              if (selectedIndex === index && element)
                openerRef.current = element;
            }}
            type="button"
            onClick={(event) => {
              openerRef.current = event.currentTarget;
              setSelectedIndex(index);
            }}
            className="group overflow-hidden rounded-2xl border border-border bg-surface text-left shadow-xs transition-[transform,box-shadow,border-color] hover:-translate-y-1 hover:border-primary/40 hover:shadow-md cursor-pointer"
            aria-label={`Ampliar fotografía: ${image.title}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-surface-sunk">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute top-2.5 right-2.5 rounded-full bg-primary-dark/80 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-xs">
                Foto real
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                    image.category === "Celebraciones"
                      ? "bg-amber-100 text-amber-900 border border-amber-200"
                      : image.campusId === "vascongados"
                      ? "bg-blue-100 text-blue-900 border border-blue-200"
                      : image.campusId === "gambino"
                      ? "bg-emerald-100 text-emerald-900 border border-emerald-200"
                      : "bg-surface-sunk text-primary border border-border"
                  }`}
                >
                  {image.category === "Celebraciones"
                    ? "Celebración"
                    : image.campusId === "vascongados"
                    ? "Sede Vascongados"
                    : image.campusId === "gambino"
                    ? "Sede Gambino"
                    : image.category}
                </span>
              </div>
              <p className="mt-2 font-display text-base font-extrabold text-ink sm:text-lg leading-snug">
                {image.title}
              </p>
            </div>
          </button>
        ))}
      </div>


      {selected && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-primary-dark/95 p-3 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Fotografía ampliada: ${selected.title}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <div
            ref={dialogRef}
            className="relative flex h-full w-full max-w-6xl flex-col"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              className="ml-auto mb-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface text-primary-dark"
              aria-label="Cerrar galería"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="relative min-h-0 flex-1 overflow-hidden rounded-2xl bg-black/25">
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
                <p className="text-sm font-semibold text-white/80">
                  {selected.category}
                </p>
              </div>
              {filteredImages.length > 1 && (
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={showPrevious}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/35 bg-white/10"
                    aria-label="Fotografía anterior"
                  >
                    <ChevronLeft aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/35 bg-white/10"
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
