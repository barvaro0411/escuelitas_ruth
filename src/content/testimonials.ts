export type FamilyTestimonial = {
  id: string;
  quote: string;
  attribution: string;
  year?: string;
};

// Publicar solo testimonios reales y autorizados, sin datos de menores.
export const familyTestimonials: FamilyTestimonial[] = [];
