import type { Metadata } from "next";
import Link from "next/link";
import { HomeHero } from "@/components/HomeHero";
import { regions } from "@/data/regions";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

const title =
  "Çilingir 15 Dk Kapıda | Acil Çilingir Hizmeti | İstanbul 7/24";
const description =
  "İstanbul'da acil çilingir hizmeti. Çilingir 15 Dk Kapıda, nöbetçi çilingir, hasarsız kilit açma ve gece çilingir. Aktif ekibimiz sahada, size en yakın çilingir hattında.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Çilingir 15 Dk Kapıda",
    "acil çilingir hizmeti",
    "nöbetçi çilingir",
    "en yakın çilingir",
    "7/24 çilingir",
    "hasarsız kilit açma",
    "gece çilingir",
    "garantili çilingir",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "tr_TR",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <section className="section wrap trust-band">
        <div className="trust-row">
          <div className="trust-item">
            <h2>Çilingir 15 Dk Kapıda</h2>
            <p>
              Dağıtık saha. Çağrı ofisten yola çıkmaz — konumuza 15 dk
              mesafede bekler.
            </p>
          </div>
          <div className="trust-item">
            <h2>Nöbetçi çilingir · 7/24 çilingir</h2>
            <p>
              Gece çilingir dahil vardiya 00:00–23:59. Acil çilingir
              hizmetinde mesai yok.
            </p>
          </div>
          <div className="trust-item">
            <h2>Hasarsız kilit açma</h2>
            <p>
              Garantili çilingir: kapıyı kırmadan açar, göbeği yerinde
              değiştiririz.
            </p>
          </div>
        </div>
      </section>

      <section className="section wrap" id="bolgeler">
        <h2>Size en yakın çilingir hatları — aktif ekibimiz sahada</h2>
        <div className="region-grid">
          {regions.map((region) => (
            <Link
              key={region.slug}
              href={`/cilingir/${region.slug}`}
              className="region-card"
            >
              <span className="region-card__time">
                {region.avgResponseMinutes} dk
              </span>
              <h3>{region.name} çilingir</h3>
              <p>{region.description}</p>
              <span className="region-card__go">Mahalleleri gör →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
