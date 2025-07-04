import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../contants/styles";

export default function OutlineButton({ children, onPress, icon }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon} style={styles.icon} />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({ 
    button: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 12,
        margin: 4,
        borderWidth: 1,
        borderColor: Colors.primary500,
        borderRadius: 6,
    },
    pressed: {
        opacity: 0.75,
    },
    icon: {
        marginRight: 6,
    },
    text: {
        color: Colors.primary500,
    },
})
