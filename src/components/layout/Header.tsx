"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, Sparkles, X } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/site";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Programa Educativo", href: "/programa-educativo" },
  { name: "Matrículas 2027", href: "/matriculas-2027-conchali" },
  { name: "Contacto", href: "/contacto" },
];

const headerWhatsAppUrl = buildWhatsAppUrl(
  "Hola, quiero consultar por matrícula 2027 y agendar una evaluación fonoaudiológica gratuita."
);

function isActiveRoute(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const isSolid = scrolled || !isHome;

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      <nav
        aria-label="Navegación principal"
        className={`transition-all duration-300 ${
          isSolid
            ? "border-b border-border/80 bg-white/95 backdrop-blur-md shadow-lg shadow-primary/5 py-2.5"
            : "bg-gradient-to-b from-primary-dark/80 via-primary-dark/30 to-transparent py-4"
        }`}
      >
        {/* Dynamic Scroll Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-primary via-brand-yellow to-emerald-accent transition-all duration-150 ease-out z-20"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Rainbow Accent Top Line */}
        {isSolid && (
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-brand-yellow to-emerald-accent" />
        )}

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo & Brand Identity */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Ir al inicio de Escuela de Lenguaje Ruth"
          >
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-2xl border-2 border-brand-yellow bg-white shadow-md transition-transform group-hover:scale-105">
              <Image
                src="/logo.jpg"
                alt="Escuela de Lenguaje Ruth Logo"
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className={`text-lg font-black tracking-tight transition-colors sm:text-xl font-display ${
                  isSolid ? "text-foreground" : "text-white"
                }`}
              >
                Escuelitas Ruth
              </span>
              <span
                className={`text-[11px] font-extrabold uppercase tracking-wider transition-colors ${
                  isSolid ? "text-primary" : "text-brand-yellow-light"
                }`}
              >
                Escuela de Lenguaje Gratuita
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-1.5 lg:flex">
            {navigation.map((item) => {
              const active = isActiveRoute(pathname, item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-xl px-4 py-2 text-sm font-extrabold transition-all ${
                    active
                      ? isSolid
                        ? "bg-primary text-white shadow-md shadow-primary/20"
                        : "bg-white text-primary-dark shadow-md"
                      : isSolid
                        ? "text-foreground/80 hover:bg-surface-blue hover:text-primary"
                        : "text-white/90 hover:bg-white/15 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* WhatsApp CTA Button */}
            <a
              href={headerWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-yellow px-5 py-2.5 text-sm font-black text-primary-dark shadow-md hover:bg-brand-yellow-light hover:shadow-lg transition-all animate-pulse-glow"
            >
              <MessageCircle size={17} />
              Consultar Cupo 2027
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all lg:hidden ${
              isSolid
                ? "bg-surface-raised text-foreground/80 hover:bg-border"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <div
        className={`overflow-hidden bg-white border-b border-border shadow-2xl transition-[max-height,opacity] duration-300 lg:hidden ${
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto max-w-7xl space-y-2 px-4 pb-6 pt-3">
          <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-black uppercase text-primary tracking-wider bg-surface-blue rounded-lg">
            <Sparkles size={14} />
            Matrículas 2027 Abiertas en Conchalí
          </div>
          {navigation.map((item) => {
            const active = isActiveRoute(pathname, item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-base font-extrabold transition-all ${
                  active
                    ? "bg-primary text-white shadow-sm"
                    : "text-foreground/85 hover:bg-surface-blue hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <a
            href={headerWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-yellow px-5 py-4 text-base font-black text-primary-dark shadow-md hover:bg-brand-yellow-light transition-all animate-pulse-glow"
          >
            <MessageCircle size={20} />
            Consultar Cupo por WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
