import { Language } from "../../types/language";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Language = {
  code: "tr",
  label: "Türkçe",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;