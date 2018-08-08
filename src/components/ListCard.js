import React, {Component} from 'react';
import {StyleSheet, Image, Text, Dimensions} from 'react-native';

import Row from './Row';
import Col from './Col';
import Thumbnail from "./Thumbnail";

const IMAGE_WIDTH = Dimensions.get('window').width;
const IMAGE_HEIGHT = 150;

export default class ListCard extends Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const {item} = this.props;
    const {winner, loser} = item;

    return (
      <Col style={styles.cardContainer}>
        <Row style={styles.cardHeaderContainer}>
          <Col>
            <Thumbnail size={40} url={winner.thumbnailURL}/>
          </Col>
          <Col style={styles.nameContainer}>
            <Text>{winner.name}</Text>
          </Col>
        </Row>
        <Row style={styles.cardImageContainer}>
          <Image style={{width: IMAGE_WIDTH, height: IMAGE_HEIGHT}}
                 source={{uri: item.imageUrl}}/>
        </Row>
        <Row style={styles.cardFooterContainer}>
          <Col>
            <Text>{item.content}</Text>
          </Col>
        </Row>
      </Col>
    );
  }
}


const styles = StyleSheet.create({
  cardContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    marginBottom: 10,
    backgroundColor: '#fff'
  },
  cardHeaderContainer: {
    height: 50,
    padding: 10,
  },
  nameContainer: {
    marginLeft: 20,
  },
  cardImageContainer: {
    height: IMAGE_HEIGHT,
    maxHeight: IMAGE_HEIGHT,
  },
  cardFooterContainer: {
    minHeight: 50,
    maxHeight: 100,
    padding: 10,
    flexWrap: 'wrap'
  }
});