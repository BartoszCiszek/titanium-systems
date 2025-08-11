// pages/_app.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GlobalCTA from "../components/GlobalCTA";
import ContactFormSection from "../components/ContactFormSection";
import DarkVeil from "../components/DarkVeil";
import '../styles/GlareHover.css'
import '../styles/SpotlightCard.css'
import '../styles/StarBorder.css'
import "../styles/globals.css";
import { FiArrowLeft } from "react-icons/fi"; // Import ikony strzałki

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const noPaddingRoutes = ["/"];
  const topPadding = noPaddingRoutes.includes(router.pathname) ? "" : "pt-20";

  // Przycisk będzie widoczny na wszystkich stronach /uslugi/...
  const shouldShowBackButton = router.pathname.startsWith('/uslugi/') && router.pathname !== '/uslugi';

  return (
    <>
      {/* Tło dodane globalnie */}
      <div className="fixed inset-0 z-0">
        <DarkVeil
            hueShift={43}
            noiseIntensity={0}
            scanlineIntensity={0}
            warpAmount={0}
        />
      </div>

      {/* Cała aplikacja renderowana "nad" tłem */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        {/* Globalny przycisk powrotu */}
        {shouldShowBackButton && (
          <Link href="/uslugi" className="back-button">
              <FiArrowLeft size={24} />
          </Link>
        )}
        <main className={`flex-grow ${topPadding}`}>
          <Component {...pageProps} />
        </main>
        <ContactFormSection />
        <Footer />
        <GlobalCTA />
      </div>
    </>
  );
}

export default MyApp;