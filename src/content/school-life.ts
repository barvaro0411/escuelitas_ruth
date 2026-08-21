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
  category: "Actividades" | "Celebraciones" | "Talleres" | "Proyectos" | "Comunidad";
  summary: string;
  campusIds: readonly CampusId[] | "all";
  images: readonly { src: string; alt: string }[];
  published: boolean;
};

// Agrega aquí entre 2 y 5 novedades confirmadas. Los elementos con
// published: false permanecen fuera de producción.
export const weeklyUpdates: WeeklyUpdate[] = [];

// Fechas ISO (AAAA-MM-DD). Los eventos pasados se ocultan automáticamente.
export const calendarEvents: SchoolCalendarEvent[] = [];

// Actividades reales con fotografías autorizadas. No se publican placeholders.
export const schoolLifeEvents: SchoolLifeEvent[] = [];
