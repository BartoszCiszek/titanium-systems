// pages/uslugi/administracja-sieciami.js
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

const subServices = [
  {
    title: "Sieci dla Domu i Firmy (LAN/Wi-Fi)",
    description: "Projektowanie i konfiguracja stabilnych i wydajnych sieci przewodowych oraz bezprzewodowych.",
    link: "/uslugi/konfiguracja-sieci-lan-wifi",
  },
  {
    title: "Bezpieczne Połączenia VPN",
    description: "Zapewnij sobie i swoim pracownikom bezpieczny, zdalny dostęp do zasobów firmowych.",
    link: "/uslugi/konfiguracja-vpn",
  },
  // Możesz tu w przyszłości dodać np. "Monitoring i Zarządzanie Siecią"
];

export default function AdministracjaSieciami() {
  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>Administracja i Konfiguracja Sieci LAN/Wi-Fi Poznań | Titanium Systems</title>
        <meta name="description" content="Profesjonalne usługi sieciowe w Poznaniu. Projektowanie i konfiguracja sieci LAN i Wi-Fi (Ubiquiti Unifi), VPN, zabezpieczenia sieciowe dla domu i firmy." />
        <link rel="canonical" href="https://titaniumsystems.pl/uslugi/administracja-sieciami" />
      </Head>

      <main className="container mx-auto py-32 px-4">
        <h1 data-aos="fade-up" className="text-4xl lg:text-5xl font-bold text-center mb-6">
          Administracja i Konfiguracja Sieci
        </h1>
        <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          Stabilna i bezpieczna sieć to fundament nowoczesnego domu i każdej firmy. Oferujemy kompleksowe usługi projektowania, wdrażania i zarządzania infrastrukturą sieciową.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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