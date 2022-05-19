import React from "react";
import { StyleSheet, View, ScrollView, StatusBar } from "react-native";

import Card from "./Card";

function AppSection({ cardDetails }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        {cardDetails.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            image={card.image}
            date={card.date}
            desc={card.desc}
            location={card.location}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scroll: {
    width: "100%",
    height: "100%",
  },
});

export default AppSection;
