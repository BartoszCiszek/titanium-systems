// pages/realizacje/realizacja3.js
import Head from "next/head";
import Image from "next/legacy/image";
import { useState } from "react";
import Carousel from "../../components/Carousel";

export default function Realizacja3() {
  // Tablica ścieżek do obrazów dla tej realizacji
  const images = [
    "/images/portfolio3.webp",
    "/images/realizacja3_1.webp",
  ];

  // Stany i funkcje modalu (bez zmian)
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
    <div className="min-h-screen bg-[#212121] text-white">
      <Head>
        <title>Realizacja - Stacja graficzna dla SOTIS STUDIO</title>
        <meta name="description" content="Modernizacja i optymalizacja stacji graficznej dla SOTIS STUDIO sp z o.o." />
      </Head>
      <main className="container mx-auto py-24 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Stacja graficzna SOTIS STUDIO sp z o.o.
        </h1>
        <div className="max-w-4xl mx-auto">
          {/* Kontener dla karuzeli */}
          <div className="w-full h-[500px] mb-8">
            <Carousel 
              images={images} 
              onImageClick={openModal}
              autoplay={true}
              pauseOnHover={true}
            />
          </div>
          
          {/* Tekst specyfikacji */}
          <p className="mt-4 text-lg text-left">
            Modernizacja stacji graficznej
          </p>
          <p className="text-left mt-4 text-lg">
            Dla firmy SOTIS STUDIO sp z o.o. przeprowadziłem kompleksową modernizację stacji graficznej – kluczowego narzędzia do montażu filmów reklamowych i promocyjnych. Celem modernizacji było podniesienie wydajności sprzętu oraz zapewnienie stabilnej i efektywnej pracy przy zaawansowanych projektach multimedialnych.
          </p>
          <p className="mt-4 text-lg text-left">
            Zakres prac obejmował:
          </p>
          <ul className="list-disc ml-6 text-lg mt-2 text-left">
            <li>
              <strong>Dokładne czyszczenie -</strong> usunięcie nagromadzonego kurzu z elementów wewnętrznych, co znacząco poprawiło chłodzenie i stabilność pracy systemu.
            </li>
            <li>
              <strong>Wymianę pasty termoprzewodzącej -</strong> zastosowanie nowej pasty Thermal Grizzly Kryonaut, która jest jedną z lepszych dostępnych na rynku. Dzięki niej efektywnie odprowadza ciepło, co pozwala utrzymać optymalną temperaturę podczas długotrwałych sesji montażowych.
            </li>
            <li>
              <strong>Aktualizację sterowników oraz aplikacji -</strong> instalacja najnowszych wersji oprogramowania i sterowników, co zapewnia kompatybilność oraz poprawę wydajności systemu.
            </li>
            <li>
              <strong>Optymalizację dysku -</strong> usunięcie zbędnych plików oraz przeprowadzenie defragmentacji, co przyczyniło się do szybszego uruchamiania programów i zwiększenia ogólnej responsywności komputera.
            </li>
          </ul>
          <p className="mt-4 text-lg text-left">
            Dzięki przeprowadzonej modernizacji stacja graficzna odzyskała pełną sprawność, umożliwiając sprawny i efektywny montaż materiałów filmowych. Realizacja ta doskonale pokazuje, jak dbałość o detale oraz regularne utrzymanie sprzętu wpływają na jego długofalową wydajność i niezawodność.
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