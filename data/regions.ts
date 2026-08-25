// data/regions.ts
// Getircilingir.com.tr — Bölge/Mahalle hiyerarşi verisi
// Not: latitude/longitude ve referenceLandmark alanları placeholder'dır,
// gerçek koordinatlar ve doğrulanmış referans noktalarıyla güncellenmelidir.

export type Neighborhood = {
  slug: string;
  name: string;
  heroLine: string;
  referenceLandmark: string;
  avgResponseMinutes: string;
  latitude: number;
  longitude: number;
  description: string;
};

export type Region = {
  slug: string;
  name: string;
  description: string;
  avgResponseMinutes: string;
  image: string;
  presenceLine: string;
  neighborhoods: Neighborhood[];
};

export const regions: Region[] = [
  {
    slug: "sariyer-kuzey",
    name: "Sarıyer Kuzey Hattı",
    description:
      "Sarıyer'den Zekeriyaköy'e uzanan hatta sabit ekip bulunduruyoruz. Boğaz'ın kuzeyindeki site ve villa bölgelerinde ortalama 15 dakikada ulaşım.",
    avgResponseMinutes: "12-15",
    image: "/images/regions/sariyer-kuzey.jpg",
    presenceLine:
      "Sarıyer Kuzey Hattı'nda tek bir merkeze bağlı değiliz — iskele, orman girişi ve site yaklaşımlarında sürekli araç bulunduruyoruz.",
    neighborhoods: [
      {
        slug: "sariyer",
        name: "Sarıyer",
        heroLine: "Sarıyer'de Çilingir — Ortalama 12-15 Dakikada Kapınızda",
        referenceLandmark: "Sarıyer İskelesi yakını",
        avgResponseMinutes: "12-15",
        latitude: 41.1667,
        longitude: 29.05,
        description:
          "Vapurun yanaştığı saatlerde Sarıyer İskelesi yakını, sahil apartmanlarında kilit arızasının en sık geldiği kuşaktır. Yokuş sokaklar ve yalı tipi kapılar aynı turda çözülsün diye ekibi merkeze çekmiyoruz; iskele ile çarşı arasındaki halkada 12-15 dakikada kapı açıyoruz. Eski apartman kilitleri ve çelik kapı göbekleri bu mahallede en çok gördüğümüz iş.",
      },
      {
        slug: "bahcekoy",
        name: "Bahçeköy",
        heroLine: "Bahçeköy'de Çilingir — Belgrad Ormanı Çevresine Hızlı Ulaşım",
        referenceLandmark: "Belgrad Ormanı girişi yakını",
        avgResponseMinutes: "15-18",
        latitude: 41.1814,
        longitude: 28.995,
        description:
          "Belgrad Ormanı girişi yakını, gece saatlerinde şehir içi ekiplerin zor yetiştiği bir kuşaktır. Bahçeköy'de orman yolunu ve site içi kör noktaları bildiğimiz için ayrı bir araç bırakıyoruz. Çağrı çoğu kez bariyerden sonraki iç yolda geliyor; kayıp tur atmadan 15-18 dakikada villaya ulaşıyoruz.",
      },
      {
        slug: "zekeriyakoy",
        name: "Zekeriyaköy",
        heroLine: "Zekeriyaköy'de Çilingir — Villa ve Site Bölgelerine Özel Hizmet",
        referenceLandmark: "Zekeriyaköy merkez yakını",
        avgResponseMinutes: "15-20",
        latitude: 41.195,
        longitude: 29.045,
        description:
          "Zekeriyaköy merkez yakını sitelerde güvenlik protokolü, kapı açma işinin yarısıdır. Görevliyle konuşmayı, otopark rampasını ve villa kilit tiplerini bildiğimiz için sahada bekleyen ekip 15-20 dakikada müdahale ediyor. Merkezi bir ofisten kuzeye çıkmıyoruz; bu mahallede çağrı, zaten buradaki araca düşüyor.",
      },
      {
        slug: "kirecburnu",
        name: "Kireçburnu",
        heroLine: "Kireçburnu'nda Çilingir — Sahil Hattına Hızlı Erişim",
        referenceLandmark: "Kireçburnu sahili yakını",
        avgResponseMinutes: "12-15",
        latitude: 41.1275,
        longitude: 29.0575,
        description:
          "Kireçburnu sahili yakını dar ve tek yönlüdür; sahil şeridini bilmeyen ekip dakikaları kaybeder. Biz aracı sahile paralel tutuyoruz, yokuş evlere 12-15 dakikada çıkıyoruz. Tuzlu hava yüzünden şişen kilitler ve paslı silindirler burada rutin iş — sök-tak değil, yerinde tamir de yapıyoruz.",
      },
      {
        slug: "tarabya",
        name: "Tarabya",
        heroLine: "Tarabya'da Çilingir — Koy Çevresi ve Site Bölgeleri",
        referenceLandmark: "Tarabya Koyu yakını",
        avgResponseMinutes: "12-15",
        latitude: 41.1275,
        longitude: 29.0575,
        description:
          "Tarabya Koyu yakını oteller, yalılar ve arkadaki siteler aynı çağrı havuzunda durur. Koy çevresinde trafik akşam sıkışır; o yüzden aracı koyun iki yakasında dönüşümlü bekletiyoruz. 12-15 dakikalık müdahale, otel odası kilidi kadar site çelik kapısını da kapsıyor.",
      },
      {
        slug: "istinye",
        name: "İstinye",
        heroLine: "İstinye'de Çilingir — Park İstinye Çevresine Hızlı Ulaşım",
        referenceLandmark: "İstinye Park yakını",
        avgResponseMinutes: "10-14",
        latitude: 41.1075,
        longitude: 29.0525,
        description:
          "İstinye Park yakını, AVM otoparkı, ofis kuleleri ve sahil konutunun üst üste bindiği bir düğümdür. Vale ve kat görevlileriyle çalışmaya alışığız; çağrı merkeze düşmeden 10-14 dakikada ilgili kuleye iniyoruz. Ofis kilitleri ve rezidans çelik kapıları aynı ekipte.",
      },
      {
        slug: "emirgan",
        name: "Emirgan",
        heroLine: "Emirgan'da Çilingir — Koru ve Sahil Şeridine Yakın Ekip",
        referenceLandmark: "Emirgan Korusu yakını",
        avgResponseMinutes: "12-15",
        latitude: 41.1075,
        longitude: 29.0525,
        description:
          "Emirgan Korusu yakını, özellikle hafta sonu sahil trafiğinin kilitlendiği bir şerittir. Koru arkası sokaklara kısa yoldan girdiğimiz için 12-15 dakikalık süre korunuyor. Tarihi apartman kilitleri ve bahçe kapısı arızaları bu mahallede sahil kule işinden daha sık gelir.",
      },
      {
        slug: "boyacikoy",
        name: "Boyacıköy",
        heroLine: "Boyacıköy'de Çilingir — Sahil Şeridine Hızlı Müdahale",
        referenceLandmark: "Boyacıköy sahili yakını",
        avgResponseMinutes: "12-15",
        latitude: 41.11,
        longitude: 29.055,
        description:
          "Boyacıköy sahili yakını ince bir şerit; arkadaki yokuşlar ise ayrı bir dünya. Sahilde bekleyen araç, yokuş evlere merdiven ve dar sokak tarifini ezbere biliyor. 12-15 dakikada hem sahil dükkân kepenkine hem konut çelik kapısına yetişiyoruz.",
      },
    ],
  },
  {
    slug: "maslak-hatti",
    name: "Maslak İş Merkezi Hattı",
    description:
      "Maslak'tan Vadistanbul'a uzanan plaza ve rezidans hattında araçlarımız sürekli sahada. İş merkezleri ve yüksek katlı rezidanslara özel hızlı müdahale.",
    avgResponseMinutes: "10-15",
    image: "/images/regions/maslak-hatti.jpg",
    presenceLine:
      "Maslak'tan Vadistanbul'a plaza ve rezidans kuşağında vardiya boyunca saha aracı bulunduruyoruz; çağrı merkeze düşüp yola çıkmıyor.",
    neighborhoods: [
      {
        slug: "maslak",
        name: "Maslak",
        heroLine: "Maslak'ta Çilingir — Plaza ve Ofis Bölgesine Hızlı Müdahale",
        referenceLandmark: "Maslak Meydan yakını",
        avgResponseMinutes: "10-15",
        latitude: 41.1075,
        longitude: 29.0225,
        description:
          "Maslak Meydan yakını kulelerinde gece kilitlenen ofis, sabah toplantısından daha pahalıya mal olur. Lobi turnikesi ve kat kartı prosedürünü bildiğimiz için 10-15 dakikada ilgili kata çıkıyoruz. Çelik kasa ve ofis silindiri işleri bu meydan çevresinde konut işinden daha sık.",
      },
      {
        slug: "maslak1453",
        name: "Maslak 1453",
        heroLine: "Maslak 1453'te Çilingir — Site İçi Hızlı Ulaşım",
        referenceLandmark: "Maslak 1453 sitesi yakını",
        avgResponseMinutes: "10-15",
        latitude: 41.115,
        longitude: 29.0175,
        description:
          "Maslak 1453 sitesi yakını, güvenlik ve otopark katları olmadan adrese varmak mümkün olmayan bir yerleşim. Site yönetimleriyle çalıştığımız için girişte vakit kaybetmiyoruz; 10-15 dakikada daire kapısına iniyoruz. Rezidans çelik kapı ve akıllı kilit arızaları burada standart iş kalemi.",
      },
      {
        slug: "skyland",
        name: "Skyland İstanbul",
        heroLine: "Skyland'de Çilingir — Kule ve Rezidans Bölgesine Özel Ekip",
        referenceLandmark: "Skyland AVM yakını",
        avgResponseMinutes: "10-15",
        latitude: 41.112,
        longitude: 29.015,
        description:
          "Skyland AVM yakını, alışveriş, ofis ve konutun aynı kulede durduğu bir karma. Vale ve kat görevlisiyle koordinasyon alışkanlığımız var; 10-15 dakikada ilgili kule asansörüne alınıyoruz. Dükkân kepengi ile daire kilidi aynı çağrıda gelebilir — ikisini de açıyoruz.",
      },
      {
        slug: "ayazaga",
        name: "Ayazağa",
        heroLine: "Ayazağa'da Çilingir — Kampüs ve Sanayi Bölgesine Hızlı Ulaşım",
        referenceLandmark: "İTÜ Ayazağa Kampüsü civarı",
        avgResponseMinutes: "10-15",
        latitude: 41.1075,
        longitude: 29.0225,
        description:
          "İTÜ Ayazağa Kampüsü civarı, öğrenci evi, laboratuvar ve küçük sanayi kilitinin karıştığı bir kuşaktır. Kampüs giriş saatlerini ve çevre sokakları bildiğimiz için 10-15 dakikada adrese varıyoruz. Gece laboratuvar kapısı ile sabah ev kilidi aynı ekipte çözülüyor.",
      },
      {
        slug: "haciosman",
        name: "Hacıosman",
        heroLine: "Hacıosman'da Çilingir — Metro Çevresine Hızlı Erişim",
        referenceLandmark: "Hacıosman Metro İstasyonu yakını",
        avgResponseMinutes: "10-14",
        latitude: 41.115,
        longitude: 29.03,
        description:
          "Hacıosman Metro İstasyonu yakını, son durak olduğu için gece çıkan yolcunun kapıda kaldığı yerdir. Metro çıkışından evlere kısa bir halkada 10-14 dakikada ulaşıyoruz. Apartman zili bozulunca içeride kalanlar için çelik kapı açma bu durak çevresinde günlük iş.",
      },
      {
        slug: "resitpasa",
        name: "Reşitpaşa",
        heroLine: "Reşitpaşa'da Çilingir — Üniversite ve Site Bölgesine Yakın Ekip",
        referenceLandmark: "Sarıyer Reşitpaşa Kampüsü yakını",
        avgResponseMinutes: "12-15",
        latitude: 41.1025,
        longitude: 29.025,
        description:
          "Sarıyer Reşitpaşa Kampüsü yakını, yokuş siteler ve üniversite lojmanlarının iç içe geçtiği bir mahalle. Kampüs çıkışındaki aracı 12-15 dakikalık bir yarıçapta tutuyoruz. Site yönetimleriyle tanışığız; bariyerde bekletilmeden daireye çıkıyoruz.",
      },
      {
        slug: "vadistanbul",
        name: "Vadistanbul",
        heroLine: "Vadistanbul'da Çilingir — AVM ve Rezidans Bölgesine Hızlı Müdahale",
        referenceLandmark: "Vadistanbul AVM yakını",
        avgResponseMinutes: "10-15",
        latitude: 41.1075,
        longitude: 29.0075,
        description:
          "Vadistanbul AVM yakını, mağaza kepengi ile üst kattaki rezidansın aynı anda kilitlendiği bir komplekstir. AVM teknik ekipleriyle çalışmaya alışığız; 10-15 dakikada ilgili kuleye alınıyoruz. Gece kapanışında unutulan anahtar, burada en sık gelen çağrı tipi.",
      },
      {
        slug: "darussafaka",
        name: "Darüşşafaka",
        heroLine: "Darüşşafaka'da Çilingir — Kampüs Çevresine Hızlı Ulaşım",
        referenceLandmark: "Darüşşafaka Kampüsü yakını",
        avgResponseMinutes: "10-15",
        latitude: 41.1075,
        longitude: 29.0175,
        description:
          "Darüşşafaka Kampüsü yakını, kampüs lojmanı ve çevresindeki apartmanların sakin bir hattıdır. Büyükdere'ye inmeden bu kuşakta araç bulundurduğumuz için 10-15 dakikada kapıdayız. Okul saati dışında gelen ev kilitleri burada asıl yoğunluğu oluşturur.",
      },
      {
        slug: "seyrantepe",
        name: "Seyrantepe",
        heroLine: "Seyrantepe'de Çilingir — Metro ve Sanayi Hattına Hızlı Erişim",
        referenceLandmark: "Seyrantepe Metro İstasyonu yakını",
        avgResponseMinutes: "10-14",
        latitude: 41.0975,
        longitude: 28.995,
        description:
          "Seyrantepe Metro İstasyonu yakını, stadyum günü dışında sanayi ve konutun karıştığı bir geçittir. Metro çıkışını ve çevre atölye sokaklarını bildiğimiz için 10-14 dakikada hem depoyu hem daireyi açıyoruz. Kepenk motoru ve çelik kapı aynı çantada durur.",
      },
      {
        slug: "poligon",
        name: "Poligon",
        heroLine: "Poligon'da Çilingir — Site Bölgelerine Hızlı Ulaşım",
        referenceLandmark: "Poligon Caddesi yakını",
        avgResponseMinutes: "10-15",
        latitude: 41.1,
        longitude: 29.01,
        description:
          "Poligon Caddesi yakını siteler, Maslak kulelerine göre daha sakin ama girişleri bir o kadar kontrollüdür. Cadde üzerinde tuttuğumuz araç 10-15 dakikada site içine giriyor. Yeni nesil çoklu kilit ve çelik kapı göbeği bu cadde boyunca en sık değiştirdiğimiz parça.",
      },
      {
        slug: "maden",
        name: "Maden",
        heroLine: "Maden'de Çilingir — Sanayi ve Site Bölgesine Hızlı Müdahale",
        referenceLandmark: "Maden Mahallesi merkezi yakını",
        avgResponseMinutes: "10-15",
        latitude: 41.105,
        longitude: 29.01,
        description:
          "Maden Mahallesi merkezi yakını, atölye kepengi ile bitişikteki sitenin aynı sokakta durduğu bir dokudur. Merkezde bekleyen ekip 10-15 dakikada her iki tipe de yetişiyor. Sanayi kilitleri konut silindirinden kalındır; doğru seti araçta taşıyoruz.",
      },
      {
        slug: "buyukdere",
        name: "Büyükdere",
        heroLine: "Büyükdere'de Çilingir — Cadde Hattına Hızlı Ulaşım",
        referenceLandmark: "Büyükdere Caddesi yakını",
        avgResponseMinutes: "10-15",
        latitude: 41.1075,
        longitude: 29.01,
        description:
          "Büyükdere Caddesi yakını, ofis cephesi ve arka sokak konutunun aynı anda kilitlendiği bir omurgadır. Cadde trafiğine takılmamak için aracı yan sokaklarda tutuyoruz; 10-15 dakikada hem plaza lobisine hem apartmana ulaşıyoruz. Gece ofis kilidi bu hatta gündüz ev işinden daha yoğundur.",
      },
    ],
  },
  {
    slug: "kagithane",
    name: "Kağıthane",
    description:
      "Kağıthane merkezde günün her saati aktif ekip. Dere hattı ve çevresindeki tüm mahallelere hızlı ulaşım sağlıyoruz.",
    avgResponseMinutes: "10-12",
    image: "/images/regions/kagithane.jpg",
    presenceLine:
      "Kağıthane merkez ve dere hattında günün her saati araç bulunduruyoruz; şehrin diğer yakasından ekip beklemezsiniz.",
    neighborhoods: [
      {
        slug: "kagithane",
        name: "Kağıthane",
        heroLine: "Kağıthane'de Çilingir — Ortalama 10-12 Dakikada Kapınızda",
        referenceLandmark: "Kağıthane Meydan yakını",
        avgResponseMinutes: "10-12",
        latitude: 41.08,
        longitude: 28.97,
        description:
          "Kağıthane Meydan yakını, dere hattı, yeni konut kuleleri ve eski mahalle sokaklarının çarpıştığı bir merkezdir. Meydanda tuttuğumuz araç 10-12 dakikada hem kule lobisine hem yokuş apartmana yetişiyor. Burada çağrı, Anadolu yakasından ya da tek bir merkeze bağlı ekipten gelmez — zaten sahadadır.",
      },
    ],
  },
  {
    slug: "levent-etiler",
    name: "Levent - Etiler Hattı",
    description:
      "Levent'in finans merkezinden Etiler'in rezidans bölgesine kadar geniş bir hatta hizmet veriyoruz. Plaza ve site yönetimleriyle çalışma deneyimimiz var.",
    avgResponseMinutes: "10-14",
    image: "/images/regions/levent-etiler.jpg",
    presenceLine:
      "Levent finans kuşağı ile Etiler siteleri arasında sürekli araç bulunduruyoruz; plaza lobi ve site güvenlik prosedürlerini biliyoruz.",
    neighborhoods: [
      {
        slug: "levent",
        name: "Levent",
        heroLine: "Levent'te Çilingir — Finans Merkezine Hızlı Müdahale",
        referenceLandmark: "Levent Metro İstasyonu yakını",
        avgResponseMinutes: "10-14",
        latitude: 41.0825,
        longitude: 29.01,
        description:
          "Levent Metro İstasyonu yakını kulelerinde mesai bitince içeride kalan ekipler için her dakika toplantı demektir. Metro çıkışındaki aracı 10-14 dakikalık bir halkada tutuyoruz; lobi güvenlikle konuşmayı ezbere biliyoruz. Ofis silindiri ve çelik kasa bu durak çevresinde konut işinden önde gelir.",
      },
      {
        slug: "etiler",
        name: "Etiler",
        heroLine: "Etiler'de Çilingir — Site ve Rezidans Bölgesine Hızlı Ulaşım",
        referenceLandmark: "Etiler Akmerkez yakını",
        avgResponseMinutes: "10-14",
        latitude: 41.08,
        longitude: 29.035,
        description:
          "Etiler Akmerkez yakını sitelerde vale, güvenlik ve kat görevlisi olmadan daireye varmak zordur. AVM çevresinde tuttuğumuz ekip 10-14 dakikada ilgili siteye alınıyor. Yüksek güvenlikli çelik kapı ve kartlı sistem arızaları burada standart taleptir.",
      },
      {
        slug: "akatlar",
        name: "Akatlar",
        heroLine: "Akatlar'da Çilingir — Site Bölgelerine Hızlı Müdahale",
        referenceLandmark: "Akatlar Parkı yakını",
        avgResponseMinutes: "10-14",
        latitude: 41.08,
        longitude: 29.0225,
        description:
          "Akatlar Parkı yakını, parkı çevreleyen sitelerin sessiz ama kontrollü bir yerleşimidir. Park kenarında bekleyen araç 10-14 dakikada site içine giriyor. Aile konutu kilitleri ve bahçe kapısı arızaları plaza işinden daha sık; seti ona göre yüklüyoruz.",
      },
      {
        slug: "zincirlikuyu",
        name: "Zincirlikuyu",
        heroLine: "Zincirlikuyu'da Çilingir — Plaza Hattına Hızlı Erişim",
        referenceLandmark: "Zincirlikuyu Metro İstasyonu yakını",
        avgResponseMinutes: "10-14",
        latitude: 41.07,
        longitude: 29.0125,
        description:
          "Zincirlikuyu Metro İstasyonu yakını, metrobüs ve kulelerin sıkıştığı bir düğümdür. Trafiğe takılmamak için aracı yan bağlantılarda tutuyoruz; 10-14 dakikada plaza lobisine ulaşıyoruz. Gece kilitlenen kat ofisi, bu istasyon çevresinde en pahalı bekleyiştir — o yüzden sahadayız.",
      },
      {
        slug: "ulus",
        name: "Ulus",
        heroLine: "Ulus'ta Çilingir — Park ve Rezidans Bölgesine Hızlı Ulaşım",
        referenceLandmark: "Ulus Parkı yakını",
        avgResponseMinutes: "10-14",
        latitude: 41.0725,
        longitude: 29.025,
        description:
          "Ulus Parkı yakını rezidansları, Boğaz manzaralı sitelerin sakin kuşağıdır. Park çevresinde tuttuğumuz araç 10-14 dakikada ilgili kuleye iniyor. Site yönetimleriyle tanışığız; giriş kartı ve otopark katı prosedürü yüzünden dakikaları yakmıyoruz.",
      },
      {
        slug: "dikilitas",
        name: "Dikilitaş",
        heroLine: "Dikilitaş'ta Çilingir — Merkezi Konuma Hızlı Müdahale",
        referenceLandmark: "Zorlu Center yakını",
        avgResponseMinutes: "10-12",
        latitude: 41.0675,
        longitude: 29.0175,
        description:
          "Zorlu Center yakını, sahne çıkışı, ofis ve konutun aynı anda kilitlendiği bir kavşaktır. AVM otoparkı ile arkadaki sokakları bildiğimiz için 10-12 dakikada adrese varıyoruz. Dükkân kepengi ve daire çelik kapısı aynı gece içinde gelebiliyor.",
      },
      {
        slug: "balmumcu",
        name: "Balmumcu",
        heroLine: "Balmumcu'da Çilingir — Site Bölgelerine Hızlı Erişim",
        referenceLandmark: "Balmumcu Cadde yakını",
        avgResponseMinutes: "10-12",
        latitude: 41.065,
        longitude: 29.015,
        description:
          "Balmumcu Cadde yakını, Beşiktaş'a inen yokuş sitelerin sıkışık bir omurgasıdır. Cadde üzerinde tuttuğumuz ekip 10-12 dakikada site kapısına geliyor. Dar sokak ve tek yön, bu mahallede süreyi bozan asıl risk — o yüzden aracı caddeden indirmiyoruz, zaten buradayız.",
      },
    ],
  },
  {
    slug: "besiktas-sahil",
    name: "Beşiktaş Sahil Hattı",
    description:
      "Beşiktaş'tan Bebek'e uzanan sahil hattında merkezi konumumuz sayesinde en hızlı ulaşım süreleri bu bölgede. Boğaz'a paralel tüm mahallelere aktif hizmet.",
    avgResponseMinutes: "8-12",
    image: "/images/regions/besiktas-sahil.jpg",
    presenceLine:
      "Beşiktaş'tan Bebek'e sahil şeridinde sürekli araç bulunduruyoruz; Boğaz'a paralel mahallelere ayrı bir ofisten yola çıkmadan ulaşıyoruz.",
    neighborhoods: [
      {
        slug: "besiktas",
        name: "Beşiktaş",
        heroLine: "Beşiktaş'ta Çilingir — Ortalama 8-12 Dakikada Kapınızda",
        referenceLandmark: "Beşiktaş Meydan yakını",
        avgResponseMinutes: "8-12",
        latitude: 41.0425,
        longitude: 29.0075,
        description:
          "Beşiktaş Meydan yakını, iskele, çarşı ve arka yokuşların aynı çağrıda karıştığı bir merkezdir. Meydanda tuttuğumuz araç 8-12 dakikada hem sahil işhanına hem yokuş apartmana yetişiyor. Maç ve konser akşamı trafik kilitlense de yan sokakları bildiğimiz için süre bozulmuyor.",
      },
      {
        slug: "ortakoy",
        name: "Ortaköy",
        heroLine: "Ortaköy'de Çilingir — Sahil ve Cami Çevresine Hızlı Ulaşım",
        referenceLandmark: "Ortaköy Camii yakını",
        avgResponseMinutes: "8-12",
        latitude: 41.0475,
        longitude: 29.0275,
        description:
          "Ortaköy Camii yakını, turist kalabalığı ve sahil restoranlarının gece yarısı kilitlendiği bir meydandır. Cami çevresindeki yan sokaklarda beklediğimiz için 8-12 dakikada hem dükkân kepengini hem üst kattaki daireyi açıyoruz. Sahil trafiğine hiç girmiyoruz.",
      },
      {
        slug: "kurucesme",
        name: "Kuruçeşme",
        heroLine: "Kuruçeşme'de Çilingir — Sahil Şeridine Hızlı Erişim",
        referenceLandmark: "Kuruçeşme Parkı yakını",
        avgResponseMinutes: "10-14",
        latitude: 41.055,
        longitude: 29.035,
        description:
          "Kuruçeşme Parkı yakını, sahil düğünleri ve arkadaki yokuş yalıların aynı gece çağrı ürettiği ince bir şerittir. Park kenarında tuttuğumuz ekip 10-14 dakikada hem sahil kapısına hem yokuş villaya çıkıyor. Etkinlik akşamı ana cadde kapanır; o yüzden aracı parka paralel yan yolda bırakıyoruz.",
      },
      {
        slug: "bebek",
        name: "Bebek",
        heroLine: "Bebek'te Çilingir — Sahil ve Rezidans Bölgesine Hızlı Ulaşım",
        referenceLandmark: "Bebek Parkı yakını",
        avgResponseMinutes: "10-15",
        latitude: 41.0775,
        longitude: 29.0425,
        description:
          "Bebek Parkı yakını, sahil kafeleri ve arkadaki rezidansların pahalı bekleyiş ürettiği bir koydur. Park çevresinde tuttuğumuz araç 10-15 dakikada yalı kapısına ya da site lobisine iniyor. Yüksek güvenlikli kilitler burada standart; doğru silindiri araçta taşıyoruz.",
      },
      {
        slug: "nisantasi",
        name: "Nişantaşı",
        heroLine: "Nişantaşı'nda Çilingir — Merkezi Konuma Hızlı Müdahale",
        referenceLandmark: "Nişantaşı Meydan yakını",
        avgResponseMinutes: "8-12",
        latitude: 41.0475,
        longitude: 28.995,
        description:
          "Nişantaşı Meydan yakını, butik, ofis ve apartmanın aynı ada içinde kilitlendiği bir griddir. Tek yön sokakları bildiğimiz için 8-12 dakikada hem vitrin kepengini hem kat dairesini açıyoruz. Gece kapanışında unutulan anahtar, bu meydan çevresinde en sık çağrıdır.",
      },
    ],
  },
];

export function getAllNeighborhoodSlugs() {
  return regions.flatMap((r) =>
    r.neighborhoods.map((n) => ({ bolge: r.slug, mahalle: n.slug })),
  );
}

export function getAllRegionSlugs() {
  return regions.map((r) => ({ bolge: r.slug }));
}

export function findRegion(bolgeSlug: string) {
  return regions.find((r) => r.slug === bolgeSlug) ?? null;
}

export function findNeighborhood(bolgeSlug: string, mahalleSlug: string) {
  const region = findRegion(bolgeSlug);
  if (!region) return null;
  const neighborhood = region.neighborhoods.find((n) => n.slug === mahalleSlug);
  if (!neighborhood) return null;
  return { region, neighborhood };
}
