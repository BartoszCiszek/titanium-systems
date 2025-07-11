// components/Footer.js
import Image from "next/legacy/image";

// Style wymuszające akcelerację sprzętową (bez transform!)
const gpuAccelerationStyles = {
  willChange: "transform",
  WebkitBackfaceVisibility: "hidden",
  backfaceVisibility: "hidden",
};

const Footer = () => {
  return (
    <footer className="w-full px-4 py-4 relative z-20">
      <div className="container mx-auto grid grid-cols-3 items-center gap-4 text-lg">
        {/* Kolumna 1 – Ikony TikToka i Instagrama */}
        <div className="flex gap-4 justify-start">
          <a
            href="https://www.tiktok.com/@its_titaniumsystems"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/tiktok.svg"
              alt="TikTok"
              width={50}
              height={50}
              style={gpuAccelerationStyles}
              className="opacity-80 transition transform hover:scale-110"
            />
          </a>
          <a
            href="https://www.instagram.com/it_titaniumsystems"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/instagram.svg"
              alt="Instagram"
              width={50}
              height={50}
              style={gpuAccelerationStyles}
              className="opacity-80 transition transform hover:scale-110"
            />
          </a>
        </div>

        {/* Kolumna 2 – Napis (środek) */}
        <div className="text-center">
          <p className="text-sm sm:text-base text-white font-normal">
            © 2025 Titanium Systems
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;