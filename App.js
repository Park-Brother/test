import React, {Component} from 'react';
import { Provider } from 'react-redux';

import AppNavigator from './src/navigators/AppNavigator';
import {store} from './store';

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    );
  }
}

export default Root;
