import { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../contants/styles";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../../UI/Button";

export default function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [pickedLocation, setPickedLocation] = useState();
  const [pickedImage, setPickedImage] = useState();

  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }

  function takeImageHandler(imageUri) {
    // Here you would typically handle the image URI, e.g., save it to state or send it to a server.
    console.log("Image taken with URI:", imageUri);
    setPickedImage(imageUri);
  }

  const locationPickedHandler = useCallback((location) => {
    // Here you would typically handle the location, e.g., save it to state or send it to a server.
    console.log("Location picked:", location);
    setPickedLocation(location);
  }, []);

  function savePlaceHandler() {
    // Here you would typically save the place to a database or state management system
    // and reset the form fields if necessary.
    console.log("Place saved with title:", enteredTitle);
    console.log("Picked location:", pickedLocation);
    console.log("Picked image:", pickedImage);
  }
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.Label}>title</Text>
        <TextInput
          onChangeText={changeTitleHandler}
          value={enteredTitle}
          style={styles.input}
        />
      </View>
      <ImagePicker onImageTaken={takeImageHandler} />
      <LocationPicker onLocationPicked={locationPickedHandler} />
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  Label: {
    fontWeight: "bold",
    color: Colors.primary500,
    marginBottom: 4,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
    fontSize: 16,
  },
});
