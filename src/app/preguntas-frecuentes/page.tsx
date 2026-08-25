import type { Metadata } from "next";
import FAQClient, { type FAQCategory } from "@/components/sections/FAQClient";
import JsonLd from "@/components/seo/JsonLd";
import { buildFaqJsonLd, buildBreadcrumbsJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes sobre TEL y Matrículas Gratuitas",
  description:
    "Respuestas a las dudas más comunes sobre qué es el TEL, gratuidad escolar, requisitos de edad y evaluación fonoaudiológica en Escuela de Lenguaje Ruth.",
  alternates: {
    canonical: "/preguntas-frecuentes",
  },
  openGraph: {
    title: "Preguntas Frecuentes | Escuela de Lenguaje Ruth",
    description:
      "Resuelve tus dudas sobre evaluación fonoaudiológica sin costo, gratuidad, edades y proceso de matrícula 2027 en Conchalí.",
    url: "/preguntas-frecuentes",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Preguntas Frecuentes Escuela de Lenguaje Ruth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preguntas Frecuentes | Escuela de Lenguaje Ruth",
    description: "Dudas sobre TEL, gratuidad y matrículas 2027 en Conchalí.",
    images: ["/og-image.jpg"],
  },
};

const faqsData: FAQCategory[] = [
  {
    category: "Sobre el TEL",
    bg: "bg-primary",
    color: "text-primary",
    questions: [
      {
        q: "¿Qué es el Trastorno Específico del Lenguaje (TEL)?",
        a: "Es una dificultad en el desarrollo del lenguaje que no tiene una causa médica evidente. Afecta la capacidad del niño para hablar, comprender o estructurar frases de acuerdo a su edad.",
      },
      {
        q: "¿Cómo sé si mi hijo necesita una escuela de lenguaje?",
        a: "Si nota que su hijo tiene dificultades para hacerse entender, usa pocas palabras, no arma frases simples a los 3 años, o parece no comprender instrucciones sencillas, es recomendable una evaluación.",
      },
      {
        q: "¿El TEL se cura?",
        a: "La evolución varía en cada niño o niña. Una evaluación profesional y el apoyo oportuno pueden favorecer significativamente su comunicación y aprendizaje; el equipo tratante debe orientar las expectativas de cada caso.",
      },
    ],
  },
  {
    category: "Admisión y Costos",
    bg: "bg-surface-sunk",
    color: "text-accent",
    questions: [
      {
        q: "¿Cuál es el costo de la matrícula y mensualidad?",
        a: "La Escuela de Lenguaje Ruth es 100% gratuita para las familias. No se cobra matrícula, colegiatura, mensualidad ni costo por materiales escolares.",
      },
      {
        q: "¿Qué edades reciben?",
        a: "Recibimos niños desde los 3 años hasta los 5 años 11 meses (cumplidos al 31 de marzo del año escolar). Niveles: Medio Mayor, Pre-Kínder y Kínder.",
      },
      {
        q: "¿Cuándo se abren las matrículas?",
        a: "El proceso principal comienza en octubre/noviembre de cada año, pero recibimos consultas y matriculamos durante todo el año si existen cupos disponibles.",
      },
    ],
  },
  {
    category: "Funcionamiento",
    bg: "bg-surface-sunk",
    color: "text-accent",
    questions: [
      {
        q: "¿Cuál es el horario de clases?",
        a: "Contamos con jornada de mañana de 08:15 a 12:15 y jornada de tarde de 13:30 a 17:15, de lunes a viernes.",
      },
      {
        q: "¿Cómo es el trabajo con fonoaudiología?",
        a: "Los niños tienen sesiones de terapia fonoaudiológica semanal, tanto individual como grupal dentro de la sala de clases, coordinada directamente con la educadora diferencial.",
      },
    ],
  },
];

export default function FAQPage() {
  const allFlatQuestions = faqsData.flatMap((cat) => cat.questions);
  const faqJsonLd = buildFaqJsonLd(allFlatQuestions);
  const breadcrumbsJsonLd = buildBreadcrumbsJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Preguntas Frecuentes", url: "/preguntas-frecuentes" },
  ]);

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbsJsonLd} />
      <FAQClient faqs={faqsData} />
    </>
  );
}
