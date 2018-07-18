import React, {Component} from 'react';
import {
  createStackNavigator
} from 'react-navigation';

import SignUp from './SignUp';
import SignIn from './SignIn';


const AuthNavigator = createStackNavigator({
  SignUp: {
    screen: SignUp
  },
  SignIn: {
    screen: SignIn
  }
},{
  headerMode: 'none',
  mode: 'modal'
});

export default AuthNavigator;