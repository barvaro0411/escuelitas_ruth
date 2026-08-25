"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/site";
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
    <header className="fixed inset-x-0 top-0 z-50">
      <FiestasPatriasMode>
        <FiestasPatriasBanner />
      </FiestasPatriasMode>
      <nav
        aria-label="Navegación principal"
        className={`border-b transition-[background-color,border-color,box-shadow,padding] duration-300 ${
          isSolid
            ? "border-border bg-white/95 py-3 shadow-sm shadow-primary/10 backdrop-blur-sm"
            : "border-transparent bg-primary-dark/90 py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Ir al inicio de Escuela de Lenguaje Ruth"
          >
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-action/80 bg-surface">
              <Image
                src="/logo.jpg"
                alt="Logo Escuela de Lenguaje Ruth"
                fill
                sizes="44px"
                className="object-cover"
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

          <div className="hidden items-center gap-1 xl:flex">
            {navigation.map((item) => {
              const active = isActiveRoute(pathname, item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`border-b-2 px-3 py-2 text-sm font-semibold transition-colors ${
                    active
                      ? "border-action text-primary"
                      : isSolid
                        ? "border-transparent text-muted hover:border-action/60 hover:text-primary"
                        : "border-transparent text-white/80 hover:border-action/60 hover:text-white"
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
              aria-label="Abrir WhatsApp para consultar disponibilidad 2027"
              className="ml-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-action bg-action px-4 py-2.5 text-sm font-extrabold text-primary-dark transition-colors hover:bg-action-hover"
            >
              <MessageCircle size={17} aria-hidden="true" />
              Consultar disponibilidad
            </a>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-colors xl:hidden ${
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

      <div
        id="mobile-navigation"
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen}
        className={`max-h-[calc(100dvh-5rem)] overflow-y-auto border-b border-border bg-surface transition-[max-height,opacity] duration-200 xl:hidden ${
          mobileMenuOpen
            ? "max-h-[520px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
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
            href="/contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="block rounded-xl border-l-2 border-transparent px-4 py-3 text-base font-semibold text-muted transition-colors hover:border-action/60 hover:bg-surface-sunk hover:text-primary"
          >
            Contacto
          </Link>
          <a
            href={headerWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Abrir WhatsApp para consultar disponibilidad 2027"
            className="mt-3 flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-4 text-base font-extrabold text-white transition-colors hover:bg-primary-dark"
          >
            <MessageCircle size={20} aria-hidden="true" />
            Consultar disponibilidad por WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
