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
    <div className="min-h-screen text-white">
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
          Twój komputer to centrum Twojej pracy, nauki i rozrywki. Kiedy zaczyna niedomagać, cała Twoja cyfrowa codzienność staje pod znakiem zapytania. W Titanium Systems rozumiemy to doskonale. Niezależnie od tego, czy Twój sprzęt potrzebuje pilnej naprawy, chcesz dać mu drugą młodość poprzez modernizację, czy marzysz o zupełnie nowej, skrojonej na miarę maszynie – jesteś we właściwym miejscu. Poniżej znajdziesz nasze specjalistyczne usługi, które przywrócą Twojemu komputerowi moc i niezawodność.
        </p>

        <div className="max-w-6xl mx-auto text-center mb-16" data-aos="fade-up" data-aos-delay="150">
          <h2 className="text-3xl font-bold text-white mb-4">Modernizacja czy nowy komputer?</h2>
          <p className="text-gray-300 max-w-4xl mx-auto">
            Często spotykamy się z pytaniem, czy warto inwestować w stary sprzęt. Odpowiedź w większości przypadków brzmi: tak! Inteligentnie przeprowadzona modernizacja, np. wymiana dysku na SSD czy dołożenie pamięci RAM, potrafi przynieść wzrost wydajności nieproporcjonalnie duży w stosunku do poniesionych kosztów. Pomagamy ocenić potencjał Twojego obecnego sprzętu i doradzamy, które rozwiązanie będzie dla Ciebie najbardziej opłacalne.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {subServices.map((service, index) => (
            <motion.div
              key={index}
              data-aos="fade-up"
              data-aos-delay={1 + index * 0.5}
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