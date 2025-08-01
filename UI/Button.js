import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../contants/styles";


export default function Button({onPress, children}){
    return <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
        <Text style={styles.text}>{children}</Text>
    </Pressable>
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 8,
        margin: 4,
        backgroundColor: Colors.primary800,
        elevation: 2,
        shadowColor: 'black',
        shadowOpacity: 0.15,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        borderRadius: 4
    },
    pressed: {
        opacity: 0.75,
    },
    text: {
        color: Colors.primary50,
        textAlign: 'center',
        fontSize: 16,
    },
});