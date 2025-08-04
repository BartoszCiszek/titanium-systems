// pages/uslugi/wymiana-pasty-termoprzewodzacej.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "../../components/ui/tracing-beam";

export default function WymianaPasty() {
  return (
    <div className="min-h-screen bg-[#212121] text-white">
      <Head>
        <title>Wymiana Pasty Termoprzewodzącej Poznań | CPU i GPU</title>
        <meta name="description" content="Profesjonalna wymiana pasty termoprzewodzącej na procesorze (CPU) i karcie graficznej (GPU) w Poznaniu. Obniż temperatury, zwiększ wydajność i ciesz się cichą pracą komputera." />
        <link rel="canonical" href="https://titaniumsystems.pl/uslugi/wymiana-pasty-termoprzewodzacej" />
      </Head>
      <main className="container mx-auto py-24 px-4">
        <TracingBeam className="px-6">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-[#00bcd4]">
              Wymiana Pasty Termoprzewodzącej
            </h1>

            <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
              <Image src="/images/realizacja4_2.webp" alt="Nakładanie nowej pasty termoprzewodzącej na procesor" layout="fill" objectFit="cover" />
            </div>
            
            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
              <p className="text-xl leading-relaxed">
                Czy Twój komputer stacjonarny lub laptop pracuje głośniej niż kiedyś? Czy obudowa staje się gorąca nawet przy prostych zadaniach? To klasyczne objawy zużytej pasty termoprzewodzącej – cichego wroga wydajności i żywotności Twojego sprzętu.
              </p>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Czym jest i po co służy pasta termoprzewodząca?</h2>
                <p>
                  Pasta termoprzewodząca to plastyczna substancja, którą nakłada się pomiędzy procesor (CPU) lub kartę graficzną (GPU) a ich system chłodzenia (radiator). Jej zadaniem jest wypełnienie mikroskopijnych nierówności na obu powierzchniach, aby zapewnić maksymalnie efektywne odprowadzanie ciepła. Bez niej, Twój komputer szybko by się przegrzał i wyłączył.
                </p>
              </div>

              <div>
                  <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#00bcd4]">Objawy zużytej pasty termoprzewodzącej</h3>
                  <p>
                    Z czasem każda pasta traci swoje właściwości – wysycha, kruszeje i przestaje efektywnie przewodzić ciepło. Jak to rozpoznać?
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li><strong>Wysokie temperatury:</strong> Procesor lub karta graficzna osiągają wysokie temperatury (85-100°C) nawet bez dużego obciążenia.</li>
                    <li><strong>Głośna praca wentylatorów:</strong> Aby schłodzić przegrzewające się podzespoły, wentylatory muszą pracować na maksymalnych obrotach, generując duży hałas.</li>
                    <li><strong>Spadek wydajności (Throttling):</strong> Komputer automatycznie obniża taktowanie procesora/karty graficznej, aby uniknąć uszkodzenia, co odczuwasz jako "mulenie", spadki klatek w grach czy wolniejsze działanie programów.</li>
                    <li><strong>Nagłe wyłączanie się komputera:</strong> W ekstremalnych przypadkach systemy zabezpieczające wyłączą komputer, aby zapobiec trwałemu uszkodzeniu.</li>
                  </ul>
              </div>
              
              <div>
                  <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#00bcd4]">Jak wygląda nasza usługa?</h3>
                  <p>
                    Profesjonalna wymiana pasty to precyzyjny proces, który gwarantuje najlepsze rezultaty:
                  </p>
                  <ol className="list-decimal list-inside mt-4 space-y-2">
                    <li><strong>Bezpieczny demontaż:</strong> Ostrożnie demontujemy system chłodzenia z procesora lub karty graficznej.</li>
                    <li><strong>Dokładne czyszczenie:</strong> Używamy alkoholu izopropylowego, aby całkowicie usunąć starą, zaschniętą pastę i odtłuścić powierzchnie.</li>
                    <li><strong>Aplikacja nowej pasty:</strong> Nakładamy optymalną ilość wysokiej jakości pasty termoprzewodzącej, np. <strong>Thermal Grizzly Kryonaut</strong>, która zapewnia najlepsze przewodnictwo cieplne.</li>
                    <li><strong>Poprawny montaż i testy:</strong> Montujemy chłodzenie z powrotem, dbając o odpowiedni docisk, a następnie przeprowadzamy testy obciążeniowe, aby upewnić się, że temperatury wróciły do normy.</li>
                  </ol>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="#formularz-kontaktowy" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                  Umów się na serwis chłodzenia!
              </Link>
            </div>
          </article>
        </TracingBeam>
      </main>
    </div>
  );
}