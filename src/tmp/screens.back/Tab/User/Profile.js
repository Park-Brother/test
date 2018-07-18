import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, Modal, TouchableHighlight} from 'react-native';

import Thumbnail from '../../../../components/Thumbnail';
import TabMenu from '../../../../components/TabMenu/TabMenu';
import ModalItem from '../../../../components/ModalItem';

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listItems: [],
      tabItems: this._createTabItems(),
      modalVisible: false,
      modalItems: this._createModalItems(),
    };
  }

  render() {
    let listItems = this.state.listItems;
    // const items = this._createTabItems();
    const items = this.state.tabItems;
    const modalItems = this.state.modalItems;
    const id = 'IDIDIDIDIDID';
    //<Image style={{width: 30, height: 30, position: 'absolute', bottom: 0, right: 0}} source={require('../../../../img/thumbnail.png')}/>
    return (
      <View style={styles.container}>
        <View style={styles.userInfoContainer}>
          <View style={styles.thumbnailContainer}>
            <View>
              <Thumbnail size={90} shrink={3}/>
              <TouchableHighlight onPress={this.openModal.bind(this)}>
                <View style={styles.editBtn}>
                  <Image style={styles.camera} source={require('../../../../../img/camera.png')}/>
                </View>
              </TouchableHighlight>
              <Text style={styles.id}> {id} </Text>
            </View>
          </View>
          <View style={styles.sectionLine}></View>
          <View style={styles.infoContainer}>

            <TouchableHighlight onPress={this.logout.bind(this)}>
              <View style={{borderRadius: 3, borderColor: '#ededed', borderWidth: 1, paddingTop: 5, paddingBottom: 5, paddingLeft: 12, paddingRight: 8}}>
                <Image style={{width: 20, height: 20}} source={require('../../../../../img/logout.png')}/>
              </View>
            </TouchableHighlight>

          </View>
        </View>
        <TabMenu items={items}/>
        <FlatList
          style={styles.list}
          data={listItems}
          renderItem={({item}) => <Text>{item.label}</Text>}
          keyExtractor={(item, index) => index}
        />

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          >
            <View style={styles.modal}>
              {
                modalItems.map((item) => <ModalItem item={item}/>)
              }
            </View>
        </Modal>

      </View>
    );
  }

  openModal() {
    this.setState({
      modalVisible: true
    });
  }

  hideModal() {
    this.setState({
      modalVisible: false
    });
  }

  logout() {
    console.log('kkk');
    this.props.navigation.navigate('SignUp');
  }

  _createTabItems() {
    return [
      {
        label: <Text>a</Text>,
        onSelected: () => {
          this.setState({
            listItems: this._createListItems(3)
          });
        }
      },
      {
        label: (<Text>ddd</Text>),
        onSelected: () => {
          this.setState({
            listItems: this._createListItems(10)
          });
        }
      },
      {
        label: 'cccc',
        onSelected: () => {
          this.setState({
            listItems: this._createListItems(3)
          })
        }
      }
    ]
  }

  _createListItems(idx = 1) {

    let items = [];

    for (let i = 0; i < idx; i++) {
      let text = `test${i+1}`;
      items.push({
        label: text
      })
    }
    return items;
  }

  _createModalItems() {
    return [
      {
        label: 'open camera',
        onPress: () => {
          console.log('open modal');
          this.hideModal();
        }
      },
      {
        label: 'open library',
        onPress: () => {
          console.log('open library');
          this.hideModal();
        }
      }
    ]
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  userInfoContainer: {
    height: 130,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomColor: '#ededed',
    borderBottomWidth: 1,
  },
  sectionLine: {
    marginTop: 10,
    marginBottom: 10,
    borderLeftWidth: 1,
    borderLeftColor: '#ededed'
  },
  thumbnailContainer: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center'
  },
  editBtn: {
    width: 30,
    height: 30,
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderRadius: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },
  camera: {
    width: 15,
    height: 15
  },
  id: {
    paddingTop: 10,
    overflow: 'hidden'
  },
  infoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flex: 1,
    backgroundColor: '#fff'
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }
});
