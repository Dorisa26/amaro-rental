
"use client";

import { useState } from "react";

type CarImageSliderProps = {
  images: string | string[];
  alt: string;
  number: string;
};

export default function CarImageSlider({
  images,
  alt,
  number,
}: CarImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="car-photo">
      <img
        src={images[currentIndex]}
        alt={`${alt} - photo ${currentIndex + 1}`}
      />

      <span className="car-number">{number}</span>

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="car-slider-arrow car-slider-prev"
            onClick={previousImage}
            aria-label="Previous photo"
          >
            ‹
          </button>

          <button
            type="button"
            className="car-slider-arrow car-slider-next"
            onClick={nextImage}
            aria-label="Next photo"
          >
            ›
          </button>
        </>
      )}

      {images.length > 1 && (
        <div className="car-slider-dots">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`car-slider-dot ${
                currentIndex === index ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to photo ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
