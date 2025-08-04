// components/Footer.js
import Link from 'next/link';
import Image from "next/legacy/image";

const Footer = () => {
  // Linki do nawigacji
  const quickLinks = [
    { name: 'Strona główna', path: '/' },
    { name: 'Usługi', path: '/uslugi' },
    { name: 'Realizacje', path: '/realizacje' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Rekomendacje', path: '/rekomendacje' },
    { name: 'Polityka Prywatności', path: '/polityka' },
  ];

  // Linki do oferty
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
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
        
        {/* Kolumna 1: Logo i Slogan */}
        {/* ZMIANA: Dodano items-center md:items-start aby centrować na mobilnych */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="mb-4">
            <Image src="/images/logo.webp" alt="Titanium Systems Logo" width={250} height={40} />
          </Link>
          <p className="text-gray-400 mt-2">Solid IT. No surprises.</p>
          <p className="text-gray-400">We handle the technology; you drive the business.</p>
        </div>

        {/* Kolumna 2: Szybkie linki */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Szybkie linki</h3>
          <ul className="space-y-2">
            {quickLinks.map((item) => (
              <li key={item.path}>
                <Link href={item.path} className="text-gray-300 hover:text-[#00bcd4] transition">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolumna 3: Oferta */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Oferta</h3>
          <ul className="space-y-2">
            {offerLinks.map((item) => (
              <li key={item.path}>
                <Link href={item.path} className="text-gray-300 hover:text-[#00bcd4] transition">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Kolumna 4: Kontakt */}
        {/* ZMIANA: Dodano items-center md:items-start aby centrować na mobilnych */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold mb-4 text-white">Kontakt</h3>
          <ul className="space-y-2 text-gray-300">
            <li>📞 <a href="tel:+48603832422" className="hover:text-[#00bcd4] transition">+48 603 832 422</a></li>
            <li>📧 <a href="mailto:bartosz.ciszek@titaniumsystems.pl" className="hover:text-[#00bcd4] transition">bartosz.ciszek@titaniumsystems.pl</a></li>
          </ul>
          {/* ZMIANA: Dodano justify-center md:justify-start aby centrować na mobilnych */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <a href="https://www.tiktok.com/@its_titaniumsystems" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <img src="/tiktok.svg" alt="TikTok" className="w-8 h-8 opacity-80 transition transform hover:scale-110" />
            </a>
            <a href="https://www.instagram.com/it_titaniumsystems" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/instagram.svg" alt="Instagram" className="w-8 h-8 opacity-80 transition transform hover:scale-110" />
            </a>
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