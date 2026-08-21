import type { Metadata } from "next";
import { Nunito, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { Toaster } from "sonner";
import JsonLd from "@/components/seo/JsonLd";
import { buildSchoolJsonLd, siteConfig } from "@/lib/site";
import { getSeasonalThemeBootstrapScript } from "@/lib/seasonal-theme";
import FiestasPatriasPageCta from "@/components/seasonal/FiestasPatriasPageCta";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: "%s | Escuela de Lenguaje Ruth",
    default: "Escuela de Lenguaje Ruth | Consulta cupos 2027 en Conchalí",
  },
  description: "Consulta cupos 2027 en Escuela de Lenguaje Ruth, Conchalí. Educación gratuita, evaluación fonoaudiológica sin costo y apoyo especializado para niños con TEL.",
  keywords: ["matrículas 2027 escuela de lenguaje", "escuela de lenguaje Conchalí", "TEL", "Santiago norte", "educación preescolar gratuita", "fonoaudiología infantil", "colegio para niños con TEL", "apoyo de lenguaje infantil", "escuela de lenguaje para prekínder", "evaluación fonoaudiológica gratuita"],
  authors: [{ name: "Escuelitas Ruth" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Escuela de Lenguaje Ruth | Consulta cupos 2027 en Conchalí",
    description: "Educación gratuita, evaluación fonoaudiológica sin costo y acompañamiento especializado para niños con TEL.",
    url: siteConfig.url,
    siteName: "Escuela de Lenguaje Ruth",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/hero-children.jpg",
        width: 1024,
        height: 1024,
        alt: "Escuela de Lenguaje Ruth en Conchalí",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Escuela de Lenguaje Ruth | Matrículas 2027",
    description: "Educación gratuita y evaluación fonoaudiológica sin costo en Conchalí.",
    images: ["/hero-children.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schoolJsonLd = buildSchoolJsonLd();

  return (
    <html lang="es-CL" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          id="seasonal-theme"
          dangerouslySetInnerHTML={{ __html: getSeasonalThemeBootstrapScript() }}
        />
      </head>
      <body className={`${nunito.variable} ${outfit.variable} antialiased`}>
        <JsonLd data={schoolJsonLd} />
        <a
          href="#main-content"
          className="sr-only fixed left-4 top-4 z-[100] rounded-lg bg-white px-4 py-3 font-bold text-primary shadow-xl focus:not-sr-only"
        >
          Saltar al contenido principal
        </a>
        <Toaster position="top-center" richColors />
        <Header />
        <main id="main-content" className="min-h-screen" tabIndex={-1}>
          {children}
          <FiestasPatriasPageCta />
        </main>
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
