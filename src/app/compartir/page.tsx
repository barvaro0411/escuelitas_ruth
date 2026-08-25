import type { Metadata } from "next";
import { CheckCircle2, MapPin, MessageCircle, Share2 } from "lucide-react";
import { buildWhatsAppUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Comparte las matrículas 2027",
  description:
    "Consulta cupos 2027 en Escuela de Lenguaje Ruth, Conchalí. Educación gratuita y evaluación fonoaudiológica sin costo para niños de 3 a 5 años 11 meses con TEL.",
  alternates: {
    canonical: "/compartir",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Consulta cupos 2027 — Escuela de Lenguaje Ruth",
    description:
      "Escuela gratuita en Conchalí para niños con TEL. Evaluación sin costo. Comparte con familias que lo necesiten.",
    url: "/compartir",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consulta cupos 2027 — Escuela de Lenguaje Ruth",
    description:
      "Escuela gratuita en Conchalí para niños con TEL. Evaluación sin costo.",
    images: ["/og-image.jpg"],
  },
};

const whatsappUrl = buildWhatsAppUrl(
  "Hola, me compartieron información sobre Escuela de Lenguaje Ruth y quiero consultar un cupo 2027.",
);

const pills = [
  { icon: CheckCircle2, label: "Sin matrícula" },
  { icon: CheckCircle2, label: "Evaluación gratis" },
  { icon: CheckCircle2, label: "Medio Mayor a Kínder" },
];

export default function CompartirPage() {
  return (
    <div className="min-h-screen bg-primary-dark flex items-center justify-center px-4 py-12 pt-28">
      {/* Card */}
      <div className="w-full max-w-sm mx-auto flex flex-col items-center text-center gap-7">
        {/* Logo / Brand mark */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center ring-4 ring-white/10">
            <span className="text-primary-dark font-extrabold text-3xl leading-none select-none">
              R
            </span>
          </div>
          <p className="text-white/80 font-semibold text-sm tracking-wide uppercase">
            {siteConfig.name}
          </p>
        </div>

        {/* Main heading */}
        <div className="flex flex-col gap-3">
          <h1 className="font-extrabold text-white leading-[0.95] tracking-tight text-4xl sm:text-5xl">
            Consulta&nbsp;cupos&nbsp;2027{" "}
            <span className="text-accent-on-dark">hoy</span>
          </h1>
          <p className="text-white/80 font-semibold text-lg leading-snug">
            Escuela de Lenguaje Ruth · Conchalí · Gratuita
          </p>
        </div>

        {/* Benefit pills */}
        <div className="flex flex-col gap-2.5 w-full">
          {pills.map((pill) => (
            <div
              key={pill.label}
              className="w-full px-5 py-3 rounded-2xl bg-white/10 border border-white/15 text-white font-extrabold text-base tracking-wide backdrop-blur-sm flex items-center gap-3"
            >
              <pill.icon className="h-5 w-5 shrink-0 text-accent-on-dark" />
              {pill.label}
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-3 px-6 py-5 rounded-2xl bg-accent text-white font-extrabold text-xl hover:scale-[1.03] active:scale-95 transition-transform"
        >
          <MessageCircle className="h-6 w-6 shrink-0" />
          Consultar cupo ahora
        </a>

        {/* Divider */}
        <div className="w-full h-px bg-white/10" />

        {/* Address */}
        <div className="flex items-center gap-2 text-white/80 font-semibold text-sm">
          <MapPin className="h-4 w-4 text-accent-on-dark shrink-0" />
          <span>
            2 sedes en Conchalí: Vascongados 4314 · Gral. Gambino 4613
          </span>
        </div>

        {/* Share note */}
        <div className="flex items-start gap-2.5 px-5 py-4 rounded-2xl bg-white/8 border border-white/10 text-white/60 text-sm leading-relaxed text-left">
          <Share2 className="h-4 w-4 shrink-0 mt-0.5 text-accent-on-dark/70" />
          <span>
            Comparte este link con otras familias que puedan necesitarlo.
          </span>
        </div>
      </div>
    </div>
  );
}
