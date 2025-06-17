import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useEffect } from "react";
import MealList from "../components/MealList/MealList";

export default function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId);

    navigation.setOptions({
      title: categoryTitle.title,
    });
  }, [catId, navigation]);

  return <MealList items={displayMeals} />
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
