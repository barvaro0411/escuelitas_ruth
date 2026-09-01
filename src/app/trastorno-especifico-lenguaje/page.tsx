import { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import AgeCalculator from "@/components/sections/AgeCalculator";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Heart,
  MessageCircle,
  Mic,
  Shield,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import {
  buildBreadcrumbsJsonLd,
  buildWhatsAppUrl,
  siteConfig,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "¿Qué es el TEL? Trastorno Específico del Lenguaje en niños",
  description:
    "Descubre qué es el TEL, cómo detectarlo en tu hijo y cómo una escuela de lenguaje puede ayudar. Evaluación fonoaudiológica gratuita en Conchalí.",
  alternates: {
    canonical: "/trastorno-especifico-lenguaje",
  },
  openGraph: {
    title: "¿Qué es el TEL? Trastorno Específico del Lenguaje en niños",
    description:
      "Descubre qué es el TEL, cómo detectarlo en tu hijo y cómo una escuela de lenguaje puede ayudar. Evaluación fonoaudiológica gratuita en Conchalí.",
    url: "/trastorno-especifico-lenguaje",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "¿Qué es el TEL? | Escuela de Lenguaje Ruth",
    description: "Señales, diagnóstico y apoyo para niños con TEL en Conchalí.",
    images: ["/og-image.jpg"],
  },
};

const whatsappUrl = buildWhatsAppUrl(
  "Hola, quisiera saber si mi hijo(a) puede tener TEL y cómo acceder a una evaluación fonoaudiológica gratuita en Escuela de Lenguaje Ruth.",
);

const warningSigns = [
  {
    icon: Mic,
    title: "No pronuncia bien para su edad",
    description:
      "Tiene sonidos o palabras que otros niños de su edad ya dicen con claridad. Familiares o amigos frecuentemente no le entienden.",
  },
  {
    icon: Brain,
    title: "Le cuesta encontrar las palabras",
    description:
      'Se bloquea al hablar, dice "eso" o "cosa" para referirse a objetos que ya conoce, o tarda en expresar lo que quiere decir.',
  },
  {
    icon: BookOpen,
    title: "Sus frases son más cortas que las de otros niños",
    description:
      "Usa frases simples o palabras sueltas cuando debería construir oraciones. A los 3 años debería unir al menos 2–3 palabras en frases.",
  },
  {
    icon: AlertCircle,
    title: "Le cuesta entender instrucciones simples",
    description:
      "Parece no comprender lo que se le dice, necesita que le repitan o que se le muestre físicamente lo que se espera de él o ella.",
  },
  {
    icon: Heart,
    title: "Evita hablar o se frustra al comunicarse",
    description:
      "Se enoja, llora o se aisla cuando no logra hacerse entender. Prefiere señalar o usar gestos en vez de palabras.",
  },
  {
    icon: Users,
    title: "El jardín o pediatra recomendó evaluación",
    description:
      "La educadora, pediatra o neuropediatra indicó que el lenguaje de tu hijo(a) está retrasado o que convendría revisarlo con un fonoaudiólogo.",
  },
  {
    icon: Shield,
    title: "Diagnóstico previo de TEL, disfasia o retraso del lenguaje",
    description:
      "Ya cuenta con un informe fonoaudiológico que menciona TEL, trastorno del lenguaje, disfasia, o retraso simple del lenguaje.",
  },
  {
    icon: Star,
    title: "Solo le entiende su familia cercana",
    description:
      "Su habla es muy particular, al punto que personas fuera de su hogar tienen dificultades para comprender lo que dice.",
  },
];

const telFacts = [
  {
    label: "de los niños en edad preescolar",
    value: "7–10%",
    color: "bg-primary",
  },
  {
    label: "afectados son más niños que niñas",
    value: "2 de 3",
    color: "bg-primary-dark",
  },
  {
    label: "mejoran con intervención temprana",
    value: "9 de 10",
    color: "bg-accent text-white",
  },
];

const schoolFeatures = [
  {
    icon: Users,
    title: "Equipos especializados",
    description:
      "Educadoras diferenciales y fonoaudiólogas trabajando de forma coordinada todos los días con grupos pequeños de máximo 8 niños.",
  },
  {
    icon: Brain,
    title: "Terapia integrada al aula",
    description:
      "Las sesiones de fonoaudiología no están separadas de la jornada: el trabajo terapéutico ocurre dentro de la rutina escolar.",
  },
  {
    icon: BookOpen,
    title: "Currículo adaptado",
    description:
      "Se trabaja el lenguaje oral, comprensión, vocabulario, conciencia fonológica y habilidades pre-lectoras siguiendo el programa del MINEDUC.",
  },
  {
    icon: Heart,
    title: "Apoyo a la familia",
    description:
      "Las familias reciben orientaciones periódicas para reforzar el lenguaje en el hogar y participar activamente en el progreso de sus hijos.",
  },
];

const requirements = [
  "Edad entre 3 años y 5 años 11 meses al 31 de marzo del año escolar.",
  "Diagnóstico de TEL, disfasia o retraso del lenguaje emitido por fonoaudiólogo.",
  "Si no tienes informe, la escuela puede orientar y realizar una evaluación inicial sin costo.",
  "Sin matrícula ni mensualidad: la educación es gratuita para todas las familias.",
  "Disponibilidad en jornada mañana o tarde, según cupos por nivel.",
];

export default function TrastornoEspecificoLenguajePage() {
  const breadcrumbsJsonLd = buildBreadcrumbsJsonLd([
    { name: "Inicio", url: "/" },
    {
      name: "Trastorno Específico del Lenguaje (TEL)",
      url: "/trastorno-especifico-lenguaje",
    },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbsJsonLd} />
      <div className="pt-28 overflow-hidden bg-paper">
        {/* ── HERO ── */}
        <PageHero
          eyebrow="Trastorno específico del lenguaje"
          eyebrowIcon={Brain}
          title="¿Qué es el TEL?"
          lead="El TEL es un trastorno del desarrollo del lenguaje que afecta la capacidad de un niño para comprender y expresarse oralmente, sin que exista una causa intelectual, auditiva o neurológica que lo explique."
          decoration={
            <>
              <div
                className="absolute inset-0 dot-pattern opacity-10"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark/95 to-primary/60"
                aria-hidden="true"
              />
            </>
          }
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-action px-7 py-4 text-base font-extrabold text-primary-dark transition-colors hover:bg-action-hover"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Consultar evaluación gratuita
            </a>
            <Link
              href="/admision"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/40 px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Ver requisitos
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </PageHero>

        {/* ── QUICK SUMMARY BAR ── */}
        <section className="py-12 bg-primary-dark text-white border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {telFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-center gap-5 bg-white/10 rounded-2xl px-6 py-5 border border-white/10"
                >
                  <span
                    className={`px-4 py-2 rounded-xl font-extrabold text-2xl ${fact.color} shadow`}
                  >
                    {fact.value}
                  </span>
                  <p className="font-semibold text-white leading-snug text-sm">
                    {fact.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WARNING SIGNS ── */}
        <section className="py-24 bg-surface border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-surface-sunk text-primary-dark text-xs font-semibold uppercase tracking-widest mb-4">
                <AlertCircle className="mr-1.5 h-3.5 w-3.5" />
                Señales de alerta
              </span>
              <h2 className="font-extrabold text-ink tracking-tight leading-[1.1] mb-5 text-3xl sm:text-4xl">
                ¿Cómo sé si mi hijo tiene TEL?
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                Estas son las señales más frecuentes que los papás y mamás notan
                antes de llegar a una evaluación fonoaudiológica. Si reconoces
                alguna, es importante consultar.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {warningSigns.map((sign) => (
                <div
                  key={sign.title}
                  className="rounded-2xl border border-border bg-paper p-6 hover:shadow-md transition-shadow group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <sign.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-extrabold text-ink mb-2 leading-tight text-base">
                    {sign.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {sign.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 max-w-3xl mx-auto p-6 rounded-2xl bg-surface-sunk border border-accent/40 flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <p className="text-muted leading-relaxed">
                <strong>¿Reconoces alguna de estas señales?</strong> No esperes
                a que tu hijo &quot;lo supere solo&quot;. La intervención
                temprana en etapa preescolar tiene los mejores resultados.
                Podemos orientarte sin costo.
              </p>
            </div>
          </div>
        </section>

        {/* ── WHAT IS TEL ── */}
        <section className="py-24 bg-paper border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left: text */}
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-surface-sunk text-primary-dark font-semibold uppercase tracking-widest text-xs mb-5">
                Definición clínica
              </span>
              <h2 className="font-extrabold text-ink tracking-tight leading-tight mb-6 text-3xl sm:text-4xl">
                ¿Qué es el TEL exactamente?
              </h2>
              <div className="space-y-5 text-muted leading-relaxed text-lg">
                <p>
                  El{" "}
                  <strong className="text-ink">
                    Trastorno Específico del Lenguaje (TEL)
                  </strong>{" "}
                  es una dificultad significativa en la adquisición y el uso del
                  lenguaje oral, que no se explica por pérdida auditiva,
                  discapacidad intelectual, alteración neurológica ni falta de
                  estimulación.
                </p>
                <p>
                  Afecta tanto la{" "}
                  <strong className="text-ink">comprensión</strong> (entender lo
                  que le dicen) como la{" "}
                  <strong className="text-ink">expresión</strong> (construir
                  frases, encontrar palabras, pronunciar correctamente). En
                  algunos niños predomina una u otra área.
                </p>
                <p>
                  El TEL{" "}
                  <strong className="text-ink">
                    no es lo mismo que el autismo
                  </strong>{" "}
                  ni que una discapacidad intelectual. El niño aprende, juega y
                  se relaciona con normalidad: su dificultad está
                  específicamente en el lenguaje oral.
                </p>
              </div>
            </div>

            {/* Right: distinction cards */}
            <div className="space-y-4">
              {[
                {
                  title: "TEL no es discapacidad intelectual",
                  body: "Una dificultad del lenguaje no permite inferir por sí sola la capacidad intelectual de un niño o niña. Cada perfil es diferente y debe evaluarse de manera integral.",
                  color: "bg-surface-sunk border-accent/40",
                  icon: Brain,
                },
                {
                  title: "TEL no es autismo",
                  body: "TEL y autismo son condiciones diferentes, aunque algunas señales pueden parecerse y también pueden coexistir. Solo una evaluación profesional integral permite diferenciarlas.",
                  color: "bg-surface-sunk border-accent/40",
                  icon: Heart,
                },
                {
                  title: "TEL no desaparece sin apoyo",
                  body: "Las dificultades pueden evolucionar de maneras distintas. El apoyo oportuno busca favorecer la comunicación y reducir posibles impactos en el aprendizaje y la participación escolar.",
                  color: "bg-surface-sunk border-accent/40",
                  icon: AlertCircle,
                },
                {
                  title: "Intervención temprana: la clave",
                  body: "El cerebro preescolar tiene una plasticidad enorme. Comenzar la terapia entre los 3 y los 6 años maximiza las posibilidades de desarrollo del lenguaje.",
                  color: "bg-surface-sunk border-accent/40",
                  icon: Sparkles,
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className={`rounded-2xl border p-5 flex items-start gap-4 ${card.color}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center shrink-0">
                    <card.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-ink mb-1 text-base">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {card.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT DOES A LANGUAGE SCHOOL DO ── */}
        <section className="py-24 bg-primary-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-white text-xs font-semibold uppercase tracking-widest mb-4">
                  <Sparkles className="mr-1.5 h-3.5 w-3.5 text-action" />
                  El rol del establecimiento
                </span>
                <h2 className="font-extrabold text-white tracking-tight leading-[1.1] mb-5 text-3xl sm:text-4xl">
                  ¿Qué hace una escuela de lenguaje?
                </h2>
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  Una escuela de lenguaje no es solo un jardín infantil. Es un
                  establecimiento especializado que combina educación parvularia
                  con intervención fonoaudiológica diaria, diseñado
                  específicamente para niños con TEL.
                </p>
                <div className="p-5 rounded-2xl bg-white/10 border border-white/15 flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-action shrink-0 mt-0.5" />
                  <p className="text-white/90 leading-relaxed text-sm">
                    En Chile, las escuelas de lenguaje subvencionadas como Escuela Ruth funcionan con financiamiento estatal:{" "}
                    <strong className="text-accent-on-dark font-extrabold">
                      100% gratuita
                    </strong>{" "}
                    para las familias. No pagas matrícula ni mensualidad.
                  </p>
                </div>
              </div>

              <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-2xl border-4 border-white/20 shadow-2xl">
                <Image
                  src="/tel-fonoaudiologia.jpg"
                  alt="Sesión de estimulación del lenguaje con fonoaudióloga y niños preescolares"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-extrabold">
                  <span className="rounded-full bg-primary-dark/85 px-3 py-1.5 backdrop-blur-sm border border-white/20">
                    Acompañamiento especializado
                  </span>
                  <span className="rounded-full bg-action px-3 py-1.5 text-primary-dark shadow-xs">
                    Subvención MINEDUC
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {schoolFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white/10 border border-white/15 rounded-2xl p-7 hover:bg-white/15 transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-accent text-white flex items-center justify-center mb-5">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-extrabold text-white mb-3 leading-tight text-xl">
                    {feature.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AGE CALCULATOR ── */}
        <AgeCalculator />

        {/* ── ELIGIBILITY ── */}
        <section className="py-24 bg-paper border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-accent text-white font-semibold uppercase tracking-widest text-xs mb-5">
                Requisitos de ingreso
              </span>
              <h2 className="font-extrabold text-ink tracking-tight leading-tight mb-6 text-3xl sm:text-4xl">
                ¿Mi hijo puede ir a Escuela Ruth?
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                La Escuela de Lenguaje Ruth atiende a niños y niñas de{" "}
                <strong className="text-ink">3 a 5 años 11 meses</strong>
                {" "}
                con TEL u orientación de evaluación fonoaudiológica. El acceso
                es{" "}
                <strong className="text-ink">gratuito</strong>, sin mensualidad
                ni matrícula.
              </p>

              <ul className="space-y-4 mb-9">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-4 rounded-2xl bg-primary text-white font-extrabold hover:bg-primary-dark transition-colors"
                >
                  <MessageCircle className="mr-3 h-5 w-5" />
                  Consultar por WhatsApp
                </a>
                <Link
                  href="/admision"
                  className="inline-flex items-center justify-center px-7 py-4 rounded-2xl bg-surface text-primary-dark font-extrabold border border-border hover:-translate-y-0.5 transition-transform"
                >
                  Ver proceso de admisión
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Info card */}
            <div className="bg-surface rounded-2xl border border-border p-8 sm:p-10">
              <h3 className="font-extrabold text-ink mb-6 leading-tight text-xl">
                ¿No tienes diagnóstico todavía?
              </h3>
              <p className="text-muted leading-relaxed mb-6">
                Muchas familias llegan a nosotros sin informe fonoaudiológico.
                {" "}
                <strong className="text-ink">No es un obstáculo.</strong>
                {" "}
                Si sospechas que tu hijo(a) podría tener TEL, podemos:
              </p>
              <ol className="space-y-4 mb-7">
                {[
                  "Orientarte telefónicamente o por WhatsApp.",
                  "Realizar una evaluación inicial en la escuela sin costo.",
                  "Derivar o apoyar la obtención del informe diagnóstico.",
                  "Explicarte los pasos del proceso de matrícula.",
                ].map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-extrabold shrink-0 text-sm">
                      {index + 1}
                    </span>
                    <span className="text-muted leading-relaxed pt-0.5">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
              <div className="p-4 rounded-2xl bg-surface-sunk border border-border flex items-start gap-3">
                <Heart className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-muted leading-relaxed text-sm">
                  2 Sedes en Conchalí (Vascongados 4314 · Gral. Gambino 4613) —
                  {" "}
                  <a
                    href={siteConfig.contact.phone.href}
                    className="text-primary font-extrabold underline hover:text-primary-dark transition-colors"
                  >
                    {siteConfig.contact.phone.label}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection />
      </div>
    </>
  );
}
