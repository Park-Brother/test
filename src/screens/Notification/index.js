import React, {Component} from 'react';
import {connect} from "react-redux";
import {StyleSheet, View, FlatList, Modal, Text, TouchableOpacity, Animated} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Thumbnail from "../../components/Thumbnail";
import ListItem from "../../components/ListItem";
import Row from '../../components/Row';
import Col from '../../components/Col';

import {LIST_BACKGROUND} from "../../styles";
import {getNotifications} from "../../actions/Fetch";

class Notification extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `Notification`,
    headerStyle: {
      backgroundColor: '#fff',
    }
  });

  constructor(props) {
    super(props);

    this.onEndReached = this.onEndReached.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
    this.openModal = this.openModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

    this.state = {
      page: 1,
      size: 10,
      items: [],
      refreshing: false,
      modalVisible: false,
      selectedItemIdx: -1,
      selectedItems: null,
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
    this.getItems();
  }

  render() {

    const {items, refreshing, modalVisible, selectedItems} = this.state;

    return (
        <View style={styles.container}>
          <FlatList
              style={styles.list}
              data={items}
              renderItem={({item, index}) => this.createItem(item, index)}
              keyExtractor={(item) => item.notificationId}
              onEndReachedThreshold={0.05}
              onEndReached={this.onEndReached}
              refreshing={refreshing}
              onRefresh={this.onRefresh}
          />
          {
            selectedItems &&
            <Modal
                animationType='fade'
                transparent={true}
                visible={modalVisible}>
              <TouchableOpacity
                  style={styles.touchableContainer}
                  activeOpacity={1}
                  onPress={this.hideModal}>
                <View style={[styles.dim]}>
                  <TouchableOpacity activeOpacity={1}>
                    <View style={styles.modalContentContainer}>
                      <View style={styles.contentContainer}>
                        <View>
                          <Thumbnail url={selectedItems.from.thumbnailURL} size={50}/>
                        </View>
                        <View style={styles.modalTextContainer}>
                          <Text style={styles.modalText}>{selectedItems.content}</Text>
                        </View>
                      </View>
                      <TouchableOpacity style={styles.touchableContainer} activeOpacity={1}
                                        onPress={this.deleteItem}>
                        <Row style={styles.footerContainer}>
                          <Col>
                            <Ionicons name='ios-checkbox-outline'
                                      size={30}/>
                          </Col>
                          <Col style={styles.footerTextContainer}>
                            <Text style={styles.footerText}>Hide this notification.</Text>
                          </Col>
                        </Row>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </Modal>
          }
        </View>
    );
  }

  addItems(newItems) {
    const {items} = this.state;
    this.setState({
      items: items.concat(...newItems)
    });
  }

  createItem(item, index) {
    const {from} = item;

    return (
      <ListItem>
        <Col>
          <Thumbnail url={from.thumbnailURL}/>
        </Col>
        <Col style={styles.itemCenterContainer}>
          <Text>{item.content}</Text>
        </Col>
        <Col style={styles.itemRightContainer}>
          <Ionicons name="ios-more" size={30} onPress={this.openModal.bind(this, item, index)}/>
        </Col>
      </ListItem>
    );
  }

  onEndReached() {
    this._increasePageAndGetItems();
  }

  onRefresh() {
    this._initPageAndGetItems();
  }

  openModal(item, index) {
    this.setState({
      modalVisible: true,
      selectedItems: item,
      selectedItemIdx: index
    });
  }

  hideModal() {
    this.setState({
      modalVisible: false
    });
  }

  deleteItem() {
    let {items, selectedItemIdx} = this.state;

    this.hideModal();
    items.splice(selectedItemIdx, 1);
    this.setState({items});
    // TODO - delete 요청 보내기
  }

  getItems() {
    let {page, size} = this.state;
    this.props._getItems({page, size});
  }

  _initItems(items) {
    this.setState({items});
  }

  _initPageAndGetItems() {
    this.setState({
      page: 1,
      refreshing: true
    }, this.getItems);
  }

  _initRefreshing() {
    this.setState({
      refreshing: false
    });
  }

  _increasePageAndGetItems() {
    let {page} = this.state;

    this.setState({
      page: page + 1
    }, this.getItems);
  }
}

Notification = connect(
    (state) => ({
      items: state.notification.items
    }),
    (dispatch) => ({
      _getItems: (data) => dispatch(getNotifications(data)),
    })
)(Notification);

const styles = StyleSheet.create({
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
  dim: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContentContainer: {
    minHeight: 140,
    backgroundColor: '#fff',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingTop: 10
  },
  contentContainer: {
    alignItems: 'center'
  },
  modalTextContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  modalText: {
    height: 20, flexWrap: 'wrap'
  },
  footerContainer: {
    borderTopWidth: 0.5,
    borderTopColor: '#e0e0e0',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
  },
  footerTextContainer: {
    marginLeft: 10,
  },
  footerText: {
    fontSize: 15
  },
  itemCenterContainer: {
    marginLeft: 20,
    flex: 1
  },
  itemRightContainer: {
    minWidth: 35,
    alignItems: 'flex-end'
  },
  more: {
    width: 15,
    height: 15,
  }
});

export default Notification;