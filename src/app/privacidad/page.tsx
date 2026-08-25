import { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Información sobre el tratamiento de datos y consultas de admisión en Escuela de Lenguaje Ruth.",
  alternates: { canonical: "/privacidad" },
  openGraph: {
    title: "Política de Privacidad | Escuela de Lenguaje Ruth",
    description:
      "Información sobre el tratamiento de datos y consultas de admisión.",
    url: "/privacidad",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Política de Privacidad | Escuela de Lenguaje Ruth",
    description:
      "Información sobre el tratamiento de datos y consultas de admisión.",
    images: ["/og-image.jpg"],
  },
};

export default function PrivacidadPage() {
  return (
    <>
      <PageHero
        variant="light"
        eyebrow="Información legal"
        eyebrowIcon={ShieldCheck}
        title="Política de Privacidad"
      />

      <div className="bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-5 text-base leading-relaxed text-muted">
            <p>
              <strong>Última actualización:</strong> 24 de agosto de 2026.
            </p>
            <p>
              Escuela de Lenguaje Ruth es responsable de la atención de las
              consultas recibidas por sus canales oficiales. Puedes contactar a
              la escuela mediante {siteConfig.contact.email.label} o{" "}
              {siteConfig.contact.phone.label}.
            </p>
            <p>
              El formulario de este sitio no almacena datos en servidores de
              Escuela de Lenguaje Ruth. Al continuar, tu navegador prepara un
              mensaje y abre WhatsApp; tú decides si lo revisas y lo envías.
            </p>
            <p>
              El formulario solicita únicamente los datos necesarios para
              responder una consulta de admisión: nombre del apoderado, teléfono
              o WhatsApp, fecha de nacimiento opcional, comuna, sede, jornada y
              mensaje.
            </p>
            <p>
              Si envías el mensaje, la escuela utilizará esos datos para
              responder consultas de cupos, evaluación y matrícula. WhatsApp
              procesa la comunicación bajo sus propias condiciones y política de
              privacidad.
            </p>
            <p>
              La información será accesible únicamente para el personal que
              atiende la consulta y se conservará durante el tiempo necesario
              para responderla y gestionar el proceso solicitado, de acuerdo con
              las obligaciones aplicables de la escuela.
            </p>
            <p>
              No es necesario compartir un diagnóstico ni informes médicos
              completos en el primer mensaje. Evita incluir datos sensibles que
              no sean necesarios para tu consulta.
            </p>
            <p>
              Puedes solicitar información, acceso, corrección o eliminación de
              los datos enviados escribiendo a {siteConfig.contact.email.label}
              {" "}o llamando al {siteConfig.contact.phone.label}. La escuela
              podrá solicitar antecedentes mínimos para verificar la identidad y
              responderá conforme a la normativa aplicable.
            </p>
            <p>
              Esta información describe el funcionamiento técnico actual del
              sitio y debe ser validada periódicamente por la dirección de la
              escuela y su asesoría jurídica, especialmente antes de incorporar
              nuevos formularios, analítica o plataformas externas.
            </p>
          </div>

          <Link
            href="/contacto"
            className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-extrabold text-white transition-colors hover:bg-primary-dark"
          >
            Volver a contacto
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </>
  );
}
