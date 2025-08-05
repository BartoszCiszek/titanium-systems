// pages/uslugi/wsparcie-zdalne-helpdesk.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "../../components/ui/tracing-beam";

export default function WsparcieZdalneHelpdesk() {
  return (
    <div className="min-h-screen bg-[#212121] text-white">
      <Head>
        <title>Wsparcie Zdalne i Helpdesk dla Firm Poznań | Szybka Pomoc IT</title>
        <meta name="description" content="Szybka i skuteczna pomoc zdalna (helpdesk) dla pracowników Twojej firmy w Poznaniu. Rozwiązywanie problemów z oprogramowaniem, pocztą, drukarkami i sprzętem." />
        <link rel="canonical" href="https://titaniumsystems.pl/uslugi/wsparcie-zdalne-helpdesk" />
      </Head>
      <main className="container mx-auto py-24 px-4">
        <TracingBeam className="px-6">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-[#00bcd4]">
              Wsparcie Zdalne (Helpdesk)
            </h1>

            <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
                <Image src="/images/wsparcie-zdalne-helpdesk.webp" alt="Informatyk świadczący pomoc zdalną" layout="fill" objectFit="cover" />
            </div>
            
            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
              <p className="text-xl leading-relaxed">
                Problem z programem? Drukarka nie działa? E-mail nie chce się wysłać? Drobne problemy techniczne mogą skutecznie zdezorganizować dzień pracy. Nasza usługa wsparcia zdalnego (helpdesk) to najszybszy i najefektywniejszy sposób na rozwiązanie codziennych problemów informatycznych Twoich pracowników, bez konieczności czekania na wizytę serwisanta.
              </p>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Jak działa wsparcie zdalne?</h2>
                <p>
                  Za pomocą bezpiecznego oprogramowania (takiego jak <strong>TeamViewer</strong> czy <strong>AnyDesk</strong>), jesteśmy w stanie połączyć się z komputerem Twojego pracownika (za jego zgodą) i widzieć jego ekran tak, jakbyśmy siedzieli tuż obok. Pozwala nam to na błyskawiczną diagnozę i rozwiązanie większości problemów z oprogramowaniem w ciągu zaledwie kilku minut.
                </p>
              </div>

              <div>
                  <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#00bcd4]">Korzyści z naszego helpdesku</h3>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li><strong>Błyskawiczny czas reakcji:</strong> Nie tracisz czasu na dojazd. Jesteśmy w stanie rozpocząć pracę nad problemem niemal natychmiast po zgłoszeniu.</li>
                    <li><strong>Minimalne przerwy w pracy:</strong> Pracownik może na bieżąco obserwować nasze działania i szybko wrócić do swoich obowiązków.</li>
                    <li><strong>Efektywność kosztowa:</strong> Wsparcie zdalne jest znacznie tańsze niż tradycyjne wizyty serwisowe, co pozwala na optymalizację kosztów w ramach umowy SLA.</li>
                    <li><strong>Szeroki zakres rozwiązywanych problemów:</strong> Od problemów z pakietem Microsoft Office, przez konfigurację programów księgowych, aż po diagnostykę problemów ze sterownikami.</li>
                  </ul>
              </div>
              
              <div>
                  <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#00bcd4]">Jakie problemy najczęściej rozwiązujemy zdalnie?</h3>
                  <p>
                    Większość codziennych problemów IT nie wymaga fizycznej interwencji. Zdalnie pomagamy m.in. w:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Konfiguracji programów pocztowych (np. Outlook).</li>
                    <li>Instalacji i konfiguracji oprogramowania biurowego.</li>
                    <li>Rozwiązywaniu problemów z drukarkami i innymi urządzeniami peryferyjnymi.</li>
                    <li>Usuwaniu podstawowego złośliwego oprogramowania.</li>
                    <li>Pomocy w obsłudze aplikacji i systemów operacyjnych.</li>
                  </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="#formularz-kontaktowy" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                  Zapewnij profesjonalne wsparcie swoim pracownikom!
              </Link>
            </div>
          </article>
        </TracingBeam>
      </main>
    </div>
  );
}