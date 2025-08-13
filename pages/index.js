// pages/index.js
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import TextType from '../components/TextType';
import SpotlightCard from '../components/SpotlightCard';
// Usunięto import Stepper, { Step } - nie jest już potrzebny tutaj
import { FiCpu, FiVideo, FiMusic, FiGrid, FiAward, FiCheckCircle, FiTool } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const offerSegments = [
  { icon: <FiCpu size={40} />, title: "Gaming High-End", description: "Komputery dla graczy premium, zoptymalizowane pod VR i Overclocking (OC)." },
  { icon: <FiVideo size={40} />, title: "Twórcy Wideo/Foto", description: "Stacje robocze do płynnego renderowania w 4K/8K w DaVinci Resolve i Adobe Premiere." },
  { icon: <FiMusic size={40} />, title: "Studio Audio", description: "Ciche i wydajne maszyny z niską latencją, gotowe do pracy z interfejsami ASIO." },
  { icon: <FiGrid size={40} />, title: "CAD/3D", description: "Certyfikowane GPU i maksymalna stabilność w programach AutoCAD, Blender i innych." },
];

const differentiators = [
  { icon: <FiCheckCircle size={32} />, title: "Indywidualny Dobór Komponentów", description: "Zawsze dobieramy części idealnie pod Twoje cele i budżet, bez kompromisów." },
  { icon: <FiTool size={32} />, title: "Optymalizacja BIOS/Windows", description: "Konfigurujemy BIOS/UEFI i system operacyjny pod konkretne zastosowanie, wyciskając maksimum wydajności." },
  { icon: <FiAward size={32} />, title: "Testy w Realnych Warunkach", description: "Każdą maszynę testujemy w grach i aplikacjach, których będziesz używać na co dzień." },
];

export default function Home() {

  const gpuStyles = {
    willChange: "transform",
    WebkitBackfaceVisibility: "hidden",
    backfaceVisibility: "hidden",
    transform: "translateZ(0)",
  };

  return (
    <div>
      <Head>
        <title>Titanium Systems | Budowa personalizowanych komputerów i stacji roboczych</title>
        <meta name="description" content="Budujemy komputery i stacje robocze idealnie dopasowane do Twoich potrzeb - od gamingu po profesjonalne zastosowania w produkcji wideo, audio i CAD." />
        <meta
          name="keywords"
          content="custom PC, składanie komputerów, stacje robocze, komputery dla graczy, komputery do wideo, komputery do audio, komputery do CAD, Titanium Systems"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://titaniumsystems.pl/" />
      </Head>

      <main className="relative z-10">
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center">
          <TextType
            className="font-orbitron font-bold text-shadow-custom text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl"
            text={["Titanium Systems", "Moc dopasowana do Ciebie"]}
            typingSpeed={75}
            pauseDuration={3000}
            showCursor={true}
            cursorCharacter="|"
          />

          <motion.a
            href="#aboutme"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: [0, -20, 0] }}
            transition={{ opacity: { duration: 2, delay: 2.5 }, y: { delay: 2.7, repeat: Infinity, repeatType: "loop", duration: 2, ease: "easeInOut" } }}
            style={gpuStyles}
            className="mt-8 text-white text-3xl cursor-pointer"
            aria-label="Przewiń do sekcji O mnie"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.a>
        </section>

        <section id="aboutme" className="relative text-white py-48">
          <div className="relative">
              <div className="flex flex-col md:flex-row items-center w-full md:w-10/12 mx-auto p-4">
                <div className="w-full md:w-1/2 flex justify-center">
                  <img
                    src="/images/about.webp"
                    alt="Bartosz Ciszek – ekspert w budowie personalizowanych komputerów"
                    className="w-full h-auto max-w-[500px] object-cover rounded-lg shadow-lg"
                    loading="lazy"
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center mt-8 md:mt-0 md:ml-8">
                  <h2 className="text-3xl font-bold mb-4 text-center md:text-left text-[#00bcd4]">Ekspert od wydajności</h2>
                  <p className="text-lg text-left">Nazywam się Bartosz Ciszek. W Titanium Systems zamieniam pasję do technologii w realną moc obliczeniową. Nie sprzedaję gotowych rozwiązań - tworzę narzędzia pracy i rozrywki, które są precyzyjnie skalibrowane pod Twoje unikalne potrzeby.</p>
                  <p className="mt-4 text-lg text-left">Specjalizuję się w budowie wydajnych, personalizowanych komputerów, które napędzają kreatywność i dominację w grach. Moja misja to dostarczyć Ci sprzęt, który po prostu działa - bez niespodzianek, za to z gwarancją najwyższej wydajności.</p>
                </div>
              </div>
          </div>
        </section>

        <section id="oferta" className="text-white py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-[#00bcd4]">Komputery stworzone dla Ciebie</h2>
            <p className="text-lg text-center text-gray-300 mb-12 max-w-3xl mx-auto">
              Niezależnie od tego, czy jesteś graczem, twórcą wideo, producentem muzycznym, czy inżynierem, zbudujemy maszynę, która sprosta Twoim wymaganiom.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {offerSegments.map((segment, index) => (
                <SpotlightCard key={index} className="flex flex-col text-center items-center p-6">
                  <div className="mb-4 text-[#00bcd4]">{segment.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{segment.title}</h3>
                  <p className="text-gray-400 flex-grow">{segment.description}</p>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        <section id="differentiators" className="text-white py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-[#00bcd4]">Co nas wyróżnia?</h2>
            <p className="text-lg text-center text-gray-300 mb-12 max-w-2xl mx-auto">
              Nasze podejście gwarantuje, że otrzymujesz nie tylko komputer, ale kompleksowe, zoptymalizowane rozwiązanie.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {differentiators.map((item, index) => (
                <SpotlightCard key={index} className="flex flex-col text-center items-center p-6">
                  <div className="mb-4 text-[#00bcd4]">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400 flex-grow">{item.description}</p>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>   
      </main>
    </div>
  );
}
