// pages/blog/monitor-dla-gracza-vs-grafika.js
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
        "name": "Czy monitor dla gracza nadaje się do obróbki zdjęć?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Może się nadawać, ale często wymaga to kalibracji. Wiele monitorów gamingowych ma fabrycznie podbite kolory, aby gry wyglądały bardziej efektownie. Do amatorskiej obróbki zdjęć wystarczy, ale profesjonalista będzie potrzebował monitora z gwarantowanym pokryciem palety sRGB i Adobe RGB oraz możliwością precyzyjnej kalibracji sprzętowej."
        }
      },
      {
        "@type": "Question",
        "name": "Co to jest 'ghosting' i 'smearing' na monitorze?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To artefakty obrazu związane ze zbyt wolnym czasem reakcji pikseli. Ghosting objawia się jako 'duch' lub poświata za szybko poruszającymi się obiektami. Smearing to zjawisko charakterystyczne dla matryc VA, gdzie ciemne piksele potrzebują więcej czasu na zmianę stanu, co powoduje czarne smugi, np. podczas przewijania czarnego tekstu na białym tle."
        }
      },
      {
        "@type": "Question",
        "name": "Czy warto inwestować w zakrzywiony monitor (curved)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dla graczy, zwłaszcza przy monitorach ultrapanoramicznych (ultrawide), zakrzywienie ekranu może zwiększyć immersję, otaczając pole widzenia. Dla grafików i projektantów, zakrzywienie może być wadą, ponieważ proste linie mogą wydawać się krzywe. W tym wypadku preferowane są płaskie ekrany."
        }
      }
    ]
};

export default function MonitorDlaGraczaVsGrafika() {
  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>Monitor dla Gracza vs. Grafika: Kluczowe Różnice | Titanium Systems</title>
        <meta name="description" content="Porównujemy kluczowe parametry monitorów dla graczy i profesjonalistów. Dowiedz się, na co zwrócić uwagę przy wyborze ekranu do gier i pracy z kolorem." />
        <link rel="canonical" href="https://titaniumsystems.pl/blog/monitor-dla-gracza-vs-grafika" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      </Head>
      
      <main className="container mx-auto py-24 px-4">
        <TracingBeam className="px-6">
          <article className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <p className="text-sm text-[#00bcd4] font-semibold">Porównania</p>
              <h1 className="text-4xl lg:text-5xl font-bold mt-2">
                Monitor dla Gracza vs. Monitor dla Grafika: Kluczowe Różnice
              </h1>
              <p className="text-gray-400 mt-4">Opublikowano: 21 sierpnia 2025</p>
            </header>
            
            <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
              <Image src="/images/monitor-comparison.webp" alt="Dwa monitory, jeden do gier, drugi do grafiki" layout="fill" objectFit="cover" />
            </div>

            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
              <p className="text-xl leading-relaxed">
                Wybór monitora to jedna z najważniejszych decyzji przy budowie stanowiska. Jednak idealny monitor dla zapalonego gracza będzie miał zupełnie inne priorytety niż ten dla profesjonalnego grafika czy fotografa. Skupmy się na kluczowych różnicach.
              </p>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Priorytety Gracza: Szybkość i Płynność</h2>
                <ul className="list-disc list-inside mt-4">
                    <li><strong>Częstotliwość odświeżania (Hz):</strong> Absolutny priorytet. Minimum to 144Hz, a standardem staje się 165Hz i więcej. Wyższa wartość oznacza płynniejszy obraz i szybszy czas reakcji.</li>
                    <li><strong>Czas reakcji (ms):</strong> Im niższy, tym lepiej. 1ms (GtG) to złoty standard, minimalizujący smużenie (ghosting) w dynamicznych scenach.</li>
                    <li><strong>Technologie synchronizacji:</strong> NVIDIA G-Sync lub AMD FreeSync są kluczowe, aby wyeliminować rozrywanie obrazu (screen tearing).</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Priorytety Grafika: Wierność Kolorów</h2>
                 <ul className="list-disc list-inside mt-4">
                    <li><strong>Pokrycie palety barw:</strong> Najważniejszy parametr. Minimum to 100% pokrycia sRGB. Profesjonaliści potrzebują wysokiego pokrycia palet Adobe RGB i DCI-P3.</li>
                    <li><strong>Dokładność kolorów (Delta E):</strong> Określa, jak bardzo wyświetlane kolory różnią się od wzorcowych. Wartość Delta E &lt; 2 jest pożądana.</li>
                    <li><strong>Typ matrycy:</strong> Zazwyczaj IPS, ze względu na najlepsze odwzorowanie kolorów i szerokie kąty widzenia.</li>
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
                <p className="text-lg mb-4">Pomożemy Ci dobrać idealny monitor, który będzie doskonałym uzupełnieniem Twojego nowego komputera.</p>
                <Link href="/uslugi" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                    Skonsultuj z nami swój wybór
                </Link>
              </div>
            </div>
          </article>
        </TracingBeam>
      </main>
    </div>
  );
}