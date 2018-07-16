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

const AppNavigator = createSwitchNavigator(SwitchRouteConfig, SwitchNavigatorConfig);

export default AppNavigator;