import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getDistanceToTravel, getTimeToTravel } from "../slice/navSlice";

const SURGE_CHARGE_RATE = 1.45;
const data = [
  {
    title: "UberX",
    image: "https://links.papareact.com/5w8",
    price: "10",
    multipler: 1,
    id: 1,
  },
  {
    title: "UberXL",
    image: "https://links.papareact.com/3pn",
    price: "15.5",
    multipler: 1.4,
    id: 2,
  },
  {
    title: "UberLUX",
    image: "https://links.papareact.com/7pf",
    price: "21.4",
    multipler: 1.75,
    id: 3,
  },
];

const RideOptionCard = () => {
  const navigation = useNavigation();
  const [selectCar, setSelectCar] = useState("");
  const eventToSelectCar = (titleOfCar) => setSelectCar(titleOfCar);
  // distance in string -> (Text)
  //distance in numberical -> value
  const timeToTravel = useSelector(getTimeToTravel);
  const distanceToTravel = useSelector(getDistanceToTravel);

  const formulaToCalPrice = (multipler) =>
    new Intl.NumberFormat("en-gb", {
      style: "currency",
      currency: "GBP",
    }).format((timeToTravel?.value * SURGE_CHARGE_RATE * multipler) / 100);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ paddingVertical: 25, fontSize: 20, textAlign: "center" }}>
        Select a Ride - {distanceToTravel?.text}
      </Text>
      <View style={{ height: 1, backgroundColor: "#ddd" }} />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: "absolute",
          zindex: 2,
          top: 20,
          left: 20,
        }}
      >
        <Icon name="arrowleft" size={30} color="black" />
      </TouchableOpacity>
      <View style={{ flex: 5 }}>
        <FlatList
          style={{ paddingHorizontal: 5 }}
          data={data}
          ItemSeparatorComponent={() => (
            <View style={{ height: 2, backgroundColor: "#eee" }} />
          )}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => eventToSelectCar(item.title)}
              style={{
                display: "flex",
                paddingVertical: 2,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: selectCar === item.title ? "#ccc" : "#eee",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Image
                  source={{ uri: item?.image }}
                  style={{ width: 120, height: 80, resizeMode: "contain" }}
                />
              </View>
              <View style={{ marginRight: 20, marginTop: 20 }}>
                <Text
                  style={{ fontSize: 22, color: "#444", fontWeight: "bold" }}
                >
                  {item.title}
                </Text>
                <Text style={{ fontSize: 16, color: "#888" }}>
                  {timeToTravel?.text} travel time
                </Text>
              </View>
              <View style={{ marginLeft: -20 }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#444",
                    fontWeight: "bold",
                  }}
                >
                  {formulaToCalPrice(item?.multipler)} £
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={{ flex: 1, position: "relative" }}>
        <TouchableOpacity
          disabled={selectCar != "" ? false : true}
          style={{
            position: "absolute",
            zindex: 2,
            width: "80%",
            height: 60,
            backgroundColor: selectCar != "" ? "#555" : "#aaa",
            flex: 1,
            borderRadius: "100%",
            alignSelf: "center",
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20, letterSpacing: 1 }}>
            {" "}
            {selectCar != "" ? `Choosen ${selectCar}` : "Select a Car"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionCard;

const styles = StyleSheet.create({});
