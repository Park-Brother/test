import React from 'react'
import {Button} from 'react-native';
import DMList from './DMList';
import DM from './DM';

import { createStackNavigator } from 'react-navigation';

const DMNavigation = createStackNavigator(
  {
    DMList: {
      screen: DMList
    },
    DM: {
      screen: DM
    }
  }
);

DMNavigation.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
}

export default DMNavigation;
