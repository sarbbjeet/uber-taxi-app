import { View, Text, Image } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { setIsStatusbarHide, setStatusbarColor } from "../slice/utilsSlice";
import { setOrigin } from "../slice/navSlice";
import NavOptions from "../components/NavOptions";

const source = require("../resources/App.png");
export default function Home({ navigation }) {
  const dispatch = useDispatch();
  dispatch(setIsStatusbarHide(false)); //hide statusbar
  dispatch(setStatusbarColor("white")); //hide statusbar
  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 10 }}>
        <Image
          source={source}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
      </View>
      <NavOptions
        disabled={false} //disabled option buttons
        itemOnClick={(item) => navigation.navigate("map")}
      />
    </View>
  );
}
