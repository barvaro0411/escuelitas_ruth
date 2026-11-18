"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram, Menu, MessageCircle, PhoneCall, X } from "lucide-react";
import { createWhatsAppUrl, siteConfig } from "@/lib/site";
import FiestasPatriasBanner from "@/components/seasonal/FiestasPatriasBanner";
import FiestasPatriasMode from "@/components/seasonal/FiestasPatriasMode";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Matrícula", href: "/matriculas-2027-conchali" },
  { name: "Niveles", href: "/programa-educativo#niveles" },
  { name: "Sedes", href: "/sedes" },
  { name: "Vida Escolar", href: "/vida-escolar" },
  { name: "Familias", href: "/familias" },
];

const headerWhatsAppUrl = createWhatsAppUrl({ source: "header" });

function isActiveRoute(pathname: string, href: string) {
  const routePath = href.split("#")[0];
  if (routePath === "/") return pathname === "/";
  return pathname.startsWith(routePath);
}

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileMenuOpen]);

  const isHome = pathname === "/";
  const isSolid = scrolled || !isHome;

  return (
    <header data-cta="cabecera" className="fixed inset-x-0 top-0 z-50">
      <FiestasPatriasMode>
        <FiestasPatriasBanner />
      </FiestasPatriasMode>
      <nav
        aria-label="Navegación principal"
        className={`border-b transition-[background-color,border-color,box-shadow,padding] duration-300 ${
          isSolid
            ? "border-border bg-white/95 py-3 shadow-[0_8px_30px_rgb(3,105,161,0.08)] backdrop-blur-md"
            : "border-white/15 bg-primary-dark/90 py-3.5 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-3"
            aria-label="Ir al inicio de Escuela de Lenguaje Ruth"
          >
            <div className="relative h-11 w-11 sm:h-12 sm:w-12 shrink-0 overflow-hidden rounded-2xl border-2 border-action bg-white shadow-sm transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/logo.jpg"
                alt="Logo Escuela de Lenguaje Ruth"
                fill
                sizes="48px"
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className={`font-display text-lg font-extrabold tracking-tight sm:text-xl ${isSolid ? "text-ink" : "text-white"}`}
              >
                Escuelitas Ruth
              </span>
              <span
                className={`text-[10px] font-semibold uppercase tracking-[0.1em] ${isSolid ? "text-primary" : "text-accent-on-dark"}`}
              >
                Escuela de Lenguaje Gratuita
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-0.5 lg:flex xl:gap-1">
            {navigation.map((item) => {
              const active = isActiveRoute(pathname, item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative whitespace-nowrap rounded-xl px-2.5 py-2 text-[13px] font-semibold transition-all duration-200 after:absolute after:bottom-0.5 after:left-2.5 after:right-2.5 after:h-0.5 after:rounded-full after:bg-action after:transition-transform after:duration-250 xl:px-3.5 xl:text-sm xl:after:left-3.5 xl:after:right-3.5 ${
                    active
                      ? isSolid
                        ? "bg-surface-sunk/80 text-primary after:scale-x-100"
                        : "bg-white/12 text-white after:scale-x-100"
                      : isSolid
                        ? "text-muted after:scale-x-0 hover:bg-surface-sunk/50 hover:text-primary hover:after:scale-x-100"
                        : "text-white/85 after:scale-x-0 hover:bg-white/10 hover:text-white hover:after:scale-x-100"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram oficial de Escuelitas Ruth"
              title="Visitar Instagram oficial @escuelitasruthoficial_"
              className={`btn-instagram ml-1.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border active:scale-95 cursor-pointer xl:ml-2 xl:h-11 xl:w-11 ${
                isSolid
                  ? "border-border bg-surface text-pink-600"
                  : "border-white/30 bg-white/10 text-white"
              }`}
            >
              <Instagram size={18} aria-hidden="true" />
            </a>

            <a
              href={headerWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir WhatsApp para consultar disponibilidad 2027"
              className="ml-1.5 inline-flex min-h-10 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-action bg-action px-3.5 py-2 text-[13px] font-extrabold text-primary-dark transition-all hover:bg-action-hover btn-action-glow cursor-pointer xl:ml-2 xl:min-h-11 xl:px-4 xl:py-2.5 xl:text-sm"
            >
              <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-600 animate-radar-pulse" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
              </span>
              <MessageCircle size={16} aria-hidden="true" />
              <span>Consultar cupos</span>
            </a>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-colors lg:hidden ${
              isSolid
                ? "border-border bg-surface text-muted hover:border-primary hover:text-primary"
                : "border-white/40 bg-transparent text-white hover:border-action hover:text-accent-on-dark"
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

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[4.5rem] -z-10 bg-primary-dark/40 backdrop-blur-xs lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        id="mobile-navigation"
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen}
        className={`border-b border-border bg-white/98 backdrop-blur-md shadow-xl transition-all duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen
            ? "max-h-[calc(100dvh-5rem)] overflow-y-auto opacity-100"
            : "pointer-events-none max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl space-y-1.5 px-4 pb-6 pt-4">
          <p className="border-l-2 border-action px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
            Consulta cupos 2027 en Conchalí
          </p>
          {navigation.map((item) => {
            const active = isActiveRoute(pathname, item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`block rounded-xl border-l-2 px-4 py-3 text-base font-semibold transition-colors ${
                  active
                    ? "border-action bg-surface-sunk text-primary"
                    : "border-transparent text-muted hover:border-action/60 hover:bg-surface-sunk hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <Link
            href="/nosotros"
            onClick={() => setMobileMenuOpen(false)}
            aria-current={isActiveRoute(pathname, "/nosotros") ? "page" : undefined}
            className={`block rounded-xl border-l-2 px-4 py-3 text-base font-semibold transition-colors ${
              isActiveRoute(pathname, "/nosotros")
                ? "border-action bg-surface-sunk text-primary"
                : "border-transparent text-muted hover:border-action/60 hover:bg-surface-sunk hover:text-primary"
            }`}
          >
            Nosotros y Equipo
          </Link>
          <Link
            href="/contacto"
            onClick={() => setMobileMenuOpen(false)}
            aria-current={isActiveRoute(pathname, "/contacto") ? "page" : undefined}
            className={`block rounded-xl border-l-2 px-4 py-3 text-base font-semibold transition-colors ${
              isActiveRoute(pathname, "/contacto")
                ? "border-action bg-surface-sunk text-primary"
                : "border-transparent text-muted hover:border-action/60 hover:bg-surface-sunk hover:text-primary"
            }`}
          >
            Contacto
          </Link>
          <a
            href={headerWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Abrir WhatsApp para consultar disponibilidad 2027"
            className="mt-3 flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-action px-5 py-4 text-base font-extrabold text-primary-dark transition-all hover:bg-action-hover btn-action-glow"
          >
            <MessageCircle size={20} aria-hidden="true" />
            Consultar disponibilidad por WhatsApp
          </a>

          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            <a
              href={siteConfig.contact.phone.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-surface-sunk px-4 py-2.5 text-xs font-bold text-primary transition-colors hover:border-primary"
            >
              <PhoneCall size={15} aria-hidden="true" />
              <span>Llamar: {siteConfig.contact.phone.label}</span>
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Instagram de Escuelitas Ruth"
              className="btn-instagram flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-surface-sunk px-4 py-2.5 text-xs font-bold text-muted"
            >
              <Instagram size={16} className="text-pink-600" aria-hidden="true" />
              <span>@escuelitasruthoficial_</span>
            </a>
          </div>

          <p className="pt-2 text-center text-[11px] font-semibold text-muted">
            {siteConfig.contact.hours}
          </p>
        </div>
      </div>
    </header>
  );
}
