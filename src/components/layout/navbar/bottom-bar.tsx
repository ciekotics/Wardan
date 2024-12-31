"use client";

import { BOTTOMBAR_TABS } from "@/config/constants/navbar-data";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import NavMenu from "./nav-menu";

const Bottombar = ({ scrolled }: { scrolled: boolean }) => {
  const router = useRouter();
  const location = usePathname();

  const [activeTab, setActiveTab] = useState<
    "home" | "about wardan" | "products" | "blogs" | "contact" | "policies"
  >("home");
  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    if (location.split("/").includes("all-products")) {
      setActiveTab("products");
    }
  }, [location]);

  useEffect(() => {
    if (toggleNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggleNav]);

  return (
    <React.Fragment>
      <ul className="nav__bottombar">
        {BOTTOMBAR_TABS.map((item, index) => {
          return (
            <li
              key={index}
              className={`nav__bottombar-items ${
                activeTab === item.title ? "active" : ""
              }`}
              onClick={() => {
                if (item.title !== "blogs") {
                  setActiveTab(item.title);
                  router.push(`${item.href}`);
                }
              }}
            >
              {item.title === "blogs" ? (
                <Link href={"/blogs"} target="_blank" rel="norefferer noopener">
                  {item.title.toUpperCase()}
                </Link>
              ) : (
                <>{item.title.toUpperCase()}</>
              )}
            </li>
          );
        })}
      </ul>

      <motion.div
        className="nav__bottombar-menu"
        initial={{ x: "-100%" }}
        animate={{ x: toggleNav ? "0%" : "-100%" }}
        transition={{ duration: 0.3 }}
      >
        <NavMenu setToggle={setToggleNav} />
      </motion.div>

      <div className="ofXl__contact-wrapper">
        <div className="ofXl__contact">Contact Us</div>
        <button
          className={`nav-open-btn ${scrolled ? "scroll" : "unscroll"}`}
          aria-label="open menu"
          onClick={() => setToggleNav(!toggleNav)}
        >
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>
      </div>

      <div
        className={`overlay ${toggleNav ? "active" : ""}`}
        onClick={() => setToggleNav(!toggleNav)}
      ></div>
    </React.Fragment>
  );
};

export default Bottombar;
