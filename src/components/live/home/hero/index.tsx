import Image from "next/image";
import Item1 from "./item-1";
import Item2 from "./item-2";
import Item3 from "./item-3";

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      // className="grid-2-4-1"
      >
      {/* <div className="item-1">
        <Item1 />
      </div> */}
      <div className="item-2">
        <Item2 />
      </div>
      {/* <div className="item-3">
        <h3>Top News</h3>

        <Item3 />
      </div> */}

      <div className="pattern-bg">
        <Image
          src={'/images/pattern-dots.png'}
          alt="pattern dots"
          width={450}
          height={250}
          className="pattern-abs"
        />
      </div>
    </section>
  );
};

export default HeroSection;
