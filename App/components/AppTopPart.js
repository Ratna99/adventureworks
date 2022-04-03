import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppTextTitle from "./AppTextTitle";

function AppTopPart(props) {
  return (
    <View style={styles.topPart}>
      <Image style={styles.image} source={require("../assets/bg-login.jpg")} />
      <View style={styles.layer}>
        <View style={styles.overlay} />
        <AppTextTitle>Adventure Works</AppTextTitle>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topPart: {
    position: "relative",
    height: "50%",
    width: "100%",
  },
  image: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  layer: {
    position: "absolute",
    zIndex: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    position: "absolute",
    backgroundColor: "#46D0D9",
    opacity: 0.4,
    height: "100%",
    width: "100%",
  },
});

export default AppTopPart;
