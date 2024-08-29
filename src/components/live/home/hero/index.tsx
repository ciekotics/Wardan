import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="hero" className="grid-2-4-1">
      <div className="item-1"></div>
      <div className="item-2">
        <Image
          src='/images/hero-slider-1.jpg'
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="item-3"></div>
    </section>
  );
};

export default HeroSection;
