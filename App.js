import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

import { store } from "./store";
import { Constants } from "expo-constants";
import Screen from "./components/Screen";
import RootRoutes from "./navigation/RootRoutes";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  Constants;
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Screen>
          <RootRoutes />
        </Screen>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
