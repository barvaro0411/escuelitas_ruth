import { Baby, Building2, Clock3, Package, Sparkles, Sun, WalletCards } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/site";

const highlights = [
  {
    title: "Dos escuelas en Conchalí",
    description: "Escuela Vascongados y Escuela Gral. Gambino, en Conchalí.",
    icon: Building2,
    badge: "Conchalí",
  },
  {
    title: "Dos jornadas",
    description: "Mañana 08:15–12:15 · Tarde 13:30–17:15 de lunes a viernes.",
    icon: Clock3,
    badge: "Flexibilidad",
  },
  {
    title: "Edades de 3 a 5 años",
    description: "Niveles Medio Mayor, Pre-Kínder y Kínder de educación parvularia.",
    icon: Baby,
    badge: "Preescolar",
  },
  {
    title: "100% Gratuito",
    description: "Sin costo de matrícula, colegiatura ni mensualidad para las familias.",
    icon: WalletCards,
    badge: "Subvencionado",
  },
  {
    title: "Materiales incluidos",
    description: "Todos los útiles y materiales escolares son otorgados por la escuela.",
    icon: Package,
    badge: "Sin Gastos Extra",
  },
  {
    title: "Jornada de extensión",
    description: "Extensión de jornada gratuita para las familias. Consulta horarios y disponibilidad en cada sede.",
    icon: Sun,
    badge: "Gratuita",
  },
];

const pushWhatsAppUrl = buildWhatsAppUrl(
  "Hola, quiero consultar por un cupo 2027 y agendar la evaluación fonoaudiológica gratuita."
);

export default function EnrollmentPush() {
  return (
    <section
      aria-labelledby="informacion-clave"
      className="relative z-20 -mt-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      <div className="relative overflow-hidden bg-gradient-to-r from-primary-dark via-primary to-[#071338] rounded-[2.5rem] border-4 border-white/20 shadow-2xl p-8 sm:p-10">
        {/* Glows de fondo */}
        <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-brand-yellow/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 h-56 w-56 rounded-full bg-primary-light/20 blur-3xl pointer-events-none" />

        <div className="relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-white/10 pb-5">
            <div className="flex items-center gap-2">
              <span className="flex h-3 w-3 rounded-full bg-brand-yellow animate-pulse" />
              <h2
                id="informacion-clave"
                className="text-xs font-black uppercase tracking-[0.25em] text-brand-yellow-light"
              >
                Información Clave del Proyecto Educativo
              </h2>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1 text-xs font-bold text-white border border-white/15 w-fit">
              <Sparkles size={14} className="text-brand-yellow" />
              Matrículas 2027 Abiertas
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className={`flex flex-col justify-between p-5 rounded-2xl transition-all duration-300 group card-hover hover:-translate-y-1.5 ${
                  item.badge === "Subvencionado"
                    ? "bg-gradient-to-b from-brand-yellow/15 to-white/5 border-2 border-brand-yellow/60 shadow-lg shadow-brand-yellow/10 hover:shadow-brand-yellow/25"
                    : "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 shadow-md ${
                        item.badge === "Subvencionado"
                          ? "bg-brand-yellow text-primary-dark font-black"
                          : "bg-brand-yellow/20 text-brand-yellow group-hover:scale-110 group-hover:bg-brand-yellow group-hover:text-primary-dark"
                      }`}
                    >
                      <item.icon size={24} />
                    </div>
                    <span
                      className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md ${
                        item.badge === "Subvencionado"
                          ? "bg-brand-yellow text-primary-dark"
                          : "text-white/70 bg-white/10"
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-white leading-tight mb-2 font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold leading-relaxed text-white/75">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
            <p className="text-xs font-bold text-white/70">
              Gratuita para las familias · Con subvención estatal
            </p>
            <a
              href={pushWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md px-5 py-2.5 text-xs font-black text-white transition-all hover:bg-brand-yellow hover:border-brand-yellow hover:text-primary-dark"
            >
              <Sparkles size={14} />
              Consultar cupo por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
