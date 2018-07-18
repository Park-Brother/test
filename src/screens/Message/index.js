import React, {Component} from 'react';
import {
  KeyboardAvoidingView, View,
  Keyboard, FlatList, Text, TextInput, Button, TouchableOpacity, Alert
} from 'react-native';

import styles from './styles';

export default class DM extends Component {

  static navigationOptions = ({navigation}) => {
    const removeItem = navigation.state.params.removeItem;
    return {
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
    }
  }

  componentDidMount () {
   // this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
   // this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
 }

 componentWillUnmount () {
   // this.keyboardDidShowListener.remove();
   // this.keyboardDidHideListener.remove();
 }

 _keyboardDidShow () {
   console.log('keyboardDidShow..')
 }

 _keyboardDidHide (e) {
   console.log('keyboardDidHide..')
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
      }
    ];
  }

  render() {
    const {items, owner} = this.state;
    let prevOwner;
    return (
      <KeyboardAvoidingView style={[styles.container]} behavior="padding" enabled keyboardVerticalOffset={65}>
        <TouchableOpacity style={[styles.listContainer]} onPress={()=>{Keyboard.dismiss}} activeOpacity={1}>
          <FlatList
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
        </TouchableOpacity>
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
              items: items,
              inputValue: ''
            })
            Keyboard.dismiss();
          }}/>
        </View>
      </KeyboardAvoidingView>
    );
  }
}