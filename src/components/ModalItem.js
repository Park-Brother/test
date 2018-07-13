import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';

export default class ModtalItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: props.item
    };
  }

  render() {
    const {label, onPress} = this.state.item;

    return (
      <TouchableHighlight onPress={onPress}>
        <View style={styles.item}>
          <Text style={styles.text}>{label}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    height: 60,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
  },
  text: {
    color: '#40e0d0',
    fontSize: 18,
  }
});
