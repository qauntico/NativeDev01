import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "./contants/styles";
import { Ionicons } from "@expo/vector-icons";
import ExpensesContextProvider from "./store/expenses-context";
import AllPlace from "./screens/AllPlace";
import AddPlace from "./screens/AddPlace";
import IconButton from "./UI/IconButton";


const Stack = createNativeStackNavigator();
const ButtomTabs = createBottomTabNavigator();


export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer >
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTintColor: Colors.gray700,
          contentStyle: { backgroundColor: Colors.gray700},
        }}>
          <Stack.Screen name="AllPlaces" component={AllPlace} options={({navigation}) => ({
            title: 'Your Favorite Places',
            headerRight: ({ tintColor }) => (
              <IconButton icon="add" size={24} color={tintColor} onPress={() => navigation.navigate('AddPlace')} />
            ),
          })}/>
          <Stack.Screen name="AddPlace" component={AddPlace} options={{
            title: 'Add a New Place',
          }} />
        </Stack.Navigator>
      </NavigationContainer>
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
