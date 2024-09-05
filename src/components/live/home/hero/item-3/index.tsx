"use client";

import { ReduxWrapper } from "@/components/redux-wrapper";
import React from "react";
import TopNewsItem from "./top-news-item";

const Item3 = () => {
  return (
    <div className="top-news">
      <ReduxWrapper loading={null}>
        <TopNewsItem />
      </ReduxWrapper>
    </div>
  );
};

// A separate component for loading skeleton
const LoadingSkeleton = () => (
  <React.Fragment>
    {Array.from({ length: 3 }).map((_, index) => {
        return (
          <div key={index} className="top-news__item top-news__item-loading">
            <div className="content">
              <p className="title loading"></p>
              <p className="date loading"></p>
              <p className="date loading"></p>
            </div>
          </div>
        );
      })}
  </React.Fragment>
);

export default Item3;
