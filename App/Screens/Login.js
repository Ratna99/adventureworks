import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import AppButton from "../components/AppButton";
import AppLoginBottom from "../components/AppLoginBottom";
import AppTextInput from "../components/AppTextInput";
import AppTextTitle from "../components/AppTextTitle";
import AppTopPart from "../components/AppTopPart";

function Login(props) {
  return (
    <View style={styles.container}>
      <AppTopPart />
      <AppLoginBottom />
      <AppTextTitle style={styles.welcome}>Welcome</AppTextTitle>
      <Text style={styles.textDescription}>
        Login for bush adventure therapy
      </Text>
      <AppTextInput name="Email" />
      <AppTextInput name="Password" />
      <AppButton title="Login" />
      <View style={styles.links}>
        <TouchableOpacity>
          <Text style={{ color: "#13497B" }}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ color: "#13497B" }}>Create New Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#D8E3F3",
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
  links: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});

export default Login;
