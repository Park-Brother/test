import React, {Component} from 'react';
import { connect } from 'react-redux';
import {StyleSheet, View, Image, DeviceInfo} from "react-native";
import { createBottomTabNavigator } from 'react-navigation';
import {
  MessageNavigator,
  FeedNavigator,
  LeaderBoardNavigator,
  NotificationNavigator,
  ProfileNavigator,
} from './StackNavigator';

import Dim from '../components/Dim';
import FloatingButton from '../components/FloatingButton';
import {toggleWithDim} from "../actions/FloatingButton";

/**
 * tab navigator
 */
// const InitialRouteName = 'LeaderBoard';
const InitialRouteName = 'Message';

const TabRouteConfig = {
  Message: MessageNavigator,
  Feed: FeedNavigator,
  LeaderBoard: LeaderBoardNavigator,
  Notification: NotificationNavigator,
  Profile: ProfileNavigator
};

const TabNavigatorConfig = {
  initialRouteName: InitialRouteName,
  navigationOptions: navigationOptions,
  tabBarOptions: {
    showLabel: false,
  }
};

function navigationOptions({navigation}) {
  return {
    swipeEnabled: true,
    gesturesEnabled: false,
    tabBarIcon: ({ focused, tintColor }) => {
      const state = navigation.state.key;
      const style = focused ? styles.active : styles.inactive;

      function _getTabBarIcon(key = '') {
        let tabBarIcon;
        switch (key) {
          case 'Message':
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
          case 'Profile':
            tabBarIcon = require('../../img/tabs/user-white.png');
            break;
          default:
            tabBarIcon = null;
        }
        return tabBarIcon;
      }

      return (
          <View style={[styles.tabBarIconContainer, style]}>
            <Image
                source={_getTabBarIcon(state)}
                style={[styles.icon, style]}/>
          </View>
      );
    }
  }
}

const _TabNavigator = createBottomTabNavigator(TabRouteConfig, TabNavigatorConfig);

class TabNavigator extends Component {

  static router = {
    ..._TabNavigator.router,
    getStateForAction: (action, lastState) => {
      // console.log('action', action, lastState);
      // check for custom actions and return a different navigation state.
      return _TabNavigator.router.getStateForAction(action, lastState);
    },
  };

  static SELECTED_ROUTER_KEY = ['LeaderBoard'];

  constructor(props) {
    super(props);
    this.state = {
      key: InitialRouteName
    };
  }

  render() {
    const {dim, float, toggleWithDim} = this.props;
    const key = this.state.key;
    let position = 49 + 15;
    if (DeviceInfo.isIPhoneX_deprecated) position += 34;

    return (
      <View style={styles.container}>
        <_TabNavigator onNavigationStateChange={(previous, current) => {
          const {index, routes} = current;
          const selectedSceneKey = routes[index].key;
          this.setState({
            key: selectedSceneKey
          });
        }}/>
        {
          dim.visible && <Dim onPress={toggleWithDim}/>
        }
        {
          //TODO 아래 부분 변경하도록 한다.
          this.hasFloatingBtn(key) &&
          <FloatingButton
              items={float.items}
              folding={float.folding}
              bottom={position}
              onPress={toggleWithDim}/>
        }
      </View>
    );
  }

  hasFloatingBtn(key) {
    const hasFloatingBtn = TabNavigator.SELECTED_ROUTER_KEY.indexOf(key) !== -1;
    return hasFloatingBtn;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: 25,
    height: 25
  },
  inactive: {
    backgroundColor: '#ededed',
  },
  active: {
    backgroundColor: '#40e0d0',
  }
});

const mapStateToProps = (state) => ({
  dim: state.dim,
  float: state.float
});

const mapDispatchToProps = (dispatch) => ({
  toggleWithDim: () => dispatch(toggleWithDim()),
});

TabNavigator = connect(mapStateToProps, mapDispatchToProps)(TabNavigator);

export { TabNavigator, InitialRouteName };