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
});

export default ProfileNavigator;
