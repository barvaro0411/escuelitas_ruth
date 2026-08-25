import { vascongadosGallery } from "@/content/school-data";

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
  ...vascongadosGallery.map((image, index) => ({
    ...image,
    id: `vascongados-instalacion-${index + 1}`,
    category: "Instalaciones" as const,
    campusId: "vascongados" as const,
  })),
];
