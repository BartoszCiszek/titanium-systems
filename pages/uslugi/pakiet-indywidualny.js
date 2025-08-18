// pages/uslugi/pakiet-indywidualny.js
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";

const PakietIndywidualny = () => {
  const features = [
    "Profesjonalna diagnostyka i szczegółowy serwis istniejącego sprzętu.",
    "Dobór i montaż konkretnych podzespołów w ramach modernizacji (upgrade).",
    "Wymiana dysku HDD na SSD wraz z klonowaniem lub czystą instalacją systemu.",
    "Zwiększenie ilości pamięci RAM.",
    "Usługi optymalizacyjne (Overclocking/Undervolting) na gotowym komputerze w celu zwiększenia wydajności i obniżenia temperatur.",
    "Profesjonalne czyszczenie komputera z kurzu i wymiana past termoprzewodzących na procesorze i karcie graficznej.",
    "Poprawa organizacji okablowania (cable management) w celu poprawy estetyki i przepływu powietrza.",
    "Rozwiązywanie specyficznych problemów ze sprzętem (np. niestabilność, przegrzewanie się) lub oprogramowaniem.",
    "Instalacja i konfiguracja oprogramowania specjalistycznego.",
    "Bezpieczne przenoszenie danych między komputerami.",
    "Konfiguracja sieci domowej i serwerów NAS.",
    "Konsultacje techniczne i pomoc w doborze komponentów do samodzielnego montażu.",
    "Pełna elastyczność w zakresie świadczonych usług."
  ];

  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>Pakiet Indywidualny - Usługi na Miarę | Titanium Systems</title>
        <meta name="description" content="Masz już komputer lub specyficzne wymagania? Skorzystaj z naszych usług w ramach Pakietu Indywidualnego. Pełna elastyczność i profesjonalne doradztwo." />
        <link rel="canonical" href="https://titaniumsystems.pl/uslugi/pakiet-indywidualny" />
      </Head>
      <main className="container mx-auto py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-[#00bcd4]">Pakiet Indywidualny</h1>
          <p className="text-lg text-center text-gray-300 mb-12">Usługi idealnie dopasowane do Twoich unikalnych potrzeb.</p>
          
          <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
            <Image 
              src="/images/indywidualny.webp" 
              alt="Indywidualne wsparcie techniczne" 
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div>
            <p className="text-3xl font-bold text-white text-center mb-6">Cena: Wycena indywidualna</p>
            <h2 className="text-2xl font-semibold text-white mb-4">Przykładowy zakres usług:</h2>
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
              <p>Pakiet Indywidualny to elastyczne rozwiązanie stworzone z myślą o klientach, którzy nie potrzebują budowy komputera od zera, ale szukają profesjonalnego wsparcia w konkretnym zakresie. Jest to idealny wybór, jeśli:</p>
              <ul className="list-disc list-inside">
                <li>Posiadasz już komputer, ale chcesz go zmodernizować, przyspieszyć lub zdiagnozować.</li>
                <li>Potrzebujesz tylko jednej, konkretnej usługi, np. profesjonalnego montażu podzespołów, które już zakupiłeś.</li>
                <li>Chcesz przeprowadzić zaawansowany Overclocking lub Undervolting na swoim sprzęcie.</li>
                <li>Masz nietypowe wymagania lub budujesz bardzo specjalistyczną stację roboczą i potrzebujesz konsultacji.</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mt-10">Jak to działa?</h3>
              <p>Skontaktuj się z nami przez formularz, opisując dokładnie, czego potrzebujesz. Na podstawie Twoich wymagań przygotujemy indywidualną wycenę i plan działania. Niezależnie od tego, czy chodzi o prostą wymianę pasty termoprzewodzącej, czy kompleksową modernizację i optymalizację istniejącej jednostki, podchodzimy do każdego zlecenia z tą samą starannością i profesjonalizmem.</p>

              <h3 className="text-2xl font-bold text-white mt-10">Gwarancja i wsparcie</h3>
              <p className="text-gray-300"><strong>Gwarancja na usługę:</strong> 90 dni od odbioru na stabilność i poprawność konfiguracji w ramach wykonanej usługi. Obejmuje to bezpłatne poprawki konfiguracji wykonanej przez nas (np. ustawienia BIOS/UEFI, profil OC/UV, krzywe wentylatorów).</p>
              <p className="text-gray-300 mt-4"><strong>Wyłączenia gwarancji na usługę:</strong></p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mt-2">
                <li>Usterki sprzętowe (te są objęte gwarancją producenta).</li>
                <li>Samodzielne modyfikacje ustawień BIOS/UEFI po odbiorze sprzętu.</li>
                <li>Instalacja lub użycie oprogramowania, które nadpisuje lub zmienia wprowadzone przeze mnie ustawienia (np. narzędzia do auto-tuningu, menedżery profili).</li>
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

export default PakietIndywidualny;