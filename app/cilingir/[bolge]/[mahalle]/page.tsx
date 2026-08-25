import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CallCtas } from "@/components/CallCtas";
import { Breadcrumb } from "@/components/Chrome";
import { StageHero, splitStageHeadline } from "@/components/StageHero";
import {
  findNeighborhood,
  getAllNeighborhoodSlugs,
} from "@/data/regions";
import {
  PHONE_TEL,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";
import { neighborhoodHeadings } from "@/lib/seo";

type Props = {
  params: Promise<{ bolge: string; mahalle: string }>;
};

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllNeighborhoodSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { bolge, mahalle } = await params;
  const result = findNeighborhood(bolge, mahalle);
  if (!result) return {};
  const { neighborhood } = result;

  return {
    title: `${neighborhood.name} Çilingir 15 Dk Kapıda | Acil Çilingir Hizmeti`,
    description: `${neighborhood.name} nöbetçi çilingir ve 7/24 çilingir. Çilingir 15 Dk Kapıda, hasarsız kilit açma, gece çilingir. ${neighborhood.referenceLandmark}.`,
    keywords: [
      `${neighborhood.name} çilingir`,
      "acil çilingir hizmeti",
      "nöbetçi çilingir",
      "7/24 çilingir",
      "hasarsız kilit açma",
    ],
    alternates: {
      canonical: `/cilingir/${bolge}/${mahalle}`,
    },
    openGraph: {
      title: `${neighborhood.name} Çilingir 15 Dk Kapıda | Acil Çilingir Hizmeti`,
      description: `${neighborhood.name} bölgesinde acil çilingir hizmeti. ${neighborhood.referenceLandmark}, ortalama ${neighborhood.avgResponseMinutes} dakika.`,
      locale: "tr_TR",
      type: "website",
    },
  };
}

export default async function NeighborhoodPage({ params }: Props) {
  const { bolge, mahalle } = await params;
  const result = findNeighborhood(bolge, mahalle);
  if (!result) notFound();
  const { region, neighborhood } = result;

  const pageUrl = `${SITE_URL}/cilingir/${region.slug}/${neighborhood.slug}`;
  const imageUrl = `${SITE_URL}${region.image}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    additionalType: "https://schema.org/Locksmith",
    "@id": pageUrl,
    name: `${SITE_NAME} - ${neighborhood.name}`,
    image: imageUrl,
    logo: `${SITE_URL}/getirlogo.png`,
    url: pageUrl,
    telephone: PHONE_TEL,
    description: `${neighborhood.name} acil çilingir hizmeti. Çilingir 15 Dk Kapıda, hasarsız kilit açma, nöbetçi çilingir.`,
    priceRange: "$$",
    areaServed: {
      "@type": "Place",
      name: neighborhood.name,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: neighborhood.name,
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: neighborhood.latitude,
      longitude: neighborhood.longitude,
    },
    openingHours: "Mo-Su 00:00-23:59",
    serviceType: [
      "acil çilingir hizmeti",
      "hasarsız kilit açma",
      "nöbetçi çilingir",
      "7/24 çilingir",
      "gece çilingir",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };

  const siblingNeighborhoods = region.neighborhoods.filter(
    (n) => n.slug !== neighborhood.slug,
  );
  const headings = neighborhoodHeadings(neighborhood.name);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <StageHero
          compact
          live={`${neighborhood.name} · aktif ekibimiz sahada`}
          kicker={`${region.name} · nöbetçi çilingir · 7/24 çilingir`}
          {...splitStageHeadline(neighborhood.heroLine)}
          sub={`${neighborhood.name} acil çilingir hizmeti`}
          lead={`${neighborhood.referenceLandmark}. Hasarsız kilit açma, gece çilingir — konumuza ${neighborhood.avgResponseMinutes} dk mesafede.`}
          meterValue={neighborhood.avgResponseMinutes}
          ticker={region.neighborhoods.map((n) => n.name)}
          breadcrumb={
            <Breadcrumb
              items={[
                { href: "/", label: "Ana Sayfa" },
                { href: `/cilingir/${region.slug}`, label: region.name },
                { label: neighborhood.name },
              ]}
            />
          }
        />

        <section className="section wrap">
          <h2>{headings.work}</h2>
          <div className="prose-local">
            <p>{neighborhood.description}</p>
          </div>
          <div className="media-frame">
            <Image
              src={region.image}
              alt={`${neighborhood.name} çilingir hizmet bölgesi`}
              width={1400}
              height={788}
              sizes="(max-width: 768px) 100vw, 72rem"
            />
          </div>
        </section>

        <section className="section wrap" aria-label="Hizmetler">
          <h2>{headings.services}</h2>
          <ul className="service-list">
            <li>Acil çilingir hizmeti — ev, ofis ve araç kapısı</li>
            <li>Hasarsız kilit açma</li>
            <li>7/24 çilingir ve gece çilingir</li>
            <li>Garantili çilingir — kilit değişimi ve tamir</li>
            <li>Nöbetçi çilingir — kasa ve çelik kapı</li>
          </ul>
          <CallCtas variant="inline" />
        </section>

        {siblingNeighborhoods.length > 0 ? (
          <section
            className="section wrap"
            aria-label="Bölge içi diğer mahalleler"
          >
            <h2>{headings.siblings}</h2>
            <ul className="neighbor-list">
              {siblingNeighborhoods.map((n) => (
                <li key={n.slug}>
                  <Link href={`/cilingir/${region.slug}/${n.slug}`}>
                    {n.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </main>
    </>
  );
}
