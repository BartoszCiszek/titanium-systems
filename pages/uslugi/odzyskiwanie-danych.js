// pages/uslugi/odzyskiwanie-danych.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "../../components/ui/tracing-beam";

export default function OdzyskiwanieDanych() {
  return (
    <div className="min-h-screen bg-[#212121] text-white">
      <Head>
        <title>Odzyskiwanie Danych z Dysku Poznań | HDD, SSD, Pendrive</title>
        <meta name="description" content="Profesjonalne odzyskiwanie danych z uszkodzonych dysków twardych (HDD, SSD), kart pamięci i pendrive'ów w Poznaniu. Ratujemy Twoje zdjęcia, dokumenty i pliki firmowe." />
        <link rel="canonical" href="https://titaniumsystems.pl/uslugi/odzyskiwanie-danych" />
      </Head>
      <main className="container mx-auto py-24 px-4">
        <TracingBeam className="px-6">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-[#00bcd4]">
              Odzyskiwanie Utraconych Danych
            </h1>

            <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
              <Image src="/images/realizacja4_1.webp" alt="Wnętrze dysku twardego" layout="fill" objectFit="cover" />
            </div>

            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
              <p className="text-xl leading-relaxed">
                Utrata cennych zdjęć rodzinnych, ważnych dokumentów firmowych czy wielomiesięcznej pracy to scenariusz, którego obawia się każdy. Niezależnie od przyczyny – awarii sprzętu, ataku wirusa czy ludzkiego błędu – często istnieje szansa na odzyskanie tych danych. W Titanium Systems specjalizujemy się w odzyskiwaniu informacji z różnych nośników.
              </p>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">WAŻNE: Co robić po utracie danych?</h2>
                <p>
                  Twoja pierwsza reakcja ma kluczowe znaczenie dla powodzenia procesu odzyskiwania. Pamiętaj o najważniejszej zasadzie:
                </p>
                <p className="mt-4 p-4 border-l-4 border-[#00bcd4] bg-[#333] rounded-r-lg">
                  <strong>Natychmiast przestań używać urządzenia, z którego zniknęły dane!</strong> Każda minuta dalszej pracy (instalowanie programów, przeglądanie internetu, a nawet samo uruchomienie systemu) może bezpowrotnie nadpisać utracone pliki, uniemożliwiając ich odzyskanie. Wyłącz komputer i skontaktuj się z nami.
                </p>
              </div>

              <div>
                  <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#00bcd4]">Z jakich nośników odzyskujemy dane?</h3>
                  <p>
                    Nasze usługi obejmują szeroką gamę nośników cyfrowych:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li><strong>Dyski twarde HDD:</strong> Tradycyjne dyski talerzowe z laptopów i komputerów stacjonarnych.</li>
                    <li><strong>Dyski SSD:</strong> Nowoczesne, szybkie dyski półprzewodnikowe.</li>
                    <li><strong>Pendrive'y i karty pamięci:</strong> Karty SD, microSD z aparatów, telefonów i dronów.</li>
                    <li><strong>Zewnętrzne dyski twarde:</strong> Przenośne nośniki podłączane przez USB.</li>
                  </ul>
              </div>
              
              <div>
                  <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#00bcd4]">Najczęstsze przyczyny utraty danych, w których pomagamy:</h3>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li><strong>Przypadkowe usunięcie:</strong> Skasowanie plików lub opróżnienie kosza.</li>
                    <li><strong>Sformatowanie dysku lub partycji:</strong> Błędne sformatowanie nośnika.</li>
                    <li><strong>Awarie logiczne:</strong> Uszkodzenie systemu plików, tablicy partycji, działanie wirusów.</li>
                    <li><strong>Problemy z dostępem:</strong> Dysk jest widoczny, ale system nie potrafi odczytać jego zawartości.</li>
                  </ul>
                  <p className="mt-4 text-sm italic">
                    Uwaga: Nie zajmujemy się uszkodzeniami fizycznymi wymagającymi interwencji w warunkach laboratoryjnych (np. uszkodzenia głowic, silnika). W takich przypadkach współpracujemy ze specjalistycznymi laboratoriami i możemy pośredniczyć w usłudze.
                  </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="#formularz-kontaktowy" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                  Utraciłeś dane? Działaj szybko, skontaktuj się z nami!
              </Link>
            </div>
          </article>
        </TracingBeam>
      </main>
    </div>
  );
}