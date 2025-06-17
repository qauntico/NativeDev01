import { useRoute } from "@react-navigation/native";
import { Button, Image, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoriteContext } from "../store/context/favorite-context";

export default function MealDetail({ navigation }) {
  const route = useRoute();
  const mealId = route.params.mealId;
  const favoriteMealsCtx = useContext(FavoriteContext);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealsFavorite = favoriteMealsCtx.ids.includes(mealId)

  function headerButtonPressHandler() {
    if(mealsFavorite){
        favoriteMealsCtx.removeFavorite(mealId);
    }else{
        favoriteMealsCtx.addFavorite(mealId)
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={headerButtonPressHandler}
            name={mealsFavorite ? "heart" : "heart-outline"}
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
