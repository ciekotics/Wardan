
// CUSTOM IMPORTS
import Separator from "@/components/utils/separator";
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
    </section>
  );
};

export default AllItemsSection;
