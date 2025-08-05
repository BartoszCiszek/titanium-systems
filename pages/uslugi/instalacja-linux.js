// pages/uslugi/instalacja-linux.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "../../components/ui/tracing-beam";

export default function InstalacjaLinux() {
  return (
    <div className="min-h-screen bg-[#212121] text-white">
      <Head>
        <title>Instalacja Linux Poznań | Ubuntu, Mint, Debian | Titanium Systems</title>
        <meta name="description" content="Profesjonalna instalacja i konfiguracja dystrybucji Linux w Poznaniu. Przygotowanie środowiska do pracy, nauki lub jako serwer domowy." />
        <link rel="canonical" href="https://titaniumsystems.pl/uslugi/instalacja-linux" />
      </Head>
      <main className="container mx-auto py-24 px-4">
        <TracingBeam className="px-6">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-[#00bcd4]">
              Profesjonalna Instalacja Systemu Linux
            </h1>

            <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
              <Image src="/images/linux.webp" alt="Terminal systemu Linux" layout="fill" objectFit="cover" />
            </div>
            
            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
              <p className="text-xl leading-relaxed">
                Linux to potężny, bezpieczny i darmowy system operacyjny, który oferuje niezrównaną elastyczność. Chcesz spróbować alternatywy dla Windowsa lub MacOS? Potrzebujesz stabilnego środowiska do programowania, a może chcesz zamienić stary komputer w wydajny serwer domowy? Pomożemy Ci wejść w świat Linuxa.
              </p>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Dlaczego warto wybrać Linux?</h2>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li><strong>Bezpieczeństwo:</strong> Architektura Linuxa sprawia, że jest on znacznie mniej podatny na wirusy i złośliwe oprogramowanie.</li>
                  <li><strong>Darmowe oprogramowanie:</strong> Zyskujesz dostęp do tysięcy darmowych, otwartych aplikacji – od pakietów biurowych po zaawansowane narzędzia graficzne.</li>
                  <li><strong>Wydajność:</strong> Linux jest znany ze swojej lekkości i potrafi przywrócić do życia nawet starsze komputery.</li>
                  <li><strong>Elastyczność:</strong> Niezliczone dystrybucje i środowiska graficzne pozwalają dostosować wygląd i działanie systemu idealnie do swoich potrzeb.</li>
                  <li><strong>Idealny dla programistów:</strong> Wbudowane narzędzia, terminal i natywne wsparcie dla wielu technologii sprawiają, że to wymarzone środowisko dla deweloperów.</li>
                </ul>
              </div>
              
              <div>
                  <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#00bcd4]">Co oferujemy w ramach usługi?</h3>
                  <p>
                    Nasza usługa to nie tylko instalacja. To kompleksowe przygotowanie systemu do Twoich konkretnych zadań.
                  </p>
                  <ol className="list-decimal list-inside mt-4 space-y-2">
                    <li><strong>Dobór dystrybucji:</strong> Doradzimy, która dystrybucja będzie dla Ciebie najlepsza – przyjazny dla początkujących <strong>Ubuntu</strong> lub <strong>Mint</strong>, a może stabilny <strong>Debian</strong> dla serwera?</li>
                    <li><strong>Instalacja systemu:</strong> Zainstalujemy Linux obok Windowsa (dual boot) lub jako jedyny system na dysku.</li>
                    <li><strong>Konfiguracja środowiska:</strong> Zainstalujemy i skonfigurujemy wybrane przez Ciebie środowisko graficzne (GNOME, KDE, XFCE itp.).</li>
                    <li><strong>Instalacja oprogramowania:</strong> Przygotujemy system do pracy, instalując niezbędne programy, kodeki multimedialne i narzędzia.</li>
                    <li><strong>Podstawowe szkolenie:</strong> Pokażemy Ci, jak poruszać się po nowym systemie, jak instalować aplikacje i gdzie szukać pomocy.</li>
                  </ol>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="#formularz-kontaktowy" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                  Chcesz spróbować Linuxa? Pomożemy!
              </Link>
            </div>
          </article>
        </TracingBeam>
      </main>
    </div>
  );
}