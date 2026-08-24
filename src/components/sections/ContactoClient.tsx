"use client";

import { useEffect, Suspense } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
import { buildContactWhatsAppMessage, buildWhatsAppUrl, createWhatsAppUrl, siteConfig } from "@/lib/site";
import { admissionCutoff, birthdateInputBounds, campuses } from "@/content/school-data";

type FormData = {
  nombreApoderado: string;
  telefono: string;
  fechaNacimiento?: string;
  comuna?: string;
  sede?: string;
  jornada?: string;
  mensaje?: string;
  consent: boolean;
};

const quickWhatsAppUrl = createWhatsAppUrl({ source: "contact" });

const allowedLevelPrefills: Record<string, { label: string; age: string }> = {
  "Medio Mayor": { label: "Medio Mayor", age: "3 años" },
  "Pre-Kínder": { label: "Pre-Kínder", age: "4 años" },
  "Pre-Kínder (NT1)": { label: "Pre-Kínder (NT1)", age: "4 años" },
  Kínder: { label: "Kínder", age: "5 años" },
  "Kínder (NT2)": { label: "Kínder (NT2)", age: "5 años" },
};

function isValidBirthdate(value: string | null): value is string {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;

  const [year, month, day] = value.split("-").map(Number);
  const parsed = new Date(Date.UTC(year, month - 1, day));

  return (
    parsed.getUTCFullYear() === year &&
    parsed.getUTCMonth() === month - 1 &&
    parsed.getUTCDate() === day &&
    value >= birthdateInputBounds.min &&
    value <= birthdateInputBounds.max
  );
}

export default function ContactoClient() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 pt-32 pb-24 text-center">
          <p className="text-lg font-extrabold text-primary">Cargando formulario…</p>
        </div>
      }
    >
      <ContactoForm />
    </Suspense>
  );
}

function ContactoForm() {
  const searchParams = useSearchParams();
  const levelParam = searchParams?.get("level");
  const birthdateParam = searchParams?.get("birthdate");
  const levelPrefill = levelParam ? allowedLevelPrefills[levelParam] : undefined;
  const validBirthdate = isValidBirthdate(birthdateParam);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    defaultValues: { consent: false },
  });

  useEffect(() => {
    if (validBirthdate && birthdateParam) {
      setValue("fechaNacimiento", birthdateParam);
    }

    if (levelPrefill) {
      setValue(
        "mensaje",
        `Hola, realicé el cálculo en su web y mi hijo(a) tiene edad para ${levelPrefill.label}. Quisiera consultar disponibilidad para ${admissionCutoff.year}.`
      );
    }
  }, [birthdateParam, levelPrefill, setValue, validBirthdate]);

  const onSubmit = (data: FormData) => {
    const whatsappUrl = buildWhatsAppUrl(buildContactWhatsAppMessage(data));
    const whatsappWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    if (!whatsappWindow) {
      toast.error("No pudimos abrir WhatsApp", {
        description: "Permite ventanas emergentes o usa el botón de WhatsApp directo.",
      });
      return;
    }

    toast.success("WhatsApp está listo para tu consulta", {
      description: "Revisa el mensaje y decide si quieres enviarlo.",
    });
  };

  return (
    <div className="relative overflow-hidden bg-background pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">Contacto y admisión</p>
          <h1 className="mt-2 font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
            Consulta disponibilidad y agenda tu evaluación
          </h1>
          <p className="mt-4 text-base font-semibold leading-relaxed text-muted sm:text-lg">
            Completa solo los datos necesarios. Se abrirá WhatsApp para que revises la consulta antes de enviarla.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="space-y-4">
            <div className="rounded-2xl bg-primary-dark p-7 text-white">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand-yellow-light">Dónde encontrarnos</p>
              <h2 className="mt-2 font-display text-2xl font-extrabold">Dos sedes en Conchalí</h2>
              <div className="mt-6 space-y-5">
                {siteConfig.contact.addresses.map((address) => (
                  <div key={address.id}>
                    <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-brand-yellow-light">{address.name}</p>
                    <p className="mt-1 text-xs font-bold text-white/60">RBD {address.rbd}</p>
                    <a href={address.href} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-start gap-2 text-sm font-bold text-white/85 hover:text-white">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" aria-hidden="true" />
                      {address.label}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <h2 className="font-display text-xl font-extrabold text-foreground">Canales directos</h2>
              <div className="mt-5 space-y-4 text-sm font-bold text-muted">
                <a href={siteConfig.contact.phone.href} className="flex items-center gap-3 hover:text-primary">
                  <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                  {siteConfig.contact.phone.label}
                </a>
                <a href={siteConfig.contact.email.href} className="flex items-center gap-3 break-all hover:text-primary">
                  <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                  {siteConfig.contact.email.label}
                </a>
                <p className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  {siteConfig.contact.hours}
                </p>
              </div>
            </div>
          </aside>

          <section className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-9">
            <div className="mb-7">
              <h2 className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">Cuéntanos cómo orientarte</h2>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-muted">
                Los campos marcados como obligatorios nos permiten responderte. El diagnóstico previo no es necesario para escribirnos.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              <div>
                <label htmlFor="nombreApoderado" className="mb-2 block text-sm font-extrabold text-foreground">
                  Nombre del apoderado/a <span className="font-bold text-muted">(obligatorio)</span>
                </label>
                <input
                  id="nombreApoderado"
                  type="text"
                  autoComplete="name"
                  maxLength={100}
                  aria-required="true"
                  aria-invalid={Boolean(errors.nombreApoderado)}
                  aria-describedby={errors.nombreApoderado ? "nombreApoderado-error" : undefined}
                  {...register("nombreApoderado", {
                    required: "Escribe tu nombre para poder orientarte.",
                    maxLength: { value: 100, message: "Usa máximo 100 caracteres." },
                    validate: (value) => value.trim().length > 0 || "Escribe tu nombre para poder orientarte.",
                  })}
                  className="min-h-12 w-full rounded-xl border border-border bg-surface-raised px-4 py-3 text-base font-semibold text-foreground outline-none transition-colors focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                  placeholder="Ej.: María González"
                />
                {errors.nombreApoderado && <p id="nombreApoderado-error" role="alert" className="mt-1 text-sm font-bold text-red-700">{errors.nombreApoderado.message}</p>}
              </div>

              <div>
                <label htmlFor="telefono" className="mb-2 block text-sm font-extrabold text-foreground">
                  Teléfono o WhatsApp <span className="font-bold text-muted">(obligatorio)</span>
                </label>
                <input
                  id="telefono"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  maxLength={30}
                  aria-required="true"
                  aria-invalid={Boolean(errors.telefono)}
                  aria-describedby={errors.telefono ? "telefono-error" : undefined}
                  {...register("telefono", {
                    required: "Escribe un teléfono para poder contactarte.",
                    maxLength: { value: 30, message: "Usa máximo 30 caracteres." },
                    pattern: { value: /^[+()\d\s-]{8,30}$/, message: "Ingresa un teléfono válido." },
                  })}
                  className="min-h-12 w-full rounded-xl border border-border bg-surface-raised px-4 py-3 text-base font-semibold text-foreground outline-none transition-colors focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                  placeholder="+56 9 1234 5678"
                />
                {errors.telefono && <p id="telefono-error" role="alert" className="mt-1 text-sm font-bold text-red-700">{errors.telefono.message}</p>}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="fechaNacimiento" className="mb-2 block text-sm font-extrabold text-foreground">Fecha de nacimiento <span className="font-bold text-muted">(opcional)</span></label>
                  <input id="fechaNacimiento" type="date" min={birthdateInputBounds.min} max={birthdateInputBounds.max} {...register("fechaNacimiento")} className="min-h-12 w-full rounded-xl border border-border bg-surface-raised px-4 py-3 text-base font-semibold text-foreground outline-none transition-colors focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10" />
                </div>
                <div>
                  <label htmlFor="comuna" className="mb-2 block text-sm font-extrabold text-foreground">Comuna <span className="font-bold text-muted">(opcional)</span></label>
                  <input id="comuna" type="text" autoComplete="address-level2" maxLength={80} {...register("comuna")} className="min-h-12 w-full rounded-xl border border-border bg-surface-raised px-4 py-3 text-base font-semibold text-foreground outline-none transition-colors focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10" placeholder="Ej.: Conchalí" />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="sede" className="mb-2 block text-sm font-extrabold text-foreground">Sede de preferencia <span className="font-bold text-muted">(opcional)</span></label>
                  <select id="sede" {...register("sede")} defaultValue="" className="min-h-12 w-full rounded-xl border border-border bg-surface-raised px-4 py-3 text-base font-semibold text-foreground outline-none transition-colors focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10">
                    <option value="">Aún no lo sé</option>
                    {campuses.map((campus) => <option key={campus.id} value={campus.name}>{campus.name}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="jornada" className="mb-2 block text-sm font-extrabold text-foreground">Jornada preferida <span className="font-bold text-muted">(opcional)</span></label>
                  <select id="jornada" {...register("jornada")} defaultValue="" className="min-h-12 w-full rounded-xl border border-border bg-surface-raised px-4 py-3 text-base font-semibold text-foreground outline-none transition-colors focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10">
                    <option value="">Cualquiera disponible</option>
                    <option value="Mañana">Mañana</option>
                    <option value="Tarde">Tarde</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="mensaje" className="mb-2 block text-sm font-extrabold text-foreground">Mensaje <span className="font-bold text-muted">(opcional)</span></label>
                <textarea id="mensaje" maxLength={500} rows={4} {...register("mensaje")} className="w-full resize-y rounded-xl border border-border bg-surface-raised px-4 py-3 text-base font-semibold text-foreground outline-none transition-colors focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10" placeholder="Cuéntanos qué necesitas saber…" />
              </div>

              <div>
                <label className="flex items-start gap-3 rounded-xl border border-border bg-surface-blue/30 p-4 text-sm font-semibold leading-relaxed text-muted">
                  <input
                    type="checkbox"
                    aria-required="true"
                    aria-invalid={Boolean(errors.consent)}
                    {...register("consent", { required: "Necesitamos tu autorización para preparar el mensaje." })}
                    className="mt-1 h-4 w-4 shrink-0 accent-primary"
                  />
                  <span>
                    Autorizo que estos datos se incorporen en un mensaje de WhatsApp para responder mi consulta. No se almacenan en servidores de la escuela. Revisa la <Link href="/privacidad" className="font-extrabold text-primary underline underline-offset-2">política de privacidad</Link>.
                  </span>
                </label>
                {errors.consent && <p role="alert" className="mt-1 text-sm font-bold text-red-700">{errors.consent.message}</p>}
              </div>

              <button type="submit" className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-extrabold text-white transition-colors hover:bg-primary-dark focus-visible:ring-4 focus-visible:ring-primary/20">
                <Send className="h-5 w-5" aria-hidden="true" />
                Abrir WhatsApp con mi consulta
              </button>
            </form>

            <div className="mt-7 border-t border-border pt-6 text-center">
              <p className="text-sm font-bold text-muted">¿Prefieres escribir directamente?</p>
              <a href={quickWhatsAppUrl} target="_blank" rel="noopener noreferrer" aria-label="Abrir WhatsApp directo" className="mt-3 inline-flex items-center gap-2 text-sm font-extrabold text-primary hover:text-primary-dark">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Abrir WhatsApp directo
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
