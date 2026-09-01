import type { NextConfig } from "next";

// CSP compatible con páginas prerenderizadas. Next.js necesita scripts y estilos
// inline para la hidratación estática; si el sitio incorpora backend/middleware,
// conviene migrar a nonces por respuesta y retirar 'unsafe-inline' de script-src.
const isDevelopment = process.env.NODE_ENV === "development";

// Vercel Web Analytics y Speed Insights se sirven como proxy desde el propio
// dominio (`/_vercel/*`, cubierto por 'self'); `va.vercel-scripts.com` es el
// host de respaldo que usan el script y el beacon fuera de ese proxy.
const vercelAnalyticsHost = "https://va.vercel-scripts.com";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  `connect-src 'self' ${vercelAnalyticsHost}`,
  "font-src 'self' data:",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "frame-src 'none'",
  "img-src 'self' data: blob:",
  "manifest-src 'self'",
  "media-src 'self'",
  "object-src 'none'",
  `script-src 'self' 'unsafe-inline' ${vercelAnalyticsHost}${isDevelopment ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "worker-src 'self' blob:",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  allowedDevOrigins: ["127.0.0.1"],
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 días
  },
  async redirects() {
    // Las páginas por comuna cercana se consolidaron en `santiago-norte`,
    // que ahora describe cada comuna con contenido propio. 308 permanente:
    // el sitio aún no está indexado, pero deja el patrón correcto por si
    // alguien compartió el enlace antes del lanzamiento.
    return [
      {
        source: "/matriculas-2027-renca",
        destination: "/matriculas-2027-santiago-norte",
        permanent: true,
      },
      {
        source: "/matriculas-2027-huechuraba",
        destination: "/matriculas-2027-santiago-norte",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: contentSecurityPolicy },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "0" },
          {
            key: "Permissions-Policy",
            value:
              "accelerometer=(), autoplay=(), browsing-topics=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
