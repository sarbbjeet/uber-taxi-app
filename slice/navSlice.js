import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  timeToTravel: null,
};
const navSlice = createSlice({
  name: "navSlice",
  initialState,
  reducer: {
    setOrigin: (state, action) => {
      return {
        ...state,
        origin: action.payload.origin,
      };
    },
    setDestination: (state, action) => {
      return {
        ...state,
        destination: action.payload.destination,
      };
    },
    setTimeToTravel: (state, action) => {
      return {
        ...state,
        timeToTravel: action.payload.timeToTravel,
      };
    },
  },
});

const { setOrigin, setDestination, setTimeToTravel } = navSlice.actions;
export default navSlice.reducer;

export const getOrigin = (state) => state.navSlice.origin;
export const getDestination = (state) => state.navSlice.destination;
export const getTimeToTravel = (state) => state.navSlice.timeToTravel;
