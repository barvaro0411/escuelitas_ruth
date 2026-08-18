"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X } from "lucide-react";
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
  const menuButtonRef = useRef<HTMLButtonElement>(null);

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

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [mobileMenuOpen]);

  const isHome = pathname === "/";
  const isSolid = scrolled || !isHome;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Navegación principal"
        className={`transition-[background-color,border-color,box-shadow,padding] duration-300 ${
          isSolid
            ? "border-b border-border bg-white/95 py-3 shadow-sm shadow-primary/10 backdrop-blur-sm"
            : "bg-primary-dark/90 py-4"
        }`}
      >
        {/* Único gesto decorativo: indica progreso sin competir con la navegación. */}
        <div
          className="absolute bottom-0 left-0 z-20 h-0.5 bg-brand-yellow transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo & Brand Identity */}
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Ir al inicio de Escuela de Lenguaje Ruth"
          >
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-brand-yellow/80 bg-white shadow-sm">
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
                className={`font-display text-lg font-extrabold tracking-tight transition-colors sm:text-xl ${
                  isSolid ? "text-foreground" : "text-white"
                }`}
              >
                Escuelitas Ruth
              </span>
              <span
                className={`text-[10px] font-bold uppercase tracking-[0.12em] transition-colors ${
                  isSolid ? "text-primary" : "text-brand-yellow-light"
                }`}
              >
                Escuela de Lenguaje Gratuita
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const active = isActiveRoute(pathname, item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`border-b-2 px-3 py-2 text-sm font-semibold transition-colors ${
                    active
                      ? isSolid
                        ? "border-brand-yellow text-primary"
                        : "border-brand-yellow text-white"
                      : isSolid
                        ? "border-transparent text-foreground/80 hover:border-brand-yellow/60 hover:text-primary"
                        : "border-transparent text-white/80 hover:border-brand-yellow/60 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* CTA principal: visible, pero sin animación ni sombra llamativa. */}
            <a
              href={headerWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-4 inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-bold transition-colors ${
                isSolid
                  ? "border-primary bg-primary text-white hover:bg-primary-dark"
                  : "border-brand-yellow bg-brand-yellow text-primary-dark hover:bg-brand-yellow-light"
              }`}
            >
              <MessageCircle size={17} />
              Consultar Cupo 2027
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            className={`flex h-11 w-11 items-center justify-center rounded-lg border transition-colors lg:hidden ${
              isSolid
                ? "border-border bg-white text-foreground/80 hover:border-primary hover:text-primary"
                : "border-white/30 bg-transparent text-white hover:border-brand-yellow hover:text-brand-yellow"
            }`}
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-controls="mobile-navigation"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen}
        className={`overflow-hidden border-b border-border bg-white shadow-lg shadow-primary/10 transition-[max-height,opacity] duration-300 lg:hidden ${
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto max-w-7xl space-y-1.5 px-4 pb-6 pt-4">
          <div className="border-l-2 border-brand-yellow px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-primary">
            Matrículas 2027 Abiertas en Conchalí
          </div>
          {navigation.map((item) => {
            const active = isActiveRoute(pathname, item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`block rounded-lg border-l-2 px-4 py-3 text-base font-semibold transition-colors ${
                  active
                    ? "border-brand-yellow bg-surface-blue text-primary"
                    : "border-transparent text-foreground/85 hover:border-brand-yellow/60 hover:bg-surface-blue hover:text-primary"
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
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-4 text-base font-bold text-white transition-colors hover:bg-primary-dark"
          >
            <MessageCircle size={20} />
            Consultar Cupo por WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
