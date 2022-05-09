import { View, Text, FlatList } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { setIsStatusbarHide, setStatusbarColor } from "../slice/utilsSlice";
import ItemCard from "../components/ItemCard";
import moment from "moment";

export default function NavOptions({ itemOnClick, disabled = false }) {
  const dispatch = useDispatch();
  //   dispatch(setIsStatusbarHide(false));
  //   dispatch(setStatusbarColor("red"));
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
    <FlatList
      listKey={moment().valueOf().toString()}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={{ marginHorizontal: 10 }} />}
      horizontal
      data={data}
      renderItem={({ item }) => (
        <ItemCard
          disabled={disabled}
          item={item}
          itemOnClick={() => itemOnClick(item)}
        />
      )}
    />
  );
}
