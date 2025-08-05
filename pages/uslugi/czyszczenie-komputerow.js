// pages/uslugi/czyszczenie-komputerow.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "../../components/ui/tracing-beam"; // Nowy import

export default function CzyszczenieKomputerow() {
  return (
    <div className="min-h-screen bg-[#212121] text-white">
      <Head>
        <title>Czyszczenie i Konserwacja Komputerów Poznań | Titanium Systems</title>
        <meta name="description" content="Profesjonalne czyszczenie komputerów i laptopów w Poznaniu. Wymiana pasty termoprzewodzącej, czyszczenie z kurzu, poprawa chłodzenia." />
        <link rel="canonical" href="https://titaniumsystems.pl/uslugi/czyszczenie-komputerow" />
      </Head>

      <main className="container mx-auto py-24 px-4">
        <TracingBeam className="px-6">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-[#00bcd4]">
              Czyszczenie i Konserwacja Komputerów
            </h1>
            
            <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
              <Image src="/images/czyszczenie-komputerow.webp" alt="Wnętrze komputera przed czyszczeniem" layout="fill" objectFit="cover" />
            </div>

            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
              <p className="text-xl leading-relaxed">
                Czy Twój komputer głośno pracuje, a jego obudowa jest gorąca w dotyku? To znak, że najwyższy czas na profesjonalną konserwację. Kurz i zużyta pasta termoprzewodząca to najwięksi wrogowie wydajności i żywotności Twojego sprzętu.
              </p>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Po co czyścić komputer?</h2>
                <p>
                  Regularna konserwacja to nie tylko kwestia estetyki. To przede wszystkim inwestycja w niezawodność i wydajność.
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li><strong>Niższe temperatury:</strong> Usunięcie kurzu z radiatorów i wentylatorów potrafi obniżyć temperaturę pracy podzespołów nawet o 20°C.</li>
                  <li><strong>Wyższa wydajność:</strong> Chłodniejsze komponenty, takie jak procesor i karta graficzna, mogą pracować z pełną mocą bez tzw. "throttlingu" (obniżania taktowania z powodu przegrzania).</li>
                  <li><strong>Cichsza praca:</strong> Czyste wentylatory nie muszą pracować na najwyższych obrotach, co znacząco redukuje hałas.</li>
                  <li><strong>Dłuższa żywotność:</strong> Wysokie temperatury przyspieszają zużycie elektroniki. Regularne czyszczenie wydłuża życie Twojego komputera.</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="#formularz-kontaktowy" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                  Uratuj swój komputer przed przegrzaniem!
              </Link>
            </div>
          </article>
        </TracingBeam>
      </main>
    </div>
  );
}