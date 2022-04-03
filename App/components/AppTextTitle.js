import React from "react";
import { Text, StyleSheet } from "react-native";

function AppTextTitle({ children, style, ...otherProps }) {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    width: 200,
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    color: "#13497B",
  },
});

export default AppTextTitle;
