import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";

const BackButton = ({ navigation, style }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.backButton, ...style }}
      onPress={() => navigation.navigate("home")}
    >
      <Icon name="arrowleft" color="white" size={30} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backButton: {
    width: 50,
    height: 50,
    backgroundColor: "#111",
    display: "flex",
    justifyContent: "center",
    opacity: 0.6,
    margin: 5,
    alignItems: "center",
    borderRadius: 5,
  },
});
