import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import Export from "./export";

const FilterBy = () => {
  return (
    <div className="filterby">
      <Export />
      <div className="filter-btn">
        <FaFilter size={25} className="text-primary" />
        <span>Filter By</span>
        <IoIosArrowDown size={15} />
      </div>
    </div>
  );
};

export default FilterBy;
