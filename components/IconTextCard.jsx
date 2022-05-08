import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";

const IconTextCard = ({
  title,
  color = "black",
  name,
  style,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ ...styles.card, ...style }}>
      <Icon name={name} size={30} color={color} />
      <Text style={{ marginLeft: 10, color }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default IconTextCard;

const styles = StyleSheet.create({
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: 120,
    height: 50,
    borderRadius: "100%",
  },
});
