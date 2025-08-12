// pages/uslugi/pakiet-studio.js
import Head from "next/head";
import Link from "next/link";
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
          <p className="text-lg text-center text-gray-300 mb-8">Kompleksowa usługa dla profesjonalistów i graczy premium.</p>

          <div className="bg-[#2a2a2a] rounded-xl p-8 shadow-lg">
            <p className="text-3xl font-bold text-white text-center mb-6">Cena usługi: od 2000 zł</p>
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

export default PakietStudio;