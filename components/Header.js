// components/Header.js
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/legacy/image";

const Header = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Strona główna", path: "/" },
    { name: "Oferta", path: "/uslugi" },
    { name: "Realizacje", path: "/realizacje" },
    { name: "FAQ", path: "/faq" },
    { name: "Rekomendacje", path: "/rekomendacje" },
    { name: "Kontakt", path: "#formularz-kontaktowy" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full px-8 py-3 z-50">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <Link
          href="/"
          className="hover:opacity-80 transition flex items-center bg-white/20 backdrop-filter backdrop-blur-lg backdrop-saturate-150 border border-white/20 rounded-xl px-3 py-1"
        >
          <img
            src="/images/logo.webp"
            alt="Logo Titanium Systems"
            className="h-10 w-auto flex-shrink-0"
          />
        </Link>

        {/* Hamburger – mobile */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop nav + Instagram */}
        <div className="hidden lg:flex items-center space-x-3">
          <nav className="flex items-center space-x-2 bg-white/20 backdrop-filter backdrop-blur-lg backdrop-saturate-150 rounded-full text-base px-3 py-1 whitespace-nowrap">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`
                  relative px-4 py-1 transition-all duration-300 font-semibold rounded-full
                  ${
                    router.pathname === item.path
                      ? "bg-[#008080]/90 text-white"
                      : "text-white hover:bg-white/10"
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile nav */}
      {isMobileMenuOpen && (
        <nav className="mt-2 flex flex-col space-y-1 bg-white/20 backdrop-filter backdrop-blur-lg backdrop-saturate-150 rounded-lg text-base px-3 py-2 lg:hidden">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`
                block px-4 py-2 transition-all duration-300 font-semibold rounded-full
                ${
                  router.pathname === item.path
                    ? "bg-[#008080]/90 text-white"
                    : "text-white hover:bg-white/10"
                }
              `}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Instagram – mobile */}
          <div className="flex justify-center pt-2">
            <a
              href="https://www.instagram.com/it_titaniumsystems"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/instagram.svg" alt="Instagram" width={28} height={28} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
