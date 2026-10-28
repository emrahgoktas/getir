import { areaPageTitle } from "@/data/regions";

export const SEO_KEYWORDS = [
  "acil çilingir hizmeti",
  "nöbetçi çilingir",
  "en yakın çilingir",
  "7/24 çilingir",
  "hasarsız kilit açma",
  "gece çilingir",
  "kapı açma",
  "kilit değişimi",
  "çelik kapı",
  "kasa açma",
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
    title: "Sarıyer Kuzey Çilingir | 7/24 Kapı Açma & Kilit Değişimi",
    description:
      "Sarıyer Kuzey Hattı'nda acil çilingir: kapı açma, kilit/barel değişimi, çelik kapı ve kasa açma. Nöbetçi çilingir, hasarsız kilit açma.",
    h1: "Sarıyer Kuzey Hattı'nda Çilingir — 7/24 Kapı Açma",
    blocks: [
      {
        heading: "Sarıyer'de acil çilingir hizmeti",
        text: "İskele, orman girişi ve villa siteleri aynı çağrı havuzunda. Sarıyer Kuzey'de merkeze dönmeden, çağrının düştüğü halkada müdahale edilir.",
      },
      {
        heading: "Nöbetçi çilingir ve 7/24 çilingir",
        text: "Vapur saati, gece nöbeti ve pazar sabahı aynı vardiya. Sarıyer–Zekeriyaköy hattında nöbetçi çilingir sahada durur.",
      },
      {
        heading: "Kapı açma, kilit değişimi, çelik kapı",
        text: "Yalı tipi kapı ve eski apartman silindirinde önce hasarsız kilit açma denenir. Barel değişimi ve çelik kapı göbeği yerinde çözülür.",
      },
      {
        heading: "Gece çilingir: aktif ekibimiz sahada",
        text: "Belgrad yolu gece karanlık ve dardır. Gece çilingir çağrısı uzak bir merkeze düşmez; aktif ekibimiz sahada, orman ve sahil yaklaşımlarında durur.",
      },
    ],
  },
  "maslak-hatti": {
    title: "Maslak Çilingir | 7/24 Kapı Açma & Kilit Değişimi",
    description:
      "Maslak İş Merkezi Hattı'nda acil çilingir: plaza ve rezidansta kapı açma, kilit/barel değişimi, çelik kapı, kasa açma. Nöbetçi çilingir.",
    h1: "Maslak Hattı'nda Çilingir — 7/24 Kapı Açma",
    blocks: [
      {
        heading: "Maslak'ta acil çilingir hizmeti",
        text: "Kule lobisi, kat kartı ve vale prosedürü bu hatta işin yarısıdır. Acil çilingir hizmeti, plaza çağrısında merkeze uğramadan saha hattında kalır.",
      },
      {
        heading: "Nöbetçi çilingir ve 7/24 çilingir",
        text: "Mesai bitişi ve gece ofis kilidi Maslak'ta gündüzden yoğundur. 7/24 çilingir ve nöbetçi çilingir aynı saha hattında nöbet tutar.",
      },
      {
        heading: "İTÜ, plaza ve rezidans aynı hatta",
        text: "Vadistanbul, Skyland, Maslak 1453 ve İTÜ Ayazağa çevresi tek uzak ofisten yetişmez. Size en yakın çilingir, kule ve kampüs kuşağında bekleyen ekiptir.",
      },
      {
        heading: "Kapı açma, barel, çelik kapı, kasa",
        text: "Ofis silindiri ve rezidans çelik kapıda önce hasarsız kilit açma. Kartlı sistem, göbek değişimi ve kasa açma yerinde değerlendirilir.",
      },
      {
        heading: "Gece çilingir: aktif ekibimiz sahada",
        text: "Gece kilitlenen kat, sabah toplantısını yakar. Gece çilingir çağrısı Büyükdere'ye inmez; aktif ekibimiz sahada, plaza hattındadır.",
      },
    ],
  },
  kagithane: {
    title: "Kağıthane Çilingir | 7/24 Kapı Açma & Kilit Değişimi",
    description:
      "Kağıthane'de acil çilingir: kapı açma, kilit/barel değişimi, çelik kapı ve kasa açma. 7/24 çilingir, hasarsız kilit açma.",
    h1: "Kağıthane'de Çilingir — 7/24 Kapı Açma",
    blocks: [
      {
        heading: "Kağıthane acil çilingir hizmeti",
        text: "Meydan, dere ve yeni kuleler aynı halkada. Acil çilingir hizmeti burada Anadolu yakasından ekip beklemez; merkez hatta kalır.",
      },
      {
        heading: "Nöbetçi çilingir ve 7/24 çilingir",
        text: "Kağıthane merkezde günün her saati nöbetçi çilingir var. 7/24 çilingir, kule lobisi ile yokuş apartmanı aynı turda çözer.",
      },
      {
        heading: "Hasarsız kilit açma ve barel değişimi",
        text: "Yeni konut göbeği ve eski mahalle kilidi karışır. Önce hasarsız kilit açma, gerekirse yerinde barel / göbek değişimi.",
      },
      {
        heading: "Gece çilingir: aktif ekibimiz sahada",
        text: "Gece çilingir çağrısı şehrin diğer yakasından gelmez. Aktif ekibimiz sahada; Kağıthane meydanı ve dere boyunca bekler.",
      },
    ],
  },
  "levent-etiler": {
    title: "Levent Etiler Çilingir | 7/24 Kapı Açma & Kilit Değişimi",
    description:
      "Levent–Etiler hattında acil çilingir: kapı açma, kilit/barel değişimi, çelik kapı, kasa açma. Nöbetçi çilingir, hasarsız kilit açma.",
    h1: "Levent - Etiler'de Çilingir — 7/24 Kapı Açma",
    blocks: [
      {
        heading: "Levent–Etiler acil çilingir hizmeti",
        text: "Finans kuleleri ile site güvenlikleri ayrı dünyadır. Acil çilingir hizmeti bu iki kuşakta da saha hattında tutulur.",
      },
      {
        heading: "Nöbetçi çilingir ve 7/24 çilingir",
        text: "Plaza mesai sonu ve Etiler site çağrısı aynı nöbetçi çilingir vardiyasına düşer. 7/24 çilingir, lobi protokolünü ezbere bilir.",
      },
      {
        heading: "Çelik kapı ve kasa açma",
        text: "Yüksek güvenlikli çelik kapıda hasarsız kilit açma öncelikli. Kartlı kilit, göbek işi ve ofis kasası yerinde değerlendirilir.",
      },
      {
        heading: "Gece çilingir: aktif ekibimiz sahada",
        text: "Gece ofis kilidi Levent'te pahalı bekleyiştir. Gece çilingir çağrısı merkeze inmez; aktif ekibimiz sahada, metro ve site yaklaşımlarında.",
      },
    ],
  },
  "besiktas-sahil": {
    title: "Beşiktaş Çilingir | 7/24 Kapı Açma & Kilit Değişimi",
    description:
      "Beşiktaş Sahil Hattı'nda acil çilingir: kapı açma, kilit/barel değişimi, çelik kapı. 7/24 çilingir, hasarsız kilit açma.",
    h1: "Beşiktaş Sahil Hattı'nda Çilingir — 7/24 Kapı Açma",
    blocks: [
      {
        heading: "Beşiktaş'ta acil çilingir hizmeti",
        text: "Meydan, iskele ve sahil restoranı aynı gece kilitlenir. Acil çilingir hizmeti ana caddeye girmeden yan sokakta durur.",
      },
      {
        heading: "Nöbetçi çilingir ve 7/24 çilingir",
        text: "Maç, konser ve turist kalabalığı nöbetçi çilingir yaklaşımını bozmaz. 7/24 çilingir, Beşiktaş'tan Bebek'e sahile paralel bekler.",
      },
      {
        heading: "Kapı açma ve çelik kapı",
        text: "Dükkân kepengi ve daire çelik kapısında önce hasarsız kilit açma. Değişen barel yerinde uygulanır.",
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
  kicker: string;
  h1Title: string;
  h1Hit: string;
  h1Sub: string;
  lead: string;
  h2Work: string;
  h2Services: string;
  h2Siblings: string;
  h2Faq: string;
  services: string[];
  jsonLdDescription: string;
  serviceTypes: string[];
};

function landing(p: {
  name: string;
  loc: string;
  landmark: string;
  scene: string;
  streetsHint: string;
}): NeighborhoodSeo {
  const fold = p.name.toLocaleLowerCase("tr");
  return {
    title: areaPageTitle(p.name),
    description: `${p.name} çilingir: 7/24 kapı açma, kilit/barel değişimi, çelik kapı ve kasa açma. ${p.landmark}.`,
    keywords: [
      `${fold} çilingir`,
      `çilingir ${fold}`,
      `${fold} acil çilingir`,
      `${fold} nöbetçi çilingir`,
      "kapı açma",
      "kilit değişimi",
      "çelik kapı",
      "kasa açma",
      "hasarsız kilit açma",
      "7/24 çilingir",
    ],
    kicker: `${p.name} nöbetçi çilingir · 7/24 çilingir`,
    h1Title: `${p.name} Çilingir`,
    h1Hit: "7/24 Kapı Açma",
    h1Sub: `${p.name} kilit değişimi & çelik kapı`,
    lead: `${p.landmark}. ${p.streetsHint} Kapı açma, barel değişimi, çelik kapı ve kasa açma — hasarsız kilit açma öncelikli.`,
    h2Work: `${p.name} çilingir — yerel hat ve kapı tipleri`,
    h2Services: `${p.loc} kapı açma, kilit değişimi, çelik kapı, kasa açma`,
    h2Siblings: `${p.name} çevresinde diğer mahalleler`,
    h2Faq: `${p.name} çilingir — sık sorulanlar`,
    services: [
      `${p.name} kapı açma — ${p.scene}`,
      "Kilit / barel değişimi",
      "Çelik kapı göbeği ve çoklu kilit",
      "Kasa açma",
      `${p.name} nöbetçi çilingir · 7/24 çilingir`,
      "Hasarsız kilit açma",
    ],
    jsonLdDescription: `${p.name} çilingir: 7/24 kapı açma, kilit/barel değişimi, çelik kapı, kasa açma. ${p.landmark}.`,
    serviceTypes: [
      `${fold} kapı açma`,
      "kilit değişimi",
      "çelik kapı",
      "kasa açma",
      "hasarsız kilit açma",
      `${fold} nöbetçi çilingir`,
      "7/24 çilingir",
    ],
  };
}

/** Ads-aligned overrides. Key: `${bolge}/${mahalle}`. */
export const neighborhoodSeo: Record<string, NeighborhoodSeo> = {
  "maslak-hatti/maslak": {
    title: areaPageTitle("Maslak"),
    description:
      "Maslak çilingir: 7/24 kapı açma, kilit/barel değişimi, çelik kapı ve kasa açma. Maslak Meydan ve plaza hattı.",
    kicker: "Maslak nöbetçi çilingir · 7/24 çilingir",
    keywords: [
      "maslak çilingir",
      "çilingir maslak",
      "maslak cilingir",
      "cilingir maslak",
      "maslak acil çilingir",
      "maslak nöbetçi çilingir",
      "kapı açma",
      "kilit değişimi",
      "çelik kapı",
      "kasa açma",
      "hasarsız kilit açma",
    ],
    h1Title: "Maslak Çilingir",
    h1Hit: "7/24 Kapı Açma",
    h1Sub: "Kilit değişimi & çelik kapı",
    lead:
      "Maslak Meydan yakını plaza ve ofis kuşağı — kapı açma, barel değişimi, çelik kapı ve kasa açma. Hasarsız kilit açma öncelikli.",
    h2Work: "Maslak çilingir — plaza, ofis ve rezidans",
    h2Services: "Maslak'ta kapı açma, kilit değişimi, çelik kapı, kasa açma",
    h2Siblings: "Maslak çevresinde diğer mahalleler",
    h2Faq: "Maslak çilingir — sık sorulanlar",
    services: [
      "Maslak kapı açma — plaza, ofis ve çelik kapı",
      "Kilit / barel değişimi",
      "Çelik kapı göbeği",
      "Kasa açma",
      "Maslak nöbetçi çilingir · 7/24 çilingir",
      "Hasarsız kilit açma",
    ],
    jsonLdDescription:
      "Maslak çilingir: 7/24 kapı açma, kilit/barel değişimi, çelik kapı, kasa açma. Plaza ve ofis hattı.",
    serviceTypes: [
      "maslak kapı açma",
      "kilit değişimi",
      "çelik kapı",
      "kasa açma",
      "hasarsız kilit açma",
      "maslak nöbetçi çilingir",
      "7/24 çilingir",
    ],
  },
  "maslak-hatti/itu": landing({
    name: "İTÜ",
    loc: "İTÜ Ayazağa çevresinde",
    landmark: "İTÜ Ayazağa Kampüsü yakını",
    scene: "kampüs çevresi öğrenci evi, lojman ve site kapısı",
    streetsHint: "Ayazağa Caddesi ve kampüs girişleri referans alınır.",
  }),
  "maslak-hatti/maslak1453": landing({
    name: "Maslak 1453",
    loc: "Maslak 1453'te",
    landmark: "Maslak 1453 sitesi yakını",
    scene: "site içi daire ve otopark katı",
    streetsHint: "Blok / ada ve giriş kapısı adı yönlendirmeyi kısaltır.",
  }),
  "maslak-hatti/skyland": landing({
    name: "Skyland",
    loc: "Skyland'de",
    landmark: "Skyland AVM ve kuleler yakını",
    scene: "kule daire, ofis ve mağaza kapısı",
    streetsHint: "Kule adı ve kat bilgisi yeterlidir.",
  }),
  "maslak-hatti/ayazaga": landing({
    name: "Ayazağa",
    loc: "Ayazağa'da",
    landmark: "Ayazağa mahalle merkezi yakını",
    scene: "öğrenci evi, apartman ve işyeri kapısı",
    streetsHint: "Kampüs çevresi için ayrıca İTÜ sayfasına bakın.",
  }),
  "maslak-hatti/haciosman": landing({
    name: "Hacıosman",
    loc: "Hacıosman'da",
    landmark: "Hacıosman Metro İstasyonu yakını",
    scene: "metro çıkışı ve son durak apartmanları",
    streetsHint: "Metro çıkışı referans, asıl adres daire kapısıdır.",
  }),
  "maslak-hatti/resitpasa": landing({
    name: "Reşitpaşa",
    loc: "Reşitpaşa'da",
    landmark: "Reşitpaşa yokuş siteleri yakını",
    scene: "yokuş site ve lojman kapısı",
    streetsHint: "Site adı ve blok bilgisi bariyer girişini hızlandırır.",
  }),
  "maslak-hatti/vadistanbul": landing({
    name: "Vadistanbul",
    loc: "Vadistanbul'da",
    landmark: "Vadistanbul AVM yakını",
    scene: "AVM, rezidans ve ofis kulesi",
    streetsHint: "Kule / kat ve mağaza ayrımı çağrıda netleştirilir.",
  }),
  "maslak-hatti/darussafaka": landing({
    name: "Darüşşafaka",
    loc: "Darüşşafaka'da",
    landmark: "Darüşşafaka kampüsü yakını",
    scene: "kampüs çevresi ve site kapısı",
    streetsHint: "Kampüs lojmanı ile çevre apartman ayrılır.",
  }),
  "maslak-hatti/seyrantepe": landing({
    name: "Seyrantepe",
    loc: "Seyrantepe'de",
    landmark: "Seyrantepe Metro yakını",
    scene: "metro, atölye ve konut kapısı",
    streetsHint: "Kepenk ile daire kapısı ayrı set ister.",
  }),
  "maslak-hatti/poligon": landing({
    name: "Poligon",
    loc: "Poligon'da",
    landmark: "Poligon Caddesi yakını",
    scene: "site bölgesi çelik kapı",
    streetsHint: "Cadde üzerindeki site girişleri referans alınır.",
  }),
  "maslak-hatti/maden": landing({
    name: "Maden",
    loc: "Maden'de",
    landmark: "Maden Mahallesi merkezi yakını",
    scene: "atölye kepengi ve site kapısı",
    streetsHint: "İşyeri ve konut aynı sokakta olabilir.",
  }),
  "maslak-hatti/buyukdere": landing({
    name: "Büyükdere",
    loc: "Büyükdere'de",
    landmark: "Büyükdere Caddesi yakını",
    scene: "cadde ofisi ve apartman kapısı",
    streetsHint: "Yan sokak yaklaşımı cadde trafiğini aşar.",
  }),
  "sariyer-kuzey/sariyer": landing({
    name: "Sarıyer",
    loc: "Sarıyer'de",
    landmark: "Sarıyer İskelesi yakını",
    scene: "iskele, sahil apartmanı ve çarşı",
    streetsHint: "İskele–çarşı halkası ve yokuş sokaklar bilinen hattır.",
  }),
  "sariyer-kuzey/bahcekoy": landing({
    name: "Bahçeköy",
    loc: "Bahçeköy'de",
    landmark: "Belgrad Ormanı girişi yakını",
    scene: "villa sitesi ve bahçe kapısı",
    streetsHint: "Bariyer sonrası iç yol tarifi önemlidir.",
  }),
  "sariyer-kuzey/zekeriyakoy": landing({
    name: "Zekeriyaköy",
    loc: "Zekeriyaköy'de",
    landmark: "Zekeriyaköy merkez yakını",
    scene: "villa sitesi ve güvenlik bariyeri",
    streetsHint: "Site güvenliği ve otopark rampası işin parçasıdır.",
  }),
  "sariyer-kuzey/kirecburnu": landing({
    name: "Kireçburnu",
    loc: "Kireçburnu'nda",
    landmark: "Kireçburnu sahili yakını",
    scene: "sahil yokuşu ve yalı kapısı",
    streetsHint: "Sahile paralel yaklaşım tek yönü aşar.",
  }),
  "sariyer-kuzey/tarabya": landing({
    name: "Tarabya",
    loc: "Tarabya'da",
    landmark: "Tarabya üstü ve Tarabya Koyu yakını",
    scene: "Tarabya üstü site, koy ve otel kapısı",
    streetsHint: "Koy mu üst mü olduğu çağrıda netleştirilir.",
  }),
  "sariyer-kuzey/istinye": landing({
    name: "İstinye",
    loc: "İstinye'de",
    landmark: "İstinye Park yakını",
    scene: "İstinye Park, ofis kulesi ve sahil konut",
    streetsHint: "Kule / kat ve vale alanı ayrılır.",
  }),
  "sariyer-kuzey/emirgan": landing({
    name: "Emirgan",
    loc: "Emirgan'da",
    landmark: "Emirgan Korusu yakını",
    scene: "koru, sahil ve tarihi apartman",
    streetsHint: "Koru arkası sokaklar sahil trafiğini aşar.",
  }),
  "sariyer-kuzey/boyacikoy": landing({
    name: "Boyacıköy",
    loc: "Boyacıköy'de",
    landmark: "Boyacıköy sahili yakını",
    scene: "sahil dükkânı ve yokuş evi",
    streetsHint: "Sahil şeridi ile yokuş ayrı yaklaşımdır.",
  }),
  "sariyer-kuzey/yenikoy": landing({
    name: "Yeniköy",
    loc: "Yeniköy'de",
    landmark: "Yeniköy iskelesi yakını",
    scene: "iskele, yalı ve sahil apartmanı",
    streetsHint: "İskele–yokuş kuşağı dar bir hattır.",
  }),
  "sariyer-kuzey/ferahevler": landing({
    name: "Ferahevler",
    loc: "Ferahevler'de",
    landmark: "Ferahevler yokuşu yakını",
    scene: "yokuş apartmanı ve site kapısı",
    streetsHint: "Dar yokuş sokaklarda bina adı yeterlidir.",
  }),
  "sariyer-kuzey/baltalimani": landing({
    name: "Baltalimanı",
    loc: "Baltalimanı'nda",
    landmark: "Baltalimanı sahili yakını",
    scene: "sahil şeridi ve yalı kapısı",
    streetsHint: "Sahil / yokuş ayrımı yönlendirmeyi netleştirir.",
  }),
  "levent-etiler/levent": landing({
    name: "Levent",
    loc: "Levent'te",
    landmark: "Levent kuleleri yakını",
    scene: "plaza lobisi ve ofis katı",
    streetsHint: "Metro çıkışı ve lobi prosedürü bilinir.",
  }),
  "levent-etiler/etiler": landing({
    name: "Etiler",
    loc: "Etiler'de",
    landmark: "Etiler siteleri yakını",
    scene: "site güvenliği ve rezidans kapısı",
    streetsHint: "Akmerkez çevresi siteleri kontrollü giriştir.",
  }),
  "levent-etiler/akatlar": landing({
    name: "Akatlar",
    loc: "Akatlar'da",
    landmark: "Akatlar siteleri yakını",
    scene: "site içi daire ve çelik kapı",
    streetsHint: "Park kenarı siteleri sessiz ama kontrollüdür.",
  }),
  "levent-etiler/zincirlikuyu": landing({
    name: "Zincirlikuyu",
    loc: "Zincirlikuyu'da",
    landmark: "Zincirlikuyu Metro yakını",
    scene: "plaza lobisi ve ofis katı",
    streetsHint: "Yan bağlantılar metrobüs düğümünü aşar.",
  }),
  "levent-etiler/ulus": landing({
    name: "Ulus",
    loc: "Ulus'ta",
    landmark: "Ulus Parkı yakını",
    scene: "park çevresi rezidans ve ofis",
    streetsHint: "Rezidans giriş kartı prosedürü önemlidir.",
  }),
  "levent-etiler/hisarustu": landing({
    name: "Hisarüstü",
    loc: "Hisarüstü'nde",
    landmark: "Hisarüstü metro yakını",
    scene: "metro çıkışı, Etiler sırtı ve site kapısı",
    streetsHint: "Metro ağzı referans, iş site kapısındadır.",
  }),
  "levent-etiler/dikilitas": landing({
    name: "Dikilitaş",
    loc: "Dikilitaş'ta",
    landmark: "Zorlu Center yakını",
    scene: "AVM çevresi, ofis ve daire kapısı",
    streetsHint: "Otopark ile arka sokak ayrı yaklaşımdır.",
  }),
  "levent-etiler/balmumcu": landing({
    name: "Balmumcu",
    loc: "Balmumcu'da",
    landmark: "Balmumcu Cadde yakını",
    scene: "yokuş site kapısı",
    streetsHint: "Cadde omurgası dar sokakları dengeler.",
  }),
  "kagithane/kagithane": landing({
    name: "Kağıthane",
    loc: "Kağıthane'de",
    landmark: "Kağıthane Meydan yakını",
    scene: "kule lobisi ve yokuş apartman",
    streetsHint: "Meydan ve dere hattı aynı merkezdedir.",
  }),
  "besiktas-sahil/besiktas": landing({
    name: "Beşiktaş",
    loc: "Beşiktaş'ta",
    landmark: "Beşiktaş Meydan yakını",
    scene: "iskele, çarşı ve yokuş apartman",
    streetsHint: "Maç günü yan sokak yaklaşımı tercih edilir.",
  }),
  "besiktas-sahil/ortakoy": landing({
    name: "Ortaköy",
    loc: "Ortaköy'de",
    landmark: "Ortaköy Camii yakını",
    scene: "sahil dükkânı ve üst kat daire",
    streetsHint: "Cami çevresi yan sokaklar sahili aşar.",
  }),
  "besiktas-sahil/kurucesme": landing({
    name: "Kuruçeşme",
    loc: "Kuruçeşme'de",
    landmark: "Kuruçeşme Parkı yakını",
    scene: "sahil ve yokuş yalı kapısı",
    streetsHint: "Etkinlik günü parka paralel yan yol kullanılır.",
  }),
  "besiktas-sahil/bebek": landing({
    name: "Bebek",
    loc: "Bebek'te",
    landmark: "Bebek Parkı yakını",
    scene: "yalı, site ve rezidans kapısı",
    streetsHint: "Park çevresi yalı / site girişleri ayrılır.",
  }),
  "besiktas-sahil/nisantasi": landing({
    name: "Nişantaşı",
    loc: "Nişantaşı'nda",
    landmark: "Nişantaşı Meydan yakını",
    scene: "butik, ofis ve apartman kapısı",
    streetsHint: "Tek yön grid'de ada bilgisi yeterlidir.",
  }),
};

export function getNeighborhoodSeo(
  bolge: string,
  mahalle: string,
): NeighborhoodSeo | null {
  return neighborhoodSeo[`${bolge}/${mahalle}`] ?? null;
}

export function neighborhoodHeadings(name: string) {
  return {
    work: `${name} çilingir — yerel hat ve kapı tipleri`,
    services: `${name}'de kapı açma, kilit değişimi, çelik kapı, kasa açma`,
    siblings: `${name} çevresinde diğer mahalleler`,
    faq: `${name} çilingir — sık sorulanlar`,
  };
}
