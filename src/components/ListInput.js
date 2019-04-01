import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

class ListInput extends React.Component {
  state = {
    placeName: ''
  }
  // const [placeName, setPlaceName] = useState('')
  
  render() {
    return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        value={this.state.placeName}
        placeholder="An Awesome Place"
        onChangeText={event => this.setState({
          placeName: event 
        })
        }
      />
      <Button
        onPress={() => this.props.onSubmit(this.state.placeName)}
        style={styles.add}
        title="Add"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
  } 
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
    width: "70%",
    borderColor: "#841584",
    borderBottomWidth: 0.5
  },
  add: {
    width: "20%",
  }
});

export default ListInput;
