import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import Thumbnail from '../Thumbnail/index';
import {FEED_CARD_BACKGROUND_COLOR, FEED_CARD_BOARDER_COLOR} from '../../config/styles';
export default class FeedCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {height, item} = this.props;
    const id = 'IDIDIDIDDID';
    const imageSource = this._getRandomImageSource();
    return (
      <View style={[styles.container, {height: height}]}>
        <View style={styles.headerContainer}>
          <Thumbnail />
          <View style={styles.idContainer}>
            <Text>{id}</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image style={{flex:1}} source={imageSource}/>
        </View>
        <View style={styles.contentsContainer}>
          <Text>123123 {item.id}</Text>
        </View>
      </View>
    )
  }

  _getRandomImageSource() {

    const imageSources = [
      {url: 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&h=350'},
      {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwwxB7LPI5wtioiU2PVuObP9JAnjvkOkun71_d2l2_7Nmd5uhGOQ'},
      {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPWRd3YkOC76S9XzMhxfnK_rNa_6JLmog7w8Byou6JJAn9RL8M'},
      {url: 'https://post-phinf.pstatic.net/MjAxNzA2MTlfMiAg/MDAxNDk3ODYwOTE2NDAw.MzMWKM07HtMjuSrCI1jEhwyzWtbLTM4TnGXLRlg5jRkg.Wv9HI_9F4seOMvJrMyqSpFWDKUEpA9j4wyhOEo3CP8Eg.JPEG/%EB%94%94%EC%A6%88%EB%8B%88_%EB%A7%8C%ED%99%94_%EC%86%8D_%EC%8B%A4%EC%A0%9C%EB%B0%B0%EA%B2%BD.jpg?type=w1200'},
      {url: 'https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/1ibV/image/GdgCRRYDpKf_tTMFNuDU3QDe56g.jpg'},
      {url: 'https://www.popco.net/zboard/data/dica_forum_panasonic/2017/01/18/462248137587eecd30e2f6.jpg'},
      {url: 'http://community.sellfree.co.kr/data/cheditor4/1803/009_AVYFpkfa.jpg'},
    ];

    const idx = Math.floor(Math.random() * imageSources.length);

    return Object.assign(imageSources[idx], {
      cache: 'cache-if-only'
    });
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: FEED_CARD_BACKGROUND_COLOR,
    borderBottomColor: FEED_CARD_BOARDER_COLOR,
    borderBottomWidth: 1,
    marginBottom: 5,
    flex: 1,
  },
  headerContainer: {
    height: 60,
    flexDirection: 'row',
    borderBottomColor: FEED_CARD_BOARDER_COLOR,
    borderBottomWidth: 1,
    borderTopColor: FEED_CARD_BOARDER_COLOR,
    borderTopWidth: 1,
    paddingLeft: 15,
    alignItems: 'center'
  },
  idContainer: {
    marginLeft: 15,
  },
  imageContainer: {
    height: 150,
    overflow: 'hidden',
  },
  contentsContainer: {
    flex: 1,
    paddingLeft: 15,
    alignItems: 'flex-start',
    justifyContent: 'center',
  }
})
