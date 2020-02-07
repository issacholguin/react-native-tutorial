// Part 1: import libaries
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// Part 2: create component, function that returns JSX
const ListScreen = () => {
    const friends = [
        // Adding Keys: could add to each specific object:
        // Req: Must be a string, and must be unique
        // { name: 'Friend #1', key: '1'},
        // { name: 'Friend #2', key: '2'},
        // In my opinion, not the best way...
        { name: 'Friend #1', age: 20},
        { name: 'Friend #2', age: 45},
        { name: 'Friend #3', age: 32},
        { name: 'Friend #4', age: 27},
        { name: 'Friend #5', age: 53},
        { name: 'Friend #6', age: 30}
    ]
    return (
        <FlatList
          // Prop: 'horizontal' --> telling our list we want to scroll horizontally instead of vertically
          // we could simply put 'horizontal', or 'horizontal={true}'
          horizontal={false}

          // Prop: 'showsHorizontalScrollIndicator' --> shows the horizontal scroll bar or not
          // Ex: showsHorizontalScrollIndicator={true}
          // Ex: showsHorizontalScrollIndicator={false}
          showsHorizontalScrollIndicator={true}

          // Another way to add a key: keyExtractor on the FlatList element itself
          // This way is defining our keyProperty at runtime vs ahead of time
          // Favoring keyExtractor
          keyExtractor={(friend) => friend.name}
          data={friends}
          renderItem={({item}) => {
            // if (element) were our parameter, we would get this data back:
            // element === {item: {name: 'Friend #1'}, index: 0}
            // but we could use ES2015 desctructuring, and just put ({item}), where we extract just the item we want
            // ({item}) === {name: 'Friend #1'}
          return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
            }}
        />
    );
}

// Part 3: create styles
const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 10
    }
});

// Part 4: export component
export default ListScreen;
