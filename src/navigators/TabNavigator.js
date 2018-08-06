import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RankingNavigator, FeedNavigator, NotificationNavigator, UserNavigator} from "./StackNavigator";

const TabRouteConfigs = {
  ranking: {
    screen: RankingNavigator
  },
  feed: {
    screen: FeedNavigator
  },
  notification: {
    screen: NotificationNavigator
  },
  user: {
    screen: UserNavigator
  }
};

// const initialRouteName = 'ranking';
const initialRouteName = 'feed';
// const initialRouteName = 'notification';
// const initialRouteName = 'user';

const TabNavigatorConfigs = {
  initialRouteName,
  navigationOptions: navigationOptions,
  tabBarOptions: {
    showLabel: false,
    style: {
      height: 40,
      borderTopWidth: 1,
      borderTopColor: '#ededed',
      backgroundColor: '#fff',

    },
    activeTintColor: '#0d0d0d',
    // inactiveTintColor: 'blue'
  }
};

const TabNavigator = createBottomTabNavigator(TabRouteConfigs, TabNavigatorConfigs);

function navigationOptions({navigation}) {
  return {
    swipeEnabled: true,
    gesturesEnabled: true,
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let name;
      switch (routeName) {
        case 'feed':
          name = `ios-paper`;
          break;
        case 'ranking':
          name = `md-medal`;
          break;
        case 'notification':
          name = `md-notifications`;
          break;
        case 'user':
          name = `md-person`;
          break;
      }
      return <Ionicons name={name} size={30} color={tintColor}></Ionicons>;
    }
  }
}

export default TabNavigator;