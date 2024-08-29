"use client";
// redux store providers needs to be a client component, but it wouldn't be a nice idea for the layout to be a client component

import React from "react";

// CUSTOM IMPORTS
import StoreProvider from "@/store";

const ReduxLayout = ({ children }: { children: React.ReactNode }) => {

  return (
      <React.Fragment
      >
        {children}
      </React.Fragment>
  );
};

export const ReduxWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <ReduxLayout>{children}</ReduxLayout>
    </StoreProvider>
  );
};
