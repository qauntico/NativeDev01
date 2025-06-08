import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Hello sir..</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  listGoals: {
    flex: 4,
  },
});
