import Head from "next/head";
import Image from "next/image";
import { realizacje } from "../data/realizacjeData";
import { motion, useScroll, useTransform } from "framer-motion";

// Wspólne style wymuszające akcelerację GPU (bez właściwości transform)
const gpuAccelerationStyles = {
  willChange: "transform",
  WebkitBackfaceVisibility: "hidden",
  backfaceVisibility: "hidden",
};

const PortfolioCard = ({ item, index }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <motion.div
      data-aos="fade-up"
      data-aos-delay={10 + index * 100}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.01 }}
      style={gpuAccelerationStyles}
      className="bg-[#212121] rounded-xl overflow-hidden shadow-lg"
    >
      <motion.div style={{ y, ...gpuAccelerationStyles }} className="relative w-full h-64">
        <Image
          src={item.image}
          alt={item.title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-[#00bcd4] mb-2">{item.title}</h2>
        <p className="mb-4">{item.description}</p>
        <a
          href={item.link}
          className="inline-block bg-[#008080] hover:bg-[#00bcd4] text-white py-2 px-4 rounded transition"
        >
          Zobacz szczegóły
        </a>
      </div>
    </motion.div>
  );
};

export default function Realizacje() {
  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>Realizacje – Portfolio Usług IT | Titanium Systems Poznań</title>
        <meta
          name="description"
          content="Zobacz wykonane realizacje z zakresu usług IT: konfiguracje sieci, serwery, naprawa komputerów, wdrożenia rozwiązań chmurowych i wiele więcej – działam w Poznaniu i Wielkopolsce."
        />
        <meta
          name="keywords"
          content="realizacje IT Poznań, portfolio IT, usługi informatyczne, konfiguracja sieci, wdrożenia IT, Titanium Systems"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://titaniumsystems.pl/realizacje" />
      </Head>
      <main className="container mx-auto py-24 px-4">
        <h1 data-aos="fade-up" className="text-4xl font-bold text-center mb-12">
          Moje Realizacje
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-center text-lg mb-16"
        >
          Przejrzyj moje portfolio i zobacz, jak nowoczesne rozwiązania zmieniają biznes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {realizacje.reverse().map((item, index) => (
            <PortfolioCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
} 
