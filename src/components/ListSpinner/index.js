import React, {Component} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

export default class ListSpinner extends Component {

  render() {

    const {isShow} = this.props;

    return (
      <View>
        {isShow && <ActivityIndicator style={styles.indicator}/>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  indicator: {
    padding: 10,
  }
});