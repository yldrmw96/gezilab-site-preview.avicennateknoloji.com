import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./reducers/sidebar.reducer";
import languageReducer from "./reducers/language.reducer";
import stringCatalogReducer from "./reducers/string-catalog.reducer";

export const store = configureStore({
  reducer: {  
    sidebar: sidebarReducer,
    language: languageReducer,
    stringCatalog: stringCatalogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;