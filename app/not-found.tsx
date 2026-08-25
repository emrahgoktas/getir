import Link from "next/link";
import { CallCtas } from "@/components/CallCtas";

export default function NotFound() {
  return (
    <main className="hero wrap">
      <p className="hero__kicker">404</p>
      <h1>Bu hatta acil çilingir hizmeti yok — size en yakın çilingir için ana sayfa</h1>
      <p className="hero__lead">
        Bölgeyi seçin ya da arayın. Aktif ekibimiz sahada, nöbetçi çilingir
        7/24 çilingir vardiyasında.
      </p>
      <CallCtas />
      <p style={{ marginTop: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--signal)" }}>
          Ana sayfaya dön
        </Link>
      </p>
    </main>
  );
}
