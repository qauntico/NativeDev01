import { useRoute } from "@react-navigation/native";
import { Button, Image, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

export default function MealDetail({ navigation }) {
  const route = useRoute();
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {
    console.log("yes");
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={headerButtonPressHandler}
            name="heart"
            color="white"
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);
  return (
    <View>
      <Image />
      <Text>{mealId}</Text>
      <View></View>
    </View>
  );
}
