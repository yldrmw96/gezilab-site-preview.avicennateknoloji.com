import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shouldShowBorder: false,
  searchQuery: "",
  isSearchOpen: false,
  headerHeight: 0,
  isSidebarOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setShouldShowBorder: (state, action) => {
      // console.log(action.payload);
      state.shouldShowBorder = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setIsSearchOpen: (state, action) => {
      state.isSearchOpen = action.payload;
    },
    setHeaderHeight: (state, action) => {
      state.headerHeight = action.payload;
    },
    setIsSidebarOpen: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const { setShouldShowBorder, setSearchQuery, setIsSearchOpen, setHeaderHeight, setIsSidebarOpen } = sidebarSlice.actions;
export default sidebarSlice.reducer;