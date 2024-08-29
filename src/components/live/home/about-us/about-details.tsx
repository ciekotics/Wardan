'use client'

import Separator from '@/components/utils/separator';
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';
import { FaRegPlayCircle } from 'react-icons/fa';

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
    <div>
      <div className="container">
        <div className="about-content mt-20">
          <h1 className="" id="about-label">
            About Us
          </h1>
          <Separator />
          <h3
            className=" mt-10"
          >
            Elevating Culinary Creations with the Finest Spices
          </h3>
          <p className="text-base mt-10 leading-7 ">
            Where the art of spice blending meets the science of quality and
            flavor. We pride ourselves on crafting the finest spices that add
            zest and flavor to kitchens around the globe. Quality is at the
            heart of everything we do. We invite you to explore our world of
            spices and experience the passion and dedication that goes into
            every product we create.
          </p>
          <div className="mt-10 font-bold text-white text-lg">Contact On</div>
          <a href="tel:+804001234567" className="text-2xl block mb-5">
            +91 980 123 4567
          </a>
        </div>
        <figure className="about-banner">
          <Image
            src={"/images/about-banner.jpg"}
            width="570"
            height="570"
            loading="lazy"
            alt="about banner"
            className="about-banner__img"
            data-parallax-item
            data-parallax-speed="1"
          />
          {/* <div
            className="abs-img abs-img-1 has-before"
            data-parallax-item
            data-parallax-speed="1.75"
          >
            <div className="h-60 rounded-md overflow-hidden relative">
              <video
                ref={videoRef}
                src={'/videos/about.mp4'}
                loop
                muted
                className="object-cover object-center h-full cursor-pointer"
                onClick={togglePlay}
              ></video>
              <div className={`absolute top-0 left-0 w-full h-full bg-stone-800 flex items-center justify-center ${isPlaying ? 'hidden' : 'inline-block'}`}>
                <FaRegPlayCircle onClick={togglePlay} size={50} className="cursor-pointer" />
              </div>
            </div>
          </div> */}
          <div className="abs-img abs-img-2 has-before">
            <Image src={"/images/badge-2.png"} width="133" height="134" loading="lazy" alt="" />
          </div>
        </figure>
      </div>
    </div>
  )
}

export default AboutUsDetails