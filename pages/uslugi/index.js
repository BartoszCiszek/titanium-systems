// pages/uslugi/index.js
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

// Krok 1: Rozbudowujemy listę usług o słowa kluczowe (keywords)
const servicesList = [
  {
    title: "Serwis i modernizacja komputerów",
    description: "Profesjonalna diagnoza, naprawa i ulepszanie komputerów stacjonarnych oraz laptopów.",
    link: "/uslugi/serwis-komputerow",
    delay: 100,
    keywords: ["składanie komputera", "naprawa", "upgrade", "czyszczenie", "diagnoza", "laptop", "pc", "wymiana części"]
  },
  {
    title: "Instalacja i konfiguracja systemów",
    description: "Instalacja systemów Windows, MacOS i Linux wraz z optymalizacją i sterownikami.",
    link: "/uslugi/instalacja-systemow",
    delay: 200,
    keywords: ["windows", "macos", "linux", "instalacja", "reinstalacja", "sterowniki", "formatowanie"]
  },
  {
    title: "Bezpieczeństwo i odzyskiwanie danych",
    description: "Backup, przywracanie danych, szyfrowanie dysków i bezpieczne kasowanie informacji.",
    link: "/uslugi/bezpieczenstwo-danych",
    delay: 300,
    keywords: ["backup", "kopia zapasowa", "wirusy", "szyfrowanie", "kasowanie", "bitlocker", "antywirus"]
  },
  {
    title: "Administracja sieciami",
    description: "Projektowanie, konfiguracja i zabezpieczanie sieci LAN i Wi-Fi w domu i firmie.",
    link: "/uslugi/administracja-sieciami",
    delay: 400,
    keywords: ["sieć", "wifi", "router", "unifi", "ubiquiti", "lan", "internet", "konfiguracja"]
  },
  {
    title: "Serwery NAS (Pamięć Masowa)",
    description: "Centralizacja i ochrona danych dzięki prywatnej chmurze w Twoim domu lub firmie.",
    link: "/uslugi/serwery-nas",
    delay: 500,
    keywords: ["nas", "serwer plików", "truenas", "synology", "qnap", "backup", "prywatna chmura"]
  },
  {
    title: "Wirtualizacja i Praca Zdalna",
    description: "Optymalizacja zasobów sprzętowych i tworzenie wydajnych środowisk do pracy zdalnej.",
    link: "/uslugi/wirtualizacja",
    delay: 600,
    keywords: ["wirtualizacja", "maszyny wirtualne", "vmware", "hyper-v", "praca zdalna", "pulpit zdalny"]
  },
    {
    title: "Rozwiązania Chmurowe Microsoft Azure",
    description: "Skalowalna i bezpieczna infrastruktura dla Twojej firmy dzięki wdrożeniom w chmurze Azure.",
    link: "/uslugi/rozwiazania-chmurowe-azure",
    delay: 700,
    keywords: ["chmura", "azure", "cloud", "migracja", "backup w chmurze", "azure virtual desktop", "avd"]
  },
  {
    title: "Umowy serwisowe (SLA) dla firm",
    description: "Stała opieka informatyczna z gwarancją czasu reakcji i priorytetowym wsparciem.",
    link: "/uslugi/umowy-serwisowe",
    delay: 800,
    keywords: ["umowa", "sla", "obsługa firm", "wsparcie it", "outsourcing", "dla biznesu"]
  },
];

export default function Uslugi() {
  const [searchTerm, setSearchTerm] = useState("");

  // Krok 2: Ulepszamy logikę filtrującą, aby przeszukiwała również słowa kluczowe
  const filteredServices = servicesList.filter((service) => {
    const term = searchTerm.toLowerCase();
    // Sprawdzamy, czy fraza pasuje do tytułu, opisu LUB któregokolwiek ze słów kluczowych
    return (
      service.title.toLowerCase().includes(term) ||
      service.description.toLowerCase().includes(term) ||
      service.keywords.some(keyword => keyword.toLowerCase().includes(term))
    );
  });

  return (
    <div className="min-h-screen bg-[#212121] text-white">
      <Head>
        <title>Usługi IT – Serwis Komputerów, Sieci, Bezpieczeństwo | Titanium Systems</title>
        <meta name="description" content="Poznaj pełen zakres profesjonalnych usług IT dla klientów indywidualnych i firm w Poznaniu. Serwis, sieci, serwery i więcej." />
        <meta name="keywords" content="usługi IT Poznań, serwis komputerowy, wsparcie IT, konfiguracja sieci, blog IT" />
        <link rel="canonical" href="https://titaniumsystems.pl/uslugi" />
      </Head>

      <main className="container mx-auto py-32 px-4">
        <h1 data-aos="fade-up" className="text-4xl lg:text-5xl font-bold text-center mb-6">
          Nasze Usługi
        </h1>
        <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          Każdy problem traktujemy jak wyzwanie. Poniżej znajdziesz szczegółowe opisy naszych usług, dzięki którym dowiesz się, jak możemy Ci pomóc.
        </p>

        <div className="mb-12 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <input
            type="text"
            placeholder="Wpisz czego szukasz (np. składanie komputera, sieć, wirusy)..."
            className="w-full p-4 rounded-lg bg-[#333] text-white text-center text-lg outline-none border-2 border-transparent focus:border-[#00bcd4] transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <motion.div
                key={service.link}
                data-aos="fade-up"
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 188, 212, 0.3)" }}
                className="bg-[#333] rounded-xl p-8 shadow-lg flex flex-col"
              >
                <h2 className="text-2xl font-bold text-[#00bcd4] mb-3">{service.title}</h2>
                <p className="text-gray-300 flex-grow">{service.description}</p>
                <Link href={service.link} className="inline-block mt-6 bg-[#008080] text-white text-center py-2 px-6 rounded-md hover:bg-[#00bcd4] transition">
                  Czytaj więcej →
                </Link>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-xl text-gray-400">Nie znaleziono usług pasujących do Twojego wyszukiwania.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}