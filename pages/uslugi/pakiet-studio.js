// pages/uslugi/pakiet-studio.js
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";

const PakietStudio = () => {
  const features = [
    "Wszystkie elementy z Pakietu PRO.",
    "Instalacja i pełna konfiguracja oprogramowania specjalistycznego (np. Adobe Creative Cloud, DaVinci Resolve).",
    "Konfiguracja profesjonalnych pluginów i sterowników (np. interfejsy audio, tablety graficzne).",
    "Bezpieczne przeniesienie danych z Twojego poprzedniego komputera.",
    "Krótkie szkolenie z obsługi nowej stacji roboczej i jej zoptymalizowanych funkcji.",
  ];

  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>Pakiet STUDIO - Profesjonalne Stacje Robocze | Titanium Systems</title>
        <meta name="description" content="Pakiet STUDIO dla profesjonalistów i graczy premium. Pełna konfiguracja oprogramowania, przeniesienie danych i szkolenie z obsługi." />
        <link rel="canonical" href="https://titaniumsystems.pl/uslugi/pakiet-studio" />
      </Head>
      <main className="container mx-auto py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-[#00bcd4]">Pakiet STUDIO</h1>
          <p className="text-lg text-center text-gray-300 mb-12">Kompleksowa usługa dla profesjonalistów i graczy premium.</p>
          
          {/* komponent Image */}
          <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
            <Image 
              src="/images/studio.webp" 
              alt="Profesjonalna stacja robocza" 
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div>
            <p className="text-3xl font-bold text-white text-center mb-6">Cena usługi: od 1999 zł</p>
            <h2 className="text-2xl font-semibold text-white mb-4">Co wchodzi w skład pakietu?</h2>
            <ul className="space-y-3 text-gray-300 mb-8">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <FiCheck className="text-green-400 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-6">
              <h3 className="text-2xl font-bold text-white mt-10">Dla kogo jest ten pakiet?</h3>
              <p>Pakiet STUDIO to nasza najbardziej kompleksowa usługa, stworzona z myślą o profesjonalistach, dla których komputer jest głównym narzędziem pracy. To rozwiązanie "pod klucz", które minimalizuje czas potrzebny na konfigurację i pozwala od razu skupić się na kreatywnych zadaniach. Jest to idealny wybór dla:</p>
              <ul className="list-disc list-inside">
                <li><strong>Montażystów wideo i filmowców:</strong> którzy potrzebują bezkompromisowej wydajności w programach takich jak DaVinci Resolve czy Adobe Premiere Pro.</li>
                <li><strong>Producentów muzycznych:</strong> dla których kluczowa jest niska latencja i idealna współpraca z interfejsami audio i oprogramowaniem DAW.</li>
                <li><strong>Architektów i projektantów 3D:</strong> pracujących w programach CAD/BIM, gdzie stabilność i moc obliczeniowa są priorytetem.</li>
                <li><strong>Graczy premium:</strong> którzy chcą mieć nie tylko najszybszy sprzęt, ale także gotowe, w pełni skonfigurowane środowisko do gry i streamingu.</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mt-10">Co zyskujesz dodatkowo?</h3>
              <p>W Pakiecie STUDIO idziemy o krok dalej niż w Pakiecie PRO. Oprócz perfekcyjnego złożenia i optymalizacji sprzętowej, zajmujemy się całym ekosystemem oprogramowania. Instalujemy i konfigurujemy wszystkie niezbędne aplikacje, wtyczki i sterowniki do urządzeń peryferyjnych (np. tablety graficzne, monitory, interfejsy audio). Co więcej, bezpiecznie przenosimy Twoje dane – projekty, pliki i ustawienia – z poprzedniego komputera, dzięki czemu nowa stacja robocza jest gotowa do pracy od pierwszej minuty. Na koniec przeprowadzamy krótkie szkolenie, abyś mógł w pełni wykorzystać potencjał nowego sprzętu.</p>

              <h3 className="text-2xl font-bold text-white mt-10">Dlaczego warto?</h3>
              <p>Inwestując w Pakiet STUDIO, inwestujesz w swój czas i komfort. Minimalizujesz przestoje w pracy związane ze zmianą sprzętu i unikasz frustracji związanej z konfiguracją skomplikowanego oprogramowania. Otrzymujesz w pełni przygotowane, zoptymalizowane i gotowe do działania narzędzie, które pozwoli Ci realizować projekty szybciej i wydajniej. To usługa, która pozwala Ci robić to, co kochasz, bez martwienia się o technologię, która za tym stoi.</p>

              <h3 className="text-2xl font-bold text-white mt-10">Gwarancja i wsparcie</h3>
              <p className="text-gray-300"><strong>Gwarancja na usługę:</strong> 90 dni od odbioru na stabilność i poprawność konfiguracji w ramach wykonanej usługi. Obejmuje to bezpłatne poprawki konfiguracji wykonanej przez nas (np. ustawienia BIOS/UEFI, profil OC/UV, krzywe wentylatorów).</p>
              <p className="text-gray-300 mt-4"><strong>Wyłączenia gwarancji na usługę:</strong></p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mt-2">
                <li>Usterki sprzętowe (te są objęte gwarancją producenta).</li>
                <li>Samodzielne modyfikacje ustawień BIOS/UEFI po odbiorze sprzętu.</li>
                <li>Instalacja lub użycie oprogramowania, które nadpisuje lub zmienia wprowadzone przez nas ustawienia (np. narzędzia do auto-tuningu, menedżery profili).</li>
                <li>Aktualizacje systemu lub sterowników, które wprowadzają zmiany w konfiguracji.</li>
                <li>Zmiana komponentów sprzętowych po wykonaniu usługi.</li>
              </ul>
              <p className="text-gray-300 mt-4"><strong>Korekty preferencyjne (nie wynikające z wady):</strong></p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mt-2">
                <li><strong>1 bezpłatna modyfikacja</strong> w okresie gwarancji (np. drobna zmiana krzywych wentylatorów, dostosowanie ustawień).</li>
                <li>Kolejne korekty są wyceniane indywidualnie, po wcześniejszej akceptacji.</li>
              </ul>
            </div>

            <div className="text-center mt-10">
              <Link href="#formularz-kontaktowy" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                  Zapytaj o wycenę
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PakietStudio;