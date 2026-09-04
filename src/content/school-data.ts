export type CampusId = "vascongados" | "gambino";
export type LevelId = "medio-mayor" | "prekinder" | "kinder";
export type CampusGalleryImage = { src: string; alt: string; title: string };

export const vascongadosGallery = [
  {
    src: "/vascongados-fachada.jpeg",
    alt: "Fachada principal de la Escuela Vascongados en Conchalí",
    title: "Fachada principal",
  },
  {
    src: "/vascongados-acceso.jpeg",
    alt: "Acceso de la Escuela Vascongados con su reja azul y amarilla",
    title: "Acceso de la sede",
  },
  {
    src: "/vascongados-casa-de-juegos.jpeg",
    alt: "Casa de juegos infantil en el patio de la sede Vascongados",
    title: "Casa de juegos",
  },
  {
    src: "/vascongados-patio-juegos.jpeg",
    alt: "Patio de juegos de la sede Vascongados con un trampolín infantil",
    title: "Patio de juegos",
  },
  {
    src: "/vascongados-patio-techado.jpeg",
    alt: "Patio techado y espacios de juego de la sede Vascongados",
    title: "Patio techado",
  },
] as const satisfies readonly CampusGalleryImage[];

export const gambinoGallery = [
  {
    src: "/gambino-fachada.jpeg",
    alt: "Fachada principal de la Escuela General Gambino en Conchalí",
    title: "Fachada principal",
  },
  {
    src: "/gambino-acceso.jpeg",
    alt: "Acceso y frontis de la sede General Gambino con información de matrículas",
    title: "Acceso y frontis",
  },
  {
    src: "/gambino-casa-de-juegos.jpeg",
    alt: "Casa de juegos infantil y patio techado en la sede General Gambino",
    title: "Casa de juegos",
  },
  {
    src: "/gambino-patio-techado.jpeg",
    alt: "Patio techado y pasillo de juegos en la sede General Gambino",
    title: "Patio techado",
  },
  {
    src: "/gambino-exterior.jpeg",
    alt: "Vista frontal exterior de la sede General Gambino",
    title: "Frontis exterior",
  },
] as const satisfies readonly CampusGalleryImage[];

export const admissionCutoff = {
  year: 2027,
  isoDate: "2027-03-31",
  label: "31 de marzo de 2027",
} as const;

export const birthdateInputBounds = {
  min: `${admissionCutoff.year - 8}-01-01`,
  max: admissionCutoff.isoDate,
} as const;

export const schoolLevels = [
  {
    id: "medio-mayor",
    name: "Medio Mayor",
    ageYears: 3,
    campusIds: ["vascongados", "gambino"],
    journeys: ["Mañana", "Tarde"],
  },
  {
    id: "prekinder",
    name: "Pre-Kínder (NT1)",
    ageYears: 4,
    campusIds: ["vascongados", "gambino"],
    journeys: ["Mañana", "Tarde"],
  },
  {
    id: "kinder",
    name: "Kínder (NT2)",
    ageYears: 5,
    campusIds: ["vascongados", "gambino"],
    journeys: ["Mañana", "Tarde"],
  },
] as const satisfies ReadonlyArray<{
  id: LevelId;
  name: string;
  ageYears: number;
  campusIds: readonly CampusId[];
  journeys: readonly string[];
}>;

export const campuses = [
  {
    id: "vascongados",
    slug: "vascongados",
    name: "Escuela Vascongados",
    shortName: "Vascongados",
    address: "Vascongados 4314, Conchalí",
    street: "Vascongados 4314",
    locality: "Conchalí",
    region: "Región Metropolitana",
    country: "CL",
    postalCode: "8540000",
    rbd: "26106-8",
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=Vascongados%204314%2C%20Conchal%C3%AD%2C%20Chile",
    geo: { latitude: -33.3934, longitude: -70.6695 },
    levelIds: ["medio-mayor", "prekinder", "kinder"],
    journeys: ["Mañana", "Tarde"],
    description:
      "Sede de Escuela de Lenguaje Ruth ubicada en Vascongados 4314, Conchalí.",
    gallery: vascongadosGallery,
    media: {
      videoUrl: null as string | null,
      virtualTourUrl: null as string | null,
      panoramas: [] as CampusGalleryImage[],
    },
  },
  {
    id: "gambino",
    slug: "general-gambino",
    name: "Escuela Gral. Gambino",
    shortName: "Gral. Gambino",
    address: "Gral. Gambino 4613, Conchalí",
    street: "Gral. Gambino 4613",
    locality: "Conchalí",
    region: "Región Metropolitana",
    country: "CL",
    postalCode: "8540000",
    rbd: "10375-6",
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=Gral.%20Gambino%204613%2C%20Conchal%C3%AD%2C%20Chile",
    geo: { latitude: -33.3906, longitude: -70.6723 },
    levelIds: ["medio-mayor", "prekinder", "kinder"],
    journeys: ["Mañana", "Tarde"],
    description:
      "Sede de Escuela de Lenguaje Ruth ubicada en Gral. Gambino 4613, Conchalí.",
    gallery: gambinoGallery,
    media: {
      videoUrl: null as string | null,
      virtualTourUrl: null as string | null,
      panoramas: [] as CampusGalleryImage[],
    },
  },
] as const satisfies ReadonlyArray<{
  id: CampusId;
  slug: string;
  name: string;
  shortName: string;
  address: string;
  street: string;
  locality: string;
  region: string;
  country: string;
  postalCode: string;
  rbd: string;
  mapHref: string;
  geo: { latitude: number; longitude: number };
  levelIds: readonly LevelId[];
  journeys: readonly string[];
  description: string;
  gallery: readonly CampusGalleryImage[];
  media: {
    videoUrl: string | null;
    virtualTourUrl: string | null;
    panoramas: readonly CampusGalleryImage[];
  };
}>;

export function getCampusById(id: CampusId) {
  return campuses.find((campus) => campus.id === id);
}

export function getLevelById(id: LevelId) {
  return schoolLevels.find((level) => level.id === id);
}
