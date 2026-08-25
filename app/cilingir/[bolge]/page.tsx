import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumb } from "@/components/Chrome";
import { StageHero, splitStageHeadline } from "@/components/StageHero";
import { findRegion, getAllRegionSlugs } from "@/data/regions";
import { PHONE_TEL, SITE_NAME, SITE_URL } from "@/lib/constants";
import { getRegionSeo } from "@/lib/seo";

type Props = {
  params: Promise<{ bolge: string }>;
};

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllRegionSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { bolge } = await params;
  const region = findRegion(bolge);
  const seo = getRegionSeo(bolge);
  if (!region || !seo) return {};

  return {
    title: seo.title,
    description: seo.description,
    keywords: [
      "Çilingir 15 Dk Kapıda",
      "acil çilingir hizmeti",
      "nöbetçi çilingir",
      "7/24 çilingir",
      region.name,
    ],
    alternates: {
      canonical: `/cilingir/${region.slug}`,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${SITE_URL}/cilingir/${region.slug}`,
      locale: "tr_TR",
      type: "website",
    },
  };
}

export default async function RegionPage({ params }: Props) {
  const { bolge } = await params;
  const region = findRegion(bolge);
  const seo = getRegionSeo(bolge);
  if (!region || !seo) notFound();

  const pageUrl = `${SITE_URL}/cilingir/${region.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    name: `${SITE_NAME} - ${region.name}`,
    url: pageUrl,
    telephone: PHONE_TEL,
    logo: `${SITE_URL}/getirlogo.png`,
    image: `${SITE_URL}${region.image}`,
    description: seo.description,
    areaServed: {
      "@type": "Place",
      name: region.name,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: region.name,
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    openingHours: "Mo-Su 00:00-23:59",
    serviceType: [
      "acil çilingir hizmeti",
      "nöbetçi çilingir",
      "7/24 çilingir",
      "hasarsız kilit açma",
      "gece çilingir",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <StageHero
          compact
          live={`${region.name} · aktif ekibimiz sahada`}
          kicker={`${region.name} · 7/24 çilingir`}
          {...splitStageHeadline(seo.h1)}
          sub={`${region.name} acil çilingir hizmeti`}
          lead={region.presenceLine}
          secondaryLead={region.description}
          meterValue={region.avgResponseMinutes}
          ticker={region.neighborhoods.map((n) => n.name)}
          breadcrumb={
            <Breadcrumb
              items={[
                { href: "/", label: "Ana Sayfa" },
                { label: region.name },
              ]}
            />
          }
        />

        <section className="section wrap" aria-label="Hizmet vaatleri">
          <h2>
            {region.name} acil çilingir hizmeti — aktif ekibimiz sahada
          </h2>
          <div className="keyword-grid">
            {seo.blocks.map((block) => (
              <article className="keyword-card" key={block.heading}>
                <h3>{block.heading}</h3>
                <p>{block.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section wrap">
          <h2>
            {region.name} mahallelerinde size en yakın çilingir
          </h2>
          <div className="region-grid">
            {region.neighborhoods.map((n) => (
              <Link
                key={n.slug}
                href={`/cilingir/${region.slug}/${n.slug}`}
                className="region-card"
              >
                <span className="region-card__time">
                  {n.avgResponseMinutes} dk
                </span>
                <h3>{n.name} çilingir</h3>
                <p>{n.heroLine}</p>
                <span className="region-card__go">Sayfaya git →</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
