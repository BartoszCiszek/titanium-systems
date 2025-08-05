// pages/uslugi/instalacja-windows.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "../../components/ui/tracing-beam";

export default function InstalacjaWindows() {
  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>Instalacja Windows 10 i 11 Poznań | Czysty System | Titanium Systems</title>
        <meta name="description" content="Profesjonalna instalacja i reinstalacja systemu Windows 11 i 10 w Poznaniu. Czysty system bez zbędnych programów, optymalizacja i instalacja sterowników." />
        <link rel="canonical" href="https://titaniumsystems.pl/uslugi/instalacja-windows" />
      </Head>
      <main className="container mx-auto py-24 px-4">
        <TracingBeam className="px-6">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-[#00bcd4]">
              Profesjonalna Instalacja Systemu Windows
            </h1>

            <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
              <Image src="/images/windows.webp" alt="Pulpit czystego systemu Windows" layout="fill" objectFit="cover" />
            </div>

            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
              <p className="text-xl leading-relaxed">
                Kupiłeś nowy komputer bez systemu? A może Twój obecny Windows działa wolno, zawiesza się i jest zaśmiecony po latach użytkowania? Czysta, profesjonalnie przeprowadzona instalacja systemu Windows to najlepszy sposób, aby przywrócić komputerowi fabryczną szybkość i stabilność.
              </p>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Dlaczego "czysta" instalacja jest lepsza od fabrycznej?</h2>
                <p>
                  Wielu producentów laptopów i gotowych komputerów instaluje na nich tzw. "bloatware" – dziesiątki niepotrzebnych programów i wersji próbnych, które od pierwszego uruchomienia spowalniają system i zajmują cenne zasoby. Nasza usługa to gwarancja instalacji czystego systemu, bez żadnych zbędnych dodatków.
                </p>
              </div>

              <div>
                  <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#00bcd4]">Korzyści z profesjonalnej instalacji Windows</h3>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li><strong>Maksymalna wydajność:</strong> System jest lekki i szybki, ponieważ instalujemy tylko to, co jest naprawdę potrzebne.</li>
                    <li><strong>Stabilność i bezpieczeństwo:</strong> Instalujemy wszystkie najnowsze aktualizacje i poprawki bezpieczeństwa, chroniąc Twój komputer od samego początku.</li>
                    <li><strong>Brak zbędnych programów:</strong> Zapomnij o irytujących aplikacjach reklamowych i wersjach próbnych. Otrzymujesz system gotowy do pracy.</li>
                    <li><strong>Poprawna konfiguracja:</strong> Dbamy o prawidłową instalację wszystkich sterowników, co gwarantuje, że każdy podzespół (karta graficzna, dźwiękowa, sieć) będzie działał z pełną mocą.</li>
                  </ul>
              </div>
              
              <div>
                  <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#00bcd4]">Nasz proces krok po kroku</h3>
                  <ol className="list-decimal list-inside mt-4 space-y-2">
                    <li><strong>Kopia zapasowa danych:</strong> Przed rozpoczęciem pracy zabezpieczamy wszystkie Twoje ważne pliki i dokumenty.</li>
                    <li><strong>Instalacja czystego systemu:</strong> Instalujemy wybraną przez Ciebie wersję systemu Windows (10 lub 11) z oficjalnego nośnika.</li>
                    <li><strong>Instalacja sterowników:</strong> Wyszukujemy i instalujemy najnowsze, dedykowane sterowniki dla Twojego sprzętu.</li>
                    <li><strong>Aktualizacje i optymalizacja:</strong> Pobieramy wszystkie niezbędne aktualizacje systemowe i konfigurujemy system pod kątem optymalnej wydajności.</li>
                    <li><strong>Instalacja podstawowego oprogramowania:</strong> Na Twoje życzenie instalujemy kluczowe programy, takie jak przeglądarka internetowa, pakiet biurowy czy program antywirusowy.</li>
                    <li><strong>Przywrócenie danych:</strong> Na koniec przywracamy Twoje pliki, abyś mógł od razu cieszyć się szybkim i sprawnym komputerem.</li>
                  </ol>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="#formularz-kontaktowy" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                  Chcesz mieć szybki i czysty system? Skontaktuj się!
              </Link>
            </div>
          </article>
        </TracingBeam>
      </main>
    </div>
  );
}