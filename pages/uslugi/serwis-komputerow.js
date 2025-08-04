// pages/uslugi/serwis-komputerow.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "../../components/ui/tracing-beam"; // <-- Nowy import

export default function SerwisKomputerow() {
  return (
    <div className="min-h-screen bg-[#212121] text-white">
      <Head>
        <title>Serwis i Modernizacja Komputerów Poznań | Titanium Systems</title>
        <meta name="description" content="Profesjonalny serwis, naprawa i modernizacja komputerów stacjonarnych i laptopów. Diagnoza, wymiana podzespołów, czyszczenie i optymalizacja." />
        <link rel="canonical" href="https://titaniumsystems.pl/uslugi/serwis-komputerow" />
      </Head>

      <main className="container mx-auto py-24 px-4">
        {/* --- POCZĄTEK ZMIANY --- */}
        {/* Opakowujemy całą treść w TracingBeam */}
        <TracingBeam className="px-6">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-[#00bcd4]">
              Serwis i Modernizacja Komputerów
            </h1>
            
            <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
              <Image src="/images/portfolio2.webp" alt="Wnętrze nowoczesnego komputera" layout="fill" objectFit="cover" />
            </div>

            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
              <p className="text-xl leading-relaxed">
                Twój komputer działa wolno, przegrzewa się, a może w ogóle odmawia posłuszeństwa? Niezależnie od tego, czy potrzebujesz pilnej naprawy, czy planujesz zwiększyć jego moc, jesteśmy tutaj, aby Ci pomóc. W Titanium Systems łączymy pasję do technologii z wieloletnim doświadczeniem, oferując kompleksowe usługi na najwyższym poziomie.
              </p>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Co wchodzi w zakres naszych usług?</h2>
                <p>To pierwszy i najważniejszy krok. Przeprowadzamy szczegółowe testy wszystkich podzespołów – procesora, pamięci RAM, karty graficznej, dysków twardych i zasilacza. Dzięki temu precyzyjnie lokalizujemy źródło problemu, unikając niepotrzebnej wymiany sprawnych części.</p>
              </div>

              <div>
                  <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#00bcd4]">Naprawa i wymiana komponentów</h3>
                  <p>
                  Zajmujemy się wymianą uszkodzonych części, takich jak zasilacze, płyty główne czy karty graficzne. Korzystamy wyłącznie ze sprawdzonych komponentów od renomowanych producentów, co gwarantuje niezawodność i długą żywotność naprawionego sprzętu.
                  </p>
              </div>
              
              <div>
                  <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#00bcd4]">Modernizacja (Upgrade) sprzętu</h3>
                  <p>
                  Chcesz, aby Twój komputer znów radził sobie z najnowszymi grami lub programami? Doradzimy, jakie komponenty warto wymienić, aby uzyskać największy wzrost wydajności w ramach Twojego budżetu. Specjalizujemy się w upgrade'ach CPU, GPU, RAM oraz wymianie dysków na superszybkie SSD.
                  </p>
              </div>
              
              <div>
                  <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#00bcd4]">Kompleksowe czyszczenie i konserwacja</h3>
                  <p>
                  Kurz jest największym wrogiem elektroniki. Regularne, profesjonalne czyszczenie wnętrza komputera, wymiana past termoprzewodzących i termopadów potrafi obniżyć temperaturę pracy nawet o 20°C, co przekłada się na wyższą wydajność, stabilność i dłuższą żywotność podzespołów.
                  </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="#formularz-kontaktowy" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                  Skontaktuj się w sprawie wyceny
              </Link>
            </div>
          </article>
        </TracingBeam>
      </main>
    </div>
  );
}