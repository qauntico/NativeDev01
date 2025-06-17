import { Text, View } from "react-native";
import MealList from "../components/MealList/MealList";
import { useContext } from "react";
import { FavoriteContext } from "../store/context/favorite-context";
import { MEALS } from "../data/dummy-data";

export default function FavoriteScreens() {
  const favoriteMealsCtx = useContext(FavoriteContext);

  const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id));

  return <MealList items={favoriteMeals}/>;
}
