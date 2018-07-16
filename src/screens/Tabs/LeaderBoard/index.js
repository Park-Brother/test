import LeaderBoard from './LeaderBoard';

import { createStackNavigator } from 'react-navigation';

const LeaderBoardNavigation = createStackNavigator({
  LeaderBoard: {
    screen: LeaderBoard,
    navigationOptions: {
      title: 'LeaderBoard',
      headerStyle: {
        backgroundColor: '#fff',
        height: 50
      },
      headerTintColor: '#4a4a4a',
      headerTitleStyle: {
        // fontWeight: 'bold',
        // alignItems: 'center',
        // justifyContent: 'center',
        // padding: 10
      },
    }
  }
});

export default LeaderBoardNavigation;
