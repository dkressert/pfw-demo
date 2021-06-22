import React from "react";
import {Text, View, Button, StyleSheet} from "react-native";
import {StatusBar} from "expo-status-bar";

import Colors from "../constants/Colors";
import HeaderText from "./CustomText/HeaderText";

const Header = (props) => {
    const title = props.title
    return (
        <View>
            <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
            <View style={styles.header}>
                <HeaderText style={styles.headerText}>{title}</HeaderText>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        paddingTop: 20,
        backgroundColor: Colors.primary,
        justifyContent: "center",
        alignItems: "center"

    },
    headerText: {
        fontSize: 20
    }
});

export default Header;