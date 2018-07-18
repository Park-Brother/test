import React, {Component} from 'react';
import { connect } from 'react-redux';
import {StyleSheet, View, Text, FlatList} from 'react-native'

import NotificationCard from '../../../NotificationCard';
import styles from '../../../../styles/index';

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
          renderItem={({item}) => (<NotificationCard />)}
        />
      </View>
    );
  }
}

Notification = connect(undefined, undefined)(Notification);

export default Notification;
