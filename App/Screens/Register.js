import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { auth, createUserWithEmailAndPassword, db } from "../../firebase";
import { doc, setDoc } from "@firebase/firestore";

import AppButton from "../components/AppButton";
import AppLoginBottom from "../components/AppLoginBottom";
import AppTextInput from "../components/AppTextInput";
import AppTextTitle from "../components/AppTextTitle";
import AppTopPart from "../components/AppTopPart";
import { useNavigation } from "@react-navigation/core";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        setDoc(doc(db, "users", user.email), {
          uid: user.uid,
          email: user.email,
          role: "user",
        });
      })
      .catch((err) => alert(err.message));
  };

  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <AppTopPart />
      <AppLoginBottom />
      <AppTextTitle style={styles.welcome}>Welcome</AppTextTitle>
      <Text style={styles.textDescription}>
        Sign up for bush adventure therapy
      </Text>
      <AppTextInput value={email} setValue={setEmail} name="Email" />
      <AppTextInput value={password} setValue={setPassword} name="Password" />
      <AppTextInput
        value={confirm}
        setValue={setConfirm}
        name="Confirm Password"
      />
      <AppButton onPress={handleSignUp} title="Create Account" />
      <View style={styles.links}>
        <TouchableOpacity onPress={navigateToLogin}>
          <Text style={{ color: "#13497B" }}>Sign In Instead?</Text>
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

export default Register;
