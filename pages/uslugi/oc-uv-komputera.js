// pages/uslugi/oc-uv-komputera.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "../../components/ui/tracing-beam";

export default function OcUvKomputera() {
  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>Overclocking (OC) i Undervolting (UV) Poznań | Titanium Systems</title>
        <meta name="description" content="Profesjonalne podkręcanie (OC) i undervolting (UV) procesora i karty graficznej w Poznaniu. Zwiększ wydajność lub popraw kulturę pracy swojego komputera." />
        <link rel="canonical" href="https://titaniumsystems.pl/uslugi/oc-uv-komputera" />
      </Head>
      <main className="container mx-auto py-24 px-4">
        <TracingBeam className="px-6">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-[#00bcd4]">
              Overclocking (OC) i Undervolting (UV)
            </h1>

            <div className="relative w-full h-80 rounded-lg overflow-hidden my-8 shadow-lg">
              <Image src="/images/oc-uv-komputera.webp" alt="Wykresy wydajności i temperatur po OC i UV" layout="fill" objectFit="cover" />
            </div>

            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
              <p className="text-xl leading-relaxed">
                Chcesz wydobyć ze swojego komputera 100% ukrytej mocy lub sprawić, by pracował ciszej i chłodniej bez utraty wydajności? Usługi Overclockingu (OC) i Undervoltingu (UV) to zaawansowane techniki optymalizacji, które pozwalają dostosować działanie podzespołów do Twoich indywidualnych potrzeb. W Titanium Systems robimy to profesjonalnie i bezpiecznie.
              </p>

              <div>
                <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Overclocking (OC) – Uwolnij Pełną Moc</h2>
                <p>
                  Overclocking, czyli podkręcanie, to proces zwiększania taktowania procesora (CPU) i karty graficznej (GPU) powyżej ich fabrycznych wartości.
                </p>
                <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#00bcd4]">Dla kogo jest OC?</h3>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li><strong>Dla graczy:</strong> Zyskaj dodatkowe klatki na sekundę (FPS) w ulubionych grach, ciesząc się płynniejszą rozgrywką.</li>
                  <li><strong>Dla profesjonalistów:</strong> Przyspiesz renderowanie wideo, kompilację kodu czy skomplikowane obliczenia w programach specjalistycznych.</li>
                  <li><strong>Dla entuzjastów:</strong> Dla tych, którzy chcą wycisnąć absolutne maksimum ze swojej maszyny.</li>
                </ul>
                <p className="mt-4">
                  Nasz proces OC to nie tylko zmiana mnożnika. To precyzyjne dostrajanie napięć i testy stabilności, aby zapewnić Ci maksymalny, a co najważniejsze, w pełni stabilny wzrost wydajności.
                </p>
              </div>

              <div>
                  <h3 className="text-3xl font-bold mt-12 mb-4 text-white">Undervolting (UV) – Chłodniej, Ciszej, Wydajniej</h3>
                  <p>
                    Undervolting to proces obniżania napięcia zasilającego podzespoły bez obniżania ich taktowania. Efekt? Niższe temperatury i mniejszy pobór prądu przy zachowaniu tej samej (a czasem nawet wyższej!) wydajności.
                  </p>
                  <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#00bcd4]">Dla kogo jest UV?</h3>
                   <ul className="list-disc list-inside mt-4 space-y-2">
                    <li><strong>Dla posiadaczy laptopów:</strong> Obniż temperatury i wydłuż czas pracy na baterii, ciesząc się cichszą pracą wentylatorów.</li>
                    <li><strong>Dla ceniących ciszę:</strong> Zmniejsz hałas generowany przez komputer stacjonarny, zwłaszcza pod obciążeniem.</li>
                    <li><strong>Dla każdego:</strong> Undervolting pozwala często utrzymać wyższe taktowanie w trybie boost, co realnie przekłada się na wyższą wydajność w długotrwałych zadaniach.</li>
                  </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="#formularz-kontaktowy" className="bg-[#008080] text-white text-lg font-bold py-3 px-8 rounded-md hover:bg-[#00bcd4] transition">
                  Wydobądź maksimum ze swojego sprzętu!
              </Link>
            </div>
          </article>
        </TracingBeam>
      </main>
    </div>
  );
}