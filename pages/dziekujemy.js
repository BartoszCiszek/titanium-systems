// pages/dziekujemy.js
import Head from 'next/head';
import Link from 'next/link';

export default function Dziekujemy() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white text-center p-8">
      <Head>
        <title>Dziękujemy! | Titanium Systems</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <h1 className="text-4xl font-bold mb-4 text-green-400">Dziękujemy!</h1>
      <h2 className="text-2xl mb-6">Twoja wiadomość została pomyślnie wysłana.</h2>
      <p className="mb-8 max-w-md">
        Skontaktujemy się z Tobą tak szybko, jak to możliwe.
      </p>

      <Link href="/" legacyBehavior>
        <a className="bg-[#008080] hover:bg-[#00bcd4] text-white py-3 px-6 rounded-md transition-transform transform hover:-translate-y-1">
          Wróć na stronę główną
        </a>
      </Link>
    </div>
  );
}