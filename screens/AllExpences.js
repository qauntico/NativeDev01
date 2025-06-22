import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { useContext } from "react";

export default function AllExpense() {
  const expensesCtx = useContext(ExpensesContext);
  return <ExpensesOutput expenses={expensesCtx.expenses} periodName="Total" />;
}
