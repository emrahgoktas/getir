import type { Metadata } from "next";
import { CallCtas } from "@/components/CallCtas";
import { Breadcrumb } from "@/components/Chrome";
import { ContactForm } from "@/components/ContactForm";
import { PHONE_DISPLAY, PHONE_HREF, PHONE_TEL, SITE_NAME, SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

const title = "İletişim | Acil Çilingir Hizmeti | Getir Çilingir";
const description =
  "Getir Çilingir iletişim: nöbetçi çilingir ve 7/24 çilingir hattı. Formu doldurun veya arayın. Çilingir 15 Dk Kapıda, aktif ekibimiz sahada.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/iletisim" },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/iletisim`,
    locale: "tr_TR",
    type: "website",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: title,
    url: `${SITE_URL}/iletisim`,
    mainEntity: {
      "@type": "Locksmith",
      name: SITE_NAME,
      logo: `${SITE_URL}/getirlogo.png`,
      telephone: PHONE_TEL,
      url: SITE_URL,
      areaServed: "İstanbul",
      openingHours: "Mo-Su 00:00-23:59",
    },
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
              { label: "İletişim" },
            ]}
          />
        </div>
        <section className="hero wrap">
          <p className="hero__kicker">Nöbetçi çilingir · 7/24 çilingir</p>
          <h1>İletişim — acil çilingir hizmeti, Çilingir 15 Dk Kapıda</h1>
          <p className="hero__lead">
            Size en yakın çilingir hattı tek merkeze bağlı değil. Formu
            gönderin veya{" "}
            <a href={PHONE_HREF}>{PHONE_DISPLAY}</a> numarasını tuşlayın.
            Aktif ekibimiz sahada, konumuza 15 dk mesafede.
          </p>
          <CallCtas />
        </section>
        <section className="section wrap contact-layout">
          <div>
            <h2>İletişim formu</h2>
            <ContactForm />
          </div>
          <aside className="contact-aside">
            <h2>Direkt hat</h2>
            <p>
              En yakın çilingir ve gece çilingir çağrısı için beklemeyin.
              Hasarsız kilit açma ve garantili çilingir aynı vardiyada.
            </p>
            <ul className="service-list">
              <li>Telefon: {PHONE_DISPLAY}</li>
              <li>WhatsApp: {PHONE_DISPLAY}</li>
              <li>Saat: 7/24 çilingir — 00:00–23:59</li>
              <li>Bölge: İstanbul kuzey hattı</li>
            </ul>
          </aside>
        </section>
      </main>
    </>
  );
}
