import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function GoalInput({onAdd}) {
  const [inputText, setInputText] = useState("");
  function goalInputHandler(text) {
    setInputText(text);
  }

  function addGoalHandler(){
    onAdd(inputText)
    setInputText("");
  }
  return (
    <View style={styles.inputContianer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Course goals"
        onChangeText={goalInputHandler}
        value={inputText}
      />
      <Button title="Add Goals" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContianer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccccc",
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 2,
    borderColor: "#cccccc",
    width: "70%",
    marginTop: 8,
  },
});
