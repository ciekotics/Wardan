
// CUSTOM IMPORTS
import Separator from "@/components/shared/separator";
import Products from "./products";

const AllItemsSection = () => {
  return (
    <section id="all-items">
      <h2 className="label" id="about-label">
        All Products
      </h2>
      <div
        style={{
          opacity: 0.5,
        }}
      >
        <Separator />
      </div>

      <Products />

      <div className="pattern1">
        {/* <Image src={"/images/pattern-1.png"} alt="" width={300} height={300} /> */}
      </div>
    </section>
  );
};

export default AllItemsSection;
