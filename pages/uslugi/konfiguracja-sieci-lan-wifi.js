// pages/uslugi/konfiguracja-sieci-lan-wifi.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "../../components/ui/tracing-beam";

export default function KonfiguracjaSieciLanWifi() {
  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>Konfiguracja Sieci LAN i Wi-Fi Poznań | Specjalista Ubiquiti Unifi</title>
        <meta name="description" content="Projektowanie i wdrażanie stabilnych sieci przewodowych (LAN) i bezprzewodowych (Wi-Fi) w Poznaniu. Specjalizacja w niezawodnym i skalowalnym systemie Ubiquiti Unifi." />
        <link rel="canonical" href="https://titaniumsystems.pl/uslugi/konfiguracja-sieci-lan-wifi" />
      </Head>
      <main className="container mx-auto py-24 px-4">
        <TracingBeam className="px-6">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-[#00bcd4]">
              Projektowanie i Konfiguracja Sieci LAN/Wi-Fi
            </h1>
            <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
                <Image src="/images/konfiguracja-sieci-lan-wifi.webp" alt="Profesjonalny punkt dostępowy Wi-Fi zamontowany na ścianie" layout="fill" objectFit="cover" />
            </div>

            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
              <p className="text-xl leading-relaxed">
                W dzisiejszych czasach szybka i niezawodna sieć to nie luksus, a podstawa – zarówno w domu, jak i w biurze. Zrywające połączenie Wi-Fi, "martwe strefy" bez zasięgu czy niska prędkość transferu potrafią skutecznie uprzykrzyć życie i zahamować rozwój firmy. W Titanium Systems projektujemy i wdrażamy infrastrukturę sieciową, która po prostu działa.
              </p>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Dlaczego sieć "z pudełka" często nie wystarcza?</h2>
                <p>
                  Standardowy router od dostawcy internetu często nie jest w stanie pokryć stabilnym sygnałem całego mieszkania, a tym bardziej biura. Grube ściany, duża liczba urządzeń i zakłócenia z innych sieci sprawiają, że potrzebne jest bardziej profesjonalne podejście.
                </p>
              </div>

              <div>
                  <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#00bcd4]">Nasza Specjalizacja: Ekosystem Ubiquiti Unifi</h3>
                  <p>
                    Aby zapewnić naszym klientom najwyższą jakość, specjalizujemy się we wdrażaniu rozwiązań opartych o system <strong>Ubiquiti Unifi</strong>. To profesjonalny sprzęt sieciowy, który oferuje niezawodność i możliwości znane z drogich rozwiązań korporacyjnych, w cenie dostępnej dla małych firm i wymagających użytkowników domowych.
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li><strong>Centralne zarządzanie:</strong> Całą siecią (routerem, switchami, punktami dostępowymi) zarządzamy z jednego, intuicyjnego interfejsu.</li>
                    <li><strong>Skalowalność:</strong> System można łatwo rozbudowywać o kolejne urządzenia, gdy Twoje potrzeby rosną.</li>
                    <li><strong>Niezawodność:</strong> Sprzęt Unifi słynie ze swojej stabilności i wydajności, gwarantując ciągłość pracy.</li>
                    <li><strong>Zaawansowane funkcje:</strong> Oferujemy konfigurację sieci dla gości, VLAN-ów (separacja ruchu sieciowego) i szczegółowe statystyki użytkowania.</li>
                  </ul>
              </div>

              <div>
                  <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#00bcd4]">Nasz Proces Wdrożenia Sieci</h3>
                  <ol className="list-decimal list-inside mt-4 space-y-2">
                    <li><strong>Analiza i Projekt:</strong> Zaczynamy od wizji lokalnej i rozmowy, aby zrozumieć Twoje potrzeby i zidentyfikować potencjalne problemy (np. grubość ścian).</li>
                    <li><strong>Dobór Sprzętu:</strong> Na podstawie analizy dobieramy optymalne urządzenia z ekosystemu Ubiquiti Unifi, które zapewnią najlepszy zasięg i wydajność.</li>
                    <li><strong>Montaż i Konfiguracja:</strong> Profesjonalnie montujemy i konfigurujemy wszystkie elementy sieci, dbając o estetykę i najwyższe standardy.</li>
                    <li><strong>Testy i Optymalizacja:</strong> Po wdrożeniu przeprowadzamy testy wydajności i zasięgu, upewniając się, że wszystko działa bez zarzutu.</li>
                  </ol>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="#formularz-kontaktowy" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                  Potrzebujesz szybkiej i stabilnej sieci? Skontaktuj się!
              </Link>
            </div>
          </article>
        </TracingBeam>
      </main>
    </div>
  );
}