import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import VoiceContour from "@/components/ui/VoiceContour";
import { createWhatsAppUrl } from "@/lib/site";
import ChileanBunting from "@/components/seasonal/ChileanBunting";
import FiestasPatriasDecorations from "@/components/seasonal/FiestasPatriasDecorations";
import FiestasPatriasMode from "@/components/seasonal/FiestasPatriasMode";

const heroWhatsAppUrl = createWhatsAppUrl({ source: "hero" });

const proofPoints = [
  "Evaluación fonoaudiológica sin costo",
  "Educación gratuita, sin matrícula ni mensualidad",
  "Atención de 3 a 5 años 11 meses en Conchalí",
];

export default function Hero() {
  return (
    <section className="fiestas-hero relative isolate flex min-h-[620px] items-center overflow-hidden bg-primary-dark pb-14 pt-28 sm:min-h-[650px] sm:pt-32 lg:pb-16">
      <Image
        src="/hero-kids.jpg"
        alt="Niños aprendiendo en la Escuela de Lenguaje Ruth"
        fill
        sizes="100vw"
        className="object-cover object-[62%_center] lg:object-[70%_center]"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/94 via-primary-dark/86 to-primary-dark/78 lg:bg-gradient-to-r lg:from-primary-dark/94 lg:via-primary-dark/72 lg:to-primary-dark/35" />

      <FiestasPatriasMode>
        <>
          <ChileanBunting className="absolute inset-x-0 top-[6.6rem] z-[2] hidden opacity-90 sm:block" />
          <FiestasPatriasDecorations />
        </>
      </FiestasPatriasMode>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* En móvil basta la marca de temporada: el relato completo vive en
 FiestasPatriasSection, más abajo en la misma página. */}
          <FiestasPatriasMode>
            <div className="mb-5 border-l-2 border-[#efc04f] pl-4 sm:mb-6 sm:pl-5">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 sm:block">
                <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                  Edición septiembre
                </span>
                <p className="font-display text-2xl font-extrabold tracking-tight text-accent-on-dark sm:mt-3 sm:text-4xl">
                  ¡TIKI TIKI TIII!
                </p>
              </div>
              <p className="mt-1 hidden text-base font-extrabold text-white sm:block sm:text-lg">
                En Escuelitas Ruth celebramos Chile
              </p>
              <p className="mt-1 hidden max-w-xl text-sm leading-relaxed text-white/80 sm:block sm:text-base">
                Este septiembre vivimos nuestras tradiciones con juegos, música,
                aprendizaje y mucha alegría. También te orientamos para
                encontrar el cupo y la evaluación que tu hijo o hija necesita.
              </p>
            </div>
          </FiestasPatriasMode>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-action/30 bg-action px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary-dark">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Consulta cupos 2027 en Conchalí
          </div>

          <h1 className="max-w-2xl font-display font-extrabold leading-[1.08] tracking-tight text-white text-4xl sm:text-5xl">
            Acompañamos a tu hijo a descubrir el poder de su{" "}
            <span className="text-accent-on-dark">propia voz</span>
          </h1>

          {/* El contorno de la voz: el único recurso gráfico del sitio. */}
          <VoiceContour
            variant="signature"
            className="-mt-3 mb-7 h-8 w-56 text-accent-on-dark/70 sm:w-72"
          />

          <p className="mb-8 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Educación parvularia y apoyo fonoaudiológico para niños y niñas de 3
            a 5 años 11 meses. Te orientamos desde la primera consulta.
          </p>

          <ul className="mb-8 space-y-3" aria-label="Beneficios principales">
            {proofPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-sm font-semibold text-white sm:text-base"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent-on-dark"
                  aria-hidden="true"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <a
              href={heroWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir WhatsApp para consultar disponibilidad y agendar evaluación"
              className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-action px-6 py-4 text-center text-base font-extrabold text-primary-dark transition-all hover:bg-action-hover focus-visible:ring-4 focus-visible:ring-white sm:px-7 btn-action-glow cursor-pointer"
            >
              <MessageCircle className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
              <span>Consultar disponibilidad</span>
            </a>

            <Link
              href="/matriculas-2027-conchali"
              className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/55 bg-white/5 px-6 py-4 text-center text-base font-semibold text-white transition-all hover:bg-white/15 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:ring-4 focus-visible:ring-white sm:px-7"
            >
              <span>Ver sedes y requisitos</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
