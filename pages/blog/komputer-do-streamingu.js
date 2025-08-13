// pages/blog/komputer-do-streamingu.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "../../components/ui/tracing-beam";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Jak skonfigurować komputer do streamingu gier?",
    "description": "Przewodnik krok po kroku po doborze komponentów i konfiguracji oprogramowania OBS Studio dla płynnego streamingu na Twitch i YouTube.",
    "step": [
        {"@type": "HowToStep", "name": "Krok 1: Wybierz odpowiedni procesor", "text": "Wybierz procesor z dużą liczbą rdzeni i wątków, np. Intel Core i7-14700K lub AMD Ryzen 9 7900X, aby płynnie obsługiwać grę i zadania w tle."},
        {"@type": "HowToStep", "name": "Krok 2: Zainwestuj w kartę graficzną NVIDIA RTX", "text": "Wybierz kartę z serii GeForce RTX, aby skorzystać z dedykowanego enkodera NVENC, który minimalnie obciąża system podczas kodowania wideo."},
        {"@type": "HowToStep", "name": "Krok 3: Wyposaż komputer w 32 GB RAM", "text": "Zapewnij sobie komfort pracy i uniknij przycięć, instalując 32 GB szybkiej pamięci RAM."},
        {"@type": "HowToStep", "name": "Krok 4: Skonfiguruj OBS Studio", "text": "W ustawieniach OBS wybierz enkoder NVIDIA NVENC, ustaw odpowiednią przepływność (bitrate) w zależności od prędkości internetu (np. 6000-8000 Kbps dla 1080p60) i ustaw preset na 'Jakość'."}
    ]
};
const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Jaka prędkość internetu jest potrzebna do streamowania?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kluczowa jest prędkość wysyłania (upload). Do stabilnego streamu w rozdzielczości 1080p i 60 klatkach na sekundę, zalecane jest posiadanie stałego łącza z prędkością wysyłania na poziomie co najmniej 10-15 Mbps, aby mieć zapas na wahania łącza."
        }
      },
      {
        "@type": "Question",
        "name": "Czy lepszy jest streaming z jednego czy dwóch komputerów (dual PC)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dzięki nowoczesnym enkoderom NVENC, streaming z jednego, mocnego komputera jest w pełni wystarczający dla większości streamerów. Konfiguracja z dwoma PC (jeden do grania, drugi do streamowania) jest rozwiązaniem dla profesjonalistów, którzy wymagają absolutnie bezkompromisowej wydajności i mają bardzo rozbudowane sceny w OBS."
        }
      }
    ]
};

export default function KomputerDoStreamingu() {
  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>Streaming na Twitch i YouTube – Konfiguracja PC | Titanium Systems</title>
        <meta name="description" content="Jak zbudować i skonfigurować komputer do streamowania gier? Omawiamy kluczowe komponenty i ustawienia oprogramowania OBS Studio." />
        <link rel="canonical" href="https://titaniumsystems.pl/blog/komputer-do-streamingu" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      </Head>
      
      <main className="container mx-auto py-24 px-4">
        <TracingBeam className="px-6">
          <article className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <p className="text-sm text-[#00bcd4] font-semibold">Poradniki</p>
              <h1 className="text-4xl lg:text-5xl font-bold mt-2">
                Komputer do streamingu na Twitch i YouTube – Kompletny przewodnik
              </h1>
              <p className="text-gray-400 mt-4">Opublikowano: 16 sierpnia 2025</p>
            </header>
            
            <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
              <Image src="/images/streaming.webp" alt="Streamer grający na komputerze" layout="fill" objectFit="cover" />
            </div>

            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
              <p className="text-xl leading-relaxed">
                Streaming gier to ogromne obciążenie dla komputera, który musi jednocześnie płynnie renderować grę i w czasie rzeczywistym kodować obraz wideo. Oto jak zbudować i skonfigurować maszynę, która podoła temu zadaniu.
              </p>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Konfiguracja komputera do streamingu krok po kroku</h2>
                <ol className="list-decimal list-inside space-y-4">
                    {howToSchema.step.map((step, index) => (
                        <li key={index}><strong>{step.name}:</strong> {step.text}</li>
                    ))}
                </ol>
                <p className="mt-4">W doborze odpowiedniego <Link href="/blog/procesor-do-gier-intel-vs-amd" className="text-[#00bcd4] hover:underline">procesora</Link> i <Link href="/blog/wybor-karty-graficznej-2025" className="text-[#00bcd4] hover:underline">karty graficznej</Link> pomogą Ci nasze inne poradniki.</p>
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
                <p className="text-lg mb-4">Marzysz o karierze streamera? Zbudujemy dla Ciebie maszynę, która sprosta temu zadaniu.</p>
                <Link href="#formularz-kontaktowy" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                    Zbuduj z nami maszynę do streamingu!
                </Link>
              </div>
            </div>
          </article>
        </TracingBeam>
      </main>
    </div>
  );
}