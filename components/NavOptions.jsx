import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";

export default function NavOptions() {
  const ItemCard = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          paddingVertical: 10,
          paddingHorizontal: 30,
          margin: 10,
          backgroundColor: "#ccc",
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
            padding: 10,
          }}
        >
          <Icon name="arrowright" size={30} color="white" />
        </View>
      </TouchableOpacity>
    );
  };

  const data = [
    {
      title: "get a ride",
      id: 1,
      image: "https://links.papareact.com/3pn",
      screen: "MapsScreen",
    },
    {
      title: "order food",
      id: 2,
      image: "https://links.papareact.com/28w",
      screen: "EatsScreen",
    },
  ];

  return (
    <View
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <FlatList
        styles={{
          width: "90%",
        }}
        keyExtractor={(item) => item.id}
        horizontal
        data={data}
        renderItem={({ item }) => <ItemCard item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageItem: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    padding: 10,
  },
});
