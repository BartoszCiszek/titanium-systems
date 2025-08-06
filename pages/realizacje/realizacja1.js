// pages/realizacje/realizacja1.js
import Head from "next/head";
import Image from "next/legacy/image";
import { useState } from "react";
import Carousel from "../../components/Carousel";

export default function Realizacja1() {
  // Teraz działa zarówno dla jednego, jak i dla wielu obrazów
  const images = [
    "/images/portfolio1.webp",
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (img) => {
    setModalImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>Realizacja - Projekt Komputera do gier</title>
        <meta name="description" content="Opis projektu Komputera do gier, szczegóły i zdjęcia." />
      </Head>
      <main className="container mx-auto py-24 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Projekt Komputera do gier
        </h1>
        <div className="max-w-4xl mx-auto">
          {/* Kontener dla karuzeli z określoną wysokością */}
          <div className="w-full h-[500px] mb-8">
            <Carousel 
              images={images} 
              onImageClick={openModal}
              autoplay={true}
              pauseOnHover={true}
            />
          </div>
          
          {/* Tekst specyfikacji pod karuzelą */}
          <p className="mt-4 text-lg text-left">
            Projekt Komputera do Gier – 2017 rok
          </p>
          <p className="text-left mt-4 text-lg">
            W ramach zlecenia indywidualnego klienta stworzyłem komputer do gier, który idealnie łączył moc obliczeniową z atrakcyjną wydajnością graficzną. System oparty był na procesorze AMD FX 9590, karcie graficznej GTX 1060 6GB oraz 16 GB pamięci DDR4, co zapewniało płynne działanie zarówno w dynamicznych tytułach gier, jak i przy codziennych zadaniach.
          </p>
          <p className="mt-4 text-lg text-left">
            Zakres prac obejmował:
          </p>
          <ul className="list-disc ml-6 text-lg mt-2 text-left">
            <li>
              <strong>Dobór komponentów -</strong> wyszukanie i wybór podzespołów, które idealnie wpisywały się w budżet klienta, gwarantując optymalną relację między ceną a wydajnością.
            </li>
            <li>
              <strong>Kompletowanie i składanie systemu -</strong> profesjonalne skompletowanie oraz precyzyjne złożenie komputera, z dbałością o odpowiednią wentylację i organizację okablowania, co wpływa na stabilność pracy.
            </li>
            <li>
              <strong>Instalację systemu operacyjnego i sterowników -</strong> instalacja wybranego systemu operacyjnego wraz z wszystkimi niezbędnymi sterownikami, zapewniająca pełną kompatybilność sprzętową.
            </li>
            <li>
              <strong>Podkręcenie (overclocking) -</strong> przeprowadziłem delikatne podkręcenie wybranych komponentów, co umożliwiło uzyskanie dodatkowych przyrostów wydajności na poziomie 13%, przy zachowaniu pełnej stabilności systemu.
            </li>
          </ul>
          <p className="mt-4 text-lg text-left">
            Projekt zrealizowany w 2017 roku jest przykładem, jak odpowiedni dobór komponentów oraz profesjonalny montaż mogą stworzyć komputer, który nie tylko spełnia oczekiwania w zakresie gier, ale również zapewnia komfortową pracę przy codziennych zadaniach.
          </p>
        </div>
      </main>

      {/* Modal fullscreen (bez zmian) */}
      {modalOpen && (
        <div 
          onClick={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
        >
          <div 
            className="relative w-11/12 h-[90vh] max-w-3xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={modalImage}
              alt="Powiększony obraz"
              layout="fill"
              objectFit="contain"
              className="rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
}