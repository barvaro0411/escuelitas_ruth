export const siteConfig = {
  name: "Escuela de Lenguaje Ruth",
  shortName: "Escuelitas Ruth",
  // Dominio público que hoy responde. Cambiar aquí cuando el dominio propio
  // tenga DNS y redirección HTTPS verificados en Vercel.
  url: "https://escuelitas-ruth.vercel.app",
  admissionYear: 2027,
  description:
    "Escuela de lenguaje particular subvencionada con dos sedes en Conchalí, 100% gratuita para las familias, con evaluación fonoaudiológica sin costo y apoyo especializado para niños y niñas con TEL.",
  contact: {
    phone: {
      label: "+56 2 2728 7128",
      href: "tel:+56227287128",
    },
    whatsapp: {
      label: "+56 9 9660 6714",
      number: "56996606714",
    },
    email: {
      label: "escuelaruth@gmail.com",
      href: "mailto:escuelaruth@gmail.com",
    },
    addresses: [
      {
        id: "vascongados",
        name: "Escuela Vascongados",
        rbd: "10375-6",
        label: "Vascongados 4314, Conchalí",
        street: "Vascongados 4314",
        locality: "Conchalí",
        region: "Región Metropolitana",
        country: "CL",
        postalCode: "8540000",
        geo: {
          latitude: -33.3934,
          longitude: -70.6695,
        },
        href: "https://www.google.com/maps/search/?api=1&query=Vascongados%204314%2C%20Conchal%C3%AD%2C%20Chile",
      },
      {
        id: "gambino",
        name: "Escuela Gral. Gambino",
        rbd: "26106-8",
        label: "Gral. Gambino 4613, Conchalí",
        street: "Gral. Gambino 4613",
        locality: "Conchalí",
        region: "Región Metropolitana",
        country: "CL",
        postalCode: "8540000",
        geo: {
          latitude: -33.3906,
          longitude: -70.6723,
        },
        href: "https://www.google.com/maps/search/?api=1&query=Gral.%20Gambino%204613%2C%20Conchal%C3%AD%2C%20Chile",
      },
    ],
    /** @deprecated Use addresses[0] directly. Kept for backward compatibility. */
    get address() {
      return this.addresses[0];
    },
    hours: "Lunes a viernes: mañana de 08:15 a 12:15 y tarde de 13:30 a 17:15 hrs.",
  },
  social: {
    instagram: "https://www.instagram.com/escuelitas.ruth/",
  },
  routes: [
    "/",
    "/matriculas-2027-conchali",
    "/matriculas-2027-huechuraba",
    "/matriculas-2027-renca",
    "/matriculas-2027-santiago-norte",
    "/trastorno-especifico-lenguaje",
    "/admision",
    "/contacto",
    "/nosotros",
    "/programa-educativo",
    "/vida-escolar",
    "/preguntas-frecuentes",
    "/compartir",
    "/privacidad",
    "/terminos",
  ],
};

type ContactMessageData = {
  nombre?: string;
  nombreApoderado?: string;
  email?: string;
  telefono?: string;
  nombreNino?: string;
  edadNino?: string;
  fechaNacimiento?: string;
  comuna?: string;
  sede?: string;
  jornada?: string;
  diagnostico?: string;
  mensaje?: string;
};

export function buildWhatsAppUrl(message: string) {
  const safeMessage = truncateByCodePoint(toWellFormed(message).trim(), 2_000);
  return `https://wa.me/${siteConfig.contact.whatsapp.number}?text=${encodeURIComponent(safeMessage)}`;
}

export function buildContactWhatsAppMessage(data: ContactMessageData) {
  // Aunque estos datos solo salen hacia WhatsApp, se acotan y se eliminan
  // controles/saltos de línea para evitar URLs gigantes o campos falsificados.
  const nombreApoderado = cleanContactField(data.nombreApoderado || data.nombre, 100);
  const telefono = cleanContactField(data.telefono, 30);
  const email = cleanContactField(data.email, 254);
  const nombreNino = cleanContactField(data.nombreNino, 100);
  const edadNino = cleanContactField(data.edadNino, 40);
  const fechaNacimiento = cleanContactField(data.fechaNacimiento, 10);
  const comuna = cleanContactField(data.comuna, 80);
  const sede = cleanContactField(data.sede, 80);
  const jornada = cleanContactField(data.jornada, 80);
  const diagnostico = cleanContactField(data.diagnostico, 100);
  const mensaje = cleanContactField(data.mensaje, 500);

  const parts = [
    "Hola, me gustaría recibir más información sobre cupos y matrículas 2027.",
    nombreApoderado ? `Apoderado/a: ${nombreApoderado}` : null,
    telefono ? `Teléfono: ${telefono}` : null,
    email ? `Correo: ${email}` : null,
    nombreNino ? `Niño/a: ${nombreNino}` : null,
    edadNino ? `Edad: ${edadNino}` : null,
    fechaNacimiento ? `Fecha de nacimiento: ${fechaNacimiento}` : null,
    comuna ? `Comuna: ${comuna}` : null,
    sede ? `Sede de preferencia: ${sede}` : null,
    jornada ? `Jornada preferida: ${jornada}` : null,
    diagnostico ? `Diagnóstico o evaluación previa: ${diagnostico}` : null,
    mensaje ? `Mensaje: ${mensaje}` : null,
  ];

  return parts.filter(Boolean).join("\n");
}

function cleanContactField(value: string | undefined, maxLength: number) {
  if (!value) return "";

  const withoutControls = toWellFormed(value)
    .replace(/[\u0000-\u001f\u007f]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return truncateByCodePoint(withoutControls, maxLength);
}

function truncateByCodePoint(value: string, maxLength: number) {
  return Array.from(value).slice(0, maxLength).join("");
}

function toWellFormed(value: string) {
  let result = "";

  for (let index = 0; index < value.length; index += 1) {
    const code = value.charCodeAt(index);

    if (code >= 0xd800 && code <= 0xdbff) {
      const nextCode = value.charCodeAt(index + 1);
      if (nextCode >= 0xdc00 && nextCode <= 0xdfff) {
        result += value[index] + value[index + 1];
        index += 1;
      } else {
        result += "�";
      }
    } else if (code >= 0xdc00 && code <= 0xdfff) {
      result += "�";
    } else {
      result += value[index];
    }
  }

  return result;
}

export function buildSchoolJsonLd() {
  const openingHours = [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:15",
      closes: "12:15",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "13:30",
      closes: "17:15",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EducationalOrganization", "School"],
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        description: siteConfig.description,
        url: siteConfig.url,
        telephone: siteConfig.contact.phone.label,
        email: siteConfig.contact.email.label,
        sameAs: [siteConfig.social.instagram],
        priceRange: "Gratis ($0)",
        isAccessibleForFree: true,
        areaServed: [
          { "@type": "AdministrativeArea", name: "Conchalí" },
          { "@type": "AdministrativeArea", name: "Huechuraba" },
          { "@type": "AdministrativeArea", name: "Renca" },
          { "@type": "AdministrativeArea", name: "Recoleta" },
          { "@type": "AdministrativeArea", name: "Independencia" },
          { "@type": "AdministrativeArea", name: "Quilicura" },
          { "@type": "AdministrativeArea", name: "Santiago Norte" },
        ],
        subOrganization: siteConfig.contact.addresses.map((addr) => ({
          "@type": ["School", "LocalBusiness"],
          "@id": `${siteConfig.url}/#sede-${addr.id}`,
          name: `${siteConfig.name} - ${addr.name}`,
          description: `Sede ${addr.name} en Conchalí con RBD oficial ${addr.rbd}. Educación y fonoaudiología gratuita para niños de 3 a 5 años con TEL.`,
          identifier: {
            "@type": "PropertyValue",
            propertyID: "RBD MINEDUC",
            value: addr.rbd,
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: addr.street,
            addressLocality: addr.locality,
            addressRegion: addr.region,
            addressCountry: addr.country,
            postalCode: addr.postalCode,
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: addr.geo.latitude,
            longitude: addr.geo.longitude,
          },
          telephone: siteConfig.contact.phone.label,
          openingHoursSpecification: openingHours,
          priceRange: "Gratis ($0)",
          isAccessibleForFree: true,
          hasMap: addr.href,
        })),
      },
    ],
  };
}

export function buildFaqJsonLd(faqs: Array<{ q: string; a: string } | { question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => {
      const question = "q" in faq ? faq.q : faq.question;
      const answer = "a" in faq ? faq.a : faq.answer;
      return {
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      };
    }),
  };
}

export function buildBreadcrumbsJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url.startsWith("/") ? item.url : `/${item.url}`}`,
    })),
  };
}
