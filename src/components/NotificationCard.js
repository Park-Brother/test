import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image, Modal} from 'react-native';

import Thumbnail from './Thumbnail';

export default class NotificationCard extends Component {

  render() {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Thumbnail size={40} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.msg}>테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑</Text>
          <Text style={styles.date}>4일 전</Text>
        </View>
        <View style={styles.rightContainer}>
          <TouchableOpacity activeOpacity={1} onPress={this.openModal.bind(this)}>
            <Image style={styles.icon} source={require('../../img/more.png')}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  openModal() {
    console.log('click openModal')
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 70,
    // justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ededed',
    flexDirection: 'row',
  },
  leftContainer: {
    justifyContent: 'center',
    paddingLeft: 15,
  },
  textContainer: {
    width: 0,
    flexGrow: 1,
    padding: 15,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  msg: {
    // flex: 1,
    flexGrow: 1,
    flexWrap: 'wrap',
    fontSize: 12,
  },
  date: {
    // height: 30,
    marginTop: 5,
    fontSize: 12,
    color: '#9E9E9E',
    // bottom: 0,
  },
  rightContainer: {
    alignItems: 'flex-end',
    width: 40,
    justifyContent: 'center',
    paddingRight: 15,
  },
  icon: {
    width: 15, height: 15
  }
});
