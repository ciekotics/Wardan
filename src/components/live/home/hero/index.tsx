import Item1 from "./item-1";
import Item2 from "./item-2";

const HeroSection = () => {
  return (
    <section id="hero" className="grid-2-4-1">
      <div className="item-1">
        <Item1 />
      </div>
      <div className="item-2">
        <Item2 />
      </div>
      <div className="item-3">
        <h3>Top News</h3>

        <div className="top-news">
          {Array.from({ length: 3 }).map((_, index) => {
            return (
              <div key={index} className="top-news__item"></div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
