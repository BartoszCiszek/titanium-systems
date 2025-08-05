// pages/uslugi/instalacja-macos.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "../../components/ui/tracing-beam";

export default function InstalacjaMacos() {
  return (
    <div className="min-h-screen bg-[#212121] text-white">
      <Head>
        <title>Instalacja MacOS Poznań | Czysty System na Twoim Macu</title>
        <meta name="description" content="Profesjonalna instalacja i reinstalacja systemu MacOS w Poznaniu. Przygotowanie do sprzedaży, aktualizacja, rozwiązywanie problemów ze stabilnością." />
        <link rel="canonical" href="https://titaniumsystems.pl/uslugi/instalacja-macos" />
      </Head>
      <main className="container mx-auto py-24 px-4">
        <TracingBeam className="px-6">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-[#00bcd4]">
              Profesjonalna Instalacja Systemu MacOS
            </h1>

            <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
              <Image src="/images/macos.webp" alt="Elegancki interfejs systemu MacOS" layout="fill" objectFit="cover" />
            </div>

            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
              <p className="text-xl leading-relaxed">
                System MacOS słynie ze swojej stabilności i intuicyjności. Czasami jednak nawet najlepsze oprogramowanie potrzebuje odświeżenia. Niezależnie od tego, czy chcesz przygotować swojego Maca do sprzedaży, rozwiązać uporczywe problemy z oprogramowaniem, czy po prostu zacząć od nowa z czystym systemem, nasza usługa jest dla Ciebie.
              </p>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Kiedy warto przeinstalować MacOS?</h2>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li><strong>Przed sprzedażą urządzenia:</strong> Czysta instalacja gwarantuje, że Twoje prywatne dane zostaną bezpiecznie usunięte, a nowy właściciel otrzyma komputer w stanie fabrycznym.</li>
                  <li><strong>Po poważnych problemach z systemem:</strong> Jeśli Twój Mac działa niestabilnie, zawiesza się lub boryka się z błędami, których nie da się prosto rozwiązać, reinstalacja jest najskuteczniejszym rozwiązaniem.</li>
                  <li><strong>Chęć "czystego startu":</strong> Chcesz pozbyć się latami gromadzonych plików i aplikacji i zacząć pracę na świeżym, szybkim systemie.</li>
                  <li><strong>Powrót do starszej wersji systemu:</strong> Jeśli nowa aktualizacja MacOS powoduje problemy z kompatybilnością Twoich kluczowych programów.</li>
                </ul>
              </div>
              
              <div>
                  <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#00bcd4]">Nasz proces to gwarancja bezpieczeństwa Twoich danych</h3>
                  <p>
                    Rozumiemy, jak cenne są Twoje pliki. Dlatego nasz proces zawsze zaczyna się od pełnej diagnostyki i starannego zabezpieczenia Twoich danych.
                  </p>
                  <ol className="list-decimal list-inside mt-4 space-y-2">
                    <li><strong>Konsultacja i backup:</strong> Omawiamy Twoje potrzeby i tworzymy pełną kopię zapasową Twoich danych za pomocą Time Machine lub innej wybranej metody.</li>
                    <li><strong>Instalacja systemu MacOS:</strong> Instalujemy czystą, oficjalną wersję systemu MacOS, zgodną z Twoim modelem komputera.</li>
                    <li><strong>Aktualizacje i konfiguracja:</strong> Pobieramy wszystkie najnowsze aktualizacje i pomagamy w podstawowej konfiguracji systemu (konto Apple ID, iCloud itp.).</li>
                    <li><strong>Selektywne przywracanie danych:</strong> Przywracamy tylko te dane, których potrzebujesz (dokumenty, zdjęcia, muzyka), unikając przenoszenia potencjalnych problemów ze starego systemu.</li>
                  </ol>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="#formularz-kontaktowy" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                  Potrzebujesz pomocy z MacOS? Skontaktuj się!
              </Link>
            </div>
          </article>
        </TracingBeam>
      </main>
    </div>
  );
}