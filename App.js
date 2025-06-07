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
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [items, setItems] = useState([]);

  function addGoals(goal) {
    if (goal.trim() !== "") {
      setItems((goals) => [...goals, goal]);
    }
  }

  return (
    <View style={styles.container}>
      <GoalInput onAdd={addGoals}/>
      <View style={styles.listGoals}>
        <FlatList
          data={items}
          renderItem={(itemData) => {
            return (
              <GoalItem text={itemData.item}/>
            );
          }}
        />
      </View>
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
