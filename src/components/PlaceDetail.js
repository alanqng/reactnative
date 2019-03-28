import React from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";

const PlaceDetail = props => {
  let modalContent = null;
  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.selectedPlace.place}</Text>
      </View>
    );
  }
  return (
    <Modal visible={props.selectedPlace !== null} animationType="slide">
      <View style={styles.modalContainer}>
        {modalContent}
        <View style={styles.buttonsContainer}>
          <Button title="Delete" color="red" onPress={props.onItemDeleted} />
          <Button title="Close" onPress={props.onModalClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22,
  },
  placeImage: {
    width: "100%",
    height: 320,
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 26
  },
  buttonsContainer: {
    height: 75,
    justifyContent: "space-between"
  }
});

export default PlaceDetail;
