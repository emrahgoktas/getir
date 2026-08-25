"use client";

import { FormEvent, useState } from "react";
import { regions } from "@/data/regions";
import { PHONE_HREF, WHATSAPP_HREF } from "@/lib/constants";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ok">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const region = String(data.get("region") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const text = [
      "Getir Çilingir iletişim formu",
      `Ad: ${name}`,
      `Telefon: ${phone}`,
      `Hat: ${region}`,
      `Mesaj: ${message}`,
    ].join("\n");

    setStatus("ok");
    window.open(
      `${WHATSAPP_HREF}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label>
        Ad Soyad
        <input name="name" type="text" required autoComplete="name" />
      </label>
      <label>
        Telefon
        <input
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
        />
      </label>
      <label>
        Hizmet hattı
        <select name="region" required defaultValue="">
          <option value="" disabled>
            Hat seçin
          </option>
          {regions.map((region) => (
            <option key={region.slug} value={region.name}>
              {region.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Mesaj
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Mahalle, kapı tipi, acil çilingir hizmeti notu"
        />
      </label>
      <p className="contact-form__note">
        Form WhatsApp üzerinden nöbetçi çilingir hattına düşer. Acil çağrıda
        doğrudan{" "}
        <a href={PHONE_HREF}>Hemen Ara</a> deyin — Çilingir 15 Dk Kapıda.
      </p>
      <button className="cta-primary" type="submit">
        Formu WhatsApp ile gönder
      </button>
      {status === "ok" ? (
        <p className="contact-form__ok" role="status">
          WhatsApp açılıyor. Aktif ekibimiz sahada, konumuza 15 dk mesafede.
        </p>
      ) : null}
    </form>
  );
}
