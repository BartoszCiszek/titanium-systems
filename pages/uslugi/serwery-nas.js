// pages/uslugi/serwery-nas.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "../../components/ui/tracing-beam";

export default function SerweryNAS() {
  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>Serwery NAS Poznań - TrueNAS, Synology, QNAP | Titanium Systems</title>
        <meta name="description" content="Profesjonalne wdrożenia i konfiguracja serwerów NAS w Poznaniu. Twoja prywatna chmura do backupu i centralizacji danych." />
        <link rel="canonical" href="https://titaniumsystems.pl/uslugi/serwery-nas" />
      </Head>

      <main className="container mx-auto py-24 px-4">
        <TracingBeam className="px-6">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-[#00bcd4]">
              Serwery NAS – Twoje Prywatne Centrum Danych
            </h1>
            
            <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
              <Image src="/images/serwery-nas.webp" alt="Wizualizacja serwera NAS" layout="fill" objectFit="cover" />
            </div>

            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
              <p className="text-xl leading-relaxed">
                Network Attached Storage (NAS) to coś więcej niż tylko zewnętrzny dysk. To inteligentne, prywatne centrum danych, które pozwala na bezpieczne przechowywanie, udostępnianie i automatyczne backupowanie plików z wszystkich Twoich urządzeń. W Titanium Systems pomożemy Ci stworzyć i skonfigurować idealne rozwiązanie NAS dla Twojego domu lub firmy.
              </p>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Dlaczego warto zainwestować w serwer NAS?</h2>
                <ul className="list-disc list-inside mt-4 space-y-2">
                    <li><strong>Pełna kontrola nad danymi:</strong> Twoje pliki są przechowywane u Ciebie, a nie na serwerach zewnętrznych firm. Masz pełną kontrolę nad prywatnością i dostępem.</li>
                    <li><strong>Centralizacja plików:</strong> Koniec z szukaniem dokumentów na różnych komputerach. Wszystkie dane w jednym, bezpiecznym miejscu, dostępne z każdego urządzenia w sieci.</li>
                    <li><strong>Automatyczny backup:</strong> Skonfigurujemy Twój serwer NAS tak, aby automatycznie tworzył kopie zapasowe wszystkich komputerów w domu lub firmie, chroniąc Cię przed utratą danych.</li>
                    <li><strong>Prywatna chmura:</strong> Uzyskaj dostęp do swoich plików z dowolnego miejsca na świecie, tak jak w usługach Dropbox czy Google Drive, ale bez miesięcznych opłat i limitów pojemności.</li>
                </ul>
              </div>

              <div>
                  <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#00bcd4]">Nasze doświadczenie</h3>
                  <p>
                    Specjalizujemy się we wdrażaniu i konfiguracji najpopularniejszych systemów NAS na rynku. Dobierzemy rozwiązanie idealnie dopasowane do Twoich potrzeb i budżetu:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li><strong>TrueNAS:</strong> Potężne, darmowe oprogramowanie open-source, idealne dla zaawansowanych użytkowników i firm ceniących sobie elastyczność i bezpieczeństwo danych (system plików ZFS).</li>
                    <li><strong>Synology:</strong> Niezwykle przyjazne w obsłudze i bogate w funkcje gotowe serwery NAS, doskonałe dla użytkowników domowych i małych biur.</li>
                    <li><strong>QNAP:</strong> Wydajne i wszechstronne urządzenia, oferujące szerokie możliwości rozbudowy i zaawansowane funkcje multimedialne.</li>
                  </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="#formularz-kontaktowy" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                  Zabezpiecz swoje dane – zapytaj o serwer NAS!
              </Link>
            </div>
          </article>
        </TracingBeam>
      </main>
    </div>
  );
}