// pages/blog/raid-w-domowym-serwerze.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "../../components/ui/tracing-beam";

const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Czy RAID to to samo co backup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutnie nie! To jeden z najczęstszych błędów. RAID chroni przed awarią fizycznego dysku, ale nie chroni przed przypadkowym usunięciem plików, atakiem ransomware czy kradzieżą. Zawsze należy stosować strategię backupu 3-2-1: trzy kopie danych, na dwóch różnych nośnikach, z czego jedna kopia w innej lokalizacji."
        }
      },
      {
        "@type": "Question",
        "name": "Co się stanie, gdy w macierzy RAID 5 zepsuje się jeden dysk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Twoje dane pozostaną bezpieczne i dostępne. Macierz przejdzie w tryb 'zdegradowany', co może oznaczać niższą wydajność. Należy jak najszybciej wymienić uszkodzony dysk na nowy, a system automatycznie rozpocznie proces odbudowy danych na nowym nośniku."
        }
      },
      {
        "@type": "Question",
        "name": "Czy mogę używać dysków o różnej pojemności w macierzy RAID?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Można, ale jest to nieefektywne. W tradycyjnej macierzy RAID, pojemność każdego dysku zostanie ograniczona do pojemności najmniejszego dysku w macierzy. Dlatego zawsze zaleca się stosowanie identycznych dysków."
        }
      }
    ]
};

export default function RaidWDomowymSerwerze() {
  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>RAID w Domowym Serwerze: Jak Chronić Swoje Dane? | Titanium Systems</title>
        <meta name="description" content="Wyjaśniamy, czym jest RAID i jakie są jego najpopularniejsze poziomy (RAID 1, 5, 10). Dowiedz się, jak zabezpieczyć swoje dane w domowym serwerze NAS." />
        <link rel="canonical" href="https://titaniumsystems.pl/blog/raid-w-domowym-serwerze" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      </Head>
      
      <main className="container mx-auto py-24 px-4">
        <TracingBeam className="px-6">
          <article className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <p className="text-sm text-[#00bcd4] font-semibold">Sieci</p>
              <h1 className="text-4xl lg:text-5xl font-bold mt-2">
                RAID w Domowym Serwerze: Jak Chronić Swoje Dane?
              </h1>
              <p className="text-gray-400 mt-4">Opublikowano: 21 sierpnia 2025</p>
            </header>
            
            <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
              <Image src="/images/raid.webp" alt="Dyski twarde w macierzy RAID" layout="fill" objectFit="cover" />
            </div>

            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
              <p className="text-xl leading-relaxed">
                Posiadanie <Link href="/blog/serwery-domowe-zastosowania" className="text-[#00bcd4] hover:underline">domowego serwera NAS</Link> to świetny sposób na centralizację danych. Ale co się stanie, gdy jeden z dysków ulegnie awarii? Właśnie przed tym chroni nas technologia RAID.
              </p>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Czym jest RAID?</h2>
                <p><strong>RAID (Redundant Array of Independent Disks)</strong> to technologia, która łączy kilka fizycznych dysków twardych w jedną logiczną całość. W zależności od konfiguracji (poziomu RAID), celem jest zwiększenie wydajności, zapewnienie odporności na awarie, lub jedno i drugie.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Najpopularniejsze poziomy RAID w domu</h2>
                 <ul className="list-disc list-inside mt-4">
                    <li><strong>RAID 1 (Mirroring):</strong> Wymaga minimum 2 dysków. Dane są zapisywane identycznie na obu dyskach (lustrzane odbicie). Oferuje doskonałą ochronę, ponieważ w razie awarii jednego dysku, drugi przejmuje jego rolę. Wadą jest utrata 50% całkowitej pojemności.</li>
                    <li><strong>RAID 5 (Parity):</strong> Wymaga minimum 3 dysków. Dane są dzielone na wszystkie dyski, a dodatkowo na jednym z nich zapisywana jest suma kontrolna (parzystość). Pozwala na awarię jednego dysku bez utraty danych. Oferuje dobry kompromis między bezpieczeństwem a dostępną przestrzenią.</li>
                </ul>
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
                <p className="text-lg mb-4">Pomożemy Ci skonfigurować serwer NAS z odpowiednią macierzą RAID, aby Twoje dane były bezpieczne.</p>
                <Link href="/uslugi/pakiet-indywidualny" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                    Zapytaj o konfigurację serwera
                </Link>
              </div>
            </div>
          </article>
        </TracingBeam>
      </main>
    </div>
  );
}