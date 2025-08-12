// pages/blog.js
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// Przykładowe dane dla artykułów blogowych
const blogPosts = [
  {
    title: "Jak przyspieszyć komputer w 5 krokach? Poradnik 2025",
    description: "Twój komputer działa wolno? Poznaj sprawdzone i skuteczne metody na optymalizację systemu i sprzętu, które przywrócą mu dawną prędkość.",
    link: "/blog/jak-przyspieszyc-komputer", // Przykładowy link
    category: "Optymalizacja",
  },
  {
    title: "Overclocking i Undervolting – Kompletny poradnik dla początkujących",
    description: "Chcesz wycisnąć więcej ze swojego sprzętu? Wyjaśniamy, czym jest OC i UV, jakie korzyści niosą i jak bezpiecznie przeprowadzić ten proces.",
    link: "/blog/poradnik-oc-uv",
    category: "Poradniki",
  },
  {
    title: "Czy warto inwestować w serwer NAS w domu?",
    description: "Zastanawiasz się nad prywatną chmurą? Omawiamy zalety posiadania serwera NAS do backupu, przechowywania danych i multimediów.",
    link: "/blog/czy-warto-nas",
    category: "Sprzęt",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>Blog - Poradniki i Artykuły o Sprzęcie | Titanium Systems</title>
        <meta
          name="description"
          content="Blog Titanium Systems - Twoje źródło wiedzy o budowie komputerów, optymalizacji sprzętu, overclockingu i najnowszych technologiach."
        />
        <link rel="canonical" href="https://titaniumsystems.pl/blog" />
      </Head>

      <main className="container mx-auto py-32 px-4">
        <div className="text-center mb-16">
            <h1 data-aos="fade-up" className="text-4xl lg:text-5xl font-bold mb-4">
            Blog Technologiczny
            </h1>
            <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-gray-400 max-w-3xl mx-auto">
            Dzielimy się wiedzą. Znajdziesz tu poradniki, testy i artykuły, które pomogą Ci lepiej zrozumieć świat komputerów.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
              whileHover={{ y: -5 }}
              className="bg-[#1c1c1c] rounded-xl p-6 flex flex-col group border border-gray-800 hover:border-[#00bcd4] transition"
            >
              <p className="text-sm text-[#00bcd4] font-semibold mb-2">{post.category}</p>
              <h2 className="text-xl font-bold text-white mb-3 flex-grow">{post.title}</h2>
              <p className="text-gray-400 mb-6">{post.description}</p>
              <Link 
                href={post.link} 
                className="flex items-center gap-2 mt-auto text-green-400 font-semibold hover:text-green-300 transition"
              >
                Czytaj więcej <FiArrowRight />
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}