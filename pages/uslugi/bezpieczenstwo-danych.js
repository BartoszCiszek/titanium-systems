// pages/uslugi/bezpieczenstwo-danych.js
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

const subServices = [
  {
    title: "Backup i Kopie Zapasowe",
    description: "Zabezpiecz swoje cenne dane przed utratą dzięki zautomatyzowanym kopiom zapasowym.",
    link: "/uslugi/backup-danych",
  },
  {
    title: "Odzyskiwanie Danych",
    description: "Ratujemy dane z uszkodzonych dysków, kart pamięci i po przypadkowym usunięciu.",
    link: "/uslugi/odzyskiwanie-danych",
  },
  {
    title: "Szyfrowanie Danych (BitLocker)",
    description: "Chroń swoje dane przed nieautoryzowanym dostępem, nawet w przypadku kradzieży sprzętu.",
    link: "/uslugi/szyfrowanie-danych",
  },
];

export default function BezpieczenstwoDanych() {
  return (
    <div className="min-h-screen bg-[#212121] text-white">
      <Head>
        <title>Bezpieczeństwo i Odzyskiwanie Danych Poznań | Titanium Systems</title>
        <meta name="description" content="Kompleksowe usługi ochrony danych w Poznaniu: backup, odzyskiwanie danych z dysków, szyfrowanie BitLocker." />
        <link rel="canonical" href="https://titaniumsystems.pl/uslugi/bezpieczenstwo-danych" />
      </Head>

      <main className="container mx-auto py-32 px-4">
        <h1 data-aos="fade-up" className="text-4xl lg:text-5xl font-bold text-center mb-6">
          Bezpieczeństwo i Odzyskiwanie Danych
        </h1>
        <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          W cyfrowym świecie Twoje dane są bezcenne. Zapewniamy kompleksowe rozwiązania, które chronią je przed utratą i pozwalają je odzyskać w kryzysowych sytuacjach.
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