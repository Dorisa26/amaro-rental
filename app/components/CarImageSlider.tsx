
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

  // Convert images into an array
  const imageList: string[] = Array.isArray(images)
    ? images
    : [images];

  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? imageList.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === imageList.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="car-photo">
      <img
        src={imageList[currentIndex]}
        alt={`${alt} - photo ${currentIndex + 1}`}
      />

      <span className="car-number">{number}</span>

      {imageList.length > 1 && (
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

          <div className="car-slider-dots">
            {imageList.map((_, index: number) => (
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
        </>
      )}
    </div>
  );
}
