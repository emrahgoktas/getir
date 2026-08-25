import type { Metadata } from "next";
import { CallCtas } from "@/components/CallCtas";
import { Breadcrumb } from "@/components/Chrome";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

const title = "Sık sorulan sorular | Çilingir 15 Dk Kapıda";
const description =
  "Getir Çilingir SSS: acil çilingir hizmeti, nöbetçi çilingir, hasarsız kilit açma, gece çilingir ve ücret.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/sss" },
};

const faqs = [
  {
    q: "Çilingir 15 Dk Kapıda kesin midir?",
    a: "Ortalama varış süresidir. Hatta bekleyen nöbetçi çilingir ile tutulur; trafik, site girişi ve yanlış adres süreyi uzatabilir. Konumuza 15 dk mesafede cümlesi tek ofisten çıkış modeli değildir.",
  },
  {
    q: "Gece çilingir ve 7/24 çilingir var mı?",
    a: "Evet. Acil çilingir hizmeti 00:00–23:59 nöbetçidir. Gece çilingir ayrı bir “sabah gelelim” ekibi değildir; aktif ekibimiz sahada bekler.",
  },
  {
    q: "Hasarsız kilit açma her kapıda olur mu?",
    a: "İlk yöntem hasarsız kilit açmadır. Kırık göbek, pas ve kaynaklı kapıda kontrollü söküm gerekebilir. Garantili çilingir, yöntemi kapıda söyler; kapıyı kırmayı ilk seçenek yapmaz.",
  },
  {
    q: "En yakın çilingir siz misiniz?",
    a: "Harita pin’i değil, hattınızdaki araçtır. Size en yakın çilingir Sarıyer Kuzey, Maslak, Kağıthane, Levent–Etiler veya Beşiktaş sahil sayfasından seçilir.",
  },
  {
    q: "Ücret ne kadar?",
    a: "Kapı tipi, parça ve saat (gece çilingir) yerinde netleşir. Çağrıda aralık söylenebilir. İletişim formundan veya telefondan mahalle ve kapı tipini iletin.",
  },
  {
    q: "Site ve plaza girişi?",
    a: "Lobi, vale ve güvenlik prosedürünü bilen ekip gider. Kimlik ve yetki kontrolü istenebilir; bu hem sizin hem yönetimin güvenliği içindir.",
  },
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
    url: `${SITE_URL}/sss`,
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
              { label: "SSS" },
            ]}
          />
        </div>
        <section className="hero wrap">
          <p className="hero__kicker">Güven · şeffaflık</p>
          <h1>Sık sorulan sorular — acil çilingir hizmeti</h1>
          <p className="hero__lead">
            Nöbetçi çilingir, hasarsız kilit açma ve Çilingir 15 Dk Kapıda
            hakkında net cevaplar.
          </p>
          <CallCtas />
        </section>
        <section className="section wrap">
          <div className="keyword-grid">
            {faqs.map((item) => (
              <article className="keyword-card" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
