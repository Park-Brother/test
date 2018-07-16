import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default class SignIn extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>SignIn View...</Text>
        <Button onPress={this.onPress.bind(this)} title="go Profile"/>
      </View>
    );
  }

  onPress() {
    this.props.navigation.navigate('Profile');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
