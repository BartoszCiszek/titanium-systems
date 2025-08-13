// pages/blog/poradnik-oc-uv.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "../../components/ui/tracing-beam";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Jak bezpiecznie przeprowadzić Overclocking (OC) i Undervolting (UV)?",
  "description": "Poradnik krok po kroku, jak bezpiecznie podkręcić i obniżyć napięcie procesora (CPU) i karty graficznej (GPU) w celu zwiększenia wydajności i obniżenia temperatur.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Przygotowanie i monitoring",
      "text": "Zainstaluj oprogramowanie do monitorowania parametrów pracy komputera, takie jak HWiNFO64, MSI Afterburner i CPU-Z. Pozwolą one śledzić temperatury, taktowania i napięcia w czasie rzeczywistym."
    },
    {
      "@type": "HowToStep",
      "name": "Przygotowanie testów stabilności",
      "text": "Pobierz programy do testowania obciążenia, aby weryfikować stabilność po każdej zmianie. Polecane to Cinebench R23 dla CPU, 3DMark Time Spy lub Unigine Superposition dla GPU, oraz Prime95 do ekstremalnych testów obciążeniowych."
    },
    {
      "@type": "HowToStep",
      "name": "Modyfikacja ustawień",
      "text": "Zmian dokonuj w BIOS/UEFI (dla CPU) lub za pomocą dedykowanego oprogramowania jak MSI Afterburner (GPU) czy Intel XTU/AMD Ryzen Master (CPU). Zacznij od wartości bazowych."
    },
    {
      "@type": "HowToStep",
      "name": "Metoda małych kroków",
      "text": "Zmieniaj wartości (taktowanie lub napięcie) o bardzo małe kwoty. Po każdej pojedynczej zmianie, uruchom test stabilności na 15-30 minut. Jeśli system działa stabilnie, możesz spróbować podnieść wartość o kolejny mały krok. Jeśli wystąpi błąd, cofnij ostatnią zmianę."
    },
    {
      "@type": "HowToStep",
      "name": "Zapisz stabilny profil",
      "text": "Gdy znajdziesz satysfakcjonujące i w 100% stabilne ustawienia, zapisz je jako profil w BIOS/UEFI lub w oprogramowaniu, aby łatwo do nich wrócić."
    }
  ]
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Czy overclocking skraca żywotność podzespołów?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tak, podniesienie napięcia i taktowania może w teorii skrócić żywotność komponentów. Jednak przy rozsądnym podkręcaniu i utrzymywaniu temperatur w bezpiecznych granicach (poniżej 85-90°C pod obciążeniem), wpływ na żywotność jest minimalny, a sprzęt i tak zdąży się zestarzeć technologicznie, zanim ulegnie awarii z tego powodu."
      }
    },
    {
      "@type": "Question",
      "name": "Czy undervolting jest bezpieczny?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tak, undervolting jest całkowicie bezpieczny. W najgorszym wypadku, zbyt niskie napięcie spowoduje niestabilność systemu i konieczność zrestartowania komputera. Nie ma ryzyka fizycznego uszkodzenia sprzętu, w przeciwieństwie do podawania zbyt wysokiego napięcia podczas overclockingu."
      }
    },
    {
      "@type": "Question",
      "name": "Czy stracę gwarancję, podkręcając sprzęt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To zależy od producenta. Wielu z nich (jak Intel z procesorami 'K' czy AMD) oficjalnie pozwala na podkręcanie, a nawet dostarcza do tego własne oprogramowanie. Gwarancja zazwyczaj nie obejmuje jednak uszkodzeń fizycznych powstałych w wyniku podania zbyt wysokiego napięcia. Dlatego kluczowe jest, aby robić to ostrożnie i z głową."
      }
    }
  ]
};

export default function PoradnikOCUV() {
  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>Overclocking i Undervolting – Kompletny poradnik | Titanium Systems</title>
        <meta name="description" content="Dowiedz się, czym jest Overclocking (OC) i Undervolting (UV), jakie korzyści niosą i jak bezpiecznie wycisnąć więcej mocy ze swojego procesora i karty graficznej." />
        <link rel="canonical" href="https://titaniumsystems.pl/blog/poradnik-oc-uv" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      </Head>
      
      <main className="container mx-auto py-24 px-4">
        <TracingBeam className="px-6">
          <article className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <p className="text-sm text-[#00bcd4] font-semibold">Poradniki</p>
              <h1 className="text-4xl lg:text-5xl font-bold mt-2">
                Overclocking i Undervolting – Poradnik dla początkujących
              </h1>
              <p className="text-gray-400 mt-4">Opublikowano: 13 sierpnia 2025</p>
            </header>
            
            <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
              <Image src="/images/oc-uv-komputera.webp" alt="Schemat Overclockingu i Undervoltingu" layout="fill" objectFit="cover" />
            </div>

            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
              <p className="text-xl leading-relaxed">
                Kupiłeś potężny procesor lub kartę graficzną i zastanawiasz się, czy możesz wycisnąć z nich jeszcze więcej? Odpowiedzią mogą być Overclocking (OC) i Undervolting (UV) – dwie techniki, które pozwalają na zaawansowaną optymalizację sprzętu. W tym poradniku wyjaśnimy, na czym polegają, jakie niosą korzyści i jak się za nie bezpiecznie zabrać.
              </p>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Czym jest Overclocking (OC)?</h2>
                <p><strong>Overclocking</strong>, czyli podkręcanie, to proces zwiększania częstotliwości taktowania (wyrażonej w megahercach lub gigahercach) podzespołów komputerowych – najczęściej <Link href="/blog/procesor-do-gier-intel-vs-amd" className="text-[#00bcd4] hover:underline">procesora (CPU)</Link> i <Link href="/blog/wybor-karty-graficznej-2025" className="text-[#00bcd4] hover:underline">karty graficznej (GPU)</Link> – powyżej wartości fabrycznych. Wyższe taktowanie oznacza, że komponent może wykonać więcej operacji w tej samej jednostce czasu, co bezpośrednio przekłada się na wyższą wydajność.</p>
                <h3 className="text-2xl font-semibold mt-6 mb-3 text-white">Korzyści z Overclockingu:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Więcej FPS w grach:</strong> To główny powód, dla którego gracze decydują się na OC. Nawet kilka dodatkowych klatek na sekundę może poprawić płynność i komfort rozgrywki.</li>
                  <li><strong>Szybszy rendering i praca:</strong> W zastosowaniach profesjonalnych, takich jak edycja wideo czy modelowanie 3D, podkręcony procesor może znacząco skrócić czas renderowania i przetwarzania danych.</li>
                  <li><strong>Lepsze wykorzystanie potencjału:</strong> Producenci często zostawiają pewien margines wydajności w swoich produktach. OC pozwala ten margines wykorzystać.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Czym jest Undervolting (UV)?</h2>
                <p><strong>Undervolting</strong> to proces obniżania napięcia zasilającego (wyrażonego w woltach) procesor lub kartę graficzną, przy jednoczesnym zachowaniu ich fabrycznej częstotliwości taktowania. Może się to wydawać sprzeczne z intuicją, ale producenci często stosują napięcia wyższe niż jest to absolutnie konieczne, aby zapewnić stabilność każdemu egzemplarzowi z danej serii. Undervolting pozwala znaleźć "złoty środek" dla Twojej konkretnej sztuki krzemu.</p>
                <h3 className="text-2xl font-semibold mt-6 mb-3 text-white">Korzyści z Undervoltingu:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Niższe temperatury:</strong> Mniejsze napięcie to mniej wydzielanego ciepła. To najważniejsza zaleta UV, która jest szczególnie widoczna w laptopach i kompaktowych komputerach.</li>
                  <li><strong>Cichsza praca:</strong> Niższe temperatury oznaczają, że wentylatory nie muszą pracować z tak dużą prędkością, co przekłada się na mniejszy hałas. Przeczytaj więcej o <Link href="/blog/chlodzenie-powietrzne-vs-aio" className="text-[#00bcd4] hover:underline">systemach chłodzenia</Link>.</li>
                  <li><strong>Wyższa i stabilniejsza wydajność:</strong> Paradoksalnie, UV może prowadzić do wzrostu wydajności. Nowoczesne procesory i karty graficzne automatycznie obniżają swoje taktowanie po osiągnięciu limitu temperatury (tzw. thermal throttling). Dzięki niższym temperaturom po UV, podzespół może dłużej utrzymywać wysokie zegary.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Jak zacząć? Poradnik krok po kroku</h2>
                <p>Proces OC i UV wymaga cierpliwości i metodycznego podejścia. Oto ogólny zarys:</p>
                <ol className="list-decimal list-inside space-y-4">
                    {howToSchema.step.map((step, index) => (
                        <li key={index}><strong>{step.name}:</strong> {step.text}</li>
                    ))}
                </ol>
                <p className="mt-6"><strong>Pamiętaj:</strong> Każdy procesor i karta graficzna są inne (tzw. "loteria krzemowa"). Ustawienia, które działają u kogoś innego, niekoniecznie będą stabilne na Twoim sprzęcie.</p>
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
                <p className="text-lg mb-4">Chcesz, aby zrobił to za Ciebie profesjonalista? Sprawdź nasz Pakiet PRO!</p>
                <Link href="/uslugi/pakiet-pro" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                    Zobacz Pakiet PRO
                </Link>
              </div>
            </div>
          </article>
        </TracingBeam>
      </main>
    </div>
  );
}