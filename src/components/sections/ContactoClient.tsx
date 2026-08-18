"use client";

import { useEffect, Suspense } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, GraduationCap } from "lucide-react";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
import { buildContactWhatsAppMessage, buildWhatsAppUrl, siteConfig } from "@/lib/site";

type FormData = {
  nombreApoderado: string;
  email?: string;
  telefono: string;
  nombreNino?: string;
  edadNino: string;
  fechaNacimiento?: string;
  comuna: string;
  sede?: string;
  jornada: string;
  diagnostico: string;
  mensaje?: string;
};

const quickWhatsAppUrl = buildWhatsAppUrl(
  "Hola, quiero consultar por matrícula 2027 y agendar una evaluación gratuita."
);

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
    value >= "2019-01-01" &&
    value <= "2027-03-31"
  );
}

export default function ContactoClient() {
  return (
    <Suspense
      fallback={
        <div className="pt-40 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-xl font-black text-primary-dark">Cargando formulario...</p>
        </div>
      }
    >
      <ContactoForm />
    </Suspense>
  );
}

function ContactoForm() {
  const searchParams = useSearchParams();
  const levelParam = searchParams ? searchParams.get("level") : null;
  const birthdateParam = searchParams ? searchParams.get("birthdate") : null;
  const levelPrefill = levelParam ? allowedLevelPrefills[levelParam] : undefined;
  const validBirthdate = isValidBirthdate(birthdateParam) ? birthdateParam : null;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormData>();

  useEffect(() => {
    if (validBirthdate) {
      setValue("fechaNacimiento", validBirthdate);
    }

    if (levelPrefill) {
      setValue("edadNino", levelPrefill.age);
      setValue(
        "mensaje",
        `Hola, realicé el cálculo en su web y mi hijo(a) califica para el nivel de ${levelPrefill.label}. Quisiera consultar disponibilidad de cupos para matrícula 2027.`
      );
    }
  }, [levelPrefill, validBirthdate, setValue]);

  const onSubmit = (data: FormData) => {
    const whatsappUrl = buildWhatsAppUrl(buildContactWhatsAppMessage(data));
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    toast.success("Abrimos WhatsApp para enviar tu consulta", {
      description: "El equipo podrá responderte más rápido por ese canal.",
    });
    reset();
  };

  return (
    <div className="pt-32 pb-24 overflow-hidden relative">
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16 animate-fade-up">
          <span className="inline-block px-5 py-2 rounded-full bg-accent text-primary-dark font-black uppercase tracking-widest mb-6 shadow-sm">
            Contacto y matrícula
          </span>
          <h1 className="text-5xl sm:text-7xl font-black text-foreground mb-6 tracking-tight leading-tight">
            Agenda tu evaluación gratuita.
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed font-semibold">
            Déjanos los datos principales y se abrirá WhatsApp con tu consulta lista para enviar. Así podemos revisar edad, cupo, jornada y próximos pasos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-5 flex flex-col gap-6 animate-fade-up animate-delay-200">
            <div className="bg-primary-dark rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group">
              <MapPin className="text-secondary mb-6 relative z-10" size={40} />
              <h2 className="text-2xl font-black text-white mb-4 relative z-10">Nuestras Sedes</h2>
              <div className="space-y-4 relative z-10">
                {siteConfig.contact.addresses.map((addr) => (
                  <div key={addr.id}>
                    <p className="text-xs text-secondary font-black uppercase tracking-widest mb-1">{addr.name}</p>
                    <p className="text-xs text-white/50 font-bold mb-1">RBD {addr.rbd}</p>
                    <a
                      href={addr.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-white/80 font-semibold hover:text-secondary transition-colors"
                    >
                      {addr.label}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-[2rem] p-8 border border-border/50 shadow-lg hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-full bg-pastel-blue text-white flex items-center justify-center mb-6 shadow-sm">
                  <Phone size={24} />
                </div>
                <h2 className="text-xl font-black text-foreground mb-2">Teléfono</h2>
                <a href={siteConfig.contact.phone.href} className="text-foreground/70 font-bold hover:text-primary transition-colors">
                  {siteConfig.contact.phone.label}
                </a>
              </div>

              <div className="bg-white rounded-[2rem] p-8 border border-border/50 shadow-lg hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-full bg-pastel-pink text-white flex items-center justify-center mb-6 shadow-sm">
                  <Mail size={24} />
                </div>
                <h2 className="text-xl font-black text-foreground mb-2">Correo</h2>
                <a href={siteConfig.contact.email.href} className="text-foreground/70 font-bold break-all hover:text-primary transition-colors">
                  {siteConfig.contact.email.label}
                </a>
              </div>

              <div className="bg-white rounded-[2rem] p-8 border border-border/50 shadow-lg hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-full bg-secondary text-primary-dark flex items-center justify-center mb-6 shadow-sm">
                  <Clock size={24} />
                </div>
                <h2 className="text-xl font-black text-foreground mb-2">Horario</h2>
                <p className="text-foreground/70 font-bold text-sm">{siteConfig.contact.hours}</p>
              </div>

              <div className="bg-white rounded-[2rem] p-8 border border-border/50 shadow-lg hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-full bg-pastel-mint text-white flex items-center justify-center mb-6 shadow-sm">
                  <GraduationCap size={24} />
                </div>
                <h2 className="text-xl font-black text-foreground mb-2">Niveles</h2>
                <p className="text-foreground/70 font-bold text-sm">Medio Mayor a Kínder.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {siteConfig.contact.addresses.map((addr) => (
                <a
                  key={addr.id}
                  href={addr.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-[4/3] rounded-[2.5rem] bg-accent border-4 border-white shadow-xl flex items-center justify-center text-muted overflow-hidden relative group hover:shadow-2xl transition-all"
                >
                  <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/20 transition-colors" />
                  <div className="relative z-10 flex flex-col items-center px-4 text-center">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg mb-3 text-primary animate-bounce-slow">
                      <MapPin size={28} />
                    </div>
                    <span className="text-xs font-black text-secondary uppercase tracking-widest bg-primary-dark/80 px-3 py-1 rounded-full mb-2">{addr.name}</span>
                    <span className="text-xs font-black text-primary-dark uppercase tracking-widest bg-white/80 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      Ver en Google Maps
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 animate-fade-up">
            <div className="bg-white rounded-[3rem] p-8 sm:p-12 border border-border/50 shadow-2xl relative">
              <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-8 relative z-10">Consulta cupo 2027</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10" noValidate>
                <div>
                  <label htmlFor="nombreApoderado" className="block text-sm font-black uppercase tracking-wider text-foreground/70 mb-3 ml-2">Nombre del apoderado/a</label>
                  <input
                    id="nombreApoderado"
                    type="text"
                    autoComplete="name"
                    maxLength={100}
                    aria-invalid={Boolean(errors.nombreApoderado)}
                    aria-describedby={errors.nombreApoderado ? "nombreApoderado-error" : undefined}
                    {...register("nombreApoderado", {
                      required: "Este campo es obligatorio",
                      maxLength: { value: 100, message: "Usa máximo 100 caracteres" },
                    })}
                    className="w-full px-6 py-5 rounded-3xl bg-accent/50 border border-border/50 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all outline-none text-lg font-semibold placeholder:text-muted placeholder:font-normal"
                    placeholder="Ej: María González"
                  />
                  {errors.nombreApoderado && <p id="nombreApoderado-error" role="alert" className="mt-2 text-sm text-red-700 font-bold ml-2">{errors.nombreApoderado.message}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-black uppercase tracking-wider text-foreground/70 mb-3 ml-2">Teléfono de contacto</label>
                    <input
                      id="telefono"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      maxLength={30}
                      aria-invalid={Boolean(errors.telefono)}
                      aria-describedby={errors.telefono ? "telefono-error" : undefined}
                      {...register("telefono", {
                        required: "Este campo es obligatorio",
                        maxLength: { value: 30, message: "Usa máximo 30 caracteres" },
                        pattern: {
                          value: /^[+()\d\s-]{8,30}$/,
                          message: "Ingresa un teléfono válido",
                        },
                      })}
                      className="w-full px-6 py-5 rounded-3xl bg-accent/50 border border-border/50 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all outline-none text-lg font-semibold placeholder:text-muted placeholder:font-normal"
                      placeholder="+56 9 1234 5678"
                    />
                    {errors.telefono && <p id="telefono-error" role="alert" className="mt-2 text-sm text-red-700 font-bold ml-2">{errors.telefono.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-black uppercase tracking-wider text-foreground/70 mb-3 ml-2">Correo electrónico opcional</label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      maxLength={254}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      {...register("email", {
                        maxLength: { value: 254, message: "Usa máximo 254 caracteres" },
                        validate: (value) => !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(value) || "Correo inválido",
                      })}
                      className="w-full px-6 py-5 rounded-3xl bg-accent/50 border border-border/50 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all outline-none text-lg font-semibold placeholder:text-muted placeholder:font-normal"
                      placeholder="nombre@ejemplo.com"
                    />
                    {errors.email && <p id="email-error" role="alert" className="mt-2 text-sm text-red-700 font-bold ml-2">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombreNino" className="block text-sm font-black uppercase tracking-wider text-foreground/70 mb-3 ml-2">Nombre del niño/a opcional</label>
                    <input
                      id="nombreNino"
                      type="text"
                      autoComplete="off"
                      maxLength={100}
                      {...register("nombreNino", { maxLength: 100 })}
                      className="w-full px-6 py-5 rounded-3xl bg-accent/50 border border-border/50 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all outline-none text-lg font-semibold placeholder:text-muted placeholder:font-normal"
                      placeholder="Ej: Mateo"
                    />
                  </div>
                  <div>
                    <label htmlFor="edadNino" className="block text-sm font-black uppercase tracking-wider text-foreground/70 mb-3 ml-2">Edad del niño/a</label>
                    <input
                      id="edadNino"
                      type="text"
                      inputMode="numeric"
                      maxLength={40}
                      aria-invalid={Boolean(errors.edadNino)}
                      aria-describedby={errors.edadNino ? "edadNino-error" : undefined}
                      {...register("edadNino", {
                        required: "Este campo es obligatorio",
                        maxLength: { value: 40, message: "Usa máximo 40 caracteres" },
                      })}
                      className="w-full px-6 py-5 rounded-3xl bg-accent/50 border border-border/50 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all outline-none text-lg font-semibold placeholder:text-muted placeholder:font-normal"
                      placeholder="Ej: 4 años"
                    />
                    {errors.edadNino && <p id="edadNino-error" role="alert" className="mt-2 text-sm text-red-700 font-bold ml-2">{errors.edadNino.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fechaNacimiento" className="block text-sm font-black uppercase tracking-wider text-foreground/70 mb-3 ml-2">Fecha de nacimiento opcional</label>
                    <input
                      id="fechaNacimiento"
                      type="date"
                      min="2019-01-01"
                      max="2027-03-31"
                      {...register("fechaNacimiento")}
                      className="w-full px-6 py-5 rounded-3xl bg-accent/50 border border-border/50 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all outline-none text-lg font-semibold placeholder:text-muted placeholder:font-normal"
                    />
                  </div>
                  <div>
                    <label htmlFor="comuna" className="block text-sm font-black uppercase tracking-wider text-foreground/70 mb-3 ml-2">Comuna</label>
                    <input
                      id="comuna"
                      type="text"
                      autoComplete="address-level2"
                      maxLength={80}
                      aria-invalid={Boolean(errors.comuna)}
                      aria-describedby={errors.comuna ? "comuna-error" : undefined}
                      {...register("comuna", {
                        required: "Este campo es obligatorio",
                        maxLength: { value: 80, message: "Usa máximo 80 caracteres" },
                      })}
                      className="w-full px-6 py-5 rounded-3xl bg-accent/50 border border-border/50 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all outline-none text-lg font-semibold placeholder:text-muted placeholder:font-normal"
                      placeholder="Ej: Conchalí"
                    />
                    {errors.comuna && <p id="comuna-error" role="alert" className="mt-2 text-sm text-red-700 font-bold ml-2">{errors.comuna.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="sede" className="block text-sm font-black uppercase tracking-wider text-foreground/70 mb-3 ml-2">Sede de preferencia</label>
                    <select
                      id="sede"
                      {...register("sede")}
                      className="w-full px-6 py-5 rounded-3xl bg-accent/50 border border-border/50 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all outline-none text-lg font-semibold"
                      defaultValue=""
                    >
                      <option value="" disabled>Selecciona una opción</option>
                      <option value="Sede Vascongados">Sede Vascongados</option>
                      <option value="Sede Gral. Gambino">Sede Gral. Gambino</option>
                      <option value="No estoy seguro/a">No estoy seguro/a</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="jornada" className="block text-sm font-black uppercase tracking-wider text-foreground/70 mb-3 ml-2">Jornada preferida</label>
                    <select
                      id="jornada"
                      aria-invalid={Boolean(errors.jornada)}
                      aria-describedby={errors.jornada ? "jornada-error" : undefined}
                      {...register("jornada", { required: "Este campo es obligatorio" })}
                      className="w-full px-6 py-5 rounded-3xl bg-accent/50 border border-border/50 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all outline-none text-lg font-semibold"
                      defaultValue=""
                    >
                      <option value="" disabled>Selecciona una opción</option>
                      <option value="Mañana">Mañana</option>
                      <option value="Tarde">Tarde</option>
                      <option value="Cualquiera disponible">Cualquiera disponible</option>
                    </select>
                    {errors.jornada && <p id="jornada-error" role="alert" className="mt-2 text-sm text-red-700 font-bold ml-2">{errors.jornada.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="diagnostico" className="block text-sm font-black uppercase tracking-wider text-foreground/70 mb-3 ml-2">Evaluación o diagnóstico previo</label>
                    <select
                      id="diagnostico"
                      aria-invalid={Boolean(errors.diagnostico)}
                      aria-describedby={errors.diagnostico ? "diagnostico-error" : undefined}
                      {...register("diagnostico", { required: "Este campo es obligatorio" })}
                      className="w-full px-6 py-5 rounded-3xl bg-accent/50 border border-border/50 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all outline-none text-lg font-semibold"
                      defaultValue=""
                    >
                      <option value="" disabled>Selecciona una opción</option>
                      <option value="Tiene informe fonoaudiológico">Tiene informe fonoaudiológico</option>
                      <option value="No tiene informe">No tiene informe</option>
                      <option value="No estoy seguro/a">No estoy seguro/a</option>
                    </select>
                    {errors.diagnostico && <p id="diagnostico-error" role="alert" className="mt-2 text-sm text-red-700 font-bold ml-2">{errors.diagnostico.message}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-black uppercase tracking-wider text-foreground/70 mb-3 ml-2">Mensaje opcional</label>
                  <textarea
                    id="mensaje"
                    maxLength={500}
                    {...register("mensaje", { maxLength: 500 })}
                    rows={5}
                    className="w-full px-6 py-5 rounded-3xl bg-accent/50 border border-border/50 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all outline-none text-lg font-semibold placeholder:text-muted placeholder:font-normal resize-none"
                    placeholder="Cuéntanos la edad de tu hijo(a), nivel o dudas sobre matrícula..."
                  />
                </div>

                <p className="text-sm font-semibold leading-relaxed text-foreground/70">
                  Al continuar, se abrirá WhatsApp con estos datos para que tú decidas si envías el mensaje. Revisa nuestra{" "}
                  <Link href="/privacidad" className="font-black text-primary underline underline-offset-4 hover:text-primary-dark">
                    política de privacidad
                  </Link>.
                </p>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-6 rounded-2xl font-black text-xl hover:bg-primary-dark transition-all shadow-xl shadow-primary/30 flex items-center justify-center hover:scale-[1.02]"
                >
                  <Send className="mr-3 h-6 w-6" />
                  Consultar cupo por WhatsApp
                </button>
              </form>

              <div className="mt-12 pt-10 border-t border-border flex flex-col items-center bg-accent/30 rounded-3xl p-8">
                <p className="text-sm font-black uppercase tracking-widest text-foreground/70 mb-4">Respuesta inmediata:</p>
                <a
                  href={quickWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-dark font-black text-lg bg-secondary px-8 py-4 rounded-full hover:bg-secondary-light transition-all shadow-lg shadow-secondary/20 hover:-translate-y-1"
                >
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Chatea por WhatsApp
                </a>
                <p className="mt-4 text-sm text-foreground/60 font-bold">{siteConfig.contact.whatsapp.label}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
