import Image from "next/image";
import type { ReactNode } from "react";
import { CallCtas } from "@/components/CallCtas";
import { regions } from "@/data/regions";
import { LOGO_MARK_PATH } from "@/lib/constants";

type StageHeroProps = {
  live?: string;
  kicker: string;
  title: string;
  hit: string;
  sub?: string;
  lead: string;
  secondaryLead?: string;
  meterValue: string;
  meterUnit?: string;
  ticker: string[];
  breadcrumb?: ReactNode;
  compact?: boolean;
};

const PROMISE = "Çilingir 15 Dk Kapıda";

export function splitStageHeadline(h1: string): { title: string; hit: string } {
  if (h1.endsWith(PROMISE)) {
    const loc = h1.slice(0, -PROMISE.length).trim();
    return {
      title: loc ? `${loc} Çilingir` : "Çilingir",
      hit: "15 Dk Kapıda",
    };
  }

  const dash = h1.indexOf(" — ");
  if (dash !== -1) {
    return { title: h1.slice(0, dash), hit: h1.slice(dash + 3) };
  }

  return { title: h1, hit: "7/24 Kapı Açma" };
}

export function tickerPhrase(names: string[]) {
  return names.join(" · ") + " · ";
}

export function StageHero({
  live = "Canlı nöbet · aktif ekibimiz sahada",
  kicker,
  title,
  hit,
  sub,
  lead,
  secondaryLead,
  meterValue,
  meterUnit = "dk kapıda",
  ticker,
  breadcrumb,
  compact = false,
}: StageHeroProps) {
  const track = tickerPhrase(ticker);
  const range = meterValue.includes("-");

  return (
    <section
      className={compact ? "stage stage--page" : "stage"}
      aria-label="Acil çağrı"
    >
      <div className="stage__grid" aria-hidden />
      <div className="stage__flare" aria-hidden />

      {breadcrumb ? (
        <div className="stage__crumb wrap">{breadcrumb}</div>
      ) : null}

      <div className="stage__inner wrap">
        <div className="stage__copy">
          <p className="stage__live">
            <span className="stage__dot" aria-hidden />
            {live}
          </p>
          <p className="stage__kicker">{kicker}</p>
          <h1>
            {title}{" "}
            <span className="stage__hit">{hit}</span>
            {sub ? <span className="stage__sub">{sub}</span> : null}
          </h1>
          <p className="stage__lead">{lead}</p>
          {secondaryLead ? (
            <p className="stage__lead stage__lead--tight">{secondaryLead}</p>
          ) : null}
          <CallCtas />
        </div>

        <div className="stage-meter" aria-hidden>
          <div className="stage-meter__spin" />
          <div className="stage-meter__spin stage-meter__spin--slow" />
          <div className="stage-meter__core">
            <Image
              src={LOGO_MARK_PATH}
              alt=""
              width={72}
              height={72}
              className="stage-meter__logo"
              priority
              unoptimized
            />
            <p
              className={
                range
                  ? "stage-meter__num stage-meter__num--range"
                  : "stage-meter__num"
              }
            >
              {meterValue}
            </p>
            <p className="stage-meter__unit">{meterUnit}</p>
          </div>
        </div>
      </div>

      <div className="stage-ticker" aria-hidden>
        <div className="stage-ticker__track">
          {track}
          {track}
          {track}
        </div>
      </div>
    </section>
  );
}

const HOME_TICKER = regions.flatMap((region) =>
  region.neighborhoods.map((n) => n.name),
);

export function HomeHero() {
  return (
    <StageHero
      kicker="Kapın kilitliyse bekleme."
      title="Çilingir"
      hit="15 Dk Kapıda"
      sub="İstanbul acil çilingir hizmeti"
      lead="Ofisten yola çıkmıyoruz. Hasarsız kilit açma, nöbetçi çilingir, gece çilingir — konumuza 15 dk mesafede."
      meterValue="15"
      ticker={HOME_TICKER}
    />
  );
}
