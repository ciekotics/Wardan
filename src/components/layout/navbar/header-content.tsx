"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Bottombar from "./bottom-bar";
import Topbar from "./top-bar";
import Link from "next/link";

const HeaderContent = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`header-content ${isScrolled ? "scrolled" : "normal"}`}>
      <Link href={"/"}>
        <Image
          src={"/images/logo.svg"}
          alt="wardan-app-logo"
          width={150}
          height={120}
          priority
          className="main-logo"
        />
      </Link>

      <nav className="nav">
        <Topbar />
        <Bottombar scrolled={isScrolled} />
      </nav>
    </div>
  );
};

export default HeaderContent;
