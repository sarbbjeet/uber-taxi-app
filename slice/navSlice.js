import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Google_Map_APIKey } from "@env";
const baseUrl =
  "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&";
const getFinalUrl = ({ origins = "", destinations = "", key = "" }) => {
  const queryObj = {
    origins,
    destinations,
    key,
  };
  let queryString = "";
  Object.keys(queryObj).forEach((key) => {
    queryString += `${key}=${queryObj[key]}&`;
  });
  return baseUrl + queryString;
};
const initialState = {
  origin: null,
  destination: null,
  timeToTravel: null,
  distanceToTravel: null,
};
const navSlice = createSlice({
  name: "navSlice",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      return {
        ...state,
        origin: action.payload,
      };
    },
    setDestination: (state, action) => {
      return {
        ...state,
        destination: action.payload,
      };
    },

    setTimeToTravel: (state, action) => {
      return {
        ...state,
        timeToTravel: action.payload,
      };
    },
    setDistanceToTravel: (state, action) => {
      return {
        ...state,
        distanceToTravel: action.payload,
      };
    },
  },
});

export const {
  setOrigin,
  setDestination,
  setDistanceToTravel,
  setTimeToTravel,
} = navSlice.actions;
export default navSlice.reducer;

//get
export const getDistaceToTravel = () => async (dispatch, getState) => {
  const { origin, destination } = getState().navSlice;
  if (!origin || !destination) return;
  let finalUrl = getFinalUrl({
    origins: origin?.description,
    destinations: destination?.description,
    key: Google_Map_APIKey,
  });
  await axios
    .request({
      url: finalUrl,
    })
    .then((response) => {
      // console.log("response", response.data.rows[0].elements[0].duration);
      dispatch(setTimeToTravel(response?.data?.rows[0]?.elements[0]?.duration));
      dispatch(
        setDistanceToTravel(response?.data?.rows[0]?.elements[0]?.distance)
      );
    })
    .catch((err) => console.log("error to get data", err));
};

export const getOrigin = (state) => state.navSlice.origin;
export const getDestination = (state) => state.navSlice.destination;
export const getTimeToTravel = (state) => state.navSlice.timeToTravel;
export const getDistanceToTravel = (state) => state.navSlice.distanceToTravel;
