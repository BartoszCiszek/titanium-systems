// pages/uslugi/wymiana-komponentow.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "../../components/ui/tracing-beam";

export default function WymianaKomponentow() {
  return (
    <div className="min-h-screen bg-[#212121] text-white">
      <Head>
        <title>Wymiana Podzespołów i Modernizacja Komputera Poznań | Titanium Systems</title>
        <meta name="description" content="Upgrade i modernizacja komputera w Poznaniu. Profesjonalna wymiana karty graficznej, procesora, pamięci RAM, dysku SSD. Zwiększ wydajność swojego PC." />
        <link rel="canonical" href="https://titaniumsystems.pl/uslugi/wymiana-komponentow" />
      </Head>
      <main className="container mx-auto py-24 px-4">
        <TracingBeam className="px-6">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-[#00bcd4]">
              Wymiana Komponentów i Modernizacja (Upgrade)
            </h1>

            <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
              <Image src="/images/wymiana-komponentow.webp" alt="Nowoczesne podzespoły komputerowe gotowe do montażu" layout="fill" objectFit="cover" />
            </div>

            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
              <p className="text-xl leading-relaxed">
                Twój komputer nie radzi sobie już z nowymi grami lub programami? Zamiast kupować nowy sprzęt, często wystarczy inteligentna modernizacja. W Titanium Systems specjalizujemy się w "upgrade'ach", które dają komputerowi drugie życie, znacząco zwiększając jego wydajność przy optymalnym budżecie.
              </p>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Kiedy warto pomyśleć o modernizacji?</h2>
                <p>
                  Modernizacja to idealne rozwiązanie, jeśli zauważasz, że Twój komputer przestaje spełniać Twoje oczekiwania. To znacznie bardziej opłacalne niż zakup całkowicie nowej jednostki.
                </p>
                 <ul className="list-disc list-inside mt-4 space-y-2">
                    <li><strong>Gry zaczynają zwalniać:</strong> Nowe tytuły wymagają coraz większej mocy obliczeniowej. Wymiana karty graficznej lub procesora może przynieść ogromny skok wydajności.</li>
                    <li><strong>Programy działają wolno:</strong> Aplikacje do obróbki grafiki, wideo czy projektowania 3D są zasobożerne. Więcej pamięci RAM lub szybszy dysk SSD potrafią zdziałać cuda.</li>
                    <li><strong>System długo się uruchamia:</strong> Jeśli wciąż używasz tradycyjnego dysku twardego (HDD), przesiadka na dysk SSD to najważniejsza i najbardziej odczuwalna zmiana, jaką możesz zafundować swojemu komputerowi.</li>
                    <li><strong>Brakuje miejsca na dane:</strong> Zamiast usuwać cenne pliki, możemy dołożyć kolejny, pojemny dysk na Twoje projekty, gry i wspomnienia.</li>
                  </ul>
              </div>

              <div>
                  <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#00bcd4]">Co najczęściej modernizujemy?</h3>
                  <p>
                    Skupiamy się na komponentach, których wymiana przynosi największy i najbardziej odczuwalny wzrost wydajności:
                  </p>
                  <ol className="list-decimal list-inside mt-4 space-y-2">
                    <li><strong>Wymiana dysku na SSD:</strong> Absolutny priorytet. System operacyjny uruchamia się w kilka sekund, programy startują natychmiast, a cały komputer staje się nieporównywalnie bardziej responsywny.</li>
                    <li><strong>Wymiana karty graficznej (GPU):</strong> Kluczowy element dla graczy i twórców. Dobierzemy model o najlepszym stosunku ceny do wydajności, który pozwoli Ci cieszyć się płynną rozgrywką w najnowszych tytułach.</li>
                    <li><strong>Dołożenie pamięci RAM:</strong> Pozwala na komfortową pracę z wieloma programami jednocześnie, bez spowolnień i "zawieszania się" systemu.</li>
                    <li><strong>Wymiana procesora (CPU):</strong> "Mózg" komputera. Nowszy, szybszy procesor znacząco przyspieszy wszystkie operacje, od codziennej pracy po zaawansowane obliczenia.</li>
                  </ol>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="#formularz-kontaktowy" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                  Chcesz przyspieszyć swój komputer? Zapytaj o wycenę!
              </Link>
            </div>
          </article>
        </TracingBeam>
      </main>
    </div>
  );
}