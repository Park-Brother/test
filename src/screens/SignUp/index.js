import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {connect} from "react-redux";

class SignUp extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `SignUp`,
  });

  constructor(props) {
    super();

  }

  componentDidMount() {

  }

  render() {
    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={this.goBack.bind(this)}>
            <Text>SignUp</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goTab.bind(this)}>
            <Text>Tab</Text>
          </TouchableOpacity>
        </View>
    );
  }

  goBack() {
    this.props.navigation.navigate('SignIn');
  }

  goTab() {
    this.props.navigation.navigate('User');
  }
}

SignUp = connect(
  (state) => ({

  }),
  (dispatch) => ({

  })
)(SignUp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default SignUp;