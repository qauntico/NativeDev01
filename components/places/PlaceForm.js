import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../contants/styles";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";



export default function PlaceForm(){
    const [enteredTitle, setEnteredTitle] = useState('');

    function changeTitleHandler(enteredText) {
        setEnteredTitle(enteredText);
    }   
    return (
        <ScrollView style={styles.form}>
            <View>
                <Text style={styles.Label}>title</Text>
                <TextInput onChangeText={changeTitleHandler} value={enteredTitle} style={styles.input}/>
            </View>
            <ImagePicker />
            <LocationPicker />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 24,
    },
    Label: {
        fontWeight: 'bold',
        color: Colors.primary500,
        marginBottom: 4,
    },
    input: {
        marginVertical: 8,
        paddingHorizontal: 4,
        paddingVertical: 8,
        borderBottomColor: Colors.primary700,
        borderBottomWidth: 2,
        backgroundColor: Colors.primary100,
        fontSize: 16,
    }

})