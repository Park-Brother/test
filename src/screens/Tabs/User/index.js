import Profile from './Profile';

import {
  createStackNavigator
} from 'react-navigation';

const ProfileNavigator = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({navigation}) => ({
      title: 'Profile'
    })
  }
})

// const UserNavigation = createStackNavigator({
//   Sign: {
//     screen: SignNavigator
//   },
//   Setting: ProfileNavigator,
// }, {
//   headerMode: 'none',
//   mode: 'none'
// });

// UserNavigation.navigationOptions = ({navigation}) => {
//
//   const state = navigation.state;
//   const stateIdx = state.index;
//   const currentNavigation = state.routes[stateIdx];
//
//   const currentNavigationRoutes = currentNavigation.routes;
//   const lastState = currentNavigationRoutes ? currentNavigationRoutes.slice(-1)[0] : null;
//   const routeName = lastState ? lastState.routeName : currentNavigation.routeName;
//
//   if (routeName !== 'Profile') {
//       return {
//         tabBarVisible: false
//       };
//   }else {
//     return {
//       tabBarVisible: true
//     };
//   }
// }

export default ProfileNavigator;
