import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import Thumbnail from '../components/Thumbnail';
import ListItem from '../components/ListItem/index';

export default class ChatCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.item;
    const onPress = this.props.onPress;

    const left = (<Thumbnail user={item.user.profile} country={item.user.country} size={40}/>);
    const mid = (
        <View>
          <Text style={styles.from}>{item.from}</Text>
          <Text style={styles.msg}>{item.contents.latestMsg}</Text>
        </View>
    );
    const right = (
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
    );

    return (
      <TouchableOpacity activeOpacity={1}
                        onPress={()=>{onPress && onPress()}}>
        <ListItem left={left} mid={mid} right={right}/>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
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
    paddingTop: 5,
    paddingBottom: 5,
    width: 50,
    flexDirection: 'column',
    alignItems: 'flex-end',
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
