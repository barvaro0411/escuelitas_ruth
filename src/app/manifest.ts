import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#0369a1",
    icons: [
      {
        src: "/logo.jpg",
        sizes: "192x192 512x512",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  };
}
