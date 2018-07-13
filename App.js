import React, {Component} from 'react';
import { Provider, connect } from 'react-redux';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';

import {AppNavigator} from './src/reducers';
import {store} from './store';
import {show, hide, toggle as toggleDim} from './src/actions/Dim';
import {show as aa, toggle as toggleFloatingButton} from './src/actions/FloatingButton'

// const App = reduxifyNavigator(AppNavigator, "root");

const mapStateToProps = (state) => ({
  state: state.nav,
  dim: state.dim,
  float: state.float
});

const mapDispatchToProps = (dispatch) => ({
  hideDim: () => dispatch(hide()),
  showDim: () => dispatch(show()),
  // toggleDim: () => dispatch(toggleDim()),
  show: () => dispatch(aa()),
  toggleFloatingButton: () => dispatch(toggleFloatingButton()),
});

const AppWithNavigationState = connect(mapStateToProps, mapDispatchToProps)(AppNavigator);

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState/>
      </Provider>
    );
  }
}

export default Root;
