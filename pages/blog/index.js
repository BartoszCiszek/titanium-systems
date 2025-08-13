// pages/blog/index.js
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiSearch } from "react-icons/fi";
import { useState } from "react";

// Przykładowe dane dla artykułów blogowych z dodaną datą publikacji
const blogPosts = [
  {
    title: "Jak przyspieszyć komputer w 5 krokach? Poradnik 2025",
    description: "Twój komputer działa wolno? Poznaj sprawdzone i skuteczne metody na optymalizację systemu i sprzętu, które przywrócą mu dawną prędkość.",
    link: "/blog/jak-przyspieszyc-komputer",
    category: "Optymalizacja",
    date: "2025-08-12",
  },
  {
    title: "Overclocking i Undervolting – Kompletny poradnik dla początkujących",
    description: "Chcesz wycisnąć więcej ze swojego sprzętu? Wyjaśniamy, czym jest OC i UV, jakie korzyści niosą i jak bezpiecznie przeprowadzić ten proces.",
    link: "/blog/poradnik-oc-uv",
    category: "Poradniki",
    date: "2025-08-13",
  },
  {
    title: "Czy warto inwestować w serwer NAS w domu?",
    description: "Zastanawiasz się nad prywatną chmurą? Omawiamy zalety posiadania serwera NAS do backupu, przechowywania danych i multimediów.",
    link: "/blog/czy-warto-nas",
    category: "Sprzęt",
    date: "2025-08-13",
  },
  {
    title: "Wybór idealnej karty graficznej w 2025 – Poradnik",
    description: "Przewodnik po najnowszych kartach graficznych od NVIDIA i AMD. Pomagamy wybrać najlepszy model do gier, pracy kreatywnej i AI, dopasowany do Twojego budżetu.",
    link: "/blog/wybor-karty-graficznej-2025",
    category: "Sprzęt",
    date: "2025-08-13",
  },
  {
    title: "Procesor do gier: Intel czy AMD w 2025 roku?",
    description: "Szczegółowa analiza i porównanie najnowszych procesorów Intela i AMD. Dowiedz się, który CPU oferuje najlepszą wydajność w grach i zastosowaniach profesjonalnych.",
    link: "/blog/procesor-do-gier-intel-vs-amd",
    category: "Porównania",
    date: "2025-08-13",
  },
  {
    title: "Jak dbać o komputer? Kompletny przewodnik po czyszczeniu",
    description: "Praktyczne porady dotyczące konserwacji i czyszczenia komputera, które pomogą utrzymać niskie temperatury, wysoką wydajność i przedłużą żywotność podzespołów.",
    link: "/blog/jak-dbac-o-komputer",
    category: "Poradniki",
    date: "2025-08-14",
  },
  {
    title: "Pamięć RAM – Wszystko o DDR4 i DDR5",
    description: "Wszystko, co musisz wiedzieć o pamięci RAM. Wyjaśniamy różnice między DDR4 a DDR5, profile XMP/EXPO i jak dobrać idealne moduły do swojego zestawu.",
    link: "/blog/pamiec-ram-ddr4-vs-ddr5",
    category: "Sprzęt",
    date: "2025-08-14",
  },
  {
    title: "Chłodzenie komputera: Powietrzem czy cieczą (AIO)?",
    description: "Analizujemy wady i zalety chłodzenia powietrznego oraz All-In-One (AIO). Pomagamy zdecydować, które rozwiązanie będzie najlepsze dla Twojego procesora.",
    link: "/blog/chlodzenie-powietrzne-vs-aio",
    category: "Porównania",
    date: "2025-08-14",
  },
  {
    title: "Zasilacz (PSU) – Cichy bohater Twojego PC",
    description: "Jak wybrać odpowiedni zasilacz? Omawiamy certyfikaty sprawności (80 Plus), moc, modularność i kluczowe zabezpieczenia, które chronią Twój sprzęt.",
    link: "/blog/jak-wybrac-zasilacz-psu",
    category: "Sprzęt",
    date: "2025-08-14",
  },
  {
    title: "Budowa komputera krok po kroku – Poradnik 2025",
    description: "Kompleksowy przewodnik, który przeprowadzi Cię przez cały proces składania komputera – od montażu procesora po zarządzanie kablami.",
    link: "/blog/budowa-komputera-krok-po-kroku",
    category: "Poradniki",
    date: "2025-08-15",
  },
  {
    title: "Optymalizacja Windows 11 pod kątem gier",
    description: "Poznaj ukryte triki i ustawienia w Windows 11, które pozwolą Ci zmaksymalizować liczbę klatek na sekundę i zminimalizować opóźnienia w grach.",
    link: "/blog/optymalizacja-windows-11-gaming",
    category: "Oprogramowanie",
    date: "2025-08-15",
  },
  {
    title: "Diagnostyka problemów z PC – Co robić, gdy komputer nie działa?",
    description: "Praktyczne wskazówki, jak samodzielnie zdiagnozować najczęstsze usterki komputera – od problemów z uruchamianiem po niestabilność systemu.",
    link: "/blog/diagnostyka-problemow-z-komputerem",
    category: "Serwis",
    date: "2025-08-15",
  },
  {
    title: "Bezpieczeństwo w sieci: Jak chronić swoje dane?",
    description: "Niezbędne porady dotyczące ochrony komputera i danych osobowych przed wirusami, phishingiem i innymi zagrożeniami online.",
    link: "/blog/bezpieczenstwo-w-sieci",
    category: "Bezpieczeństwo",
    date: "2025-08-15",
  },
  {
    title: "Wirtualna Rzeczywistość (VR) – Jaki komputer jest potrzebny?",
    description: "Kompletny przewodnik po wymaganiach sprzętowych dla VR. Dowiedz się, jaką kartę graficzną i procesor wybrać, aby cieszyć się płynną rozgrywką.",
    link: "/blog/jaki-komputer-do-vr",
    category: "Sprzęt",
    date: "2025-08-16",
  },
  {
    title: "Streaming na Twitch i YouTube – Konfiguracja PC",
    description: "Jak zbudować i skonfigurować komputer do streamowania gier? Omawiamy kluczowe komponenty i ustawienia oprogramowania OBS Studio.",
    link: "/blog/komputer-do-streamingu",
    category: "Poradniki",
    date: "2025-08-16",
  },
  {
    title: "Stacja robocza do edycji wideo 4K – Poradnik",
    description: "Budujemy optymalną stację roboczą do montażu wideo w 4K w programach DaVinci Resolve i Adobe Premiere Pro. Kluczowe podzespoły i rekomendacje.",
    link: "/blog/stacja-robocza-do-wideo-4k",
    category: "Profesjonalne",
    date: "2025-08-16",
  },
  {
    title: "Serwery domowe: Od chmury plików po centrum multimedialne",
    description: "Jak zacząć przygodę z serwerem domowym? Omawiamy popularne systemy i zastosowania, takie jak Plex, Home Assistant i prywatna chmura danych.",
    link: "/blog/serwery-domowe-zastosowania",
    category: "Sieci",
    date: "2025-08-16",
  },
  {
    title: "Cable Management – Sztuka estetyki i wydajności",
    description: "Praktyczne porady, jak profesjonalnie zarządzać kablami w obudowie komputera, aby poprawić przepływ powietrza, estetykę i ułatwić przyszłe modernizacje.",
    link: "/blog/cable-management-poradnik",
    category: "Poradniki",
    date: "2025-08-17",
  },
  {
    title: "BIOS/UEFI – Co to jest i co warto zmienić?",
    description: "Przewodnik po najważniejszych ustawieniach w BIOS/UEFI. Wyjaśniamy, czym są profile XMP/EXPO, Resizable BAR i jak bezpiecznie zaktualizować firmware.",
    link: "/blog/bios-uefi-poradnik",
    category: "Oprogramowanie",
    date: "2025-08-17",
  },
  {
    title: "Dyski SSD: NVMe vs SATA. Który wybrać?",
    description: "Szczegółowe porównanie dysków SSD NVMe i SATA. Wyjaśniamy różnice w prędkościach, zastosowaniach i pomagamy wybrać najlepszy nośnik dla Twoich potrzeb.",
    link: "/blog/dyski-ssd-nvme-vs-sata",
    category: "Porównania",
    date: "2025-08-17",
  },
];


const uniqueCategories = ["Wszystkie", ...new Set(blogPosts.map(post => post.category))];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Wszystkie");
  const [sortOrder, setSortOrder] = useState("date-desc");

  const filteredAndSortedPosts = blogPosts
    .filter(post => {
      const searchTermLower = searchTerm.toLowerCase();
      const matchesSearch = post.title.toLowerCase().includes(searchTermLower) || post.description.toLowerCase().includes(searchTermLower);
      const matchesCategory = selectedCategory === "Wszystkie" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortOrder) {
        case "date-desc":
          return new Date(b.date) - new Date(a.date);
        case "date-asc":
          return new Date(a.date) - new Date(b.date);
        case "alpha-asc":
          return a.title.localeCompare(b.title);
        case "alpha-desc":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

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
        <div className="text-center mb-12">
            <h1 data-aos="fade-up" className="text-4xl lg:text-5xl font-bold mb-4">
            Blog Technologiczny
            </h1>
            <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-gray-400 max-w-3xl mx-auto">
            Dzielimy się wiedzą. Znajdziesz tu poradniki, testy i artykuły, które pomogą Ci lepiej zrozumieć świat komputerów.
            </p>
        </div>

        {/* Sekcja filtrowania i wyszukiwania */}
        <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Szukaj artykułu..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 pl-10 bg-[#1c1c1c] border border-gray-700 rounded-lg focus:outline-none focus:border-[#00bcd4] transition"
            />
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-3 bg-[#1c1c1c] border border-gray-700 rounded-lg focus:outline-none focus:border-[#00bcd4] transition cursor-pointer"
          >
            {uniqueCategories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="p-3 bg-[#1c1c1c] border border-gray-700 rounded-lg focus:outline-none focus:border-[#00bcd4] transition cursor-pointer"
          >
            <option value="date-desc">Sortuj: Najnowsze</option>
            <option value="date-asc">Sortuj: Najstarsze</option>
            <option value="alpha-asc">Sortuj: A-Z</option>
            <option value="alpha-desc">Sortuj: Z-A</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedPosts.length > 0 ? (
            filteredAndSortedPosts.map((post, index) => (
              <motion.div
                key={post.link}
                data-aos="fade-up"
                data-aos-delay={100 + (index % 3) * 100}
                whileHover={{ y: -5 }}
                className="bg-[#1c1c1c] rounded-xl p-6 flex flex-col group border border-gray-800 hover:border-[#00bcd4] transition"
              >
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm text-[#00bcd4] font-semibold">{post.category}</p>
                  <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                <h2 className="text-xl font-bold text-white mb-3 flex-grow">{post.title}</h2>
                <p className="text-gray-400 mb-6">{post.description}</p>
                <Link
                  href={post.link}
                  className="flex items-center gap-2 mt-auto text-green-400 font-semibold hover:text-green-300 transition"
                >
                  Czytaj więcej <FiArrowRight />
                </Link>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-gray-400">Nie znaleziono artykułów pasujących do Twoich kryteriów.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}