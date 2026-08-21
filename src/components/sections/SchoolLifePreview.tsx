import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Camera, HeartHandshake } from "lucide-react";

export default function SchoolLifePreview() {
  return (
    <section className="border-b border-border bg-white py-16 sm:py-20" aria-labelledby="school-life-preview-title">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-8">
        <div className="relative min-h-[330px] overflow-hidden rounded-2xl bg-primary-dark sm:min-h-[420px]">
          <Image
            src="/equipo-escuela-ruth.jpg"
            alt="Integrantes del equipo educativo de Escuela de Lenguaje Ruth"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-dark/90 to-transparent px-6 pb-6 pt-20 text-white">
            <p className="text-sm font-extrabold">Una comunidad que acompaña cada aprendizaje</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">Nuestra comunidad</p>
          <h2 id="school-life-preview-title" className="mt-2 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Vida Escolar
          </h2>
          <p className="mt-4 text-lg font-semibold leading-relaxed text-muted">
            Así vivimos y aprendemos en Escuelitas Ruth. Este espacio reúne actividades, celebraciones y momentos de nuestra comunidad escolar.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {[
              { label: "Actividades", icon: CalendarDays },
              { label: "Fotografías", icon: Camera },
              { label: "Comunidad", icon: HeartHandshake },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-border bg-surface-blue/30 p-4">
                <item.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <p className="mt-2 text-sm font-extrabold text-foreground">{item.label}</p>
              </div>
            ))}
          </div>

          <Link href="/vida-escolar" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-extrabold text-white transition-colors hover:bg-primary-dark">
            Conocer nuestra Vida Escolar
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
