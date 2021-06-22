import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from "react-native";
import Colors from "../constants/Colors";



const MainButton = (props) => {
    const callBack = props.onPress;

    return (
        <TouchableOpacity onPress={callBack}>
            <View style={[styles.button, props.style]}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
}



const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 25,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18
    }
});

export default MainButton;