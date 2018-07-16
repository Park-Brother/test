import React, {Component} from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import {StyleSheet, View, Image} from 'react-native';

/**
 * import screens.
 */
import DMNavigation from './DM';
import FeedNavigation from './Feed';
import LeaderBoardNavigation from './LeaderBoard';
import UserNavigation from './User';
import NotificationNavigation from './Notification';

/**
 * declare default screen
 */
const InitialRouteName = 'User';

const RouteConfigs = {
  DM: DMNavigation,
  Feed: FeedNavigation,
  LeaderBoard: LeaderBoardNavigation,
  Notification: NotificationNavigation,
  User: UserNavigation,
};

const navigationOptions = ({navigation}) => {
  return {
    swipeEnabled: true,
    gesturesEnabled: false,
    tabBarIcon: ({ focused, tintColor }) => {
      const state = navigation.state.key;
      const style = focused ? styles.active : styles.inactive;

      function _getTabBarIcon(key = '') {
        let tabBarIcon;
        switch (key) {
          case 'DM':
            tabBarIcon = require('../../../img/tabs/chat.png');
            break;
          case 'Feed':
            tabBarIcon = require('../../../img/tabs/feed.png');
            break;
          case 'LeaderBoard':
            tabBarIcon = require('../../../img/tabs/flex.png');
            break;
          case 'Notification':
            tabBarIcon = require('../../../img/tabs/notification.png');
            break;
          case 'User':
            tabBarIcon = require('../../../img/tabs/user-white.png');
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
};

const BottomTabNavigatorConfig = {
  initialRouteName: InitialRouteName,
  navigationOptions: navigationOptions,
  tabBarOptions: {
      showLabel: false,
      // tabStyle: {
      //   height: 50,
      // }
      // style: {}
  },
};

const styles = StyleSheet.create({
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

const TabNavigator =  createBottomTabNavigator(RouteConfigs, BottomTabNavigatorConfig);

export {TabNavigator, InitialRouteName};
