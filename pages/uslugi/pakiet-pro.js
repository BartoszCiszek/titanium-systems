// pages/uslugi/pakiet-pro.js
import Head from "next/head";
import Link from "next/link";
import Image from "next/legacy/image";
import { FiCheck } from "react-icons/fi";

const PakietPro = () => {
  const features = [
    "Wszystkie elementy z Pakietu START.",
    "Zaawansowana optymalizacja BIOS/UEFI (Overclocking / Undervolting).",
    "Precyzyjna optymalizacja systemu Windows pod konkretne zastosowanie (gry, praca z wideo itp.).",
    "Indywidualna konfiguracja profili wentylatorów dla optymalnej kultury pracy.",
    "Rozszerzone testy wydajności w Twoich ulubionych grach i docelowych aplikacjach.",
  ];

  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>Pakiet PRO - Zaawansowana Budowa Komputera | Titanium Systems</title>
        <meta name="description" content="Pakiet PRO dla wymagających użytkowników i graczy. Obejmuje m.in. overclocking, zaawansowaną optymalizację i testy w docelowych aplikacjach." />
        <link rel="canonical" href="https://titaniumsystems.pl/uslugi/pakiet-pro" />
      </Head>
      <main className="container mx-auto py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-[#00bcd4]">Pakiet PRO</h1>
          <p className="text-lg text-center text-gray-300 mb-12">Dla wymagających użytkowników, którzy oczekują maksimum wydajności.</p>

          <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
            <Image src="/images/pro.webp" alt="Overclocking i Undervolting komputera" layout="fill" objectFit="cover" />
          </div>

          <div>
            <p className="text-3xl font-bold text-white text-center mb-6">Cena usługi: od 1400 zł</p>
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
              <p>Pakiet PRO jest stworzony dla entuzjastów, którzy chcą wycisnąć ze swojego sprzętu absolutne maksimum. Jeśli nie zadowalają Cię standardowe ustawienia i chcesz, aby Twój komputer był szybszy, chłodniejszy i cichszy, to jest to opcja dla Ciebie. Idealny dla:</p>
              <ul className="list-disc list-inside">
                <li><strong>Wymagających graczy:</strong> dla których liczy się każda klatka na sekundę (FPS) i najniższe opóźnienia.</li>
                <li><strong>Twórców treści:</strong> streamerów, youtuberów i grafików, którzy potrzebują maksymalnej mocy do szybkiego renderowania i płynnej pracy z dużymi plikami.</li>
                <li><strong>Pasjonatów technologii:</strong> którzy cenią sobie precyzyjnie dostrojony i zoptymalizowany sprzęt.</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mt-10">Na czym polega optymalizacja?</h3>
              <p>W ramach Pakietu PRO nie tylko składamy komputer. Wchodzimy głębiej w jego ustawienia, aby dostosować go do Twoich potrzeb. <strong>Overclocking (OC)</strong> pozwala zwiększyć taktowanie procesora i karty graficznej, co przekłada się na wyższą wydajność w grach i aplikacjach. Z kolei <strong>Undervolting (UV)</strong> obniża napięcie zasilające podzespoły, co skutkuje niższymi temperaturami i mniejszym zużyciem energii, często przy zachowaniu, a nawet poprawie wydajności. Dodatkowo, optymalizujemy system operacyjny, wyłączając zbędne procesy i usługi, oraz konfigurujemy krzywe wentylatorów, aby komputer był cichy w spoczynku i wydajnie chłodzony pod obciążeniem.</p>

              <h3 className="text-2xl font-bold text-white mt-10">Dlaczego warto?</h3>
              <p>Ręczna optymalizacja to proces czasochłonny i wymagający dużej wiedzy. Wybierając Pakiet PRO, powierzasz swój sprzęt ekspertowi, który bezpiecznie podniesie jego wydajność, dbając jednocześnie o stabilność i kulturę pracy. Zyskujesz komputer, który jest nie tylko "złożony", ale "dopieszczony" w każdym detalu – gotowy do najcięższych zadań i najbardziej wymagających gier. To różnica między posiadaniem szybkiego samochodu a posiadaniem szybkiego samochodu idealnie ustawionego na tor.</p>
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

export default PakietPro;