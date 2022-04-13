import React from "react";
import { Image, StyleSheet, View } from "react-native";

function AppLoginBottom(props) {
  return (
    <View style={[styles.triangle]}>
      <Image
        style={styles.triangleImage}
        source={require("../assets/triangle.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
});

export default AppLoginBottom;
