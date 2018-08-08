import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import Row from './Row';

export default class ListItem extends Component {

  constructor(props) {
    super();
  }

  render() {

    const children = this.props.children;

    return (
      <Row style={[styles.container, styles.row]}>
        {children}
      </Row>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  },
});

