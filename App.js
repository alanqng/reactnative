import { Navigation } from "react-native-navigation";
import AuthScreen from "./src/screens/Auth/AuthScreen";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlace from "./src/screens/FindPlace/FindPlace";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";
import React from 'react'
import PlaceDetail from "./src/screens/PlaceDetail/PlaceDetail";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";

const store = configureStore();

Navigation.registerComponent(
  "awesome-navigation-Authscreen",
  () => (props) => (
    <Provider store={store}>
      <AuthScreen {...props}/>
    </Provider>
  ), () => AuthScreen
);
Navigation.registerComponent(
  "awesome-navigation-FindPlaceScreen",
  () => (props) => (
    <Provider store={store}>
      <FindPlace {...props}/>
    </Provider>
  ), () => FindPlace
);
Navigation.registerComponent(
  "awesome-navigation-SharePlaceScreen",
  () => (props) => (
    <Provider store={store}>
      <SharePlaceScreen {...props}/>
    </Provider>
  ), () => SharePlaceScreen
);
Navigation.registerComponent(
  "awesome-navigation-PlaceDetailScreen",
  () => (props) => (
    <Provider store={store}>
      <PlaceDetail {...props}/>
    </Provider>
  ),
  () => PlaceDetail
)
Navigation.registerComponent(
  'awesome-navigation-SideDrawer',
  () => SideDrawer
)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "awesome-navigation-Authscreen",
              passProps: {
                text: "stack with one child"
              }
            }
          }
        ],
        options: {
          topBar: {
            title: {
              text: "Login"
            }
          }
        }
      }
    }
  });
});

// import React, { Component } from "react";
// import { StyleSheet, View } from "react-native";
// import ListItem from "./src/components/ListItem";
// import ListInput from "./src/components/ListInput";
// import PlaceDetail from "./src/components/PlaceDetail";
// import placeImage from "./src/assets/download1.jpg";
// import { connect } from 'react-redux'
// import { addPlace, deletePlace, selectPlace, deselectPlace, setName} from './src/store/actions/index'
// class App extends Component {
//   onSubmitHandler = (placeName) => {
//     // if (this.state.placeName.trim() === "") {
//     //   return;
//     // }
//     this.props.onAddPlace(placeName)
//     setTimeout(() => {
//       console.log(this.props.places)
//     }, 500)

//     // this.setState(prevState => {
//     //   return {
//     //     places: prevState.places.concat({
//     //       key: Math.random().toString(),
//     //       place: prevState.placeName,
//     //       image: placeImage
//     //     })
//     //   };
//     // });
//   };

//   onItemSelected = i => {
//     // this.setState(prevState => {
//     //   return {
//     //     selectedPlace: prevState.places.find((place, index) => {
//     //       return i === index;
//     //     })
//     //   };
//     // });
//     this.props.onSelectPlace(i)
//   };

//   placeDetailItemDeleted = () => {
//     // this.setState(prevState => {
//     //   return {
//     //     places: prevState.places.filter((el, index) => {
//     //       return el.key !== prevState.selectedPlace.key;
//     //     }),
//     //     selectedPlace: null
//     //   };
//     // });
//     this.props.onDeletePlace()
//   };

//   placeDetailCloseModal = () => {
//     // this.setState({
//     //   selectedPlace: null
//     // });
//     this.props.onUnSelectPlace()
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <PlaceDetail
//           selectedPlace={this.props.selectedPlace}
//           onItemDeleted={this.placeDetailItemDeleted}
//           onModalClose={this.placeDetailCloseModal}
//         />
//         <ListInput
//           onNameChange={this.placeNameChangeHandler}
//           onSubmit={this.onSubmitHandler}
//         />
//         <View style={styles.listContainer}>
//           <ListItem
//             places={this.props.places}
//             onItemSelected={this.onItemSelected}
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//     justifyContent: "flex-start",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF"
//   },
//   listContainer: {
//     width: "100%",
//     paddingTop: 5
//   }
// });

// const mapStateToProps = state => {
//   return {
//     places: state.places.places,
//     selectedPlace: state.places.selectedPlace
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddPlace: (name) => dispatch(addPlace(name)),
//     onDeletePlace: () => dispatch(deletePlace()),
//     onSelectPlace: (index) => dispatch(selectPlace(index)),
//     onUnSelectPlace: () => dispatch(deselectPlace()),
//     onSetName: (name) => dispatch(setName(name))
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps) (App);
