import React, { useReducer } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 20;
const COLOR_DECREMENT = 20;
const MAX_COLOR_INTEGER = 255;
const MIN_COLOR_INTEGER = 0;

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { type: 'red' || 'green' || 'blue', payload: 15 || -15 }

  switch (action.type) {
    case 'change_red':
      return state.red + action.payload > MAX_COLOR_INTEGER || state.red + action.payload < MIN_COLOR_INTEGER ? {...state} : { ...state, red: state.red + action.payload };
    case 'change_blue':
      return state.blue + action.payload > MAX_COLOR_INTEGER || state.blue + action.payload < MIN_COLOR_INTEGER ? {...state} : { ...state, blue: state.blue + action.payload };
    case 'change_green':
      return state.green + action.payload > MAX_COLOR_INTEGER || state.green + action.payload < MIN_COLOR_INTEGER ? {...state} : { ...state, green: state.green + action.payload };
    default:
      return { ...state}
  }

}; 

const SquareScreen = () => {


    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const { red, green, blue } = state;

    console.log(state)

    return (
        <View>
            <ColorCounter
              onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
              onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_DECREMENT })}
              color="Red"/>
            <ColorCounter
              onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
              onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_DECREMENT })}
              color="Blue"/>
            <ColorCounter
              onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
              onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_DECREMENT })}
              color="Green"/>

            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;
