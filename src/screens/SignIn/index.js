import React, {Component} from 'react';
import { Text, View, Button} from 'react-native';
import styles from './styles';

export default class SignIn extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>SignIn View...</Text>
        <Button onPress={this.onPress.bind(this)} title="go Profile"/>
        <Button onPress={this.moveSignUp.bind(this)} title="go SignUp"/>
      </View>
    );
  }

  onPress() {
    this.props.navigation.navigate('Profile');
  }

  moveSignUp() {
    this.props.navigation.navigate('SignUp');
  }
}
