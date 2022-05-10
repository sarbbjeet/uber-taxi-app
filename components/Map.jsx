import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { getDestination, getOrigin } from "../slice/navSlice";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import { Google_Map_APIKey } from "@env";
import { useRef } from "react";
import { useEffect } from "react";
const Map = ({ style }) => {
  const origin = useSelector(getOrigin);
  const destination = useSelector(getDestination);
  const mapRef = useRef(null);
  useEffect(() => {
    if (!origin || !destination) return;
    //fit & zoom markers
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, left: 50, right: 50, bottom: 50 },
    });
  }, [origin, destination]);
  return (
    <MapView
      style={{ ...style }}
      ref={mapRef}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin?.location.lat,
        longitude: origin?.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={Google_Map_APIKey}
          strokeWidth={3}
          //way to handle error
          //   onError={(item) => console.log("erorr..", item)}
          lineDashPattern={[0]}
          strokeColor="black"
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin?.location?.lat,
            longitude: origin?.location?.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
