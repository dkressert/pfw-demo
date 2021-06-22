import React from 'react';

import {View, StyleSheet} from "react-native";

import Colors from "../constants/Colors";
import BodyText from "./CustomText/BodyText";

const NumberContainer = (props) => {
    return (
        <View style={styles.container}>
            <BodyText style={styles.number}>{props.children}</BodyText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.secondary,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        color: Colors.secondary,
        fontSize: 20
    }
});

export default NumberContainer;
