import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
    // We pass in 0 as the starting value, in the useState we will always pass in the starting value as a parameter
    // this is destructuring what comes back from useState()
    // counter is defined, setCounter is defined
    const [counter, setCounter] = useState(0)

    // Every time setCounter is run, React will auto rerun this entire function component

    return (
        <View>
            <Button title="Increase" onPress={() => {setCounter(counter + 1)}}></Button>
            <Button title="Decrease" onPress={() => {setCounter(counter - 1)}}></Button>

            <Text>Current Count: {counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default CounterScreen;