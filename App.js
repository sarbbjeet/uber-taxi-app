import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Home from "./screens/Home";
import { store } from "./store";
import { Constants } from "expo-constants";
import Screen from "./components/Screen";

export default function App() {
  Constants;
  return (
    <Provider store={store}>
      <Screen>
        <Home />
      </Screen>
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
