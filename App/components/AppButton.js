import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#13497B",
    marginHorizontal: "10%",
    marginTop: "5%",
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    height: 55,
  },
  text: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
