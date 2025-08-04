// pages/realizacje/realizacja1.js
import Head from "next/head";
import Image from "next/legacy/image";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Carousel = ({ images, autoSlide = true, slideInterval = 5000, onImageClick }) => {
  const [current, setCurrent] = useState(0);
  const autoSlideRef = useRef(null);
  const userInteracted = useRef(false);

  useEffect(() => {
    if (autoSlide && images.length > 1 && !userInteracted.current) {
      autoSlideRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, slideInterval);
    }
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [autoSlide, images.length, slideInterval]);

  const nextSlide = () => {
    userInteracted.current = true;
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    userInteracted.current = true;
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {images.map((img, index) => (
        <motion.div 
          key={index}
          // Wywołujemy onImageClick tylko dla aktualnie widocznego obrazu
          onClick={() => current === index && onImageClick(img)}
          initial={{ opacity: 0 }}
          animate={{ opacity: current === index ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 cursor-pointer"
          style={{ pointerEvents: current === index ? 'auto' : 'none' }}
        >
          <Image
            src={img}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </motion.div>
      ))}
      {images.length > 1 && (
        <>
          <button 
            onClick={prevSlide} 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-gray-700 transition"
          >
            ←
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-gray-700 transition"
          >
            →
          </button>
        </>
      )}
    </div>
  );
};

export default function Realizacja1() {
  // Tablica ścieżek do obrazów; upewnij się, że obrazy istnieją w katalogu public/images
  const images = [
    "/images/portfolio1.webp",
  ];

  // Stany do obsługi modalu
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  // Funkcja otwierająca modal dla klikniętego obrazu
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
        <title>Realizacja - Projekt Komputera do gier</title>
        <meta name="description" content="Opis projektu Komputera do gier, szczegóły i zdjęcia." />
      </Head>
      <main className="container mx-auto py-24 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
        Projekt Komputera do gier
        </h1>
        {/* Kontener ograniczający szerokość i wycentrowany */}
        <div className="max-w-4xl mx-auto">
          <Carousel images={images} onImageClick={openModal} />
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

      {/* Modal fullscreen z rozmazanym tłem */}
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
