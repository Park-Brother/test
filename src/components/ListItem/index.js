import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

export default class ListItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const {right, mid, left} = this.props;

    return (
      <View style={styles.item}>
        <View style={styles.left}>
          {left}
        </View>
        <View style={styles.mid}>
          {mid}
        </View>
        <View style={styles.right}>
          {right}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    flexDirection: 'row',
  },
  left: {
    justifyContent: 'center',
    paddingLeft: 15,
  },
  mid: {
    padding: 15,
    justifyContent: 'center',
    flex: 1,
  },
  right: {
    alignItems: 'flex-end',
    minWidth: 40,
    maxWidth: 150,
    justifyContent: 'center',
    paddingRight: 15,
  }
})