import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Card from "./Card";

function AppSection({ cardDetails }) {
  return (
    <View style={styles.container}>
      {cardDetails.map((card) => (
        <Card
          key={card.index}
          title={card.title}
          image={card.image}
          date={card.date}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
  },
});

export default AppSection;
