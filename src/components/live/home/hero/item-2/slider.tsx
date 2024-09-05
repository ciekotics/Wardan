"use client";

import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { BANNER_SLIDES } from "@/config/constants/banner-slides-data";
import Image from "next/image";
import SliderContent from "./slider-content";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = BANNER_SLIDES.length;
  const [iconSize, setIconSize] = useState(35);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIconSize(35);
      } else {
        setIconSize(20);
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
            <FaArrowLeft size={iconSize} />
          </button>
          <button className="next" onClick={nextSlide}>
            <FaArrowRight size={iconSize} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
