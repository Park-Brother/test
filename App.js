import React, {Component} from 'react';
import {
  Provider, connect
} from 'react-redux';

import AppNavigator from './src/navigators/AppNavigator';
import {store} from './store';

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    );
  }
}

export default Root;
