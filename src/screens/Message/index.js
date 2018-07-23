import React, {Component} from 'react';
import {
  KeyboardAvoidingView, View,
  Keyboard, FlatList, Text, TextInput, Button, TouchableOpacity, Alert
} from 'react-native';

import styles from './styles';

class Message extends Component {

  static navigationOptions = ({navigation}) => {
    const removeItem = navigation.state.params.removeItem;
    console.log(navigation.state.params);
    return {
      title: `${navigation.state.params.from}`,
      headerRight: (
        <Button
          onPress={() => {
            Alert.alert(
              '',
              '나갈꺼야 ..??',
              [
                {text: 'Cancel', style: 'cancel'},
                {text: 'OK', onPress: () => {
                    navigation.navigate('MessageList');
                    removeItem();
                }}
              ],
              { cancelable: false }
            )
            // removeItem();
          }}
          title="나가기.."
        />
      ),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      owner: 'b',
      items: this._createChatContents(),
      inputValue: '',
    };

    setTimeout(()=>{
      this.list.scrollToEnd();
    }, 1000);
    this.list = null;
  }

  componentWillReceiveProps(nextProps) {
    this.list.scrollToEnd();
  }

  _createChatContents(){
    return [
      {
          contents: 'aaaaasdfadsfdasfadsfadsffdfadsfadsfdsfadsfadsfdsfsadfasdfasdfadsfafasfasfa',
          owner: 'a',
      },
      {
          contents: 'aaaaa',
          owner: 'a',
      },
      {
          contents: 'aaaaa',
          owner: 'b',
      },
      {
          contents: 'aaaaa',
          owner: 'a',
      },
      {
          contents: 'aaaaa',
          owner: 'a',
      },
      {
          contents: 'aaaaa',
          owner: 'a',
      },
      {
          contents: 'aaaaa',
          owner: 'a',
      },
      {
          contents: 'aaaaa',
          owner: 'a',
      },
      {
          contents: 'aaaaa',
          owner: 'a',
      },
      {
          contents: '1',
          owner: 'a',
      },
      {
          contents: '2',
          owner: 'a',
      },
      {
          contents: '3',
          owner: 'a',
      },
      {
          contents: '4',
          owner: 'a',
      },
      {
          contents: '5',
          owner: 'a',
      },
      {
          contents: '6',
          owner: 'a',
      },
      {
          contents: '7',
          owner: 'a',
      },

    ];
  }

  render() {
    const {items, owner} = this.state;
    let prevOwner;

    return (
      <KeyboardAvoidingView style={[styles.container]} behavior="padding" enabled keyboardVerticalOffset={65}>
        <FlatList
          ref={(list) => this.list = list}
          style={[styles.listContainer]}
          data={items}
          renderItem={({item}) => {
            const isOwner = item.owner === owner;
            const isEqualPrevOwner = prevOwner === item.owner;
            const msgContainer = isOwner ? [styles.msgContainer, styles.rightMsgContainer] : [styles.msgContainer];
            const style = isOwner ? styles.right : styles.left;
            const triangle = isOwner ? styles.triangleRight : styles.triangleLeft;

            prevOwner = item.owner;

            return (
              <View style={[style, {paddingTop: 5, paddingBottom: 5, position: 'relative'}]}>
                <View style={[msgContainer]}>
                  <Text style={styles.msg}>{item.contents}</Text>
                </View>
                {
                  !isEqualPrevOwner &&
                    <View style={triangle}/>
                }
              </View>
            );
          }}
          keyExtractor={(item, index) => index}
          />
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} multiline={true} value={this.state.inputValue} onChangeText={(value) => this.setState({inputValue: value})}/>
          <Button title="send" style={{width: 50,}} onPress={()=>{
            // console.log('TODO - send msg');
            const {items, owner, inputValue} = this.state;
            console.log(inputValue);

            items.push({
                contents: inputValue,
                owner: owner
            });
            this.setState({
              items,
              inputValue: ''
            });
            this.list.scrollToEnd();
          }}/>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Message;