// pages/blog/bezpieczenstwo-w-sieci.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "../../components/ui/tracing-beam";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Jak w 5 krokach zabezpieczyć swój komputer i dane?",
    "description": "Praktyczny przewodnik po podstawowych zasadach cyberbezpieczeństwa, które każdy użytkownik komputera powinien wdrożyć.",
    "step": [
        {"@type": "HowToStep", "name": "Krok 1: Używaj silnych, unikalnych haseł i menedżera haseł", "text": "Stwórz długie i skomplikowane hasła dla każdej usługi. Aby nimi zarządzać, użyj menedżera haseł, np. Bitwarden. Musisz zapamiętać tylko jedno, główne hasło."},
        {"@type": "HowToStep", "name": "Krok 2: Włącz uwierzytelnianie dwuskładnikowe (2FA)", "text": "Aktywuj 2FA wszędzie, gdzie to możliwe, używając aplikacji takich jak Google Authenticator. To dodatkowa warstwa ochrony, która wymaga podania kodu z telefonu przy logowaniu."},
        {"@type": "HowToStep", "name": "Krok 3: Uważaj na phishing i podejrzane załączniki", "text": "Nie klikaj w podejrzane linki w mailach i nie otwieraj załączników od nieznanych nadawców. Zawsze weryfikuj, czy strona, na której podajesz dane, jest autentyczna."},
        {"@type": "HowToStep", "name": "Krok 4: Regularnie aktualizuj oprogramowanie", "text": "Utrzymuj swój system operacyjny, przeglądarkę i wszystkie programy w najnowszych wersjach. Aktualizacje zawierają kluczowe łatki bezpieczeństwa."},
        {"@type": "HowToStep", "name": "Krok 5: Używaj renomowanego oprogramowania antywirusowego", "text": "Wbudowany Microsoft Defender jest dobrym startem, ale warto rozważyć płatne rozwiązania, które oferują dodatkowe warstwy ochrony, np. przed ransomware."}
    ]
};
const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Jaka jest różnica między wirusem a malware?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Malware (złośliwe oprogramowanie) to szeroki termin obejmujący wszystkie rodzaje szkodliwego kodu, w tym wirusy, trojany, ransomware, spyware itp. Wirus to specyficzny typ malware, który potrafi się replikować i rozprzestrzeniać, infekując inne pliki."
        }
      },
      {
        "@type": "Question",
        "name": "Czy VPN zwiększa moje bezpieczeństwo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VPN (Virtual Private Network) zwiększa Twoją prywatność, szyfrując ruch internetowy i ukrywając Twój prawdziwy adres IP. Chroni Cię to zwłaszcza w publicznych sieciach Wi-Fi. Jednak VPN nie chroni przed wirusami ani atakami phishingowymi – do tego potrzebne są inne narzędzia i zdrowy rozsądek."
        }
      },
      {
        "@type": "Question",
        "name": "Czy muszę płacić za program antywirusowy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dla podstawowej ochrony, wbudowany w Windows Microsoft Defender jest obecnie bardzo dobrym i wystarczającym rozwiązaniem. Płatne pakiety antywirusowe oferują często dodatkowe funkcje, takie jak zaawansowany firewall, ochrona przed ransomware, menedżer haseł czy kontrola rodzicielska, które mogą być warte swojej ceny dla bardziej wymagających użytkowników."
        }
      }
    ]
};

export default function BezpieczenstwoWSieci() {
  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>Bezpieczeństwo w sieci: Jak chronić swoje dane? | Titanium Systems</title>
        <meta name="description" content="Niezbędne porady dotyczące ochrony komputera i danych osobowych przed wirusami, phishingiem i innymi zagrożeniami online." />
        <link rel="canonical" href="https://titaniumsystems.pl/blog/bezpieczenstwo-w-sieci" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      </Head>
      
      <main className="container mx-auto py-24 px-4">
        <TracingBeam className="px-6">
          <article className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <p className="text-sm text-[#00bcd4] font-semibold">Bezpieczeństwo</p>
              <h1 className="text-4xl lg:text-5xl font-bold mt-2">
                Bezpieczeństwo w sieci: 5 kroków do ochrony Twoich danych
              </h1>
              <p className="text-gray-400 mt-4">Opublikowano: 15 sierpnia 2025</p>
            </header>
            
            <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
              <Image src="/images/bezpieczenstwo.webp" alt="Tarcza chroniąca dane" layout="fill" objectFit="cover" />
            </div>

            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
              <p className="text-xl leading-relaxed">
                W dzisiejszym cyfrowym świecie nasze komputery przechowują ogromne ilości wrażliwych danych. Zapewnienie im odpowiedniej ochrony jest absolutnie kluczowe. Wbrew pozorom, podstawowe zasady cyberbezpieczeństwa są proste do wdrożenia.
              </p>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Jak zabezpieczyć komputer? Krok po kroku</h2>
                <ol className="list-decimal list-inside space-y-4">
                    {howToSchema.step.map((step, index) => (
                        <li key={index}><strong>{step.name}:</strong> {step.text}</li>
                    ))}
                </ol>
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
                <p className="text-lg mb-4">Potrzebujesz pomocy w zabezpieczeniu swojego komputera lub sieci firmowej?</p>
                <Link href="#formularz-kontaktowy" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                    Zabezpiecz z nami swoje dane!
                </Link>
              </div>
            </div>
          </article>
        </TracingBeam>
      </main>
    </div>
  );
}