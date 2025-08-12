import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pl">
        <Head>
          {/* Google Tag (gtag.js) */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-17270909831"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-17270909831');
              `,
            }}
          />

          {/* Schema.org LocalBusiness */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Titanium Systems",
                "image": "https://titaniumsystems.pl/images/logo.webp",
                "@id": "https://titaniumsystems.pl/",
                "url": "https://titaniumsystems.pl/",
                "telephone": "+48 603 832 422",
                "priceRange": "od 150zł",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "ul. Słoneczna 49",
                  "addressLocality": "Kleszczewo",
                  "postalCode": "63-005",
                  "addressCountry": "PL"
                },
                "description": "Eksperci w budowie personalizowanych komputerów i stacji roboczych dla graczy, twórców i profesjonalistów w Poznaniu i Wielkopolsce."
              }`
            }}
          />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Titanium Systems" />
          <meta property="og:locale" content="pl_PL" />
          <meta property="og:title" content="Titanium Systems | Budowa personalizowanych komputerów" />
          <meta property="og:description" content="Budujemy komputery i stacje robocze idealnie dopasowane do Twoich potrzeb - od gamingu po profesjonalne zastosowania." />
          <meta property="og:image" content="https://titaniumsystems.pl/images/logo.webp" />
          <meta property="og:url" content="https://titaniumsystems.pl/" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Titanium Systems | Budowa personalizowanych komputerów" />
          <meta name="twitter:description" content="Budujemy komputery i stacje robocze idealnie dopasowane do Twoich potrzeb - od gamingu po profesjonalne zastosowania." />
          <meta name="twitter:image" content="https://titaniumsystems.pl/images/logo.webp" />

          {/* Pozostałe tagi Head bez zmian */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />
          <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;