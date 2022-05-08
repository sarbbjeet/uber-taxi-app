import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../screens/NavigateCard";
import RideOptionCard from "../screens/RideOptionCard";

export default function MapHalfScreenRoute() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="navigateCard"
        component={NavigateCard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="rideOptionCard"
        component={RideOptionCard}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
