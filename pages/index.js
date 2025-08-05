// pages/index.js
import Head from "next/head";
import Image from "next/legacy/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import TextType from '../components/TextType';
import SpotlightCard from '../components/SpotlightCard';
import CountUp from "../components/CountUp";
import { FiTarget, FiAward, FiClock, FiCpu, FiShield, FiLifeBuoy, FiUsers } from "react-icons/fi";
import LiquidChrome from "../components/LiquidChrome";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  { icon: <FiTarget size={32} />, title: "Indywidualne podejście", description: "Każdy projekt traktujemy jako unikalne wyzwanie, dopasowując rozwiązania do Twoich potrzeb." },
  { icon: <FiAward size={32} />, title: "Profesjonalizm i Pasja", description: "Łączymy wieloletnie doświadczenie z autentyczną pasją do technologii." },
  { icon: <FiClock size={32} />, title: "Szybki Czas Reakcji", description: "Rozumiemy, jak ważny jest czas w biznesie. Działamy sprawnie i skutecznie." },
  { icon: <FiCpu size={32} />, title: "Nowoczesne Rozwiązania", description: "Stale śledzimy trendy, aby oferować Ci najnowsze i najbardziej efektywne technologie." },
  { icon: <FiShield size={32} />, title: "Bezpieczeństwo Danych", description: "Twoje dane są dla nas priorytetem. Stosujemy sprawdzone metody ochrony." },
  { icon: <FiLifeBuoy size={32} />, title: "Wsparcie na Każdym Etapie", description: "Od konsultacji, przez wdrożenie, aż po stałą opiekę serwisową – jesteśmy z Tobą." },
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

      <div className="fixed inset-0 z-0">
        <LiquidChrome />
      </div>

      <main className="relative z-10">
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center">
          <TextType 
            className="font-orbitron font-bold text-shadow-custom text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl"
            text={["Titanium Systems", "Solid IT. No surprises."]}
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
          {/* Div dla tła z gradientem */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50 backdrop-blur-sm"></div>
          
          {/* Kontener na treść, aby była nad tłem */}
          <div className="relative">
              <motion.a
                href="#hero"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: [0, 20, 0] }}
                transition={{ opacity: { duration: 2 }, y: { delay: 2, repeat: Infinity, repeatType: "loop", duration: 2, ease: "easeInOut" } }}
                style={gpuStyles}
                className="absolute top-[-150px] left-1/2 -translate-x-1/2 text-white text-3xl cursor-pointer"
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
                    className="w-full h-auto max-w-[700px] max-h-[800px] object-cover rounded-lg shadow-lg"
                    loading="lazy"
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center mt-4 md:mt-0 md:ml-4">
                  <h2 className="text-3xl font-bold mb-4 text-center text-[#00bcd4]">O mnie</h2>
                  <h3 className="text-xl font-semibold mb-2">Dlaczego warto wybrać Titanium Systems?</h3>
                  <p className="text-lg text-left">Nazywam się Bartosz Ciszek i stoję za działalnością Titanium Systems...</p>
                  <p className="mt-4 text-lg text-left">W mojej pracy kieruję się trzema kluczowymi zasadami:</p>
                  <ul className="list-disc ml-6 text-lg mt-2 text-left">
                    <li><strong>Profesjonalizm:</strong> Każda usługa realizowana jest z najwyższą starannością.</li>
                    <li><strong>Pasja i rozwój:</strong> Informatyka to moje życie, stale się szkolę i poszukuję innowacji.</li>
                    <li><strong>Indywidualne podejście:</strong> Oferta zawsze dopasowana do potrzeb klienta.</li>
                  </ul>
                  <p className="mt-4 text-lg text-left">Pod marką Titanium Systems łączę pasję, determinację i bogatą wiedzę...</p>
                </div>
              </div>

              <motion.a
                href="#benefits"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: [0, -20, 0] }}
                transition={{ opacity: { duration: 2 }, y: { delay: 2, repeat: Infinity, repeatType: "loop", duration: 2, ease: "easeInOut" } }}
                style={gpuStyles}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-3xl cursor-pointer"
                aria-label="Przewiń do sekcji Benefits"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </motion.a>
          </div>
        </section>

        <section id="benefits" className="text-white py-24 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-[#00bcd4]">Dlaczego My?</h2>
            <p className="text-lg text-center text-gray-300 mb-12 max-w-2xl mx-auto">
              Wybierając Titanium Systems, zyskujesz partnera, który dba o każdy detal Twojej infrastruktury IT.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <SpotlightCard key={index} className="flex flex-col text-center items-center">
                  {/* --- 3. Dodajemy ikonę --- */}
                  <div className="mb-4 text-[#00bcd4]">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-400 flex-grow">{benefit.description}</p>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        <section id="liczbaklientow" className="py-24 bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="container mx-auto px-4 flex justify-center">
                <SpotlightCard className="max-w-2xl w-full flex flex-col items-center text-center p-8">
                    <div className="mb-6">
                        <Image src="/images/logo.webp" alt="Titanium Systems Logo" width={300} height={48} />
                    </div>
                    <div className="text-[#00bcd4] mb-4">
                        <FiUsers size={50} />
                    </div>
                    <div className="text-6xl font-bold text-white mb-2">
                        +<CountUp to={57} /> 
                    </div>
                    <p className="text-xl text-gray-300">Zadowolonych Klientów</p>
                </SpotlightCard>
            </div>
        </section>

        <section id="rozwoj" className="text-white min-h-screen flex items-center py-12 bg-black bg-opacity-50 backdrop-blur-sm">
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