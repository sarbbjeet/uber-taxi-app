import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsStatusbarHide, setStatusbarColor } from "../slice/utilsSlice";
import { getOrigin, setDestination, setOrigin } from "../slice/navSlice";
import NavOptions from "../components/NavOptions";
import AutocompletePlacesInput from "../components/AutocompletePlacesInput";
import { useEffect } from "react";

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
        <View style={{ flex: 1, marginHorizontal: 5, marginTop: 50 }}>
          <Image
            source={source}
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
          />
          <NavOptions
            disabled={origin ? false : true} //disabled option buttons
            itemOnClick={(item) => navigation.navigate("map")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
