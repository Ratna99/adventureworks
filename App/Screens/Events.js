import React, { useState, useEffect } from "react";
import AppTopPart from "../components/AppTopPart";
import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import AppSection from "../components/AppSection";

import { getDocs, collection } from "@firebase/firestore";
import { db } from "../../firebase";

function Events() {
  const [cardDetails, setCardDetails] = useState([]);
  let details = [];

  useEffect(() => {
    const unsubscribe = getDocs(collection(db, "events")).then((snapshot) => {
      snapshot.forEach((doc) => {
        // setCardDetails(...cardDetails, doc.data());
        // console.log(cardDetails);
        details.push(doc.data());
      });
      setCardDetails(details);
      console.log(cardDetails, "From useeffect");
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <AppTopPart title="Events" height="40%" />
      <View style={styles.bottomContainer}>
        {cardDetails ? (
          <AppSection style={styles.card} cardDetails={cardDetails} />
        ) : (
          <Text>No Events Found</Text>
        )}
      </View>
    </View>
  );
}

// const cardDetails = [
//   {
//     index: 0,
//     image: require("../assets/bg-login.jpg"),
//     title: "Adventure For All",
//     date: "1st Jan, 2022",
//   },
//   {
//     index: 1,
//     image: require("../assets/bg-login.jpg"),
//     title: "Adventure For All",
//     date: "1st Jan, 2022",
//   },
// ];

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#D8E3F3",
  },
  bottomContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#D8E3F3",
    borderRadius: 30,
    marginTop: -70,
  },
  scroll: {},
});

export default Events;
