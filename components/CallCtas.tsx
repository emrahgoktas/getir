import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";

type CtaVariant = "hero" | "inline";

export function CallCtas({ variant = "hero" }: { variant?: CtaVariant }) {
  return (
    <div className={variant === "hero" ? "cta-row" : "cta-row cta-row--compact"}>
      <a className="cta-primary" href={PHONE_HREF}>
        Hemen Ara
        <span className="cta-primary__num">{PHONE_DISPLAY}</span>
      </a>
    </div>
  );
}

export function StickyCallBar() {
  return (
    <div className="sticky-call" role="region" aria-label="Hızlı arama">
      <a className="cta-primary sticky-call__btn" href={PHONE_HREF}>
        Hemen Ara
        <span className="cta-primary__num">{PHONE_DISPLAY}</span>
      </a>
    </div>
  );
}
