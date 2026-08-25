type JsonLdProps = {
  data: unknown;
};

/**
 * Único punto autorizado para insertar JSON-LD en HTML.
 *
 * Solo debe recibir datos controlados o previamente validados por la aplicación.
 * Escapar"<" impide que una cadena pueda cerrar el elemento <script>; los
 * separadores Unicode se escapan para mantener el resultado seguro y portable.
 */
export default function JsonLd({ data }: JsonLdProps) {
  const serialized = JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serialized }}
      suppressHydrationWarning
    />
  );
}
