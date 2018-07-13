import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Thumbnail from './Thumbnail';
import Triangle from './Triangle';

export default class RankingCard extends Component {

  render() {

    const items = this.props.items;
    const style = this.props.style;

    const user = '';
    const country = 'china';

    return (
      <TouchableOpacity onPress={this.a} activeOpacity={1} style={styles.container}>
        <Thumbnail user={user} country={country} size={40}/>
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
        <View style={styles.pointContainer}>
          <Text style={styles.point}>100,000 p</Text>
        </View>
      </TouchableOpacity>
    );
  }

  a() {
    console.log('12313');
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: 70,
    borderStyle: 'solid',
    borderColor: '#ededed',
    borderBottomWidth: 1,
    paddingLeft: 15,
  },
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
    marginTop: 25,
    marginBottom: 25,
    backgroundColor: '#ebebeb',
    borderRadius: 8,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 5,
    paddingRight: 5
  },
  point: {
    color: '#4a4a4a',
    fontSize: 10,
    fontWeight: '600',
  }
});
