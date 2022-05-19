import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import AppButton from "../components/AppButton";

function EventDetails() {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={
          route.params.image
            ? { uri: route.params.image }
            : require("../assets/bg-login.jpg")
        }
      />
      <View style={styles.bottomContainer}>
        <Text style={styles.location}>{route.params.location}</Text>
        <Text style={styles.title}>{route.params.title}</Text>
        <Text style={styles.label}>Description</Text>
        <Text style={styles.desc}>{route.params.desc}</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{route.params.date}</Text>
          <AppButton style={styles.btn} title="   Book Now   " />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#F8FBFF",
    position: "relative",
  },
  image: {
    height: "50%",
    width: "100%",
  },
  bottomContainer: {
    width: "100%",
    height: "55%",
    backgroundColor: "#F8FBFF",
    borderRadius: 30,
    marginTop: -50,
    backgroundColor: "#F8FBFF",
    position: "relative",
  },
  title: {
    fontSize: 26,
    paddingHorizontal: 20,
    fontWeight: "600",
  },
  label: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 18,
    fontWeight: "500",
  },
  desc: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  location: {
    paddingHorizontal: 20,
    paddingTop: 20,
    fontWeight: "200",
    fontSize: 10,
  },
  date: {},
  dateContainer: {
    position: "absolute",
    left: 0,
    bottom: 0,
    height: 60,
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default EventDetails;
