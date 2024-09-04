"use client";

import Image from "next/image";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

// CUSTOM IMPORTS
import { OUR_PARTNERS } from "@/config/constants/partners-data";

const CardDescription = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  // const [hasHovered, setHasHovered] = useState(true);
  return (
    <div className={`content-wrapper`}>
      <div className="title-wrapper">
        <h2>{title}</h2>
        <span className="span">
          <span
            className="order-text-wrapper"
            // onClick={() => setHasHovered(!hasHovered)}
          >
            <span>Order</span>
            <IoIosArrowForward
              className={`icon-transition`}
              // className={`icon-transition ${
              //   hasHovered ? "inline-block" : "hidden"
              // }`}
            />
          </span>
        </span>
      </div>
      {/* {hasHovered && ( */}
        <p className="partners-show-wrapper transition-all">
          {OUR_PARTNERS.map((item, index) => (
            <span key={index} className="partners-show-wrapper__item">
              <Image
                src={item.imgSrc}
                alt=""
                className="img"
                width={50}
                height={50}
              />
            </span>
          ))}
        </p>
      {/* )} */}
      <p
        className={`p`}
        // className={`p ${
        //   hasHovered ? "mt-3" : ""
        // }`}
      >
        {description}
      </p>
    </div>
  );
};

export default CardDescription;
