import { ALL_ITEMS_DATA } from "@/config/constants/all-items-data";
import MenuCard from "./menu-card";

const Products = () => {
  return (
    <>
      <ul className="grid-list mt-50">
        {ALL_ITEMS_DATA.map((item, index) => (
          <MenuCard
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
            // price={item.price}
            description={item.description}
            altText={''}
          />
        ))}
      </ul>
    </>
  );
};

export default Products;
