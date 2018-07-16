import {
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';

import {
  SignUp,
  SignIn
} from '../screens';

import {
  TabNavigator,
} from './TabNavigator'

/**
 * SignNavigator
 */
const SignRouteConfig = {
  SignUp: {
    screen: SignUp
  },
  SignIn: {
    screen: SignIn
  }
};

const SignNavigatorOptions = {
  headerMode: 'none',
  mode: 'modal'
};

const SignNavigator = createStackNavigator(SignRouteConfig, SignNavigatorOptions);

/**
 * Switch Naviagator
 */

const SwitchRouteConfig = {
  Sign: SignNavigator,
  Tabs: TabNavigator
};

const SwitchNavigatorConfig = {

};

const SwitchNavigator = createSwitchNavigator(SwitchRouteConfig, SwitchNavigatorConfig);

export default SwitchNavigator;