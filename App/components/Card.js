import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";

function Card({ title, date, image }) {
  return (
    <View style={styles.container}>
      <View style={styles.topPart}>
        <ImageBackground source={image} style={styles.bg} />
      </View>
      <View style={styles.bottomPart}>
        <Text>{title}</Text>
        <Text>{date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "30%",
    width: "90%",
    marginHorizontal: "5%",
    borderRadius: 40,
  },
  topPart: {
    borderRadius: 10,
    overflow: "hidden",
  },
  bg: {
    width: "100%",
    height: "100%",
  },
  bottomPart: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    height: "30%",
    marginTop: "-20%",
  },
});

export default Card;
