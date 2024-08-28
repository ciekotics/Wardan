import { GlobalSettings } from "@/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: GlobalSettings = {
  hasHoveredOrderNav: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
  },
});

export const {} = globalSlice.actions;

export default globalSlice.reducer;