// pages/dla-klientow.js
import Head from "next/head";
import { servicesForClients } from "../data/dlaKlientowBaza";

// Definicja stylów GPU acceleration (bez właściwości transform, żeby nie nadpisywać animacji)
const gpuAccelerationStyles = {
  willChange: "transform",
  WebkitBackfaceVisibility: "hidden",
  backfaceVisibility: "hidden",
};

export default function DlaKlientow() {
  return (
    <div className="min-h-screen bg-[#212121] text-white">
      <Head>
  <title>Dla Klientów – Usługi IT Poznań | Titanium Systems</title>
  <meta
    name="description"
    content="Dowiedz się, jak mogę pomóc jako zaufany partner IT. Obsługa klientów indywidualnych i małych firm – serwis, konfiguracja, doradztwo IT w Poznaniu i okolicy."
  />
  <meta
    name="keywords"
    content="usługi IT dla klientów, pomoc IT Poznań, informatyk dla domu, doradztwo IT, Titanium Systems"
  />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="https://titaniumsystems.pl/dla-klientow" />
</Head>
      <main className="container mx-auto py-24 px-4">
        <h1 data-aos="fade-up" className="text-4xl font-bold text-center mb-12">
          Usługi dla Klientów Indywidualnych
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-center text-lg mb-16"
        >
          Poniżej znajdziesz naszą ofertę:
        </p>

        {/* Nawigacja do kategorii */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {servicesForClients.map((categoryObj, catIndex) => (
            <a
              key={catIndex}
              href={`#category-${catIndex}`}
              data-aos="fade-up"
              data-aos-delay={200 + catIndex * 100}
              style={gpuAccelerationStyles}
              className="bg-[#008080] hover:bg-[#00bcd4] text-white py-2 px-4 rounded transition"
            >
              {categoryObj.category}
            </a>
          ))}
        </div>

        <div className="space-y-12">
          {servicesForClients.map((categoryObj, catIndex) => (
            <div key={catIndex}>
              {/* Id umożliwiający przewinięcie do danej kategorii */}
              <h2
                id={`category-${catIndex}`}
                data-aos="fade-up"
                data-aos-delay={300 + catIndex * 100}
                className="text-3xl font-bold text-center mb-6"
              >
                {categoryObj.category}
              </h2>
              <div className="grid grid-cols-1 gap-8">
                {categoryObj.services.map((service, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={400 + index * 100}
                    // Dodajemy GPU acceleration do kafelka, który animuje skalowanie przy hover
                    style={gpuAccelerationStyles}
                    className="bg-[#333] p-8 rounded-xl shadow-lg transform transition duration-500 hover:scale-105"
                  >
                    <h3 className="text-2xl font-bold text-[#00bcd4] mb-4">
                      {service.nazwa}
                    </h3>
                    <div className="flex">
                      {/* Lewa część z informacjami */}
                      <div className="flex-1">
                        <p className="mb-2">
                          <strong>Kategoria:</strong> {service.kategoria}
                        </p>
                        <p className="mb-2">
                          <strong>Opis:</strong> {service.opis}
                        </p>
                        <p className="mb-2">
                          <strong>Uwagi:</strong> {service.uwagi}
                        </p>
                      </div>
                      {/* Prawa część z ceną */}
                      <div className="flex items-center">
                        {/* Pionowa kreska z animacją – można dodać GPU acceleration, jeśli wystąpią problemy z płynnością */}
                        <div
                          data-aos="fade-up"
                          data-aos-delay={10 + index * 100}
                          className="vertical-line mx-4"
                        ></div>
                        {/* Cena – animacja fade-right */}
                        <div
                          data-aos="fade-right"
                          data-aos-delay={50 + index * 100}
                          className="text-xl font-bold text-[#00bcd4]"
                        >
                          {service.cena}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
