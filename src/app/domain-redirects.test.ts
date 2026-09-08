import { describe, expect, it } from "vitest";
import nextConfig from "../../next.config";
import {
  ALTERNATE_SITE_HOSTS,
  CANONICAL_SITE_URL,
} from "../../site.constants";

describe("redirecciones del dominio", () => {
  it("consolida www y vercel.app en el dominio canónico con 308", async () => {
    const redirects = await nextConfig.redirects?.();

    for (const host of ALTERNATE_SITE_HOSTS) {
      expect(redirects).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            source: "/:path*",
            destination: `${CANONICAL_SITE_URL}/:path*`,
            permanent: true,
            has: [expect.objectContaining({ type: "host", value: host })],
          }),
        ]),
      );
    }
  });
});
