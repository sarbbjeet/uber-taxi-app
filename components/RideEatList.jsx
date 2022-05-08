import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import IconTextCard from "./IconTextCard";

const data = [
  {
    title: "Rides",
    name: "car",
  },
  {
    title: "Eats",
    name: "home",
  },
];
const RideEatList = ({ navigation }) => {
  return (
    <FlatList
      data={data}
      horizontal
      ItemSeparatorComponent={() => <View style={{ marginRight: 30 }} />}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <IconTextCard
          title={item.title}
          name={item.name}
          onPress={() => {
            item.title === "Rides" && navigation.navigate("rideOptionCard");
          }}
          color={item.title === "Eats" ? "white" : "black"}
          style={{ backgroundColor: item.title === "Eats" ? "#555" : "#ddd" }}
        />
      )}
    />
  );
};

export default RideEatList;

const styles = StyleSheet.create({});
