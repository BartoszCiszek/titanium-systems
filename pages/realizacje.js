// pages/realizacje.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { realizacje } from "../data/realizacjeData";
import { motion } from "framer-motion";

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
        <h2 className="text-2xl font-bold text-[#00bcd4] mb-2">{item.title}</h2>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {realizacje.map((item, index) => (
            <PortfolioCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
}