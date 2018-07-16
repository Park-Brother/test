import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import {
  Message,
  MessageList,
  Feed,
  LeaderBoard,
  Notification,
  Profile
} from '../screens';
import {StyleSheet, View, Image} from "react-native";

/**
 * Message config
 */
const MessageRouteConfig = {
  MessageList: {
    screen: MessageList
  },
  Message: {
    screen: Message
  }
};

const MessageNavigatorOptions = {

};

/**
 * Feed config
 */
const FeedRouteConfigs = {
  Feed: {
    screen: Feed
  }
};

const FeedNavigatorOptions = {

};

/**
 * Leader Board Config
 */

const LeaderBoardRouteConfig = {
  LeaderBoard: {
    screen: LeaderBoard
  }
};
const LeaderBoardNavigatorOptions = {

};

/**
 * Notification config
 */

const NotificationRouteConfig = {
  Notification: {
    screen: Notification
  }
};

const NotificationNavigatorConfig = {

};

/**
 * Profile
 */
const ProfileRouteConfig = {
  Profile: {
    screen: Profile
  }
};

const ProfileNavigatorConfig = {

};

/**
 * create stack navigator
 */
const MessageNavigator = createStackNavigator(MessageRouteConfig, MessageNavigatorOptions);
const FeedNavigator = createStackNavigator(FeedRouteConfigs, FeedNavigatorOptions);
const LeaderBoardNavigator = createStackNavigator(LeaderBoardRouteConfig, LeaderBoardNavigatorOptions);
const NotificationNavigator = createStackNavigator(NotificationRouteConfig, NotificationNavigatorConfig);
const ProfileNavigator = createStackNavigator(ProfileRouteConfig, ProfileNavigatorConfig);


/**
 * tab navigator
 */
const InitialRouteName = 'Feed';

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

const TabNavigator = createBottomTabNavigator(TabRouteConfig, TabNavigatorConfig);

export { TabNavigator, InitialRouteName };