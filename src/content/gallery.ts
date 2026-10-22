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

export const schoolLifeGallery: GalleryImage[] = [
  {
    id: "dia-del-profesor-vascongados-1",
    src: "/dia-del-profesor-vascongados-1.jpg",
    alt: "Educadoras diferenciales, fonoaudiólogas y párvulos celebrando el Día del Profesor en el patio techado de sede Vascongados",
    title: "Día del Profesor: Celebración junto a nuestras educadoras",
    category: "Celebraciones",
    campusId: "vascongados",
  },
  {
    id: "dia-del-profesor-vascongados-2",
    src: "/dia-del-profesor-vascongados-2.jpg",
    alt: "Párvulos felicitando y compartiendo con sus educadoras en el patio techado de sede Vascongados",
    title: "Día del Profesor: Homenaje y cariño de los niños a sus tías",
    category: "Celebraciones",
    campusId: "vascongados",
  },
  {
    id: "celebracion-patio-1",
    src: "/celebracion-patio-techado.jpg",
    alt: "Patio techado de Escuelitas Ruth decorado con globos y mesa de colación para celebraciones de los párvulos",
    title: "Mesa de celebración y convivencia en patio techado",
    category: "Celebraciones",
  },
  {
    id: "patio-fiestas-patrias",
    src: "/patio-fiestas-patrias.jpg",
    alt: "Patio techado central con banderines chilenos y ambientación de Fiestas Patrias",
    title: "Patio techado preparado para Fiestas Patrias",
    category: "Celebraciones",
  },
  {
    id: "celebracion-patio-2",
    src: "/ambiente-festivo-patio.jpg",
    alt: "Mesa festiva y ambiente alegre en el patio cubierto del colegio",
    title: "Ambiente festivo y recreativo en el colegio",
    category: "Celebraciones",
  },
  {
    id: "vista-cordillera",
    src: "/vista-cordillera-escuela.jpg",
    alt: "Vista panorámica a la Cordillera de los Andes nevada desde las instalaciones de la escuela",
    title: "Vista a la cordillera desde terraza de la escuela",
    category: "Instalaciones",
  },
];

export const galleryImages: GalleryImage[] = [
  ...schoolLifeGallery,
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

