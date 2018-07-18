import React, {Component} from 'react';
import {View, DeviceInfo} from 'react-native';
import {createSwitchNavigator} from 'react-navigation';

import {TabNavigator, InitialRouteName} from "./Tab/index";
import AuthNavigator from './Auth/index';

import Dim from '../../components/Dim/Dim';
import FloatingButton from '../../components/FloatingButton/FloatingButton';

const SwitchNavigator = createSwitchNavigator({
  auth: {
    screen: AuthNavigator
  },
  tabs: {
    screen: TabNavigator
  }
});


class AppNavigator extends Component {

  static router = {
    ...SwitchNavigator.router,
    getStateForAction: (action, lastState) => {
      // console.log('action', action, lastState);
      // check for custom actions and return a different navigation state.
      return SwitchNavigator.router.getStateForAction(action, lastState);
    },
  };

  static SELECTED_ROUTER_KEY = 'LeaderBoard';

  constructor(props) {
    super(props);
    this.state = {
      key: InitialRouteName
    };
  }

  render() {
    const {dim, float, toggleWithDim, auth} = this.props;
    let position = 49 + 15;
    if (DeviceInfo.isIPhoneX_deprecated) position += 34;

    return (
      <View style={{flex:1}}>

        <SwitchNavigator onNavigationStateChange={(previous, current) => {
            const {index, routes} = current;
            const selectedSceneKey = routes[index].key;

            this.setState({
              key: selectedSceneKey
            });
          }}/>
        }
        {
         dim.visible && <Dim onPress={toggleWithDim}/>
        }
        {
          //TODO 아래 부분 변경하도록 한다.
          this.state.key === AppNavigator.SELECTED_ROUTER_KEY &&
          <FloatingButton
            items={float.items}
            folding={float.folding}
            bottom={position}
            onPress={toggleWithDim}/>
        }

      </View>
    )
  };
}

export default AppNavigator;
