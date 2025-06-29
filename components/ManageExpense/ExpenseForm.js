import { View } from "react-native";
import Input from "./Input";

export default function ExpenseForm() {
  return (
    <View>
      <Input label="Amount" textInputConfig={{keyboardType: 'decimal-pad'}}/>
      <Input label="Date" textInputConfig={{placeHolder: 'YYYY-NN-DD'}}/>
      <Input label="Description" />
    </View>
  );
}
