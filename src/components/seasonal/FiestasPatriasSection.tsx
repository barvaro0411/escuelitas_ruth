import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Dices,
  Flower2,
  MessageCircle,
  Music2,
  Palette,
  Sparkles,
  Wind,
} from "lucide-react";
import { createWhatsAppUrl } from "@/lib/site";
import ChileanBunting from "./ChileanBunting";

const activities = [
  {
    title: "Cueca",
    description: "Movimiento, ritmo y expresión corporal.",
    icon: Sparkles,
    color: "bg-red-50 text-[#a51f2b]",
  },
  {
    title: "Volantines",
    description: "Color, imaginación y tradición.",
    icon: Wind,
    color: "bg-surface-sunk text-primary",
  },
  {
    title: "Juegos típicos",
    description: "Aprender y compartir jugando.",
    icon: Dices,
    color: "bg-surface-sunk text-accent",
  },
  {
    title: "Actividades artísticas",
    description: "Crear con distintas formas y materiales.",
    icon: Palette,
    color: "bg-surface-sunk text-accent",
  },
  {
    title: "Música chilena",
    description: "Sonidos y canciones de nuestro país.",
    icon: Music2,
    color: "bg-surface-sunk text-accent",
  },
  {
    title: "Nuestras tradiciones",
    description: "Conocer Chile desde la infancia.",
    icon: Flower2,
    color: "bg-primary text-white",
  },
];

const septemberWhatsAppUrl = createWhatsAppUrl({ source: "seasonal" });

export default function FiestasPatriasSection() {
  return (
    <section
      aria-labelledby="septiembre-ruth"
      className="relative overflow-hidden border-b border-border bg-[#fffaf0] py-16 sm:py-20"
    >
      <ChileanBunting className="absolute inset-x-0 top-0 opacity-70" />
      <div className="relative mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#b4232e]/20 bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#9f1d29]">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Edición septiembre
            </div>
            <h2
              id="septiembre-ruth"
              className="mt-4 font-display font-extrabold tracking-tight text-ink text-3xl sm:text-4xl"
            >
              Septiembre en Escuelitas Ruth
            </h2>
            <p className="mt-2 font-display text-2xl font-extrabold text-primary">
              ¡Tiki Tiki Tiii!
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Durante este mes nuestros niños y niñas conocerán y disfrutarán
              las tradiciones de nuestro país a través del juego, la música, la
              expresión artística y diferentes experiencias educativas.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {activities.map((activity) => (
                <article
                  key={activity.title}
                  className="flex gap-3 rounded-2xl border border-border/80 bg-surface p-4"
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${activity.color}`}
                  >
                    <activity.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-ink text-base">
                      {activity.title}
                    </h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted">
                      {activity.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-primary/15 bg-primary p-5 text-white sm:flex sm:items-center sm:justify-between sm:gap-5 sm:p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-on-dark">
                  Matrículas 2027
                </p>
                <h3 className="mt-1 font-display font-extrabold text-xl">
                  ¿Buscas un cupo para tu hijo o hija?
                </h3>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-white/80">
                  Agenda orientación por WhatsApp: te explicamos requisitos,
                  sedes y evaluación fonoaudiológica sin costo.
                </p>
              </div>
              <div className="mt-4 flex shrink-0 flex-col gap-2 sm:mt-0">
                <a
                  href={septemberWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir WhatsApp para consultar cupos y agendar evaluación"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/40 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Consultar cupos
                </a>
                <Link
                  href="/matriculas-2027-conchali"
                  className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-white/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Ver requisitos
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[#d9c9ad] bg-surface p-2">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src="/fiestas-patrias-ninos.webp"
                alt="Niños y niñas celebrando Fiestas Patrias y bailando cueca en un patio escolar"
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="px-3 py-3 text-center text-sm font-extrabold text-primary">
              ¡Felices Fiestas Patrias!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
