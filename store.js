import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./slice/navSlice";
import utilsSlice from "./slice/utilsSlice";
import api from "./middleware/api";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    navSlice,
    utilsSlice,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    api,
  ],
});
