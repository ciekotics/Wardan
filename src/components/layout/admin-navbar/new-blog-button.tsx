"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaPlus } from "react-icons/fa";

const NewBlogButton = () => {
  const location = usePathname()

  if (location.split('/').includes('add-blog')) {
    return null
  }
  return (
    <Link href={"/admin/add-blog"} className="wardan-btn">
      <FaPlus />
      <p>New Blog</p>
    </Link>
  );
};

export default NewBlogButton;
