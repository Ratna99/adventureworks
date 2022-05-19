import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/core";

function Card({ title, date, image, desc, location }) {
  const navigation = useNavigation();

  const navigateToDetails = () => {
    navigation.navigate("EventDetails", { title, date, image, desc, location });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToDetails}>
        <View style={styles.topPart}>
          <ImageBackground
            source={
              image
                ? { uri: image.toString() }
                : require("../assets/bg-login.jpg")
            }
            style={styles.bg}
          />
        </View>
        <View style={styles.bottomPart}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 250,
    width: "90%",
    marginHorizontal: "5%",
    borderRadius: 40,
    marginTop: 30,
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
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
  date: {
    fontStyle: "italic",
  },
});

export default Card;
