import React, {Component} from 'react';
import { connect } from 'react-redux';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native'

import Thumbnail from '../../components/Thumbnail';
import ListItem from '../../components/ListItem';
import styles from './styles';

class Notification extends Component {

  constructor(props) {
    super();
    this.state = {
      items: [{},{},{},{},{},{},{},{}]
    };
  }

  render() {
    const {items} = this.state;

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.listContainer}
          data={items}
          renderItem={({item}) => this.getListItemTemplate(item)}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }

  getListItemTemplate(item) {
    const left = <Thumbnail size={40} />;
    const mid = (
        <View>
          <Text style={styles.msg}>테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑</Text>
          <Text style={styles.date}>4일 전</Text>
        </View>
    );

    const right = (
        <TouchableOpacity activeOpacity={1} onPress={this.onPress.bind(this, item)}>
          <Image style={styles.icon} source={require('../../../img/more.png')}/>
        </TouchableOpacity>
    );

    return (
        <ListItem left={left} mid={mid} right={right}/>
    );
  }

  onPress(item) {
    console.log('kkkkk', this.state);
    // console.log('kkk', this, item);
  }
}

Notification = connect(undefined, undefined)(Notification);

export default Notification;
