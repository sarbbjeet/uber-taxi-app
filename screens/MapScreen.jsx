import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Constants from "expo-constants";

import { getDestination, getOrigin } from "../slice/navSlice";
import BackButton from "../components/BackButton";
import MapScreenRoutes from "../navigation/MapScreenRoutes";

import Map from "../components/Map";
export default function MapScreen({ navigation }) {
  // dispatch(setIsStatusbarHide(true));
  return (
    <View style={{ flex: 1 }}>
      <BackButton style={styles.backButton} navigation={navigation} />
      <Map style={{ flex: 1 }} />

      <View style={{ flex: 1 }}>
        <MapScreenRoutes />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  backButton: {
    marginTop: Constants.statusBarHeight,
    opacity: 0.4,
    padding: 0,
    height: 40,
    width: 40,
    position: "absolute",
    zIndex: 10,
  },
});
