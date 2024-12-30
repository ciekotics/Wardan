import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-links">
        <div className="wrapper">
          <div className="left">
            <Image
              src={"/images/logo_black.svg"}
              alt="logo-footer"
              width={50}
              height={50}
              className="img"
            />

            <p>
              We pride ourselves on crafting the finest spices that add zest and
              flavor to kitchens around the globe.
            </p>
          </div>
          <div className="wrap-last-two">
            <div className="middle">
              <p>Useful Links</p>

              <div className="links">
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>Our Products</Link>
                <Link href={"/blogs"}>Blogs</Link>
                <Link href={"/"}>Contact Us</Link>
                <Link href={"/"}>How It Works</Link>
              </div>
            </div>
            <div className="right">
              <p>Contact Us</p>

              <div className="links">
                <div className="mail">
                  <span className="icon">
                    <MdOutlineMailOutline size={20} />
                    <span>Mail Us :</span>
                  </span>
                  <Link href={"/"}>wardanspices@gmail.com</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-tabs">
        <div className="w-1/2">Copyright &copy; 2024 wardan</div>
        <div className="w-1/2 bottom-tabs__links">
          <h5>Sitemap</h5>
          <h5>Disclaimer</h5>
          <h5 className="above-md">Privacy Policy</h5>
          <h5 className="below-md">Privacy</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
