import React, {useState} from "react";
import {Text, View, Button, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard} from "react-native";

import BodyText from "../components/CustomText/BodyText";
import MainButton from "../components/MainButton";
import HeaderText from "../components/CustomText/HeaderText";
import Card from "../components/Card";
import Input from "../components/Input/Input";
import Colors from "../constants/Colors";
import NumberContainer from "../components/NumberContainer";


const StartGameScreen = (props) => {
    const startGameHandler = props.onStartGame;

    const startGame = () => {
        const generatedNumber = Math.floor(Math.random() * (100 - 1)) + 1;
        startGameHandler(generatedNumber);
    }

    return (
        <View style={styles.screen}>
            <Card style={styles.container}>
                <View style={styles.containerText}>
                    <BodyText>The Computer will choose a number. You will have to guess it</BodyText>
                </View>
                <MainButton style={styles.button} onPress={startGame}>
                    Start Game
                </MainButton>
            </Card>
        </View>
    );
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40,
        alignItems: 'center'
    },
    container: {
        alignItems: 'center',

    },
    containerText: {
        padding: 30
    },
});

export default StartGameScreen;