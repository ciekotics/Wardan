"use client";
// redux store providers needs to be a client component, but it wouldn't be a nice idea for the layout to be a client component

import React, { memo } from "react";

// CUSTOM IMPORTS
import StoreProvider from "@/store";

const ReduxLayout = memo(({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
});

// Setting the display name for better debugging
ReduxLayout.displayName = 'ReduxLayout';

export const ReduxWrapper = ({ children, loading }: { children: React.ReactNode; loading?: React.ReactNode; }) => {
  return (
    <StoreProvider loading={loading}>
      <ReduxLayout>{children}</ReduxLayout>
    </StoreProvider>
  );
};
