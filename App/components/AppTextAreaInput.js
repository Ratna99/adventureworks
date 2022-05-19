import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

function AppTextAreaInput({ name, value, setValue }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{name}</Text>
      <TextInput
        multiline={true}
        value={value}
        onChangeText={(text) => {
          setValue(text);
        }}
        placeholder={name}
        style={styles.field}
      />
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
    height: 200,
    paddingLeft: 50,
  },
});

export default AppTextAreaInput;
