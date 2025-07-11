import Head from "next/head";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Oferta() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  const animatedStyle = {
    y,
    willChange: "transform",
    WebkitBackfaceVisibility: "hidden",
    backfaceVisibility: "hidden",
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#212121] text-white">
      <Head>
        <title>Oferta usług IT – Poznań i Wielkopolska | Titanium Systems</title>
        <meta
          name="description"
          content="Zapoznaj się z ofertą usług IT – serwis komputerów, obsługa firm, konfiguracja sieci i serwerów. Działam lokalnie w Poznaniu i całej Wielkopolsce."
        />
        <meta
          name="keywords"
          content="oferta IT Poznań, usługi informatyczne, serwis komputerów, konfiguracja sieci, obsługa firm"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://titaniumsystems.pl/oferta" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-grow container mx-auto py-24 px-4">
        <h1 data-aos="fade-up" className="text-4xl font-bold mb-10 text-white">
          Oferta usług IT w Poznaniu i okolicach
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* KARTA: Dla Firm */}
          <motion.div
            data-aos="fade-up"
            data-aos-delay={10}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.01 }}
            style={animatedStyle}
            className="bg-[#333] rounded-xl p-8 shadow-lg text-center transform transition-transform duration-300"
          >
            <h2 className="text-2xl font-bold text-[#008080] mb-2">Dla Firm</h2>
            <p className="text-gray-300">
              Profesjonalne rozwiązania IT dla biznesu.
            </p>
            <Link
              href="/dla-firm"
              className="inline-block mt-5 bg-[#008080] text-white py-2 px-6 rounded-md hover:bg-[#00bcd4] transition"
            >
              Sprawdź ofertę →
            </Link>
          </motion.div>

          {/* KARTA: Dla Klientów Indywidualnych */}
          <motion.div
            data-aos="fade-up"
            data-aos-delay={110}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.01 }}
            style={animatedStyle}
            className="bg-[#333] rounded-xl p-8 shadow-lg text-center transform transition-transform duration-300"
          >
            <h2 className="text-2xl font-bold text-[#008080] mb-2">
              Dla Klientów Indywidualnych
            </h2>
            <p className="text-gray-300">
              Serwis komputerów i pomoc IT dla każdego.
            </p>
            <Link
              href="/dla-klientow"
              className="inline-block mt-5 bg-[#008080] text-white py-2 px-6 rounded-md hover:bg-[#00bcd4] transition"
            >
              Zobacz usługi →
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
}