import React from "react";
import { Text, StyleSheet, ScrollView, FlatList } from "react-native";

const ListItem = props => {
  return (
    <FlatList
    data={props.places}
    renderItem={(info) =>(
      <Text
          style={styles.listItem}
          onPress={() => props.onPressHandler(info.index)}
        >
          {info.item.place}
        </Text>
    )}
    />
  )
      {/* {props.places.map((place, index) => (
        <Text
          style={styles.listItem}
          key={index}
          onPress={() => props.onPressHandler(index)}
        >
          {place}
        </Text>
      ))} */}
  
  // );
  
};

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 5,
    marginBottom: 3,
    backgroundColor: "#eee"
  }
});

export default ListItem;
