import { React, useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Events from "./Events";
import CreateEvents from "./CreateEvents";
import UserDetails from "./UserDetails";

import { db, auth } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

const Tab = createBottomTabNavigator();
function MyHome() {
  const [role, setRole] = useState("");

  useEffect(() => {
    const unsubscribe = getDoc(doc(db, "users", auth.currentUser.email)).then(
      (snapshot) => {
        setRole(snapshot.data().role);
      }
    );
    return unsubscribe;
  }, []);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                resizeMode="contain"
                source={require("../assets/icons/home.png")}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text style={{ color: focused ? "#e32f45" : "#748c94" }}>
                HOME
              </Text>
            </View>
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                resizeMode="contain"
                source={require("../assets/icons/event.png")}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text style={{ color: focused ? "#e32f45" : "#748c94" }}>
                EVENTS
              </Text>
            </View>
          ),
        }}
        name="Events"
        component={Events}
      />
      {role == "admin" ? (
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  resizeMode="contain"
                  source={require("../assets/icons/add.png")}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#e32f45" : "#748c94",
                  }}
                />
                <Text style={{ color: focused ? "#e32f45" : "#748c94" }}>
                  CREATE EVENTS
                </Text>
              </View>
            ),
          }}
          name="Create Events"
          component={CreateEvents}
        />
      ) : (
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  resizeMode="contain"
                  source={require("../assets/icons/user.png")}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#e32f45" : "#748c94",
                  }}
                />
                <Text style={{ color: focused ? "#e32f45" : "#748c94" }}>
                  PROFILE
                </Text>
              </View>
            ),
          }}
          name="User Details"
          component={UserDetails}
        />
      )}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MyHome;
