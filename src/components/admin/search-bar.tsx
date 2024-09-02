"use client";

import { RootState, useAppDispatch, useAppSelector } from "@/store";
import { setSearchBlogsAdmin } from "@/store/actions/slices/global-slice";
import React, { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";

const Searchbar = ({
  setSearch,
}: {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const dispatch = useAppDispatch();
  const { searchBlogsAdmin } = useAppSelector(
    (state: RootState) => state.global
  );

  useEffect(() => { setSearch(searchBlogsAdmin) }, [searchBlogsAdmin, setSearch])

  return (
    <div className="searchbar">
      <div className="input-wrapper">
        <LuSearch size={20} />
        <input
          type="text"
          placeholder="Search By Title..."
          value={searchBlogsAdmin || ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            // setSearch(e.target.value);
            dispatch(setSearchBlogsAdmin({ search: e.target.value }));
          }}
        />
      </div>
    </div>
  );
};

export default Searchbar;
