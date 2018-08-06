import {combineReducers} from 'redux';
import {createNavigationReducer} from 'react-navigation-redux-helpers';

import AppNavigator from '../navigators/AppNavigator';
import RankingReducer from "./Ranking";
import FeedReducer from "./Feed";
import NotificationReducer from "./Notification";
import UserReducer from "./User";

const navReducer = createNavigationReducer(AppNavigator);

const appReducer = combineReducers({
  nav: navReducer,
  ranking: RankingReducer,
  feed: FeedReducer,
  notification: NotificationReducer,
  user: UserReducer
});

export {appReducer};
