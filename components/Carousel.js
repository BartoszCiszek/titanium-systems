// components/Carousel.js
import { useState, useEffect, useRef } from "react";
import Image from "next/legacy/image";
import { motion } from "framer-motion";

const Carousel = ({ images, onImageClick }) => {
  const [current, setCurrent] = useState(0);
  const autoSlideRef = useRef(null);
  const userInteracted = useRef(false);

  useEffect(() => {
    if (images.length > 1 && !userInteracted.current) {
      autoSlideRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 5000);
    }
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [images.length]);

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

export default Carousel;