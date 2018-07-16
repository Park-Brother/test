import Feed from './Feed';

import { createStackNavigator } from 'react-navigation';

const FeedNavigation = createStackNavigator({
  Feed: {
    screen: Feed
  }
});

export default FeedNavigation;
