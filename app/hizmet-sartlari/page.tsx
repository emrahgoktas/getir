import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Chrome";
import { PHONE_DISPLAY, SITE_NAME } from "@/lib/constants";

export const dynamic = "force-static";

const title = "Hizmet şartları | Getir Çilingir";
const description =
  "Getir Çilingir hizmet şartları: acil çilingir hizmeti, süre, ücret, hasarsız kilit açma ve sorumluluk esasları.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/hizmet-sartlari" },
};

export default function TermsPage() {
  return (
    <main>
      <div className="wrap">
        <Breadcrumb
          items={[
            { href: "/", label: "Ana Sayfa" },
            { label: "Hizmet şartları" },
          ]}
        />
      </div>
      <article className="hero wrap legal-page">
        <p className="hero__kicker">Yasal · Sözleşme</p>
        <h1>Hizmet şartları</h1>
        <p className="hero__lead">
          {SITE_NAME} acil çilingir hizmeti, nöbetçi çilingir ve 7/24
          çilingir vardiyası bu şartlara tabidir. Hizmeti talep ederek bu
          metni kabul etmiş olursunuz.
        </p>
        <div className="article-body">
          <h2>1. Hizmetin niteliği</h2>
          <p>
            Kapı açma, hasarsız kilit açma, kilit / göbek değişimi, çelik
            kapı ve kasa müdahalesi yerinde verilir. “Çilingir 15 Dk
            Kapıda” ortalama varış ifadesidir; trafik, site güvenliği,
            yanlış adres ve olağanüstü yol durumu süreyi etkileyebilir.
            Konumuza 15 dk mesafede bekleyen ekip, yola çıkış modelinden
            farklıdır; yine de kesin dakika taahhüdü değildir.
          </p>
          <h2>2. Ücret</h2>
          <p>
            Ücret, işin türü, saat (gece çilingir), parça ve ulaşım
            mesafesine göre yerinde netleşir. Çağrı öncesi aralık
            söylenebilir; kapı tipi görülmeden kesin fiyat bağlanmaz.
            Ödeme nakit veya ekibin kabul ettiği yöntemle iş bitiminde
            alınır. Garantili çilingir kapsamı, değişen parça ve işçilik
            için sözlü veya yazılı özetle belirtilir.
          </p>
          <h2>3. Müdahale ve hasar</h2>
          <p>
            Öncelik hasarsız kilit açmadır. Pas, kırık göbek, kaynaklı
            kanat veya hatalı montajda kontrollü söküm gerekebilir. Bu
            durumda risk önceden anlatılır. Müşterinin yanlış bilgi
            vermesi, yetkisiz giriş talebi veya üçüncü kişi mülküne
            izinsiz müdahale talebi reddedilir.
          </p>
          <h2>4. Yetki ve kimlik</h2>
          <p>
            Konut ve işyeri açılışında hak sahibi olduğunuzun makul
            şekilde gösterilmesi istenebilir. Site ve plaza yönetiminin
            giriş kurallarına uyulur. Suç teşkil edebilecek talepler
            yerine getirilmez.
          </p>
          <h2>5. Sorumluluk</h2>
          <p>
            Mevcut arızalı kilit, daha önce müdahale edilmiş kapı ve
            üretici hatasından {SITE_NAME} sorumlu tutulamaz. İşçilik
            kaynaklı ayıpta makul sürede düzeltme sağlanır. Dolaylı
            zarar, iş kaybı ve gecikme cezası talep edilemez. Zorunlu
            hallerde yasal sorumluluk, fiilî ücretle sınırlıdır.
          </p>
          <h2>6. İptal</h2>
          <p>
            Ekip adrese vardıktan sonra vazgeçilirse yol bedeli
            doğabilir. Yanlış hat veya eksik adres, süreyi ve ücreti
            etkiler.
          </p>
          <h2>7. Uygulanacak hukuk</h2>
          <p>
            Türkiye Cumhuriyeti hukuku uygulanır. Uyuşmazlıklarda
            İstanbul mahkemeleri ve icra daireleri yetkilidir. İletişim:{" "}
            {PHONE_DISPLAY}.
          </p>
        </div>
      </article>
    </main>
  );
}
