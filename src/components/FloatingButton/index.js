import React, {Component} from  'react';
import {StyleSheet, Animated, View, TouchableHighlight, Image} from 'react-native';
import {
  FLOATING_BTN_BACKGROUND_COLOR,
  FLOATING_BTN_SHADOW_COLOR,
  FLOATING_BTN_SHADOW_OFFSET,
  FLOATING_BTN_SHADOW_OPACITY
} from "../../config/styles";

export default class FloatingButton extends Component {

  constructor(props) {
    super(props);

    // this.state = {
    //
    // }

    this._onPress = props.onPress;
    // animation variables
    // this.folding = true;
    this.state = {
      folding: props.folding
    };
    this.opacity = new Animated.Value(0);
  }

  componentWillReceiveProps(props) {
    this.setState({
      folding: props.folding
    })
    // state 상태가 비동기로 진행되기 때문에, 비동기로 실행해준다.
    setTimeout(() => {
      this.onPrePress();
    })
  }

  render() {

    const {items, bottom} = this.props;
    const length = items.length;

    return (
      <View style={[styles.container, {bottom}]}>
        {
          items && items.map((v, i) => {

            const { icon, onPress } = v;
            const basePosition = 60;
            const position = basePosition * (length  - i);
            const _onPress = (i) => {
              this.onPrePress();
              onPress && onPress(i);
            }

            return (
              <Animated.View key={i} style={[styles.childButton, {transform: [{
               translateY: this.opacity.interpolate({
                 inputRange: [0, 1],
                 outputRange: [position, 0]
               })
              }],
              opacity: this.opacity}]}>
                <TouchableHighlight onPress={_onPress.bind(this, i)} style={[styles.boltContainer]}>
                    <Image source={icon}
                          style={styles.bolt}/>
                </TouchableHighlight>
              </Animated.View>
            )
          })
        }

        <TouchableHighlight onPress={this.onPress.bind(this)} style={styles.boltContainer}>
            <Image source={require('../../../img/bolt.png')}
                  style={styles.bolt}/>
        </TouchableHighlight>
      </View>
    );
  }

  onPress(i) {
    this.onPrePress();
    this._onPress && this._onPress();
  }

  onPrePress() {
    Animated.parallel([
      Animated.timing(this.opacity, {
        duration: 200,
        toValue: this.state.folding ? 0 : 1
      })
    ]).start();
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 15,
  },
  boltContainer: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: FLOATING_BTN_BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: FLOATING_BTN_SHADOW_COLOR,
    shadowOffset: FLOATING_BTN_SHADOW_OFFSET,
    shadowOpacity: FLOATING_BTN_SHADOW_OPACITY,
    shadowRadius: 2,
  },
  bolt: {
    width: 40,
    height: 40
  },
  childButton: {
    position: 'relative',
    marginBottom: 15
  },
});
