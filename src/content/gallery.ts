import { gambinoGallery, vascongadosGallery } from "@/content/school-data";

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
  ...vascongadosGallery.map((image, index) => ({
    ...image,
    id: `vascongados-instalacion-${index + 1}`,
    category: "Instalaciones" as const,
    campusId: "vascongados" as const,
  })),
  ...gambinoGallery.map((image, index) => ({
    ...image,
    id: `gambino-instalacion-${index + 1}`,
    category: "Instalaciones" as const,
    campusId: "gambino" as const,
  })),
];
