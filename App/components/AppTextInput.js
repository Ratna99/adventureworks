import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

function AppTextInput({ name, value, setValue }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{name}</Text>
      <TextInput
        autoCapitalize={false}
        autoCorrect={false}
        value={value}
        onChangeText={(text) => {
          setValue(text);
        }}
        textContentType={
          name == "Password" || name == "Confirm Password" ? "password" : "none"
        }
        secureTextEntry={name == "Password" || name == "Confirm Password"}
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
    height: 40,
    paddingLeft: 50,
  },
});

export default AppTextInput;
