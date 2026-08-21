export type TeamMember = {
  id: string;
  name: string;
  role: string;
  description?: string;
  image: string;
  imageAlt: string;
};

// Completar únicamente con nombres, cargos y fotografías autorizadas.
// Mientras este arreglo esté vacío no se renderizan perfiles individuales.
export const teamMembers: TeamMember[] = [];

export const teamAreas = [
  "Fonoaudiología",
  "Educación diferencial",
  "Asistentes de la educación",
  "Administración",
] as const;
