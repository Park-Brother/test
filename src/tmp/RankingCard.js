import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Thumbnail from '../components/Thumbnail';
import Triangle from '../components/Trianle/Triangle';
import ListItem from '../components/ListItem/index';

export default class RankingCard extends Component {

  render() {

    const items = this.props.items;
    const style = this.props.style;

    const user = '';
    const country = 'china';

    const left = (<Thumbnail user={user} country={country} size={40}/>);
    const mid = (
      <View style={styles.textContainer}>
        <View style={styles.orderContainer}>
          <Text style={styles.order}>999999</Text>
          <Triangle direction='up'/>
          <Text style={styles.orderChange}>999999</Text>
        </View>
        <View >
          <Text style={styles.name}>Country Name</Text>
        </View>
      </View>
    );

    const right = (
        <View style={styles.pointContainer}>
          <Text style={styles.point}>100,00000000000 P</Text>
        </View>
    );

    return (
      <TouchableOpacity onPress={this.a} activeOpacity={1}>
        <ListItem left={left} mid={mid} right={right}/>
      </TouchableOpacity>
    );
  }

  a() {
    console.log('12313');
  }
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 10,
  },
  orderContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  order: {
    color: '#4a4a4a',
    fontSize: 12,
    fontWeight: '600'
  },
  orderChange: {
    color: '#4a4a4a',
    fontSize: 10,
    fontWeight: '600',
    marginLeft: 3,
  },
  name: {
    color: '#4a4a4a',
    fontSize: 10,
    fontWeight: '300'
  },
  pointContainer: {
    marginRight: 15,
    justifyContent: 'center',
    backgroundColor: '#ebebeb',
    borderRadius: 10,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 5,
    paddingRight: 5
  },
  point: {
    color: '#4a4a4a',
    fontSize: 10,
    fontWeight: '600'
  }
});
