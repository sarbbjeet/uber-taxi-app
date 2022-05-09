import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Google_Map_APIKey } from "@env";

const query = {
  key: Google_Map_APIKey,
  language: "en",
};

const AutocompletePlacesInput = ({
  placeholder = "where from ?",
  onChangeInput,
  styleProps,
}) => {
  return (
    <GooglePlacesAutocomplete
      styles={{ ...styles.autoCompleteStyle, ...styleProps }}
      nearbyPlacesAPI="GooglePlacesSearch"
      enablePoweredByContainer={false}
      placeholder={placeholder}
      minLength={2}
      returnKeyType="search"
      fetchDetails={true}
      onPress={(data, details = null) => onChangeInput(data, details)}
      query={query}
      debounce={400}
    />
  );
};
export default AutocompletePlacesInput;

const styles = StyleSheet.create({
  autoCompleteStyle: {
    container: {
      flex: 0,
    },
    textInput: {
      backgroundColor: "#ddd",
      fontSize: 16,
    },
  },
});
