import Image from "next/image";
import { HeartHandshake } from "lucide-react";
import { teamAreas, teamMembers } from "@/content/team";

export default function TeamSection() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="team-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Personas que acompañan
          </p>
          <h2
            id="team-title"
            className="mt-2 font-display font-extrabold tracking-tight text-ink text-3xl sm:text-4xl"
          >
            Nuestro equipo
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Un trabajo coordinado entre las distintas áreas de la escuela para
            acompañar el desarrollo y aprendizaje de cada estudiante.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-surface-sunk">
            <Image
              src="/equipo-escuela-ruth.jpg"
              alt="Integrantes del equipo educativo de Escuela de Lenguaje Ruth"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <HeartHandshake
              className="h-9 w-9 text-primary"
              aria-hidden="true"
            />
            <h3 className="mt-4 font-display font-extrabold text-ink text-xl">
              Trabajo interdisciplinario
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {teamAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-surface-sunk px-3 py-2 text-sm font-extrabold text-primary"
                >
                  {area}
                </span>
              ))}
            </div>
            {teamMembers.length === 0 && (
              <p className="mt-6 border-t border-border pt-5 text-sm leading-relaxed text-muted">
                Los perfiles individuales se incorporarán cuando la escuela
                confirme nombres, cargos y fotografías autorizadas.
              </p>
            )}
          </div>
        </div>

        {teamMembers.length > 0 && (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <article
                key={member.id}
                className="overflow-hidden rounded-2xl border border-border bg-surface"
              >
                <div className="relative aspect-square bg-surface-sunk">
                  <Image
                    src={member.image}
                    alt={member.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-extrabold text-ink text-base">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-primary">
                    {member.role}
                  </p>
                  {member.description && (
                    <p className="mt-3 text-sm font-semibold text-muted">
                      {member.description}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
