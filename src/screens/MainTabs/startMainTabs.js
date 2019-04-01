import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/FontAwesome5";

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("map", 30),
    Icon.getImageSource("share", 30)
  ]).then(sources => {
    console.log(sources[0]);
    Navigation.setRoot({
        root: {
            bottomTabs: {
              id: 'BottomTabsId',
              topBar: {
                  visible: true
              },
              children: [
                {
                  component: {
                    name: 'awesome-navigation-FindPlaceScreen',
                    options: {
                      bottomTab: {
                        fontSize: 5,
                        // icon: require('../../assets/Icons/baseline_share_black_18dp.png')
                        icon: sources[0]
                      },
                    }
                  },
                },
                {
                  component: {
                    name: 'awesome-navigation-SharePlaceScreen',
                    options: {
                      bottomTab: {
                          fontSize: 5,
                        // icon: require('../../assets/Icons/baseline_map_black_18dp.png')
                        icon: sources[1]
                      },
                    }
                  },
                },
              ],
            }
          }
      
    });
  });
};

export default startTabs;
