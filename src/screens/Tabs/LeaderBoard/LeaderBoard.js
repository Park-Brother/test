import React, {Component} from 'react';
import { connect } from 'react-redux';
import { StyleSheet, FlatList, Text, View, Button} from 'react-native';
import {Header} from 'react-navigation';

import TabMenu from '../../../components/TabMenu';
import RankingCard from '../../../components/RankingCard';
import FloatingButton from '../../../components/FloatingButton';
import Dim from '../../../components/Dim';

import {show, hide} from '../../../actions/Dim';
import {setItems, toggle} from '../../../actions/FloatingButton';

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
              icon: require('../../../../img/bolt.png'),
              onPress: (i) => {
                alert(1)
                // this.hideDim();
                this.props.toggleFloatingButton();
              }
            },
            {
              icon: require('../../../../img/bolt.png'),
              onPress: () => {
                alert(2)
                // this.hideDim();
                this.props.toggleFloatingButton();
              }
            },
            {
              icon: require('../../../../img/bolt.png'),
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
              icon: require('../../../../img/bolt.png'),
              onPress: () => {
                console.log(1)
                this.props.toggleFloatingButton();
              }
            },
            {
              icon: require('../../../../img/bolt.png'),
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
          renderItem={({item}) => <RankingCard items={item.key}/>}
          ListFooterComponent={<Text>Loading!!..</Text>}
          onEndReached={()=>{console.log('end!!')}}
          onEndReachedThreshold={0}
          refreshing={false}
          onRefresh={()=>{console.log('refresh')}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listContainer: {
    backgroundColor: '#fff'
  }
});

const mapStateToProps = (state) => ({
  float: state.float,

})

const mapDispatchToProps = (dispatch) => ({
  showDim: () => dispatch(show()),
  hideDim: () => dispatch(hide()),
  setItemsForFloatButton: (items) => dispatch(setItems(items)),
  toggleFloatingButton: () => dispatch(toggle()),
})

LeaderBoard = connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);

export default LeaderBoard;
