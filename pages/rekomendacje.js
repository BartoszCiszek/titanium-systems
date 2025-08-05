// pages/rekomendacje.js
import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Modal from "../components/Modal";
import { realizacje } from "../data/rekomendacjeData";

export default function Rekomendacje() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const [modalAlt, setModalAlt] = useState("");

  // Referencje dla animacji: header i siatka
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  // Animacja dla tekstu nagłówka i opisu
  useEffect(() => {
    if (headerRef.current) {
      gsap.from(headerRef.current.children, {
        duration: 0.6,
        y: 20,
        opacity: 0,
        stagger: 0.15,
        ease: "power2.out"
      });
    }
  }, []);

  // Animacja dla elementów siatki
  useEffect(() => {
    if (gridRef.current) {
      gsap.from(gridRef.current.querySelectorAll(".grid-item"), {
        duration: 0.6,
        y: 20,
        opacity: 0,
        stagger: 0.15,
        ease: "power2.out"
      });
    }
  }, []);

  const openModal = (fullSrc, altText) => {
    setModalImg(fullSrc);
    setModalAlt(altText);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImg(null);
    setModalAlt("");
  };

  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>Rekomendacje klientów – Opinie o usługach IT Poznań | Titanium Systems</title>
        <meta
          name="description"
          content="Opinie i rekomendacje klientów o usługach informatycznych oferowanych w Poznaniu i Wielkopolsce. Zobacz, jak oceniono serwis komputerów, konfigurację sieci, serwery i wsparcie IT."
        />
        <meta
          name="keywords"
          content="rekomendacje IT Poznań, opinie o usługach IT, referencje klientów, serwis komputerowy, konfiguracja sieci"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://titaniumsystems.pl/rekomendacje" />
      </Head>

      <main className="py-24 px-4">
        {/* Kontener z animowanym tekstem */}
        <div ref={headerRef}>
          <h1 className="text-4xl font-bold text-center mb-6">Rekomendacje</h1>
          <p className="text-center text-lg mb-10">
            Dziękujemy za zaufanie i do zobaczenia w kolejnych projektach.
          </p>
        </div>

        <div className="max-w-[700px] mx-auto">
          {/* Kontener siatki z referencją */}
          <div ref={gridRef} className="grid grid-cols-4 gap-6">
            {realizacje.map((item) => (
              <div
                key={item.id}
                className="
                  grid-item
                  relative group 
                  cursor-pointer
                  bg-[#333]
                  p-1
                  rounded-md
                  shadow-md
                  max-w-[150px] 
                  w-full
                "
                onClick={() => openModal(item.full, item.alt)}
              >
                {/* Niewidoczny obraz – nadaje wymiary */}
                <img
                  src={item.preview}
                  alt={`Ukryte preview - ${item.alt}`}
                  className="opacity-0 block w-auto h-auto"
                />

                {/* Logo – widoczne domyślnie */}
                <img
                  src={item.logo}
                  alt={item.alt}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-contain
                    transition-opacity
                    duration-300
                    group-hover:opacity-0
                  "
                />

                {/* Preview – widoczne po najechaniu */}
                <img
                  src={item.preview}
                  alt={`Preview - ${item.alt}`}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-contain
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-300
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal z powiększonym obrazem */}
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        imageSrc={modalImg}
        imageAlt={modalAlt}
      />
    </div>
  );
}
