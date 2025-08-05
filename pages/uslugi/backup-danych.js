// pages/uslugi/backup-danych.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "../../components/ui/tracing-beam";

export default function BackupDanych() {
  return (
    <div className="min-h-screen bg-[#212121] text-white">
      <Head>
        <title>Backup i Kopie Zapasowe Danych Poznań | Titanium Systems</title>
        <meta name="description" content="Profesjonalne usługi tworzenia kopii zapasowych (backup) dla firm i klientów indywidualnych w Poznaniu. Zabezpiecz swoje zdjęcia, dokumenty i pliki firmowe." />
        <link rel="canonical" href="https://titaniumsystems.pl/uslugi/backup-danych" />
      </Head>
      <main className="container mx-auto py-24 px-4">
        <TracingBeam className="px-6">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-[#00bcd4]">
              Backup i Konfiguracja Kopii Zapasowych
            </h1>

            <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
              <Image src="/images/backup-danych.webp" alt="Bezpieczne przechowywanie danych w chmurze i na serwerze NAS" layout="fill" objectFit="cover" />
            </div>

            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
              <p className="text-xl leading-relaxed">
                Awaria dysku, atak ransomware, przypadkowe usunięcie – istnieje wiele scenariuszy, w których możesz bezpowrotnie utracić swoje najcenniejsze dane. Profesjonalnie skonfigurowany system kopii zapasowych to nie luksus, a fundament cyfrowego bezpieczeństwa. W Titanium Systems traktujemy backup jako Twoją polisę ubezpieczeniową na wypadek nieprzewidzianych zdarzeń.
              </p>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Dlaczego zwykłe kopiowanie plików to za mało?</h2>
                <p>
                  Ręczne kopiowanie najważniejszych plików na pendrive'a lub zewnętrzny dysk jest lepsze niż nic, ale nie jest to strategia niezawodna. Łatwo o tym zapomnieć, można skopiować niewłaściwe wersje plików, a pojedynczy nośnik może ulec awarii lub zostać skradziony razem z komputerem. Profesjonalny backup to zautomatyzowany proces, który działa w tle, chroniąc Twoje dane w sposób ciągły.
                </p>
              </div>

              <div>
                  <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#00bcd4]">Nasza strategia: Reguła 3-2-1</h3>
                  <p>
                    Wdrażając systemy backupu, opieramy się na złotej zasadzie branży IT, znanej jako reguła 3-2-1. Gwarantuje ona najwyższy poziom bezpieczeństwa:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li><strong>TRZY kopie danych:</strong> Oryginalne dane na Twoim komputerze oraz co najmniej dwie dodatkowe kopie.</li>
                    <li><strong>DWA różne nośniki:</strong> Kopie przechowywane są na co najmniej dwóch różnych typach nośników (np. wewnętrzny dysk i serwer NAS), aby zminimalizować ryzyko awarii.</li>
                    <li><strong>JEDNA kopia w innej lokalizacji:</strong> Co najmniej jedna kopia zapasowa przechowywana jest poza Twoim domem lub biurem (np. w chmurze), co chroni dane przed pożarem, zalaniem czy kradzieżą.</li>
                  </ul>
              </div>
              
              <div>
                  <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#00bcd4]">Jakie rozwiązania wdrażamy?</h3>
                  <p>
                    Każdy system backupu projektujemy indywidualnie, dobierając narzędzia idealnie dopasowane do Twoich potrzeb:
                  </p>
                  <ol className="list-decimal list-inside mt-4 space-y-2">
                    <li><strong>Backup na serwerze NAS:</strong> Konfigurujemy centralne urządzenie (np. Synology, QNAP, TrueNAS), które automatycznie tworzy kopie zapasowe wszystkich komputerów w Twojej sieci lokalnej.</li>
                    <li><strong>Backup w chmurze:</strong> Wdrażamy bezpieczne i szyfrowane rozwiązania chmurowe (np. Microsoft 365 OneDrive, Google Drive, dedykowane usługi backupu), które stanowią idealną kopię off-site.</li>
                    <li><strong>Automatyzacja i harmonogramy:</strong> Konfigurujemy oprogramowanie tak, aby proces tworzenia kopii zapasowych odbywał się w pełni automatycznie, w tle, bez wpływu na Twoją codzienną pracę.</li>
                    <li><strong>Wersjonowanie plików:</strong> Nasze systemy pozwalają na przechowywanie wielu wersji tego samego pliku, dzięki czemu możesz cofnąć się w czasie i odzyskać dane sprzed przypadkowej modyfikacji.</li>
                  </ol>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="#formularz-kontaktowy" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                  Nie ryzykuj utraty danych – zabezpiecz je z nami!
              </Link>
            </div>
          </article>
        </TracingBeam>
      </main>
    </div>
  );
}