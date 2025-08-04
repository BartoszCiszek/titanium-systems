// pages/uslugi/instalacja-systemow.js
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

const subServices = [
  {
    title: "Instalacja Windows",
    description: "Profesjonalna instalacja i optymalizacja systemów Windows 10 i 11 dla maksymalnej wydajności.",
    link: "/uslugi/instalacja-windows",
  },
  {
    title: "Instalacja MacOS",
    description: "Czysta instalacja najnowszych wersji systemu MacOS na urządzeniach Apple, z zachowaniem Twoich danych.",
    link: "/uslugi/instalacja-macos",
  },
  {
    title: "Instalacja Linux",
    description: "Wdrożenie i konfiguracja popularnych dystrybucji Linux, takich jak Ubuntu, Mint czy Debian.",
    link: "/uslugi/instalacja-linux",
  },
];

export default function InstalacjaSystemow() {
  return (
    <div className="min-h-screen bg-[#212121] text-white">
      <Head>
        <title>Instalacja Systemów Windows, MacOS, Linux Poznań | Titanium Systems</title>
        <meta name="description" content="Profesjonalna instalacja i konfiguracja systemów operacyjnych Windows, MacOS i Linux w Poznaniu. Czysty system, optymalizacja i instalacja sterowników." />
        <link rel="canonical" href="https://titaniumsystems.pl/uslugi/instalacja-systemow" />
      </Head>

      <main className="container mx-auto py-32 px-4">
        <h1 data-aos="fade-up" className="text-4xl lg:text-5xl font-bold text-center mb-6">
          Instalacja i Konfiguracja Systemów Operacyjnych
        </h1>
        <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          System operacyjny to serce każdego komputera. Zapewniamy profesjonalną instalację i optymalizację najpopularniejszych systemów, aby Twój sprzęt działał szybko, stabilnie i bezpiecznie.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {subServices.map((service, index) => (
            <motion.div
              key={index}
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 188, 212, 0.3)" }}
              className="bg-[#333] rounded-xl p-8 shadow-lg flex flex-col"
            >
              <h2 className="text-2xl font-bold text-[#00bcd4] mb-3">{service.title}</h2>
              <p className="text-gray-300 flex-grow">{service.description}</p>
              <Link href={service.link} className="inline-block mt-6 bg-[#008080] text-white text-center py-2 px-6 rounded-md hover:bg-[#00bcd4] transition">
                  Dowiedz się więcej
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}