// pages/uslugi/szyfrowanie-danych.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "../../components/ui/tracing-beam";

export default function SzyfrowanieDanych() {
  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>Szyfrowanie Dysków BitLocker Poznań | Ochrona Danych | Titanium Systems</title>
        <meta name="description" content="Profesjonalne usługi szyfrowania dysków twardych za pomocą technologii Microsoft BitLocker w Poznaniu. Zabezpiecz swoje dane firmowe i prywatne przed kradzieżą." />
        <link rel="canonical" href="https://titaniumsystems.pl/uslugi/szyfrowanie-danych" />
      </Head>
      <main className="container mx-auto py-24 px-4">
        <TracingBeam className="px-6">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-[#00bcd4]">
              Szyfrowanie Danych (Microsoft BitLocker)
            </h1>

            <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
              <Image src="/images/szyfrowanie-danych.webp" alt="Symbol kłódki na ekranie laptopa" layout="fill" objectFit="cover" />
            </div>

            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
              <p className="text-xl leading-relaxed">
                Co by się stało, gdyby Twój laptop firmowy został skradziony? Dostęp do Twoich danych – umów, faktur, projektów, prywatnych zdjęć – mógłby trafić w niepowołane ręce. Szyfrowanie dysku to najskuteczniejsza metoda ochrony przed takim scenariuszem. W Titanium Systems wdrażamy sprawdzone i niezawodne rozwiązanie Microsoft BitLocker.
              </p>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Jak działa szyfrowanie dysku?</h2>
                <p>
                  Szyfrowanie to proces matematycznego zakodowania wszystkich danych na Twoim dysku twardym. Odczytanie ich jest możliwe tylko po podaniu hasła lub przy użyciu specjalnego klucza. Nawet jeśli ktoś wymontuje dysk z Twojego laptopa i podłączy go do innego komputera, dane pozostaną nieczytelną zbieraniną znaków.
                </p>
              </div>

              <div>
                  <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#00bcd4]">Dlaczego BitLocker?</h3>
                  <p>
                    BitLocker to technologia wbudowana w profesjonalne wersje systemu Windows. Jest to rozwiązanie sprawdzone, bezpieczne i w pełni zintegrowane z systemem, co gwarantuje:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li><strong>Wysoki poziom bezpieczeństwa:</strong> BitLocker używa silnego algorytmu szyfrowania AES, który jest światowym standardem.</li>
                    <li><strong>Brak wpływu na wydajność:</strong> Na nowoczesnych komputerach proces szyfrowania i deszyfrowania odbywa się w locie i jest praktycznie niezauważalny dla użytkownika.</li>
                    <li><strong>Wygodę użytkowania:</strong> Po jednorazowej konfiguracji i ustawieniu hasła, proces odblokowywania dysku jest szybki i prosty.</li>
                  </ul>
              </div>
              
              <div>
                  <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#00bcd4]">Nasz proces wdrożenia BitLocker</h3>
                  <p>
                    Samo włączenie BitLockera to nie wszystko. Kluczowe jest bezpieczne zarządzanie kluczami odzyskiwania.
                  </p>
                  <ol className="list-decimal list-inside mt-4 space-y-2">
                    <li><strong>Sprawdzenie kompatybilności:</strong> Weryfikujemy, czy Twój sprzęt i wersja systemu Windows są zgodne z technologią BitLocker.</li>
                    <li><strong>Konfiguracja szyfrowania:</strong> Uruchamiamy proces szyfrowania całego dysku systemowego lub wybranych partycji.</li>
                    <li><strong>Bezpieczne przechowywanie klucza odzyskiwania:</strong> To najważniejszy krok. Pomagamy Ci zapisać i bezpiecznie przechować klucz odzyskiwania, który jest niezbędny w przypadku zapomnienia hasła lub awarii sprzętu.</li>
                    <li><strong>Szkolenie:</strong> Wyjaśniamy, jak działa szyfrowanie i jak postępować w sytuacjach awaryjnych.</li>
                  </ol>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="#formularz-kontaktowy" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                  Zabezpiecz swoje dane przed kradzieżą – zapytaj o BitLocker!
              </Link>
            </div>
          </article>
        </TracingBeam>
      </main>
    </div>
  );
}