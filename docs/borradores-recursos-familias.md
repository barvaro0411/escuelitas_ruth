# Borradores de recursos para familias — pendientes de revisión clínica

Estos 3 artículos amplían la sección `/familias` para captar búsquedas de la
parte alta del embudo (hitos del lenguaje, mitos del TEL, evaluación
fonoaudiológica).

**No están publicados.** Según `docs/content-governance.md`, todo contenido
sobre TEL, edades, diagnóstico o intervención debe ser revisado por un/a
fonoaudiólogo/a habilitado/a antes de publicarse, y debe registrarse nombre,
cargo, fecha y fuentes.

## Cómo publicarlos una vez aprobados

Copiar cada objeto aprobado dentro del arreglo `familyResources` en
`src/content/family-resources.ts`. El sitemap, la generación estática y la
vista previa de `/familias` los toman automáticamente. Agregar sus slugs a la
lista de rutas de `tests/e2e/site.spec.ts`.

---

## 1. Hitos del lenguaje entre los 2 y los 5 años

```ts
{
  slug: "hitos-del-lenguaje-por-edad",
  title: "¿Qué se espera del lenguaje entre los 2 y los 5 años?",
  description:
    "Una referencia general de hitos del lenguaje infantil para observar con calma, no para diagnosticar.",
  category: "Desarrollo del lenguaje",
  readingTime: "5 min",
  intro:
    "Cada niño y niña avanza a su propio ritmo. Estos hitos son una referencia general y aproximada: sirven para observar el desarrollo con tranquilidad y, si algo llama tu atención de forma persistente, conversarlo con un profesional.",
  sections: [
    {
      title: "Alrededor de los 2 a 3 años",
      paragraphs: [
        "En esta etapa muchos niños combinan dos o tres palabras, nombran objetos y personas conocidas y empiezan a hacer preguntas simples. Es habitual que personas fuera de la familia todavía no entiendan todo lo que dicen.",
      ],
      tips: [
        "Suele aparecer el uso de \"no\", \"más\" y nombres de personas cercanas.",
        "Empiezan a seguir instrucciones de dos pasos sencillos.",
        "El vocabulario crece rápido, a veces palabra por palabra cada día.",
      ],
    },
    {
      title: "Alrededor de los 3 a 4 años",
      paragraphs: [
        "Aparecen frases más largas, relatos breves de lo que hicieron y preguntas frecuentes con \"por qué\". La mayoría de las personas cercanas comprende lo que dicen, aunque algunos sonidos todavía estén en proceso.",
      ],
      tips: [
        "Cuentan hechos simples del día.",
        "Usan plurales y algunos tiempos de verbo, con errores esperables.",
        "Mantienen una conversación corta por turnos.",
      ],
    },
    {
      title: "Alrededor de los 4 a 5 años",
      paragraphs: [
        "El lenguaje se vuelve más completo: explican, describen, anticipan y juegan con las palabras. Se entienden con facilidad y participan en conversaciones grupales.",
      ],
    },
    {
      title: "Cuándo conviene consultar",
      paragraphs: [
        "Si notas dificultades persistentes para comprender, para hacerse entender o para participar en conversaciones, o si la comunicación genera frustración frecuente, pedir una orientación permite observar la situación con calma. Una consulta no equivale a un diagnóstico.",
      ],
    },
  ],
}
```

Fuentes sugeridas para la revisión: material de referencia del MINSAL/MINEDUC
sobre desarrollo del lenguaje, guías de colegios de fonoaudiología.

---

## 2. Mitos frecuentes sobre el TEL

```ts
{
  slug: "mitos-sobre-el-tel",
  title: "5 mitos frecuentes sobre el Trastorno Específico del Lenguaje",
  description:
    "Aclaraciones generales sobre el TEL para familias que recién escuchan el término.",
  category: "Desarrollo del lenguaje",
  readingTime: "4 min",
  intro:
    "El Trastorno Específico del Lenguaje (TEL) es una dificultad en el desarrollo del lenguaje que no se explica por otras causas. Alrededor de él circulan ideas que conviene aclarar, siempre sin reemplazar la evaluación de un profesional.",
  sections: [
    {
      title: "\"Ya va a hablar solo, hay que esperar\"",
      paragraphs: [
        "Muchos niños con un inicio lento del lenguaje avanzan sin dificultades. En otros, las diferencias se mantienen. Consultar a tiempo no adelanta ningún problema: permite observar y, si corresponde, acompañar antes.",
      ],
    },
    {
      title: "\"El TEL es lo mismo que ser tímido o flojo\"",
      paragraphs: [
        "El TEL no depende del carácter ni del esfuerzo. Es una dificultad específica del desarrollo del lenguaje, y los niños que lo presentan suelen esforzarse mucho por comunicarse.",
      ],
    },
    {
      title: "\"Si entiende todo, no puede tener TEL\"",
      paragraphs: [
        "El lenguaje tiene una parte comprensiva y una expresiva. Un niño puede comprender bien y aun así tener dificultades para organizar frases o encontrar palabras, o al revés.",
      ],
    },
    {
      title: "\"Hablar dos idiomas en casa causa TEL\"",
      paragraphs: [
        "El bilingüismo no causa trastornos del lenguaje. Un niño con TEL tendrá dificultades en todas sus lenguas; el contexto bilingüe solo cambia la forma de evaluarlo.",
      ],
    },
    {
      title: "\"Con una escuela de lenguaje se cura para siempre\"",
      paragraphs: [
        "La escuela de lenguaje ofrece educación parvularia con apoyo fonoaudiológico intensivo durante los años en que más impacto tiene. Muchos niños superan las dificultades; otros siguen necesitando apoyos puntuales más adelante. El objetivo es dar las mejores herramientas en el momento oportuno.",
      ],
    },
  ],
}
```

---

## 3. Cómo es la evaluación fonoaudiológica

```ts
{
  slug: "como-es-la-evaluacion-fonoaudiologica",
  title: "¿Cómo es la evaluación fonoaudiológica de ingreso?",
  description:
    "Qué esperar de la evaluación de lenguaje: en qué consiste, cuánto dura y qué pasa después.",
  category: "Orientación fonoaudiológica",
  readingTime: "4 min",
  intro:
    "La evaluación fonoaudiológica es una instancia tranquila para conocer cómo se comunica tu hijo o hija. En la Escuela de Lenguaje Ruth se realiza sin costo para la familia y orienta la decisión de matrícula.",
  sections: [
    {
      title: "En qué consiste",
      paragraphs: [
        "La fonoaudióloga observa y juega con el niño o la niña para conocer cómo comprende el lenguaje, cómo se expresa, cómo pronuncia los sonidos y cómo construye frases. También conversa con la familia sobre el desarrollo y la vida cotidiana.",
      ],
      tips: [
        "Se hace jugando, sin pruebas médicas ni situaciones incómodas.",
        "Suele durar entre 30 y 45 minutos.",
        "Puedes acompañar a tu hijo o hija durante la evaluación.",
      ],
    },
    {
      title: "Qué llevar",
      paragraphs: [
        "Es útil llevar el certificado de nacimiento y, si existen, informes previos de fonoaudiología, controles de salud o de educación. Si no cuentas con ningún informe, no es impedimento: la escuela orienta el proceso.",
      ],
    },
    {
      title: "Qué pasa después",
      paragraphs: [
        "La fonoaudióloga explica lo observado y si corresponde el ingreso a la escuela de lenguaje según la edad y las características del lenguaje. Si corresponde, se coordina la matrícula; si no, se orienta sobre alternativas.",
      ],
    },
  ],
}
```
