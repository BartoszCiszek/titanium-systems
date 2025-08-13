// pages/blog/jak-wybrac-zasilacz-psu.js
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
        "name": "Co to jest standard ATX 3.0 i czy go potrzebuję?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ATX 3.0 to nowy standard zasilaczy, zaprojektowany z myślą o najnowszych, bardzo prądożernych kartach graficznych (jak seria RTX 40). Wprowadza on nowe złącze zasilania 12VHPWR i jest w stanie lepiej radzić sobie z nagłymi, chwilowymi skokami poboru mocy. Jeśli budujesz komputer z kartą RTX 4070 Super lub mocniejszą, wybór zasilacza ATX 3.0 jest wysoce zalecany."
        }
      },
      {
        "@type": "Question",
        "name": "Czy zasilacz może być głośny?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, głównym źródłem hałasu w zasilaczu jest jego wentylator. Wiele nowoczesnych, wysokiej jakości zasilaczy posiada tryb półpasywny (0 RPM), w którym wentylator nie obraca się w ogóle przy niskim obciążeniu, zapewniając absolutną ciszę. Głośność pod obciążeniem zależy od jakości użytego wentylatora i ogólnej sprawności (zasilacze o wyższej sprawności generują mniej ciepła)."
        }
      },
      {
        "@type": "Question",
        "name": "Jak długa jest gwarancja na zasilacze?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Renomowani producenci (jak Seasonic, Corsair, be quiet!) są tak pewni jakości swoich produktów, że na swoje najlepsze modele oferują 7, 10, a nawet 12 lat gwarancji. Długa gwarancja jest świetnym wyznacznikiem jakości i niezawodności zasilacza."
        }
      }
    ]
};

export default function JakWybracZasilacz() {
  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>Zasilacz (PSU) – Jak wybrać serce komputera? | Titanium Systems</title>
        <meta name="description" content="Jak wybrać odpowiedni zasilacz? Omawiamy certyfikaty sprawności (80 Plus), moc, modularność i kluczowe zabezpieczenia, które chronią Twój sprzęt." />
        <link rel="canonical" href="https://titaniumsystems.pl/blog/jak-wybrac-zasilacz-psu" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Zasilacz (PSU) – Cichy bohater Twojego PC",
          "description": "Jak wybrać odpowiedni zasilacz? Omawiamy certyfikaty sprawności (80 Plus), moc, modularność i kluczowe zabezpieczenia, które chronią Twój sprzęt.",
          "image": "https://titaniumsystems.pl/images/portfolio2.webp",
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
                Zasilacz (PSU) – Cichy bohater Twojego PC
              </h1>
              <p className="text-gray-400 mt-4">Opublikowano: 14 sierpnia 2025</p>
            </header>
            
            <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
              <Image src="/images/portfolio2.webp" alt="Zasilacz w obudowie komputera" layout="fill" objectFit="cover" />
            </div>

            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
              <p className="text-xl leading-relaxed">
                Wybierając komponenty do nowego komputera, często skupiamy się na procesorze i karcie graficznej, traktując zasilacz (PSU - Power Supply Unit) po macoszemu. To poważny błąd. Zasilacz to serce całego systemu – od jego jakości, stabilności i mocy zależy bezpieczeństwo wszystkich podzespołów.
              </p>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">1. Moc – Ile watów potrzebuję?</h2>
                <p>Zawsze warto mieć zapas mocy. Zasilacz pracuje najefektywniej przy obciążeniu rzędu 40-60%. Posiadanie zapasu zapewnia również, że PSU nie będzie musiał pracować na 100% swoich możliwości, co przekłada się na niższe temperatury i cichszą pracę. To także zabezpieczenie na przyszłość, jeśli planujesz modernizację sprzętu.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">2. Certyfikat sprawności 80 Plus – Co oznacza?</h2>
                <p>Certyfikat 80 Plus informuje o sprawności energetycznej zasilacza. Im wyższy certyfikat, tym mniejsze straty energii w postaci ciepła, a co za tym idzie – niższe rachunki za prąd i cichsza praca. Absolutnym minimum jest dziś certyfikat <strong>80 Plus Bronze</strong>, a najlepszy stosunek ceny do jakości oferują zasilacze <strong>80 Plus Gold</strong>.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">3. Modularność i zabezpieczenia</h2>
                <p><strong>W pełni modularny</strong> zasilacz pozwala podłączyć tylko te kable, których potrzebujesz, co ułatwia ich ułożenie i poprawia przepływ powietrza. Dobry zasilacz musi też posiadać szereg zabezpieczeń (OVP, UVP, SCP, OPP, OTP), które chronią Twój komputer przed nieprawidłowościami w sieci elektrycznej. Nigdy nie oszczędzaj na zasilaczu – tani, niemarkowy produkt w razie awarii może uszkodzić wszystkie pozostałe komponenty.</p>
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
                <p className="text-lg mb-4">Dobór odpowiedniego zasilacza to fundament stabilnego i bezpiecznego komputera.</p>
                <Link href="#formularz-kontaktowy" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                    Zaufaj naszemu doświadczeniu
                </Link>
              </div>
            </div>
          </article>
        </TracingBeam>
      </main>
    </div>
  );
}