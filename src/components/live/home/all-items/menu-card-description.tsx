"use client";

import Image from "next/image";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

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
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProductOnModal, setActiveProductOnModal] = useState<
    string | null
  >(null);

  return (
    <>
      {modalOpen ? (
        <div id="modal">
          <div className="modal-content">
            <div
              className="cross"
              onClick={() => {
                setModalOpen(false);
                setActiveProductOnModal(null);
              }}
            >
              <RxCross2 />
            </div>

            <h2>{title}</h2>
            <h5>{description}</h5>

            {activeProductOnModal ? (
              <h3 className="available-text">
                Soon Available on{" "}
                {activeProductOnModal?.charAt(0)?.toUpperCase() +
                  activeProductOnModal?.slice(1)}
                !
              </h3>
            ) : null}
          </div>
        </div>
      ) : (
        false
      )}
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
            <span
              key={index}
              className="partners-show-wrapper__item"
              onClick={() => {
                setModalOpen(true);
                setActiveProductOnModal(item.name);
              }}
            >
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
    </>
  );
};

export default CardDescription;
