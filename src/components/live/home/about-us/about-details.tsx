"use client";

import Separator from "@/components/shared/separator";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaRegPlayCircle } from "react-icons/fa";

// CUSTOM IMPORTS

const AboutUsDetails = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    let x: number, y: number;

    const handleMouseMove = (event: MouseEvent) => {
      x = (event.clientX / window.innerWidth) * 10 - 5;
      y = (event.clientY / window.innerHeight) * 10 - 5;

      x = x - x * 2;
      y = y - y * 2;

      const parallaxItems = document.querySelectorAll<HTMLDivElement>(
        "[data-parallax-item]"
      );

      parallaxItems.forEach((item) => {
        const speed = Number(item.dataset.parallaxSpeed);
        x = x * speed;
        y = y * speed;
        item.style.transform = `translate3d(${x}px, ${y}px, 0px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <div className="about-content mt-20">
          <h2 className="label" id="about-label">
            About Us
          </h2>
          <div
            style={{
              opacity: 0.5,
            }}
          >
            <Separator />
          </div>
          <h3 className="headline">
            Elevating Culinary Creations with the Finest Spices
          </h3>
          <p className="description">
            Where the art of spice blending meets the science of quality and
            flavor. We pride ourselves on crafting the finest spices that add
            zest and flavor to kitchens around the globe. Quality is at the
            heart of everything we do. We invite you to explore our world of
            spices and experience the passion and dedication that goes into
            every product we create.
          </p>
          <div className="mobile-text">Mail Us:</div>
          <a href="tel:+804001234567" className="mobile">
            wardanspices@gmail.com
          </a>
        </div>
        <figure className="about-banner">
          <Image
            src={"/images/about-banner.jpg"}
            width={570}
            height={570}
            loading="lazy"
            alt="about banner"
            
            data-parallax-item
            data-parallax-speed="1"
            // style={{ height: "auto", width: "auto" }}
          />
          <div
            className="abs-img-1"
            data-parallax-item
            data-parallax-speed="1.75"
          >
            <div className="content-wrapper">
              <video
                ref={videoRef}
                src={"/videos/about.mp4"}
                loop
                muted
                // className="object-cover object-center h-full cursor-pointer"
                onClick={togglePlay}
              ></video>
              <div
                className={`play-icon`}
                style={{ display: isPlaying ? "none" : "" }}
              >
                <FaRegPlayCircle
                  color="white"
                  onClick={togglePlay}
                  size={50}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="abs-img ">
            <Image
              src={"/images/badge-2.png"}
              width="133"
              height="134"
              loading="lazy"
              alt=""
            />
          </div>
        </figure>
      </div>
    </React.Fragment>
  );
};

export default AboutUsDetails;
