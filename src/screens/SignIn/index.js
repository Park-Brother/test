import React, {Component} from 'react';
import {connect} from "react-redux";
import {StyleSheet, KeyboardAvoidingView, Animated, Image, Keyboard, TextInput, View, TouchableOpacity, Text} from 'react-native';
import FBSDK, {LoginManager, AccessToken} from 'react-native-fbsdk';
import { GoogleSignin } from 'react-native-google-signin';


const IMAGE_HEIGHT = 250;
const IMAGE_HEIGHT_SMALL = 100;

class SignIn extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `SignIn`,
  });

  constructor(props) {
    super();
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
    };
    const userSource = require('../../../img/user.png');
    const passwordSource = require('../../../img/key.png');
    const facebookSource = require('../../../img/facebook-circular-logo.png');
    const googleSource = require('../../../img/google-logo.png');

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={50}>
        <View style={styles.imageContainer}>
          <Animated.Image style={[styles.image, {width: this.imageHeight, height: this.imageHeight}]}
                          source={logo}
                          />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.icon} source={userSource}/>
          <TextInput style={styles.input}
                     placeholder="ID"
                     placeholderTextColor="#ebebeb"/>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.icon} source={passwordSource}/>
          <TextInput style={styles.input}
                     placeholder="Password"
                     secureTextEntry={true}
                     placeholderTextColor="#ebebeb"/>
        </View>
        <View style={styles.inputContainer}>
          <TouchableOpacity activeOpacity={1} style={styles.signUpBtnContainer} onPress={this.signIn.bind(this)}>
            <View>
              <Text style={styles.signUpBtnText}>Sign In</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signInBtnContainer} onPress={this.signUp.bind(this)}>
            <View>
              <Text style={styles.signInBtnText}>Sign Up</Text>
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
    );
  }

  signUp() {
    // console.log('sign up...', this.props.navigation);
    this.props.navigation.navigate('SignUp');
  }

  signIn() {

    this.props.navigation.navigate('LeaderBoard');
  }

  loginWithFacebook() {
    console.log('login.. facebook');
    LoginManager.logInWithReadPermissions(['public_profile'])
        .then(
          res => {
            if (res.isCancelled) {
              alert('Login cancelled');
            } else {
              // alert('Login success with permissions: '
              //     +res.grantedPermissions.toString());
              AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data);
                    alert(data.accessToken.toString())
                  }
              )
            }
          },
          err => {
            console.log('err', err);
          }
        );
  }

  loginWithGoogle() {
    console.log('login.. google');
    GoogleSignin.configure({
      iosClientId: '713823639892-lcsa7cmprch1ek74906mjj57v5gtauod.apps.googleusercontent.com', // only for iOS
    }).then(() => {
      GoogleSignin.revokeAccess()
        .then(() => {
          GoogleSignin.signOut().then(() => {
            GoogleSignin.signIn()
              .then(
                  (user)=> {
                    alert(user.accessToken);
                    console.log(user.accessToken);
                  },
                  (err) => {

                  }
              );
          })
        });

    });

  }
}

SignIn = connect(
    (state) => ({

    }),
    (dispatch) => ({

    })
)(SignIn);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(83, 85, 119, 1)',
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
    // borderBottomStyle: 'solid',
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

export default SignIn;