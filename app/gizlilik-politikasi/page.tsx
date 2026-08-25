import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Chrome";
import { PHONE_DISPLAY, SITE_NAME, SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

const title = "Gizlilik politikası | Getir Çilingir";
const description =
  "Getir Çilingir gizlilik politikası ve KVKK aydınlatması. İletişim formu, çağrı ve çerez verilerinin nasıl işlendiği.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/gizlilik-politikasi" },
};

export default function PrivacyPage() {
  return (
    <main>
      <div className="wrap">
        <Breadcrumb
          items={[
            { href: "/", label: "Ana Sayfa" },
            { label: "Gizlilik politikası" },
          ]}
        />
      </div>
      <article className="hero wrap legal-page">
        <p className="hero__kicker">Yasal · KVKK</p>
        <h1>Gizlilik politikası</h1>
        <p className="hero__lead">
          Son güncelleme: 25 Ağustos 2026. {SITE_NAME}, 6698 sayılı Kişisel
          Verilerin Korunması Kanunu kapsamında veri sorumlusu sıfatıyla
          hareket eder.
        </p>
        <div className="article-body">
          <h2>1. Hangi verileri işleriz</h2>
          <p>
            Acil çilingir hizmeti çağrısında ad, telefon, mahalle / hat
            bilgisi ve mesaj metni işlenir. İletişim formu WhatsApp
            üzerinden iletilir; arama kayıtları telefon operatörü ve
            cihazınızda oluşabilir. Site kullanımı sırasında IP adresi,
            tarayıcı türü, sayfa gezintisi ve reklam tıklama sinyalleri
            (DubixGuard ve bağlı reklam araçları) işlenebilir.
          </p>
          <h2>2. Amaç ve hukuki sebep</h2>
          <p>
            Veriler sözleşmenin kurulması ve ifası (hizmet talebi), meşru
            menfaat (sahte tıklama ve dolandırıcılığın önlenmesi) ve açık
            rıza (reklam kişiselleştirme / çerez onayı) kapsamında
            işlenir. Çilingir 15 Dk Kapıda vaadi, çağrıyı doğru hatta
            düşürmek için konum ve mahalle bilgisine ihtiyaç duyar.
          </p>
          <h2>3. Aktarım</h2>
          <p>
            WhatsApp (Meta), telefon şebekesi, barındırma (Vercel) ve
            tıklama koruması (DubixGuard) hizmetlerinde veri işlenebilir.
            Yurt dışı aktarım, ilgili sağlayıcıların altyapısına bağlı
            olabilir. Veri, hizmetin görülmesi dışında satılmaz.
          </p>
          <h2>4. Saklama</h2>
          <p>
            İletişim kayıtları, yasal yükümlülük ve olası uyuşmazlık
            süreleri kadar; çerez ve reklam sinyalleri onayınız ve
            sağlayıcı politikalarına göre saklanır. Süre bitince silinir
            veya anonimleştirilir.
          </p>
          <h2>5. Haklarınız</h2>
          <p>
            KVKK m.11 uyarınca verilerinize erişme, düzeltme, silme,
            işlemeyi kısıtlama ve itiraz haklarınız vardır. Başvuru için{" "}
            {PHONE_DISPLAY} numarasını arayın veya{" "}
            <a href="/iletisim">iletişim formunu</a> kullanın. Şikâyet
            için Kişisel Verileri Koruma Kurulu’na başvurabilirsiniz.
          </p>
          <h2>6. Çerezler ve onay</h2>
          <p>
            Zorunlu çerezler sitenin çalışması içindir. Reklam ve tıklama
            koruması çerezleri onay bandından yönetilir. Gizlilik
            tercihini reddedebilirsiniz; bu durumda bazı ölçüm ve eşleme
            özellikleri çalışmaz, acil çilingir hizmeti çağrısı etkilenmez.
          </p>
          <p>
            Bu politika {SITE_URL} adresi için geçerlidir. Değişiklikler
            bu sayfada yayımlanır.
          </p>
        </div>
      </article>
    </main>
  );
}
