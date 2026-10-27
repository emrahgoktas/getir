import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { Footer, Header } from "@/components/Chrome";
import { StickyCallBar } from "@/components/CallCtas";
import { GoogleAds } from "@/components/GoogleAds";
import { SITE_NAME, SITE_TAGLINE, SITE_URL, LOGO_PATH } from "@/lib/constants";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Çilingir 15 Dk Kapıda | Acil Çilingir Hizmeti | Getir Çilingir",
    template: "%s",
  },
  description: SITE_TAGLINE,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Çilingir 15 Dk Kapıda | Acil Çilingir Hizmeti | Getir Çilingir",
    description: SITE_TAGLINE,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "tr_TR",
    type: "website",
    images: [{ url: LOGO_PATH, alt: SITE_NAME }],
  },
  icons: {
    icon: LOGO_PATH,
    apple: LOGO_PATH,
  },
};

export const viewport: Viewport = {
  themeColor: "#1b1b1e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={montserrat.variable}>
      <body className={montserrat.className}>
        <GoogleAds />
        <div className="site-glow" aria-hidden />
        <div className="page-shell">
          <Header />
          {children}
          <Footer />
        </div>
        <StickyCallBar />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.DubixGuardConfig = {
  token: "dg_live_c6869556fdd4d213d49fd4cdb168dd25868fb29210d69f57",
  endpoint: "https://dubixguard.io/api/v1/click",
  logClickEndpoint: "https://dubixguard.io/log-click",
  telemetryEndpoint: "https://track.dubixguard.io/click",
  optOutEndpoint: "https://dubixguard.io/api/v1/opt-out",
  consent: {
    mode: "required",
    privacyUrl: "https://dubixguard.io/privacy",
    locale: "tr"
  }
};`,
          }}
        />
        <script src="https://dubixguard.io/dubixguard.min.js?v=2.6.0" defer />
      </body>
    </html>
  );
}
