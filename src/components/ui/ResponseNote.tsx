import { Clock } from "lucide-react";

type ResponseNoteProps = {
  /** `dark` para fondos oscuros (hero, cierre); `light` para secciones claras. */
  tone?: "dark" | "light";
  /** Centra el texto cuando el bloque de CTA también está centrado. */
  align?: "start" | "center";
  className?: string;
};

/**
 * Quién responde y cuándo, junto a la llamada a la acción.
 *
 * Todos los CTA del sitio abren WhatsApp sin decir quién está al otro lado ni
 * en qué horario. Una familia que escribe a las 21:00 y no recibe respuesta esa
 * noche asume que la ignoraron, y esa consulta no vuelve. La nota usa el
 * horario publicado en `siteConfig.contact.hours` y se limita a ese hecho: no
 * promete un tiempo de respuesta que la escuela no haya comprometido.
 */
export default function ResponseNote({
  tone = "light",
  align = "start",
  className = "",
}: ResponseNoteProps) {
  const toneClasses =
    tone === "dark"
      ? "text-white/75"
      : "text-muted";

  const alignClasses =
    align === "center" ? "justify-center text-center" : "justify-start";

  return (
    <p
      className={`mt-4 flex items-start gap-2 text-xs leading-relaxed sm:text-sm ${toneClasses} ${alignClasses} ${className}`}
    >
      <Clock
        className="mt-0.5 h-4 w-4 shrink-0"
        aria-hidden="true"
      />
      <span>
        Te responde el equipo de la escuela en horario de atención: lunes a
        viernes, de 08:15 a 17:15 hrs. Si escribes fuera de ese horario, leeremos
        tu mensaje al volver.
      </span>
    </p>
  );
}
