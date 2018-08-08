import React, {Component} from 'react';
import {View} from 'react-native';

export default class Col extends Component {

  render() {
    const {children, style} = this.props;

    return (
      <View style={[style]}>
        {children}
      </View>
    );
  }
}