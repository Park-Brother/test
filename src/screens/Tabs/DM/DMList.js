import React, {Component} from 'react';
import {connect} from 'react-redux';
import { StyleSheet, FlatList, Text, View, Button} from 'react-native';

import ChatCard from '../../../components/ChatCard';

class DMList extends Component {

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
          renderItem={({index: i, item}) => (
            <ChatCard item={item} onPress={()=> {
              this.props.navigation.navigate('DM', {
                ...item,
                removeItem: this.removeItem.bind(this, i)
              })
            }}/>
          )}
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

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listContainer: {
    backgroundColor: '#fff'
  }
});

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

DMList = connect()(DMList);

export default DMList;
