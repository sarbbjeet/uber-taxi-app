import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./slice/navSlice";

export const store = configureStore({
  reducer: {
    navSlice,
  },
});
