import React, { useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 20;
const COLOR_DECREMENT = 20;


const SquareScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    console.log(red)
    console.log(blue)
    console.log(green)

    const setColor = (color, change) => {
      switch (color) {
        case 'red':
          (red + change > 255 || red + change < 0) ? null : setRed(red + change);
          break;
        case 'blue':
          (blue + change > 255 || blue + change < 0) ? null : setBlue(blue + change);
          break;
        case 'green':
          (green + change > 255 || green + change < 0) ? null : setGreen(green + change);
          break;
      }
    };
    
    
    
    return (
        <View>
            <ColorCounter
              onIncrease={() => setColor('red', COLOR_INCREMENT)}
              onDecrease={() => setColor('red', -1 * COLOR_DECREMENT)}
              color="Red"/>
            <ColorCounter
              onIncrease={() => setColor('blue', COLOR_INCREMENT)}
              onDecrease={() => setColor('blue', -1 * COLOR_DECREMENT)}
              color="Blue"/>
            <ColorCounter
              onIncrease={() => setColor('green', COLOR_INCREMENT)}
              onDecrease={() => setColor('green', -1 * COLOR_DECREMENT)}
              color="Green"/>

            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;

