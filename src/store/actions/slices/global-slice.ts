import { GlobalSettings } from "@/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: GlobalSettings = {
  hasHoveredOrderNav: false,

  hasHoveredOrderNavModal: false,

  blogsLimit: 12,
  blogsOffset: 0,

  searchBlogsAdmin: '',
  toRefetchBlogsAdmin: false,
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
    setSearchBlogsAdmin: (state, action: PayloadAction<{ search: string }>) => {
      state.searchBlogsAdmin = action.payload.search
      state.toRefetchBlogsAdmin = true
    },
    resetSearchBlogsAdmin: (state) => {
      state.searchBlogsAdmin = ''
    },
    resetRefetchBlogsAdmin: (state) => {
      state.toRefetchBlogsAdmin = false
    },
  },
});

export const { setHasHoveredOrderNav, resetHasHoveredOrderNav, resetHasHoveredOrderNavModal, setSearchBlogsAdmin, resetSearchBlogsAdmin, resetRefetchBlogsAdmin } = globalSlice.actions;

export default globalSlice.reducer;