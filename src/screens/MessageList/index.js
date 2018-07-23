import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList, View, TouchableOpacity, Text} from 'react-native';

import Thumbnail from '../../components/Thumbnail';
import ListItem from '../../components/ListItem';
import styles from './styles';

import {getMessages} from "../../actions/Fetch";

class MessageList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.props.getMessages();
  }

  componentWillReceiveProps(nextProps) {
    const {items} = nextProps;
    this.setState({
      items
    });
  }

  render() {

    // const {items} = this.props;

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
}

MessageList = connect(
  (state)=> {
    return {
      items: state.message.items
    };
  },
  (dispatch) => {
    return {
      getMessages: (data) => {dispatch(getMessages(data))}
    };
  }
)(MessageList);

export default MessageList;
