import React from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";

const ListInput = props => {
 
  return (
    <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={props.placeName}
            placeholder="An Awesome Place"
            onChangeText={(event) => props.onNameChange(event)}
          />
          <Button
            onPress={() => props.onSubmit()}
            style={styles.add}
            title="Add"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
    </View>
  );
};

const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      },
      textInput: {
        width: "75%",
        borderColor: "#841584",
        borderBottomWidth: 0.5
      },
      add: {
        width: "25%",
      },
  });

export default ListInput;
