# Page Feed mimarisi

Google Ads Dinamik Arama Ağı (DSA) için sayfa feed'i bu modülden üretilir. Modül, sitedeki yayınlanmış açılış sayfalarını Google Ads'in kabul ettiği CSV şemasına çevirir. HTTP katmanı yalnızca isteği kiracıya bağlar ve hazır gövdeyi parçalar halinde yazar.

## Katmanlar

```text
app/api/ads/page-feed/route.ts          Next.js giriş noktası
modules/page-feed/infrastructure/       kiracı kaydı, katalog, önbellek, HTTP
modules/page-feed/application/          PageFeedService, CSV kodlayıcı
modules/page-feed/domain/               aday sayfa, uygunluk, URL, etiket, portlar
data/regions.ts + data/posts.ts         katalog kaynağı
lib/constants.ts                        varsayılan HTTPS origin (SITE_URL)
```

Bağımlılık yönü tek taraflıdır. Domain katmanı Next.js, dosya sistemi ve ortam değişkeni bilmez. Application katmanı domain portlarına (`PageSource`, `FeedCache`, `EligibilityPolicy`) bağlıdır. Infrastructure bu portları doldurur.

| Bileşen | Sorumluluk |
| --- | --- |
| `ContentPageRepository` | Bölge, mahalle, statik sayfa ve blog kayıtlarını tek kiracı için sayfa adayına çevirir. Kayıtlar async generator ile teker teker akar. |
| `RoutingPageSource` | İstenen kiracı kimliği için kayıtlı kaynağı seçer. Kayıt yoksa boş akış döner. |
| `DefaultEligibilityPolicy` | Aktif, indekslenebilir ve stoğu tükenmemiş (veya stoğu izlenmeyen) sayfayı seçer. İletişim, gizlilik, hizmet şartları, sepet ve hesap yollarını eler. |
| `PageFeedService` | Kiracı filtresi, uygunluk, kanonik URL, etiket ve CSV üretimini sıraya koyar. Aynı kiracı için eşzamanlı istekleri tek üretime bağlar. |
| `MemoryFeedCache` | Kiracı başına CSV gövdesini TTL, kayıt sayısı ve bayt tavanı ile tutar. |
| `TenantRegistry` | Ortam değişkeninden tek kiracı kaydı okur. Anahtar yoksa kayıt boştur ve feed kapalıdır. |

## Veri akışı

```text
GET /api/ads/page-feed?tenant=...&key=...
        │
        ▼
authorizeFeedRequest
  kiracı yok / anahtar geçersiz → JSON hata, CSV yok
        │
        ▼
PageFeedService.getFeed(tenant)
  ├─ önbellek taze ise gövdeyi döndür
  └─ değilse ContentPageRepository.listPages(tenantId)
        │  adaylar chunk halinde (varsayılan 500 satır)
        ▼
     uygunluk + HTTPS URL + etiket
        │
        ▼
     UTF-8 BOM CSV  →  bellek önbelleği  →  64 KB'lık HTTP parçaları
```

Üretim sırasında katalog dizisi ikinci kez belleğe kopyalanmaz. Tutulan çıktı, tavanı olan CSV baytlarıdır (`PAGE_FEED_MAX_FEED_BYTES`, varsayılan 32 MB, en fazla 64 MB). Tekrarlayan Google Sheets veya cron istekleri TTL dolana kadar kataloğu yeniden gezmez.

URL her zaman kiracı kaydındaki origin'den kurulur. İstek başlığındaki `Host` kullanılmaz. Sorgu dizisi ve fragment silinir; izleme parametresi feed'e girmez. Path, kiracı origin'inin dışına (`//evil.example`, `..`) çıkamaz.

## Uygunluk

Bir sayfa feed'e girerse şu koşulların hepsi doğrudur:

- `status = active` (taslak ve pasif kayıtlar dışarıda)
- `indexable = true`
- `stock` değeri `out_of_stock` değil. Hizmet ve içerik sayfalarında stok izlenmez (`not_tracked`); onlar için yayın durumu yeterlidir. Stoğu olan ürünlerde `in_stock` gerekir ve etikete `stokta` eklenir.
- tür `contact`, `cart`, `account` veya `legal` değil
- yol, hariç listesindeki bir önek değil

Hariç yollar: `/iletisim`, `/gizlilik-politikasi`, `/hizmet-sartlari`, `/sepet`, `/cart`, `/checkout`, `/hesabim`, `/hesap`, `/account`, `/giris`, `/login` ve bunların alt yolları. Blog taslağı `status: "draft"` ile katalogda durur; sitemap, blog listesi ve feed onu basmaz.

Bu sitede feed'e giren sayfalar: ana sayfa, hakkımızda, SSS, blog dizini, yayınlanmış yazılar, bölge sayfaları ve mahalle sayfaları.

## CSV sözleşmesi

Google Ads sayfa feed şablonu:

```text
Page URL,Custom label
https://www.getircilingir.com.tr/cilingir/maslak-hatti/maslak,mahalle;maslak-hatti;maslak;hizmet;acil
```

- Kodlama UTF-8, dosyanın başında BOM (`EF BB BF`) vardır.
- Satır sonu CRLF.
- Birden fazla etiket noktalı virgülle ayrılır. Virgül ayırıcı değildir; Google Ads noktalı virgül ister ve virgül CSV sütununu böler.
- Bir URL'de en fazla 20 etiket vardır.
- Aynı URL iki kez yazılmaz.

Etiket sözlüğü: `anasayfa`, `hizmet`, `yuksek-oncelik`, `bolge`, `mahalle`, `acil`, `blog`, `icerik`, `kurumsal`, `sss`, `stokta`, artı bölge ve mahalle slug'ları. Kampanya hedefi bu dizgilerle birebir (büyük/küçük harf duyarsız) kurulmalıdır.

## Önbellek

Önbellek süreç içidir. Anahtar yalnızca kiracı kimliğidir; erişim anahtarı anahtara girmez. Varsayılan TTL 300 saniyedir. En fazla 16 kayıt ve 8 MB (tavan 32 MB) tutulur. Süresi dolan ve en eski kayıtlar silinir.

Sunucusuz ortamda önbellek, sıcak instance içinde işe yarar. Kalıcı depo yoktur. HTTP yanıtı `Cache-Control: private` ve `ETag` taşır; `If-None-Match` eşleşirse gövdesiz `304` döner.

## Kiracı izolasyonu ve erişim

Feed, doğru kiracı ve erişim anahtarı olmadan CSV dönmez.

- `PAGE_FEED_ACCESS_KEY` yoksa veya 16 karakterden kısaysa yanıt `503 feed_not_configured` olur. Uç açık kalmaz.
- `tenant` sorgu parametresi kayıtlı kiracıyla eşleşmelidir. Başka bir kimlik `404` döner ve o kimlik için katalog okunmaz.
- Anahtar, `key` sorgu parametresi veya `Authorization: Bearer` ile gelir. İkisi birden varsa ve farklıysa `401` döner.
- Karşılaştırma SHA-256 özetleri üzerinde `timingSafeEqual` ile yapılır.
- Kaynak, istenen kiracıdan başka satır üretse bile servis o satırı atlar.
- `Referrer-Policy: no-referrer` anahtarın `Referer` ile sızmasını keser.

Google Sheets `IMPORTDATA` başlık gönderemediği için anahtar sorgu dizisinde durur. Adres yalnızca HTTPS üzerinden paylaşılmalı ve depoya yazılmamalıdır.

```text
GET /api/ads/page-feed?tenant=getircilingir&key=ACCESS_KEY
```

Sheets hücresi:

```text
=IMPORTDATA("https://www.getircilingir.com.tr/api/ads/page-feed?tenant=getircilingir&key=ACCESS_KEY")
```

## Ortam değişkenleri

| Değişken | Varsayılan | Anlamı |
| --- | --- | --- |
| `PAGE_FEED_ACCESS_KEY` | yok | Zorunlu erişim anahtarı, en az 16 karakter |
| `PAGE_FEED_TENANT_ID` | `getircilingir` | Bu dağıtımın kiracı kimliği |
| `PAGE_FEED_ORIGIN` | `SITE_URL` | Feed URL'lerinin HTTPS origin'i |
| `PAGE_FEED_CACHE_TTL_SECONDS` | `300` | Önbellek ömrü, en fazla 86400 |
| `PAGE_FEED_MAX_CACHE_BYTES` | `8388608` | Önbellek tavanı, en fazla 32 MB |
| `PAGE_FEED_MAX_FEED_BYTES` | `33554432` | Tek feed tavanı, en fazla 64 MB. Aşım `413` |

## Yeni kaynak eklemek

1. Sayfaları `PageCandidate` olarak veren bir `PageSource` yazın. Akış tek kiracıya kilitli kalsın.
2. `createPageFeedRuntime` içinde o kaynağı kiracı kimliğiyle `RoutingPageSource` haritasına koyun.
3. Uygunluk kuralını domain politikasında değiştirin; CSV ve HTTP katmanına kopyalamayın.
4. Ürün satırında `stock: "in_stock"` kullanın. Tükenen ürün `out_of_stock` ile kendiliğinden elenir.

## Test

```bash
npm test
```

Testler Node yerleşik test çalıştırıcısı ile `modules/page-feed/page-feed.test.ts` dosyasını koşar. Katalog, kiracı sızıntısı, hariç yollar, BOM'lu CSV, önbellek, eşzamanlı tek üretim ve HTTP durum kodları bu dosyadadır.
