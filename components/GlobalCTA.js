// components/GlobalCTA.js
import Link from 'next/link';
import StarBorder from './StarBorder';

const GlobalCTA = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Link href="#formularz-kontaktowy" legacyBehavior>
          <StarBorder
            as="button"
            className="custom-class"
            color="cyan"
            speed="5s"
          >
            <span className="animate-shine">
              Skontaktuj się
            </span>
        </StarBorder>
      </Link>
    </div>
  );
};

export default GlobalCTA;