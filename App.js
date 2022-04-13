import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./App/Screens/Login";
import Register from "./App/Screens/Register";
import Home from "./App/Screens/Home";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Home />
      </View>
    </NavigationContainer>
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
