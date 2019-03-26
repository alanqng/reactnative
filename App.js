import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button
} from "react-native";
import ListItem from "./src/components/ListItem"

export default class App extends Component {
  state = {
    placeName: "",
    places: []
  };

  placeNameChangeHandler = event => {
    this.setState({ placeName: event });
  };

  onSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={this.state.placeName}
            placeholder="An Awesome Place"
            onChangeText={this.placeNameChangeHandler}
          />
          <Button
            onPress={this.onSubmitHandler}
            style={styles.add}
            title="Add"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={styles.listContainer}>
          <ListItem places={this.state.places}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  inputContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  textInput: {
    width: "70%",
    borderColor: "black",
    borderWidth: 0.5
  },
  add: {
    width: "30%"
  },
  listContainer: {
    width: "100%",
    paddingTop: 5,
  }
});
