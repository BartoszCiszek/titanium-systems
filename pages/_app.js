import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GlobalCTA from "../components/GlobalCTA";  // Dodany import
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const noPaddingRoutes = ["/", "/index", "/oferta", "/kontakt"];
  const topPadding = noPaddingRoutes.includes(router.pathname) ? "" : "pt-20";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-grow ${topPadding}`}>
        <Component {...pageProps} />
      </main>
      <Footer />
      <GlobalCTA />  {/* Dodany komponent CTA */}
    </div>
  );
}

export default MyApp;
