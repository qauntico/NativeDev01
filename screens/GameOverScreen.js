import { Text, Image, View } from "react-native";
import Title from "../components/ui/Title";

export default function GameOverScreen() {
  return (
    <View>
      <Title>GAME OVER!</Title>
      <View>
        <Image source={require("../assets/images/success.png")} />
      </View>
    </View>
  );
}

