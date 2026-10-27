"use client";

import { FormEvent, useState } from "react";
import { regions } from "@/data/regions";
import { PHONE_HREF } from "@/lib/constants";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ok">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("ok");
    window.location.href = PHONE_HREF;
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
        Formu doldurduktan sonra nöbetçi çilingir hattını arayın. Acil çağrıda
        doğrudan{" "}
        <a href={PHONE_HREF}>Hemen Ara</a> deyin — Çilingir 15 Dk Kapıda.
      </p>
      <button className="cta-primary" type="submit">
        Formu gönder ve ara
      </button>
      {status === "ok" ? (
        <p className="contact-form__ok" role="status">
          Arama açılıyor. Aktif ekibimiz sahada, konumuza 15 dk mesafede.
        </p>
      ) : null}
    </form>
  );
}
