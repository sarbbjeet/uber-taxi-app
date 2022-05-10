import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  LogBox,
  TextInput,
} from "react-native";
import React from "react";
import Constants from "expo-constants";
// import { ScrollView } from "react-native-virtualized-view";
import AutocompletePlacesInput from "../components/AutocompletePlacesInput";
import NavFavourite from "../components/NavFavourite";
import NavOptions from "../components/NavOptions";
import { useDispatch, useSelector } from "react-redux";
import {
  getDistaceToTravel,
  getOrigin,
  setDestination,
  setOrigin,
} from "../slice/navSlice";
import { useEffect } from "react";
export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const { origin, destination } = useSelector((state) => state.navSlice);
  useEffect(
    () => async () => await dispatch(getDistaceToTravel())(),
    [origin, destination]
  );
  /* stop diplaying VirtualizedLists error */
  LogBox.ignoreLogs([
    "VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead",
  ]);
  /**************************************** */
  //const origin = useSelector(getOrigin);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: Constants.platform.android ? Constants.statusBarHeight : 0,
      }}
    >
      <ScrollView
        listViewDisplay={false}
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={{ marginTop: 20, marginHorizontal: 10, flex: 1 }}>
          <Text
            style={{
              marginBottom: 80,
              letterSpacing: 2,
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            UBER
          </Text>

          <AutocompletePlacesInput
            styleProps={{
              container: {
                flex: 1,
                position: "absolute",
                zIndex: 2,
                top: 45,
                width: "100%",
              },
            }}
            onChangeInput={(data, details) => {
              dispatch(
                setOrigin({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              dispatch(setDestination(null));
            }}
          />
          <View style={{ marginBottom: 30 }}>
            <NavOptions
              disabled={origin ? false : true}
              itemOnClick={(item) => navigation.navigate("map")}
            />
          </View>
          <NavFavourite />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
