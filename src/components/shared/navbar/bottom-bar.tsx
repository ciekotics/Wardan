"use client";

import { BOTTOMBAR_TABS } from "@/config/constants/navbar-data";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Bottombar = () => {
  const router = useRouter();
  const location = usePathname();

  const [activeTab, setActiveTab] = useState<
    "home" | "about wardan" | "products" | "blogs" | "contact"
  >("home");

  if (location !== '/blogs') {

    return (
      <ul className="nav__bottombar">
        {BOTTOMBAR_TABS.map((item, index) => {
          return (
            <li
              key={index}
              className={`nav__bottombar-items ${
                activeTab === item.title ? "active" : ""
              }`}
              onClick={() => {
                setActiveTab(item.title);
                router.push(`${item.href}`)
              }}
            >
              {item.title.toUpperCase()}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null
  }
};

export default Bottombar;
