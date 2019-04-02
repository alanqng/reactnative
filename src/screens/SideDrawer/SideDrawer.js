import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { Navigation } from 'react-native-navigation'

const SideDrawer = () => {
  const navigationButtonEventListener = Navigation.events().registerNavigationButtonPressedListener(
    ({ buttonId }) => {
      console.log(buttonId);
      if (buttonId === "sideDrawerToggle") {
        Navigation.mergeOptions("menuSide", {
          sideMenu: {
            left: {
              visible: true
            }
          }
        });
      }
    }
  );
//   navigationButtonEventListener.remove()
  return (
    <View style={[styles.container, { width: Dimensions.get("window").width * 0.8 }]}>
      <Text>Side Drawer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 22,
        backgroundColor: 'white',
        flex: 1
    }
})

export default SideDrawer;
