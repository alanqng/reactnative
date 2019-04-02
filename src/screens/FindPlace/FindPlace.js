import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import ListItem from "../../components/ListItem";
import { Navigation } from "react-native-navigation";

const FindPlace = props => {
  const onItemSel = key => {
    Navigation.push(props.componentId, {
      component: {
        name: "awesome-navigation-PlaceDetailScreen",
        passProps: {
          selectedPlace: props.places.find(place => (place.key === key))
        },
        options: {
            topBar: {
                title: {
                    text: props.places.find(place => (place.key === key)).name,
            }
        }
        }
      }
    });
  };

  return (
    <View>
      <ListItem places={props.places} onItemSelected={onItemSel} />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

export default connect(mapStateToProps)(FindPlace);
