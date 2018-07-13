import Profile from './Profile';
import SignIn from './SignIn';
import SignUp from './SignUp';

import {
  createStackNavigator,
  createSwitchNavigator
 } from 'react-navigation';


const SignNavigator = createStackNavigator({
  SignUp: {
    screen: SignUp
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: ({navigation}) => ({
      title: 'SignIn',
      headerBackTitle: null,
      headerStyle: {
        height: 0
      }
    })
  }
}, {
  headerMode: 'none',
  mode: 'card'
});

const ProfileNavigator = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({navigation}) => ({
      title: 'Profile'
    })
  }
})

const UserNavigation = createStackNavigator({
  Setting: ProfileNavigator,
  Sign: {
    screen: SignNavigator
  },
}, {
  headerMode: 'none',
  mode: 'modal'
});

UserNavigation.navigationOptions = ({navigation}) => {

  const state = navigation.state;
  const stateIdx = state.index;
  const currentNavigation = state.routes[stateIdx];

  const currentNavigationRoutes = currentNavigation.routes;
  const lastState = currentNavigationRoutes ? currentNavigationRoutes.slice(-1)[0] : null;
  const routeName = lastState ? lastState.routeName : currentNavigation.routeName;

  if (routeName !== 'Profile') {
      return {
        tabBarVisible: false
      };
  }else {
    return {
      tabBarVisible: true
    };
  }
}

export default UserNavigation;
