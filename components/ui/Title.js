import { Platform, StyleSheet, Text } from "react-native";



export default function Title({children}){
    return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    // fontWeight: 'bold',
    color: 'white',
    textAlign: "center",
    borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderColor: 'white',
    padding: 12,
    fontFamily: 'open-sans-bold',
    maxWidth: '80%',
    width: 300,
  }
});
