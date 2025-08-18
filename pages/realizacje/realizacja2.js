// pages/realizacje/realizacja2.js
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Carousel from "../../components/Carousel";

export default function Realizacja2() {
  // Dla tej realizacji mamy tylko jedno zdjęcie
  const images = [
    "/images/portfolio2.webp",
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
        <title>Realizacja - Komputer do gier i obróbki wideo | Titanium Systems</title>
        <meta name="description" content="Projekt komputera gamingowego z procesorem i5 10600KF i kartą RTX 3060, zoptymalizowanego pod gry i obróbkę wideo." />
      </Head>
      <main className="container mx-auto py-24 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Projekt Komputera do gier i małej obróbki wideo
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
          <p className="text-left mt-4 text-lg">
            W ramach zlecenia indywidualnego klienta stworzyłem komputer, który doskonale łączy możliwości nowoczesnych gier z funkcjonalnością przy amatorskiej obróbce wideo. System został zbudowany w oparciu o procesor Intel Core i5 10600KF, kartę graficzną RTX 3060 oraz 16 GB pamięci DDR4 3600MHz, co gwarantuje płynność działania w wymagających aplikacjach oraz stabilność podczas intensywnych sesji rozgrywkowych i edycyjnych.
          </p>
          <p className="mt-4 text-lg text-left">
            Zakres prac obejmował:
          </p>
          <ul className="list-disc ml-6 text-lg mt-2 text-left">
            <li>
              <strong>Dobór komponentów -</strong> przeanalizowałem dostępne rozwiązania, wybierając podzespoły najlepiej odpowiadające budżetowi klienta, przy jednoczesnym zapewnieniu wysokiej jakości i wydajności.
            </li>
            <li>
              <strong>Kompletowanie i składanie systemu -</strong> dokładne zmontowałem komputera, dbając o prawidłowe rozmieszczenie elementów i optymalne okablowanie, co przekłada się na efektywne chłodzenie oraz stabilność pracy.
            </li>
            <li>
              <strong>Instalację systemu operacyjnego i sterowników -</strong> po złożeniu urządzenia, zainstalowany system operacyjny oraz wszystkie niezbędne sterowniki, zapewniając pełną kompatybilność sprzętu.
            </li>
            <li>
              <strong>Optymalizacja przez podkręcanie -</strong> przeprowadziłem delikatne podkręcenie wybranych komponentów, co umożliwiło uzyskanie dodatkowych przyrostów wydajności (15%) przy zachowaniu pełnej stabilności systemu.
            </li>
          </ul>
          <p className="mt-4 text-lg text-left">
            Dzięki kompleksowemu podejściu do realizacji, stworzony komputer nie tylko spełnia wymagania współczesnych gier, ale również świetnie radzi sobie z zadaniami związanymi z edycją wideo, oferując użytkownikowi wyjątkową wydajność i niezawodność.
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
              fill
              style={{ objectFit: 'contain' }}
              className="rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
}