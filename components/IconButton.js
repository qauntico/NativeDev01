import { Pressable, View } from "react-native";
import {Ionicons} from '@expo/vector-icons';

export default function IconButton({name, color, onPress}) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={name} size={24} color={color} />
    </Pressable>
  );
}
