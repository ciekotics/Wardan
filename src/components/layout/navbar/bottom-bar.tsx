"use client";

// import Link from 'next/link'
import { BOTTOMBAR_TABS } from "@/config/constants/navbar-data";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import { FaLongArrowAltRight } from "react-icons/fa";
// import { MdOutlineDashboard } from "react-icons/md";

const Bottombar = () => {
  const router = useRouter();
  const location = usePathname();

  const [activeTab, setActiveTab] = useState<
    "home" | "about wardan" | "products" | "blogs" | "contact"
  >("home");

  useEffect(() => {
    if (location.split("/").includes("blogs")) {
      setActiveTab('blogs')
    }
  }, [location])

  // if (!location.split("/").includes("/blogs")) {
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
                router.push(`${item.href}`);
              }}
            >
              {item.title.toUpperCase()}
            </li>
          );
        })}
      </ul>
    );
  // } else {
  //   return (
  //     <div className={"nav__bottombar--admin"}>
  //       <Link
  //         className="item dashboard"
  //         href='/admin'
  //         target='_blank'
  //         rel='noreferrer noopener'
  //       >
  //         <MdOutlineDashboard />
  //         <span>Dashboard</span>
  //       </Link>

  //       <Link
  //         className="item"
  //         href='/admin/blogs'
  //         target='_blank'
  //         rel='noreferrer noopener'
  //       >
  //         <span>Go To Admin Panel</span>
  //         <FaLongArrowAltRight />
  //       </Link>
  //     </div>
  //   );
  // }
};

export default Bottombar;
