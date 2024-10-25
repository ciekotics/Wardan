"use client";

import { ReduxWrapper } from "@/components/redux-wrapper";
import React from "react";
import TopNewsItem from "./top-news-item";

const Item3 = () => {
  return (
    <div className="top-news">
      <ReduxWrapper loading={LoadingSkeleton()}>
        <TopNewsItem />
      </ReduxWrapper>
    </div>
  );
};

// A separate component for loading skeleton
const LoadingSkeleton = () => (
  <div className="top-news--loader-wrapper">
    {/* {Array.from({ length: 3 }).map((_, index) => {
        return (
          <div key={index} className="top-news__item top-news__item-loading">
            <div className="content">
              <p className="title loading"></p>
              <p className="date loading"></p>
              <p className="date loading"></p>
            </div>
          </div>
        );
      })} */}
      <div className="top-news--loader"></div>
      <div></div>
  </div>
);

export default Item3;
