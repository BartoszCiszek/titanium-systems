// pages/uslugi/wirtualizacja.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "../../components/ui/tracing-beam";

export default function Wirtualizacja() {
  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>Wirtualizacja i Praca Zdalna Poznań | VMware, Hyper-V | Titanium Systems</title>
        <meta name="description" content="Usługi wirtualizacji serwerów i stacji roboczych w Poznaniu. Optymalizacja zasobów i wdrażanie wydajnych środowisk do pracy zdalnej." />
        <link rel="canonical" href="https://titaniumsystems.pl/uslugi/wirtualizacja" />
      </Head>

      <main className="container mx-auto py-24 px-4">
        <TracingBeam className="px-6">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-[#00bcd4]">
              Wirtualizacja i Efektywna Praca Zdalna
            </h1>
            
            <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
              <Image src="/images/wirtualizacja.webp" alt="Wizualizacja maszyn wirtualnych" layout="fill" objectFit="cover" />
            </div>

            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
              <p className="text-xl leading-relaxed">
                Wirtualizacja to technologia, która pozwala na uruchomienie wielu niezależnych systemów operacyjnych i aplikacji na jednym, fizycznym serwerze lub komputerze. To rewolucyjne podejście, które pozwala firmom i zaawansowanym użytkownikom na maksymalne wykorzystanie zasobów sprzętowych, zwiększenie bezpieczeństwa i elastyczności.
              </p>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Kluczowe korzyści z wirtualizacji</h2>
                <ul className="list-disc list-inside mt-4 space-y-2">
                    <li><strong>Oszczędność kosztów:</strong> Zamiast kupować i utrzymywać kilka osobnych maszyn fizycznych, możesz uruchomić wszystko, czego potrzebujesz, na jednym, wydajnym serwerze. To mniejsze zużycie energii i niższe koszty sprzętu.</li>
                    <li><strong>Izolacja i bezpieczeństwo:</strong> Każda maszyna wirtualna działa w całkowicie odizolowanym środowisku. To idealne rozwiązanie do testowania oprogramowania, uruchamiania różnych usług czy separowania systemów firmowych bez ryzyka wzajemnego wpływu.</li>
                    <li><strong>Elastyczność i zarządzanie:</strong> Błyskawicznie twórz, kopiuj i przywracaj całe systemy operacyjne za pomocą tzw. "snapshotów" (migawki). Zarządzanie wieloma systemami staje się proste i scentralizowane.</li>
                    <li><strong>Wydajna praca zdalna:</strong> Przygotujemy dla Ciebie serwer wirtualny (np. z Windows Server), który umożliwi bezpieczny i szybki dostęp do pulpitu zdalnego dla Ciebie lub Twoich pracowników z dowolnego miejsca na świecie.</li>
                </ul>
              </div>

              <div>
                  <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#00bcd4]">Nasze Usługi w Zakresie Wirtualizacji</h3>
                  <p>
                    Posiadamy doświadczenie w pracy z wiodącymi platformami wirtualizacyjnymi:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li><strong>VMware:</strong> Lider na rynku wirtualizacji, oferujący zaawansowane i niezawodne rozwiązania dla firm.</li>
                    <li><strong>Microsoft Hyper-V:</strong> Zintegrowane z systemami Windows Server, doskonałe rozwiązanie dla środowisk opartych o technologie Microsoft.</li>
                    <li><strong>Proxmox:</strong> Potężna platforma open-source, łącząca wirtualizację i konteneryzację, idealna dla firm ceniących elastyczność.</li>
                  </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="#formularz-kontaktowy" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                  Zoptymalizuj swoje zasoby – zapytaj o wirtualizację!
              </Link>
            </div>
          </article>
        </TracingBeam>
      </main>
    </div>
  );
}