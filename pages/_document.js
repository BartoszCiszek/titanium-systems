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
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "ul. Słoneczna 49",
                  "addressLocality": "Kleszczewo",
                  "postalCode": "63-005",
                  "addressCountry": "PL"
                },
                "description": "Usługi informatyczne w Poznaniu i Wielkopolsce: serwis komputerów, sieci, serwery, zdalne wsparcie i doradztwo IT."
              }`
            }}
          />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Titanium Systems" />
          <meta property="og:locale" content="pl_PL" />
          <meta property="og:title" content="Usługi IT Poznań – Titanium Systems" />
          <meta property="og:description" content="Profesjonalne usługi informatyczne w Poznaniu. Serwis komputerów, konfiguracja sieci i serwerów. Działamy lokalnie w całej Wielkopolsce." />
          <meta property="og:image" content="https://titaniumsystems.pl/images/logo.webp" />
          <meta property="og:url" content="https://titaniumsystems.pl/" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@TwojTwitter" />
          <meta name="twitter:creator" content="@TwojTwitter" />
          <meta name="twitter:title" content="Usługi IT Poznań – Titanium Systems" />
          <meta name="twitter:description" content="Profesjonalne usługi informatyczne w Poznaniu. Serwis komputerów, konfiguracja sieci i serwerów. Działamy lokalnie w całej Wielkopolsce." />
          <meta name="twitter:image" content="https://titaniumsystems.pl/images/logo.webp" />

          {/* Preconnect & DNS Prefetch for Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
          <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

          {/* Preload Fonts */}
          <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Poppins:wght@300;400;600&display=swap" />

          {/* Google Fonts */}
          <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />

          {/* Favicony i ikony */}
          <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />

          <link rel="icon" type="image/png" sizes="36x36" href="/favicon/android-icon-36x36.png" />
          <link rel="icon" type="image/png" sizes="48x48" href="/favicon/android-icon-48x48.png" />
          <link rel="icon" type="image/png" sizes="72x72" href="/favicon/android-icon-72x72.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon/android-icon-96x96.png" />
          <link rel="icon" type="image/png" sizes="144x144" href="/favicon/android-icon-144x144.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />

          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />

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
