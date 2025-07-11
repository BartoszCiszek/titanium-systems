// components/Modal.jsx
import React from "react";

export default function Modal({ isOpen, onClose, imageSrc, imageAlt }) {
  if (!isOpen) return null; // Nie renderuj, jeśli jest zamknięty

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black bg-opacity-70
        backdrop-blur-sm
      "
      onClick={onClose}  // klik w tło zamyka modal
    >
      <div
        className="relative max-w-4xl w-auto h-auto p-4"
        onClick={(e) => e.stopPropagation()} // klik wewnątrz nie zamyka
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="max-h-[80vh] w-auto object-contain"
        />
        <button
          className="
            absolute top-2 right-0
            text-white text-2xl
            hover:opacity-80 
            transition
          "
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
