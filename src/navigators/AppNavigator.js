import {createSwitchNavigator} from 'react-navigation';
// import {FeedNavigator} from "./StackNavigator";
//
// const SwitchRouteConfig = {
//   feed: FeedNavigator,
// };
//
// const SwitchNavigatorConfig = {
//   mode: 'modal'
// };
//
// const AppNavigator = createSwitchNavigator(SwitchRouteConfig, SwitchNavigatorConfig);
import TabNavigator from './TabNavigator';
const AppNavigator = TabNavigator;
export default AppNavigator;