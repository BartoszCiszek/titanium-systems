// pages/uslugi/pakiet-indywidualny.js
import Head from "next/head";
import Link from "next/link";
import Image from "next/legacy/image";
import { FiCheck } from "react-icons/fi";

const PakietIndywidualny = () => {
  const features = [
    "Profesjonalna diagnostyka i szczegółowy serwis istniejącego sprzętu.",
    "Dobór i montaż konkretnych podzespołów w ramach modernizacji.",
    "Usługi optymalizacyjne (OC/UV) na gotowym komputerze.",
    "Rozwiązywanie specyficznych problemów ze sprzętem lub oprogramowaniem.",
    "Konsultacje techniczne i pomoc w doborze komponentów.",
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
            <Image src="/images/indywidualny.webp" alt="Indywidualne wsparcie techniczne" layout="fill" objectFit="cover" />
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