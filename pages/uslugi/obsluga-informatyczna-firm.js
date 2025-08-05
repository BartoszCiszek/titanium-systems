// pages/uslugi/obsluga-informatyczna-firm.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "../../components/ui/tracing-beam";

export default function ObslugaInformatycznaFirm() {
  return (
    <div className="min-h-screen bg-[#212121] text-white">
      <Head>
        <title>Stała Obsługa Informatyczna Firm Poznań | Outsourcing IT</title>
        <meta name="description" content="Kompleksowa opieka informatyczna (outsourcing IT) dla firm w Poznaniu. Zarządzanie siecią, serwerami, backupem i bezpieczeństwem. Twój zewnętrzny, profesjonalny dział IT." />
        <link rel="canonical" href="https://titaniumsystems.pl/uslugi/obsluga-informatyczna-firm" />
      </Head>
      <main className="container mx-auto py-24 px-4">
        <TracingBeam className="px-6">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-[#00bcd4]">
              Stała Obsługa Informatyczna Firm (Outsourcing IT)
            </h1>

            <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
                <Image src="/images/obsluga-informatyczna-firm.webp" alt="Specjalista IT analizujący infrastrukturę sieciową firmy" layout="fill" objectFit="cover" />
            </div>

            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
              <p className="text-xl leading-relaxed">
                Zarządzanie infrastrukturą IT to zadanie wymagające czasu, wiedzy i ciągłego zaangażowania. Dla wielu małych i średnich firm utrzymywanie wewnętrznego działu IT jest nieopłacalne. Outsourcing IT, czyli stała obsługa informatyczna, to nowoczesne i elastyczne rozwiązanie, które pozwala Ci powierzyć technologię ekspertom i w pełni skupić się na rozwoju własnego biznesu.
              </p>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Dlaczego Outsourcing IT to strategiczna decyzja?</h2>
                <p>
                  Postrzegaj nas jako swój zewnętrzny, wyspecjalizowany dział IT. Współpraca z nami to nie tylko rozwiązywanie problemów, ale przede wszystkim strategiczne partnerstwo.
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                    <li><strong>Redukcja i kontrola kosztów:</strong> Płacisz stały, przewidywalny abonament, zamiast ponosić wysokie koszty zatrudnienia i szkolenia pracownika na etacie.</li>
                    <li><strong>Dostęp do wiedzy i doświadczenia:</strong> Zyskujesz dostęp do szerokiej wiedzy eksperckiej z różnych dziedzin IT – od sieci, przez serwery, aż po bezpieczeństwo i chmurę.</li>
                    <li><strong>Skupienie na kluczowej działalności:</strong> Możesz w 100% poświęcić swój czas i energię na to, co Twoja firma robi najlepiej, nie martwiąc się o technologię.</li>
                    <li><strong>Proaktywne działanie:</strong> Nie czekamy na awarie. Stale monitorujemy Twoją infrastrukturę, wdrażamy aktualizacje i zapobiegamy problemom, zanim zdążą wpłynąć na Twoją pracę.</li>
                </ul>
              </div>

              <div>
                  <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#00bcd4]">Kompleksowa opieka nad Twoją firmą</h3>
                  <p>
                    W ramach stałej obsługi informatycznej zapewniamy kompleksowe wsparcie na wszystkich płaszczyznach technologicznych Twojej firmy:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li><strong>Zarządzanie siecią komputerową:</strong> Dbamy o stabilność, wydajność i bezpieczeństwo Twojej sieci LAN i Wi-Fi.</li>
                    <li><strong>Administracja serwerami:</strong> Zarządzamy Twoimi serwerami fizycznymi i wirtualnymi, zapewniając ich ciągłość działania.</li>
                    <li><strong>Bezpieczeństwo i backup:</strong> Wdrażamy i nadzorujemy systemy kopii zapasowych oraz polityki bezpieczeństwa.</li>
                    <li><strong>Wsparcie dla pracowników (Helpdesk):</strong> Oferujemy szybką pomoc zdalną i telefoniczną dla Twojego zespołu.</li>
                    <li><strong>Zarządzanie oprogramowaniem i licencjami:</strong> Pomagamy w doborze i zarządzaniu niezbędnym oprogramowaniem.</li>
                  </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="#formularz-kontaktowy" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                  Porozmawiajmy o wsparciu dla Twojej firmy!
              </Link>
            </div>
          </article>
        </TracingBeam>
      </main>
    </div>
  );
}