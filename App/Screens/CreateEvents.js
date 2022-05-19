import { React, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppTextAreaInput from "../components/AppTextAreaInput";
import AppButton from "../components/AppButton";

import { doc, setDoc } from "@firebase/firestore";
import { db } from "../../firebase";

function CreateEvents() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [location, setLocation] = useState("");

  const onSubmit = () => {
    setDoc(doc(db, "events", title), {
      title: title,
      date: date,
      image: image,
      desc: desc,
      location: location,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppTextInput setValue={setTitle} value={title} name="Event Title" />
      <AppTextInput setValue={setDate} value={date} name="Event Date" />
      <AppTextInput setValue={setImage} value={image} name="Image Url" />
      <AppTextInput setValue={setLocation} value={location} name="Location" />
      <AppTextAreaInput
        setValue={setDesc}
        value={desc}
        name="Event Description"
      />
      <AppButton title="submit" onPress={onSubmit} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#D8E3F3",
  },
});

export default CreateEvents;
