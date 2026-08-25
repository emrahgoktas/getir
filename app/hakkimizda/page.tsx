import type { Metadata } from "next";
import Image from "next/image";
import { CallCtas } from "@/components/CallCtas";
import { Breadcrumb } from "@/components/Chrome";
import { team } from "@/data/team";
import {
  LOGO_ALT,
  LOGO_PATH,
  PHONE_TEL,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

export const dynamic = "force-static";

const title = "Hakkımızda | Getir Çilingir Ekibi | Nöbetçi Çilingir";
const description =
  "Getir Çilingir hakkımızda: dağıtık saha ekibi, hasarsız kilit açma, Çilingir 15 Dk Kapıda. İstanbul kuzey hattında aktif ekibimiz sahada.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/hakkimizda" },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/hakkimizda`,
    images: [{ url: LOGO_PATH, alt: LOGO_ALT }],
    locale: "tr_TR",
    type: "website",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}${LOGO_PATH}`,
    image: `${SITE_URL}${LOGO_PATH}`,
    telephone: PHONE_TEL,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "İstanbul",
    },
    openingHours: "Mo-Su 00:00-23:59",
    slogan: "Çilingir 15 Dk Kapıda",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <div className="wrap">
          <Breadcrumb
            items={[
              { href: "/", label: "Ana Sayfa" },
              { label: "Hakkımızda" },
            ]}
          />
        </div>
        <section className="hero wrap about-hero">
          <div>
            <p className="hero__kicker">Getir Çilingir · 7/24 çilingir</p>
            <h1>Hakkımızda — aktif ekibimiz sahada</h1>
            <p className="hero__lead">
              Tek merkeze bağlı bir dükkân değiliz. Acil çilingir hizmeti,
              nöbetçi çilingir ve gece çilingir aynı saha modelinde durur:
              hat hat araç, hasarsız kilit açma, Çilingir 15 Dk Kapıda.
            </p>
            <CallCtas />
          </div>
          <div className="about-logo">
            <Image
              src={LOGO_PATH}
              alt={LOGO_ALT}
              width={280}
              height={280}
              priority
            />
          </div>
        </section>

        <section className="section wrap">
          <h2>Nasıl çalışıyoruz</h2>
          <div className="prose-local">
            <p>
              İstanbul’da 15 dakika, ofisten çıkan ekiple tutulmaz. Sarıyer
              Kuzey, Maslak, Kağıthane, Levent–Etiler ve Beşiktaş sahil
              hatlarında ayrı araç bulunduruyoruz. Size en yakın çilingir,
              haritadaki pin değil; konumuza 15 dk mesafede bekleyen
              ekiptir.
            </p>
            <p>
              Çağrı merkeze düşüp “yola çıktık” demeyiz. 7/24 çilingir
              vardiyası, lobi ve site protokolünü bilir. Garantili çilingir
              işi kapıyı kırmadan biter; önce hasarsız kilit açma.
            </p>
          </div>
          <ul className="service-list trust-points">
            <li>Çilingir 15 Dk Kapıda — hat bazlı saha, tek ofis değil</li>
            <li>Hasarsız kilit açma ve garantili çilingir</li>
            <li>Nöbetçi çilingir ve gece çilingir, 00:00–23:59</li>
            <li>Plaza, site ve sahil protokolünü bilen ekip</li>
          </ul>
        </section>

        <section className="section wrap" id="ekibimiz">
          <h2>Ekibimiz</h2>
          <p className="hero__lead">
            Sahada gördüğünüz yüzler. En yakın çilingir araması bu isimlere
            düşer; her biri kendi hattında nöbet tutar.
          </p>
          <div className="team-grid">
            {team.map((member) => (
              <article className="keyword-card" key={member.name}>
                <p className="region-card__time">{member.line}</p>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p>{member.note}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
