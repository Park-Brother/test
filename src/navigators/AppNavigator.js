import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, AsyncStorage, Animated, Dimensions} from 'react-native';

import TabNavigator from './TabNavigator';
import {AuthNavigator}from './StackNavigator';

// import Loading from '../screens/Loading';

import {setUserToken} from '../actions/Storage';

const ITEM_KEY = 'userToken';

const {width: VIEW_WIDTH, height: VIEW_HEIGHT} = Dimensions.get('window');

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Warning: Module RNGoogleSignin', 'Module RNGoogleSignin']);

class AppNavigator extends Component {

  static router = {
    ...TabNavigator.router,
    getStateForAction: (action, lastState) => {
      return TabNavigator.router.getStateForAction(action, lastState);
    },
  };

  constructor(props) {
    super();

    this.getNavigator = this.getNavigator.bind(this);

    this.state = {
      loadComplete: false,
      loadScreenOpacity: new Animated.Value(1),
    };


    AsyncStorage.getItem(ITEM_KEY).then((token) => {
      if (token && token.trim() !== 'null') {
        props.setUserToken(token);
      }

      setTimeout(() => {
        // this.setState({loadComplete: true});
        this.startAnimation();
      });
    });
  }

  render() {
    const { token } = this.props;
    const {loadComplete, loadScreenOpacity} = this.state;
    const hasToken = token ? true : false;

    const size = {
      width: VIEW_WIDTH,
      height: VIEW_HEIGHT,
    };
    const backgroundColor = loadScreenOpacity.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['transparent', 'rgba(255, 255,255, 0.6)', '#fff']
    });

    const transform = [
      {
        scale: loadScreenOpacity.interpolate({
          inputRange: [0, 0.9, 1],
          outputRange: [10, 1, 1.3]
        })
      }
    ];

    const opacity = loadScreenOpacity.interpolate({
      inputRange: [0.3, 0.7],
      outputRange: [0, 1]
    });

    const zIndex = loadScreenOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [-1, 0]
    });

    const transform2 = [
      {
        scale: loadScreenOpacity.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 2]
        })
      }
    ];

    return (
        <View style={styles.container}>
          <Animated.View style={[{flex: 1}, {transform: transform2}]}>
            {this.getNavigator(hasToken)}
          </Animated.View>
          <Animated.View style={[styles.loadingContainer, {zIndex, backgroundColor, opacity, transform}]}>
            <Animated.Image style={[size]} source={require('../../img/loading.png')}/>
          </Animated.View>
        </View>
    );
  }

  getNavigator(hasToken) {
    const {navigation} = this.props;
    let navigator;

    if (hasToken) {
      navigator = <TabNavigator navigation={navigation}/>;
    }
    else {
      navigator = <AuthNavigator navigation={navigation}/>;
    }
    return navigator;
  }

  startAnimation() {
    Animated.timing(
        this.state.loadScreenOpacity,
        {
          toValue: 0,
          duration: 2000,
        }
    ).start();
  }
}

AppNavigator = connect(
  (state) => ({
    token: state.user.token,

  }),
  (dispatch)=> ({
    setUserToken: (token) => dispatch(setUserToken(token))
  })
)(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    position: 'absolute',
    // backgroundColor: '#fff',
    // flex: 1,
  },

});

export default AppNavigator;