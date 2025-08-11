// pages/open-source.js
import Head from "next/head";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const GitHubButton = () => (
  <a
    href="https://github.com/BartoszCiszek/titanium-systems"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-[#008080] rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl"
  >
    <FaGithub size={24} />
    <span>Zobacz kod na GitHubie</span>
  </a>
);

export default function OpenSource() {
  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>Open Source - Kod Źródłowy Strony | Titanium Systems</title>
        <meta name="description" content="Strona Titanium Systems jest projektem open-source. Zobacz kod, zgłoś błędy lub zaproponuj zmiany na naszym publicznym repozytorium GitHub." />
        <link rel="canonical" href="https://titaniumsystems.pl/open-source" />
      </Head>

      <main className="container mx-auto py-32 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-[#00bcd4]">
            Jesteśmy Open Source
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Wierzymy w transparentność i siłę społeczności. Dlatego kod źródłowy naszej strony jest w pełni otwarty i dostępny publicznie na GitHubie.
          </p>
          <div className="p-8 rounded-xl shadow-lg max-w-3xl mx-auto mb-12 text-left space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">Dlaczego to robimy?</h2>
            <p className="text-gray-300">
              Udostępniając kod, chcemy pokazać nasze zaangażowanie w jakość i nowoczesne technologie. To także świetna okazja do nauki dla innych deweloperów oraz szansa na otrzymanie cennych uwag od społeczności.
            </p>
            <h3 className="text-xl font-semibold text-white pt-4">Co możesz zrobić?</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Przeglądać kod:</strong> Zobacz, jak strona została zbudowana, od komponentów React po animacje.</li>
              <li><strong>Zgłaszać błędy:</strong> Znalazłeś(-aś) coś, co nie działa, jak powinno? Daj nam znać, otwierając "issue".</li>
              <li><strong>Proponować zmiany:</strong> Masz pomysł na ulepszenie? Chętnie zobaczymy Twoje "pull requesty".</li>
            </ul>
          </div>
          <GitHubButton />
        </motion.div>
      </main>
    </div>
  );
}