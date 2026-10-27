import Script from "next/script";
import { PHONE_DISPLAY } from "@/lib/constants";

const AW_ID = "AW-18206308149";
const AW_CALL_CONVERSION = `${AW_ID}/7WouCOSwtasdELXuuOlD`;
const AW_TEL_CLICK_CONVERSION = `${AW_ID}/uQT4COewtasdELXuuOlD`;

/**
 * Site-wide Google Ads tag: base AW config, website-call DNI
 * (phone_conversion_number + phone_conversion_callback for tel: hrefs),
 * and tel: click conversion. WhatsApp links are intentionally excluded.
 */
export function GoogleAds() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${AW_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag" strategy="afterInteractive">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${AW_ID}');
gtag('config', '${AW_CALL_CONVERSION}', {
  'phone_conversion_number': '${PHONE_DISPLAY}',
  'phone_conversion_callback': function(formatted_number, mobile_number) {
    var links = document.querySelectorAll('a[href^="tel:"]');
    for (var i = 0; i < links.length; i++) {
      links[i].href = 'tel:' + mobile_number;
    }
  }
});
document.addEventListener('click', function(e) {
  var t = e.target;
  if (!t || !t.closest) return;
  var a = t.closest('a[href^="tel:"]');
  if (!a) return;
  gtag('event', 'conversion', {'send_to': '${AW_TEL_CLICK_CONVERSION}'});
});
        `}
      </Script>
    </>
  );
}
