// pages/blog/bios-uefi-poradnik.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "../../components/ui/tracing-beam";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Jak skonfigurować kluczowe opcje w BIOS/UEFI?",
    "description": "Poradnik krok po kroku, jak wejść do BIOS/UEFI i skonfigurować najważniejsze opcje, takie jak profil XMP/EXPO, kolejność bootowania i Resizable BAR.",
    "step": [
        {"@type": "HowToStep", "name": "Krok 1: Wejdź do BIOS/UEFI", "text": "Uruchom ponownie komputer i zaraz po starcie wciskaj klawisz 'Delete' lub 'F2', aby wejść do menu ustawień firmware'u."},
        {"@type": "HowToStep", "name": "Krok 2: Włącz profil XMP lub EXPO", "text": "Znajdź w ustawieniach opcję 'Extreme Memory Profile (XMP)' lub 'AMD EXPO' i aktywuj ją, aby pamięć RAM pracowała z pełną, reklamowaną prędkością."},
        {"@type": "HowToStep", "name": "Krok 3: Ustaw kolejność bootowania", "text": "W sekcji 'Boot' upewnij się, że jako pierwsze urządzenie startowe ustawiony jest 'Windows Boot Manager' na Twoim głównym dysku SSD."},
        {"@type": "HowToStep", "name": "Krok 4: Aktywuj Resizable BAR", "text": "Znajdź opcję 'Re-Size BAR Support' lub 'Smart Access Memory' i ustaw ją na 'Enabled' lub 'Auto'. Zwiększy to wydajność w wielu grach."},
        {"@type": "HowToStep", "name": "Krok 5: Zapisz zmiany i wyjdź", "text": "Naciśnij klawisz F10, aby zapisać wprowadzone zmiany i zrestartować komputer."}
    ]
};

const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Czy aktualizacja BIOS/UEFI jest ryzykowna?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aktualizacja firmware'u niesie ze sobą minimalne ryzyko, głównie związane z przerwaniem procesu (np. przez zanik zasilania). Dlatego zawsze należy przeprowadzać ją przy stabilnym zasilaniu. Nowoczesne płyty główne często posiadają funkcje takie jak BIOS Flashback, które pozwalają na odzyskanie systemu nawet po nieudanej aktualizacji."
        }
      },
      {
        "@type": "Question",
        "name": "Co to jest POST (Power-On Self-Test)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "POST to seria testów diagnostycznych, które BIOS/UEFI przeprowadza za każdym razem, gdy uruchamiasz komputer, aby sprawdzić, czy kluczowe komponenty (procesor, RAM, karta graficzna) działają poprawnie. Jeśli któryś z testów zakończy się niepowodzeniem, płyta główna zasygnalizuje błąd za pomocą kodów dźwiękowych lub diod diagnostycznych."
        }
      }
    ]
};

export default function BiosUefiPoradnik() {
  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>BIOS/UEFI – Co to jest i co warto zmienić? | Titanium Systems</title>
        <meta name="description" content="Przewodnik po najważniejszych ustawieniach w BIOS/UEFI. Wyjaśniamy, czym są profile XMP/EXPO, Resizable BAR i jak bezpiecznie zaktualizować firmware." />
        <link rel="canonical" href="https://titaniumsystems.pl/blog/bios-uefi-poradnik" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      </Head>
      
      <main className="container mx-auto py-24 px-4">
        <TracingBeam className="px-6">
          <article className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <p className="text-sm text-[#00bcd4] font-semibold">Oprogramowanie</p>
              <h1 className="text-4xl lg:text-5xl font-bold mt-2">
                BIOS/UEFI: Tajemniczy świat ustawień Twojego PC
              </h1>
              <p className="text-gray-400 mt-4">Opublikowano: 17 sierpnia 2025</p>
            </header>
            
            <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
              <Image src="/images/realizacja4_3.webp" alt="Interfejs UEFI BIOS" layout="fill" objectFit="cover" />
            </div>

            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
              <p className="text-xl leading-relaxed">
                UEFI (następca BIOSu) to fundamentalne oprogramowanie, które startuje przed systemem operacyjnym i zarządza komunikacją między komponentami. Znajomość kilku kluczowych opcji pozwala uwolnić pełen potencjał sprzętu.
              </p>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Jak skonfigurować najważniejsze opcje w BIOS/UEFI?</h2>
                <ol className="list-decimal list-inside space-y-4">
                    {howToSchema.step.map((step, index) => (
                        <li key={index}><strong>{step.name}:</strong> {step.text}</li>
                    ))}
                </ol>
                <p className="mt-4">Pamiętaj, że włączenie profilu XMP/EXPO jest kluczowe dla wydajności <Link href="/blog/pamiec-ram-ddr4-vs-ddr5" className="text-[#00bcd4] hover:underline">pamięci RAM</Link>. Zaawansowane opcje, takie jak napięcia i taktowania, omówiliśmy w naszym <Link href="/blog/poradnik-oc-uv" className="text-[#00bcd4] hover:underline">poradniku OC/UV</Link>.</p>
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
                <p className="text-lg mb-4">Profesjonalna konfiguracja i optymalizacja BIOS/UEFI to kluczowy element naszych usług.</p>
                <Link href="/uslugi/pakiet-pro" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                    Dowiedz się więcej o Pakiecie PRO
                </Link>
              </div>
            </div>
          </article>
        </TracingBeam>
      </main>
    </div>
  );
}