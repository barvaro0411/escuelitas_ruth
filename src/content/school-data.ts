export type CampusId = "vascongados" | "gambino";
export type LevelId = "medio-mayor" | "prekinder" | "kinder";
export type CampusGalleryImage = { src: string; alt: string; title: string };

export const admissionCutoff = {
  year: 2027,
  isoDate: "2027-03-31",
  label: "31 de marzo de 2027",
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
    rbd: "10375-6",
    mapHref: "https://www.google.com/maps/search/?api=1&query=Vascongados%204314%2C%20Conchal%C3%AD%2C%20Chile",
    geo: { latitude: -33.3934, longitude: -70.6695 },
    levelIds: ["medio-mayor", "prekinder", "kinder"],
    journeys: ["Mañana", "Tarde"],
    description: "Sede de Escuela de Lenguaje Ruth ubicada en Vascongados 4314, Conchalí.",
    gallery: [] as CampusGalleryImage[],
    media: { videoUrl: null as string | null, virtualTourUrl: null as string | null, panoramas: [] as CampusGalleryImage[] },
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
    rbd: "26106-8",
    mapHref: "https://www.google.com/maps/search/?api=1&query=Gral.%20Gambino%204613%2C%20Conchal%C3%AD%2C%20Chile",
    geo: { latitude: -33.3906, longitude: -70.6723 },
    levelIds: ["medio-mayor", "prekinder", "kinder"],
    journeys: ["Mañana", "Tarde"],
    description: "Sede de Escuela de Lenguaje Ruth ubicada en Gral. Gambino 4613, Conchalí.",
    gallery: [] as CampusGalleryImage[],
    media: { videoUrl: null as string | null, virtualTourUrl: null as string | null, panoramas: [] as CampusGalleryImage[] },
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
  media: { videoUrl: string | null; virtualTourUrl: string | null; panoramas: readonly CampusGalleryImage[] };
}>;

export function getCampusById(id: CampusId) {
  return campuses.find((campus) => campus.id === id);
}

export function getLevelById(id: LevelId) {
  return schoolLevels.find((level) => level.id === id);
}
