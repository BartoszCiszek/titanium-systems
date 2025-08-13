// pages/blog/budowa-komputera-krok-po-kroku.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "../../components/ui/tracing-beam";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Jak samodzielnie złożyć komputer PC krok po kroku?",
  "description": "Szczegółowa instrukcja, jak złożyć komputer stacjonarny od podstaw - od montażu procesora po podłączenie kabli.",
  "totalTime": "PT3H",
  "step": [
    { "@type": "HowToStep", "name": "Krok 1: Przygotowanie miejsca pracy i komponentów", "text": "Przygotuj czystą, dużą przestrzeń roboczą i wszystkie komponenty: procesor, płytę główną, RAM, dysk, kartę graficzną, zasilacz, obudowę i chłodzenie CPU." },
    { "@type": "HowToStep", "name": "Krok 2: Montaż procesora, RAM i dysku M.2 na płycie głównej", "text": "Zamontuj CPU w gnieździe, zainstaluj moduły RAM w odpowiednich slotach i przykręć dysk M.2, zanim umieścisz płytę główną w obudowie." },
    { "@type": "HowToStep", "name": "Krok 3: Montaż płyty głównej w obudowie", "text": "Włóż zaślepkę portów I/O, wkręć kołki dystansowe i delikatnie umieść oraz przykręć płytę główną wewnątrz obudowy." },
    { "@type": "HowToStep", "name": "Krok 4: Instalacja karty graficznej i zasilacza", "text": "Zamontuj kartę graficzną w najwyższym slocie PCIe x16. Następnie umieść zasilacz w przeznaczonym dla niego miejscu i przykręć go do obudowy." },
    { "@type": "HowToStep", "name": "Krok 5: Podłączanie kabli", "text": "Podłącz wszystkie niezbędne kable (24-pin ATX, 8-pin EPS, PCIe, SATA, kable front panelu), prowadząc je za tacką płyty głównej dla lepszej estetyki i przepływu powietrza." },
    { "@type": "HowToStep", "name": "Krok 6: Pierwsze uruchomienie i instalacja systemu", "text": "Podłącz komputer do zasilania i monitora, wejdź do BIOS/UEFI, aby sprawdzić, czy wszystkie komponenty są wykrywane, a następnie zainstaluj system operacyjny z przygotowanego nośnika USB." }
  ]
};

const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Czy samodzielne składanie komputera jest trudne?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dla osoby robiącej to pierwszy raz może być to wyzwanie, ale jest to proces bardzo logiczny i dobrze udokumentowany. Najważniejsza jest cierpliwość i dokładne czytanie instrukcji od producentów podzespołów. Proces przypomina składanie zaawansowanych klocków dla dorosłych."
        }
      },
      {
        "@type": "Question",
        "name": "Ile czasu zajmuje złożenie komputera?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dla początkującej osoby, cały proces od rozpakowania części do pierwszego uruchomienia może zająć od 3 do 5 godzin. Doświadczony technik, taki jak w Titanium Systems, jest w stanie złożyć i przygotować komputer do pracy w około 1,5-2 godziny."
        }
      },
      {
        "@type": "Question",
        "name": "Jakie jest największe ryzyko podczas składania PC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Największym ryzykiem jest uszkodzenie komponentów przez elektryczność statyczną (ESD) lub przez użycie zbyt dużej siły, np. podczas montażu procesora. Ważne jest, aby pracować ostrożnie i regularnie rozładowywać ładunki elektrostatyczne, dotykając metalowej części obudowy."
        }
      }
    ]
};

export default function BudowaKomputeraKrokPoKroku() {
  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>Budowa komputera krok po kroku – Poradnik 2025 | Titanium Systems</title>
        <meta name="description" content="Kompleksowy przewodnik, który przeprowadzi Cię przez cały proces składania komputera – od montażu procesora po zarządzanie kablami." />
        <link rel="canonical" href="https://titaniumsystems.pl/blog/budowa-komputera-krok-po-kroku" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      </Head>
      
      <main className="container mx-auto py-24 px-4">
        <TracingBeam className="px-6">
          <article className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <p className="text-sm text-[#00bcd4] font-semibold">Poradniki</p>
              <h1 className="text-4xl lg:text-5xl font-bold mt-2">
                Budowa komputera PC krok po kroku – Poradnik 2025
              </h1>
              <p className="text-gray-400 mt-4">Opublikowano: 15 sierpnia 2025</p>
            </header>
            
            <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
              <Image src="/images/skladanie-komputerow.webp" alt="Osoba składająca komputer" layout="fill" objectFit="cover" />
            </div>

            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
              <p className="text-xl leading-relaxed">
                Samodzielne złożenie komputera to niezwykle satysfakcjonujące doświadczenie. Daje pełną kontrolę nad doborem komponentów i pozwala zaoszczędzić pieniądze. Ten przewodnik przeprowadzi Cię przez wszystkie etapy.
              </p>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Proces składania komputera</h2>
                <ol className="list-decimal list-inside space-y-4">
                    {howToSchema.step.map((step, index) => (
                        <li key={index}><strong>{step.name}:</strong> {step.text}</li>
                    ))}
                </ol>
                <p className="mt-4">Pamiętaj, aby na etapie podłączania kabli zadbać o dobry <Link href="/blog/cable-management-poradnik" className="text-[#00bcd4] hover:underline">cable management</Link> – to wpłynie na estetykę i chłodzenie.</p>
              </div>

              <div className="mt-16 border-t border-gray-700 pt-8">
                <h2 className="text-3xl font-bold mb-4 text-white">Często zadawane pytania (FAQ)</h2>
                {faqData.mainEntity.map((faq, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-200">{faq.name}</h3>
                    <p className="text-gray-400 mt-2">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-16 border-t border-gray-700 pt-8">
                <p className="text-lg mb-4">Proces wydaje się zbyt skomplikowany? Z przyjemnością złożymy Twój wymarzony komputer!</p>
                <Link href="/uslugi" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                    Zobacz nasze pakiety usług
                </Link>
              </div>
            </div>
          </article>
        </TracingBeam>
      </main>
    </div>
  );
}