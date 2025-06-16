import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View, Platform } from "react-native";

export default function CategoryGridTile({ title, color, onPress }) {
   const navigation = useNavigation();
  return (
    <View style={[style.gridItem, { backgroundColor: color }]}>
      <Pressable
        style={({ pressed }) => [
          style.button,
          pressed ? style.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={style.innerContainer}>
          <Text style={style.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    backgroundColor: "white", //for shadow to take effect you have to add the background color
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
  },
});
