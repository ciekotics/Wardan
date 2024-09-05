import { BOTTOMBAR_TABS } from "@/config/constants/navbar-data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const NavMenu = ({
  setToggle,
}: {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  return (
    <div className="menu-wrapper">
      <div
        className="cross"
        onClick={() => {
          setToggle(false);
        }}
      >
        <RxCrossCircled size={25} />
      </div>
      <div className="logo-wrapper">
        <div className="logo">
          <Image
            src={"/images/logo_1.svg"}
            alt="wardan-app-logo"
            width={150}
            height={120}
            priority
          />
        </div>
      </div>
      <div className="menu-items">
        {BOTTOMBAR_TABS.map((item, index) => (
          <li className="menu-items__item" key={index}>
            <div className="separator"></div>
            <div
              className="item-title"
              onClick={() => {
                if (item.title !== "blogs") {
                  setToggle(false);
                  router.push(`${item.href}`);
                }
              }}
            >
              {item.title === "blogs" ? (
                <Link href="/blogs" target="_blank" rel="noreferrer noopener">
                  {item.title.toUpperCase()}
                </Link>
              ) : (
                <>{item.title.toUpperCase()}</>
              )}
              <HiOutlineArrowLongRight />
            </div>
          </li>
        ))}
      </div>

      <div className="contact-us">
        <h2>Mail Us:</h2>
        <p>wardanspices@gmail.com</p>
      </div>
    </div>
  );
};

export default NavMenu;
