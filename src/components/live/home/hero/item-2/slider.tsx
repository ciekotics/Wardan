"use client";

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { BANNER_SLIDES } from "@/config/constants/banner-slides-data";
import Image from "next/image";
import SliderContent from "./slider-content";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = BANNER_SLIDES.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  return (
    <div className="slider-carousel">
      <motion.div
        className="carousel-inner"
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {BANNER_SLIDES.map((partner, index) => (
          <div key={index} className="carousel-item">
            <Image src={partner.image} alt={partner.title} priority />
            <div className="content">
              <SliderContent key={currentIndex} currentIndex={currentIndex} />
            </div>
          </div>
        ))}
      </motion.div>

      <div className="carousel-control">
        <div className="buttons">
          <button className="prev" onClick={prevSlide}>
            <FaArrowLeft size={35} />
          </button>
          <button className="next" onClick={nextSlide}>
            <FaArrowRight size={35} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
