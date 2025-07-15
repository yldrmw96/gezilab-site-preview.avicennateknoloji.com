import { createSlice } from "@reduxjs/toolkit";

const initialState: any[] = [];

const stringCatalogSlice = createSlice({
  name: "stringCatalog",
  initialState,
  reducers: {
    setStringCatalog: (_, action) => {
      return action.payload;
    },
  },
});

export const { setStringCatalog } = stringCatalogSlice.actions;
export default stringCatalogSlice.reducer;