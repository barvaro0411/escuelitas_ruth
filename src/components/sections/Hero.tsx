import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
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
    <section className="fiestas-hero relative isolate flex min-h-[700px] items-center overflow-hidden bg-primary-dark pb-16 pt-32 sm:min-h-[720px] sm:pt-36 lg:min-h-[730px] lg:pb-20">
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

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8">
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
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-action px-6 py-4 text-center text-base font-extrabold text-primary-dark transition-colors hover:bg-action-hover focus-visible:ring-4 focus-visible:ring-white sm:px-7"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Consultar disponibilidad
            </a>

            <Link
              href="/matriculas-2027-conchali"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/55 bg-white/5 px-6 py-4 text-center text-base font-semibold text-white transition-colors hover:bg-white/15 focus-visible:ring-4 focus-visible:ring-white sm:px-7"
            >
              Ver sedes y requisitos
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-6 flex flex-col gap-2 text-sm font-semibold text-white/80 sm:flex-row sm:items-center sm:gap-5">
            <span className="inline-flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-accent-on-dark" aria-hidden="true" />
              Mañana 08:15–12:15 · Tarde 13:30–17:15
            </span>
            <span
              className="hidden h-1 w-1 rounded-full bg-white/50 sm:block"
              aria-hidden="true"
            />
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent-on-dark" aria-hidden="true" />
              Dos sedes en Conchalí
            </span>
          </div>
        </div>

        <aside
          className="hidden lg:block"
          aria-label="Información institucional"
        >
          <div className="rounded-2xl border border-white/35 bg-surface p-8">
            <p className="mb-2 text-sm font-extrabold uppercase tracking-[0.16em] text-primary">
              Información para tu familia
            </p>
            <h2 className="mb-6 font-display font-extrabold leading-tight text-ink text-3xl sm:text-4xl">
              Claridad desde el primer contacto
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3 border-b border-border pb-4">
                <ShieldCheck
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-extrabold text-ink">
                    Escuela particular subvencionada
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    Educación sin cobro de matrícula ni mensualidad para las
                    familias.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 border-b border-border pb-4">
                <MessageCircle
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-extrabold text-ink">Orientación directa</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    Te explicamos edad, evaluación, jornada y próximos pasos por
                    WhatsApp.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-extrabold text-ink">
                    Dos sedes en Conchalí
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    Vascongados 4314 y Gral. Gambino 4613.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/matriculas-2027-conchali"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark"
            >
              Conocer el proceso de admisión
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
