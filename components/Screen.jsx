import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { useSelector } from "react-redux";
import { getIsStatusbarHide, getStatusbarColor } from "../slice/utilsSlice";

const AppStatusbar = ({ backgroundColor, hide }) => (
  <View
    style={{
      ...styles.statusBar,
      backgroundColor,
      display: hide ? "none" : "flex",
    }}
  />
);

export default function Screen({ children }) {
  const { isStatusbarHide, statusbarColor } = useSelector(
    (state) => state.utilsSlice
  );
  // const statusbarColor = useSelector(getStatusbarColor);
  // const isStatusbarHide = useSelector(getIsStatusbarHide);
  return (
    <View style={{ flex: 1 }}>
      <AppStatusbar backgroundColor={statusbarColor} hide={isStatusbarHide} />
      <View style={{ flex: 1 }}>{children}</View>
    </View>
  );
}
const styles = StyleSheet.create({
  statusBar: {
    height: Constants.statusBarHeight,
    width: "100%",
  },
});
