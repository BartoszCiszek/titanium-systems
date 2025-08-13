// pages/blog/pamiec-ram-ddr4-vs-ddr5.js
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
        "name": "Co to jest Dual Channel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dual Channel to technologia, która podwaja przepustowość danych między pamięcią RAM a kontrolerem pamięci w procesorze. Aby z niej skorzystać, należy zainstalować moduły RAM w parach, w odpowiednich slotach na płycie głównej (zazwyczaj slot 2 i 4). Zapewnia to znaczący wzrost wydajności, zwłaszcza w grach i w przypadku zintegrowanych kart graficznych."
        }
      },
      {
        "@type": "Question",
        "name": "Czy mogę mieszać różne moduły RAM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Technicznie jest to możliwe, ale wysoce niezalecane. Mieszanie modułów o różnych taktowaniach, opóźnieniach lub od różnych producentów może prowadzić do problemów ze stabilnością. Wszystkie moduły będą pracować z prędkością najwolniejszego z nich. Zawsze najlepiej jest używać identycznych kości pamięci, najlepiej z jednego zestawu."
        }
      },
      {
        "@type": "Question",
        "name": "Co się stanie, jeśli nie włączę profilu XMP/EXPO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jeśli nie aktywujesz profilu XMP lub EXPO w BIOS/UEFI, Twoja pamięć RAM będzie działać ze standardową, bezpieczną prędkością określoną przez standard JEDEC (np. 2133 MHz dla DDR4 lub 4800 MHz dla DDR5), a nie z reklamowaną, wyższą prędkością. Oznacza to, że nie wykorzystasz pełnego potencjału wydajności, za który zapłaciłeś."
        }
      }
    ]
};

export default function PamiecRamDdr4VsDdr5() {
  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>Pamięć RAM – Wszystko o DDR4 i DDR5 | Titanium Systems</title>
        <meta name="description" content="Wszystko, co musisz wiedzieć o pamięci RAM. Wyjaśniamy różnice między DDR4 a DDR5, profile XMP/EXPO i jak dobrać idealne moduły do swojego zestawu." />
        <link rel="canonical" href="https://titaniumsystems.pl/blog/pamiec-ram-ddr4-vs-ddr5" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Pamięć RAM: DDR4 vs DDR5 i profile XMP/EXPO",
          "description": "Wszystko, co musisz wiedzieć o pamięci RAM. Wyjaśniamy różnice między DDR4 a DDR5, profile XMP/EXPO i jak dobrać idealne moduły do swojego zestawu.",
          "image": "https://titaniumsystems.pl/images/hero.webp",
          "author": {
            "@type": "Organization",
            "name": "Titanium Systems"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Titanium Systems",
            "logo": {
              "@type": "ImageObject",
              "url": "https://titaniumsystems.pl/images/logo.webp"
            }
          },
          "datePublished": "2025-08-14"
        }) }} />
      </Head>
      
      <main className="container mx-auto py-24 px-4">
        <TracingBeam className="px-6">
          <article className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <p className="text-sm text-[#00bcd4] font-semibold">Sprzęt</p>
              <h1 className="text-4xl lg:text-5xl font-bold mt-2">
                Pamięć RAM: DDR4 vs DDR5 i profile XMP/EXPO
              </h1>
              <p className="text-gray-400 mt-4">Opublikowano: 14 sierpnia 2025</p>
            </header>
            
            <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
              <Image src="/images/hero.webp" alt="Podświetlone kości pamięci RAM na płycie głównej" layout="fill" objectFit="cover" />
            </div>

            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
              <p className="text-xl leading-relaxed">
                Pamięć RAM (Random Access Memory) to jeden z kluczowych komponentów każdego komputera. Jej szybkość i pojemność mają bezpośredni wpływ na wydajność systemu, zwłaszcza w grach i wymagających aplikacjach. Wraz z nadejściem nowych platform, na rynku pojawił się standard DDR5. Czy warto w niego inwestować?
              </p>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">DDR4 vs DDR5: Główne różnice</h2>
                <p>DDR5 to następca popularnego standardu DDR4. Nowa generacja przynosi szereg ulepszeń, głównie w kwestii przepustowości, która może być nawet dwukrotnie wyższa. Pamięci DDR5 pracują też na niższym napięciu, co czyni je bardziej energooszczędnymi.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Profile XMP i EXPO – Uwolnij pełną moc!</h2>
                <p>Kupując szybkie moduły RAM, musisz wiedzieć, że aby osiągnąć ich reklamowaną prędkość, należy w <Link href="/blog/bios-uefi-poradnik" className="text-[#00bcd4] hover:underline">BIOS/UEFI</Link> włączyć odpowiedni profil:</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li><strong>XMP (Extreme Memory Profile):</strong> Technologia Intela.</li>
                  <li><strong>EXPO (Extended Profiles for Overclocking):</strong> Odpowiednik od AMD dla platformy AM5.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Ile RAM-u potrzebuję w 2025 roku?</h2>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li><strong>16 GB:</strong> Obecny "złoty środek" dla graczy i większości użytkowników.</li>
                  <li><strong>32 GB:</strong> Nowy standard dla entuzjastów, streamerów i osób pracujących z grafiką czy wideo.</li>
                  <li><strong>64 GB i więcej:</strong> Ilość przeznaczona dla profesjonalistów zajmujących się obróbką filmów w 8K i skomplikowanym modelowaniem 3D.</li>
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
                <p className="text-lg mb-4">Pomożemy Ci dobrać i skonfigurować idealne pamięci RAM do Twojego nowego komputera.</p>
                <Link href="#formularz-kontaktowy" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                    Dobierzemy dla Ciebie idealne pamięci RAM!
                </Link>
              </div>
            </div>
          </article>
        </TracingBeam>
      </main>
    </div>
  );
}