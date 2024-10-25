/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

// CUSTOM IMPORTS
import { ALL_ITEMS_DATA } from "@/config/constants/all-items-data";

const ProductsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = ALL_ITEMS_DATA.length;
  const startX = useRef(0);
  const endX = useRef(0);
  const carouselInnerRef = useRef<HTMLDivElement | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const handleTouchStart = (e: TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (startX.current - endX.current > 50) {
      nextSlide();
    } else if (endX.current - startX.current > 50) {
      prevSlide();
    }
  };

  useEffect(() => {
    const carouselInner = carouselInnerRef.current;
    if (carouselInner) {
      carouselInner.addEventListener("touchstart", handleTouchStart);
      carouselInner.addEventListener("touchmove", handleTouchMove);
      carouselInner.addEventListener("touchend", handleTouchEnd);

      return () => {
        carouselInner.removeEventListener("touchstart", handleTouchStart);
        carouselInner.removeEventListener("touchmove", handleTouchMove);
        carouselInner.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, []);

  return (
    <div className="products-carousel">
      <div
        className="carousel-inner"
        ref={carouselInnerRef}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease",
        }}
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
                    {item.sizes.map((size, index) => (
                      <span key={index} className="sizes__item">
                        {size}
                      </span>
                    ))}
                  </span>
                </div>
              </div>

              <div className="content__middle">
                <div className="sizes-wrapper">
                  <p>Sizes :</p>

                  <span className="sizes">
                    {item.sizes.map((size, index) => (
                      <span key={index} className="sizes__item">
                        {size}
                      </span>
                    ))}
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

// export default ProductsCarousel;
