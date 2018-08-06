import React, {Component} from 'react';
import { StyleSheet, KeyboardAvoidingView, Animated, Keyboard, TextInput, View, TouchableOpacity, Image, Text} from 'react-native';

const IMAGE_HEIGHT = 250;
const IMAGE_HEIGHT_SMALL = 100;


export default class SignUp extends Component {

  constructor(props) {
    super(props);

    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
  }

  componentWillMount () {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardWillHide = (event) => {
    Animated.timing(this.imageHeight, {
     duration: event.duration,
     toValue: IMAGE_HEIGHT,
    }).start();
  };

  render() {
    const logo = {
      url: 'https://cdn-images-1.medium.com/max/1200/1*KANHihva9OdXx2-V5EDn3g.png',
      cache: 'cache-if-only'
    };
    const userSource = require('../../../../img/user.png');
    const passwordSource = require('../../../../img/key.png');
    const facebookSource = require('../../../../img/facebook-circular-logo.png');
    const googleSource = require('../../../../img/google-logo.png');
    //<Button onPress={this.onPress.bind(this)} title="go SignIn"></Button>

    return (
      <TouchableOpacity activeOpacity={1} style={styles.container} onPress={()=>{Keyboard.dismiss()}}>
        <KeyboardAvoidingView style={styles.aa} behavior="padding" keyboardVerticalOffset={50}>
          <View style={styles.imageContainer}>
            <Animated.Image source={logo} style={[styles.image, {width: this.imageHeight, height: this.imageHeight}]}/>
          </View>

          <View style={styles.inputContainer}>
            <Image style={styles.icon} source={userSource}/>
            <TextInput style={styles.input} placeholder="ID" placeholderTextColor="#ebebeb"/>
          </View>
          <View style={styles.inputContainer}>
            <Image style={styles.icon} source={passwordSource}/>
            <TextInput style={styles.input} placeholder="Password" secureTextEntry="true" placeholderTextColor="#ebebeb"/>
          </View>
          <View style={styles.inputContainer}>
            <TouchableOpacity activeOpacity={1} style={styles.signUpBtnContainer} onPress={this.signUp.bind(this)}>
            <View>
              <Text style={styles.signUpBtnText}>Sign Up</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signInBtnContainer} onPress={this.signIn.bind(this)}>
              <View>
                <Text style={styles.signInBtnText}>Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.sectionLineContainer}>
            <View style={styles.sectionLine}></View>
          </View>
          <View style={styles.inputContainer}>
            <TouchableOpacity activeOpacity={1} onPress={this.loginWithFacebook.bind(this)} style={styles.loginIconContainer}>
              <Image style={styles.icon} source={facebookSource}/>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} onPress={this.loginWithGoogle.bind(this)} style={styles.loginIconContainer}>
              <Image style={styles.icon} source={googleSource}/>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableOpacity>

    );
  }

  signUp() {
    // console.log('sign up...', this.props.navigation);
    this.props.navigation.navigate('LeaderBoard');
  }

  signIn() {
    this.props.navigation.navigate('SignIn');
  }

  loginWithFacebook() {
    console.log('login.. facebook');
  }

  loginWithGoogle() {
    console.log('login.. google');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: 'rgba(83, 85, 119, 1)',
    // alignItems: 'center',
    paddingTop: 60,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300
  },
  inputContainer: {
    height: 50,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
  },
  input: {
    flex: 1,
    height: 30,
    paddingLeft: 5,
    marginLeft: 10,
    marginRight: 10,
    color: '#fff',
    borderBottomColor: '#ededed',
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
  },
  signUpBtnContainer: {
    flex:1,
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  signInBtnContainer: {
    flex:1,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  signUpBtnText: {
    color: 'rgba(83, 85, 119, 1)'
  },
  signInBtnText: {
    color: '#fff'
  },
  sectionLineContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 30,
    marginLeft: 80,
    marginRight: 80,
  },
  sectionLine: {
    width: 150,
    borderBottomColor: 'rgba(255,255,255, 0.3)',
    borderBottomWidth: 1,
    borderRadius: 30,
  },
  loginIconContainer: {
    marginLeft: 10,
    marginRight: 10
  }
});
