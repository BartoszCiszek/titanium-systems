// pages/realizacje.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { realizacje } from "../data/realizacjeData";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const uniqueCategories = ["Wszystkie", ...new Set(realizacje.map(item => item.category))];

const PortfolioCard = ({ item, index }) => {
  return (
    <motion.div
      data-aos="fade-up"
      data-aos-delay={100 + index * 100}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-[#212121] rounded-xl overflow-hidden shadow-lg flex flex-col group"
    >
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-[#00bcd4] font-semibold mb-2">{item.category}</p>
        <h2 className="text-2xl font-bold text-white mb-2">{item.title}</h2>
        <p className="text-gray-400 mb-4 flex-grow">{item.description}</p>
        <Link 
            href={item.link} 
            className="inline-block mt-auto bg-[#008080] hover:bg-[#00bcd4] text-white py-2 px-4 rounded transition text-center font-semibold"
        >
          Zobacz szczegóły
        </Link>
      </div>
    </motion.div>
  );
};

export default function Realizacje() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Wszystkie");
  const [sortOrder, setSortOrder] = useState("date-desc");

  const filteredAndSortedItems = realizacje
    .filter(item => {
      const searchTermLower = searchTerm.toLowerCase();
      const matchesSearch = item.title.toLowerCase().includes(searchTermLower) || item.description.toLowerCase().includes(searchTermLower);
      const matchesCategory = selectedCategory === "Wszystkie" || item.category === selectedCategory;
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
        <title>Realizacje – Portfolio Budowy Komputerów | Titanium Systems</title>
        <meta
          name="description"
          content="Zobacz nasze realizacje: od potężnych maszyn gamingowych, przez stacje robocze dla twórców wideo, po specjalistyczne komputery do audio i CAD."
        />
        <link rel="canonical" href="https://titaniumsystems.pl/realizacje" />
      </Head>
      <main className="container mx-auto py-32 px-4">
        <div className="text-center mb-16">
            <h1 data-aos="fade-up" className="text-4xl lg:text-5xl font-bold mb-4">
            Nasze Realizacje
            </h1>
            <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-gray-400 max-w-3xl mx-auto">
            Przejrzyj nasze portfolio i zobacz, jak precyzyjnie dopasowane komputery zmieniają pracę i rozrywkę naszych klientów.
            </p>
        </div>

        {/* Sekcja filtrowania i wyszukiwania */}
        <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Szukaj realizacji..."
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
          {filteredAndSortedItems.length > 0 ? (
            filteredAndSortedItems.map((item, index) => (
              <PortfolioCard key={item.id} item={item} index={index} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-gray-400">Nie znaleziono realizacji pasujących do Twoich kryteriów.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}