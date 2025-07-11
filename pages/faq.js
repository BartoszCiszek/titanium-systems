// pages/faq.js
import { useState, useEffect } from "react";
import Head from "next/head";
import gsap from "gsap";

const faqData = [
  {
    question: "Jak mogę zamówić usługę IT?",
    answer:
      "Skontaktuj się przez e-mail, telefon lub formularz kontaktowy – odpowiem jak najszybciej i zaproponuję konkretny termin realizacji usługi.",
  },
  {
    question: "Czy działasz tylko w Poznaniu?",
    answer:
      "Głównie obsługuję klientów z Poznania, Środy Wielkopolskiej i okolic, ale możliwa jest współpraca również zdalnie lub na terenie całej Wielkopolski.",
  },
  {
    question: "Czy odzyskujesz dane z uszkodzonych dysków?",
    answer:
      "Tak, oferuję odzyskiwanie danych z dysków HDD, SSD oraz pendrive’ów – zarówno przy uszkodzeniach logicznych, jak i częściowych fizycznych.",
  },
  {
    question: "Czy mogę zlecić konfigurację sieci w firmie?",
    answer:
      "Tak, konfiguruję sieci LAN, Wi-Fi oraz routery (również VLAN, Cały ekosystem UniFi). Dostosowuję wszystko do potrzeb firmy lub domu.",
  },
  {
    question: "Czy wystawiasz faktury VAT?",
    answer:
      "Tak, wystawiam faktury VAT.",
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
    <div className="min-h-screen bg-[#212121] text-white flex flex-col">
      <Head>
        <title>FAQ – Usługi IT Poznań | Najczęstsze pytania | Titanium Systems</title>
        <meta
          name="description"
          content="Najczęściej zadawane pytania o usługi IT w Poznaniu. Sprawdź szczegóły oferty, dojazd, rachunki, konfigurację sieci i odzyskiwanie danych."
        />
        <meta
          name="keywords"
          content="FAQ IT Poznań, pytania IT, odzyskiwanie danych, konfiguracja sieci, usługi informatyczne"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://titaniumsystems.pl/faq" />
      </Head>

      <main className="container mx-auto py-24 px-4 flex-grow">
        <div className="faq-container max-w-3xl mx-auto bg-[#2a2a2a] p-6 rounded-xl shadow-lg">
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
              className="w-full max-w-md p-3 text-base rounded-lg bg-[#333] text-white text-center outline-none"
            />
          </div>

          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item mb-4 rounded-lg overflow-hidden shadow-md ${
                openIndexes.includes(index) ? "show" : ""
              }`}
            >
              <button
                className="faq-question w-full px-4 py-3 bg-[#008080] hover:bg-[#007070] text-white font-semibold flex justify-between items-center rounded-t-lg transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span
                  className={`faq-arrow transition-transform ${
                    openIndexes.includes(index) ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              <div className="faq-answer transition-all ease-out max-h-0 overflow-hidden bg-[#222] px-4 rounded-b-lg">
                <p className="py-3 whitespace-pre-wrap">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
        .faq-item.show .faq-answer {
          max-height: 500px;
          padding: 15px;
        }
        .faq-arrow {
          font-size: 20px;
        }
      `}</style>
    </div>
  );
}