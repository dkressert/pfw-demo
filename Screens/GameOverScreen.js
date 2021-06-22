import React from "react";
import {Text, View, Button, StyleSheet, Image} from "react-native";
import MainButton from "../components/MainButton";
import HeaderText from "../components/CustomText/HeaderText";
import BodyText from "../components/CustomText/BodyText";
import Colors from "../constants/Colors";

const GameOverScreen = (props) => {

    const {generatedNumber, roundsNumber, onNewGame} = props;

    const newGame = () => {
        const generatedNumber = Math.floor(Math.random() * (100 - 1)) + 1;
        onNewGame(generatedNumber);
    }

    return (
        <View style={styles.screen}>
            <HeaderText>The Game is over</HeaderText>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/success.png')} style={styles.image} resizeMode="cover"/>
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>
                    You needed{' '}
                    <Text style={styles.highlight}>{roundsNumber} </Text>
                    rounds to guess the number{' '}
                    <Text style={styles.highlight}>{generatedNumber}</Text>
                </BodyText>
            </View>
            <MainButton onPress={newGame}>New Game</MainButton>
        </View>
    );
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    }
})

export default GameOverScreen;