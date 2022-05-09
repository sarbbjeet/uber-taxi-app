import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Constants from "expo-constants";
import MapScreen from "../screens/MapScreen";
import HomeScreen from "../screens/HomeScreen";

export default function RootRoutes() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      {/* <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
      > */}
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="map"
          component={MapScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
      {/* </KeyboardAvoidingView> */}
    </NavigationContainer>
  );
}
