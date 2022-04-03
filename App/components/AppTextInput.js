import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

function AppTextInput({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{name}</Text>
      <TextInput placeholder={name} style={styles.field} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "10%",
    marginTop: "5%",
  },
  label: {
    fontSize: 18,
    color: "#13497B",
    marginBottom: 5,
  },
  field: {
    fontSize: 20,
    backgroundColor: "white",
    borderRadius: 11,
    height: 50,
    paddingLeft: 50,
  },
});

export default AppTextInput;
