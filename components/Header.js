// components/Header.js
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/legacy/image";
import StarBorder from './StarBorder';


const Header = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Strona główna", path: "/" },
    { name: "Usługi", path: "/uslugi" },
    { name: "Realizacje", path: "/realizacje" },
    { name: "FAQ", path: "/faq" },
    { name: "Rekomendacje", path: "/rekomendacje" },
  ];
  
  const allMenuItems = [...menuItems, { name: "Kontakt", path: "#formularz-kontaktowy" }];

  return (
    <header className="fixed top-0 left-0 w-full p-4 z-50">
      <div className="container mx-auto flex items-center justify-between bg-black/30 backdrop-blur-lg border border-white/20 rounded-full p-2">
        
        <Link href="/" className="flex-shrink-0 ml-2">
            <img
              src="/images/logo.webp"
              alt="Logo Titanium Systems"
              className="h-10 w-auto"
            />
        </Link>

        <nav className="hidden lg:flex items-center gap-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`
                px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300
                ${
                  router.pathname === item.path
                    ? "bg-white/10 text-white"
                    : "text-gray-300 hover:text-white"
                }
              `}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Przycisk Kontakt (widoczny tylko na desktopie) */}
        <div className="hidden lg:block">
            <Link href="#formularz-kontaktowy" legacyBehavior>
              <StarBorder
                as="button"
                className="custom-class"
                color="cyan"
                speed="5s"
              >
                <span className="animate-shine">
                  Kontakt
                </span>
            </StarBorder>
          </Link>
        </div>

        {/* Hamburger – mobile */}
        <button
          className="lg:hidden text-white focus:outline-none z-10 mr-4"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>

      </div>

      {/* Menu mobilne */}
      {isMobileMenuOpen && (
        <nav className="mt-2 flex flex-col space-y-1 bg-black/50 backdrop-blur-lg border border-white/20 rounded-lg text-base p-2 lg:hidden">
          {allMenuItems.map((item) => {
            const linkClassName = `
              block text-center px-4 py-2 transition-all duration-300 font-semibold rounded-full
              ${
                router.pathname === item.path
                  ? "bg-[#008080]/90 text-white"
                  : "text-white hover:bg-white/10"
              }
            `;

            if (item.path.startsWith("#")) {
              return (
                <a
                  key={item.path}
                  href={item.path}
                  className={linkClassName}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              );
            }

            return (
              <Link key={item.path} href={item.path} passHref legacyBehavior>
                <a
                  className={linkClassName}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
};

export default Header;