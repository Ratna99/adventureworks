import React from "react";
import { StyleSheet, Text } from "react-native";

function AppSectionTitle({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginLeft: 15,
    fontWeight: "600",
    marginBottom: 40,
  },
});

export default AppSectionTitle;
