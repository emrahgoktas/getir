import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CallCtas } from "@/components/CallCtas";
import { Breadcrumb } from "@/components/Chrome";
import { StageHero, splitStageHeadline } from "@/components/StageHero";
import { getAreaContent } from "@/data/area-content";
import {
  areaPageTitle,
  findNeighborhood,
  getAllNeighborhoodSlugs,
} from "@/data/regions";
import {
  PHONE_TEL,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";
import { getNeighborhoodSeo, neighborhoodHeadings } from "@/lib/seo";

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
  const seo = getNeighborhoodSeo(bolge, mahalle);

  const title = seo?.title ?? areaPageTitle(neighborhood.name);
  const description =
    seo?.description ??
    `${neighborhood.name} çilingir: 7/24 kapı açma, kilit/barel değişimi, çelik kapı ve kasa açma. ${neighborhood.referenceLandmark}.`;
  const keywords = seo?.keywords ?? [
    `${neighborhood.name} çilingir`,
    "kapı açma",
    "kilit değişimi",
    "çelik kapı",
    "kasa açma",
    "7/24 çilingir",
    "hasarsız kilit açma",
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `/cilingir/${bolge}/${mahalle}`,
    },
    openGraph: {
      title,
      description,
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
  const seo = getNeighborhoodSeo(bolge, mahalle);
  const area = getAreaContent(bolge, mahalle);
  const isMaslakLanding = bolge === "maslak-hatti" && mahalle === "maslak";

  const pageUrl = `${SITE_URL}/cilingir/${region.slug}/${neighborhood.slug}`;
  const imageUrl = `${SITE_URL}${region.image}`;
  const defaultHeadings = neighborhoodHeadings(neighborhood.name);
  const headline = seo
    ? { title: seo.h1Title, hit: seo.h1Hit }
    : splitStageHeadline(neighborhood.heroLine);

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
    description:
      seo?.jsonLdDescription ??
      `${neighborhood.name} çilingir: 7/24 kapı açma, kilit/barel değişimi, çelik kapı, kasa açma.`,
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
    serviceType: seo?.serviceTypes ?? [
      "kapı açma",
      "kilit değişimi",
      "çelik kapı",
      "kasa açma",
      "hasarsız kilit açma",
      "7/24 çilingir",
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

  const faqJsonLd =
    area && area.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: area.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  const siblingNeighborhoods = region.neighborhoods.filter(
    (n) => n.slug !== neighborhood.slug,
  );
  const headings = {
    work: seo?.h2Work ?? defaultHeadings.work,
    services: seo?.h2Services ?? defaultHeadings.services,
    siblings: seo?.h2Siblings ?? defaultHeadings.siblings,
    faq: seo?.h2Faq ?? defaultHeadings.faq,
  };
  const serviceItems =
    area?.services.map((s) => `${s.name} — ${s.detail}`) ??
    seo?.services ?? [
      "Kapı açma — ev, ofis ve çelik kapı",
      "Kilit / barel değişimi",
      "Çelik kapı göbeği",
      "Kasa açma",
      "7/24 çilingir ve gece çilingir",
      "Hasarsız kilit açma",
    ];

  const bodyParagraphs = area?.body?.length
    ? area.body
    : [neighborhood.description];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}

      <main>
        <StageHero
          compact
          live={`${neighborhood.name} · aktif ekibimiz sahada`}
          kicker={
            seo?.kicker ??
            `${region.name} · nöbetçi çilingir · 7/24 çilingir`
          }
          title={headline.title}
          hit={headline.hit}
          sub={seo?.h1Sub ?? `${neighborhood.name} kapı açma & kilit değişimi`}
          lead={
            seo?.lead ??
            `${neighborhood.referenceLandmark}. Kapı açma, kilit/barel değişimi, çelik kapı ve kasa açma.`
          }
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
            {bodyParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          {area && (area.landmarks.length > 0 || area.streets.length > 0) ? (
            <div className="area-local">
              {area.landmarks.length > 0 ? (
                <div>
                  <h3 className="area-local__label">Yakın noktalar</h3>
                  <ul className="area-local__list">
                    {area.landmarks.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {area.streets.length > 0 ? (
                <div>
                  <h3 className="area-local__label">Sokak / hat referansları</h3>
                  <ul className="area-local__list">
                    {area.streets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ) : null}
          <div className="media-frame">
            <Image
              src={region.image}
              alt={
                isMaslakLanding
                  ? "Maslak çilingir hizmet bölgesi — plaza ve ofis hattı"
                  : `${neighborhood.name} çilingir hizmet bölgesi`
              }
              width={1200}
              height={675}
              sizes="(max-width: 768px) 100vw, 72rem"
              priority={Boolean(seo)}
            />
          </div>
        </section>

        <section className="section wrap" aria-label="Hizmetler">
          <h2>{headings.services}</h2>
          <ul className="service-list">
            {serviceItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <CallCtas variant="inline" />
        </section>

        {area && area.faq.length > 0 ? (
          <section className="section wrap" aria-label="Sık sorulanlar">
            <h2>{headings.faq}</h2>
            <div className="faq-list">
              {area.faq.map((item) => (
                <details key={item.question} className="faq-item">
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        ) : null}

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
