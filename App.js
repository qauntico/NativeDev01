import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GlobalStyles } from "./contants/styles";
import { Ionicons } from "@expo/vector-icons";
import ExpensesContextProvider from "./store/expenses-context";

const Stack = createNativeStackNavigator();
const ButtomTabs = createBottomTabNavigator();


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Text>Expense Tracker</Text>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
