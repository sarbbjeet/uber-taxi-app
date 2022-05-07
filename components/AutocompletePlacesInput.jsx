import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Google_Map_APIKey } from "@env";

const query = {
  key: Google_Map_APIKey,
  language: "en",
};

const AutocompletePlacesInput = ({ onChangeInput }) => {
  return (
    <GooglePlacesAutocomplete
      styles={{
        container: {
          flex: 0,
          paddingHorizontal: 5,
        },
        textInput: {
          fontSize: 18,
        },
      }}
      nearbyPlacesAPI="GooglePlacesSearch"
      enablePoweredByContainer={false}
      placeholder="Where from ?"
      minLength={2}
      onPress={(data, details = null) => onChangeInput(data, details)}
      query={query}
      debounce={400}
    />
  );
};
export default AutocompletePlacesInput;

const styles = StyleSheet.create({});
