import React, {useEffect, useRef, useState} from "react";
import {Text, View, Button, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, Alert} from "react-native";
import BodyText from "../components/CustomText/BodyText";
import HeaderText from "../components/CustomText/HeaderText";
import MainButton from "../components/MainButton";
import Card from "../components/Card";
import Input from "../components/Input/Input";
import Colors from "../constants/Colors";
import NumberContainer from "../components/NumberContainer";



const GameScreen = (props) => {
    const generatedNumber = props.generatedNumber;
    const gameOverHandler = props.onGameOver;

    let lowestGuess = useRef(0);
    let highestGuess = useRef(100);

    const [enteredValue, setEnteredValue] = useState('');
    const [currentGuess, setCurrentGuess] = useState(0);
    const [pastGuesses, setPastGuesses] = useState([]);
    const [confirmed, setConfirmed] = useState(false);
    const [hint, setHint] = useState('');

    useEffect(() => {
        if (currentGuess === generatedNumber) {
            gameOverHandler(pastGuesses.length);
        }
    }, [currentGuess])

    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredValue('');
    }

    const confirmInputHandler = () => {
        const userGuess = parseInt(enteredValue);

        if(!checkValidityOfUserGuess(userGuess)) {
            return;
        }

        compareInput(userGuess);
        setCurrentGuess(userGuess);
        setPastGuesses(curPastGuesses => [...curPastGuesses, userGuess]);
        setConfirmed(true);
        setEnteredValue('');

    }

    const compareInput = (userGuess) => {
        if (userGuess > generatedNumber) {
            setHint('Too High');
            highestGuess.current = userGuess;

        } else if (userGuess < generatedNumber) {
            setHint('Too Low');
            lowestGuess.current = userGuess;
        }
    }

    const checkValidityOfUserGuess = (userGuess) =>  {
        let isValid = true;

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 99) {
            handleInvalidGuess("Invalid Number", "Please enter a valid Number between 1 and 99");
            isValid = false;
        } else if (pastGuesses.some(guess => guess === userGuess)) {
            handleInvalidGuess("Invalid Number", "You already guessed  " + userGuess);
            isValid = false;
        } else if (userGuess <= lowestGuess.current) {
            handleInvalidGuess("Invalid Number", `Your highest guess was already lower (${lowestGuess.current}).`);
            isValid = false;
        } else if (userGuess >= highestGuess.current) {
            handleInvalidGuess("Invalid Number", `Your lowest guess was already higher (${highestGuess.current}).`);
            isValid = false;
        }
        return isValid;
    }

    const handleInvalidGuess = (title, message) => {

        Alert.alert(title, message);
        setConfirmed(false);
        setEnteredValue('');
    }

    let hintOutput;
    if(confirmed) {
        hintOutput = (
            <Card style={styles.hintContainer}>
                <NumberContainer>{hint}</NumberContainer>
            </Card>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <HeaderText>{generatedNumber}</HeaderText>
                <Card style={styles.inputContainer}>
                    <BodyText>Select a Number</BodyText>
                    <Input style={styles.input}
                           keyboardType="number-pad"
                           maxLength={2}
                           onChangeText={numberInputHandler}
                           value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" onPress={resetInputHandler} color={Colors.secondary}/>
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary}/>
                        </View>
                    </View>
                </Card>
                {hintOutput}
                <View style={styles.guessList}>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingVertical: 40 ,
        alignItems: 'center',
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: '40%'
    },
    input: {
        width: 100,
        textAlign: 'center'
    },
    hintContainer: {
        marginTop: 60,
        alignItems: 'center'
    },
    guessList: {

    }
})


export default GameScreen;