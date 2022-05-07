import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { getOrigin } from "./slice/navSlice";

export default function Home() {
  console.log("getOrigin=", useSelector(getOrigin));
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
