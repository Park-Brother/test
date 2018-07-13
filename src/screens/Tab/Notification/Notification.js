import React, {Component} from 'react';
import { connect } from 'react-redux';
import {StyleSheet, View, Text, FlatList} from 'react-native'

import NotificationCard from '../../../components/NotificationCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    backgroundColor: '#fff'
  }
});

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
      <View>
        <FlatList
          style={styles.list}
          data={items}
          renderItem={({item}) => (<NotificationCard />)}
        />
      </View>
    );
  }
}

Notification = connect(undefined, undefined)(Notification);

export default Notification;
