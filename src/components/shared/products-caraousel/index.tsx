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
        {ALL_ITEMS_DATA.map((item, index) => (
          <div key={index} className="carousel-item">
            <div className="content">
              <div className="content__left">
                <div className="content__left-side content__left-side--front">
                  <Image src={item.imageSrc} alt={item.title} priority />
                </div>

                <div className="content__left-side content__left-side--back">
                  <Image src={item.backImageSrc} alt={item.title} priority />
                </div>
              </div>

              <div className="content__right">
                <h1 className="heading">{item.heading()}</h1>
                <h5 className="description">{item.description1}</h5>
                <div className="sizes-wrapper">
                  <p>Sizes :</p>

                  <span className="sizes">
                    {item.sizes.map((size, index) => {
                      return (
                        <span key={index} className="sizes__item">
                          {size}
                        </span>
                      );
                    })}
                  </span>
                </div>
              </div>

              <div className="content__middle">
                <div className="sizes-wrapper">
                  <p>Sizes :</p>

                  <span className="sizes">
                    {item.sizes.map((size, index) => {
                      return (
                        <span key={index} className="sizes__item">
                          {size}
                        </span>
                      );
                    })}
                  </span>
                </div>
                <h1 className="heading">{item.heading()}</h1>
                <h5 className="description">{item.description1}</h5>
              </div>
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
