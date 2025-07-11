// pages/polityka.js
"use client";
import Head from "next/head";
import { useEffect } from "react";
import gsap from "gsap";

export default function Polityka() {
  useEffect(() => {
    // Animujemy element z klasą "policy-content" po wejściu na stronę
    gsap.from(".policy-content", {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power2.out"
    });
  }, []);

  return (
    <div className="bg-[#212121] text-white min-h-screen">
      <Head>
  <title>Polityka Prywatności – Titanium Systems | Usługi IT Poznań</title>
  <meta
    name="description"
    content="Dowiedz się, jak przetwarzamy dane osobowe. Polityka prywatności Titanium Systems – lokalnego partnera IT z Poznania."
  />
  <meta
    name="keywords"
    content="polityka prywatności IT, ochrona danych osobowych, RODO IT, Titanium Systems, Poznań"
  />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="canonical" href="https://titaniumsystems.pl/polityka" />
</Head>
      <main className="container mx-auto p-4">
        <div className="max-w-[800px] mx-auto mt-10 p-5 bg-[#2a2a2a] rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.1)]">
          <h1 className="text-2xl font-bold text-[#00bcd4] text-center mb-5">
            Polityka Prywatności
          </h1>
          <div className="policy-content">
            <p className="mb-3 leading-relaxed">
              <strong>1. Informacje ogólne</strong>
            </p>
            <p className="mb-3 leading-relaxed">
              Polityka prywatności określa zasady przetwarzania danych osobowych
              użytkowników serwisu Titanium Systems.
            </p>
            <p className="mb-3 leading-relaxed">
              <strong>2. Administrator danych</strong>
            </p>
            <p className="mb-3 leading-relaxed">
              Administratorem danych osobowych jest właściciel serwisu Titanium Systems, działający w ramach działalności nierejestrowanej na terenie Polski.
            </p>
            <p className="mb-3 leading-relaxed">
              <strong>3. Jakie dane zbieramy?</strong>
            </p>
            <p className="mb-3 leading-relaxed">
              Nasza strona nie wymaga rejestracji konta użytkownika. Możemy zbierać
              następujące dane wyłącznie w ramach kontaktu użytkownika z nami:
            </p>
            <ul className="mb-3 list-disc list-inside leading-relaxed">
              <li>Imię i nazwisko (jeśli podane w formularzu kontaktowym)</li>
              <li>Adres e-mail (jeśli podany w formularzu kontaktowym)</li>
              <li>Numer telefonu (jeśli podany w formularzu kontaktowym)</li>
              <li>Adres IP (dla celów bezpieczeństwa i analizy ruchu na stronie)</li>
              <li>Pliki cookies (szczegóły w sekcji plików cookies)</li>
            </ul>
            <p className="mb-3 leading-relaxed">
              <strong>4. Cel przetwarzania danych</strong>
            </p>
            <p className="mb-3 leading-relaxed">
              Zebrane dane są wykorzystywane wyłącznie w celu:
            </p>
            <ul className="mb-3 list-disc list-inside leading-relaxed">
              <li>
                Odpowiedzi na zapytania użytkowników przesłane przez formularz
                kontaktowy lub e-mail
              </li>
              <li>Realizacji usług zgodnie z zapytaniem użytkownika</li>
              <li>Obsługi ewentualnych zgłoszeń serwisowych</li>
              <li>Analizy statystyk ruchu na stronie</li>
            </ul>
            <p className="mb-3 leading-relaxed">
              <strong>5. Pliki cookies</strong>
            </p>
            <p className="mb-3 leading-relaxed">
              Nasza strona korzysta z plików cookies w celu poprawy jakości usług.
              Użytkownik może zarządzać ustawieniami cookies w swojej przeglądarce.
            </p>
            <p className="mb-3 leading-relaxed">
              <strong>6. Prawa użytkownika</strong>
            </p>
            <p className="mb-3 leading-relaxed">
              Każdy użytkownik ma prawo do:
            </p>
            <ul className="mb-3 list-disc list-inside leading-relaxed">
              <li>Dostępu do swoich danych</li>
              <li>Sprostowania swoich danych</li>
              <li>Usunięcia danych („prawo do bycia zapomnianym”)</li>
              <li>Ograniczenia przetwarzania</li>
            </ul>
            <p className="mb-3 leading-relaxed">
              <strong>7. Kontakt</strong>
            </p>
            <p className="mb-3 leading-relaxed">
              W sprawach dotyczących ochrony danych osobowych prosimy o kontakt pod
              adresem e-mail:{" "}
              <a
                href="mailto:kontakt@titaniumsystems.pl"
                className="text-[#00bcd4] no-underline hover:underline"
              >
                kontakt@titaniumsystems.pl
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
