"use client";

import { FaAngleDown } from "react-icons/fa";

// CUSTOM IMPORTS
import OrderOnlineModal from "@/components/order-online-modal";
import { RootState, useAppDispatch, useAppSelector } from "@/store";
import React, { useState } from "react";
import {
  resetHasHoveredOrderNav,
  setHasHoveredOrderNav,
} from "@/store/actions/slices/global-slice";
// import { RiProductHuntLine } from "react-icons/ri";

const OrderOnline = () => {
  const dispatch = useAppDispatch();
  const { hasHoveredOrderNavModal, hasHoveredOrderNav } = useAppSelector(
    (state: RootState) => state.global
  );

  const [showPartnerClick, setShowPartnerClick] = useState(false);

  return (
    <React.Fragment>
      <span
        className="order-online"
        onMouseOver={() => dispatch(setHasHoveredOrderNav())}
        onMouseLeave={() => {
          dispatch(resetHasHoveredOrderNav());
        }}
        onClick={() => {
          setShowPartnerClick(!showPartnerClick);
        }}
      >
        <p className="">order online</p>
        <FaAngleDown className="text-primary " />
      </span>
      {showPartnerClick && (hasHoveredOrderNavModal || hasHoveredOrderNav) ? (
        <OrderOnlineModal />
      ) : null}
    </React.Fragment>
  );
};

export default OrderOnline;
