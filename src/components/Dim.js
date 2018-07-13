import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Dimensions} from 'react-native';

export default class Dim extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    let {width, height} = Dimensions.get('window');

    return (
      <TouchableOpacity activeOpacity={1} onPress={this.onPress.bind(this)} style={styles.dim}>
        <View style={{width, height}}>
        </View>
      </TouchableOpacity>
    )
  }

  onPress() {
    const {onPress} = this.props;
    onPress && onPress();
  }
}

const styles = StyleSheet.create({
  dim: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  }
})
