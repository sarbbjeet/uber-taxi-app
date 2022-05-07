import { createSlice } from "@reduxjs/toolkit";

export const utilsSlice = createSlice({
  name: "utilsSlice",
  initialState: {
    statusbarColor: "white",
    isStatusbarHide: true,
  },
  reducers: {
    setStatusbarColor: (state, action) => {
      return {
        ...state,
        statusbarColor: action.payload,
      };
    },
    setIsStatusbarHide: (state, action) => {
      return {
        ...state,
        isStatusbarHide: action.payload,
      };
    },
  },
});

export const { setStatusbarColor, setIsStatusbarHide } = utilsSlice.actions;
export default utilsSlice.reducer;

//selector

export const getStatusbarColor = (state) => state.utilsSlice.statusbarColor;
export const getIsStatusbarHide = (state) => state.utilsSlice.isStatusbarHide;
