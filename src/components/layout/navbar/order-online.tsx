"use client";

import { FaAngleDown } from "react-icons/fa";

// CUSTOM IMPORTS
import OrderOnlineModal from "@/components/order-online-modal";
import { RootState, useAppDispatch, useAppSelector } from "@/store";
import React from "react";
import {
  resetHasHoveredOrderNav,
  setHasHoveredOrderNav,
} from "@/store/actions/slices/global-slice";

const OrderOnline = () => {
  const dispatch = useAppDispatch();
  const { hasHoveredOrderNavModal, hasHoveredOrderNav } = useAppSelector(
    (state: RootState) => state.global
  );

  return (
    <React.Fragment>
      <span
        className="order-online"
        onMouseOver={() => dispatch(setHasHoveredOrderNav())}
        onMouseLeave={() => {
          dispatch(resetHasHoveredOrderNav());
        }}
      >
        <p>order online</p>
        <FaAngleDown className="text-primary" />
      </span>
      {(hasHoveredOrderNavModal || hasHoveredOrderNav) ? <OrderOnlineModal /> : null}
    </React.Fragment>
  );
};

export default OrderOnline;
