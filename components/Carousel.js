// components/Carousel.js
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Carousel = ({ 
  images, 
  onImageClick,
  autoplay = false,
  autoplayDelay = 5000,
  pauseOnHover = true 
}) => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const startAutoplay = () => {
    if (autoplay && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, autoplayDelay);
    }
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [images.length, autoplay, autoplayDelay]);

  const handleMouseEnter = () => {
    if (pauseOnHover) stopAutoplay();
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) startAutoplay();
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="relative w-full h-full overflow-hidden rounded-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {images.map((img, index) => (
        <motion.div
          key={index}
          onClick={() => onImageClick(img)}
          initial={{ opacity: 0 }}
          animate={{ opacity: current === index ? 1 : 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0 cursor-pointer"
          style={{ pointerEvents: current === index ? 'auto' : 'none' }}
        >
          <Image
            src={img}
            alt={`Slide ${index + 1}`}
            fill
            style={{ objectFit: 'cover' }}
          />
        </motion.div>
      ))}
      
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-60 transition z-10"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-60 transition z-10"
          >
            &#10095;
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;