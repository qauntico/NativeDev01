import { StyleSheet, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../contants/styles";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 12.99,
    date: new Date("2021-11-19"),
  },
  {
    id: "e3",
    description: "A pair of t-shirts",
    amount: 100.99,
    date: new Date("2021-11-1"),
  },
];
export default function ExpensesOutput({ expenses, periodName }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={periodName} expenses={expenses} />
      <ExpensesList expenses={expenses} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 24, 
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1
    }
});
