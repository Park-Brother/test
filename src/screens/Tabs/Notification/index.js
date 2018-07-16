import Notification from './Notification';

import { createStackNavigator } from 'react-navigation';

const NotificationNavigation = createStackNavigator({
  Notification: {
    screen: Notification
  }
});

export default NotificationNavigation;
