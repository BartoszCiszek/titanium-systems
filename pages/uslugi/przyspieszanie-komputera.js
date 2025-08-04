// pages/uslugi/przyspieszanie-komputera.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "../../components/ui/tracing-beam";

export default function PrzyspieszanieKomputera() {
  return (
    <div className="min-h-screen bg-[#212121] text-white">
      <Head>
        <title>Przyspieszanie i Optymalizacja Komputera Poznań | Titanium Systems</title>
        <meta name="description" content="Twój komputer działa wolno? Oferujemy profesjonalne usługi optymalizacji i przyspieszania systemu Windows w Poznaniu. Diagnoza, czyszczenie, modernizacja." />
        <link rel="canonical" href="https://titaniumsystems.pl/uslugi/przyspieszanie-komputera" />
      </Head>
      <main className="container mx-auto py-24 px-4">
        <TracingBeam className="px-6">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-[#00bcd4]">
              Przyspieszanie i Optymalizacja Komputera
            </h1>

            <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
              <Image src="/images/realizacja4_3.webp" alt="Wykres wydajności komputera po optymalizacji" layout="fill" objectFit="cover" />
            </div>

            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
              <p className="text-xl leading-relaxed">
                Czy masz wrażenie, że Twój komputer z każdym dniem działa coraz wolniej? Uruchamianie systemu trwa wieki, programy otwierają się z opóźnieniem, a proste zadania stają się frustrujące. To częsty problem, ale na szczęście w większości przypadków można go skutecznie rozwiązać, przywracając sprzętowi dawną świetność.
              </p>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Dlaczego komputer zwalnia? Główne przyczyny</h2>
                <p>
                  Spadek wydajności rzadko jest winą jednego czynnika. Najczęściej to suma kilku zaniedbań, które kumulują się przez miesiące lub lata użytkowania.
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li><strong>Zaśmiecony system operacyjny:</strong> Nagromadzone pliki tymczasowe, niepotrzebne programy uruchamiane przy starcie i "puchnący" rejestr systemu znacząco go spowalniają.</li>
                  <li><strong>Stary dysk twardy (HDD):</strong> Tradycyjne dyski talerzowe to najczęstsze "wąskie gardło" w nowoczesnych komputerach. Ich mechaniczna budowa ogranicza prędkość odczytu i zapisu danych.</li>
                  <li><strong>Złośliwe oprogramowanie:</strong> Wirusy, spyware i inne szkodliwe programy mogą działać w tle, zużywając cenne zasoby procesora i pamięci RAM.</li>
                  <li><strong>Niewystarczająca ilość pamięci RAM:</strong> Przy otwartych wielu kartach w przeglądarce i kilku programach, pamięć RAM szybko się kończy, a komputer zaczyna używać znacznie wolniejszego dysku twardego.</li>
                </ul>
              </div>

              <div>
                  <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#00bcd4]">Jak przywracamy Twojemu komputerowi prędkość?</h3>
                  <p>
                    Nasza usługa optymalizacji to kompleksowy proces, który obejmuje zarówno działania software'owe, jak i sprzętowe:
                  </p>
                  <ol className="list-decimal list-inside mt-4 space-y-2">
                    <li><strong>Diagnostyka:</strong> Zaczynamy od pełnej analizy systemu i sprzętu, aby precyzyjnie zlokalizować przyczyny problemu.</li>
                    <li><strong>Optymalizacja oprogramowania:</strong> Czyścimy system ze zbędnych plików, optymalizujemy autostart, usuwamy złośliwe oprogramowanie i konfigurujemy ustawienia systemowe dla maksymalnej wydajności.</li>
                    <li><strong>Modernizacja sprzętowa:</strong> Jeśli diagnoza wykaże, że problemem jest sprzęt, zarekomendujemy najkorzystniejsze rozwiązanie. Najczęściej jest to:
                      <ul className="list-disc list-inside mt-2 ml-4">
                        <li><strong>Wymiana dysku na SSD:</strong> To najważniejsza i najbardziej odczuwalna modernizacja. Gwarantuje kilkunastokrotne przyspieszenie uruchamiania systemu i programów.</li>
                        <li><strong>Dołożenie pamięci RAM:</strong> Prosty sposób na poprawę wielozadaniowości i płynności pracy.</li>
                      </ul>
                    </li>
                  </ol>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="#formularz-kontaktowy" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                  Przywróć swojemu komputerowi dawną prędkość!
              </Link>
            </div>
          </article>
        </TracingBeam>
      </main>
    </div>
  );
}