import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import BackButton from "../components/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { setIsStatusbarHide } from "../slice/utilsSlice";
import Constants from "expo-constants";
import MapView, { Marker } from "react-native-maps";
import { getOrigin } from "../slice/navSlice";
export default function MapScreen({ navigation }) {
  const dispatch = useDispatch();
  const origin = useSelector(getOrigin);
  // dispatch(setIsStatusbarHide(true));
  return (
    <View style={{ flex: 1 }}>
      <BackButton style={styles.backButton} navigation={navigation} />

      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          mapType="mutedStandard"
          initialRegion={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          {origin?.location && (
            <Marker
              coordinate={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
              }}
              title="Origin"
              description={origin.description}
              identifier="origin"
            />
          )}
        </MapView>
      </View>
      <View style={{ flex: 1 }}>
        <Text>part 2</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  backButton: {
    marginTop: Constants.statusBarHeight,
    opacity: 0.5,
    position: "absolute",
    zIndex: 10,
  },
});
