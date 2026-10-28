// Mahalle sayfalarına özgü, doğrulanabilir yerel içerik.
// Ads landing copy: no vehicle/auto locksmith terms, no price/guarantee/minute claims.

export type AreaFaq = {
  question: string;
  answer: string;
};

export type AreaService = {
  name: string;
  detail: string;
};

export type AreaContent = {
  landmarks: string[];
  streets: string[];
  body: string[];
  services: AreaService[];
  faq: AreaFaq[];
};

const SERVICES = {
  kapi: "Kapı açma",
  kilit: "Kilit / barel değişimi",
  celik: "Çelik kapı",
  kasa: "Kasa açma",
} as const;

function svc(
  kapi: string,
  kilit: string,
  celik: string,
  kasa: string,
): AreaService[] {
  return [
    { name: SERVICES.kapi, detail: kapi },
    { name: SERVICES.kilit, detail: kilit },
    { name: SERVICES.celik, detail: celik },
    { name: SERVICES.kasa, detail: kasa },
  ];
}

/** Key: `${bolge}/${mahalle}` */
export const areaContent: Record<string, AreaContent> = {
  "maslak-hatti/maslak": {
    landmarks: [
      "Maslak Meydan",
      "Spine Tower / plaza kuşağı",
      "İTÜ Ayazağa yönü bağlantısı",
      "Büyükdere Caddesi ofis cephesi",
    ],
    streets: [
      "Büyükdere Caddesi",
      "Maslak Mahallesi iç yolları",
      "Ahi Evran Caddesi yakını",
    ],
    body: [
      "Maslak’ta çağrıların çoğu plaza lobisi, kat ofisi ve rezidans çelik kapısından gelir. Büyükdere Caddesi boyunca ofis cephesi ile arka sokak konutu aynı hatta durur; ekip bu kuşağı ayrı bir “merkezden çıkış” gibi değil, saha hattı olarak bilir.",
      "Maslak Meydan çevresinde lobi turnikesi, ziyaretçi kaydı ve kat kartı prosedürü işin parçasıdır. Kapı açma, barel değişimi ve çelik kapı göbeği aynı çağrıda konuşulabilir; kasa açma ise ofis katlarında daha seyrek ama hazırlıklı olunması gereken bir kalemdir.",
    ],
    services: svc(
      "Plaza ve ofis katlarında sıkışan silindir, unutulan anahtar ve mesai sonrası kilitlenen kapılar için yerinde kapı açma.",
      "Ofis silindiri ve daire barelinde ölçü alarak değişim; kartlı sistemlerde yönetimin bildirdiği prosedüre uyum.",
      "Rezidans ve ofis çelik kapılarında göbek / çoklu kilit müdahalesi; önce hasarsız yöntem denenir.",
      "Ofis kasası ve ev tipi çelik kasa için kontrollü açma; kaba kesim ilk seçenek değildir.",
    ),
    faq: [
      {
        question: "Maslak’ta plaza lobisine nasıl giriyorsunuz?",
        answer:
          "Güvenlik ve kat görevlisiyle kısa kimlik / ziyaretçi kaydı yapılır. Çağrıda bina adı ve kat bilgisi yeterli olur; lobi prosedürü bilinen plaza hattında vakit kaybını azaltır.",
      },
      {
        question: "Maslak’ta hangi hizmetler öne çıkar?",
        answer:
          "Kapı açma, kilit ve barel değişimi, çelik kapı göbeği ve ofis tipi kasa açma. Kepenk işi bu hatta daha seyrektir; asıl yoğunluk ofis ve rezidansta kalır.",
      },
      {
        question: "Gece ofis kilidi için ayrı bir hat mı var?",
        answer:
          "Aynı 7/24 saha hattı kullanılır. Mesai sonrası kilitlenen kat, Maslak’ta gündüz konut çağrısından daha sık görülen bir senaryodur.",
      },
    ],
  },

  "maslak-hatti/itu": {
    landmarks: [
      "İTÜ Ayazağa Kampüsü",
      "İTÜ Stadium / spor alanları yakını",
      "Ayazağa yerleşim kuşağı",
      "Kampüs çevre yurt ve öğrenci evleri",
    ],
    streets: [
      "Ayazağa Caddesi yakını",
      "Kampüs girişleri ve çevre sokaklar",
      "Reşitpaşa–Ayazağa bağlantı yolları",
    ],
    body: [
      "İTÜ Ayazağa kampüs çevresi, öğrenci evi, lojman ve kampüse komşu apartmanların iç içe geçtiği bir kuşaktır. Çağrı çoğu kez yurt dışı özel daire, laboratuvar / ofis kapısı veya kampüs yakını siteden gelir; adres tarifinde “kampüs kapısı” ve çevre sokak adı yeterlidir.",
      "Bu sayfa Ayazağa mahalle sayfasından ayrıdır: odak İTÜ Ayazağa kampüs alanı ve hemen bitişiğindeki konuttur. Kapı açma ve barel değişimi öğrenci evlerinde; çelik kapı ve kasa açma ise lojman ile çevre site dairelerinde daha sık konuşulur.",
    ],
    services: svc(
      "Kampüs çevresi öğrenci evi ve lojmanda unutulan anahtar, sıkışan oda / daire kilidi için kapı açma.",
      "Silindir ve barel değişimi; eski apartman kilitleri ile yeni site göbekleri aynı hatta çözülür.",
      "Kampüs yakını site ve lojman çelik kapılarında göbek ve çoklu kilit müdahalesi.",
      "Ev tipi kasa ve küçük ofis kasası için kontrollü açma.",
    ),
    faq: [
      {
        question: "İTÜ kampüs içine girebiliyor musunuz?",
        answer:
          "Kampüs güvenlik kurallarına uyulur. Çağrı kampüs içi bir birimdeyse yetkili birim veya güvenlik bilgilendirmesi gerekir; kampüs dışı öğrenci evi ve çevre sitelerde standart konut prosedürü uygulanır.",
      },
      {
        question: "Ayazağa sayfası ile İTÜ sayfası farkı nedir?",
        answer:
          "Ayazağa sayfası mahalle genelini; bu sayfa İTÜ Ayazağa kampüs çevresini hedefler. Aynı hat üzerinde olsalar da adres ve giriş noktası farklıdır.",
      },
      {
        question: "Öğrenci evinde gece kapı açma yapıyor musunuz?",
        answer:
          "Evet, 7/24 hattın parçasıdır. Kapı tipi ve bina girişi çağrıda netleşirse saha ekibi kampüs çevresindeki adrese yönlendirilir.",
      },
    ],
  },

  "maslak-hatti/maslak1453": {
    landmarks: [
      "Maslak 1453 yerleşimi",
      "Site ana giriş ve otopark katları",
      "Kuzeyden Ayazağa / Poligon bağlantısı",
    ],
    streets: [
      "Site içi bulvar ve ada yolları",
      "Maslak–Ayazağa çevre bağlantıları",
    ],
    body: [
      "Maslak 1453, güvenlik bariyeri ve otopark katları olmadan adrese varmanın zor olduğu büyük bir site dokusudur. Çağrıda blok / ada bilgisi ve giriş kapısı adı, saha yönlendirmesini kısaltır.",
      "Daire çelik kapısı, site içi depo ve nadiren ev kasası bu yerleşimde görülen iş kalemleridir. Yönetim ve güvenlikle kısa koordinasyon, kapı açma işinin parçasıdır.",
    ],
    services: svc(
      "Site içi daire ve otopark katı kapılarında açma; güvenlik kaydı sonrası daireye çıkış.",
      "Çoklu kilit ve barel değişimi; site tipik göbek ölçüleri için yerinde uyum.",
      "Rezidans tipi çelik kapı göbeği ve menteşe / kilit aksamı müdahalesi.",
      "Daire içi çelik kasa açma; site depo kilidi ayrıca değerlendirilir.",
    ),
    faq: [
      {
        question: "Site girişinde bekletilir miyim?",
        answer:
          "Güvenlik protokolü siteye göre değişir. Blok numarası ve daire bilgisi önceden verilirse giriş kaydı hızlanır; yönetim onayı istenen işlerde bu bilgi paylaşılır.",
      },
      {
        question: "Maslak 1453’te en sık hangi iş geliyor?",
        answer:
          "Daire çelik kapı açma ve barel değişimi. Akıllı kilit / kartlı sistem arızalarında da yerinde kontrol yapılır.",
      },
    ],
  },

  "maslak-hatti/skyland": {
    landmarks: [
      "Skyland İstanbul kuleleri",
      "Skyland alışveriş ve ofis katları",
      "Hacıosman / Seyrantepe yönü bağlantısı",
    ],
    streets: [
      "Skyland kompleks iç yolları",
      "Çevre bağlantı ve vale alanları",
    ],
    body: [
      "Skyland’de alışveriş, ofis ve konut aynı kule dokusunda üst üste biner. Vale ve kat görevlisiyle kısa koordinasyon, doğru asansör bankına inmek için gerekir.",
      "Dükkân kepengi ile daire kilidi aynı gün içinde gelebilir; çelik kapı ve kasa açma ise rezidans katlarında konuşulur.",
    ],
    services: svc(
      "Kule daire, ofis ve mağaza kapılarında açma; kat / kule bilgisiyle yönlendirme.",
      "Ofis silindiri ve daire barelinde değişim.",
      "Rezidans çelik kapı göbeği ve çoklu kilit.",
      "Ofis ve daire tipi kasa açma.",
    ),
    faq: [
      {
        question: "AVM / kule ayrımı nasıl yapılır?",
        answer:
          "Çağrıda kule adı, kat ve gerekirse mağaza / daire bilgisi alınır. Vale alanı ile konut girişi farklı noktalar olabilir.",
      },
      {
        question: "Kepenk ve daire aynı ekiple mi?",
        answer:
          "Evet; iş tipine göre set değişir. Kepenk motoru ile çelik kapı göbeği ayrı kalemlerdir ama aynı saha hattında karşılanır.",
      },
    ],
  },

  "maslak-hatti/ayazaga": {
    landmarks: [
      "Ayazağa merkez yerleşimi",
      "İTÜ Ayazağa Kampüsü civarı",
      "Sanayi / atölye kuşağı kenarı",
    ],
    streets: [
      "Ayazağa iç sokakları",
      "Kampüs çevre yolları",
      "Maslak bağlantı hatları",
    ],
    body: [
      "Ayazağa, İTÜ kampüsüne komşu konut ile küçük işyeri kapılarının karıştığı bir mahalledir. Öğrenci evi, laboratuvar çevresi ve apartman silindiri aynı günde gelebilir.",
      "İTÜ odaklı sayfa kampüs çevresini ayırır; bu sayfa Ayazağa mahallesinin genel konut ve işyeri dokusunu anlatır.",
    ],
    services: svc(
      "Apartman ve işyeri kapı açma; kampüs civarı adreslerde sokak tarifiyle yönlendirme.",
      "Eski tip silindir ve yeni barel değişimi.",
      "Site ve apartman çelik kapı göbeği.",
      "Atölye / ev tipi kasa açma.",
    ),
    faq: [
      {
        question: "Ayazağa’da sanayi kilidi de açılıyor mu?",
        answer:
          "Küçük işyeri ve atölye kapıları mahallede görülür. Ağır sanayi tipi özel kilitlerde yerinde değerlendirme yapılır.",
      },
      {
        question: "İTÜ sayfasına ne zaman bakmalıyım?",
        answer:
          "Adres kampüs alanı veya doğrudan İTÜ Ayazağa çevresiyse İTÜ sayfası daha uygundur; mahalle geneli için Ayazağa sayfası kullanılır.",
      },
    ],
  },

  "maslak-hatti/haciosman": {
    landmarks: [
      "Hacıosman Metro İstasyonu",
      "Son durak çevresi apartmanlar",
      "Darüşşafaka yönü bağlantısı",
    ],
    streets: [
      "Metro çıkış çevresi sokaklar",
      "Hacıosman mahalle iç yolları",
    ],
    body: [
      "Hacıosman, metro son durak olduğu için gece çıkan yolcunun kapıda kaldığı çağrıların sık geldiği bir noktadır. Metro çıkışından çevre apartmanlara kısa bir halka vardır.",
      "Zil arızası, içeride kalan ve çelik kapı göbeği bu durak çevresinde konut işinin omurgasını oluşturur.",
    ],
    services: svc(
      "Metro çevresi apartmanlarda kapı açma; gece son sefer sonrası çağrılar dahil.",
      "Apartman silindiri ve barel değişimi.",
      "Çelik kapı açma ve göbek değişimi.",
      "Ev tipi kasa açma.",
    ),
    faq: [
      {
        question: "Metro çıkışında buluşulur mu?",
        answer:
          "Gerekirse metro çıkışı referans alınır; asıl adres daire kapısıdır. Çağrıda bina ve sokak adı paylaşılmalıdır.",
      },
      {
        question: "Gece çağrıları karşılanıyor mu?",
        answer:
          "Evet. Hacıosman hattı 7/24 saha içinde değerlendirilir; son durak çevresi konut çağrıları bu kapsamadır.",
      },
    ],
  },

  "maslak-hatti/resitpasa": {
    landmarks: [
      "Reşitpaşa yerleşimi",
      "Üniversite / kampüs yakını yokuş siteler",
      "İstinye ve Ayazağa arası sırt",
    ],
    streets: [
      "Reşitpaşa yokuş sokakları",
      "Site girişleri ve iç yollar",
    ],
    body: [
      "Reşitpaşa, yokuş siteler ile kampüs lojmanlarının iç içe geçtiği bir mahalledir. Bariyerli site girişleri ve dar yokuşlar adres tarifini önemli kılar.",
      "Kapı açma ve çelik kapı işi konutta; barel değişimi hem site hem lojman dairelerinde görülür.",
    ],
    services: svc(
      "Yokuş site ve lojman dairelerinde kapı açma.",
      "Barel ve silindir değişimi; site tipi çoklu kilit uyumu.",
      "Çelik kapı göbeği ve menteşe aksamı.",
      "Daire içi kasa açma.",
    ),
    faq: [
      {
        question: "Site yönetimine haber vermem gerekir mi?",
        answer:
          "Birçok sitede güvenlik kaydı yeterlidir. Yönetim onayı isteyen işlerde (ortak alan, depo) bilgilendirme yapılır.",
      },
      {
        question: "Yokuş adreste tarif nasıl olmalı?",
        answer:
          "Site adı, blok ve mümkünse yakın cadde / durak referansı yeterlidir. Dar sokaklarda ekip mahalle içinden yönlenir.",
      },
    ],
  },

  "maslak-hatti/vadistanbul": {
    landmarks: [
      "Vadistanbul AVM",
      "Üst kat rezidans kuleleri",
      "Seyrantepe yönü bağlantısı",
    ],
    streets: [
      "AVM ve kule bağlantı yolları",
      "Vadi / kompleks iç sirkülasyon",
    ],
    body: [
      "Vadistanbul’da mağaza kepengi ile üst kattaki rezidans aynı komplekste durur. AVM teknik ekipleri ve kule güvenliğiyle kısa koordinasyon, doğru kata çıkışı sağlar.",
      "Gece kapanışında unutulan anahtar ve rezidans çelik kapısı bu hatta sık görülen çağrı tipleridir.",
    ],
    services: svc(
      "AVM mağaza ve rezidans kapı açma; kule / kat bilgisiyle yönlendirme.",
      "Mağaza ve daire barelinde değişim.",
      "Rezidans çelik kapı göbeği.",
      "Ofis / daire kasa açma.",
    ),
    faq: [
      {
        question: "AVM kapalıyken müdahale olur mu?",
        answer:
          "Güvenlik ve yönetim kurallarına bağlıdır. Rezidans girişi ayrıysa konut kapısı üzerinden ilerlenir; mağaza işlerinde yetkili onay gerekir.",
      },
      {
        question: "Kepenk işi yapıyor musunuz?",
        answer:
          "Mağaza kepengi bu komplekste görülen bir kalemdir. Motorlu kepenklerde yerinde kontrol yapılır; daire çelik kapısı ayrı setle çözülür.",
      },
    ],
  },

  "maslak-hatti/darussafaka": {
    landmarks: [
      "Darüşşafaka yerleşimi",
      "Kampüs / okul çevresi",
      "Hacıosman metro yönü",
    ],
    streets: [
      "Darüşşafaka mahalle sokakları",
      "Kampüs çevre yolları",
    ],
    body: [
      "Darüşşafaka, kampüs lojmanı ve çevresindeki apartmanların daha sakin bir hattıdır. Büyükdere’ye inmeden bu kuşakta konut çağrıları karşılanır.",
      "Okul saati dışında gelen ev kilitleri asıl yoğunluğu oluşturur; çelik kapı ve barel değişimi apartman stoğunda yaygındır.",
    ],
    services: svc(
      "Kampüs çevresi ve apartman kapı açma.",
      "Silindir / barel değişimi.",
      "Çelik kapı göbeği.",
      "Ev tipi kasa açma.",
    ),
    faq: [
      {
        question: "Kampüs lojmanına giriş nasıl?",
        answer:
          "İlgili birimin güvenlik kurallarına uyulur. Lojman dışı apartmanlarda standart konut prosedürü uygulanır.",
      },
      {
        question: "Hacıosman ile aynı hat mı?",
        answer:
          "Komşu kuşaklardır. Adres Darüşşafaka tarafındaysa bu sayfa; metro son durak çevresiyse Hacıosman sayfası daha net yönlendirir.",
      },
    ],
  },

  "maslak-hatti/seyrantepe": {
    landmarks: [
      "Seyrantepe Metro İstasyonu",
      "Stadyum çevresi (etkinlik dışı günler)",
      "Sanayi ve konut geçiş kuşağı",
    ],
    streets: [
      "Metro çıkış sokakları",
      "Atölye / depo yan yolları",
      "Konut ada sokakları",
    ],
    body: [
      "Seyrantepe, stadyum günü dışında sanayi ile konutun karıştığı bir geçittir. Metro çıkışı, atölye sokakları ve apartman kapıları aynı mahallede durur.",
      "Kepenk ve çelik kapı burada yan yana gelebilir; kasa açma daha çok küçük işyeri ve daire içindedir.",
    ],
    services: svc(
      "Depo, atölye ve daire kapı açma.",
      "İşyeri ve konut barelinde değişim.",
      "Çelik kapı ve kepenk aksamı değerlendirmesi.",
      "İşyeri / ev tipi kasa açma.",
    ),
    faq: [
      {
        question: "Maç günü ulaşım etkilenir mi?",
        answer:
          "Etkinlik günlerinde çevre yollar yoğunlaşabilir. Adres ve giriş noktası netleştirilerek alternatif yaklaşım kullanılır.",
      },
      {
        question: "Sanayi kilidi ile konut kilidi aynı mı?",
        answer:
          "Hayır; set ve yöntem değişir. Çağrıda kapı tipi (kepenk, çelik kapı, silindir) söylenmesi doğru hazırlığı sağlar.",
      },
    ],
  },

  "maslak-hatti/poligon": {
    landmarks: [
      "Poligon Caddesi yakını siteler",
      "Maslak kulelerine komşu konut kuşağı",
    ],
    streets: [
      "Poligon Caddesi",
      "Site giriş yolları",
    ],
    body: [
      "Poligon, Maslak kulelerine göre daha sakin ama girişleri kontrollü site dokusudur. Cadde üzerindeki site kapıları ve iç yollar adresin omurgasıdır.",
      "Yeni nesil çoklu kilit ve çelik kapı göbeği bu cadde boyunca sık değişen parçalardır.",
    ],
    services: svc(
      "Site daire kapı açma; güvenlik kaydı sonrası giriş.",
      "Çoklu kilit ve barel değişimi.",
      "Çelik kapı göbeği.",
      "Daire kasa açma.",
    ),
    faq: [
      {
        question: "Poligon’da ofis işi de var mı?",
        answer:
          "Asıl yoğunluk konut ve sitededir. Küçük ofis birimleri varsa aynı hat içinde değerlendirilir.",
      },
      {
        question: "Maslak sayfası yerine neden Poligon?",
        answer:
          "Adres Poligon Caddesi / site kuşağındaysa bu sayfa daha doğru yerel bağlam verir; plaza lobisi için Maslak sayfası uygundur.",
      },
    ],
  },

  "maslak-hatti/maden": {
    landmarks: [
      "Maden Mahallesi merkezi",
      "Atölye ve site geçiş sokakları",
    ],
    streets: [
      "Maden iç sokakları",
      "Atölye kepenkleri sırası",
    ],
    body: [
      "Maden’de atölye kepengi ile bitişikteki site aynı sokakta durabilir. Mahalle merkezi, her iki kapı tipinin de görüldüğü bir dokudur.",
      "Sanayi tipi kilitler konut silindirinden kalındır; doğru set saha hazırlığında ayrılır.",
    ],
    services: svc(
      "Atölye ve daire kapı açma.",
      "Kalın işyeri kilidi ve konut barelinde değişim.",
      "Çelik kapı ve kepenk değerlendirmesi.",
      "İşyeri kasası açma.",
    ),
    faq: [
      {
        question: "Kepenk motoru tamiri var mı?",
        answer:
          "Yerinde kontrol edilir. Bazı motor arızaları ayrı teknik servis gerektirebilir; kapı / kilit aksamı çilingir kapsamında çözülür.",
      },
      {
        question: "Konut ve işyeri aynı çağrıda olur mu?",
        answer:
          "Aynı sokakta bitişik olabilir. Çağrıda hangi kapı tipi olduğu netleştirilir.",
      },
    ],
  },

  "maslak-hatti/buyukdere": {
    landmarks: [
      "Büyükdere Caddesi ofis cephesi",
      "Arka sokak konut adaları",
      "Maslak–Levent omurga bağlantısı",
    ],
    streets: [
      "Büyükdere Caddesi",
      "Yan sokak ve apartman girişleri",
    ],
    body: [
      "Büyükdere Caddesi, ofis cephesi ile arka sokak konutunun aynı anda kilitlenebildiği bir omurgadır. Cadde trafiğine takılmamak için yaklaşım yan sokaklardan yapılır.",
      "Gece ofis kilidi bu hatta gündüz ev işinden daha yoğun olabilir; çelik kapı ve kasa açma ofis katlarında konuşulur.",
    ],
    services: svc(
      "Plaza lobisi ve apartman kapı açma.",
      "Ofis silindiri ve daire barelinde değişim.",
      "Ofis / rezidans çelik kapı.",
      "Ofis tipi kasa açma.",
    ),
    faq: [
      {
        question: "Cadde üzerindeki plazaya nasıl yaklaşılıyor?",
        answer:
          "Yan sokak ve otopark girişleri tercih edilir. Çağrıda bina adı ve lobi / kat bilgisi yeterlidir.",
      },
      {
        question: "Maslak ile Büyükdere farkı nedir?",
        answer:
          "Maslak sayfası meydan ve kule kuşağını; Büyükdere sayfası cadde omurgası ile arka konutu öne çıkarır. Adres hangisine yakınsa o sayfa seçilir.",
      },
    ],
  },

  "sariyer-kuzey/sariyer": {
    landmarks: [
      "Sarıyer İskelesi",
      "Çarşı ve sahil apartmanları",
      "İskele–çarşı arası yokuş sokaklar",
    ],
    streets: [
      "Sahil şeridi",
      "Çarşı iç sokakları",
      "Yokuş konut sokakları",
    ],
    body: [
      "Sarıyer’de vapur ve iskele saatleri sahil apartmanlarında kilit çağrısını sıklaştırır. İskele ile çarşı arasındaki halka, yalı tipi kapı ve eski apartman silindirinin bir arada görüldüğü kuşaktır.",
      "Yokuş sokaklar nedeniyle adres tarifinde iskele / çarşı referansı işe yarar; çelik kapı göbekleri bu mahallede sık değişen parçadır.",
    ],
    services: svc(
      "Sahil apartmanı ve çarşı üstü dairelerde kapı açma.",
      "Eski apartman silindiri ve barel değişimi.",
      "Yalı / apartman çelik kapı göbeği.",
      "Ev tipi kasa açma.",
    ),
    faq: [
      {
        question: "İskele yakını adreste buluşma noktası olur mu?",
        answer:
          "Referans olarak kullanılabilir; asıl müdahale daire kapısındadır. Bina adı ve sokak paylaşılmalıdır.",
      },
      {
        question: "Tuzlu hava kilitleri bozar mı?",
        answer:
          "Sahil şeridinde şişen ve paslanan silindirler sık görülür. Yerinde yağlama, tamir veya barel değişimi değerlendirilir.",
      },
    ],
  },

  "sariyer-kuzey/bahcekoy": {
    landmarks: [
      "Belgrad Ormanı girişi yakını",
      "Bahçeköy merkez ve site yaklaşımları",
    ],
    streets: [
      "Orman yolu yaklaşımları",
      "Site içi kör nokta yolları",
    ],
    body: [
      "Bahçeköy, Belgrad Ormanı girişi yakını siteleri ve villa dokusuyla şehir içi hatlardan ayrılır. Gece saatlerinde adres, bariyerden sonraki iç yolda netleşir.",
      "Villa kapısı, bahçe kapısı ve çelik daire göbeği bu mahallede öne çıkar; kasa açma villa içlerinde daha seyrek görülür.",
    ],
    services: svc(
      "Villa ve site kapı açma; bariyer sonrası iç yol tarifiyle.",
      "Villa tipi kilit ve barel değişimi.",
      "Çelik kapı ve bahçe kapısı aksamı.",
      "Villa içi kasa açma.",
    ),
    faq: [
      {
        question: "Orman yolunda gece bulunabilir misiniz?",
        answer:
          "Site adı, kapı numarası ve mümkünse konum paylaşımı yönlendirmeyi kolaylaştırır. Bariyer görevlisi varsa kısa bilgilendirme yeterlidir.",
      },
      {
        question: "Villa bahçe kapısı da açılır mı?",
        answer:
          "Evet; bahçe ve ana kapı ayrı kilitler olabilir. Çağrıda hangi kapının kilitli olduğu belirtilmelidir.",
      },
    ],
  },

  "sariyer-kuzey/zekeriyakoy": {
    landmarks: [
      "Zekeriyaköy merkez",
      "Villa ve site güvenlikleri",
      "Kuzey Sarıyer yerleşim kuşağı",
    ],
    streets: [
      "Merkez çevre yolları",
      "Site otopark rampaları ve iç sokaklar",
    ],
    body: [
      "Zekeriyaköy’de güvenlik protokolü, kapı açma işinin önemli parçasıdır. Görevliyle konuşma, otopark rampası ve villa kilit tipleri saha bilgisinin parçasıdır.",
      "Merkezi bir ofisten kuzeye “çıkmak” yerine bu mahalle kendi hattında değerlendirilir; çelik kapı ve barel değişimi villa stoğunda yaygındır.",
    ],
    services: svc(
      "Villa / site kapı açma; güvenlik kaydı sonrası.",
      "Yüksek güvenlikli kilit ve barel değişimi.",
      "Villa çelik kapı göbeği.",
      "Ev tipi kasa açma.",
    ),
    faq: [
      {
        question: "Site güvenliği sizi içeri alır mı?",
        answer:
          "Sakin onayı ve kimlik kaydıyla ilerlenir. Çağrıyı yapan kişinin yetkisi net olmalıdır.",
      },
      {
        question: "Zekeriyaköy’de süre neden konuşulur?",
        answer:
          "Mesafe ve site girişi işi uzatabilir. Bu sayfa yerel hattı anlatır; kesin varış süresi trafik ve protokole bağlıdır.",
      },
    ],
  },

  "sariyer-kuzey/kirecburnu": {
    landmarks: [
      "Kireçburnu sahili",
      "Dar ve tek yönlü sahil şeridi",
      "Yokuş evler",
    ],
    streets: [
      "Sahile paralel yollar",
      "Yokuş konut sokakları",
    ],
    body: [
      "Kireçburnu sahili dar ve tek yönlüdür; sahil şeridini bilmeyen ekip vakit kaybeder. Yaklaşım sahile paralel tutulur, yokuş evlere buradan çıkılır.",
      "Tuzlu hava yüzünden şişen kilitler ve paslı silindirler burada rutin iştir; sök-tak kadar yerinde müdahale de yapılır.",
    ],
    services: svc(
      "Sahil ve yokuş evlerde kapı açma.",
      "Paslı silindir / barel değişimi ve yerinde bakım.",
      "Çelik kapı göbeği.",
      "Ev tipi kasa açma.",
    ),
    faq: [
      {
        question: "Tek yön yüzünden geç kalınır mı?",
        answer:
          "Sahile paralel yaklaşım kullanılır. Adres tarafı (sahil veya yokuş) çağrıda netleştirilmelidir.",
      },
      {
        question: "Kilit paslanmışsa ne yapılır?",
        answer:
          "Önce hasarsız açma ve yerinde kontrol; gerekirse barel değişimi. Sahil koşullarında bu senaryo sıktır.",
      },
    ],
  },

  "sariyer-kuzey/tarabya": {
    landmarks: [
      "Tarabya Koyu",
      "Tarabya üstü siteler",
      "Koy çevresi otel ve yalı dokusu",
    ],
    streets: [
      "Koy çevresi yollar",
      "Tarabya üstü site yaklaşımları",
    ],
    body: [
      "Tarabya’da oteller, yalılar ve Tarabya üstü siteler aynı çağrı havuzunda durur. Koy çevresinde akşam trafiği sıkışabilir; yaklaşım koyun iki yakası dikkate alınarak yapılır.",
      "Otel odası kilidi kadar site çelik kapısı da bu hatta görülür; kasa açma daha çok konut ve küçük işyerindedir.",
    ],
    services: svc(
      "Otel, yalı ve site kapı açma.",
      "Oda / daire barelinde değişim.",
      "Site çelik kapı göbeği.",
      "Konut kasa açma.",
    ),
    faq: [
      {
        question: "Otel odası kilidi açılır mı?",
        answer:
          "Otel yönetiminin onayı ve prosedürüyle ilerlenir. Özel daire / site işlerinde standart konut süreci uygulanır.",
      },
      {
        question: "Tarabya üstü mü koy mu?",
        answer:
          "Çağrıda hangi taraf olduğu belirtilmelidir; yaklaşım ve giriş noktası değişir.",
      },
    ],
  },

  "sariyer-kuzey/istinye": {
    landmarks: [
      "İstinye Park",
      "AVM otoparkı ve ofis kuleleri",
      "Sahil konut kuşağı",
    ],
    streets: [
      "İstinye Park çevresi",
      "Sahil ve yokuş bağlantı sokakları",
    ],
    body: [
      "İstinye’de AVM otoparkı, ofis kuleleri ve sahil konutu üst üste biner. Vale ve kat görevlileriyle çalışma, doğru kuleye inmek için gerekir.",
      "Ofis kilitleri ve rezidans çelik kapıları aynı hatta çözülür; kasa açma ofis katlarında da görülebilir.",
    ],
    services: svc(
      "Kule, AVM çevresi ve sahil daire kapı açma.",
      "Ofis silindiri ve daire barelinde değişim.",
      "Rezidans çelik kapı göbeği.",
      "Ofis / ev tipi kasa açma.",
    ),
    faq: [
      {
        question: "İstinye Park otoparkında buluşulur mu?",
        answer:
          "Referans alınabilir; müdahale ilgili kule veya daire kapısındadır. Kat ve kule bilgisi paylaşılmalıdır.",
      },
      {
        question: "Ofis ve konut aynı ekip mi?",
        answer:
          "Evet. Kapı tipi çağrıda netleşirse doğru setle yönlendirilir.",
      },
    ],
  },

  "sariyer-kuzey/emirgan": {
    landmarks: [
      "Emirgan Korusu",
      "Sahil şeridi",
      "Koru arkası tarihi apartmanlar",
    ],
    streets: [
      "Sahil yolu",
      "Koru arkası sokaklar",
    ],
    body: [
      "Emirgan’da özellikle hafta sonu sahil trafiği yoğunlaşır. Koru arkası sokaklara kısa yaklaşımlar tercih edilir.",
      "Tarihi apartman kilitleri ve bahçe kapısı arızaları, sahil kule işinden daha sık gelebilir.",
    ],
    services: svc(
      "Sahil ve koru arkası apartman kapı açma.",
      "Eski tip silindir / barel değişimi.",
      "Çelik kapı ve bahçe kapısı.",
      "Ev tipi kasa açma.",
    ),
    faq: [
      {
        question: "Hafta sonu sahil trafiği etkiler mi?",
        answer:
          "Yoğunluk olabilir; koru arkası yaklaşım tercih edilir. Adres tarafı (sahil veya koru arkası) netleştirilmelidir.",
      },
      {
        question: "Tarihi kapı hasar görür mü?",
        answer:
          "İlk yöntem hasarsız açmadır. Eski doğramada kontrollü müdahale gerekebilir; yöntem kapıda konuşulur.",
      },
    ],
  },

  "sariyer-kuzey/boyacikoy": {
    landmarks: [
      "Boyacıköy sahili",
      "Sahil dükkân şeridi",
      "Arkadaki yokuş evler",
    ],
    streets: [
      "Sahil şeridi",
      "Yokuş merdiven / dar sokaklar",
    ],
    body: [
      "Boyacıköy sahili ince bir şerittir; arkadaki yokuşlar ayrı bir dokudur. Sahil dükkân kepengi ile konut çelik kapısı aynı mahallede durur.",
      "Dar sokak ve merdivenli yaklaşımlarda bina adı ve sahil / yokuş bilgisi yönlendirmeyi kısaltır.",
    ],
    services: svc(
      "Sahil dükkân ve yokuş ev kapı açma.",
      "Dükkân ve daire barelinde değişim.",
      "Çelik kapı göbeği.",
      "Dükkân / ev tipi kasa açma.",
    ),
    faq: [
      {
        question: "Kepenk açma var mı?",
        answer:
          "Sahil dükkân kepenkleri mahallede görülür. Motorlu sistemlerde yerinde kontrol yapılır.",
      },
      {
        question: "Yokuş adreste yürümek gerekir mi?",
        answer:
          "Bazı sokaklar dardır; mümkün olan en yakın noktaya kadar yaklaşılır. Adres detayı önceden alınır.",
      },
    ],
  },

  "sariyer-kuzey/yenikoy": {
    landmarks: [
      "Yeniköy iskelesi",
      "Yalı ve sahil apartman hattı",
    ],
    streets: [
      "İskele çevresi",
      "Sahil–yokuş arası sokaklar",
    ],
    body: [
      "Yeniköy’de yalılar ve sahil apartmanları dar bir hatta dizilir. İskele ile yokuş arasındaki kuşak, kapı açma çağrılarının yoğunlaştığı yerdir.",
      "Hasarsız kilit açma burada yalı kapısı ve çelik daire göbeği için aynı turda konuşulabilir.",
    ],
    services: svc(
      "Yalı ve sahil apartmanı kapı açma.",
      "Silindir / barel değişimi.",
      "Çelik kapı göbeği.",
      "Ev tipi kasa açma.",
    ),
    faq: [
      {
        question: "Yalı kapısı özel midir?",
        answer:
          "Kapı ve kilit tipi yalıya göre değişir. Çağrıda kapı türü (ahşap, çelik, bahçe) belirtilmelidir.",
      },
      {
        question: "İskele referans olur mu?",
        answer:
          "Evet; ardından bina / yalı adı netleştirilir.",
      },
    ],
  },

  "sariyer-kuzey/ferahevler": {
    landmarks: [
      "Ferahevler yokuşu",
      "Sarıyer merkeze inen dar sokaklar",
    ],
    streets: [
      "Yokuş konut sokakları",
      "Mahalle içi dar geçitler",
    ],
    body: [
      "Ferahevler, Sarıyer merkeze inen dar sokakların konut kuşağıdır. Yokuşu bilmek, yanlış tur atmadan daireye çıkmayı sağlar.",
      "Eski apartman silindiri ve çelik kapı göbeği bu mahallede sık görülen işlerdir.",
    ],
    services: svc(
      "Yokuş apartman kapı açma.",
      "Eski silindir / barel değişimi.",
      "Çelik kapı göbeği.",
      "Ev tipi kasa açma.",
    ),
    faq: [
      {
        question: "Dar sokakta yaklaşım nasıl?",
        answer:
          "Mahalle içinden en yakın noktaya kadar gelinir. Bina adı ve yokuş / cadde referansı yeterlidir.",
      },
      {
        question: "Sarıyer merkezi ile aynı mı?",
        answer:
          "Komşudur ama sokak dokusu farklıdır. Adres Ferahevler yokuşundaysa bu sayfa daha uygundur.",
      },
    ],
  },

  "sariyer-kuzey/baltalimani": {
    landmarks: [
      "Baltalimanı sahili",
      "Kıyı şeridi yalı ve apartmanlar",
    ],
    streets: [
      "Sahile paralel yol",
      "Arkada yokuş bağlantıları",
    ],
    body: [
      "Baltalimanı ince bir kıyı şerididir; arkadaki yalı ve apartman yokuşla ayrılır. Sahile paralel yaklaşım, kapıya inişi kısaltır.",
      "Gece çağrıları koy hattında kaybolmasın diye adres sahil / yokuş diye netleştirilir.",
    ],
    services: svc(
      "Sahil ve yokuş kapı açma.",
      "Silindir / barel değişimi.",
      "Çelik kapı göbeği.",
      "Ev tipi kasa açma.",
    ),
    faq: [
      {
        question: "Bebek / Emirgan ile karışır mı?",
        answer:
          "Komşu sahil kuşaklarıdır. Adres Baltalimanı tarafındaysa bu sayfa; park / koy referansı farklı mahallelere aittir.",
      },
      {
        question: "Yalıda bahçe kapısı ayrı mı?",
        answer:
          "Çoğu kez ayrı kilitlenir. Hangi kapının açılacağı çağrıda belirtilmelidir.",
      },
    ],
  },

  "levent-etiler/levent": {
    landmarks: [
      "Levent Metro İstasyonu",
      "Finans ve ofis kuleleri",
      "Büyükdere–Levent plaza hattı",
    ],
    streets: [
      "Levent metro çevresi",
      "Plaza lobi yaklaşımları",
    ],
    body: [
      "Levent’te mesai bitince içeride kalan ekipler için ofis kilidi sık konuşulan bir senaryodur. Metro çıkışı ve kule lobileri bu hattın omurgasıdır.",
      "Ofis silindiri, çelik kapı ve kasa açma konut işinden önde gelebilir; lobi güvenlik prosedürü işin parçasıdır.",
    ],
    services: svc(
      "Plaza ve ofis katı kapı açma.",
      "Ofis silindiri / barel değişimi.",
      "Ofis çelik kapı göbeği.",
      "Ofis tipi kasa açma.",
    ),
    faq: [
      {
        question: "Lobi güvenliği ne ister?",
        answer:
          "Kimlik ve kat / firma bilgisi. Çağrıyı yapan kişinin yetkisi net olmalıdır.",
      },
      {
        question: "Konut daire işi de var mı?",
        answer:
          "Evet, Levent’te rezidans katları da vardır; asıl yoğunluk ofis kuşağındadır.",
      },
    ],
  },

  "levent-etiler/etiler": {
    landmarks: [
      "Akmerkez yakını",
      "Etiler site ve rezidansları",
    ],
    streets: [
      "Akmerkez çevresi",
      "Site giriş yolları",
    ],
    body: [
      "Etiler’de vale, güvenlik ve kat görevlisi olmadan daireye varmak zordur. AVM çevresi siteleri, kontrollü giriş dokusunun tipik örneğidir.",
      "Yüksek güvenlikli çelik kapı ve kartlı sistem arızaları burada standart taleptir.",
    ],
    services: svc(
      "Site ve rezidans kapı açma.",
      "Kartlı / barel kilit değişimi.",
      "Yüksek güvenlikli çelik kapı.",
      "Daire kasa açma.",
    ),
    faq: [
      {
        question: "Site yönetimi onayı şart mı?",
        answer:
          "Daire kapısında sakin onayı genelde yeterlidir. Ortak alan veya blok kapısında yönetim prosedürü aranabilir.",
      },
      {
        question: "Akmerkez mağaza kilidi?",
        answer:
          "AVM yönetimi ve mağaza yetkilisi onayıyla değerlendirilir; konut işinden ayrı prosedürdür.",
      },
    ],
  },

  "levent-etiler/akatlar": {
    landmarks: [
      "Akatlar Parkı",
      "Parkı çevreleyen siteler",
    ],
    streets: [
      "Park kenarı yollar",
      "Site iç sokakları",
    ],
    body: [
      "Akatlar, parkı çevreleyen sitelerin sessiz ama kontrollü bir yerleşimidir. Aile konutu kilitleri ve bahçe kapısı, plaza işinden daha sık gelebilir.",
      "Çelik kapı göbeği ve barel değişimi site stoğunda yaygındır.",
    ],
    services: svc(
      "Site daire ve bahçe kapı açma.",
      "Konut barelinde değişim.",
      "Çelik kapı göbeği.",
      "Ev tipi kasa açma.",
    ),
    faq: [
      {
        question: "Park kenarında buluşma olur mu?",
        answer:
          "Referans olarak kullanılabilir; müdahale site / daire kapısındadır.",
      },
      {
        question: "Bahçe kapısı ayrı ücret / iş mi?",
        answer:
          "Ayrı kilit ise ayrı iş kalemidir. Çağrıda hangi kapı olduğu belirtilir; fiyat konuşması bu görev kapsamında yapılmaz, yerinde netleştirilir.",
      },
    ],
  },

  "levent-etiler/zincirlikuyu": {
    landmarks: [
      "Zincirlikuyu Metro / metrobüs düğümü",
      "Kule ve plaza yaklaşımları",
    ],
    streets: [
      "Metro çevresi bağlantılar",
      "Plaza yan girişleri",
    ],
    body: [
      "Zincirlikuyu, metrobüs ve kulelerin sıkıştığı bir düğümdür. Trafiğe takılmamak için yan bağlantılar tercih edilir.",
      "Gece kilitlenen kat ofisi bu istasyon çevresinde sık konuşulan senaryodur.",
    ],
    services: svc(
      "Plaza lobisi kapı açma.",
      "Ofis silindiri değişimi.",
      "Ofis çelik kapı.",
      "Ofis kasa açma.",
    ),
    faq: [
      {
        question: "Metrobüs yoğunluğu etkiler mi?",
        answer:
          "Yoğun saatlerde yan yaklaşım kullanılır. Bina adı ve lobi girişi netleştirilmelidir.",
      },
      {
        question: "Levent ile aynı mı?",
        answer:
          "Komşu finans kuşağıdır. Adres Zincirlikuyu düğümündeyse bu sayfa daha nettir.",
      },
    ],
  },

  "levent-etiler/ulus": {
    landmarks: [
      "Ulus Parkı",
      "Boğaz manzaralı rezidans kuşağı",
    ],
    streets: [
      "Park çevresi",
      "Rezidans girişleri",
    ],
    body: [
      "Ulus, park çevresi rezidanslarıyla sakin bir konut kuşağıdır. Site giriş kartı ve otopark katı prosedürü yüzünden adres bilgisi önemlidir.",
      "Çelik kapı ve barel değişimi rezidans stoğunda öne çıkar.",
    ],
    services: svc(
      "Rezidans kapı açma.",
      "Barel / kartlı kilit değişimi.",
      "Çelik kapı göbeği.",
      "Daire kasa açma.",
    ),
    faq: [
      {
        question: "Otopark katı kilidi açılır mı?",
        answer:
          "Site yönetiminin kurallarına göre değerlendirilir. Daire kapısı ile ortak alan kilidi ayrılır.",
      },
      {
        question: "Etiler’e yakın mı sayılırsınız?",
        answer:
          "Komşu hattız; adres Ulus Parkı çevresindeyse bu sayfa yerel bağlamı verir.",
      },
    ],
  },

  "levent-etiler/hisarustu": {
    landmarks: [
      "Hisarüstü metro yakını",
      "Etiler sırtı site ve apartmanları",
    ],
    streets: [
      "Metro ağzı çevresi",
      "Sırt site yolları",
    ],
    body: [
      "Hisarüstü, Etiler sırtındaki site ve apartman çıkışıdır. Metro ağzı referans alınarak site kapılarına çıkılır.",
      "Gece inen yolcu için kapı açma burada rutin senaryodur; ofisten uzak bir “genel İstanbul” modeli değil, sırt hattıdır.",
    ],
    services: svc(
      "Metro çevresi site / apartman kapı açma.",
      "Barel değişimi.",
      "Çelik kapı göbeği.",
      "Ev tipi kasa açma.",
    ),
    faq: [
      {
        question: "Metro çıkışında bekler misiniz?",
        answer:
          "Gerekirse referans noktası olur; iş daire kapısında biter. Site adı paylaşılmalıdır.",
      },
      {
        question: "Boğaziçi Üniversitesi çevresi?",
        answer:
          "Hisarüstü–Etiler sırtı ile ilişkilidir. Adres netleştirilerek ilgili site / apartmana yönlenilir.",
      },
    ],
  },

  "levent-etiler/dikilitas": {
    landmarks: [
      "Zorlu Center yakını",
      "Sahne / ofis / konut kavşağı",
    ],
    streets: [
      "Zorlu çevresi",
      "Arka sokak konutları",
    ],
    body: [
      "Dikilitaş’ta sahne çıkışı, ofis ve konut aynı kavşakta kilitlenebilir. AVM otoparkı ile arkadaki sokaklar ayrı yaklaşımlar ister.",
      "Dükkân kepengi ve daire çelik kapısı aynı gece içinde gelebilir.",
    ],
    services: svc(
      "AVM çevresi, ofis ve daire kapı açma.",
      "Barel / silindir değişimi.",
      "Çelik kapı göbeği.",
      "Dükkân / daire kasa açma.",
    ),
    faq: [
      {
        question: "Zorlu içi mağaza işi?",
        answer:
          "Yönetim ve mağaza yetkilisi onayıyla ilerlenir.",
      },
      {
        question: "Konser / etkinlik çıkışı yoğunluğu?",
        answer:
          "Yoğunluk olabilir; arka sokak yaklaşımı tercih edilir.",
      },
    ],
  },

  "levent-etiler/balmumcu": {
    landmarks: [
      "Balmumcu cadde omurgası",
      "Beşiktaş’a inen yokuş siteler",
    ],
    streets: [
      "Balmumcu Caddesi yakını",
      "Yokuş site sokakları",
    ],
    body: [
      "Balmumcu, Beşiktaş’a inen yokuş sitelerin sıkışık bir omurgasıdır. Dar sokak ve tek yön, yaklaşımı caddeden koparmadan planlamayı gerektirir.",
      "Site kapısı, çelik daire göbeği ve barel değişimi bu hatta öne çıkar.",
    ],
    services: svc(
      "Site kapı açma.",
      "Barel değişimi.",
      "Çelik kapı göbeği.",
      "Ev tipi kasa açma.",
    ),
    faq: [
      {
        question: "Tek yön yüzünden gecikme olur mu?",
        answer:
          "Cadde omurgası ve bilinen site girişleri kullanılır. Adres ve kapı numarası netleştirilmelidir.",
      },
      {
        question: "Beşiktaş sahil sayfası mı?",
        answer:
          "Balmumcu sırt / yokuş siteler içindir; sahil iskele hattı Beşiktaş sahil sayfalarına aittir.",
      },
    ],
  },

  "kagithane/kagithane": {
    landmarks: [
      "Kağıthane Meydan",
      "Dere hattı",
      "Yeni konut kuleleri ve eski mahalle sokakları",
    ],
    streets: [
      "Meydan çevresi",
      "Dere boyu yollar",
      "Yokuş apartman sokakları",
    ],
    body: [
      "Kağıthane’de dere hattı, yeni konut kuleleri ve eski mahalle sokakları aynı merkezde çarpışır. Meydan referansı hem kule lobisine hem yokuş apartmana yönlendirir.",
      "Çağrı, şehrin diğer yakasından beklenen bir ekibe değil; bu merkez hattına düşer.",
    ],
    services: svc(
      "Kule ve apartman kapı açma.",
      "Yeni konut göbeği ve eski mahalle barelinde değişim.",
      "Çelik kapı göbeği.",
      "Ev / ofis tipi kasa açma.",
    ),
    faq: [
      {
        question: "Kule ile eski mahalle aynı mı?",
        answer:
          "Aynı merkez hatta olsa da kapı tipleri farklıdır. Çağrıda bina tipi söylenmelidir.",
      },
      {
        question: "Dere hattı adresi nasıl tarif edilir?",
        answer:
          "Meydan, cadde adı ve bina / site bilgisi yeterlidir.",
      },
    ],
  },

  "besiktas-sahil/besiktas": {
    landmarks: [
      "Beşiktaş Meydan",
      "İskele ve çarşı",
      "Arka yokuş apartmanlar",
    ],
    streets: [
      "Meydan çevresi",
      "Çarşı iç sokakları",
      "Yokuş konutlar",
    ],
    body: [
      "Beşiktaş’ta iskele, çarşı ve arka yokuşlar aynı çağrıda karışabilir. Meydan referansı hem sahil işhanına hem yokuş apartmana hizmet eder.",
      "Maç ve konser akşamı ana cadde yoğunlaşır; yan sokak yaklaşımları tercih edilir.",
    ],
    services: svc(
      "Çarşı, işhanı ve apartman kapı açma.",
      "Barel / silindir değişimi.",
      "Çelik kapı göbeği.",
      "Dükkân / ev tipi kasa açma.",
    ),
    faq: [
      {
        question: "Maç günü gelir misiniz?",
        answer:
          "Evet; yaklaşım yan sokaklardan planlanır. Adres ve giriş netleştirilir.",
      },
      {
        question: "İskele yakını dükkân kepengi?",
        answer:
          "Sahil / çarşı dükkânlarında görülür. Motorlu kepenk yerinde kontrol edilir.",
      },
    ],
  },

  "besiktas-sahil/ortakoy": {
    landmarks: [
      "Ortaköy Camii",
      "Sahil restoran ve dükkânları",
      "Üst kat daireleri",
    ],
    streets: [
      "Cami çevresi yan sokaklar",
      "Sahil şeridi",
    ],
    body: [
      "Ortaköy’de turist kalabalığı ve sahil restoranları gece yarısı kilitlenebilir. Cami çevresi yan sokaklar, ana sahile girmeden yaklaşımı sağlar.",
      "Dükkân kepengi ile üst kat daire aynı adada durabilir.",
    ],
    services: svc(
      "Dükkân ve daire kapı açma.",
      "Barel değişimi.",
      "Çelik kapı göbeği.",
      "Dükkân / ev kasa açma.",
    ),
    faq: [
      {
        question: "Sahil trafiğine giriyor musunuz?",
        answer:
          "Mümkün olduğunca yan sokak yaklaşımı kullanılır.",
      },
      {
        question: "Restoran kepengi gece açılır mı?",
        answer:
          "Yetkili kişi onayıyla değerlendirilir.",
      },
    ],
  },

  "besiktas-sahil/kurucesme": {
    landmarks: [
      "Kuruçeşme Parkı",
      "Sahil etkinlik alanı",
      "Arkada yokuş yalılar",
    ],
    streets: [
      "Park kenarı",
      "Yokuş yalı sokakları",
    ],
    body: [
      "Kuruçeşme’de sahil düğünleri ve arkadaki yokuş yalılar aynı gece çağrı üretebilir. Etkinlik akşamı ana cadde kapanabilir; park paralel yan yol tercih edilir.",
      "Yalı kapısı ve çelik daire göbeği bu şeritte yan yana görülür.",
    ],
    services: svc(
      "Sahil ve yokuş yalı / daire kapı açma.",
      "Barel değişimi.",
      "Çelik kapı göbeği.",
      "Ev tipi kasa açma.",
    ),
    faq: [
      {
        question: "Düğün / etkinlik günü yaklaşım?",
        answer:
          "Kapanan sahile girilmeden yan yoldan yaklaşılır. Adres tarafı netleştirilir.",
      },
      {
        question: "Yalı bahçe kapısı?",
        answer:
          "Ayrı kilit ise ayrı iş kalemidir; hangisinin açılacağı belirtilmelidir.",
      },
    ],
  },

  "besiktas-sahil/bebek": {
    landmarks: [
      "Bebek Parkı",
      "Sahil kafeleri",
      "Arkadaki rezidanslar",
    ],
    streets: [
      "Park çevresi",
      "Yalı / site yaklaşımları",
    ],
    body: [
      "Bebek’te sahil kafeleri ve arkadaki rezidanslar aynı koyda durur. Yüksek güvenlikli kilitler burada standart kabul edilir.",
      "Yalı kapısı ile site lobisi ayrı giriş noktalarıdır; çağrıda hangisi olduğu netleştirilir.",
    ],
    services: svc(
      "Yalı, site ve daire kapı açma.",
      "Yüksek güvenlikli barel değişimi.",
      "Çelik kapı göbeği.",
      "Ev tipi kasa açma.",
    ),
    faq: [
      {
        question: "Bebek Parkı buluşma olur mu?",
        answer:
          "Referans alınabilir; iş kapıda biter.",
      },
      {
        question: "Yüksek güvenlikli kilit açılır mı?",
        answer:
          "Hasarsız yöntem önceliklidir. Kapı tipine göre yerinde değerlendirme yapılır.",
      },
    ],
  },

  "besiktas-sahil/nisantasi": {
    landmarks: [
      "Nişantaşı Meydan yakını",
      "Butik, ofis ve apartman grid’i",
    ],
    streets: [
      "Tek yön alışveriş sokakları",
      "Kat ofisi / apartman girişleri",
    ],
    body: [
      "Nişantaşı’nda butik, ofis ve apartman aynı ada içinde kilitlenebilir. Tek yön sokaklar yaklaşımı planlamayı gerektirir.",
      "Gece kapanışında unutulan anahtar, vitrin kepengi ve kat dairesi bu meydan çevresinde sık görülür.",
    ],
    services: svc(
      "Vitrin, ofis ve daire kapı açma.",
      "Barel / silindir değişimi.",
      "Çelik kapı göbeği.",
      "Ofis / daire kasa açma.",
    ),
    faq: [
      {
        question: "Tek yön yüzünden yanaşamama?",
        answer:
          "Ada ve sokak bilgisiyle en uygun yaklaşım seçilir.",
      },
      {
        question: "Butik kepengi ile daire aynı mı?",
        answer:
          "Aynı adada olabilir; kapı tipi ayrı set ister. Çağrıda hangisi olduğu söylenmelidir.",
      },
    ],
  },
};

export function getAreaContent(
  bolge: string,
  mahalle: string,
): AreaContent | null {
  return areaContent[`${bolge}/${mahalle}`] ?? null;
}
