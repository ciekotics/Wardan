"use client";

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

// CUSTOM IMPORTS
import { ALL_ITEMS_DATA } from "@/config/constants/all-items-data";

const ProductsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = ALL_ITEMS_DATA.length;

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
        {ALL_ITEMS_DATA.map((partner, index) => (
          <div key={index} className="carousel-item">
            <div className="content">
              <div className="content__left">
                <div className="content__left-side content__left-side--front">
                  <Image src={partner.imageSrc} alt={partner.title} priority />
                </div>

                <div className="content__left-side content__left-side--back">
                  <Image src={partner.backImageSrc} alt={partner.title} priority />
                </div>
              </div>

              <div className="content__right">hey</div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={prevSlide}>
        <FaArrowLeft color="white" />
      </button>
      <button className="carousel-control next" onClick={nextSlide}>
        <FaArrowRight color="white" />
      </button>
    </div>
  );
};

export default ProductsCarousel;
