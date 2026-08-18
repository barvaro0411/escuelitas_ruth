import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Información sobre el tratamiento de datos y consultas de admisión en Escuela de Lenguaje Ruth.",
  alternates: {
    canonical: "/privacidad",
  },
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
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block px-4 py-2 rounded-full bg-accent text-primary-dark font-black uppercase tracking-widest text-xs mb-6">
          Información legal
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-foreground tracking-tight mb-8">
          Política de Privacidad
        </h1>
        <div className="prose prose-lg max-w-none text-foreground/75 font-semibold leading-relaxed space-y-6">
          <p>
            El formulario de este sitio no envía ni almacena datos en servidores de Escuela de Lenguaje Ruth. Al presionar el botón, tu navegador prepara un mensaje y abre WhatsApp; la información solo sale del dispositivo si decides enviarla allí.
          </p>
          <p>
            Si envías el mensaje, Escuela de Lenguaje Ruth utiliza esos datos únicamente para responder consultas de admisión, cupos, evaluación y matrícula. WhatsApp procesa la comunicación bajo sus propias condiciones y política de privacidad.
          </p>
          <p>
            Podemos solicitar nombre del apoderado, teléfono, correo, comuna, edad del niño(a), jornada preferida y antecedentes generales sobre evaluación o diagnóstico. Comparte solo lo necesario: no incluyas informes médicos completos ni otros datos sensibles en el mensaje inicial. Esta información no se publica en el sitio.
          </p>
          <p>
            Actualmente el sitio no usa cuentas de usuario, cookies de seguimiento ni herramientas de analítica de terceros. Si esto cambia, esta política y la configuración de consentimiento deberán actualizarse antes del despliegue.
          </p>
          <p>
            Si deseas corregir o eliminar una consulta enviada, puedes escribir a {siteConfig.contact.email.label} o llamar al {siteConfig.contact.phone.label}.
          </p>
        </div>
        <Link
          href="/contacto"
          className="mt-10 inline-flex items-center px-7 py-4 rounded-2xl bg-primary text-white font-black hover:bg-primary-dark transition-colors"
        >
          Volver a contacto
          <ArrowRight className="ml-3 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
