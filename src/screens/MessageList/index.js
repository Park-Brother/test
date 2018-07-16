import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList, View, TouchableOpacity, Text} from 'react-native';

import Thumbnail from '../../components/Thumbnail';
import ListItem from '../../components/ListItem';
import styles from './styles';

class MessageList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: this._createListItem()
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.items}
          style={styles.listContainer}
          renderItem={({index: i, item}) => this.getListItemTemplate(item, i)}
          keyExtractor={(item, index) => index}
          />
      </View>
    )
  }

  removeItem(i) {
    const items = this.state.items;
    items.splice(i, 1);
    this.setState({
      items
    });
  }

  onPressItem(item, i) {
    this.props.navigation.navigate('Message', {
      ...item,
      removeItem: this.removeItem.bind(this, i)
    })
  }

  getListItemTemplate(item, i) {
    const left = (
        <Thumbnail user={item.user.profile}
                   country={item.user.country} size={40}/>
    );
    const mid = (
        <View>
          <Text style={styles.from}>{item.from}</Text>
          <Text style={styles.msg}>{item.contents.latestMsg}</Text>
        </View>
    );
    const right = (
        <View style={styles.dateContainer}>
          <Text style={styles.date}>
            {item.contents.date}
          </Text>
          {
            item.contents.noneReadBadge &&
            <View style={styles.badgeContainer}>
              <Text style={styles.badge}>
                {item.contents.noneReadBadge}
              </Text>
            </View>
          }
        </View>
    );

    return (
      <TouchableOpacity activeOpacity={1}
                        onPress={this.onPressItem.bind(this, item, i)}>
        <ListItem left={left} mid={mid} right={right}/>
      </TouchableOpacity>
    );
  }

  _createListItem() {
    return [
      {
        from: 'test1',
        contents: {
          date: '05.01',
          latestMsg: 'aaaaaa',
          noneReadBadge: 0,
        },
        user: {
          country: 'china',
          profile: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
        }
      },
      {
        from: 'test2',
        contents: {
          date: '05.08',
          latestMsg: 'bbbbbb',
          noneReadBadge: 1,
        },
        user: {
          country: 'germany',
          profile: ''
        }
      },
      {
        from: 'test3',
        contents: {
          date: '05.11',
          latestMsg: 'cccccc',
          noneReadBadge: 12,
        },
        user: {
          country: 'united-states',
          profile: ''
        }
      },
      {
        from: 'test4',
        contents: {
          date: '05.12',
          latestMsg: 'dddddddddqer',
          noneReadBadge: 0,
        },
        user: {
          country: 'japan',
          profile: ''
        }
      },
      {
        from: 'test5',
        contents: {
          date: '08.11',
          latestMsg: 'eeeeee',
          noneReadBadge: 0,
        },
        user: {
          country: 'korea',
          profile: ''
        }
      }
    ];
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

MessageList = connect()(MessageList);

export default MessageList;
