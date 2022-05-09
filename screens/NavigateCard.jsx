import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AutocompletePlacesInput from "../components/AutocompletePlacesInput";
import { setDestination } from "../slice/navSlice";
import { useDispatch } from "react-redux";
import NavFavourite from "../components/NavFavourite";
import RideEatList from "../components/RideEatList";

const NavigateCard = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 10 }}>
      <Text
        style={{
          color: "#666",
          marginVertical: 20,
          fontSize: 20,
          textAlign: "center",
        }}
      >
        Good Morning, Sarb
      </Text>
      <AutocompletePlacesInput
        placeholder="where to ?"
        styleProps={{ ...styles.searchBoxStyle }}
        onChangeInput={(data, details) => {
          dispatch(
            setDestination({
              location: details.geometry.location,
              description: data.description,
            })
          );
          //navigate to rideOptioncard
          navigation.navigate("rideOptionCard");
        }}
      />
      <View style={{ marginTop: 40 }}>
        <NavFavourite />
      </View>
      <View
        style={{ display: "flex", alignItems: "center", marginTop: "auto" }}
      >
        <RideEatList navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;
const styles = StyleSheet.create({
  searchBoxStyle: {
    container: {
      flex: 1,
      position: "absolute",
      zIndex: 2,
      width: "100%",
      top: 50,
    },
    // textInput: {
    //   // backgroundColor: "#fff",
    // },
  },
});
