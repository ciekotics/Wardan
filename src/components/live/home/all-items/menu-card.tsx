import Image, { StaticImageData } from "next/image";
import CardDescription from "./menu-card-description";
import { IoIosArrowForward } from "react-icons/io";

const MenuCard = ({
  imageSrc,
  title,
  description,
  altText,
}: {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  altText: string;
}) => {
  return (
    <div className="menu-card-wrapper">
      <div className="menu-card">
        <figure
          className="card-banner img-holder"
          style={{ width: 200, height: 200 }}
        >
          <Image
            src={imageSrc}
            width="200"
            height="200"
            loading="lazy"
            alt={altText}
            className="img-cover"
          />
        </figure>

        <CardDescription title={title} description={description} />
        <div className="order-now">Order Now <span style={{ marginTop: 5 }}><IoIosArrowForward color="white" /></span></div>
      </div>
    </div>
  );
};

export default MenuCard;
