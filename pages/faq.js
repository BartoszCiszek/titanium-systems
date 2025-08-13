// pages/faq.js
import { useState, useEffect } from "react";
import Head from "next/head";
import gsap from "gsap";
import { FiChevronDown } from "react-icons/fi";

const faqData = [
  {
    question: "Czym różnią się pakiety START, PRO i STUDIO?",
    answer:
      "Pakiet START to solidna podstawa: dobór części, montaż i instalacja systemu. Pakiet PRO dodaje zaawansowaną optymalizację wydajności (OC/UV) i testy w grach. Pakiet STUDIO to usługa 'pod klucz' dla profesjonalistów, obejmująca instalację specjalistycznego oprogramowania i przeniesienie danych.",
  },
  {
    question: "Czy podane ceny pakietów zawierają koszt części?",
    answer:
      "Nie, podane ceny są kosztem usługi montażu, konfiguracji i optymalizacji. Koszt podzespołów jest ustalany indywidualnie na podstawie Twoich potrzeb i budżetu.",
  },
  {
    question: "Jak wygląda proces współpracy?",
    answer:
      "Zaczynamy od bezpłatnej konsultacji, aby poznać Twoje potrzeby. Następnie przedstawiamy propozycję konfiguracji i wycenę. Po akceptacji zamawiamy części i przystępujemy do montażu i testów. Na końcu dostarczamy gotowy, zoptymalizowany komputer.",
  },
  {
    question: "Czy oferujecie gwarancję na swoje usługi?",
    answer:
      "Tak, na wykonaną przez nas usługę konfiguracji i optymalizacji (ustawienia BIOS/UEFI, profile OC/UV) udzielamy 90-dniowej gwarancji. Gwarancja nie obejmuje usterek sprzętowych, które są realizowane w ramach gwarancji producenta.",
  },
  {
    question: "Czy mogę dostarczyć własne części?",
    answer:
      "Oczywiście. Możemy zbudować komputer z dostarczonych przez Ciebie komponentów, oferując usługę profesjonalnego montażu i optymalizacji w ramach wybranego pakietu.",
  },
];

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const filteredFaqs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    gsap.from(".faq-item", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="min-h-screen text-white flex flex-col">
      <Head>
        <title>FAQ – Budowa Komputerów na Zamówienie | Titanium Systems</title>
        <meta
          name="description"
          content="Najczęściej zadawane pytania dotyczące budowy personalizowanych komputerów. Sprawdź informacje o pakietach, cenach, gwarancji i procesie współpracy."
        />
        <meta
          name="keywords"
          content="FAQ komputery, pytania o składanie PC, gwarancja na komputer, pakiety usług, proces zamówienia"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://titaniumsystems.pl/faq" />
      </Head>

      <main className="container mx-auto py-24 px-4 flex-grow">
        <div className="faq-container max-w-3xl mx-auto bg-[#212121] p-6 rounded-xl shadow-lg">
          <h2 className="faq-title text-2xl md:text-3xl font-bold text-center mb-6">
            Najczęściej zadawane pytania
          </h2>
          <div className="faq-search-container text-center mb-6">
            <input
              type="text"
              id="faq-search"
              placeholder="Szukaj pytań..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md p-3 text-base rounded-lg bg-[#333] text-white text-center outline-none border-2 border-transparent focus:border-[#00bcd4] transition"
            />
          </div>

          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item mb-4 rounded-lg overflow-hidden shadow-md`}
            >
              <button
                className="faq-question w-full px-4 py-3 bg-[#008080] hover:bg-[#3d3d3d] text-white font-semibold flex justify-between items-center transition-colors text-left"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    openIndexes.includes(index) ? "rotate-180 text-[#00bcd4]" : ""
                  }`}
                />
              </button>
              {openIndexes.includes(index) && (
                <div className="faq-answer px-4 py-3 bg-[#2a2a2a] rounded-b-lg animate-fade-in-down">
                  <p className="whitespace-pre-wrap">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
      
      <style jsx>{`
        .animate-fade-in-down {
          animation: fadeInDown 0.5s ease-out;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}