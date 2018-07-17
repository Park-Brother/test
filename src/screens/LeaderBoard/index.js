import React, {Component} from 'react';
import { connect } from 'react-redux';
import { FlatList, Text, View, TouchableOpacity} from 'react-native';

import TabMenu from '../../components/TabMenu';
import Thumbnail from '../../components/Thumbnail';
import Triangle from '../../components/Trianle';
import ListItem from '../../components/ListItem';

import {show, hide} from '../../actions/Dim';
import {setItems, toggle} from '../../actions/FloatingButton';
import styles from './styles';

class LeaderBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: this._createListItems(0),
      floatBtnItem: this._createFloatBtnItems(0),
      tabItems: this._createTabItems(),
    };
    this.props.setItemsForFloatButton(this.state.floatBtnItem);
  }

  _createListItems(idx) {
    let items;
    switch(idx) {
      case 0:
        items = [
          {key: 'Devin'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
          {key: 'Devins'},
          {key: 'Jacksons'},
          {key: 'Jamess'},
          {key: 'Joels'},
          {key: 'Johns'},
          {key: 'Jillians'},
          {key: 'Jimmys'},
          {key: 'Julies'},
        ];
        break;
      default:
        items = [
          {key: 'KR'},
          {key: 'CH'},
          {key: 'US'},
          {key: 'UK'},
          {key: 'JP'}
        ];
        break;
    }
    return items;
  }

  _createFloatBtnItems(idx) {
    let items = [];

      switch(idx) {
        case 0:
          items = [
            {
              icon: require('../../../img/bolt.png'),
              onPress: (i) => {
                alert(1)
                // this.hideDim();
                this.props.toggleFloatingButton();
              }
            },
            {
              icon: require('../../../img/bolt.png'),
              onPress: () => {
                alert(2)
                // this.hideDim();
                this.props.toggleFloatingButton();
              }
            },
            {
              icon: require('../../../img/bolt.png'),
              onPress: () => {
                alert(3)
                // this.hideDim();
                this.props.toggleFloatingButton();
              }
            }
          ];
          break;
        default:
          items = [
            {
              icon: require('../../../img/bolt.png'),
              onPress: () => {
                console.log(1)
                this.props.toggleFloatingButton();
              }
            },
            {
              icon: require('../../../img/bolt.png'),
              onPress: () => {
                console.log(2)
                this.props.toggleFloatingButton();
              }
            }
          ];
          break;
      }
      return items;
  }

  _createTabItems() {
    return [
      {
        label: <Text>Country</Text>,
        onSelected: () => {
          this.setState({
            items: this._createListItems(0),
            floatBtnItem: this._createFloatBtnItems(0),
          });
          this.props.setItemsForFloatButton(this._createFloatBtnItems(0));
        }
      },
      {
        label: <Text>Country</Text>,
        onSelected: () => {
          this.setState({
            items: this._createListItems(1),
            floatBtnItem: this._createFloatBtnItems(1),
          });
          // set 할때, state 사용하면 error 발생한다. 비동기로 state가 변경되기때문에..
          this.props.setItemsForFloatButton(this._createFloatBtnItems(1));
        }
      }
    ];
  }

  render() {

    return (
      <View style={styles.container}>

        <TabMenu items={this.state.tabItems}/>

        <FlatList
          data={this.state.items}
          style={styles.listContainer}
          renderItem={({item}) => this.getListItemTemplate(item)}
          ListFooterComponent={<Text>Loading!!..</Text>}
          onEndReached={()=>{console.log('end!!')}}
          onEndReachedThreshold={0}
          refreshing={false}
          onRefresh={()=>{console.log('refresh')}}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }

  getListItemTemplate(item) {
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
        <TouchableOpacity onPress={this.onPress.bind(this)} activeOpacity={1}>
          <ListItem left={left} mid={mid} right={right}/>
        </TouchableOpacity>
    );
  }

  onPress() {
    console.log('onPress', this.state);
  }
}

const mapStateToProps = (state) => ({
  float: state.float,
});

const mapDispatchToProps = (dispatch) => ({
  showDim: () => dispatch(show()),
  hideDim: () => dispatch(hide()),
  setItemsForFloatButton: (items) => dispatch(setItems(items)),
  toggleFloatingButton: () => dispatch(toggle()),
});

LeaderBoard = connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);

export default LeaderBoard;
