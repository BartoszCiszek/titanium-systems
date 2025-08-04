// pages/uslugi/serwis-komputerow.js
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

const subServices = [
  {
    title: "Składanie Komputerów na Zamówienie",
    description: "Budujemy komputery idealnie dopasowane do Twoich potrzeb i budżetu.",
    link: "/uslugi/skladanie-komputerow",
  },
  {
    title: "Wymiana Komponentów i Modernizacja",
    description: "Zwiększamy moc Twojego komputera, wymieniając kluczowe podzespoły.",
    link: "/uslugi/wymiana-komponentow",
  },
  {
    title: "Przyspieszanie Komputera",
    description: "Diagnozujemy i eliminujemy przyczyny wolnego działania Twojego sprzętu.",
    link: "/uslugi/przyspieszanie-komputera",
  },
  {
    title: "Wymiana Pasty Termoprzewodzącej",
    description: "Obniżamy temperatury i przywracamy pełną wydajność Twojego procesora i karty graficznej.",
    link: "/uslugi/wymiana-pasty-termoprzewodzacej",
  },
  {
    title: "Overclocking (OC) i Undervolting (UV)",
    description: "Wydobywamy maksymalną wydajność lub optymalizujemy kulturę pracy Twoich podzespołów.",
    link: "/uslugi/oc-uv-komputera",
  },
];

export default function SerwisKomputerow() {
  return (
    <div className="min-h-screen bg-[#212121] text-white">
      <Head>
        <title>Serwis i Modernizacja Komputerów Poznań | Titanium Systems</title>
        <meta name="description" content="Kompleksowe usługi serwisowe i modernizacyjne dla komputerów i laptopów. Wybierz interesującą Cię usługę i dowiedz się więcej." />
        <link rel="canonical" href="https://titaniumsystems.pl/uslugi/serwis-komputerow" />
      </Head>

      <main className="container mx-auto py-32 px-4">
        <h1 data-aos="fade-up" className="text-4xl lg:text-5xl font-bold text-center mb-6">
          Serwis i Modernizacja Komputerów
        </h1>
        <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          Niezależnie od tego, czy Twój komputer potrzebuje ratunku, czy chcesz dać mu drugą młodość – jesteś we właściwym miejscu. Wybierz jedną z naszych specjalistycznych usług, aby dowiedzieć się więcej.
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