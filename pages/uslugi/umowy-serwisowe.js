// pages/uslugi/umowy-serwisowe.js
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

const subServices = [
  {
    title: "Stała Obsługa Informatyczna Firm",
    description: "Kompleksowa opieka nad Twoją infrastrukturą IT z gwarancją czasu reakcji i proaktywnym monitoringiem.",
    link: "/uslugi/obsluga-informatyczna-firm",
  },
  {
    title: "Wsparcie Zdalne (Helpdesk)",
    description: "Szybka i skuteczna pomoc dla Twoich pracowników w rozwiązywaniu codziennych problemów z oprogramowaniem i sprzętem.",
    link: "/uslugi/wsparcie-zdalne-helpdesk",
  },
];

export default function UmowySerwisowe() {
  return (
    <div className="min-h-screen bg-[#212121] text-white">
      <Head>
        <title>Umowy Serwisowe IT (SLA) dla Firm w Poznaniu | Titanium Systems</title>
        <meta name="description" content="Stała obsługa informatyczna dla firm w Poznaniu. Gwarancja czasu reakcji (SLA), priorytetowe wsparcie, monitoring i outsourcing IT." />
        <link rel="canonical" href="https://titaniumsystems.pl/uslugi/umowy-serwisowe" />
      </Head>

      <main className="container mx-auto py-32 px-4">
        <h1 data-aos="fade-up" className="text-4xl lg:text-5xl font-bold text-center mb-6">
          Umowy Serwisowe (SLA) dla Firm
        </h1>
        <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          Zapewnij swojej firmie ciągłość działania i bezpieczeństwo dzięki stałej opiece informatycznej. Nasze umowy serwisowe to gwarancja profesjonalnego wsparcia i przewidywalności kosztów.
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