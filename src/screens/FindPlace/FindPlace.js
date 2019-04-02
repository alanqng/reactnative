import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'
import ListItem from '../../components/ListItem'

const FindPlace = (props) => {
    return (
        <View>
            <ListItem places={props.places} />
        </View>
      )
}

const mapStateToProps = state => {
    return {
        places: state.places.places
    }
}

export default connect(mapStateToProps)(FindPlace)
