import type { Metadata } from "next";
import { Familjen_Grotesk, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollToTop from "@/components/ui/ScrollToTop";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Toaster } from "sonner";
import JsonLd from "@/components/seo/JsonLd";
import { buildSchoolJsonLd, siteConfig } from "@/lib/site";
import { getSeasonalThemeBootstrapScript } from "@/lib/seasonal-theme";
import FiestasPatriasPageCta from "@/components/seasonal/FiestasPatriasPageCta";
import FiestasPatriasMode from "@/components/seasonal/FiestasPatriasMode";
import FiestasPatriasFallingDecorations from "@/components/seasonal/FiestasPatriasFallingDecorations";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

// Familjen Grotesk: gestos abiertos y una «a» de doble piso que da carácter
// sin perder el registro institucional. Ver docs/direccion-visual.md.
const familjenGrotesk = Familjen_Grotesk({
  variable: "--font-familjen",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: "%s | Escuela de Lenguaje Ruth",
    default: "Escuela de Lenguaje Ruth | Consulta cupos 2027 en Conchalí",
  },
  description:
    "Consulta cupos 2027 en Escuela de Lenguaje Ruth, Conchalí. Educación gratuita, evaluación fonoaudiológica sin costo y apoyo especializado para niños con TEL.",
  keywords: [
    "matrículas 2027 escuela de lenguaje",
    "escuela de lenguaje Conchalí",
    "TEL",
    "Santiago norte",
    "educación preescolar gratuita",
    "fonoaudiología infantil",
    "colegio para niños con TEL",
    "apoyo de lenguaje infantil",
    "escuela de lenguaje para prekínder",
    "evaluación fonoaudiológica gratuita",
  ],
  authors: [{ name: "Escuelitas Ruth" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Escuela de Lenguaje Ruth | Consulta cupos 2027 en Conchalí",
    description:
      "Educación gratuita, evaluación fonoaudiológica sin costo y acompañamiento especializado para niños con TEL.",
    url: siteConfig.url,
    siteName: "Escuela de Lenguaje Ruth",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Equipo educativo de la Escuela de Lenguaje Ruth en Conchalí",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Escuela de Lenguaje Ruth | Matrículas 2027",
    description:
      "Educación gratuita y evaluación fonoaudiológica sin costo en Conchalí.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schoolJsonLd = buildSchoolJsonLd();

  return (
    <html
      lang="es-CL"
      className="scroll-smooth"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          id="seasonal-theme"
          dangerouslySetInnerHTML={{
            __html: getSeasonalThemeBootstrapScript(),
          }}
        />
      </head>
      <body
        className={`${nunito.variable} ${familjenGrotesk.variable} antialiased`}
      >
        <JsonLd data={schoolJsonLd} />
        <a
          href="#main-content"
          className="sr-only fixed left-4 top-4 z-[100] rounded-xl bg-surface px-4 py-3 font-semibold text-primary focus:not-sr-only"
        >
          Saltar al contenido principal
        </a>
        <Toaster position="top-center" richColors />
        <SmoothScroll />
        <ScrollProgressBar />
        <ScrollReveal />
        <Header />
        <FiestasPatriasMode>
          <FiestasPatriasFallingDecorations />
        </FiestasPatriasMode>
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
