import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, FlatList, Modal, Image, TouchableOpacity, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Row from '../../components/Row';
import Write from '../../screens/Write';
import ListCard from '../../components/ListCard';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import {getFeeds} from '../../actions/Fetch';

import {LIST_BACKGROUND} from "../../styles";


class Feed extends Component {

  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params;
    return ({
      title: `Feed`,
      headerBackTitle: null,
      //md-add
      //ios-add-circle
      headerRight: (
          <Ionicons name="ios-create-outline"
                    size={30}
                    style={styles.headerBtn}
                    onPress={()=> navigation.navigate('Write')}
          ></Ionicons>
      ),
      headerStyle: {
        backgroundColor: '#fff',
      },
    });
  }

  constructor(props) {
    super();

    this.openModal = this.openModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.getItems = this.getItems.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
    this.onEndReached = this.onEndReached.bind(this);

    this.state = {
      page: 1,
      size: 10,
      items: [],
      refreshing: false,
      modalVisible: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const {items} = nextProps;
    const {refreshing} = this.state;

    if (refreshing) this._initItems(items);
    else {
      this.addItems(items);
    }
    this._initRefreshing();
  }

  componentDidMount() {
    const {openModal} = this;

    this.props.navigation.setParams({
      write: openModal
    });

    this.getItems();
  }

  render() {

    const {items, modalVisible, refreshing} = this.state;

    return (
      <View style={styles.container}>
        <FlatList
            style={styles.list}
            data={items}
            renderItem={({item, index}) => <ListCard item={item}/>}
            keyExtractor={(item, index) => index.toString()}
            onEndReachedThreshold={0.05}
            onEndReached={this.onEndReached}
            refreshing={refreshing}
            onRefresh={this.onRefresh}
          />
        {/*<Modal*/}
            {/*animationType='slide'*/}
            {/*transparent={true}*/}
            {/*visible={modalVisible}>*/}
          {/*<TouchableOpacity*/}
              {/*style={styles.touchableContainer}*/}
              {/*activeOpaticty={1}*/}
              {/*onPress={this.hideModal}>*/}
            {/*<Write/>*/}
          {/*</TouchableOpacity>*/}

        {/*</Modal>*/}
      </View>
    );
  }

  getItems() {
    const {page, size} = this.state;
    this.props._getItems({page, size});
  }

  openModal() {
    this.setState({
      modalVisible: true,
    });
  }

  hideModal() {
    this.setState({
      modalVisible: false
    });
  }

  addItems(newItems) {
    const {items} = this.state;
    this.setState({
      items: items.concat(...newItems)
    });
  }

  onRefresh() {
    this._initPageAndGetItems();
  }

  onEndReached() {
    this._increasePageAndGetItems();
  }

  _initItems(items) {
    this.setState({items});
  }

  _initRefreshing() {
    this.setState({
      refreshing: false
    });
  }

  _initPageAndGetItems() {
    this.setState({
      page: 1,
      refreshing: true
    }, this.getItems);
  }

  _increasePageAndGetItems() {
    let {page} = this.state;
    const {loading} = this.props;

    if (loading) return;

    this.setState({
      page: page + 1
    }, this.getItems);
  }
}

Feed = connect(
  (state) => ({
    items: state.feed.items,
    loading: state.feed.loading,
  }),
  (dispatch) => ({
    _getItems: (data) => dispatch(getFeeds(data))
  })
)(Feed);

const styles = StyleSheet.create({
  headerBtn: {
    marginRight: 15
  },
  container: {
    flex: 1,
    backgroundColor: LIST_BACKGROUND
  },
  list: {
    flex: 1,
    backgroundColor: LIST_BACKGROUND
  },
  touchableContainer: {
    flex: 1
  },


});


export default Feed;