import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { gambinoGallery, vascongadosGallery } from "./school-data";
import { galleryImages } from "./gallery";

describe("Integridad de Imágenes Públicas (Cero 404)", () => {
  const publicDir = join(process.cwd(), "public");

  it("todas las fotografías de la galería de sedes existen físicamente en /public", () => {
    const allImages = [...vascongadosGallery, ...gambinoGallery, ...galleryImages];

    for (const img of allImages) {
      const filename = img.src.replace(/^\//, "");
      const fullPath = join(publicDir, filename);
      const exists = existsSync(fullPath);
      expect(
        exists,
        `La imagen referenciada "${img.src}" no existe en la carpeta /public`,
      ).toBe(true);
    }
  });

  it("las imágenes esenciales institucionales existen en /public", () => {
    const essentialAssets = [
      "logo.jpg",
      "og-image.jpg",
      "hero-kids.jpg",
      "hero-children.jpg",
      "tel-fonoaudiologia.jpg",
      "family-support.jpg",
    ];

    for (const filename of essentialAssets) {
      const fullPath = join(publicDir, filename);
      expect(
        existsSync(fullPath),
        `El asset esencial "${filename}" no existe en /public`,
      ).toBe(true);
    }
  });
});
