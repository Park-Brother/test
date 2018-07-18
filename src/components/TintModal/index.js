import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Modal
} from 'react-native';
import ModalItem from './item';

export default class TintModal extends Component {

  render() {

    let {animationType, visible, items} = this.props;

    if (!animationType || !animationType.trim()) animationType = 'slide';

    return (
      <Modal
          animationType={animationType}
          transparent={true}
          visible={visible}
        >
        <View style={styles.modal}>
          {
            items.map(item => <ModalItem item={item}/>)
          }
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }
});