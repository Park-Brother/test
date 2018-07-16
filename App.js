import React, {Component} from 'react';
import {
  Provider, connect
} from 'react-redux';

import {AppNavigator} from './src/reducers';
import {store} from './store';
import {toggleWithDim} from './src/actions/FloatingButton';

const mapStateToProps = (state) => {
  return ({
    state: state.nav,
    dim: state.dim,
    float: state.float
  });
}

const mapDispatchToProps = (dispatch) => ({
  toggleWithDim: () => dispatch(toggleWithDim()),
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
