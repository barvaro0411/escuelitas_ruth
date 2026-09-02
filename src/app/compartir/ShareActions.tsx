"use client";

import { useState } from "react";
import { Check, Copy, Share2 } from "lucide-react";
import { toast } from "sonner";
import { siteConfig } from "@/lib/site";

export default function ShareActions() {
  const [shareCopied, setShareCopied] = useState(false);

  const shareUrl = `${siteConfig.url}/compartir`;
  const shareTitle = "Consulta cupos 2027 en Escuela de Lenguaje Ruth";
  const shareText =
    "Escuela de Lenguaje Ruth en Conchalí: Educación 100% gratuita y evaluación fonoaudiológica sin costo para niños de 3 a 5 años con TEL.";


  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
        toast.success("¡Enlace compartido con éxito!");
        return;
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          // si falla, copiamos directo
        }
      }
    }
    handleCopy();
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setShareCopied(true);
      toast.success("Enlace copiado al portapapeles", {
        description: "Ya puedes pegarlo en WhatsApp o redes sociales.",
      });
      setTimeout(() => setShareCopied(false), 2500);
    } catch {
      toast.error("No se pudo copiar el enlace automáticamente.");
    }
  };

  return (
    <div className="flex w-full flex-col gap-2.5">
      <button
        type="button"
        onClick={handleShare}
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-white/10 px-5 py-3 text-sm font-extrabold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95 cursor-pointer"
      >
        <Share2 className="h-4 w-4 shrink-0 text-accent-on-dark" />
        <span>Compartir con un contacto</span>
      </button>

      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-xs font-semibold text-white/80 transition-all hover:bg-white/5 hover:text-white cursor-pointer"
      >
        {shareCopied ? (
          <>
            <Check className="h-3.5 w-3.5 text-emerald-400" />
            <span>¡Copiado!</span>
          </>
        ) : (
          <>
            <Copy className="h-3.5 w-3.5 text-white/60" />
            <span>Copiar enlace directo</span>
          </>
        )}
      </button>
    </div>
  );
}
