// pages/uslugi/konfiguracja-vpn.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "../../components/ui/tracing-beam";

export default function KonfiguracjaVpn() {
  return (
    <div className="min-h-screen bg-[#212121] text-white">
      <Head>
        <title>Konfiguracja VPN Poznań | Bezpieczny Zdalny Dostęp dla Firm</title>
        <meta name="description" content="Usługi konfiguracji bezpiecznych połączeń VPN w Poznaniu. Zapewnij sobie i pracownikom zdalny i szyfrowany dostęp do zasobów firmowych z dowolnego miejsca." />
        <link rel="canonical" href="https://titaniumsystems.pl/uslugi/konfiguracja-vpn" />
      </Head>
      <main className="container mx-auto py-24 px-4">
        <TracingBeam className="px-6">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-[#00bcd4]">
              Bezpieczne Połączenia VPN
            </h1>
            
            <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
                <Image src="/images/konfiguracja-vpn.webp" alt="Symbol połączenia VPN na mapie świata" layout="fill" objectFit="cover" />
            </div>

            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
              <p className="text-xl leading-relaxed">
                Praca zdalna stała się standardem. Aby była nie tylko efektywna, ale przede wszystkim bezpieczna, niezbędne jest odpowiednie zabezpieczenie połączenia między pracownikiem a siecią firmową. VPN (Virtual Private Network) to technologia, która tworzy szyfrowany "tunel" przez publiczny internet, gwarantując, że Twoje dane firmowe są chronione przed podsłuchem i nieautoryzowanym dostępem.
              </p>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Dlaczego VPN jest kluczowy do pracy zdalnej?</h2>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li><strong>Bezpieczeństwo:</strong> Cały ruch internetowy między pracownikiem a firmą jest w pełni szyfrowany. Nawet jeśli pracownik korzysta z niezabezpieczonej publicznej sieci Wi-Fi, dane pozostają poufne.</li>
                  <li><strong>Dostęp do zasobów wewnętrznych:</strong> VPN pozwala pracownikom na bezpieczny dostęp do serwerów plików, drukarek i innych zasobów znajdujących się w biurze, tak jakby byli na miejscu.</li>
                  <li><strong>Kontrola dostępu:</strong> Możesz precyzyjnie zarządzać, kto i do jakich zasobów ma dostęp, zwiększając bezpieczeństwo firmowej infrastruktury.</li>
                  <li><strong>Zgodność z RODO:</strong> W wielu przypadkach stosowanie szyfrowanych połączeń VPN jest wymogiem prawnym przy przetwarzaniu danych osobowych.</li>
                </ul>
              </div>

              <div>
                  <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#00bcd4]">Nasze Rozwiązania VPN</h3>
                  <p>
                    Wdrażamy sprawdzone i bezpieczne technologie VPN, dopasowane do skali i potrzeb Twojej firmy:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li><strong>VPN na urządzeniach sieciowych:</strong> Konfigurujemy serwery VPN bezpośrednio na profesjonalnych routerach (np. Ubiquiti), co jest idealnym rozwiązaniem dla małych i średnich firm.</li>
                    <li><strong>Tunele Cloudflare:</strong> Wykorzystujemy nowoczesne i niezwykle bezpieczne tunele Cloudflare, które nie wymagają otwierania portów na routerze, co dodatkowo zwiększa bezpieczeństwo sieci.</li>
                    <li><strong>Konfiguracja klientów VPN:</strong> Pomagamy w konfiguracji oprogramowania VPN na komputerach i urządzeniach mobilnych pracowników, zapewniając łatwość i niezawodność połączenia.</li>
                  </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="#formularz-kontaktowy" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                  Zabezpiecz pracę zdalną w domu lub firmie!
              </Link>
            </div>
          </article>
        </TracingBeam>
      </main>
    </div>
  );
}