import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ListItem from "./src/components/ListItem";
import ListInput from "./src/components/ListInput";
import PlaceDetail from "./src/components/PlaceDetail";
import placeImage from "./src/assets/download1.jpg";
import { connect } from 'react-redux'
import { addPlace, deletePlace, selectPlace, deselectPlace, setName} from './src/store/actions/index'
class App extends Component {
  // state = {
  //   placeName: "",
  //   places: [],
  //   selectedPlace: null
  // };

 

  onSubmitHandler = (placeName) => {
    // if (this.state.placeName.trim() === "") {
    //   return;
    // }
    this.props.onAddPlace(placeName)
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.concat({
    //       key: Math.random().toString(),
    //       place: prevState.placeName,
    //       image: placeImage
    //     })
    //   };
    // });
  };

  onItemSelected = i => {
    // this.setState(prevState => {
    //   return {
    //     selectedPlace: prevState.places.find((place, index) => {
    //       return i === index;
    //     })
    //   };
    // });
    this.props.onSelectPlace(i)
  };

  placeDetailItemDeleted = () => {
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.filter((el, index) => {
    //       return el.key !== prevState.selectedPlace.key;
    //     }),
    //     selectedPlace: null
    //   };
    // });
    this.props.onDeletePlace()
  };

  placeDetailCloseModal = () => {
    // this.setState({
    //   selectedPlace: null
    // });
    this.props.onUnSelectPlace()
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDetailItemDeleted}
          onModalClose={this.placeDetailCloseModal}
        />
        <ListInput
          // placeName={this.state.placeName}
          onNameChange={this.placeNameChangeHandler}
          onSubmit={this.onSubmitHandler}
        />
        <View style={styles.listContainer}>
          <ListItem
            places={this.props.places}
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

const mapStateToProps = state => {
  return {
    placeName: state.places.placeName,
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (index) => dispatch(selectPlace(index)),
    onUnSelectPlace: () => dispatch(deselectPlace()),
    onSetName: (name) => dispatch(setName(name))
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (App);
