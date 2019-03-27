import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ListItem from "./src/components/ListItem";
import ListInput from "./src/components/ListInput";
import PlaceDetail from "./src/components/PlaceDetail";
import placeImage from "./src/assets/download1.jpg";

export default class App extends Component {
  state = {
    placeName: "",
    places: [],
    selectedPlace: null
  };

  placeNameChangeHandler = event => {
    this.setState({ placeName: event });
  };

  onSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random().toString(),
          place: prevState.placeName,
          image: placeImage
        })
      };
    });
  };

  onItemSelected = i => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find((place, index) => {
          return i === index;
        })
      };
    });
  
  };

  placeDetailItemDeleted = () => {
        this.setState(prevState => {
        return {
          places: prevState.places.filter((el, index) => {
            return el.key !== prevState.selectedPlace.key;
          }),
          selectedPlace: null
        };
      });
  }

  placeDetailCloseModal = () => {
    this.setState({
      selectedPlace: null
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.state.selectedPlace} onItemDeleted={this.placeDetailItemDeleted} onModalClose={this.placeDetailCloseModal} />
        <ListInput
          placeName={this.state.placeName}
          onNameChange={this.placeNameChangeHandler}
          onSubmit={this.onSubmitHandler}
        />
        <View style={styles.listContainer}>
          <ListItem
            places={this.state.places}
            onItemSelected={this.onItemSelected}
          />
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
