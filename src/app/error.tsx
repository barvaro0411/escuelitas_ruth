"use client";
import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, Home, MessageCircle, RefreshCw } from "lucide-react";
import { buildWhatsAppUrl, siteConfig } from "@/lib/site";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error en la aplicación:", error);
  }, [error]);

  const whatsAppUrl = buildWhatsAppUrl(
    "Hola, ocurrió un inconveniente técnico al navegar en su sitio web y quisiera consultar información sobre la Escuela de Lenguaje Ruth.",
  );

  return (
    <div className="flex min-h-[75vh] items-center justify-center bg-paper px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
          <AlertTriangle className="h-8 w-8" aria-hidden="true" />
        </div>

        <h1 className="mt-6 font-display text-3xl font-extrabold text-ink sm:text-4xl">
          Algo no salió como esperábamos
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          Ocurrió un inconveniente temporal al cargar esta sección. Puedes
          intentar recargar la página o volver al inicio.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-extrabold text-white transition-colors hover:bg-primary-dark cursor-pointer"
          >
            <RefreshCw className="h-4 w-4" aria-hidden="true" />
            Volver a intentar
          </button>

          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-sm font-extrabold text-ink transition-colors hover:bg-surface-sunk"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            Ir al inicio
          </Link>
        </div>

        <div className="mt-8 border-t border-border/80 pt-6">
          <p className="text-xs text-muted">
            ¿Necesitas contactarnos directamente?
          </p>
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 text-xs font-extrabold text-primary hover:underline"
          >
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            Escríbenos por WhatsApp o llama al {siteConfig.contact.phone.label}
          </a>
        </div>
      </div>
    </div>
  );
}
