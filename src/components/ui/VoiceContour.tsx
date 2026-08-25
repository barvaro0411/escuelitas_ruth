type VoiceContourProps = {
  /**
   * `signature` firma el titular del hero; `rule` separa dos secciones a lo
   * ancho de la página; `arc` acompaña un resultado y sube hacia la derecha.
   */
  variant?: "signature" | "rule" | "arc";
  className?: string;
};

// Un contorno de voz —el trazo que dibuja una palabra al pronunciarse— es el
// único recurso gráfico del sitio. Se usa con disciplina: firma el titular,
// separa los momentos de la portada y remata el resultado de la calculadora.
// Nunca decora una tarjeta.
const PATHS = {
  // Arranca plano, toma cuerpo y se apaga: una frase corta.
  signature:
    "M0 20 C 18 20, 26 6, 40 6 S 62 34, 78 34 S 100 8, 118 8 S 140 30, 158 30 S 178 16, 196 18 L 240 19",
  // Ondulación baja y continua: una línea de conversación.
  rule: "M0 12 C 30 12, 45 3, 75 3 S 120 21, 150 21 S 195 5, 225 5 S 270 19, 300 19 S 345 7, 375 7 S 420 17, 450 13 L 480 12",
  // Ascendente: la respuesta que se resuelve.
  arc: "M0 34 C 20 34, 30 26, 48 24 S 78 28, 96 20 S 126 18, 144 11 S 174 12, 192 5 L 220 3",
} as const;

const VIEWBOX = {
  signature: "0 0 240 40",
  rule: "0 0 480 24",
  arc: "0 0 220 40",
} as const;

export default function VoiceContour({
  variant = "signature",
  className = "",
}: VoiceContourProps) {
  return (
    <svg
      viewBox={VIEWBOX[variant]}
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d={PATHS[variant]}
        stroke="currentColor"
        strokeWidth={variant === "rule" ? 1.5 : 2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
