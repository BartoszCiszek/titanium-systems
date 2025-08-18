// pages/uslugi/index.js
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiCheck, FiTool } from "react-icons/fi";

const servicePackages = [
  {
    name: "START",
    price: "799 zł",
    description: "Solidna podstawa dla Twojego nowego komputera.",
    features: [
      "Konsultacja i analiza potrzeb",
      "Dobór podzespołów do budżetu",
      "Profesjonalny montaż",
      "Instalacja Windows + sterowników",
      "Testy stabilności",
    ],
    link: "/uslugi/pakiet-start",
    highlighted: false,
  },
  {
    name: "PRO",
    price: "1399 zł",
    description: "Dla wymagających graczy i entuzjastów.",
    features: [
      "Wszystko z pakietu START",
      "Optymalizacja BIOS (OC/UV)",
      "Optymalizacja Windows pod gry/pracę",
      "Konfiguracja profili wentylatorów",
      "Testy w docelowych aplikacjach",
    ],
    link: "/uslugi/pakiet-pro",
    highlighted: true,
  },
  {
    name: "STUDIO",
    price: "1999 zł",
    description: "Usługa 'pod klucz' dla profesjonalistów.",
    features: [
      "Wszystko z pakietu PRO",
      "Instalacja oprogramowania specjalistycznego",
      "Konfiguracja pluginów i sterowników",
      "Bezpieczne przeniesienie danych",
      "Szkolenie z obsługi stacji roboczej",
    ],
    link: "/uslugi/pakiet-studio",
    highlighted: false,
  },
];

const comparisonData = [
    { service: "Składanie komputera", standard: true, premium: true },
    { service: "Instalacja Windows + sterowników", standard: true, premium: true },
    { service: "Konsultacja i dobór podzespołów do budżetu", standard: false, premium: true },
    { service: "Testy stabilności sprzętu", standard: false, premium: true },
    { service: "Optymalizacja BIOS (OC/UV)", standard: false, premium: true },
    { service: "Konfiguracja profili wentylatorów", standard: false, premium: true },
    { service: "Optymalizacja Windows pod gry/pracę", standard: false, premium: true },
    { service: "Testy w docelowych aplikacjach", standard: false, premium: true },
    { service: "Konfiguracja specjalistycznego oprogramowania", standard: false, premium: true },
    { service: "Bezpieczne przeniesienie danych", standard: false, premium: true },
    { service: "Szkolenie z obsługi stacji roboczej", standard: false, premium: true },
    { service: "Gwarancja poprawności konfiguracji (90 dni)", standard: false, premium: true },
];

export default function Uslugi() {
  const router = useRouter();

  const handleSelectPackage = (e, pkgName) => {
    e.preventDefault();
    const targetUrl = `/uslugi?service=${pkgName}#formularz-kontaktowy`;
    router.push(targetUrl, undefined, { shallow: true, scroll: false });

    const formElement = document.getElementById('formularz-kontaktowy');
    if (formElement) {
      formElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen text-white py-12">
      <Head>
        <title>Oferta - Pakiety usług budowy komputerów | Titanium Systems</title>
        <meta name="description" content="Poznaj nasze pakiety usług: START, PRO i STUDIO oraz ofertę indywidualną. Oferujemy kompleksową budowę, serwis i optymalizację komputerów." />
        <link rel="canonical" href="https://titaniumsystems.pl/uslugi" />
      </Head>

      <main className="container mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h1 data-aos="fade-up" className="text-4xl lg:text-5xl font-bold mb-4">
            Pakiety dopasowane do Ciebie
          </h1>
          <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-gray-400 max-w-2xl mx-auto">
            Wybierz plan, który najlepiej odpowiada Twoim oczekiwaniom. Ceny dotyczą usługi, koszt części ustalamy indywidualnie.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {servicePackages.map((pkg, index) => (
            <div
              key={pkg.name}
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
              className={`
                bg-[#1c1c1c] rounded-xl p-8 flex flex-col h-full
                border
                ${pkg.highlighted ? 'border-cyan-500/50 relative shadow-[0_0_20px_rgba(4,213,103,0.2)]' : 'border-gray-800'}
              `}
            >
              <h2 className="text-2xl font-semibold mb-2">{pkg.name}</h2>
              <p className="text-4xl font-bold mb-1">od {pkg.price}</p>
              <p className="text-gray-400 mb-6 flex-grow">{pkg.description}</p>

              <ul className="space-y-3 text-gray-300 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <FiCheck className="text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <a 
                  href={`/uslugi?service=${pkg.name}#formularz-kontaktowy`}
                  onClick={(e) => handleSelectPackage(e, pkg.name)}
                  className={`
                    block text-center w-full py-3 px-6 rounded-lg font-semibold transition cursor-pointer
                    ${pkg.highlighted 
                      ? 'bg-cyan-500 hover:bg-cyan-600 text-black' 
                      : 'bg-gray-700 hover:bg-gray-600 text-white'}
                  `}
                >
                  Wybierz Pakiet
                </a>
                
                <Link 
                  href={pkg.link}
                  className="block text-center mt-4 text-sm text-gray-400 hover:text-white transition"
                >
                  Dowiedz się więcej
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Sekcja "Dlaczego takie ceny" */}
        <div className="max-w-6xl mx-auto mt-16 text-center" data-aos="fade-up">
            <a href="#tabela-porownawcza" className="text-lg text-gray-400 hover:text-[#00bcd4] transition-colors duration-300 underline underline-offset-4">
              Dlaczego takie ceny?
            </a>
        </div>


        {/* Sekcja Pakietu Indywidualnego */}
        <div className="max-w-6xl mx-auto mt-8 text-center" data-aos="fade-up">
            <div className="bg-[#1c1c1c] rounded-xl p-8 border border-gray-800">
                <FiTool className="mx-auto text-4xl mb-4 text-[#00bcd4]" />
                <h2 className="text-3xl font-bold mb-4">Potrzebujesz czegoś innego?</h2>
                <p className="text-lg text-gray-400 mb-6 max-w-3xl mx-auto">
                Masz już złożony komputer i potrzebujesz konkretnej usługi, jak serwis, optymalizacja OC/UV, czy modernizacja? A może masz specyficzne wymagania, które wykraczają poza standardowe pakiety?
                </p>
                
                <div className="mt-auto">
                    <a 
                      href={`/uslugi?service=Indywidualny#formularz-kontaktowy`}
                      onClick={(e) => handleSelectPackage(e, "Indywidualny")}
                      className="block text-center w-full max-w-xs mx-auto py-3 px-6 rounded-lg font-semibold transition cursor-pointer bg-gray-700 hover:bg-gray-600 text-white"
                    >
                      Wybierz Pakiet
                    </a>
                    <Link 
                        href="/uslugi/pakiet-indywidualny"
                        className="block text-center mt-4 text-sm text-gray-400 hover:text-white transition"
                    >
                        Dowiedz się więcej
                    </Link>
                </div>
            </div>
        </div>
        
        {/* Sekcja Tabeli Porównawczej */}
        <div id="tabela-porownawcza" className="max-w-6xl mx-auto mt-16 scroll-mt-20" data-aos="fade-up">
          <div className="bg-[#1c1c1c] rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-center mb-2 text-[#00bcd4]">
              Tabela porównawcza – „Serwis PC vs Titanium Systems”
            </h2>
            <p className="text-center text-lg text-gray-400 mb-8">
              Dlaczego u nas drożej? Bo to zupełnie inna usługa niż zwykłe składanie komputera.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="p-4">Usługa</th>
                    <th className="p-4 text-center">Zwykły serwis PC</th>
                    <th className="p-4 text-center">Titanium Systems</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr key={index} className="border-b border-gray-800">
                      <td className="p-4">{item.service}</td>
                      <td className="p-4 text-center text-2xl">
                        {item.standard ? <span className="text-green-500">✔</span> : <span className="text-red-500">❌</span>}
                      </td>
                      <td className="p-4 text-center text-2xl">
                        {item.premium ? <span className="text-green-500">✔</span> : <span className="text-red-500">❌</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}