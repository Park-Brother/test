import {createStackNavigator} from 'react-navigation';
import {Ranking, Feed, Notification, User, Purchase, SignIn, SignUp, Write} from '../screens';

/**
 * Ranking
 */
const RankingRouteConfig = {
  Ranking: {
    screen: Ranking
  }
};

const RankingNavigatorOptions = {

};

const RankingNavigator = createStackNavigator(RankingRouteConfig, RankingNavigatorOptions);

/**
 * Feed
 */
const FeedRouteConfig = {
  Feed: {
    screen: Feed
  },
  Write: {
    screen: Write
  }
};

const FeedNavigatorOptions = {
  mode: 'modal',
};

const FeedNavigator = createStackNavigator(FeedRouteConfig, FeedNavigatorOptions);

FeedNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
}

/**
 * Notification
 */
const NotificationRouteConfig = {
  Notification: {
    screen: Notification
  }
};

const NotificationNavigatorOptions = {

};

const NotificationNavigator = createStackNavigator(NotificationRouteConfig, NotificationNavigatorOptions);

/**
 * Purchase
 */
const PurchaseRouteConfig = {
  Purchase: {
    screen: Purchase
  }
};

const PurchaseNavigatorOptions = {

};

const PurchaseNavigator = createStackNavigator(PurchaseRouteConfig, PurchaseNavigatorOptions);

/**
 * Auth
 */
const AuthRouteConfig = {
  SignIn: {
    screen: SignIn
  },
  SignUp: {
    screen: SignUp
  }
};

const AuthNavigatorOptions = {
  headerMode: 'none'
};

const AuthNavigator = createStackNavigator(AuthRouteConfig, AuthNavigatorOptions);

/**
 * User
 */
const UserRouteConfig = {
  User: {
    screen: User
  },
  Auth: {
    screen: AuthNavigator,
    navigationOptions: {
      header: null
    }
  }
};

const UserNavigatorOptions = {
  mode: 'modal',
};

const UserNavigator = createStackNavigator(UserRouteConfig, UserNavigatorOptions);

UserNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    header: null,
    tabBarVisible
  };
}

// /**
//  * Write
//  */
// const WriteRouteConfig = {
//   write: {
//     screen: Write
//   }
// };
//
// const WriteNavigatorOptions = {
// };
//
// const WriteNavigator = createStackNavigator(WriteRouteConfig, WriteNavigatorOptions);

/**
 * Purchase
 */

export {
  FeedNavigator,
  RankingNavigator,
  NotificationNavigator,
  PurchaseNavigator,
  AuthNavigator,
  UserNavigator,
  // WriteNavigator
}