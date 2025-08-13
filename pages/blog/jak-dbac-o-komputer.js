// pages/blog/jak-dbac-o-komputer.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "../../components/ui/tracing-beam";

export default function JakDbacOKomputer() {
  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>Jak dbać o komputer? Kompletny przewodnik po czyszczeniu | Titanium Systems</title>
        <meta name="description" content="Praktyczne porady dotyczące konserwacji i czyszczenia komputera, które pomogą utrzymać niskie temperatury, wysoką wydajność i przedłużą żywotność podzespołów." />
        <link rel="canonical" href="https://titaniumsystems.pl/blog/jak-dbac-o-komputer" />
      </Head>
      
      <main className="container mx-auto py-24 px-4">
        <TracingBeam className="px-6">
          <article className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <p className="text-sm text-[#00bcd4] font-semibold">Poradniki</p>
              <h1 className="text-4xl lg:text-5xl font-bold mt-2">
                Jak dbać o komputer? Kompletny przewodnik po czyszczeniu i konserwacji
              </h1>
              <p className="text-gray-400 mt-4">Opublikowano: 14 sierpnia 2025</p>
            </header>
            
            <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
              <Image src="/images/przyspieszanie-komputera.webp" alt="Czyszczenie komputera sprężonym powietrzem" layout="fill" objectFit="cover" />
            </div>

            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
              <p className="text-xl leading-relaxed">
                Komputer, podobnie jak samochód, wymaga regularnej konserwacji, aby działał sprawnie i niezawodnie przez lata. Zaniedbanie czyszczenia prowadzi do gromadzenia się kurzu, co z kolei powoduje wyższe temperatury, głośniejszą pracę i spadek wydajności. W tym przewodniku pokażemy, jak kompleksowo zadbać o swój sprzęt.
              </p>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Dlaczego regularne czyszczenie jest tak ważne?</h2>
                <p>Kurz jest największym wrogiem elektroniki. Działa jak izolator, utrudniając odprowadzanie ciepła z radiatorów procesora i karty graficznej. Kiedy podzespoły się przegrzewają, aktywuje się mechanizm obronny zwany <strong>thermal throttlingiem</strong>, który obniża ich taktowanie (a co za tym idzie, wydajność), aby zapobiec uszkodzeniu. Regularne czyszczenie zapewnia:</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li><strong>Niższe temperatury:</strong> Optymalne chłodzenie pozwala komponentom pracować z pełną mocą.</li>
                  <li><strong>Wyższą wydajność:</strong> Brak throttlingu oznacza stabilną, wysoką liczbę klatek na sekundę w grach i szybkie działanie aplikacji.</li>
                  <li><strong>Cichszą pracę:</strong> Czyste radiatory sprawiają, że wentylatory nie muszą wchodzić na wysokie obroty, aby utrzymać odpowiednią temperaturę.</li>
                  <li><strong>Dłuższą żywotność podzespołów:</strong> Praca w niższych temperaturach znacząco wydłuża życie elektroniki.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Niezbędne narzędzia</h2>
                <p>Zanim zaczniesz, przygotuj kilka podstawowych narzędzi:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Sprężone powietrze w puszce:</strong> Najlepsze do usuwania kurzu z trudno dostępnych miejsc.</li>
                    <li><strong>Miękki pędzelek:</strong> Idealny do delikatnego usuwania kurzu z wentylatorów i płyty głównej.</li>
                    <li><strong>Ściereczka z mikrofibry:</strong> Do czyszczenia obudowy i paneli bocznych.</li>
                    <li><strong>Alkohol izopropylowy (IPA) 99%:</strong> Niezbędny do czyszczenia starej pasty termoprzewodzącej.</li>
                    <li><strong>Nowa pasta termoprzewodząca:</strong> Wysokiej jakości pasta, np. Thermal Grizzly Kryonaut lub Arctic MX-4.</li>
                    <li><strong>Śrubokręt krzyżakowy.</strong></li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Czyszczenie komputera krok po kroku</h2>
                <ol className="list-decimal list-inside space-y-4">
                  <li><strong>Odłącz zasilanie:</strong> Całkowicie odłącz komputer od prądu i odepnij wszystkie kable.</li>
                  <li><strong>Otwórz obudowę:</strong> Zdejmij panele boczne, aby uzyskać dostęp do wnętrza.</li>
                  <li><strong>Usuń kurz:</strong> Używając krótkich psiknięć sprężonego powietrza, wydmuchaj kurz z radiatorów, wentylatorów, zasilacza i dna obudowy. Zawsze rób to w dobrze wentylowanym pomieszczeniu, najlepiej na zewnątrz. Przytrzymaj wentylatory palcem, aby nie kręciły się zbyt szybko podczas przedmuchiwania.</li>
                  <li><strong>Doczyść pędzelkiem:</strong> Użyj pędzelka do usunięcia uporczywego kurzu z łopatek wentylatorów i zakamarków na płycie głównej.</li>
                  <li><strong>Filtry przeciwkurzowe:</strong> Wyjmij i dokładnie umyj filtry przeciwkurzowe pod bieżącą wodą. Upewnij się, że są całkowicie suche, zanim zamontujesz je z powrotem.</li>
                </ol>
              </div>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Kiedy i jak wymienić pastę termoprzewodzącą?</h2>
                <p>Pastę termoprzewodzącą na procesorze i karcie graficznej zaleca się wymieniać co 2-3 lata. Z czasem traci ona swoje właściwości, wysycha i przestaje efektywnie przewodzić ciepło. Jeśli zauważysz, że temperatury Twojego CPU lub GPU są znacznie wyższe niż kiedyś, to znak, że pora na wymianę.</p>
                <p className="mt-4"><strong>Proces wymiany pasty (CPU):</strong></p>
                <ol className="list-decimal list-inside space-y-2">
                    <li>Delikatnie zdemontuj chłodzenie procesora.</li>
                    <li>Za pomocą wacika lub ściereczki nasączonej alkoholem izopropylowym, dokładnie usuń starą pastę z procesora i podstawy chłodzenia.</li>
                    <li>Nałóż niewielką ilość nowej pasty (wielkości ziarnka grochu) na środek procesora.</li>
                    <li>Równomiernie zamontuj chłodzenie z powrotem. Docisk radiatora sam rozprowadzi pastę.</li>
                </ol>
                <p className="mt-4"><strong>Uwaga:</strong> Wymiana pasty na karcie graficznej jest bardziej skomplikowana i wymaga demontażu całego układu chłodzenia. Jeśli nie czujesz się pewnie, lepiej powierzyć to zadanie specjaliście.</p>
              </div>
              
              <div className="text-center mt-16 border-t border-gray-700 pt-8">
                <p className="text-lg mb-4">Twój komputer wymaga profesjonalnego serwisu? Jesteśmy do Twojej dyspozycji!</p>
                <Link href="/uslugi/serwis-komputerow" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                    Sprawdź naszą ofertę serwisową
                </Link>
              </div>
            </div>
          </article>
        </TracingBeam>
      </main>
    </div>
  );
}