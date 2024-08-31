import { GlobalSettings } from "@/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: GlobalSettings = {
  hasHoveredOrderNav: false,

  hasHoveredOrderNavModal: false,

  blogsLimit: 12,
  blogsOffset: 0,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setHasHoveredOrderNav: (state) => {
      state.hasHoveredOrderNav = true
      state.hasHoveredOrderNavModal = true
    },
    resetHasHoveredOrderNav: (state) => {
      state.hasHoveredOrderNav = false
    },
    resetHasHoveredOrderNavModal: (state) => {
      state.hasHoveredOrderNavModal = false
    },
  },
});

export const { setHasHoveredOrderNav, resetHasHoveredOrderNav, resetHasHoveredOrderNavModal } = globalSlice.actions;

export default globalSlice.reducer;