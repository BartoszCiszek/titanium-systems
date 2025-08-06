// components/SpotlightCard.js
import { useRef } from "react";

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(0, 188, 212, 0.15)" }) => {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        divRef.current.style.setProperty("--mouse-x", `${x}px`);
        divRef.current.style.setProperty("--mouse-y", `${y}px`);
        divRef.current.style.setProperty("--spotlight-color", spotlightColor);
    }
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`card-spotlight ${className}`}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;