import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
const ItemCard = ({ item, itemOnClick, disabled }) => {
  return (
    <TouchableOpacity
      onPress={itemOnClick}
      disabled={disabled}
      style={{
        paddingVertical: 10,
        paddingHorizontal: 35,
        backgroundColor: disabled ? "#ddd" : "#bbb",
        height: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image source={{ uri: item?.image }} style={styles.imageItem} />
      <Text
        style={{
          fontSize: 16,
          textTransform: "capitalize",
          paddingVertical: 5,
        }}
      >
        {item?.title}
      </Text>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: "#000",
          borderRadius: 25,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          //   marginVertical: 5,
        }}
      >
        <Icon name="arrowright" size={30} color="white" />
      </View>
    </TouchableOpacity>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  imageItem: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    padding: 10,
  },
});
