import type { Metadata } from "next";
import { Nunito, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { Toaster } from "sonner";
import { buildSchoolJsonLd } from "@/lib/site";

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
  metadataBase: new URL("https://escuelitasruth.cl"),
  title: {
    template: "%s | Escuela de Lenguaje Ruth",
    default: "Escuela de Lenguaje Ruth | Matrículas 2027 en Conchalí",
  },
  description: "Matrículas 2027 abiertas en Escuela de Lenguaje Ruth, Conchalí. Educación gratuita, evaluación fonoaudiológica sin costo y apoyo especializado para niños con TEL.",
  keywords: ["matrículas 2027 escuela de lenguaje", "escuela de lenguaje Conchalí", "TEL", "Santiago norte", "educación preescolar gratuita", "fonoaudiología infantil", "colegio para niños con TEL", "apoyo de lenguaje infantil", "escuela de lenguaje para prekínder", "evaluación fonoaudiológica gratuita"],
  authors: [{ name: "Escuelitas Ruth" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Escuela de Lenguaje Ruth | Matrículas 2027 en Conchalí",
    description: "Educación gratuita, evaluación fonoaudiológica sin costo y acompañamiento especializado para niños con TEL.",
    url: "https://escuelitasruth.cl",
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
    <html lang="es" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${nunito.variable} ${outfit.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schoolJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Toaster position="top-center" richColors />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
