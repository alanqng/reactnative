import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("map", 30),
    Icon.getImageSource("share", 30),
    Icon.getImageSource("bars", 30, '#E3F2FD')
  ]).then(sources => {
    console.log(sources[2]);
    Navigation.setRoot({
      root: {
        sideMenu: {
          left: {
            component: {
            id: 'menuSide',
              name: "awesome-navigation-SideDrawer"
            },
            options: {
              topBar: {
                leftButtons: [
                    {
                      id: "sideDrawerToggle",
                      icon: sources[2]
                    }
                  ]
              }
            }
          },
          center: {
            bottomTabs: {
              children: [
                {
                  stack: {
                    children: [
                      {
                        component: {
                          name: "awesome-navigation-FindPlaceScreen"
                        }
                      }
                    ],
                    options: {
                      bottomTab: {
                        text: "Find",
                        icon: sources[0],
                        testID: "FIRST_TAB_BAR_BUTTON"
                      },
                      topBar: {
                        title: {
                          text: "Find"
                        },
                        leftButtons: [
                          {
                            id: "sideDrawerToggle",
                            icon: sources[2]
                          }
                        ]
                      }
                    }
                  }
                },
                {
                  stack: {
                    children: [
                      {
                        component: {
                          name: "awesome-navigation-SharePlaceScreen"
                        }
                      }
                    ],
                    options: {
                      bottomTab: {
                        text: "Share",
                        icon: sources[1],
                        testID: "FIRST_TAB_BAR_BUTTON"
                      },
                      topBar: {
                        title: {
                          text: "Share"
                        },
                        leftButtons: [
                          {
                            id: "sideDrawerToggle",
                            icon: sources[2]
                          }
                        ]
                      }
                    }
                  }
                }
              ]
            }
          }

          // sideMenu: {
          //     left: {
          //         component: {
          //             name: 'awesome-navigation-SideDrawer'
          //         }
          //     }
          // }
        }
      }
      // Navigation.setRoot({
      //   root: {
      //     bottomTabs: {
      //       id: "BottomTabsId",
      //       children: [
      //         {
      //           component: {
      //             name: "awesome-navigation-FindPlaceScreen",
      //             options: {
      //               topBar: {
      //                 title: {
      //                   text: "Find Places"
      //                 }
      //               },
      //               bottomTab: {
      //                 fontSize: 5,
      //                 // icon: require('../../assets/Icons/baseline_share_black_18dp.png')
      //                 icon: sources[0]
      //               }
      //             }
      //           }
      //         },
      //         {
      //           component: {
      //             name: "awesome-navigation-SharePlaceScreen",
      //             options: {
      //               bottomTab: {
      //                 fontSize: 5,
      //                 // icon: require('../../assets/Icons/baseline_map_black_18dp.png')
      //                 icon: sources[1]
      //               }
      //             }
      //           }
      //         }
      //       ]
      //     }
      //   }
      // });
    });
  });
};

export default startTabs;
