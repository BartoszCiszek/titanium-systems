// components/GlobalCTA.js
import Link from 'next/link';

const GlobalCTA = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Link href="/kontakt" legacyBehavior>
        <a>
          <button
            className="
              bg-[#008080]
              py-1 px-4 
              sm:py-2 sm:px-6 
              text-sm sm:text-base 
              rounded-md 
              hover:bg-[#00bcd4]
              transition-all
              duration-300 
              hover:-translate-y-1
              shadow-lg
              font-semibold
            "
          >
            {/* Tekst z efektem "shine" */}
            <span className="animate-shine">
              Skontaktuj się
            </span>
          </button>
        </a>
      </Link>
    </div>
  );
};

export default GlobalCTA;