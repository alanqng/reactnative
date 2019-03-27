import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ListItem = props => {
  return (
    <View>
      {props.places.map((place, index) => (
        <Text
          style={styles.listItem}
          key={index}
          onPress={() => props.onPressHandler(index)}
        >
          {place}
        </Text>
      ))}
    </View>
  );
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
