// pages/_app.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GlobalCTA from "../components/GlobalCTA";
import ContactFormSection from "../components/ContactFormSection";
import DarkVeil from "../components/DarkVeil";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const noPaddingRoutes = ["/"];
  const topPadding = noPaddingRoutes.includes(router.pathname) ? "" : "pt-20";

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