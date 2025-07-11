import Link from 'next/link';
import Head from 'next/head';

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#212121] text-white text-center p-8">
      <Head>
        <title>404 - Strona nie znaleziona | Titanium Systems</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-6">Ups! Nie znaleziono takiej strony.</h2>
      <p className="mb-8 max-w-md">
        Strona, której szukasz, mogła zostać usunięta, zmieniła nazwę lub jest tymczasowo niedostępna.
      </p>

      <Link href="/" legacyBehavior>
        <a className="bg-[#008080] hover:bg-[#00bcd4] text-white py-3 px-6 rounded-md transition-transform transform hover:-translate-y-1">
          Wróć na stronę główną
        </a>
      </Link>
    </div>
  );
}
