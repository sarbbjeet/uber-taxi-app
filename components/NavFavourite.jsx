import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import moment from "moment";

const data = [
  {
    id: 1,
    name: "Home",
    icon: "home",
    location: "Tennyson Street, Middlesbrough",
  },
  {
    id: 2,
    name: "Work",
    icon: "team",
    location: "SK Food, River Side",
  },
];

const NavFavourite = ({ favList = [], onPress = () => {} }) => {
  return (
    <FlatList
      data={[...data, ...favList]}
      listKey={moment().valueOf().toString()}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={{ height: 1, backgroundColor: "#ccc" }} />
      )}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => onPress(item)}
          style={{
            marginVertical: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ marginRight: 10 }}>
            <Icon name={item?.icon} size={35} color={"black"} />
          </View>
          <View>
            <Text style={{ fontSize: 18 }}>{item?.name}</Text>
            <Text style={{ color: "#666" }}>{item?.location}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourite;

const styles = StyleSheet.create({});
