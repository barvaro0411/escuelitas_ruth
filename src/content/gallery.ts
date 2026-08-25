export type GalleryCategory =
  | "Equipo"
  | "Instalaciones"
  | "Actividades"
  | "Celebraciones"
  | "Aprendiendo juntos";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: GalleryCategory;
  campusId?: "vascongados" | "gambino";
};

export const galleryImages: GalleryImage[] = [
  {
    id: "equipo-escuela-ruth",
    src: "/equipo-escuela-ruth.jpg",
    alt: "Integrantes del equipo educativo de Escuela de Lenguaje Ruth",
    title: "Equipo educativo",
    category: "Equipo",
  },
];
