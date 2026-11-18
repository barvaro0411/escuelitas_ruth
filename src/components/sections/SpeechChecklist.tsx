"use client";

import { useState } from "react";
import Link from "next/link";
import { track } from "@vercel/analytics";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import ResponseNote from "@/components/ui/ResponseNote";
import { schoolLevels } from "@/content/school-data";
import { createWhatsAppUrl } from "@/lib/site";

export const speechChecklistItems = [
  {
    id: "pronunciacion",
    shortLabel: "pronunciación",
    label: "Le cuesta pronunciar ciertos sonidos o palabras para su edad",
  },
  {
    id: "frases",
    shortLabel: "armar frases",
    label: "Habla con palabras sueltas o frases más cortas que otros niños",
  },
  {
    id: "entendimiento",
    shortLabel: "comprensión o claridad",
    label: "Solo su familia cercana le entiende o le cuesta seguir instrucciones",
  },
  {
    id: "frustracion",
    shortLabel: "frustración al hablar",
    label: "Prefiere señalar o se frustra cuando no logra darse a entender",
  },
  {
    id: "derivacion",
    shortLabel: "sugerencia de evaluación",
    label: "En su jardín o pediatra sugirieron consultar con fonoaudiólogo",
  },
] as const;

export function buildChecklistSummary(selectedIds: readonly string[]) {
  const labels = speechChecklistItems
    .filter((item) => selectedIds.includes(item.id))
    .map((item) => item.shortLabel);

  return labels.join(", ");
}

export default function SpeechChecklist() {
  const [selectedLevel, setSelectedLevel] = useState<string>(
    schoolLevels[0].name,
  );
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const summary = buildChecklistSummary(selectedIds);
  const count = selectedIds.length;

  const whatsappUrl = createWhatsAppUrl({
    source: "speech-checklist",
    level: selectedLevel,
    topic: summary || undefined,
  });

  const contactHref = `/contacto?${new URLSearchParams({
    level: selectedLevel,
    ...(summary ? { topic: summary } : {}),
  }).toString()}`;

  const handleTrackCta = (channel: "whatsapp" | "form") => {
    track("speech_checklist_cta", {
      channel,
      signalsCount: count,
      level: selectedLevel,
    });
  };

  return (
    <section
      id="chequeo"
      data-cta="chequeo-lenguaje"
      aria-labelledby="speech-checklist-title"
      className="scroll-mt-24 border-b border-border bg-surface-sunk/55 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-surface px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-primary shadow-2xs">
              <Sparkles className="h-3.5 w-3.5 text-action-hover" aria-hidden="true" />
              Guía rápida para familias
            </span>
            <h2
              id="speech-checklist-title"
              className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
            >
              ¿No sabes si tu hijo necesita evaluación?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Marca si has notado alguna de estas situaciones en casa. Te
              ayudamos a preparar tu consulta para una{" "}
              <strong className="text-ink">
                evaluación fonoaudiológica sin costo
              </strong>
              .
            </p>

            <div className="mt-6">
              <p className="mb-2.5 text-xs font-extrabold uppercase tracking-wider text-ink">
                1. Edad aproximada de tu hijo/a
              </p>
              <div
                role="group"
                aria-label="Edad aproximada"
                className="grid grid-cols-3 gap-2"
              >
                {schoolLevels.map((level) => {
                  const active = selectedLevel === level.name;
                  return (
                    <button
                      key={level.id}
                      type="button"
                      onClick={() => setSelectedLevel(level.name)}
                      aria-pressed={active}
                      className={`rounded-xl border px-3 py-2.5 text-left transition-all cursor-pointer ${
                        active
                          ? "border-primary bg-primary text-white shadow-xs"
                          : "border-border bg-surface text-ink hover:border-primary/40"
                      }`}
                    >
                      <span className="block text-xs font-extrabold">
                        {level.ageYears} años
                      </span>
                      <span
                        className={`block truncate text-[11px] font-semibold ${
                          active ? "text-white/85" : "text-muted"
                        }`}
                      >
                        {level.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <p className="mt-5 text-xs leading-relaxed text-muted">
              Esta guía es orientativa y no constituye un diagnóstico clínico:
              solo una evaluación presencial con fonoaudióloga permite confirmar
              si requiere apoyo.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-5 shadow-xs sm:p-7 lg:col-span-7">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs font-extrabold uppercase tracking-wider text-ink">
                2. Marca lo que has observado (opcional)
              </p>
              <span className="rounded-full bg-surface-sunk px-2.5 py-1 text-[11px] font-extrabold text-primary">
                {count}/{speechChecklistItems.length} marcadas
              </span>
            </div>

            <ul className="space-y-2.5">
              {speechChecklistItems.map((item) => {
                const checked = selectedIds.includes(item.id);
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      role="checkbox"
                      aria-checked={checked}
                      onClick={() => toggleItem(item.id)}
                      className={`flex w-full items-start gap-3 rounded-xl border p-3.5 text-left transition-all cursor-pointer ${
                        checked
                          ? "border-primary bg-surface-sunk/60 shadow-2xs"
                          : "border-border bg-paper hover:border-primary/40 hover:bg-surface"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                          checked
                            ? "border-primary bg-primary text-white"
                            : "border-border bg-surface"
                        }`}
                      >
                        {checked && <Check className="h-3.5 w-3.5" />}
                      </span>
                      <span className="text-sm font-semibold leading-snug text-ink">
                        {item.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 rounded-2xl border border-primary/20 bg-surface p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-display text-base font-extrabold text-ink sm:text-lg">
                    {count === 0
                      ? "Aun sin señales marcadas, puedes resolver tus dudas"
                      : count === 1
                        ? "Vale la pena revisarlo a tiempo sin costo"
                        : `Marcaste ${count} señales: te recomendamos evaluar sin costo`}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">
                    {count === 0
                      ? "Si tienes inquietudes sobre el habla o la pronunciación de tu hijo/a, nuestras fonoaudiólogas pueden orientarte."
                      : "No necesitas traer un informe previo. En una sesión cercana y lúdica te explicaremos si corresponde ingresar a escuela de lenguaje."}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleTrackCta("whatsapp")}
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-action px-5 py-3 text-sm font-extrabold text-primary-dark transition-colors hover:bg-action-hover btn-action-glow"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Agendar evaluación gratuita</span>
                </a>
                <Link
                  href={contactHref}
                  onClick={() => handleTrackCta("form")}
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-1.5 rounded-xl border border-primary/25 bg-surface-sunk px-4 py-3 text-xs font-extrabold text-primary transition-colors hover:border-primary hover:bg-surface sm:text-sm"
                >
                  <span>Dejar mis datos</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <ResponseNote tone="light" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
