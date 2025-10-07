"use client";

import image1 from "../../assets/Banner.webp";

import { useState, useEffect } from "react";

const images = [
  { src: image1, alt: "Banner 1" },
  { src: image1, alt: "Banner 1" },
  { src: image1, alt: "Banner 1" },

];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => setCurrentIndex(index);

  return (
    <div className="w-full  overflow-hidden relative">
      <div className="relative h-[60vh] md:h-[70vh]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-black" : "bg-white/50"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))} 
      </div>
    </div>
  );
};

export default Banner;
