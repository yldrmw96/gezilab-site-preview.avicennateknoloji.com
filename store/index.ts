import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "@store/reducers/sidebar.reducer";
import languageReducer from "@store/reducers/language.reducer";
import stringCatalogReducer from "@store/reducers/string-catalog.reducer";

export const store = configureStore({
  reducer: {  
    sidebar: sidebarReducer,
    language: languageReducer,
    stringCatalog: stringCatalogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;