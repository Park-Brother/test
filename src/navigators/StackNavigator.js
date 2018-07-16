import {
  createStackNavigator,
} from 'react-navigation';

import {
  Message,
  MessageList,
  Feed,
  LeaderBoard,
  Notification,
  Profile,
  SignIn,
  SignUp,
} from '../screens';

/**
 * Message config
 */
const MessageRouteConfig = {
  MessageList: {
    screen: MessageList
  },
  Message: {
    screen: Message
  }
};

const MessageNavigatorOptions = {

};

const MessageNavigator = createStackNavigator(MessageRouteConfig, MessageNavigatorOptions);

MessageNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
}
/**
 * Feed config
 */
const FeedRouteConfigs = {
  Feed: {
    screen: Feed
  }
};

const FeedNavigatorOptions = {

};

const FeedNavigator = createStackNavigator(FeedRouteConfigs, FeedNavigatorOptions);
/**
 * Leader Board Config
 */

const LeaderBoardRouteConfig = {
  LeaderBoard: {
    screen: LeaderBoard
  }
};
const LeaderBoardNavigatorOptions = {

};

const LeaderBoardNavigator = createStackNavigator(LeaderBoardRouteConfig, LeaderBoardNavigatorOptions);
/**
 * Notification config
 */

const NotificationRouteConfig = {
  Notification: {
    screen: Notification
  }
};

const NotificationNavigatorConfig = {

};

const NotificationNavigator = createStackNavigator(NotificationRouteConfig, NotificationNavigatorConfig);
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
  headerMode: 'none'
};

const SignNavigator = createStackNavigator(SignRouteConfig, SignNavigatorOptions);
/**
 * Profile
 */
const ProfileRouteConfig = {
  Profile: {
    screen: Profile
  },
  Sign: {
    screen: SignNavigator,
    navigationOptions: {
      header: null
    }
  }
};

const ProfileNavigatorConfig = {
  mode: 'modal'
};

const ProfileNavigator = createStackNavigator(ProfileRouteConfig, ProfileNavigatorConfig);

ProfileNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  let headerVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
    headerVisible = false;
  }

  return {
    header: null,
    tabBarVisible
  };
}
/**
 * create stack navigator
 */
export {
  MessageNavigator,
  FeedNavigator,
  LeaderBoardNavigator,
  NotificationNavigator,
  SignNavigator,
  ProfileNavigator
};