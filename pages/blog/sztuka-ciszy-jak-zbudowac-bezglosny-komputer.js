// pages/blog/sztuka-ciszy-jak-zbudowac-bezglosny-komputer.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "../../components/ui/tracing-beam";

const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Czy chłodzenie pasywne jest wystarczające dla mocnego komputera do gier?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dla absolutnie topowych, prądożernych komponentów, w pełni pasywne chłodzenie może być niewystarczające. Jednak dla większości procesorów i kart graficznych ze średniej i wyższej półki, przy odpowiednio dużej i przewiewnej obudowie, jest to jak najbardziej możliwe. Kluczem jest undervolting i staranny dobór komponentów o wysokiej sprawności energetycznej."
        }
      },
      {
        "@type": "Question",
        "name": "Czy dyski SSD są całkowicie bezgłośne?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak. Dyski SSD, w przeciwieństwie do tradycyjnych dysków HDD, nie posiadają żadnych ruchomych części (talerzy, głowic), dzięki czemu są całkowicie bezgłośne. W niektórych ekstremalnych przypadkach może wystąpić zjawisko 'piszczenia cewek', ale jest to bardzo rzadkie."
        }
      },
      {
        "@type": "Question",
        "name": "Jaki jest największy kompromis przy budowie cichego komputera?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Największym kompromisem jest często rozmiar i waga. Komponenty chłodzenia pasywnego, takie jak duże radiatory, oraz obudowy zaprojektowane z myślą o ciszy, są zazwyczaj znacznie większe i cięższe od swoich standardowych odpowiedników. Czasami może to również oznaczać rezygnację z absolutnie najwyższej wydajności na rzecz kultury pracy."
        }
      }
    ]
};

export default function SztukaCiszy() {
  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>Sztuka Ciszy: Jak zbudować bezgłośny komputer? | Titanium Systems</title>
        <meta name="description" content="Kompleksowy poradnik o budowie cichego komputera. Dowiedz się jak dobrać chłodzenie, zasilacz i obudowę, aby cieszyć się absolutną ciszą." />
        <link rel="canonical" href="https://titaniumsystems.pl/blog/sztuka-ciszy-jak-zbudowac-bezglosny-komputer" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      </Head>
      
      <main className="container mx-auto py-24 px-4">
        <TracingBeam className="px-6">
          <article className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <p className="text-sm text-[#00bcd4] font-semibold">Poradniki</p>
              <h1 className="text-4xl lg:text-5xl font-bold mt-2">
              Sztuka Ciszy: Jak zbudować bezgłośny komputer?
              </h1>
              <p className="text-gray-400 mt-4">Opublikowano: 21 sierpnia 2025</p>
            </header>
            
            <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
              <Image src="/images/silent-pc.webp" alt="Bezgłośny komputer w ciemnym pokoju" layout="fill" objectFit="cover" />
            </div>

            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
              <p className="text-xl leading-relaxed">
              W świecie gamingu i profesjonalnej pracy, gdzie liczy się każda klatka na sekundę, często zapominamy o jednym z najważniejszych aspektów komfortu – ciszy. Szum wentylatorów może być rozpraszający i męczący. Na szczęście, budowa niemal bezgłośnego komputera jest w zasięgu ręki.
              </p>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">1. Chłodzenie: Pasywne czy Półpasywne?</h2>
                <p>Sercem cichego komputera jest odpowiednie chłodzenie. Najlepsze efekty daje chłodzenie pasywne, gdzie ciepło odprowadzane jest wyłącznie przez duże radiatory, bez użycia wentylatorów. Jeśli jednak potrzebujesz większej wydajności, idealnym kompromisem jest chłodzenie półpasywne, gdzie wentylatory włączają się tylko pod dużym obciążeniem.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">2. Zasilacz: Cichy Bohater</h2>
                <p>Wybierz zasilacz z certyfikatem 80 Plus Gold lub wyższym i trybem półpasywnym. Dzięki temu wentylator w zasilaczu będzie stał w miejscu przez większość czasu, a Ty zyskasz absolutną ciszę podczas pracy biurowej czy przeglądania internetu.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">3. Obudowa: Twierdza Ciszy</h2>
                <p>Zainwestuj w obudowę wyciszaną, wyposażoną w maty dźwiękochłonne i zaprojektowaną tak, aby minimalizować wibracje. Firmy takie jak be quiet! czy Fractal Design oferują modele, które łączą doskonałe wyciszenie z dobrym przepływem powietrza.</p>
              </div>

              <div className="mt-16 border-t border-gray-700 pt-8">
                <h2 className="text-3xl font-bold mb-4 text-white">Często zadawane pytania (FAQ)</h2>
                {faqData.mainEntity.map((faq, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-200">{faq.name}</h3>
                    <p className="text-gray-400 mt-2">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-16 border-t border-gray-700 pt-8">
                <p className="text-lg mb-4">Marzysz o komputerze, który słychać tylko wtedy, kiedy tego chcesz? Skontaktuj się z nami!</p>
                <Link href="#formularz-kontaktowy" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                    Zbuduj z nami cichy komputer
                </Link>
              </div>
            </div>
          </article>
        </TracingBeam>
      </main>
    </div>
  );
}