import Head from "next/head";
import { servicesForFirms } from "../data/dlaFirmBaza";

// Definicja stylów GPU acceleration (bez właściwości transform, aby nie nadpisywać animacji)
const gpuAccelerationStyles = {
  willChange: "transform",
  WebkitBackfaceVisibility: "hidden",
  backfaceVisibility: "hidden",
};

export default function ObslugaIT() {
  return (
    <div className="min-h-screen bg-[#212121] text-white">
      <Head>
        <title>Obsługa IT dla firm – Poznań i Wielkopolska | Titanium Systems</title>
        <meta
          name="description"
          content="Profesjonalna obsługa IT dla małych firm i przedsiębiorców. Konfiguracja serwerów, sieci, backup, zabezpieczenia i wsparcie informatyczne w Poznaniu."
        />
        <meta
          name="keywords"
          content="obsługa IT Poznań, wsparcie informatyczne, usługi IT dla firm, konfiguracja serwerów, backup danych"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://titaniumsystems.pl/obsluga-it" />
      </Head>

      <main className="container mx-auto py-24 px-4">
        <h1 data-aos="fade-up" className="text-4xl font-bold text-center mb-12">
          Obsługa IT dla firm i przedsiębiorców z Poznania
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-center text-lg mb-16"
        >
          Wybierz kategorię, aby zobaczyć ofertę:
        </p>

        {/* Nawigacja do kategorii */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {servicesForFirms.map((categoryObj, catIndex) => (
            <a
              key={catIndex}
              href={`#firm-category-${catIndex}`}
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
          {servicesForFirms.map((categoryObj, catIndex) => (
            <div key={catIndex}>
              <h2
                id={`firm-category-${catIndex}`}
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
                    style={gpuAccelerationStyles}
                    className="bg-[#333] p-8 rounded-xl shadow-lg transform transition duration-500 hover:scale-105"
                  >
                    <h3 className="text-2xl font-bold text-[#00bcd4] mb-4">
                      {service.nazwa}
                    </h3>
                    <div className="flex">
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
                      <div className="flex items-center">
                        <div
                          data-aos="fade-up"
                          data-aos-delay={10 + index * 100}
                          className="vertical-line mx-4"
                        ></div>
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