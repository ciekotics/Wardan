"use client";

import React, { useState } from "react";

// CUSTOM IMPORTS
import { BANNER_SLIDES } from "@/config/constants/banner-slides-data";
import Image from "next/image";

const ProductsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = BANNER_SLIDES.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  return (
    <div className="products-carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {BANNER_SLIDES.map((partner, index) => (
          <div key={index} className="carousel-item">
            <Image src={partner.image} alt={partner.title} />
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={prevSlide}>
        &lt;
      </button>
      <button className="carousel-control next" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default ProductsCarousel;
