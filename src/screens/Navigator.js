import React, {Component} from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,

} from 'react-navigation';
import {StyleSheet, Image, View, Dimensions, DeviceInfo} from 'react-native';

import DMNavigation from './Tab/DM';
import FeedNavigation from './Tab/Feed';
import LeaderBoardNavigation from './Tab/LeaderBoard';
import UserNavigation from './Tab/User';
import NotificationNavigation from './Tab/Notification';

const RouteConfigs = {
  DM: DMNavigation,
  Feed: FeedNavigation,
  LeaderBoard: LeaderBoardNavigation,
  Notification: NotificationNavigation,
  User: UserNavigation,
};

const InitialRouteName = 'DM';
const SELECTED_ROUTEKEY = 'LeaderBoard';

const BottomTabNavigatorConfig = {
  initialRouteName: InitialRouteName,
  // initialRouteName: 'DM',
  navigationOptions: ({ navigation }) => ({
    swipeEnabled: true,
    gesturesEnabled: false,
    tabBarIcon: ({ focused, tintColor }) => {
      const state = navigation.state.key;
      console.log(focused);
      const style = focused ? styles.active : styles.inactive;
      return (
        <View style={[styles.tabBarIconContainer, style]}>
          <Image
            source={_getTabBarIcon(state)}
            style={[{width: 25, height: 25}, style]}/>
        </View>
      );
    }
  }),
  tabBarOptions: {
    showLabel: false,
    // tabStyle: {
    //   height: 50,
    // }
    // style: {}
  },
};

function _getTabBarIcon(key = '') {
  let tabBarIcon;
  switch (key) {
    case 'DM':
      tabBarIcon = require('../../img/tabs/chat.png');
      break;
    case 'Feed':
      tabBarIcon = require('../../img/tabs/feed.png');
      break;
    case 'LeaderBoard':
      tabBarIcon = require('../../img/tabs/flex.png');
      break;
    case 'Notification':
      tabBarIcon = require('../../img/tabs/notification.png');
      break;
    case 'User':
      tabBarIcon = require('../../img/tabs/user-white.png');
      break;
    default:
      tabBarIcon = null;
  }
  return tabBarIcon;
}

const TabNavigator =  createBottomTabNavigator(RouteConfigs, BottomTabNavigatorConfig);

import Dim from '../components/Dim';
import FloatingButton from '../components/FloatingButton';

class AppNavigator extends Component {

  static router = {
    ...TabNavigator.router,
    getStateForAction: (action, lastState) => {
      // console.log('action', action, lastState);
      // check for custom actions and return a different navigation state.
      return TabNavigator.router.getStateForAction(action, lastState);
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      key: InitialRouteName
    };
  }

  render() {
    const {dim, float, state} = this.props;
    let position = 49 + 15;
    if (DeviceInfo.isIPhoneX_deprecated) position += 34;

    return (
      <View style={{flex:1}}>
        <TabNavigator onNavigationStateChange={(previous, current) => {
          const {index, routes} = current;
          const selectedSceneKey = routes[index].key;

          this.setState({
            key: selectedSceneKey
          });
          console.log(selectedSceneKey);
        }}/>
        {
          dim.visible && <Dim onPress={() => {
            const {toggleDim, toggleFloatingButton} = this.props;
            toggleFloatingButton();
          }}/>
        }
        {
          //TODO 아래 부분 변경하도록 한다.
          this.state.key === SELECTED_ROUTEKEY &&
          <FloatingButton
            items={float.items}
            folding={float.folding}
            bottom={position}
            onPress={() => {
              const {toggleDim, toggleFloatingButton} = this.props;
              toggleFloatingButton();
            }}/>
        }

      </View>
    )
  };
}

const styles = {
  tabBarIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inactive: {
    backgroundColor: '#ededed',
  },
  active: {
    backgroundColor: '#40e0d0',
  }
}

export default AppNavigator;
