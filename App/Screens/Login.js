import React from "react";
import { ImageBackground, Image, StyleSheet, Text, View } from "react-native";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import AppTextTitle from "../components/AppTextTitle";
import AppTopPart from "../components/AppTopPart";

function Login(props) {
  return (
    <View style={styles.container}>
      <AppTopPart />
      <View style={[styles.triangle]}>
        <Image
          style={styles.triangleImage}
          source={require("../assets/triangle.png")}
        />
      </View>
      <AppTextTitle style={styles.welcome}>Welcome</AppTextTitle>
      <Text style={styles.textDescription}>
        Login for bush adventure therapy
      </Text>
      <AppTextInput name="Email" />
      <AppTextInput name="Password" />
      <AppButton title="Login" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#D8E3F3",
  },
  triangle: {
    position: "absolute",
    width: "100%",
    top: "34%",
    left: 0,
    height: "100%",
    color: "#F8FBFF",
  },
  triangleImage: {
    resizeMode: "stretch",
    width: "100%",
    height: "20%",
  },
  welcome: {
    width: "100%",
    marginTop: "-10%",
    fontWeight: "600",
  },
  textDescription: {
    width: "100%",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "300",
    opacity: 0.5,
  },
});

export default Login;
