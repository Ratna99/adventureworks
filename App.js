import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./App/Screens/Login";
import Register from "./App/Screens/Register";
import Home from "./App/Screens/Home";
import Events from "./App/Screens/Events";
import CreateEvents from "./App/Screens/CreateEvents";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyHome from "./App/Screens/MyHome";
import EventDetails from "./App/Screens/EventDetails";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="MyHome"
          component={MyHome}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerBackTitleVisible: false,
            headerTitle: "",
            headerTransparent: true,
          }}
          name="EventDetails"
          component={EventDetails}
        />
      </Stack.Navigator>
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
