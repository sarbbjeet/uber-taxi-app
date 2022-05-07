import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./slice/navSlice";
import utilsSlice from "./slice/utilsSlice";

export const store = configureStore({
  reducer: {
    navSlice,
    utilsSlice,
  },
});
