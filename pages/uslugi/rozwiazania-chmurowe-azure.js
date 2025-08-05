// pages/uslugi/rozwiazania-chmurowe-azure.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "../../components/ui/tracing-beam";

export default function AzureCloud() {
  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>Rozwiązania Chmurowe Microsoft Azure Poznań | Titanium Systems</title>
        <meta name="description" content="Profesjonalne wdrożenia i zarządzanie usługami chmurowymi Microsoft Azure w Poznaniu. Azure Virtual Desktop, backup w chmurze, skalowalna infrastruktura dla firm." />
        <link rel="canonical" href="https://titaniumsystems.pl/uslugi/rozwiazania-chmurowe-azure" />
      </Head>

      <main className="container mx-auto py-24 px-4">
        <TracingBeam className="px-6">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-[#00bcd4]">
              Rozwiązania Chmurowe Microsoft Azure
            </h1>
            
            <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
              <Image src="/images/rozwiazania-chmurowe-azure.webp" alt="Wizualizacja chmury obliczeniowej Azure" layout="fill" objectFit="cover" />
            </div>

            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
              <p className="text-xl leading-relaxed">
                Chmura obliczeniowa zrewolucjonizowała sposób, w jaki firmy działają, oferując niespotykaną dotąd elastyczność, skalowalność i bezpieczeństwo. W Titanium Systems specjalizujemy się we wdrażaniu i zarządzaniu rozwiązaniami opartymi o Microsoft Azure – jedną z wiodących platform chmurowych na świecie, która otwiera przed Twoją firmą nowe możliwości.
              </p>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Kluczowe Korzyści z Wdrożenia Microsoft Azure</h2>
                <p>
                  Przeniesienie infrastruktury do chmury to strategiczna decyzja, która przynosi wymierne korzyści biznesowe.
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                    <li><strong>Skalowalność i Elastyczność:</strong> Płać tylko za zasoby, których faktycznie używasz. Azure pozwala na błyskawiczne skalowanie mocy obliczeniowej w górę lub w dół, w zależności od aktualnego zapotrzebowania Twojej firmy.</li>
                    <li><strong>Redukcja Kosztów:</strong> Wyeliminuj potrzebę inwestowania w drogi, fizyczny sprzęt serwerowy i jego utrzymanie. Model subskrypcyjny (pay-as-you-go) pozwala na optymalizację wydatków na IT.</li>
                    <li><strong>Globalny Zasięg i Dostępność:</strong> Twoje aplikacje i dane są dostępne z dowolnego miejsca na świecie, z gwarancją wysokiej dostępności (SLA) na poziomie 99.9%.</li>
                    <li><strong>Bezpieczeństwo na Najwyższym Poziomie:</strong> Microsoft inwestuje miliardy dolarów w zabezpieczenia. Zyskujesz dostęp do zaawansowanych narzędzi ochrony, monitoringu i zgodności z regulacjami (m.in. RODO).</li>
                </ul>
              </div>

              <div>
                  <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#00bcd4]">Nasze Usługi w Zakresie Microsoft Azure</h3>
                  <p>
                    Pomagamy firmom w pełni wykorzystać potencjał chmury Azure, oferując kompleksowe wsparcie w kluczowych obszarach:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li><strong>Azure Virtual Desktop (AVD):</strong> Wdrażamy nowoczesne środowiska pracy zdalnej. Twoi pracownicy mogą bezpiecznie logować się do wirtualnych pulpitów z dowolnego urządzenia, mając dostęp do wszystkich firmowych aplikacji i danych.</li>
                    <li><strong>Backup i Disaster Recovery:</strong> Projektujemy i wdrażamy niezawodne strategie tworzenia kopii zapasowych i odtwarzania awaryjnego w chmurze, chroniąc Twój biznes przed utratą danych.</li>
                    <li><strong>Migracja Infrastruktury do Chmury:</strong> Planujemy i przeprowadzamy bezpieczną migrację Twoich serwerów, aplikacji i baz danych do środowiska Azure.</li>
                    <li><strong>Zarządzanie i Optymalizacja:</strong> Oferujemy stałe wsparcie w zarządzaniu Twoją infrastrukturą w Azure, dbając o jej wydajność, bezpieczeństwo i optymalizację kosztów.</li>
                  </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="#formularz-kontaktowy" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                  Przenieś swój biznes do chmury – zapytaj o Azure!
              </Link>
            </div>
          </article>
        </TracingBeam>
      </main>
    </div>
  );
}