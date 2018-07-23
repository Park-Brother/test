import {AsyncStorage, ActivityIndicator} from 'react-native';
import {
  createSwitchNavigator
} from 'react-navigation';

import {
  TabNavigator,
} from './TabNavigator'

import {
  SignNavigator
} from "./StackNavigator";

/**
 * Switch Naviagator
 */

const SwitchRouteConfig = {
  Tabs: TabNavigator,
  Sign: SignNavigator
};

const SwitchNavigatorConfig = {
  mode: 'modal'
};
// AsyncStorage.setItem('id_token', '');
AsyncStorage.getItem('id_token').then((token) => {
  console.log('token:::', token);
});


const AppNavigator = createSwitchNavigator(SwitchRouteConfig, SwitchNavigatorConfig);

export default AppNavigator;