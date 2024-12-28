
// CUSTOM IMPORTS
import Separator from "@/components/shared/separator";
import Products from "./products";
import Image from "next/image";

const AllItemsSection = () => {
  return (
    <section id="all-items">
      <h2>
        All Products
      </h2>

      <div className="pattern-bg">
        <Image
          src={'/images/pattern-dots.png'}
          alt="pattern dots"
          width={450}
          height={250}
          className="pattern-abs"
        />
      </div>

      <Products />

      {/* <div className="pattern1"> */}
      {/* <Image src={"/images/pattern-1.png"} alt="" width={300} height={300} /> */}
      {/* </div> */}
    </section>
  );
};

export default AllItemsSection;
