import {combineReducers} from 'redux';
import {createNavigationReducer} from 'react-navigation-redux-helpers';

import AppNavigator from '../screens/Navigator';
import DimReducer from './Dim';
import FloatingButtonReducer from './FloatingButton';
import FeedReducer from './Feed';
console.log('FeedReducer:::', FeedReducer, FloatingButtonReducer)
const navReducer = createNavigationReducer(AppNavigator);
const appReducer = combineReducers({
  nav: navReducer,
  dim: DimReducer,
  float: FloatingButtonReducer,
  feed: FeedReducer
});

export {appReducer, AppNavigator};
