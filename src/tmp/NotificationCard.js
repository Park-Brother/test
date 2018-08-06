import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image, Modal} from 'react-native';

import Thumbnail from '../components/Thumbnail';
import ListItem from '../components/ListItem/index';

export default class NotificationCard extends Component {

  render() {
    const left = <Thumbnail size={40} />;
    const mid = (
        <View>
          <Text style={styles.msg}>테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑</Text>
          <Text style={styles.date}>4일 전</Text>
        </View>
    );

    const right = (
        <TouchableOpacity activeOpacity={1} onPress={this.openModal.bind(this)}>
          <Image style={styles.icon} source={require('../../img/more.png')}/>
        </TouchableOpacity>
    );

    return (
        <ListItem left={left} mid={mid} right={right}/>
    );
  }

  openModal() {
    console.log('click openModal')
  }
}

const styles = StyleSheet.create({
  msg: {
    fontSize: 12,
    maxHeight: 40,
    // backgroundColor: 'red'
  },
  date: {
    marginTop: 5,
    fontSize: 12,
    color: '#9E9E9E',
  },
  icon: {
    width: 15, height: 15
  }
});
