export type FamilyResource = {
  slug: string;
  title: string;
  description: string;
  category:
    | "Desarrollo del lenguaje"
    | "Juegos en casa"
    | "Conciencia fonológica"
    | "Orientación fonoaudiológica";
  readingTime: string;
  intro: string;
  sections: readonly {
    title: string;
    paragraphs: readonly string[];
    tips?: readonly string[];
  }[];
};

export const familyResources: FamilyResource[] = [
  {
    slug: "estimular-lenguaje-jugando",
    title: "¿Cómo acompañar el lenguaje jugando?",
    description:
      "Ideas cotidianas para conversar y compartir durante el juego sin convertirlo en una tarea.",
    category: "Juegos en casa",
    readingTime: "4 min",
    intro:
      "El juego ofrece oportunidades naturales para escuchar, turnarse y descubrir palabras. No se necesita material especial: lo más importante es compartir la atención y disfrutar la conversación.",
    sections: [
      {
        title: "Sigue su interés",
        paragraphs: [
          "Observa qué objeto o juego llama su atención y conversa desde ahí. Puedes nombrar lo que ocurre, describir acciones y dejar pausas para que tu hijo o hija participe a su manera.",
        ],
        tips: [
          "Describe con frases breves.",
          "Da tiempo para responder.",
          "Celebra el intento de comunicarse.",
        ],
      },
      {
        title: "Amplía sin corregir de forma constante",
        paragraphs: [
          "Si dice una palabra o una frase corta, puedes responder agregando una idea. Por ejemplo, ante “auto”, responder “sí, el auto rojo avanza”. El objetivo es ofrecer un modelo cercano y mantener el intercambio.",
        ],
      },
    ],
  },
  {
    slug: "cuando-consultar-fonoaudiologo",
    title: "¿Cuándo conversar con un fonoaudiólogo?",
    description:
      "Una orientación general para familias que tienen dudas sobre la comunicación de sus hijos.",
    category: "Orientación fonoaudiológica",
    readingTime: "3 min",
    intro:
      "Cada niño y niña se desarrolla a su propio ritmo. Si algo en su comunicación te preocupa, pedir orientación permite observar la situación con calma y recibir indicaciones acordes a su caso.",
    sections: [
      {
        title: "Tu inquietud también es una razón válida",
        paragraphs: [
          "Puedes consultar si notas dificultades persistentes para comprender, expresarse o participar en conversaciones, o si la comunicación genera frustración frecuente. Una orientación no equivale automáticamente a un diagnóstico.",
        ],
      },
      {
        title: "Qué llevar a la conversación",
        paragraphs: [
          "Comenta qué has observado, desde cuándo y en qué situaciones ocurre. La información de la familia ayuda a comprender el contexto completo.",
        ],
        tips: [
          "Anota ejemplos concretos.",
          "Incluye lo que tu hijo o hija sí logra hacer.",
          "Pregunta por los próximos pasos antes de tomar decisiones.",
        ],
      },
    ],
  },
  {
    slug: "conciencia-fonologica-en-casa",
    title: "¿Qué es la conciencia fonológica?",
    description:
      "Una explicación simple y juegos orales para acercarse a los sonidos del lenguaje.",
    category: "Conciencia fonológica",
    readingTime: "4 min",
    intro:
      "La conciencia fonológica es la capacidad de prestar atención a los sonidos de las palabras. Se puede explorar oralmente mediante rimas, canciones y juegos de sílabas.",
    sections: [
      {
        title: "Jugar con sonidos",
        paragraphs: [
          "Pueden buscar palabras que suenen parecido, acompañar las sílabas con palmas o reconocer el sonido inicial de nombres familiares. Mantén la actividad breve y entretenida.",
        ],
        tips: [
          "Usa nombres conocidos.",
          "Comienza con ejemplos sencillos.",
          "Detente si deja de ser entretenido.",
        ],
      },
      {
        title: "Acompañar, no evaluar",
        paragraphs: [
          "Estos juegos no reemplazan una evaluación ni deben utilizarse para diagnosticar. Si tienes dudas sobre el desarrollo del lenguaje, conversa con un profesional.",
        ],
      },
    ],
  },
];

export function getFamilyResource(slug: string) {
  return familyResources.find((resource) => resource.slug === slug);
}
