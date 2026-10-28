import Image from "next/image";
import Link from "next/link";
import { regions } from "@/data/regions";
import {
  LOGO_ALT,
  LOGO_MARK_PATH,
  PHONE_DISPLAY,
  PHONE_HREF,
  SITE_NAME,
  WHATSAPP_HREF,
} from "@/lib/constants";

const FOOTER_TICKER =
  regions
    .flatMap((region) => region.neighborhoods.map((n) => n.name))
    .join(" · ") + " · ";

export function BrandMark({
  size = 40,
  priority = false,
}: {
  size?: number;
  priority?: boolean;
}) {
  return (
    <span className="brand__mark">
      <Image
        src={LOGO_MARK_PATH}
        alt={LOGO_ALT}
        width={size}
        height={size}
        priority={priority}
        unoptimized
      />
    </span>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__scan" aria-hidden />
      <div className="site-header__inner">
        <Link href="/" className="brand">
          <span className="brand__orbit">
            <BrandMark priority />
          </span>
          <span className="brand__text">
            <span className="brand__name">{SITE_NAME}</span>
            <span className="brand__sub">
              <span className="stage__dot brand__dot" aria-hidden />
              7/24 çilingir
            </span>
          </span>
        </Link>
        <nav className="site-nav" aria-label="Ana">
          <Link href="/hakkimizda#ekibimiz">Ekibimiz</Link>
          <Link href="/#bolgeler">Bölgeler</Link>
          <Link href="/iletisim">İletişim</Link>
          <a className="header-call" href={PHONE_HREF}>
            <span className="header-call__live" aria-hidden />
            {PHONE_DISPLAY}
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="deck">
      <div className="deck__grid" aria-hidden />
      <div className="deck__flare" aria-hidden />

      <div className="deck-ticker" aria-hidden>
        <div className="deck-ticker__track">
          {FOOTER_TICKER}
          {FOOTER_TICKER}
          {FOOTER_TICKER}
        </div>
      </div>

      <div className="site-footer__inner deck__inner">
        <div className="deck__brand">
          <p className="stage__live">
            <span className="stage__dot" aria-hidden />
            Canlı nöbet · aktif ekibimiz sahada
          </p>
          <div className="footer-brand-row">
            <span className="brand__orbit brand__orbit--lg">
              <BrandMark size={56} />
            </span>
            <div>
              <p className="site-footer__brand">{SITE_NAME}</p>
              <p className="deck__promise">Çilingir 15 Dk Kapıda</p>
            </div>
          </div>
          <p className="site-footer__copy">
            İstanbul kuzey hattında dağıtık saha. Tek merkeze bağlı değiliz.
            Nöbetçi çilingir, hasarsız kilit açma, gece çilingir.
          </p>
          <a className="deck__phone" href={PHONE_HREF}>
            {PHONE_DISPLAY}
          </a>
          <div className="deck__actions">
            <a className="cta-primary" href={PHONE_HREF}>
              Hemen Ara
              <span className="cta-primary__num">{PHONE_DISPLAY}</span>
            </a>
            <a
              className="cta-secondary"
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <nav className="deck-hats" aria-label="Saha hatları">
          <p className="deck__label">Saha hatları</p>
          {regions.map((region) => (
            <Link
              key={region.slug}
              href={`/cilingir/${region.slug}`}
              className="deck-hat"
            >
              <span>{region.name}</span>
              <span className="deck-hat__time">
                {region.avgResponseMinutes} dk
              </span>
            </Link>
          ))}
        </nav>

        <nav className="deck-links" aria-label="Alt menü">
          <p className="deck__label">Hat</p>
          <Link href="/hakkimizda#ekibimiz">Ekibimiz</Link>
          <Link href="/sss">SSS</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/iletisim">İletişim</Link>
        </nav>

        <div className="deck-meter" aria-hidden>
          <div className="stage-meter__spin" />
          <div className="stage-meter__spin stage-meter__spin--slow" />
          <div className="stage-meter__core">
            <p className="stage-meter__num">15</p>
            <p className="stage-meter__unit">dk kapıda</p>
          </div>
        </div>
      </div>

      <div className="deck__legal">
        <div className="site-footer__inner deck__legal-row">
          <nav className="footer-nav footer-nav--legal" aria-label="Yasal">
            <Link href="/gizlilik-politikasi">Gizlilik politikası</Link>
            <Link href="/hizmet-sartlari">Hizmet şartları</Link>
          </nav>
          <p className="deck__year">© 2026 {SITE_NAME}</p>
        </div>
      </div>
    </footer>
  );
}

export function TimeBadge({ minutes }: { minutes: string }) {
  return (
    <p className="time-badge">
      <span className="time-badge__value">{minutes}</span>
      <span className="time-badge__unit">dk</span>
    </p>
  );
}

export function Breadcrumb({
  items,
}: {
  items: { href?: string; label: string }[];
}) {
  return (
    <nav className="breadcrumb" aria-label="breadcrumb">
      <ol>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} aria-current={last ? "page" : undefined}>
              {item.href && !last ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                item.label
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
