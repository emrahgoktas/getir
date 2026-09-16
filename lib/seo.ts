export const SEO_KEYWORDS = [
  "Çilingir 15 Dk Kapıda",
  "acil çilingir hizmeti",
  "konumuza 15 dk mesafede",
  "nöbetçi çilingir",
  "en yakın çilingir",
  "7/24 çilingir",
  "hasarsız kilit açma",
  "gece çilingir",
  "garantili çilingir",
  "size en yakın çilingir",
  "aktif ekibimiz sahada",
] as const;

export type KeywordBlock = {
  heading: string;
  text: string;
};

export type RegionSeo = {
  title: string;
  description: string;
  h1: string;
  blocks: KeywordBlock[];
};

export const regionSeo: Record<string, RegionSeo> = {
  "sariyer-kuzey": {
    title: "Sarıyer Kuzey Çilingir 15 Dk Kapıda | Nöbetçi Çilingir",
    description:
      "Sarıyer Kuzey Hattı'nda acil çilingir hizmeti. Çilingir 15 Dk Kapıda, nöbetçi çilingir ve hasarsız kilit açma. Aktif ekibimiz sahada.",
    h1: "Sarıyer Kuzey Hattı'nda Çilingir 15 Dk Kapıda",
    blocks: [
      {
        heading: "Sarıyer'de acil çilingir hizmeti — konumuza 15 dk mesafede",
        text: "İskele, orman girişi ve villa siteleri aynı çağrı havuzunda. Sarıyer Kuzey'de merkeze dönmeden, çağrının düştüğü halkada müdahale ediyoruz.",
      },
      {
        heading: "Nöbetçi çilingir ve 7/24 çilingir",
        text: "Vapur saati, gece nöbeti ve pazar sabahı aynı vardiya. Sarıyer–Zekeriyaköy hattında nöbetçi çilingir aracı durmuyor.",
      },
      {
        heading: "En yakın çilingir, size en yakın çilingir",
        text: "Bahçeköy villası ile Kireçburnu sahili aynı ofisten çıkmaz. Size en yakın çilingir, zaten bu hatta bekleyen ekiptir.",
      },
      {
        heading: "Hasarsız kilit açma ve garantili çilingir",
        text: "Yalı tipi kapı ve eski apartman silindirinde önce hasarsız kilit açma deneriz. Açılan kilit ve değişen göbek garantili çilingir kapsamındadır.",
      },
      {
        heading: "Gece çilingir: aktif ekibimiz sahada",
        text: "Belgrad yolu gece karanlık ve dardır. Gece çilingir çağrısı ofisten yola çıkmaz; aktif ekibimiz sahada, orman ve sahil yaklaşımlarında durur.",
      },
    ],
  },
  "maslak-hatti": {
    title: "Maslak Çilingir 15 Dk Kapıda | 7/24 Çilingir",
    description:
      "Maslak İş Merkezi Hattı'nda acil çilingir hizmeti. Plaza ve rezidansa Çilingir 15 Dk Kapıda, hasarsız kilit açma, nöbetçi çilingir.",
    h1: "Maslak Hattı'nda Çilingir 15 Dk Kapıda",
    blocks: [
      {
        heading: "Maslak'ta acil çilingir hizmeti — konumuza 15 dk mesafede",
        text: "Kule lobisi, kat kartı ve vale prosedürü bu hatta işin yarısıdır. Acil çilingir hizmeti, plaza çağrısında merkeze uğramadan 15 dk mesafede kalır.",
      },
      {
        heading: "Nöbetçi çilingir ve 7/24 çilingir",
        text: "Mesai bitişi ve gece ofis kilidi Maslak'ta gündüzden yoğundur. 7/24 çilingir ve nöbetçi çilingir aynı saha aracında nöbet tutar.",
      },
      {
        heading: "En yakın çilingir, size en yakın çilingir",
        text: "Vadistanbul, Skyland ve Maslak 1453 tek ofisten yetişmez. Size en yakın çilingir, kule kuşağında bekleyen ekiptir.",
      },
      {
        heading: "Hasarsız kilit açma ve garantili çilingir",
        text: "Ofis silindiri ve rezidans çelik kapıda önce hasarsız kilit açma. Kartlı sistem ve göbek değişimi garantili çilingir işidir.",
      },
      {
        heading: "Gece çilingir: aktif ekibimiz sahada",
        text: "Gece kilitlenen kat, sabah toplantısını yakar. Gece çilingir çağrısı Büyükdere'ye inmez; aktif ekibimiz sahada, plaza hattındadır.",
      },
    ],
  },
  kagithane: {
    title: "Kağıthane Çilingir 15 Dk Kapıda | Nöbetçi Çilingir",
    description:
      "Kağıthane'de acil çilingir hizmeti. Çilingir 15 Dk Kapıda, 7/24 çilingir, hasarsız kilit açma. Aktif ekibimiz sahada, dere hattında.",
    h1: "Kağıthane'de Çilingir 15 Dk Kapıda",
    blocks: [
      {
        heading: "Kağıthane acil çilingir hizmeti — konumuza 15 dk mesafede",
        text: "Meydan, dere ve yeni kuleler aynı halkada. Acil çilingir hizmeti burada Anadolu yakasından ekip beklemez; konumuza 15 dk mesafede kalır.",
      },
      {
        heading: "Nöbetçi çilingir ve 7/24 çilingir",
        text: "Kağıthane merkezde günün her saati nöbetçi çilingir var. 7/24 çilingir, kule lobisi ile yokuş apartmanı aynı turda çözer.",
      },
      {
        heading: "En yakın çilingir, size en yakın çilingir",
        text: "Dere hattı tek merkeze bağlı değildir. Size en yakın çilingir, meydanda tutulan araçtır — en yakın çilingir araması buraya düşer.",
      },
      {
        heading: "Hasarsız kilit açma ve garantili çilingir",
        text: "Yeni konut göbeği ve eski mahalle kilidi karışır. Önce hasarsız kilit açma, gerekirse garantili çilingir ile yerinde değişim.",
      },
      {
        heading: "Gece çilingir: aktif ekibimiz sahada",
        text: "Gece çilingir çağrısı şehrin diğer yakasından gelmez. Aktif ekibimiz sahada; Kağıthane meydanı ve dere boyunca bekler.",
      },
    ],
  },
  "levent-etiler": {
    title: "Levent Etiler Çilingir 15 Dk Kapıda | Garantili Çilingir",
    description:
      "Levent–Etiler hattında acil çilingir hizmeti. Çilingir 15 Dk Kapıda, nöbetçi çilingir, hasarsız kilit açma, gece çilingir.",
    h1: "Levent - Etiler'de Çilingir 15 Dk Kapıda",
    blocks: [
      {
        heading: "Levent–Etiler acil çilingir hizmeti — konumuza 15 dk mesafede",
        text: "Finans kuleleri ile site güvenlikleri ayrı dünyadır. Acil çilingir hizmeti bu iki kuşakta da konumuza 15 dk mesafede tutulur.",
      },
      {
        heading: "Nöbetçi çilingir ve 7/24 çilingir",
        text: "Plaza mesai sonu ve Etiler site çağrısı aynı nöbetçi çilingir vardiyasına düşer. 7/24 çilingir, lobi protokolünü ezbere bilir.",
      },
      {
        heading: "En yakın çilingir, size en yakın çilingir",
        text: "Zincirlikuyu ile Akatlar aynı çıkış noktası değildir. Size en yakın çilingir, finans hattı ile siteler arasında bekleyen ekiptir.",
      },
      {
        heading: "Hasarsız kilit açma ve garantili çilingir",
        text: "Yüksek güvenlikli çelik kapıda hasarsız kilit açma öncelikli. Kartlı kilit ve göbek işi garantili çilingir kapsamındadır.",
      },
      {
        heading: "Gece çilingir: aktif ekibimiz sahada",
        text: "Gece ofis kilidi Levent'te pahalı bekleyiştir. Gece çilingir çağrısı merkeze inmez; aktif ekibimiz sahada, metro ve site yaklaşımlarında.",
      },
    ],
  },
  "besiktas-sahil": {
    title: "Beşiktaş Çilingir 15 Dk Kapıda | Gece Çilingir",
    description:
      "Beşiktaş Sahil Hattı'nda acil çilingir hizmeti. Çilingir 15 Dk Kapıda, 7/24 çilingir, hasarsız kilit açma. Aktif ekibimiz sahada.",
    h1: "Beşiktaş Sahil Hattı'nda Çilingir 15 Dk Kapıda",
    blocks: [
      {
        heading: "Beşiktaş'ta acil çilingir hizmeti — konumuza 15 dk mesafede",
        text: "Meydan, iskele ve sahil restoranı aynı gece kilitlenir. Acil çilingir hizmeti ana caddeye girmeden, konumuza 15 dk mesafede yan sokakta durur.",
      },
      {
        heading: "Nöbetçi çilingir ve 7/24 çilingir",
        text: "Maç, konser ve turist kalabalığı nöbetçi çilingir süresini bozmaz. 7/24 çilingir, Beşiktaş'tan Bebek'e sahile paralel bekler.",
      },
      {
        heading: "En yakın çilingir, size en yakın çilingir",
        text: "Ortaköy Camii ile Nişantaşı grid'i ayrı çıkış ister. Size en yakın çilingir, sahil şeridinde tutulan ekiptir.",
      },
      {
        heading: "Hasarsız kilit açma ve garantili çilingir",
        text: "Dükkân kepengi ve daire çelik kapısında önce hasarsız kilit açma. Değişen kilit garantili çilingir güvencesindedir.",
      },
      {
        heading: "Gece çilingir: aktif ekibimiz sahada",
        text: "Sahil kapanınca gece çilingir çağrısı koyun içinde kaybolmasın diye aktif ekibimiz sahada; parka paralel yan yolda bekler.",
      },
    ],
  },
};

export function getRegionSeo(slug: string): RegionSeo | null {
  return regionSeo[slug] ?? null;
}

export type NeighborhoodSeo = {
  title: string;
  description: string;
  keywords: string[];
  h1Title: string;
  h1Hit: string;
  h1Sub: string;
  lead: string;
  h2Work: string;
  h2Services: string;
  h2Siblings: string;
  services: string[];
  jsonLdDescription: string;
  serviceTypes: string[];
};

/** Ads-aligned overrides. Key: `${bolge}/${mahalle}`. Only listed pages diverge from the template. */
export const neighborhoodSeo: Record<string, NeighborhoodSeo> = {
  "maslak-hatti/maslak": {
    title: "Maslak Çilingir 15 Dk",
    description:
      "Maslak acil çilingir, hasarsız kilit açma. 15 dk kapıda, hemen ara.",
    keywords: [
      "maslak çilingir",
      "çilingir maslak",
      "maslak cilingir",
      "cilingir maslak",
      "maslak acil çilingir",
      "maslak nöbetçi çilingir",
      "hasarsız kilit açma",
      "garantili kilit açma",
      "en yakın çilingir",
      "konuma en yakın çilingir",
    ],
    h1Title: "Maslak Çilingir",
    h1Hit: "15 Dk",
    h1Sub: "Maslak acil çilingir",
    lead:
      "Maslak Meydan yakını — hasarsız kilit açma, konuma en yakın çilingir. 10-15 dk mesafede, hemen ara.",
    h2Work: "Maslak acil çilingir — Çilingir Maslak",
    h2Services: "Maslak'ta hasarsız kilit açma ve garantili kilit açma",
    h2Siblings: "Maslak çevresinde en yakın çilingir",
    services: [
      "Maslak acil çilingir — plaza, ofis ve araç kapısı",
      "Hasarsız kilit açma",
      "Garantili kilit açma",
      "Maslak nöbetçi çilingir · 7/24 çilingir",
      "Konuma en yakın çilingir — Maslak plaza hattı",
      "Maslak gece çilingir",
    ],
    jsonLdDescription:
      "Maslak acil çilingir, hasarsız kilit açma. 15 dk kapıda, hemen ara. Nöbetçi çilingir, garantili kilit açma, en yakın çilingir.",
    serviceTypes: [
      "maslak acil çilingir",
      "hasarsız kilit açma",
      "garantili kilit açma",
      "maslak nöbetçi çilingir",
      "7/24 çilingir",
      "en yakın çilingir",
      "maslak gece çilingir",
    ],
  },
};

export function getNeighborhoodSeo(
  bolge: string,
  mahalle: string,
): NeighborhoodSeo | null {
  return neighborhoodSeo[`${bolge}/${mahalle}`] ?? null;
}

export function neighborhoodHeadings(name: string) {
  return {
    work: `${name} acil çilingir hizmeti — Çilingir 15 Dk Kapıda`,
    services: `${name}'de hasarsız kilit açma ve garantili çilingir`,
    siblings: `${name} çevresinde size en yakın çilingir`,
  };
}
