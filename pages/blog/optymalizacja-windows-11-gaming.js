// pages/blog/optymalizacja-windows-11-gaming.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "../../components/ui/tracing-beam";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Jak zoptymalizować Windows 11 dla maksymalnej wydajności w grach?",
    "description": "Poradnik krok po kroku pokazujący, jak skonfigurować ustawienia systemu Windows 11, aby zwiększyć FPS i zmniejszyć opóźnienia w grach.",
    "step": [
        {"@type": "HowToStep", "name": "Krok 1: Włącz Tryb Gry i Optymalizacje", "text": "Przejdź do Ustawienia > Granie > Tryb Gry i włącz go. Następnie w sekcji Grafika włącz 'Optymalizacje dla gier w oknie' i przypisz grom status 'Wysoka wydajność'."},
        {"@type": "HowToStep", "name": "Krok 2: Wyłącz niepotrzebne efekty wizualne", "text": "W Ustawienia > Ułatwienia dostępu > Efekty wizualne wyłącz Efekty przezroczystości i animacji. W opcjach wydajności wybierz 'Dopasuj dla uzyskania najlepszej wydajności'."},
        {"@type": "HowToStep", "name": "Krok 3: Ustaw plan zasilania na 'Najwyższa wydajność'", "text": "W Panelu sterowania > Opcje zasilania, wybierz plan 'Najwyższa wydajność', aby procesor mógł pracować z pełną mocą."},
        {"@type": "HowToStep", "name": "Krok 4: Zaktualizuj sterowniki i oczyść autostart", "text": "Zainstaluj najnowsze sterowniki graficzne ze strony NVIDIA lub AMD. W Menedżerze zadań (Ctrl+Shift+Esc) w zakładce 'Uruchamianie' wyłącz wszystkie zbędne programy."},
        {"@type": "HowToStep", "name": "Krok 5 (Opcjonalnie): Wyłącz integralność pamięci (VBS)", "text": "W ustawieniach Zabezpieczenia Windows > Izolacja rdzenia, wyłącz 'Integralność pamięci'. Może to zwiększyć FPS, ale nieznacznie obniża poziom bezpieczeństwa systemu."}
    ]
};
const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Czy te optymalizacje są bezpieczne?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, wszystkie opisane kroki (z wyjątkiem opcjonalnego wyłączenia VBS) są w 100% bezpieczne i odwracalne. Są to standardowe procedury optymalizacyjne, które nie niosą ryzyka uszkodzenia sprzętu czy utraty danych."
        }
      },
      {
        "@type": "Question",
        "name": "Jak dużego wzrostu FPS mogę się spodziewać?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wzrost wydajności zależy od specyfikacji Twojego komputera i gier, w które grasz. Na słabszych konfiguracjach, gdzie każdy zasób systemowy jest na wagę złota, różnica może być bardziej zauważalna (5-10%). Na mocnych komputerach optymalizacje te zapewnią przede wszystkim większą stabilność i płynność działania systemu. Największy wzrost FPS daje <a href='/blog/poradnik-oc-uv'>Overclocking</a>."
        }
      }
    ]
};

export default function OptymalizacjaWindows11() {
  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>Optymalizacja Windows 11 pod kątem gier | Titanium Systems</title>
        <meta name="description" content="Poznaj ukryte triki i ustawienia w Windows 11, które pozwolą Ci zmaksymalizować liczbę klatek na sekundę i zminimalizować opóźnienia w grach." />
        <link rel="canonical" href="https://titaniumsystems.pl/blog/optymalizacja-windows-11-gaming" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      </Head>
      
      <main className="container mx-auto py-24 px-4">
        <TracingBeam className="px-6">
          <article className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <p className="text-sm text-[#00bcd4] font-semibold">Oprogramowanie</p>
              <h1 className="text-4xl lg:text-5xl font-bold mt-2">
                Jak zoptymalizować Windows 11 pod kątem gier?
              </h1>
              <p className="text-gray-400 mt-4">Opublikowano: 15 sierpnia 2025</p>
            </header>
            
            <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
              <Image src="/images/windows11-game.webp" alt="Logo Windows 11" layout="fill" objectFit="cover" />
            </div>

            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
              <p className="text-xl leading-relaxed">
                Windows 11 posiada wiele funkcji dedykowanych graczom, ale jego domyślna konfiguracja często zawiera procesy działające w tle, które mogą zużywać cenne zasoby. Oto kilka sprawdzonych kroków, które pomogą Ci wycisnąć maksimum wydajności z Twojego PC.
              </p>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Optymalizacja Windows 11 krok po kroku</h2>
                 <ol className="list-decimal list-inside space-y-4">
                    {howToSchema.step.map((step, index) => (
                        <li key={index}><strong>{step.name}:</strong> {step.text}</li>
                    ))}
                </ol>
                <p className="mt-4">Pamiętaj również, aby w <Link href="/blog/bios-uefi-poradnik" className="text-[#00bcd4] hover:underline">BIOS/UEFI</Link> mieć włączone profile XMP/EXPO dla pamięci RAM.</p>
              </div>

              <div className="mt-16 border-t border-gray-700 pt-8">
                <h2 className="text-3xl font-bold mb-4 text-white">Często zadawane pytania (FAQ)</h2>
                {faqData.mainEntity.map((faq, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-200">{faq.name}</h3>
                    <p className="text-gray-400 mt-2" dangerouslySetInnerHTML={{ __html: faq.acceptedAnswer.text }} />
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-16 border-t border-gray-700 pt-8">
                <p className="text-lg mb-4">Chcesz mieć system idealnie skonfigurowany pod gry? To standard w naszym Pakiecie PRO.</p>
                <Link href="#formularz-kontaktowy" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                    Zamów komputer zoptymalizowany pod gry!
                </Link>
              </div>
            </div>
          </article>
        </TracingBeam>
      </main>
    </div>
  );
}