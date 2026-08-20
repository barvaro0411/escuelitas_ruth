import Hero from "@/components/sections/Hero";
import EnrollmentPush from "@/components/sections/EnrollmentPush";
import AgeCalculator from "@/components/sections/AgeCalculator";
import HowWeWork from "@/components/sections/HowWeWork";
import ProgramsSummary from "@/components/sections/ProgramsSummary";
import SedesSelector from "@/components/sections/SedesSelector";
import FAQPreview from "@/components/sections/FAQPreview";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import { buildFaqJsonLd } from "@/lib/site";

const homeFaqs = [
  {
    q: "¿Qué es el TEL?",
    a: "Es una dificultad en el desarrollo del lenguaje que puede afectar la expresión, la comprensión o la construcción de frases en la etapa infantil.",
  },
  {
    q: "¿Qué documentos necesito para matricular?",
    a: "Principalmente el certificado de nacimiento para todo trámite. Si no cuentas con una evaluación fonoaudiológica previa, nosotros te orientamos y la realizamos en la escuela sin costo.",
  },
  {
    q: "¿Cuál es el costo?",
    a: "La escuela es 100% gratuita para las familias. No se cobra matrícula, mensualidades ni materiales de estudio, ya que cuenta con subvención estatal del MINEDUC.",
  },
];

export default function Home() {
  const faqJsonLd = buildFaqJsonLd(homeFaqs);

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <Hero />
      <EnrollmentPush />
      <AgeCalculator />
      <HowWeWork />
      <SedesSelector />
      <ProgramsSummary />
      <FAQPreview />
      <CTASection />
    </>
  );
}
