import React, {Component} from 'react';
import {View, Text} from 'react-native';
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
        <View>
          <Text>SignUp</Text>
        </View>
    );
  }
}

SignUp = connect(
    (state) => ({

    }),
    (dispatch) => ({

    })
)(SignUp);

export default SignUp;