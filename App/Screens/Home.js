import React from "react";
import AppTopPart from "../components/AppTopPart";
import { StyleSheet, Text, View } from "react-native";
import AppSectionTitle from "../components/AppSectionTitle";
import AppSection from "../components/AppSection";

function Home(props) {
  return (
    <View style={styles.container}>
      <AppTopPart title="Home" height="40%" />
      <View style={styles.bottomContainer}>
        <Text style={styles.textTitle}>
          Welcome to Adventure Works Australia
        </Text>
        <AppSectionTitle>Events you have booked</AppSectionTitle>
        <AppSection cardDetails={cardDetails} />
      </View>
    </View>
  );
}

const cardDetails = [
  {
    index: 0,
    image: require("../assets/bg-login.jpg"),
    title: "Adventure For All",
    date: "1st Jan, 2022",
  },
  {
    index: 1,
    image: require("../assets/bg-login.jpg"),
    title: "Adventure For All",
    date: "1st Jan, 2022",
  },
];

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#D8E3F3",
  },
  bottomContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#D8E3F3",
    borderRadius: 30,
    marginTop: -70,
  },
  textTitle: {
    alignSelf: "center",
    textAlign: "center",
    margin: 40,
    fontSize: 24,
    width: "60%",
  },
});

export default Home;
