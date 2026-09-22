"use client";

import { ChevronDown } from "lucide-react";

type FaqItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  /** Debe ser único en toda la página: hay acordeones en portada y en /preguntas-frecuentes. */
  idPrefix: string;
};

/**
 * Pregunta desplegable del acordeón de dudas frecuentes.
 *
 * Antes el panel usaba `hidden`, que aparece y desaparece de golpe: la
 * respuesta saltaba a pantalla sin que el ojo alcanzara a seguir de dónde
 * salió. Aquí la altura se anima con `grid-template-rows` de `0fr` a `1fr`,
 * que es la única forma de transicionar hasta una altura desconocida sin fijar
 * un máximo arbitrario que recorte las respuestas largas.
 *
 * Cerrado, el panel sigue en el DOM, así que se marca `inert` para sacarlo del
 * árbol de accesibilidad y del orden de tabulación: sin eso, un lector de
 * pantalla leería las tres respuestas seguidas como si estuvieran abiertas.
 *
 * Las transiciones se anulan solas con `prefers-reduced-motion`, por la regla
 * global de `globals.css`.
 */
export default function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
  idPrefix,
}: FaqItemProps) {
  const buttonId = `${idPrefix}-button`;
  const panelId = `${idPrefix}-panel`;

  return (
    <article
      className={`group relative overflow-hidden rounded-xl border bg-surface transition-[border-color,box-shadow] duration-300 ${
        isOpen
          ? "border-primary shadow-md shadow-primary/10"
          : "border-border hover:border-primary/45 hover:shadow-sm"
      }`}
    >
      {/* Filete ámbar de la pregunta abierta: con tres tarjetas idénticas, el
          borde azul solo no basta para decir cuál se está leyendo. */}
      <span
        aria-hidden="true"
        className={`absolute inset-y-0 left-0 w-1 origin-top bg-action transition-transform duration-300 ease-out ${
          isOpen ? "scale-y-100" : "scale-y-0"
        }`}
      />

      <button
        id={buttonId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left text-base font-extrabold text-ink transition-colors hover:bg-surface-sunk focus-visible:ring-4 focus-visible:ring-primary/25 sm:px-6"
      >
        <span className="transition-colors duration-200 group-hover:text-primary">
          {question}
        </span>

        {/* El chevron suelto rotando se perdía contra el texto. En una pastilla
            que se rellena al abrir, el estado se lee de una pasada. */}
        <span
          aria-hidden="true"
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ease-out ${
            isOpen
              ? "rotate-180 bg-primary text-white"
              : "rotate-0 bg-surface-sunk text-primary group-hover:bg-primary/12"
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>

      <div
        inert={!isOpen}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            className="border-t border-border bg-surface-sunk px-5 py-4 sm:px-6"
          >
            {/* La respuesta entra un instante después de que se abre el hueco,
                para que no aparezca ya escrita al final del recorrido. */}
            <p
              className={`text-sm leading-relaxed text-muted transition-all duration-300 ease-out sm:text-base ${
                isOpen
                  ? "translate-y-0 opacity-100 delay-100"
                  : "-translate-y-1 opacity-0"
              }`}
            >
              {answer}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
