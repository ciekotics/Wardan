"use client";
// redux store providers needs to be a client component, but it wouldn't be a nice idea for the layout to be a client component

import React from "react";

// CUSTOM IMPORTS
import StoreProvider from "@/store";

const AppLayout = ({ children }: { children: React.ReactNode }) => {

  return (
      <React.Fragment
      >
        {children}
      </React.Fragment>
  );
};

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <AppLayout>{children}</AppLayout>
    </StoreProvider>
  );
};

export default AppWrapper;