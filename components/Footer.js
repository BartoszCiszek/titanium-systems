// components/Footer.js
import Link from 'next/link';
import Image from "next/legacy/image";
import { FaInstagram, FaTiktok, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Strona główna', path: '/' },
    { name: 'Usługi', path: '/uslugi' },
    { name: 'Realizacje', path: '/realizacje' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Rekomendacje', path: '/rekomendacje' },
    { name: 'Polityka Prywatności', path: '/polityka' },
  ];

  const offerLinks = [
    { name: 'Serwis i modernizacja komputerów', path: '/uslugi/serwis-komputerow' },
    { name: 'Instalacja systemów', path: '/uslugi/instalacja-systemow' },
    { name: 'Bezpieczeństwo i dane', path: '/uslugi/bezpieczenstwo-danych' },
    { name: 'Administracja sieciami', path: '/uslugi/administracja-sieciami' },
    { name: 'Wirtualizacja', path: '/uslugi/wirtualizacja' },
    { name: 'Umowy serwisowe (SLA)', path: '/uslugi/umowy-serwisowe' },
  ];

  return (
    <footer className="w-full bg-[#1c1c1c] text-white py-12 px-4 relative z-20">
      <div className="container mx-auto">
        {/* Główny kontener - Flexbox */}
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          
          {/* Lewa strona: Logo i Slogan */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/4">
            <Link href="/" className="mb-4">
              <Image src="/images/logo.webp" alt="Titanium Systems Logo" width={250} height={40} />
            </Link>
            <p className="text-gray-400 mt-2 text-sm animate-shine">Solid IT. No surprises.</p>
            <p className="text-gray-400 text-sm animate-shine">We handle the technology; you drive the business.</p>
          </div>

          {/* Prawa strona: Kontener na trzy kolumny z linkami */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center sm:text-left">
            <div>
              <h3 className="text-lg font-bold mb-4 text-white animate-shine">Szybkie linki</h3>
              <ul className="space-y-2 text-sm">
                {quickLinks.map((item) => (
                  <li key={item.path}>
                    <Link href={item.path} className="text-gray-300 hover:text-[#00bcd4] transition">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-white animate-shine">Oferta</h3>
              <ul className="space-y-2 text-sm">
                {offerLinks.map((item) => (
                  <li key={item.path}>
                    <Link href={item.path} className="text-gray-300 hover:text-[#00bcd4] transition">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-white animate-shine">Social</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="https://www.instagram.com/it_titaniumsystems" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center gap-2 text-gray-300 hover:text-[#00bcd4] transition justify-center sm:justify-start">
                    <FaInstagram size={24} />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@its_titaniumsystems" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="flex items-center gap-2 text-gray-300 hover:text-[#00bcd4] transition justify-center sm:justify-start">
                    <FaTiktok size={24} />
                    <span>TikTok</span>
                  </a>
                </li>
                <li>
                  <a href="/open-source" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex items-center gap-2 text-gray-300 hover:text-[#00bcd4] transition justify-center sm:justify-start">
                    <FaGithub size={24} />
                    <span>GitHub</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Dolny pasek z prawami autorskimi */}
      <div className="text-center mt-12 pt-6 border-t border-gray-700">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Titanium Systems. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
};

export default Footer;