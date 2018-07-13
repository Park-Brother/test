import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import Thumbnail from './Thumbnail';

export default class ChatCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.item;
    const onPress = this.props.onPress;

    return (
      <TouchableOpacity style={styles.container} activeOpacity={1}
        onPress={()=>{onPress && onPress()}}>
        <Thumbnail user={item.user.profile} country={item.user.country} size={40}/>
        <View style={styles.textContainer}>
          <Text style={styles.from}>{item.from}</Text>
          <Text style={styles.msg}>{item.contents.latestMsg}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>
            {item.contents.date}
          </Text>
          {
            item.contents.noneReadBadge &&
            <View style={styles.badgeContainer}>
              <Text style={styles.badge}>
               {item.contents.noneReadBadge}
              </Text>
            </View>
          }
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    height: 52,
    borderStyle: 'solid',
    borderColor: '#ededed',
    borderBottomWidth: 1,
    paddingLeft: 15,
    height: 70,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
  },
  from: {
    color: '#4a4a4a',
    fontSize: 12,
    fontWeight: '600',
  },
  msg: {
    color: '#4a4a4a',
    fontSize: 10,
    fontWeight: '600',
  },
  dateContainer: {
    marginRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    width: 50,
    flexDirection: 'column',
    alignItems: 'flex-end',
    // justifyContent: 'center',
    // backgroundColor: 'blue'
  },
  date: {
    height: 20,
    fontSize: 12,
    color: '#4a4a4a',
  },
  badgeContainer: {
    marginTop: 5,
    width: 20,
    height: 20,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 1,
  },
  badge: {
    flex: 1,
    lineHeight: 20,
    fontSize: 10,
    color: '#fff'
  }
})
