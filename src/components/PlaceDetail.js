import React from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";

const PlaceDetail = props => {
  let modalContent = null;
  if (props.selectedPlace !== null) {
    modalContent = (
      <View>
        <Image soruce={props.selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.selectedPlace.place}</Text>
      </View>
    );
  }
  return (
    <Modal visible={props.selectedPlace !== null} animationType="slide">
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button title="Delete" color="red" onPress={props.onItemDeleted}/>
          <Button title="Close" onPress={props.onModalClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22,
    backgroundColor: "#eee"
  },
  placeImage: {
    width: "100%",
    height: 320,
    borderColor: "black",
    borderWidth: 5,
    // backgroundColor: "black"
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 26
  }
});

export default PlaceDetail;
