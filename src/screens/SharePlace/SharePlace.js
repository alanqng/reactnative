import React from 'react';
import { View, Text } from 'react-native';
import ListInput from '../../components/ListInput'
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index'

class SharePlaceScreen extends React.Component {

placeAddedHandler = placename => {
    this.props.onAddPlace(placename)
}
render(){
    return (
        <View style={{margin: 10}}>
            <ListInput onSubmit={this.placeAddedHandler}/>
        </View>
      )
}
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placename) => dispatch(addPlace(placename))
    }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen)
