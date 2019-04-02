import React from "react";
import {
  Modal,
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import { deletePlace } from '../../store/actions/index'
import { Navigation } from "react-native-navigation";

const PlaceDetail = props => {
  // let modalContent = null;
  // if (props.selectedPlace) {
  //   modalContent = (
  // <View>
  //   <Image source={props.selectedPlace.image} style={styles.placeImage} />
  //   <Text style={styles.placeName}>{props.selectedPlace.place}</Text>
  // </View>
  //   );
  // }
  

  navigationButtonEventListener.remove()
  const placeDeleteHandler = () => {
    props.onDeletePlace(props.selectedPlace.key)
    Navigation.pop(props.componentId)

  }
  return (
    // <Modal visible={props.selectedPlace !== null} animationType="slide">
    <View style={styles.modalContainer}>
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.selectedPlace.place}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity>
          <Icon
            size={50}
            name="trash"
            color="red"
            onPress={placeDeleteHandler}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Icon
            size={50}
            name="times"
            color="blue"
            onPress={props.onModalClose}
          />
        </TouchableOpacity> */}

        {/* <Button title="Delete" color="red" onPress={props.onItemDeleted} /> */}
        {/* <Button title="Close" onPress={props.onModalClose} /> */}
      </View>
    </View>
    // </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 320
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 26
  },
  buttonsContainer: {
    height: 75,
    justifyContent: "center",
    width: "100%",
    // alignItems: "space-between",
    flexDirection: "row"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: (key) => dispatch(deletePlace(key))
  }
}

export default connect(null, mapDispatchToProps)(PlaceDetail);
