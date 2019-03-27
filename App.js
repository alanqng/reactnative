import React, { Component } from "react";
import { StyleSheet, View} from "react-native";
import ListItem from "./src/components/ListItem";
import ListInput from "./src/components/ListInput";

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
        places: prevState.places.concat({key: Math.random().toString(), place: prevState.placeName})
      }
    })
  }

  onPressListHandler = (i) => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((el, index) => {
            return i !== index;
        })
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ListInput
          placeName={this.state.placeName}
          onNameChange={this.placeNameChangeHandler}
          onSubmit={this.onSubmitHandler}
        />
        <View style={styles.listContainer}>
          <ListItem places={this.state.places} onPressHandler={this.onPressListHandler} />
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
  listContainer: {
    width: "100%",
    paddingTop: 5
  }
});
