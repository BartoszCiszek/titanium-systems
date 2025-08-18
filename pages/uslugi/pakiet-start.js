// pages/uslugi/pakiet-start.js
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";

const PakietStart = () => {
  const features = [
    "Konsultacja i szczegółowa analiza potrzeb.",
    "Indywidualny dobór podzespołów do Twojego budżetu i celu.",
    "Profesjonalny montaż z dbałością o estetykę (cable management).",
    "Instalacja systemu Windows i wszystkich niezbędnych sterowników.",
    "Podstawowe testy stabilności i wydajności.",
  ];

  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>Pakiet START - Budowa Komputera | Titanium Systems</title>
        <meta name="description" content="Pakiet START to idealne rozwiązanie dla osób szukających solidnego, dopasowanego do budżetu komputera PC. Zobacz, co wchodzi w skład usługi." />
        <link rel="canonical" href="https://titaniumsystems.pl/uslugi/pakiet-start" />
      </Head>
      <main className="container mx-auto py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-[#00bcd4]">Pakiet START</h1>
          <p className="text-lg text-center text-gray-300 mb-12">Solidny komputer w idealnie dopasowanym budżecie.</p>

          {/* komponent Image */}
          <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
            <Image 
              src="/images/start.webp" 
              alt="Składanie komputera" 
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div>
            <p className="text-3xl font-bold text-white text-center mb-6">Cena usługi: od 799 zł</p>
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
              <p>Pakiet START to idealne rozwiązanie dla osób, które potrzebują nowego, niezawodnego komputera, ale nie chcą zagłębiać się w skomplikowane detale techniczne. Jest to doskonały wybór dla:</p>
              <ul className="list-disc list-inside">
                <li><strong>Użytkowników domowych:</strong> do przeglądania internetu, multimediów i podstawowych zadań.</li>
                <li><strong>Uczniów i studentów:</strong> do nauki, pisania prac i zdalnych zajęć.</li>
                <li><strong>Graczy z ograniczonym budżetem:</strong> którzy chcą zacząć przygodę z gamingiem i potrzebują solidnej bazy do przyszłej rozbudowy.</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mt-10">Jak wygląda proces?</h3>
              <p>Cały proces jest prosty i przejrzysty. Zaczynamy od rozmowy, podczas której poznajemy Twoje oczekiwania i maksymalny budżet na podzespoły. Następnie, na podstawie tych informacji, tworzymy listę komponentów, która gwarantuje najlepszy stosunek ceny do wydajności. Po Twojej akceptacji zamawiamy części i przystępujemy do profesjonalnego montażu, dbając o estetykę i optymalny przepływ powietrza w obudowie. Na koniec instalujemy system operacyjny wraz ze wszystkimi sterownikami i przeprowadzamy testy, aby mieć pewność, że komputer jest stabilny i gotowy do pracy od zaraz.</p>

              <h3 className="text-2xl font-bold text-white mt-10">Dlaczego warto?</h3>
              <p>Wybierając Pakiet START, oszczędzasz czas i nerwy. Zamiast spędzać godziny na porównywaniu setek podzespołów, dostajesz od nas gotową propozycję, która jest wynikiem naszego doświadczenia i wiedzy. Masz pewność, że wszystkie komponenty będą ze sobą kompatybilne, a całość zostanie złożona przez profesjonalistę. To inwestycja w spokój i sprzęt, który posłuży Ci przez lata.</p>
              
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

export default PakietStart;