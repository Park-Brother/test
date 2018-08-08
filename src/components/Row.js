import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

export default class Row extends Component {

  render() {
    const {children, style} = this.props;
    const hasHeight = style ? style.height : null;
    let _styles = [styles.row, styles.defaultHeight];

    if (hasHeight) _styles.pop();

    return (
      <View style={[_styles, style]}>
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  defaultHeight: {
    flex: 1,
  }
});