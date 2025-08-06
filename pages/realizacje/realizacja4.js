// pages/realizacje/realizacja4.js
import Head from "next/head";
import Image from "next/legacy/image";
import { useState } from "react";
import Carousel from "../../components/Carousel";

export default function Realizacja4() {
  // Tablica ścieżek do obrazów dla tej realizacji
  const images = [
    "/images/portfolio4.webp",
    "/images/realizacja4_1.webp",
    "/images/realizacja4_2.webp",
    "/images/realizacja4_3.webp",
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
    <div className="min-h-screen text-white">
      <Head>
        <title>Realizacja - Modernizacja Karty Graficznej RTX 2070 | Titanium Systems</title>
        <meta name="description" content="Szczegółowy opis modernizacji karty graficznej RTX 2070, w tym czyszczenie, wymiana pasty termoprzewodzącej i termopadów." />
      </Head>
      <main className="container mx-auto py-24 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Modernizacja karty graficznej RTX 2070
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
            Modernizacja karty graficznej RTX 2070
          </p>
          <p className="text-left mt-4 text-lg">
            Dla klienta indywidualnego przeprowadziłem kompleksową modernizację karty graficznej nvidia RTX 2070. Celem modernizacji było obniżenie temperatur i podniesienie wydajności sprzętu oraz zapewnienie stabilnej i efektywnej pracy.
          </p>
          <p className="mt-4 text-lg text-left">
            Zakres prac obejmował:
          </p>
          <ul className="list-disc ml-6 text-lg mt-2 text-left">
            <li>
              <strong>Dokładne czyszczenie -</strong> usunięcie nagromadzonego kurzu z elementów wewnętrznych, co znacząco poprawiło chłodzenie i stabilność pracy.
            </li>
            <li>
              <strong>Wymianę pasty termoprzewodzącej -</strong> zastosowanie nowej pasty Thermal Grizzly Kryonaut, która jest jedną z lepszych dostępnych na rynku. Dzięki niej efektywnie odprowadza ciepło, co pozwala utrzymać optymalną temperaturę na rdzeniu podczas wymagających sesji.
            </li>
            <li>
              <strong>Wymianę wszystkich termopadów -</strong> zastosowanie nowych termopadów Thermal Grizzly Minus Pad, znacznie poprawiło temperatury karty graficznej.
            </li>
          </ul>
          <p className="mt-4 text-lg text-left">
            Dzięki przeprowadzonej modernizacji stacja graficzna odzyskała pełną sprawność, temperatury spadły o około 20°C, co pozwoliło na solidny overcloaking karty: +350MHz Core, +1700MHz Memory.
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