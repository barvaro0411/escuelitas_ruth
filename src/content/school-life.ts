import type { CampusId } from "@/content/school-data";

export type WeeklyUpdate = {
  id: string;
  title: string;
  description?: string;
  icon: "book" | "music" | "palette" | "community" | "calendar";
  campusIds: readonly CampusId[] | "all";
  published: boolean;
};

export type SchoolCalendarEvent = {
  id: string;
  date: string;
  endDate?: string;
  title: string;
  description?: string;
  location?: string;
  campusIds: readonly CampusId[] | "all";
  published: boolean;
};

export type SchoolLifeEvent = {
  id: string;
  title: string;
  date: string;
  category:
    | "Actividades"
    | "Celebraciones"
    | "Talleres"
    | "Proyectos"
    | "Comunidad";
  summary: string;
  campusIds: readonly CampusId[] | "all";
  images: readonly { src: string; alt: string }[];
  published: boolean;
};

export type AnnualPlanUnit = {
  id: string;
  month: string;
  unitTitle: string;
  badge: string;
  generalObjective: string;
  objectivesByLevel: {
    medioMayor: string[];
    prekinder: string[];
    kinder: string[];
  };
  highlights: string[];
  efemerides: string[];
  accentColor: {
    badge: string;
    border: string;
    header: string;
    iconBg: string;
  };
};

export const weeklyUpdates: WeeklyUpdate[] = [];

// Fechas oficiales del Plan Anual de Escuela de Lenguaje Ruth para la comunidad escolar.
export const calendarEvents: SchoolCalendarEvent[] = [
  {
    id: "fonoaudiologia-inicio",
    date: "2026-04-01",
    title: "Inicio de Terapias Fonoaudiológicas",
    description:
      "Inicio oficial de sesiones fonoaudiológicas individuales y grupales para todos los párvulos de ambas sedes.",
    campusIds: "all",
    published: true,
  },
  {
    id: "dia-del-libro",
    date: "2026-04-23",
    title: "Día del Libro y la Literatura Infantil",
    description:
      "Jornada de cuentacuentos interactivos y fomento de la expresión oral a través de historias familiares.",
    campusIds: "all",
    published: true,
  },
  {
    id: "dia-de-la-madre",
    date: "2026-05-08",
    title: "Celebración del Día de las Madres",
    description:
      "Actividad comunitaria de homenaje y expresión de afecto preparada por los niños de cada sala.",
    campusIds: "all",
    published: true,
  },
  {
    id: "vacaciones-invierno",
    date: "2026-06-17",
    endDate: "2026-07-03",
    title: "Vacaciones de Invierno",
    description:
      "Receso escolar de invierno para los párvulos. Retorno a clases el lunes 6 de julio.",
    campusIds: "all",
    published: true,
  },
  {
    id: "dia-del-nino",
    date: "2026-08-08",
    title: "Celebración del Día de la Niñez",
    description:
      "Jornada festiva con juegos lúdicos, títeres y actividades recreativas en patio techado.",
    campusIds: "all",
    published: true,
  },
  {
    id: "fiestas-patrias-juegos",
    date: "2026-09-08",
    title: "Muestra de Juegos Típicos Chilenos",
    description:
      "Circuito de juegos criollos adaptados para párvulos: rayuela infantil, emboque y carreras en patio techado.",
    campusIds: "all",
    published: true,
  },
  {
    id: "fiestas-patrias-comidas",
    date: "2026-09-10",
    title: "Muestra y Degustación de Comidas Típicas",
    description:
      "Convivencia saludable de tradiciones chilenas compartida en sala con las educadoras y tías.",
    campusIds: "all",
    published: true,
  },
  {
    id: "fiestas-patrias-acto",
    date: "2026-09-15",
    title: "Acto Oficial de Fiestas Patrias",
    description:
      "Presentación folclórica comunitaria con trajes típicos, bailes infantiles y celebración chilena.",
    campusIds: "all",
    published: true,
  },
  {
    id: "dia-del-profesor",
    date: "2026-10-16",
    title: "Día del Profesor y Educador/a",
    description:
      "Homenaje a nuestras educadoras diferenciales y fonoaudiólogas por su vocación y cariño.",
    campusIds: "all",
    published: true,
  },
  {
    id: "cierre-animales",
    date: "2026-10-30",
    title: "Cierre de Proyecto: Los Animales",
    description:
      "Muestra interactiva de hábitats y aprendizajes sobre animales domésticos y salvajes.",
    campusIds: "all",
    published: true,
  },
  {
    id: "cierre-transportes",
    date: "2026-11-27",
    title: "Cierre de Proyecto: Medios de Transporte",
    description:
      "Muestra de maquetas, circuitos de seguridad vial y vocabulario de vías terrestres, aéreas y marítimas.",
    campusIds: "all",
    published: true,
  },
  {
    id: "fiesta-fin-de-ano",
    date: "2026-12-15",
    title: "Fiesta de Fin de Año Escolar",
    description:
      "Convivencia festiva y recreativa para despedir el año escolar con juegos y sorpresas.",
    campusIds: "all",
    published: true,
  },
  {
    id: "bailes-de-navidad",
    date: "2026-12-16",
    title: "Muestra de Bailes de Navidad",
    description:
      "Presentación de villancicos, coreografías y canciones navideñas preparadas por cada curso.",
    campusIds: "all",
    published: true,
  },
  {
    id: "graduacion-kinder",
    date: "2026-12-18",
    title: "Graduación de Kínder y Término de Año",
    description:
      "Solemne ceremonia de licenciatura para los párvulos de Kínder que pasan a 1° Básico con alta fonoaudiológica.",
    campusIds: "all",
    published: true,
  },
];

export const schoolLifeEvents: SchoolLifeEvent[] = [];

// Las 10 Unidades Temáticas Oficiales de la Escuela de Lenguaje Ruth (Marzo a Diciembre)
export const annualPlanUnits: AnnualPlanUnit[] = [
  {
    id: "marzo",
    month: "Marzo",
    unitTitle: "La escuela, sus espacios, mi cuerpo y mis sentidos",
    badge: "Acogida y Diagnóstico",
    generalObjective:
      "Favorecer el desarrollo integral mediante la exploración activa de la escuela, reconocimiento del propio cuerpo, estimulación sensorial y fortalecimiento de habilidades comunicativas y de autonomía.",
    objectivesByLevel: {
      medioMayor: [
        "Comprender rutinas escolares y horarios de la sala.",
        "Ampliar vocabulario de objetos, materiales y lugares de la escuela.",
        "Nombrar partes del cuerpo y reconocer funciones básicas.",
      ],
      prekinder: [
        "Describir funciones de los distintos espacios escolares.",
        "Expresar necesidades personales usando lenguaje claro y oraciones.",
        "Describir sensaciones y percepciones sensoriales usando adjetivos.",
      ],
      kinder: [
        "Relatar experiencias relacionadas con la vida en la escuela.",
        "Producir oraciones estructuradas, coherentes y fluidas.",
        "Explicar funciones, cuidados e higiene del cuerpo humano.",
      ],
    },
    highlights: [
      "Período de adaptación afectuosa",
      "Evaluaciones de ingreso e informes fonoaudiológicos",
      "Viernes 27 de marzo: Cierre de proyecto inicial",
    ],
    efemerides: [
      "8 mar: Día Internacional de la Mujer",
      "21 mar: Día Mundial del Síndrome de Down",
      "22 mar: Día Mundial del Agua",
    ],
    accentColor: {
      badge: "bg-sky-100 text-sky-800 border-sky-300",
      border: "border-sky-300/80 hover:border-sky-400",
      header: "from-sky-500 to-cyan-400",
      iconBg: "bg-sky-100 text-primary",
    },
  },
  {
    id: "abril",
    month: "Abril",
    unitTitle: "Los alimentos (frutas y verduras) y hábitos saludables",
    badge: "¡Inicio de Fonoaudiología!",
    generalObjective:
      "Promover el reconocimiento y valoración de alimentos saludables a través de experiencias sensoriales y comunicativas, fortaleciendo la autonomía y hábitos de vida sana.",
    objectivesByLevel: {
      medioMayor: [
        "Nombrar alimentos comunes y distinguir frutas y verduras básicas.",
        "Identificar sabores y colores de colaciones saludables.",
        "Aprender rutinas de higiene previas a la comida.",
      ],
      prekinder: [
        "Clasificar alimentos por categorías (frutas, verduras, lácteos).",
        "Formular oraciones para expresar preferencias de alimentos.",
        "Describir texturas, olores y sabores con vocabulario enriquecido.",
      ],
      kinder: [
        "Explicar beneficios de la alimentación sana para el crecimiento.",
        "Comprender la importancia del consumo de agua y actividad física.",
        "Construir diálogos sobre hábitos de autocuidado en el hogar.",
      ],
    },
    highlights: [
      "Miércoles 01 de abril: Inicio de terapias fonoaudiológicas",
      "Semana del 13 al 17 de abril: Primera reunión de apoderados",
      "Jueves 30 de abril: Cierre del proyecto de alimentos",
    ],
    efemerides: [
      "2 abr: Día Mundial de Concienciación sobre el Autismo",
      "6 abr: Día de la Actividad Física",
      "23 abr: Día Mundial del Libro",
    ],
    accentColor: {
      badge: "bg-emerald-100 text-emerald-800 border-emerald-300",
      border: "border-emerald-300/80 hover:border-emerald-400",
      header: "from-emerald-500 to-teal-400",
      iconBg: "bg-emerald-100 text-emerald-800",
    },
  },
  {
    id: "mayo",
    month: "Mayo",
    unitTitle: "El mundo submarino",
    badge: "Día de la Madre",
    generalObjective:
      "Explorar la vida marina, reconociendo especies, plantas y características del océano para despertar la curiosidad científica, expandir el léxico y la comprensión del entorno natural.",
    objectivesByLevel: {
      medioMayor: [
        "Identificar y nombrar animales marinos comunes (pez, ballena, pulpo).",
        "Imitar movimientos y sonidos asociados al agua y animales.",
        "Usar conceptos espaciales básicos (arriba / abajo del mar).",
      ],
      prekinder: [
        "Describir características físicas de especies marinas (color, tamaño, aletas).",
        "Comparar animales según su forma de desplazamiento en el agua.",
        "Responder preguntas '¿qué?', '¿dónde?' y '¿cómo?' sobre cuentos del mar.",
      ],
      kinder: [
        "Explicar hábitats y relaciones elementales del ecosistema marino.",
        "Crear relatos coherentes sobre aventuras y expediciones submarinas.",
        "Reflexionar sobre el cuidado de las playas y la no contaminación.",
      ],
    },
    highlights: [
      "Viernes 8 de mayo: Celebración comunitaria del Día de las Madres",
      "25 de mayo al 05 de junio: Pruebas pedagógicas semestrales",
      "Lunes 01 de junio: Cierre de proyecto submarino",
    ],
    efemerides: [
      "1 may: Día del Trabajador",
      "10 may: Día de las Madres",
      "11 may: Día del Estudiante",
      "21 may: Día de las Glorias Navales",
    ],
    accentColor: {
      badge: "bg-blue-100 text-blue-800 border-blue-300",
      border: "border-blue-300/80 hover:border-blue-400",
      header: "from-blue-600 to-cyan-500",
      iconBg: "bg-blue-100 text-blue-800",
    },
  },
  {
    id: "junio",
    month: "Junio",
    unitTitle: "La naturaleza, las estaciones del año y el clima",
    badge: "Invierno y Medio Ambiente",
    generalObjective:
      "Explorar los ciclos de las estaciones y los fenómenos climáticos, promoviendo la observación del entorno, el enriquecimiento del vocabulario ambiental y la valoración de los pueblos originarios.",
    objectivesByLevel: {
      medioMayor: [
        "Reconocer elementos del clima cotidiano (sol, lluvia, viento, frío).",
        "Observar hojas, ramas y elementos naturales de la estación.",
        "Aprender vocabulario de prendas de vestir para abrigarse.",
      ],
      prekinder: [
        "Describir características principales de cada estación del año.",
        "Describir cambios de temperatura y clima usando oraciones simples.",
        "Asociar el clima con actividades cotidianas y vestimenta adecuada.",
      ],
      kinder: [
        "Explicar procesos simples de la naturaleza (germinación, caída de hojas).",
        "Explicar causas y consecuencias del frío y la lluvia en las personas.",
        "Valorar la relación de respeto con la tierra de los pueblos indígenas.",
      ],
    },
    highlights: [
      "17 de junio al 03 de julio: Vacaciones de invierno",
      "Entrega de informes pedagógicos y PEI fonoaudiológicos semestrales",
    ],
    efemerides: [
      "5 jun: Día Mundial del Medio Ambiente",
      "12 jun: Día contra el Trabajo Infantil",
      "24 jun: Día de los Pueblos Indígenas (We Tripantu)",
    ],
    accentColor: {
      badge: "bg-teal-100 text-teal-800 border-teal-300",
      border: "border-teal-300/80 hover:border-teal-400",
      header: "from-teal-500 to-emerald-400",
      iconBg: "bg-teal-100 text-teal-800",
    },
  },
  {
    id: "julio",
    month: "Julio",
    unitTitle: "Las emociones y la convivencia escolar",
    badge: "Educación Emocional",
    generalObjective:
      "Fortalecer el desarrollo socioemocional mediante el reconocimiento, expresión y autorregulación de emociones, fomentando la empatía, el buen trato y la resolución dialógica de conflictos.",
    objectivesByLevel: {
      medioMayor: [
        "Reconocer emociones básicas en sí mismo y en sus pares (alegría, pena, enojo).",
        "Nombrar caritas de emociones en el panel diario de la sala.",
        "Practicar palabras mágicas de convivencia: 'por favor' y 'gracias'.",
      ],
      prekinder: [
        "Expresar verbalmente cómo se siente utilizando vocabulario emocional adecuado.",
        "Escuchar y validar los sentimientos de sus compañeros durante el juego.",
        "Describir situaciones que le provocan alegría, calma o frustración.",
      ],
      kinder: [
        "Resolver pequeños desacuerdos mediante el diálogo mediado y turnos.",
        "Proponer acuerdos de curso para el cuidado mutuo y la inclusión.",
        "Identificar estrategias para volver a la calma (respiración, hablar).",
      ],
    },
    highlights: [
      "Retorno de vacaciones de invierno con círculos de confianza",
      "Semana del 06 al 10 de julio: Lectura de informes y FUDEI",
      "Viernes 31 de julio: Cierre de proyecto de emociones",
    ],
    efemerides: ["Celebración del valor de la amistad y el buen trato"],
    accentColor: {
      badge: "bg-purple-100 text-purple-800 border-purple-300",
      border: "border-purple-300/80 hover:border-purple-400",
      header: "from-purple-500 to-pink-400",
      iconBg: "bg-purple-100 text-purple-700",
    },
  },
  {
    id: "agosto",
    month: "Agosto",
    unitTitle: "Las profesiones y oficios de nuestra comunidad",
    badge: "Día de la Niñez",
    generalObjective:
      "Explorar labores, herramientas y oficios de la comunidad (bomberos, médicos, constructores, docentes), enriqueciendo la comprensión social, el vocabulario técnico y el juego de roles.",
    objectivesByLevel: {
      medioMayor: [
        "Identificar y nombrar oficios conocidos (doctor/a, carabinero/a, bombero/a).",
        "Jugar a disfrazarse e imitar acciones de distintas profesiones.",
        "Reconocer vehículos de emergencia por su sirena y color.",
      ],
      prekinder: [
        "Describir funciones de oficios y las herramientas que utiliza cada uno.",
        "Explicar qué labor le gustaría realizar cuando sea grande.",
        "Elaborar oraciones con nexo causal ('El doctor cura porque sabe medicina').",
      ],
      kinder: [
        "Relatar experiencias reales de visitas al consultorio o bomberos.",
        "Debatir sobre la importancia de todos los trabajos en el barrio.",
        "Construir entrevistas y diálogos estructurados en juego de roles.",
      ],
    },
    highlights: [
      "Sábado 08 de agosto: Celebración del Día de la Niñez",
      "Semana del 17 al 22 de agosto: Reunión de apoderados",
      "Viernes 28 de agosto: Cierre de proyecto con desfile de oficios",
    ],
    efemerides: [
      "8 ago: Día de la Niñez",
      "9 ago: Día Internacional de los Pueblos Indígenas",
      "12 ago: Día Internacional de la Juventud",
    ],
    accentColor: {
      badge: "bg-amber-100 text-amber-900 border-amber-300",
      border: "border-amber-300/80 hover:border-amber-400",
      header: "from-amber-500 to-yellow-400",
      iconBg: "bg-amber-100 text-amber-800",
    },
  },
  {
    id: "septiembre",
    month: "Septiembre",
    unitTitle: "Tradiciones y festividades chilenas",
    badge: "¡Tiki Tiki Tiii!",
    generalObjective:
      "Vivenciar la identidad y cultura chilena a través de la música folclórica, danzas infantiles, leyendas, comidas tradicionales y juegos criollos adaptados en un ambiente festivo y familiar.",
    objectivesByLevel: {
      medioMayor: [
        "Identificar símbolos patrios simples (bandera, copihue, volantín).",
        "Participar en rondas y bailes tradicionales guiados.",
        "Nombrar comidas y juegos chilenos (empanaditas, emboque).",
      ],
      prekinder: [
        "Describir costumbres familiares y actividades de Fiestas Patrias.",
        "Cantar versos, rimas y canciones con ritmo folclórico.",
        "Explicar reglas sencillas de juegos criollos (rayuela, tirar la cuerda).",
      ],
      kinder: [
        "Relatar el significado de la independencia y fiestas patrias con secuencia.",
        "Interpretar bailes folclóricos con coordinación rítmica y entusiasmo.",
        "Describir la diversidad geográfica y cultural de las zonas de Chile.",
      ],
    },
    highlights: [
      "Martes 8 de septiembre: Juegos típicos chilenos",
      "Jueves 10 de septiembre: Muestra de comidas típicas",
      "Martes 15 de septiembre: Gran Acto Oficial de Fiestas Patrias",
      "Semana del 21 al 25 de septiembre: Informes PEI fonoaudiológicos",
    ],
    efemerides: [
      "11 sept: Día de la Memoria y la Democracia",
      "18 sept: Día de la Independencia Nacional",
      "19 sept: Día de las Glorias del Ejército",
    ],
    accentColor: {
      badge: "bg-red-100 text-red-800 border-red-300",
      border: "border-red-300/80 hover:border-red-400",
      header: "from-red-600 to-rose-400",
      iconBg: "bg-red-100 text-red-700",
    },
  },
  {
    id: "octubre",
    month: "Octubre",
    unitTitle: "Los animales y sus hábitats",
    badge: "Reevaluaciones Fonoaudiológicas",
    generalObjective:
      "Explorar la diversidad del reino animal (domésticos, granja y salvajes), reconociendo sus hábitats, desplazamiento y sonidos onomatopéyicos como herramienta de articulación fonoaudiológica.",
    objectivesByLevel: {
      medioMayor: [
        "Diferenciar animales domésticos (mascotas) y animales salvajes.",
        "Reproducir onomatopeyas y sonidos de animales para soltar fonemas.",
        "Identificar partes del cuerpo de los animales (patas, cola, pico).",
      ],
      prekinder: [
        "Describir características físicas (pelaje, plumas, escamas, tamaño).",
        "Clasificar animales según su forma de desplazamiento (vuelan, nadan, caminan).",
        "Responder adivinanzas sencillas sobre animales utilizando pistas orales.",
      ],
      kinder: [
        "Explicar hábitats (selva, desierto, bosque, polo) y tipos de alimentación.",
        "Construir historias colaborativas con animales como protagonistas.",
        "Concientizar sobre el respeto a la vida animal y especies en extinción.",
      ],
    },
    highlights: [
      "Octubre: Comienzo de reevaluaciones fonoaudiológicas anuales",
      "Viernes 16 de octubre: Celebración del Día del Profesor/a",
      "Viernes 30 de octubre: Cierre de proyecto 'Los Animales'",
    ],
    efemerides: [
      "12 oct: Encuentro de Dos Mundos",
      "16 oct: Día del Profesor y la Educadora",
    ],
    accentColor: {
      badge: "bg-emerald-100 text-emerald-900 border-emerald-300",
      border: "border-emerald-300/80 hover:border-emerald-400",
      header: "from-emerald-600 to-teal-500",
      iconBg: "bg-emerald-100 text-emerald-800",
    },
  },
  {
    id: "noviembre",
    month: "Noviembre",
    unitTitle: "Medios de transporte y seguridad vial",
    badge: "Educación Vial",
    generalObjective:
      "Reconocer características, funciones y vías de los medios de transporte (terrestres, aéreos, marítimos), promoviendo la orientación espacial, léxico técnico y conductas básicas de seguridad vial.",
    objectivesByLevel: {
      medioMayor: [
        "Reconocer y nombrar transportes comunes (auto, micro, tren, avión).",
        "Imitar sonidos y trayectorias con carritos y pistas en la sala.",
        "Reconocer el semáforo y qué significa el color rojo y verde.",
      ],
      prekinder: [
        "Clasificar medios de transporte según la vía por donde viajan.",
        "Describir para qué sirve cada transporte (carga, pasajeros, emergencias).",
        "Practicar normas de peatón: mirar a ambos lados antes de cruzar.",
      ],
      kinder: [
        "Explicar normas de seguridad vial (cinturón de seguridad, uso de casco).",
        "Elaborar mapas simples de rutas y desplazamientos por la ciudad.",
        "Discutir el impacto del transporte en el medioambiente y uso de bicicletas.",
      ],
    },
    highlights: [
      "Semana del 09 al 13 de noviembre: Pruebas pedagógicas de cierre",
      "Semana del 23 al 27 de noviembre: Evaluaciones fonoaudiológicas finales",
      "Viernes 27 de noviembre: Cierre de proyecto 'Medios de Transporte'",
    ],
    efemerides: [
      "Semana de la Educación Parvularia y fonoaudiología en el juego",
    ],
    accentColor: {
      badge: "bg-orange-100 text-orange-900 border-orange-300",
      border: "border-orange-300/80 hover:border-orange-400",
      header: "from-orange-500 to-amber-400",
      iconBg: "bg-orange-100 text-orange-800",
    },
  },
  {
    id: "diciembre",
    month: "Diciembre",
    unitTitle: "Nuestra Navidad y Cierre de Año",
    badge: "Graduación Kínder",
    generalObjective:
      "Celebrar las tradiciones navideñas mediante relatos, canciones y villancicos, promoviendo el valor de compartir, la amistad y culminando con la licenciatura de los niños y niñas de Kínder.",
    objectivesByLevel: {
      medioMayor: [
        "Ampliar vocabulario navideño (árbol, luces, regalo, pesebre, estrellas).",
        "Escuchar relatos breves navideños y responder preguntas simples.",
        "Identificar y expresar emociones y deseos relacionados con la celebración.",
      ],
      prekinder: [
        "Describir elementos y situaciones navideñas utilizando oraciones simples.",
        "Relatar partes de cuentos navideños apoyándose en láminas visuales.",
        "Participar en conversaciones grupales expresando vivencias familiares.",
      ],
      kinder: [
        "Narrar experiencias personales de Navidad con secuencias temporales.",
        "Incorporar vocabulario nuevo y entonación en poemas y villancicos.",
        "Reflexionar sobre el sentido de compartir, la solidaridad y la amistad.",
      ],
    },
    highlights: [
      "Martes 15 de diciembre: Fiesta de Fin de Año Escolar",
      "Miércoles 16 de diciembre: Muestra de Bailes de Navidad",
      "Viernes 18 de diciembre: Graduación de Kínder y Término de Año",
    ],
    efemerides: [
      "3 dic: Día Internacional de las Personas con Discapacidad",
      "10 dic: Día de los Derechos Humanos",
    ],
    accentColor: {
      badge: "bg-rose-100 text-rose-900 border-rose-300",
      border: "border-rose-300/80 hover:border-rose-400",
      header: "from-rose-600 to-pink-500",
      iconBg: "bg-rose-100 text-rose-800",
    },
  },
];
