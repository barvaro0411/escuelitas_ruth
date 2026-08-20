import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Información sobre el tratamiento de datos y consultas de admisión en Escuela de Lenguaje Ruth.",
  alternates: { canonical: "/privacidad" },
  openGraph: {
    title: "Política de Privacidad | Escuela de Lenguaje Ruth",
    description: "Información sobre el tratamiento de datos y consultas de admisión.",
    url: "/privacidad",
    images: ["/hero-children.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Política de Privacidad | Escuela de Lenguaje Ruth",
    description: "Información sobre el tratamiento de datos y consultas de admisión.",
    images: ["/hero-children.jpg"],
  },
};

export default function PrivacidadPage() {
  return (
    <div className="bg-background pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">Información legal</p>
        <h1 className="mt-2 font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">Política de Privacidad</h1>

        <div className="mt-8 space-y-5 text-base font-semibold leading-relaxed text-muted">
          <p>
            El formulario de este sitio no almacena datos en servidores de Escuela de Lenguaje Ruth. Al continuar, tu navegador prepara un mensaje y abre WhatsApp; tú decides si lo revisas y lo envías.
          </p>
          <p>
            El formulario solicita únicamente los datos necesarios para responder una consulta de admisión: nombre del apoderado, teléfono o WhatsApp, fecha de nacimiento opcional, comuna, sede, jornada y mensaje.
          </p>
          <p>
            Si envías el mensaje, la escuela utilizará esos datos para responder consultas de cupos, evaluación y matrícula. WhatsApp procesa la comunicación bajo sus propias condiciones y política de privacidad.
          </p>
          <p>
            No es necesario compartir un diagnóstico ni informes médicos completos en el primer mensaje. Evita incluir datos sensibles que no sean necesarios para tu consulta.
          </p>
          <p>
            Para solicitar una corrección o eliminación de una consulta enviada, escribe a {siteConfig.contact.email.label} o llama al {siteConfig.contact.phone.label}. Si cambia el uso de datos, esta política deberá actualizarse antes del despliegue correspondiente.
          </p>
        </div>

        <Link href="/contacto" className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-extrabold text-white transition-colors hover:bg-primary-dark">
          Volver a contacto
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
