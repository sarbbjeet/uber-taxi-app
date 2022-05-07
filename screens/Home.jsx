import { View, Text } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { setIsStatusbarHide, setStatusbarColor } from "../slice/utilsSlice";
import { setOrigin } from "../slice/navSlice";

export default function Home() {
  const dispatch = useDispatch();
  dispatch(setIsStatusbarHide(false)); //hide statusbar
  dispatch(setStatusbarColor("#ff4488")); //hide statusbar
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
