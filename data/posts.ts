export type BlogPostStatus = "active" | "inactive" | "draft";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingMinutes: number;
  paragraphs: string[];
  /** Omitted posts are published. Drafts stay out of the sitemap and the DSA feed. */
  status?: BlogPostStatus;
  indexable?: boolean;
};

export const posts: BlogPost[] = [
  {
    slug: "cilingir-15-dk-kapida",
    title: "Çilingir 15 Dk Kapıda: İstanbul’da süre nasıl tutulur?",
    description:
      "Çilingir 15 Dk Kapıda vaadi tek ofisten çıkınca bozulur. Dağıtık saha, nöbetçi çilingir ve konumuza 15 dk mesafede bekleyen ekip nasıl çalışır?",
    date: "2026-08-12",
    readingMinutes: 4,
    paragraphs: [
      "Çilingir 15 Dk Kapıda cümlesi İstanbul’da herkesin duyduğu bir vaattir. Kapı kilitlendiğinde dakika, reklam metninden daha pahalıdır. Asıl soru şudur: bu süre tek bir merkeze bağlı ekiple mi tutulur, yoksa çağrının düştüğü hatta zaten bekleyen bir araçla mı? Getir Çilingir tarafında cevap ikincisidir. Acil çilingir hizmeti, ofisten yola çıkan bir sefer değil; konumuza 15 dk mesafede tutulan saha varlığıdır.",
      "İstanbul trafiği 15 dakikayı kolayca yer. Maslak’tan Bebek’e, Sarıyer iskelesinden Zekeriyaköy villasına aynı çıkış noktası yetmez. O yüzden hatları ayırıyoruz: Sarıyer Kuzey, Maslak iş merkezi, Kağıthane, Levent–Etiler ve Beşiktaş sahil. Her hatta nöbetçi çilingir aracı durur. Size en yakın çilingir, haritadaki en parlak reklam değil; o anda sizin semtinizde bekleyen ekiptir. En yakın çilingir araması bu yüzden mahalle sayfasına, oradan da o hattın aracına düşmelidir.",
      "Süre tutmanın ikinci şartı, lobi ve site protokolünü bilmektir. Plaza kat kartı, vale, site bariyeri ve otopark katı, yolda kaybedilen dakikadan daha çok zaman yer. 7/24 çilingir vardiyası bu prosedürleri ezbere bilir. Çağrı merkeze düşüp “yola çıktık” demez. Aktif ekibimiz sahada olduğu için 15 dk iddiası gece çilingir çağrısında da aynı kalır. Gece çilingir, gündüzden farklı bir ekip değildir; aynı hattın nöbetidir.",
      "Üçüncü şart doğru çanta. Hasarsız kilit açma seti, çelik kapı göbeği, ofis silindiri ve kasa anahtarı aynı araçta durmazsa süre bozulur. Garantili çilingir işi, kapıyı kırarak açmak değildir. Önce hasarsız kilit açma denenir; gerekirse göbek yerinde değişir. Bu da 15 dakikalık varışın ardından işin uzamamasını sağlar. Çilingir 15 Dk Kapıda, yalnızca kapıya varmak değil, kapıyı kullanılabilir halde bırakmaktır.",
      "Müşteri tarafında da net bir adım vardır. Acil çilingir hizmeti çağrısında mahalle, site adı ve kapı tipi söylemek yeter. “En yakın çilingir gelsin” demek, hattı belli etmez. Sarıyer’de iskele yakını ile Bahçeköy orman yolu aynı tur değildir. O yüzden sitede bölge ve mahalle sayfaları var: hangi hatta, hangi dakikada, hangi ekibin beklediği yazılıdır. Konumuza 15 dk mesafede cümlesi bu sayfalarda boş slogan değil, o hattın çalışma biçimidir.",
      "Özetle Çilingir 15 Dk Kapıda, reklam cümlesi olarak kalmasın diye üç şeye bağlanır: dağıtık saha, nöbetçi çilingir / 7/24 çilingir vardiyası ve hasarsız kilit açma hazırlığı. Aktif ekibimiz sahada değilse süre tutulmaz. Tek merkeze bağlı “yola çıktık” modeli İstanbul’da 15 dakikayı teslim etmez. Kapınız kilitliyse doğrudan hattınızı seçin ya da arayın; size en yakın çilingir zaten o hatta bekliyordur.",
      "Pratikte çağrı şöyle işler. Telefonda mahalle, site adı ve kapı tipi yeter. Nöbetçi çilingir o hattın aracına düşer; 7/24 çilingir vardiyası ayrı bir “gece ekibi” aramaz. Acil çilingir hizmeti bu yüzden kısa konuşulur, uzun yola çıkılmaz. Çilingir 15 Dk Kapıda iddiası, konuşmanın uzamasından değil aracın zaten yakın olmasından tutulur.",
      "Yanlış model şudur: tek dükkân, tüm İstanbul, “hemen yola çıktık”. Doğru model hat, mahalle ve saha aracıdır. En yakın çilingir pin’i sizi 40 dakikalık bir tura sokabilir. Size en yakın çilingir, konumuza 15 dk mesafede bekleyendir. Hasarsız kilit açma ve garantili çilingir de aynı turda biterse iş tamamdır. Gece çilingir dahil bu zincir bozulmaz.",
    ],
  },
  {
    slug: "acil-cilingir-hizmeti-nobetci-cilingir",
    title: "Acil çilingir hizmeti ve nöbetçi çilingir ne demek?",
    description:
      "Acil çilingir hizmeti ile nöbetçi çilingir aynı şey değildir. 7/24 çilingir vardiyası, gece çilingir ve sahada bekleyen ekip nasıl ayrılır?",
    date: "2026-08-14",
    readingMinutes: 4,
    paragraphs: [
      "Acil çilingir hizmeti, kapının o anda açılamadığı her durumu kapsar: ev, ofis, araç, çelik kapı, kasa. Nöbetçi çilingir ise bu işin vardiya halidir. Birçok işletme “acil” der ama mesai bitince ikinci bir ekip yoktur. 7/24 çilingir iddiası, nöbetçi çilingir aracı sahada durmuyorsa boş kalır. Getir Çilingir’de acil çilingir hizmeti ile nöbetçi çilingir aynı hatta, aynı çantada durur.",
      "Nöbetçi çilingir, hastanedeki nöbetçi hekim gibi düşünülmelidir. Çağrı merkeze düşer, kâğıt döner, ekip evinden çıkarsa gece çilingir 40–60 dakikaya yayılır. İstanbul’da bu, özellikle Sarıyer orman yolu, Maslak kule lobisi ve Beşiktaş sahil kapanışında kabul edilmez. O yüzden nöbetçi çilingir aracı hattın içinde bekler. Konumuza 15 dk mesafede cümlesi bu bekleyişin adıdır. Çilingir 15 Dk Kapıda vaadi, nöbetçi çilingir olmadan tutulmaz.",
      "7/24 çilingir, saatin 00:00–23:59 olmasıdır. Gece çilingir ise bu vardiyanın gece dilimidir: maç çıkışı, otel kilidi, ofis mesai sonu, unutulan anahtar. Acil çilingir hizmeti gündüz kısa, gece uzun olmamalıdır. Aktif ekibimiz sahada olduğu için gece çilingir çağrısı ayrı bir “gece tarifesi ekibi” beklemez. Aynı hat, aynı süre, aynı hasarsız kilit açma prosedürü.",
      "Müşteri sık karıştırır: en yakın çilingir ile nöbetçi çilingir. En yakın çilingir, haritada size yakın görünen dükkân olabilir; gece kapalıdır. Size en yakın çilingir, o saatte sahada olan ekiptir. Nöbetçi çilingir bu yüzden dükkân vitrini değil, hat bazlı araçtır. Plaza ve site yönetimleriyle çalışan ekip, gece lobi görevlisinin sorduğu soruları da bilir. Bu da acil çilingir hizmetinin süresini korur.",
      "Hasarsız kilit açma, nöbetçi çilingir çantasının ilk sırasıdır. Gece kapıyı kırarak açmak, sabah hem kapı hem güvenlik masrafı çıkarır. Garantili çilingir işi, gece yapılan müdahalenin gündüz de ayakta durmasıdır. Göbek değiştiyse parça ve işçilik net söylenir. Acil çilingir hizmeti “ne olursa olsun açalım” yarışı değildir; kapıyı ve kilidi bırakılabilir halde teslim etmektir.",
      "Kısaca: acil çilingir hizmeti işin türü, nöbetçi çilingir işin vardiyası, 7/24 çilingir işin saatidir. Üçü bir arada değilse Çilingir 15 Dk Kapıda cümlesi durmaz. Aktif ekibimiz sahada, konumuza 15 dk mesafede bekler. Kapı kilitlendiğinde nöbetçi çilingir arayın; size en yakın çilingir o anda yolda değil, zaten hattınızdadır.",
      "Vardiya planı hattın karakterine göre kurulur. Maslak’ta mesai bitişi, Beşiktaş’ta sahil kapanışı, Sarıyer’de vapur ve orman yolu ayrı yoğunluktur. Nöbetçi çilingir bu yoğunluğu ezbere bilir. Acil çilingir hizmeti “her yere aynı anda” demek değildir; doğru hatta doğru saatte durmaktır. 7/24 çilingir bu duruşun adıdır.",
      "Müşteri için pratik kural: gece çilingir arıyorsanız “yola çıktık mı?” diye sorun. Cevap “bu hattadayız” ise Çilingir 15 Dk Kapıda gerçekçidir. Cevap “merkezden çıkıyoruz” ise süre uzar. En yakın çilingir ile size en yakın çilingir farkı burada çıkar. Hasarsız kilit açma ve garantili çilingir de aynı çağrıda konuşulsun; sonra sürpriz olmasın.",
    ],
  },
  {
    slug: "hasarsiz-kilit-acma-nasil-yapilir",
    title: "Hasarsız kilit açma nedir, kapı ne zaman sökülmez?",
    description:
      "Hasarsız kilit açma, çelik kapı ve silindirde ilk denenen yöntemdir. Garantili çilingir işinde kapı neden kırılmaz?",
    date: "2026-08-16",
    readingMinutes: 4,
    paragraphs: [
      "Hasarsız kilit açma, kilidi ve kapı kanadını kırmadan içeri girmeyi hedefler. Acil çilingir hizmetinde ilk tercih budur. Çünkü kırılan çelik kapı, gece çözülen bir işi sabaha pahalı bir tamire çevirir. Garantili çilingir, “açtık gittik” demez; kapının ertesi gün de kilitlenmesi gerekir. Hasarsız kilit açma bu yüzden hem hız hem kalite işidir.",
      "Yöntem kilit tipine göre değişir. Avrupa silindiri, çelik kapı göbeği, oda kilidi, ofis kartlı kilit ve kasa ayrı set ister. Nöbetçi çilingir aracında bu setlerin hazır olması, Çilingir 15 Dk Kapıda vaadinin ikinci yarısıdır. Araca 15 dakikada varıp çantada parça yoksa süre bozulur. 7/24 çilingir vardiyası, gece çilingir çağrısında da aynı seti taşır. Aktif ekibimiz sahada derken kastedilen budur: hem adam hem çanta hattadır.",
      "Hasarsız kilit açma her kapıda mümkün olmayabilir. Paslanmış yalı kilidi, kırık göbek, kaynaklı çelik kapı veya hatalı montaj, kontrollü söküm gerektirebilir. Bu durumda da amaç kapı kanadını imha etmek değildir. Size en yakın çilingir, “kırarak açarım” diyen ekip değil, seçeneği baştan söyleyen ekiptir. En yakın çilingir aramasında bu ayrımı sorun. Konumuza 15 dk mesafede bekleyen ekip, sahada gördüğü kilidi bilir; tahminle kapıya vurmaz.",
      "Çelik kapı özel bir başlıktır. Çoklu kilit, üstten sürgü ve zırh, ev hırsızlık sigortasının da konusudur. Hasarsız kilit açma burada daha uzun sürebilir ama kapı değerini korur. Garantili çilingir, değişen göbeği ve işi belgeler. Acil çilingir hizmeti panikle kapıyı kesmeye dönüşmesin diye prosedür nettir: önce hasarsız deneme, sonra kontrollü müdahale.",
      "Ofis ve plaza kilitlerinde hasarsız kilit açma, lobi kaydı kadar önemlidir. Yanlış yöntem, hem kapıyı hem şirket güvenliğini bozar. Nöbetçi çilingir, kat görevlisi ve güvenlikle konuşmayı bilir. Gece çilingir çağrısında ofis kilidi, sabah toplantısından önce açılmalıdır; kapının hurdaya dönmesi ikinci bir krizdir. 7/24 çilingir bu yüzden “hızlı ve kaba” değil, “hızlı ve hasarsız” olmak zorundadır.",
      "Sonuç: hasarsız kilit açma, acil çilingir hizmetinin kalite çizgisidir. Çilingir 15 Dk Kapıda varışı, kapıyı kırmadan tamamlarsanız anlamlıdır. Garantili çilingir, gece çilingir ve nöbetçi çilingir aynı çizgide durur. Size en yakın çilingir, bu çizgiyi sahada taşıyandır. Kilidiniz kilitliyse kırdırmayın; hasarsız kilit açma isteyin.",
      "Araç kilidi ayrı bir başlıktır. Kapı kolu, kontak ve immobilizer karıştırılmamalıdır. Acil çilingir hizmeti araçta da önce hasarsız kilit açma dener. Kırılan kapı kolu, yedek parça ve boya masrafı çıkarır. 7/24 çilingir vardiyasında araç işi de aynı çizgidedir. En yakın çilingir pin’i araç seti taşımayabilir; size en yakın çilingir hattın çantasını sorun.",
      "Apartman kilitleri de sık gelir. Zil bozulur, içeride kalan olur, çelik kapı göbeği sıkışır. Nöbetçi çilingir bu işte kapıyı kesmeden ilerler. Konumuza 15 dk mesafede varış, ardından hasarsız kilit açma, gerekirse garantili çilingir ile göbek. Gece çilingir çağrısında komşu ve güvenlik için gürültü de sınırlanır. Aktif ekibimiz sahada derken bu temizlik de kastedilir.",
    ],
  },
  {
    slug: "gece-cilingir-ve-7-24-cilingir",
    title: "Gece çilingir ve 7/24 çilingir: vardiya nasıl işler?",
    description:
      "Gece çilingir çağrısı neden gündüzden uzun sürmesin? 7/24 çilingir, nöbetçi çilingir ve sahada bekleyen ekip.",
    date: "2026-08-18",
    readingMinutes: 4,
    paragraphs: [
      "Gece çilingir, çoğu kişinin “yok artık” dediği andır: anahtar evde, kapı kilitli, saat ikidir. 7/24 çilingir yazısı sitelerde bolddur; pratikte ekip evinden kalkıyorsa gece çilingir 15 dakika değil bir saattir. Acil çilingir hizmeti gece de aynı ürün olmalıdır. Çilingir 15 Dk Kapıda vaadi, gece çilingir için ayrıca yazılmaz; aynı hattın nöbetidir.",
      "7/24 çilingir, çağrı merkezinin açık olması değildir. Nöbetçi çilingir aracının açık olmasıdır. Aktif ekibimiz sahada cümlesi gece anlam kazanır. Beşiktaş sahili kapanır, Ortaköy kalabalık dağılır, Maslak ofisleri kilitlenir. Bu üç tabloyu tek merkeze bağlı ekip yetiştiremez. Konumuza 15 dk mesafede bekleyen hat aracı, gece çilingir süresini gündüze yaklaştırır.",
      "Gece işinin ikinci yüzü güvenliktir. Site ve plaza gece daha sıkı bakar. En yakın çilingir diye gelen tanınmayan ekip kapıda bekletilir. Size en yakın çilingir, o sitenin gece protokolünü bilen ekiptir. Nöbetçi çilingir bu yüzden “rastgele usta” değil, hat ekibidir. 7/24 çilingir vardiyası lobi kaydını, vale ve kat görevlisini gündüzden bilir.",
      "Hasarsız kilit açma gece daha kritiktir. Gürültü, komşu, güvenlik kamerası ve kırılan kapı, sabah şikâyete döner. Garantili çilingir, gece açılan kilidin gündüz de çalışmasını ister. Acil çilingir hizmeti panik işi olsa da yöntem gece değişmez: önce hasarsız kilit açma. Gece çilingir çantası gündüz çantasından eksik olamaz.",
      "Fiyat kaygısı da gece büyür. “Gece olduğu için üç kat” algısı, 7/24 çilingir güvenini yer. Süre ve iş net söylenmelidir. Çilingir 15 Dk Kapıda varış iddiası, gece tarifesini gizlemez; varış süresini şişirmez. Size en yakın çilingir, gece de aynı hattı söyleyen ekiptir. En yakın çilingir aramasında gece müsait olup olmadığını sorun.",
      "Özet: gece çilingir, 7/24 çilingir vardiyasının gece dilimidir. Nöbetçi çilingir sahada değilse acil çilingir hizmeti gece uzar. Aktif ekibimiz sahada, konumuza 15 dk mesafede bekler. Kapınız gece kilitliyse beklemeyin; gece çilingir zaten o hatta nöbettedir.",
      "Gece çağrısında bilgi kısalır. Mahalle, bina, kapı tipi. Uzun tarif, sahil ve orman yolunda vakit yer. Acil çilingir hizmeti kısa konuşulur. Çilingir 15 Dk Kapıda, tarifin kısalığıyla da tutulur. Nöbetçi çilingir hattı biliyorsa “ikinci soldan” anlatmaya gerek kalmaz. En yakın çilingir pin’i o sokakları bilmez; size en yakın çilingir bilir.",
      "Kadın, yaşlı ve çocuklu haneler gece daha sık arar. 7/24 çilingir vardiyası bu çağrıda net konuşur: kim geliyor, kaç dakika, hasarsız kilit açma mı. Garantili çilingir işi gece de aynı dildir. Aktif ekibimiz sahada olduğu için “sabah gelelim” teklifi yoktur. Gece çilingir, ertesi güne ertelenen iş değildir.",
      "Trafik ve yol kapanışı gece çilingir süresini bozmasın diye araç yan sokakta durur. Beşiktaş ve Ortaköy’de ana caddeye girilmez. Acil çilingir hizmeti bu yüzden “en kısa pin” değil “en doğru sokak”tır. Çilingir 15 Dk Kapıda, kapanan sahili bilen nöbetçi çilingir ile tutulur. Size en yakın çilingir o sokağı ezbere bilir.",
    ],
  },
  {
    slug: "en-yakin-cilingir-nasil-bulunur",
    title: "En yakın çilingir ve size en yakın çilingir nasıl seçilir?",
    description:
      "En yakın çilingir harita pin’i değildir. Size en yakın çilingir, hattınızda bekleyen nöbetçi çilingir ekibidir.",
    date: "2026-08-20",
    readingMinutes: 4,
    paragraphs: [
      "En yakın çilingir araması, kilitli kapıda ilk reflekstir. Harita bir pin gösterir; pin gündüz açık bir dükkân olabilir. Size en yakın çilingir ise o anda sizin mahallenizde duran ekiptir. Acil çilingir hizmetinde mesafe, dükkân vitrini değil, araç konumudur. Çilingir 15 Dk Kapıda vaadi bu yüzden hat bazlıdır, tek ofis bazlı değildir.",
      "İstanbul’da “yakın” yanıltır. Tarabya ile Zekeriyaköy haritada komşudur; gece orman yolu ayrı dünyadır. Maslak Meydan ile Vadistanbul kule protokolü ayrıdır. En yakın çilingir pin’i sizi yanlış hatta yollar. Size en yakın çilingir, Sarıyer Kuzey, Maslak, Kağıthane, Levent–Etiler veya Beşiktaş sahil hattından biridir. Konumuza 15 dk mesafede bekleyen araç o hattın içindedir.",
      "Seçerken üç soru sorun. Bir: nöbetçi çilingir ve 7/24 çilingir gerçekten sahada mı, yoksa çağrıdan sonra mı yola çıkıyor? İki: hasarsız kilit açma ilk yöntem mi? Üç: garantili çilingir kapsamı net mi? Gece çilingir çağrısında bu üç soru daha da önemlidir. Aktif ekibimiz sahada cevabı “yola çıktık” değil, “bu hattadayız” olmalıdır.",
      "Site ve plaza yönetimleri en yakın çilingir listesini sık günceller. Liste eskiyse gece kapıda bekletilirsiniz. Acil çilingir hizmeti, yönetimle çalışan ekiplerde daha kısa sürer. Size en yakın çilingir, o sitenin güvenlik prosedürünü bilendir. En yakın çilingir reklamı bu bilgiyi vermez. Mahalle sayfasındaki süre ve landmark metni, hattı somutlar.",
      "Fiyat da yakınlık kadar konuşulur. Kapı kilitliyken en ucuz pin, en pahalı tamire dönebilir. Hasarsız kilit açma atlanır, kapı kesilir, sabah çelik kapı bedeli çıkar. Garantili çilingir, işi ve parçayı baştan söyler. Çilingir 15 Dk Kapıda varış, bu şeffaflıkla birleşince kalite skoru da, müşteri güveni de durur.",
      "Kısaca: en yakın çilingir harita, size en yakın çilingir saha ekibidir. Nöbetçi çilingir, 7/24 çilingir ve gece çilingir aynı ekibin vardiyasıdır. Konumuza 15 dk mesafede, aktif ekibimiz sahada. Kapınız kilitliyse pin’e değil hatta bakın; acil çilingir hizmeti oradan gelir.",
      "Sitedeki bölge ve mahalle sayfaları bu seçimi kısaltmak içindir. Sarıyer Kuzey ayrı, Maslak ayrı, Beşiktaş sahil ayrıdır. Acil çilingir hizmeti çağrısında sayfadaki süreyi görün, sonra arayın. Çilingir 15 Dk Kapıda o sayfanın H1’inde durur çünkü o hattın çalışma biçimidir. Hasarsız kilit açma ve garantili çilingir de aynı sayfada yazılıdır; sürpriz olmasın.",
      "Yönetim ve komşu tavsiyesi de pin’den iyidir. Gece çilingir için “geçen ay gelen ekip” çoğu zaman 7/24 çilingir vardiyasını bilir. Nöbetçi çilingir hattı sabitse süre de sabittir. En yakın çilingir araması her seferinde yeni bir yabancıyı kapıya getirmesin. Size en yakın çilingir, tekrar gelen ekiptir; konumuza 15 dk mesafede bekler.",
      "Ödeme ve fatura da seçimin parçasıdır. Acil çilingir hizmeti nakit baskısıyla kapı kırdırmasın. Garantili çilingir işi belgelenir. Hasarsız kilit açma yapıldıysa bunu da sorun. Çilingir 15 Dk Kapıda varış, kayıtsız iş demek değildir. Size en yakın çilingir, 7/24 çilingir vardiyasında da aynı netlikte konuşur.",
    ],
  },
  {
    slug: "garantili-cilingir-ve-celik-kapi",
    title: "Garantili çilingir: çelik kapı, göbek ve sonrası",
    description:
      "Garantili çilingir, çelik kapı ve kilit değişiminde işin ertesi gün de durmasıdır. Hasarsız kilit açma ile nasıl bağlanır?",
    date: "2026-08-22",
    readingMinutes: 4,
    paragraphs: [
      "Garantili çilingir, “açtık” demenin ötesidir. Çelik kapı göbeği değiştiyse o göbek ertesi gün de dönmelidir. Acil çilingir hizmetinde panik, kaliteyi ezer. Oysa Çilingir 15 Dk Kapıda varışı ile garantili çilingir işi çelişmez. Hız, hasarsız kilit açma ve doğru parça aynı çantadadır. Nöbetçi çilingir bu çantayı gece de taşır.",
      "Çelik kapı İstanbul’da en sık görülen konut kilididir. Çoklu kilit, zırh ve üst sürgü, hırsızlık sigortasının da şartıdır. Yanlış müdahale kapıyı ve poliçeyi bozar. Hasarsız kilit açma bu yüzden çelik kapıda ilk yoldur. Olmazsa kontrollü göbek değişimi yapılır. Garantili çilingir, değişen parçayı ve işçiliği belgeler. 7/24 çilingir vardiyası bu belgeleme gece de durmasın diye aynı prosedürü kullanır.",
      "Ofis ve kasa işi ayrı garantidir. Plaza silindiri ve çelik kasa, ev kilidinden kalındır. En yakın çilingir pin’i bu sete sahip olmayabilir. Size en yakın çilingir, Maslak–Levent hattında ofis çantasını taşıyandır. Gece çilingir çağrısında ofis kapısı sabah kilitlenemez halde bırakılırsa iş bitmemiş demektir. Aktif ekibimiz sahada cümlesi, doğru setin de sahada olmasıdır.",
      "Garanti, süreyi uzatmak için bahane değildir. Konumuza 15 dk mesafede varış, işin uzamasını da sınırlar. Gereksiz söküm yapılmaz. Acil çilingir hizmeti “ne kadar çok parça o kadar çok iş” modeline dönmez. Garantili çilingir, az ve doğru müdahaledir. Hasarsız kilit açma bu ekonomik çizginin de adıdır.",
      "Müşteri ne beklemeli? Net süre, net yöntem, net fiyat aralığı. Nöbetçi çilingir ve 7/24 çilingir bu üçlüyü gece de söyler. Size en yakın çilingir, kapı tipini sormadan fiyat yummayan ekiptir. En yakın çilingir reklamı bunu vermez. Çilingir 15 Dk Kapıda vaadi, kapıya varmak ve kapıyı garantili bırakmaktır.",
      "Sonuç: garantili çilingir, çelik kapı ve kilit işinin ertesi gün testidir. Hasarsız kilit açma birinci adım, doğru göbek ikinci adımdır. Gece çilingir, nöbetçi çilingir ve acil çilingir hizmeti aynı kalite çizgisinde durur. Aktif ekibimiz sahada, konumuza 15 dk mesafede. Kapınız çelikse kırmayın; garantili çilingir isteyin.",
      "Kasa ve kepenk işi de aynı çizgidedir. Aceleyle kesilen kepenk, dükkânın sabahını kapatır. Acil çilingir hizmeti burada da hasarsız kilit açma dener. 7/24 çilingir vardiyası kepenk motoru ve kasa anahtarını ayrı taşır. En yakın çilingir pin’i bu seti taşımayabilir. Size en yakın çilingir, çantayı sorun; garantili çilingir ancak doğru setle durur.",
      "Montaj kalitesi de garantinin parçasıdır. Eğri göbek, ertesi gün yine kilitler. Nöbetçi çilingir yerinde ölçü alır, uydurmaz. Çilingir 15 Dk Kapıda varış, montajı savsaklama bahanesi değildir. Gece çilingir çağrısında da göbek oturmadan iş bitmez. Konumuza 15 dk mesafede olmak, işi yarım bırakmayı gerektirmez. Aktif ekibimiz sahada, işi bitirene kadar hattadır.",
      "Villa ve site kapılarında çift kilit sık görülür. Acil çilingir hizmeti birini açıp diğerini kırmaz. Hasarsız kilit açma her kilit için ayrı denenir. 7/24 çilingir vardiyası bu işi gece de aynı titizlikle yapar. Size en yakın çilingir, çelik kapı markasını sorsun. Garantili çilingir ancak doğru göbek ve doğru montajla durur.",
    ],
  },
];

export function isPublishedPost(post: BlogPost): boolean {
  return (post.status ?? "active") === "active" && post.indexable !== false;
}

export function publishedPosts(): BlogPost[] {
  return posts.filter(isPublishedPost);
}

export function getAllPostSlugs() {
  return publishedPosts().map((post) => ({ slug: post.slug }));
}

export function findPost(slug: string) {
  return posts.find((post) => post.slug === slug) ?? null;
}

export function wordCount(post: BlogPost) {
  return post.paragraphs.join(" ").trim().split(/\s+/).length;
}
