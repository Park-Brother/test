import {combineReducers} from 'redux';
import {createNavigationReducer} from 'react-navigation-redux-helpers';

import AppNavigator from '../navigators/AppNavigator';

/**
 * components reducer
 */
import DimReducer from './Dim';
import FloatingButtonReducer from './FloatingButton';
/**
 * screen reducer
 */
import AuthReducer from './Auth';
import MessageReducer from './Message';
import FeedReducer from './Feed';
import LeaderBoard from './LeaderBoard';
import UserReducer from './User';
import NotificationReducer from './Notification';

const navReducer = createNavigationReducer(AppNavigator);

const appReducer = combineReducers({
  nav: navReducer,

  dim: DimReducer,
  float: FloatingButtonReducer,

  auth: AuthReducer,
  message: MessageReducer,
  feed: FeedReducer,
  leaderBoard: LeaderBoard,
  notification: NotificationReducer,
  user: UserReducer
});

export {appReducer};
