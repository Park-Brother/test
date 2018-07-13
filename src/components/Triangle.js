import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

export default class Triangle extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const TYPE = ['default', 'up', 'down'];
    const {direction} = this.props;

    let idx = TYPE.indexOf(direction);
    if (idx < 0) idx = 0;
    const _direction = TYPE[idx];

    return (
      <View style={[styles.container, styles[_direction]]}></View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  up: {
    borderLeftWidth: 4,
    borderLeftColor: 'transparent',
    borderRightWidth: 4,
    borderRightColor: 'transparent',
    borderBottomWidth: 6,
    borderBottomColor: '#d0021b'
  },
  down: {
    borderLeftWidth: 4,
    borderLeftColor: 'transparent',
    borderRightWidth: 4,
    borderRightColor: 'transparent',
    borderTopWidth: 6,
    borderTopColor: '#7ed321',
  },
  default: {
    width: 8,
    height: 1,
    backgroundColor: '#f5a623',
  }
});
