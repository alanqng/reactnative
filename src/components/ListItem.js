import React from "react";
import {
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";

const ListItem = props => {
  return (
    <FlatList
      data={props.places}
      renderItem={info => (
        <TouchableOpacity
          style={styles.listView}
          onPress={() => props.onItemSelected(info.item.key)}
        >
          <Image style={styles.listImg} source={info.item.image} />
          <Text style={styles.listText}>{info.item.place}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listView: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    backgroundColor: "#eee"
  },
  listText: {
    width: "80%",
    padding: 5,
    marginBottom: 3
  },
  listImg: {
    width: 30,
    height: 30,
    margin: 5,
    marginRight: 8
  }
});

export default ListItem;
