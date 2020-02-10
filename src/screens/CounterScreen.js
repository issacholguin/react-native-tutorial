import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const COUNTER_STEP = 1

const reducer = (state, action) => {

    // Both cases do the same thing, but the exercise was to convert this to use the reducer instead of useState, and this was too simple to use a reducer.
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + action.payload };
        case 'decrement':
            return { ...state, count: state.count + action.payload };
        default:
            return state;
    }
}

const CounterScreen = () => {
    // We pass in 0 as the starting value, in the useState we will always pass in the starting value as a parameter
    // this is destructuring what comes back from useState()
    // counter is defined, setCounter is defined
    // const [counter, setCounter] = useState(0)

    // Above comments are outdated, we are now using a reducer
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    const {count} = state;

    console.log(count)


    // Every time setCounter is run, React will auto rerun this entire function component

    return (
        <View>
            <Button title="Increase" onPress={() => { dispatch({ type: 'increment', payload: COUNTER_STEP }) } }></Button>
            <Button title="Decrease" onPress={() => { dispatch({ type: 'decrement', payload: -1 * COUNTER_STEP }) } }></Button>

            <Text>Current Count: {count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default CounterScreen;