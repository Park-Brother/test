import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';

import Thumbnail from '../../components/Thumbnail';
import TabMenu from '../../components/TabMenu';
import TintModal from '../../components/TintModal';

import styles from './styles';

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
    const visible = this.state.modalVisible;
    const id = 'IDIDIDIDIDID';

    return (
      <View style={styles.container}>
        <View style={styles.userInfoContainer}>
          <View style={styles.thumbnailContainer}>
            <View>
              <Thumbnail size={90} shrink={3}/>
              <TouchableOpacity onPress={this.openModal.bind(this)} activeOpacity={1}>
                <View style={styles.editBtn}>
                  <Image style={styles.camera} source={require('../../../img/camera.png')}/>
                </View>
              </TouchableOpacity>
              <Text style={styles.id}> {id} </Text>
            </View>
          </View>
          <View style={styles.sectionLine}></View>
          <View style={styles.infoContainer}>

            <TouchableOpacity onPress={this.logout.bind(this)} activeOpacity={1}>
              <View style={{borderRadius: 3, borderColor: '#ededed', borderWidth: 1, paddingTop: 5, paddingBottom: 5, paddingLeft: 12, paddingRight: 8}}>
                <Image style={{width: 20, height: 20}} source={require('../../../img/logout.png')}/>
              </View>
            </TouchableOpacity>

          </View>
        </View>
        <TabMenu items={items}/>
        <FlatList
          style={styles.list}
          data={listItems}
          renderItem={({item}) => <Text>{item.label}</Text>}
          keyExtractor={(item, index) => index}
        />

        <TintModal visible={visible} items={modalItems}/>
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
    // console.log('kkk', this.props.navigation);
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