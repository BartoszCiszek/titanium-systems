// pages/uslugi/skladanie-komputerow.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function SkladanieKomputerow() {
  return (
    <div className="bg-[#212121] text-white">
      <Head>
        <title>Składanie Komputerów na Zamówienie Poznań | Titanium Systems</title>
        <meta name="description" content="Profesjonalne składanie komputerów PC na zamówienie w Poznaniu. Dobór podzespołów, montaż i optymalizacja pod gry, pracę biurową i zadania specjalistyczne." />
        <link rel="canonical" href="https://titaniumsystems.pl/uslugi/skladanie-komputerow" />
      </Head>

      <main className="container mx-auto py-32 px-4">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-[#00bcd4]">
            Składanie Komputerów na Zamówienie
          </h1>
          
          <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
            <Image src="/images/portfolio1.webp" alt="Komputer stacjonarny złożony na zamówienie" layout="fill" objectFit="cover" />
          </div>

          <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300">
            <p className="text-xl leading-relaxed">
              Marzysz o komputerze idealnie dopasowanym do Twoich potrzeb, ale nie wiesz, od czego zacząć? W Titanium Systems specjalizujemy się w budowie komputerów "szytych na miarę". Niezależnie od tego, czy jesteś zapalonym graczem, twórcą treści, czy potrzebujesz niezawodnej maszyny do pracy – stworzymy dla Ciebie idealny zestaw.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Dlaczego warto zlecić nam złożenie komputera?</h2>
            
            <p>
              Składanie komputera to sztuka, która wymaga nie tylko wiedzy technicznej, ale i zrozumienia potrzeb użytkownika. Nasze podejście gwarantuje, że otrzymasz sprzęt, który w 100% spełni Twoje oczekiwania.
            </p>

            <ul className="list-disc list-inside mt-4 space-y-2">
              <li><strong>Optymalny dobór podzespołów:</strong> Analizujemy Twoje wymagania i budżet, aby wybrać komponenty o najlepszym stosunku ceny do wydajności.</li>
              <li><strong>Profesjonalny montaż:</strong> Dbamy o każdy detal – od precyzyjnego montażu, przez estetyczne ułożenie kabli (cable management), po zapewnienie optymalnego przepływu powietrza.</li>
              <li><strong>Gwarancja stabilności:</strong> Każdy złożony przez nas komputer przechodzi serię testów obciążeniowych, abyś miał pewność, że Twój nowy sprzęt będzie działał niezawodnie.</li>
            </ul>

            <div className="text-center mt-12">
              <Link href="#formularz-kontaktowy" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                  Skontaktuj się i stwórzmy Twój wymarzony PC!
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}