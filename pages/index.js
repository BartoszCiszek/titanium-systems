// pages/index.js
import React, { useEffect } from "react";
import Head from "next/head";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    gsap.to(".fixed-bg", {
      filter: "blur(8px)",
      ease: "none",
      scrollTrigger: {
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  const gpuStyles = {
    willChange: "transform",
    WebkitBackfaceVisibility: "hidden",
    backfaceVisibility: "hidden",
    transform: "translateZ(0)",
  };

  return (
    <div>
      <Head>
        <title>Usługi IT Poznań | Titanium Systems - Wsparcie informatyczne, Serwis Komputerów, Sieci</title>
        <meta name="description" content="Profesjonalne usługi IT w Poznaniu. Serwis komputerów, konfiguracja sieci, wsparcie zdalne i serwery NAS. Titanium Systems – Informatyk w Wielkopolsce." />
        <meta
          name="keywords"
          content="informatyk Poznań, usługi IT, serwis komputerowy, naprawa komputerów, konfiguracja sieci, TrueNAS, Microsoft 365, VPN, zdalne wsparcie IT"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://titaniumsystems.pl/" />
      </Head>

      {/* Fixed background */}
      <div
        className="fixed inset-0 bg-cover bg-center fixed-bg z-0"
        style={{ backgroundImage: "url('/images/hero.webp')" }}
      />

      <main className="relative z-10">
        {/* HERO Section */}
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: [0, -20, 0] }}
            transition={{ opacity: { duration: 2 }, y: { delay: 2, repeat: Infinity, repeatType: "loop", duration: 2, ease: "easeInOut" } }}
            style={gpuStyles}
            className="text-white font-bold drop-shadow-xl font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-[8rem]"
          >
            Titanium Systems
          </motion.h1>

          {/* Scroll Down Arrow */}
          <motion.a
            href="#aboutme"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: [0, -20, 0] }}
            transition={{ opacity: { duration: 2 }, y: { delay: 2, repeat: Infinity, repeatType: "loop", duration: 2, ease: "easeInOut" } }}
            style={gpuStyles}
            className="mt-8 text-white text-3xl cursor-pointer"
            aria-label="Przewiń do sekcji O mnie"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.a>
        </section>

        {/* ABOUT ME Section */}
        <section id="aboutme" className="relative text-white py-48">
          <motion.a
            href="#hero"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: [0, 20, 0] }}
            transition={{ opacity: { duration: 2 }, y: { delay: 2, repeat: Infinity, repeatType: "loop", duration: 2, ease: "easeInOut" } }}
            style={gpuStyles}
            className="absolute top-6 left-1/2 -translate-x-1/2 text-white text-3xl cursor-pointer"
            aria-label="Przewiń do sekcji Hero"
          >
            <svg className="w-8 h-8 rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.a>

          <div className="flex flex-col md:flex-row items-stretch w-full md:w-10/12 mx-auto p-4">
            <div className="w-full md:w-1/2 flex">
              <img
                src="/images/about.webp"
                alt="Informatyk Poznań – Bartosz Ciszek – Titanium Systems"
                className="w-full h-auto max-w-[700px] max-h-[800px] object-cover rounded-lg shadow-lg drop-shadow-[0_0_10px_rgba(0,0,0,0.6)] mx-auto"
                loading="lazy"
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center mt-4 md:mt-0 md:ml-4">
              <h2 className="text-3xl font-bold mb-4 text-center text-[#00bcd4]">O mnie</h2>
              <h3 className="text-xl font-semibold mb-2">Dlaczego warto wybrać Titanium Systems?</h3>

              <p className="text-lg text-left">
                Nazywam się Bartosz Ciszek i stoję za działalnością Titanium Systems. Moja pasja do informatyki i komputerów towarzyszy mi od najmłodszych lat. Dziś przekuwam swoje wieloletnie doświadczenie w nowoczesne rozwiązania IT, oferując usługi tworzone z myślą o najwyższych standardach opieki nad sprzętem i infrastrukturą.
              </p>

              <p className="mt-4 text-lg text-left">W mojej pracy kieruję się trzema kluczowymi zasadami:</p>

              <ul className="list-disc ml-6 text-lg mt-2 text-left">
                <li><strong>Profesjonalizm:</strong> Każda usługa realizowana jest z najwyższą starannością.</li>
                <li><strong>Pasja i rozwój:</strong> Informatyka to moje życie, stale się szkolę i poszukuję innowacji.</li>
                <li><strong>Indywidualne podejście:</strong> Oferta zawsze dopasowana do potrzeb klienta.</li>
              </ul>

              <p className="mt-4 text-lg text-left">
                Pod marką Titanium Systems łączę pasję, determinację i bogatą wiedzę. Skutecznie realizuję nawet najtrudniejsze wyzwania IT, przekraczając oczekiwania klientów.
              </p>
            </div>
          </div>

          {/* Scroll to Services Section */}
          <motion.a
            href="#rozwoj"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: [0, -20, 0] }}
            transition={{ opacity: { duration: 2 }, y: { delay: 2, repeat: Infinity, repeatType: "loop", duration: 2, ease: "easeInOut" } }}
            style={gpuStyles}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-3xl cursor-pointer"
            aria-label="Przewiń do sekcji Rozwój usług"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.a>
        </section>

        {/* SERVICES Section */}
        <section id="rozwoj" className="text-white min-h-screen flex items-center py-12">
          <div className="flex flex-col w-full md:w-10/12 mx-auto p-4 space-y-6 text-lg">
            <h2 className="text-3xl font-bold text-center text-[#00bcd4]">Kompleksowe usługi IT w Poznaniu i Wielkopolsce</h2>

            <p>Od lat świadczę w Poznaniu i Wielkopolsce rzetelne usługi informatyczne. Specjalizuję się w serwisie komputerów stacjonarnych oraz naprawie laptopów: diagnoza sprzętowa, wymiana SSD i RAM, reinstalacja Windows/Linux/MacOS.</p>

            <p>Konfiguruję sieci LAN i Wi-Fi (Ubiquiti Unifi), tworzę VPN, tunele (Cloudflare, Tailscale) i chronię ruch sieciowy. Dzięki temu masz stabilne i bezpieczne środowisko.</p>

            <p>Wdrażam serwery NAS (TrueNAS, Synology, QNAP), planuję kopie zapasowe, odtwarzam dane – usługa backup danych to pewność, że nigdy nic nie zginie.</p>

            <p>Migracje do chmury (Microsoft 365, Google Workspace) z konfiguracją Teams, OneDrive czy Dysku Google – pracuj zdalnie wydajnie i bezpiecznie.</p>

            <p>Oferuję zdalne wsparcie (TeamViewer, AnyDesk) i dojazd do klienta. Umowy SLA z priorytetową pomocą i monitoringiem (system UniFi) utrzymują Twój biznes w ciągłej gotowości.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
