// Part 1: Import Libraries

// React Libary is all about how different components work together
// React Library helps us assemble different compoentns together
import React, { Component } from 'react';
// React Native Library knows how to take that information from the components and show it on the mobile device
// Curly braces: just want to import the Text, and StyleSheet from the library, not the whole thing like React
import { Text, StyleSheet, View } from 'react-native';

// Part 2: Create a component, a function that returns JSX
const ComponentsScreen = () => {
    const greeting = [123,234];

    const greetingJsx = <Text>Hello to you!</Text>;

    const obj = { color: 'red'}; // CANNOT show javascript object inside JSX

    const name = 'Issac'

    // Inside the function, so we will return JSX
    return (
        <View>
            <Text style={styles.headerStyle}>Getting started with react native!</Text>
            <Text style={styles.subHeaderStyle}>My name is {name}</Text>
        </View>
    );
};

// Part 3: Create a stylesheet to style our component
const styles = StyleSheet.create({
    // Inside the create, we will define a bunch of different groups of styles

    // We will assign style rules for 'textStyle'
    textStyle: {
        fontSize: 30
    },
    // In order to apply it to anything in our JSX, we must manaully assign it as a style (see ComponentsScreen above)

    headerStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

// Part 4: Export the component so we can use it elsewhere in our project
export default ComponentsScreen;