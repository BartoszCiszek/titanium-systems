// pages/uslugi/pakiet-start.js
import Head from "next/head";
import Link from "next/link";
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
          <p className="text-lg text-center text-gray-300 mb-8">Solidny komputer w idealnie dopasowanym budżecie.</p>
          
          <div className="bg-[#2a2a2a] rounded-xl p-8 shadow-lg">
            <p className="text-3xl font-bold text-white text-center mb-6">Cena usługi: od 900 zł</p>
            <h2 className="text-2xl font-semibold text-white mb-4">Zakres usługi:</h2>
            <ul className="space-y-3 text-gray-300">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <FiCheck className="text-green-400 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
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