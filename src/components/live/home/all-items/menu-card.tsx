import Image, { StaticImageData } from "next/image";
import React from "react";
import CardDescription from "./menu-card-description";

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
    <li>
      <div className="menu-card hover:card">
        <figure
          className="card-banner img-holder"
          style={{ width: 100, height: 100 }}
        >
          <Image
            src={imageSrc}
            width="100"
            height="100"
            loading="lazy"
            alt={altText}
            className="img-cover"
          />
        </figure>

        <CardDescription title={title} description={description} />
      </div>
    </li>
  );
};

export default MenuCard;
