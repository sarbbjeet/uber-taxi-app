import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsStatusbarHide, setStatusbarColor } from "../slice/utilsSlice";
import { getOrigin, setDestination, setOrigin } from "../slice/navSlice";
import NavOptions from "../components/NavOptions";
import AutocompletePlacesInput from "../components/AutocompletePlacesInput";
import { useEffect } from "react";
import NavFavourite from "../components/NavFavourite";

const source = require("../resources/App.png");

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  //dispatch(setIsStatusbarHide(false)); //hide statusbar
  // dispatch(setStatusbarColor("white")); //hide statusbar
  const { origin, destination, timeToTravel } = useSelector(
    (state) => state.navSlice
  );
  //console.log("origin", origin);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <AutocompletePlacesInput
          onChangeInput={(data, details) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
        />
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Image
            source={source}
            style={{ marginLeft: 25, width: 120, height: 120 }}
            resizeMode="contain"
          />
          <NavOptions
            disabled={origin ? false : true} //disabled option buttons
            itemOnClick={(item) => navigation.navigate("map")}
          />
        </View>
        <View style={{ flex: 1, marginHorizontal: 20 }}>
          <NavFavourite />
        </View>
      </View>
    </SafeAreaView>
  );
}
