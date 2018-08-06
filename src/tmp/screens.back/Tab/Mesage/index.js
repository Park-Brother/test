import React from 'react'
import {Button} from 'react-native';
import DMList from './DMList';
import DM from './DM';

import { createStackNavigator } from 'react-navigation';

const MessageNavigation = createStackNavigator(
  {
    DMList: {
      screen: DMList
    },
    DM: {
      screen: DM
    }
  }
);

MessageNavigation.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
}

export default MessageNavigation;
