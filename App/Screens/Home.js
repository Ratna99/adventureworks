import { React, useState, useEffect } from "react";
import AppTopPart from "../components/AppTopPart";
import { StyleSheet, Text, View } from "react-native";
import AppSectionTitle from "../components/AppSectionTitle";
import AppSection from "../components/AppSection";
import AppButton from "../components/AppButton";

import { signOut, auth, db } from "../../firebase";
import { getDocs, collection } from "@firebase/firestore";
import { useNavigation } from "@react-navigation/core";

function Home() {
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

  const navigation = useNavigation();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <AppTopPart title="Home" height="40%" />
      <View style={styles.bottomContainer}>
        <AppButton
          onPress={handleSignOut}
          style={styles.btn}
          title="Sign Out"
        />
        <Text style={styles.textTitle}>
          Welcome to Adventure Works Australia
        </Text>
        <AppSectionTitle>Events you have booked</AppSectionTitle>
        <AppSection cardDetails={cardDetails} />
      </View>
    </View>
  );
}

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
  textTitle: {
    alignSelf: "center",
    textAlign: "center",
    margin: 40,
    fontSize: 24,
    width: "60%",
  },
  btn: {
    alignSelf: "center",
    textAlign: "center",
    marginBottom: 40,
    fontSize: 24,
    width: "60%",
  },
});

export default Home;
