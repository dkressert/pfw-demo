import React from "react";
import {Text, View, Button, StyleSheet} from "react-native";



const HeaderText = (props) => {
    return (
        <Text style={[styles.headerText, props.style]}>{props.children}</Text>
    );
}


const styles = StyleSheet.create({
    headerText: {
        fontFamily: 'open-sans-bold'
    }
});

export default HeaderText;