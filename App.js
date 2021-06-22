import {StatusBar} from 'expo-status-bar';
import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Header from "./components/Header";
import StartGameScreen from "./Screens/StartGameScreen";
import GameScreen from "./Screens/GameScreen";
import GameOverScreen from "./Screens/GameOverScreen";

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    })
}


export default function App() {

    const [generatedNumber, setGeneratedNumber] = useState();
    const [isSolved, setIsSolved] = useState(false);
    const [guessRounds, setGuessRounds] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(false);

    if (!dataLoaded) {
        return <AppLoading startAsync={fetchFonts}
                           onFinish={() => setDataLoaded(true)}
                           onError={err => console.log(err)}
        />;
    }

    const startGameHandler = (generatedNumber) => {
        setIsSolved(false);
        setGeneratedNumber(generatedNumber);
        console.log(generatedNumber);
    }

    const gameOverHandler = (guessRounds) => {
        setGuessRounds(guessRounds)
        setIsSolved(true);
    }

    let content = <StartGameScreen onStartGame={startGameHandler}/>
    if (isSolved) {
        content = <GameOverScreen onNewGame={startGameHandler} roundsNumber={guessRounds} generatedNumber={generatedNumber}/>
    } else if (generatedNumber) {
        content = <GameScreen generatedNumber={generatedNumber} onGameOver={gameOverHandler}/>
    }


    return (
        <View style={styles.screen}>
            <Header title="Guess the Number"/>
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
});
