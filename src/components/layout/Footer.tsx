import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-primary-dark via-[#08122d] to-[#040918]">
      <div className="h-1.5 w-full bg-gradient-to-r from-primary via-brand-yellow to-emerald-accent" />
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 mb-12">

            {/* Marca */}
            <div className="space-y-5">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-brand-yellow bg-white">
                  <Image
                    src="/logo.jpg"
                    alt="Escuela de Lenguaje Ruth Logo"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <span className="text-xl font-black text-white leading-tight tracking-tight font-display">
                  Escuelitas Ruth
                </span>
              </Link>
              <p className="text-sm text-white/75 leading-relaxed max-w-xs font-medium">
                Especialistas en el desarrollo del lenguaje y la comunicación infantil. Educación 100% gratuita en Conchalí.
              </p>
              <p className="text-xs text-brand-yellow-light/80 font-black uppercase tracking-widest">
                {siteConfig.contact.addresses.map((addr) => `RBD ${addr.rbd}`).join(" · ")}
              </p>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar Instagram de Escuelitas Ruth"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/80 hover:bg-brand-yellow hover:text-primary-dark transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>

            {/* Navegación */}
            <div>
              <h4 className="mb-5 text-xs font-black uppercase tracking-widest text-brand-yellow-light font-display">
                Navegación
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Inicio", href: "/" },
                  { name: "Nosotros", href: "/nosotros" },
                  { name: "Programa Educativo", href: "/programa-educativo" },
                  { name: "Matrículas 2027", href: "/matriculas-2027-conchali" },
                  { name: "Admisión", href: "/admision" },
                  { name: "Sedes", href: "/sedes" },
                  { name: "Vida Escolar", href: "/vida-escolar" },
                  { name: "Recursos para familias", href: "/familias" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/75 hover:text-white transition-colors font-semibold"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Información */}
            <div>
              <h4 className="mb-5 text-xs font-black uppercase tracking-widest text-brand-yellow-light font-display">
                Información
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Preguntas Frecuentes", href: "/preguntas-frecuentes" },
                  { name: "¿Qué es el TEL?", href: "/trastorno-especifico-lenguaje" },
                  { name: "Requisitos de Matrícula", href: "/admision#requisitos" },
                  { name: "Contacto", href: "/contacto" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/75 hover:text-white transition-colors font-semibold"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="mb-5 text-xs font-black uppercase tracking-widest text-brand-yellow-light font-display">
                Contacto
              </h4>
              <ul className="space-y-4">
                {siteConfig.contact.addresses.map((addr) => (
                  <li key={addr.id} className="flex items-start gap-3">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-brand-yellow" />
                    <div>
                      <p className="text-xs text-white/50 font-bold mb-0.5">{addr.name}</p>
                      <a
                        href={addr.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/75 hover:text-white transition-colors font-semibold"
                      >
                        {addr.label}
                      </a>
                    </div>
                  </li>
                ))}
                <li className="flex items-center gap-3">
                  <Phone size={16} className="shrink-0 text-brand-yellow" />
                  <a
                    href={siteConfig.contact.phone.href}
                    className="text-sm text-white/75 hover:text-white transition-colors font-semibold"
                  >
                    {siteConfig.contact.phone.label}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-brand-yellow" />
                  <a
                    href={siteConfig.contact.email.href}
                    className="text-sm text-white/75 hover:text-white transition-colors font-semibold"
                  >
                    {siteConfig.contact.email.label}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Barra inferior */}
          <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-white/50 font-semibold">
              © {currentYear} Escuela de Lenguaje Ruth. Conchalí, Chile. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="/privacidad" className="text-xs text-white/50 hover:text-white/80 transition-colors font-semibold">
                Privacidad
              </Link>
              <Link href="/terminos" className="text-xs text-white/50 hover:text-white/80 transition-colors font-semibold">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
