import { StyleSheet, Text } from "react-native";

export default function GoalItem(props) {
  return <Text style={styles.goalItem}>{props.text}</Text>;
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#5e0acc",
    color: "white",
  },
});
