import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  Dimensions
} from 'react-native'

import Thumbnail from '../../components/Thumbnail';
import ListItem from '../../components/ListItem';
import ListSpinner from '../../components/ListSpinner';
import styles from './styles';

import {getNotifications} from "../../actions/Fetch";

class Notification extends Component {

  constructor(props) {
    super(props);

    const {width}= Dimensions.get('window');

    this.state = {
      page: 1,
      size: 10,
      refreshing: false,
      items: props.items,
      modalVisible: false,
      width,
      selectedItem: null,
    };

    props.getItems({page: 1, size: 10});

    this.onRefresh = this.onRefresh.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {items} = nextProps;
    this.setState({
      items,
      refreshing: false
    });
  }

  render() {
    const {items, refreshing, modalVisible, width, selectedItem} = this.state;
    console.log('render::');
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.listContainer}
          data={items}
          refreshing={refreshing}
          onRefresh={this.onRefresh}
          onScrollEndDrag={()=>{console.log('kkkk')}}
          renderItem={({item, index}) => this.getListItemTemplate(item, index)}
          ListFooterComponent={<ListSpinner isShow={true}/>}
          keyExtractor={(item, index) => index}
        />
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalVisible}>
          <TouchableOpacity style={styles.modalContainer} activeOpacity={1}
                            onPress={this.onCloseModal}>
            <View style={styles.modal}>

              <TouchableOpacity activeOpacity={1}>
                <View style={{width, minHeight: 120, backgroundColor: '#fff', borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
                  <View style={{borderBottomColor: '#ebebeb', borderBottomWidth: 1, width, alignItems: 'center', padding: 10}}>
                    <Thumbnail size={40} />
                    <Text>{selectedItem && selectedItem.id} 입니다..</Text>
                  </View>
                  <View style={{paddingLeft: 20, paddingTop: 10}}>
                    <TouchableOpacity activeOpacity={1} onPress={this.deleteItem}>
                      <Text>이 알람 숨기기...ㅋㅋ</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }

  getListItemTemplate(item, index) {
    const left = <Thumbnail size={40} />;
    const mid = (
        <View>
          <Text style={styles.msg}>{index} 테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑 ㅋㅋ테스트틑</Text>
          <Text style={styles.date}>4일 전</Text>
        </View>
    );

    const right = (
        <TouchableOpacity activeOpacity={1} onPress={this.onPress.bind(this, item)}>
          <Image style={styles.icon} source={require('../../../img/more.png')}/>
        </TouchableOpacity>
    );

    return (
        <ListItem left={left} mid={mid} right={right}/>
    );
  }

  onRefresh() {
    this.setState({
      page: 1,
      refreshing: true
    }, ()=> {
      this.props.getItems({page: 1, size: 10});
    });
  }

  onPress(item) {
    console.log(item);
    this.setState({
      modalVisible: true,
      selectedItem: item
    });
    // TODO - modal 로 처리할지 아래쪽에 View 더해서 처리할지 여부 판단.
  }

  onCloseModal() {
    console.log('close');
    this.setState({
      modalVisible: false
    });
  }

  deleteItem() {
    const {selectedItem, items} = this.state;
    const selectedItemIdx = items.indexOf(selectedItem);
    console.log('deleteItem.', selectedItem, selectedItemIdx);
    items.splice(selectedItemIdx, 1);
    this.setState({
      modalVisible: false,
      items
    });
  }
}

Notification = connect((state)=> {
  return {
    items: state.notification.data
  };
}, (dispatch) => {

  return {
    getItems: (data) => dispatch(getNotifications(data))
  };
})(Notification);

export default Notification;
