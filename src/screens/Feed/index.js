import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, FlatList} from 'react-native';

import FeedCard from '../../components/FeedCard';
import {getFeeds} from '../../actions/Feed';
import styles from './styles';

class Feed extends Component {
    constructor(props) {
      super(props);
      this.props.test('mth-bs-park');
      this.state = {
        refreshing: false,
        items: [{}, {}],
      };
      this.onListItemsChanged = this.onListItemsChanged.bind(this);
    }
    static aa = {
      waitForInteraction: false,
      viewAreaCoveragePercentThreshold: 95
    }
    render() {
      const {refreshing, items} = this.state;
      const {loading} = this.props.data;

      return (
        <View style={styles.container}>
          <FlatList
            style={styles.listContainer}
            data={items}
            renderItem={({item}) => <FeedCard item={item} height={250}/>}
            keyExtractor={(item, index) => index}
            refreshing={refreshing}
            onRefresh={this.refresh.bind(this)}
            onViewableItemsChanged={this.onListItemsChanged}
            onEndReached={()=>{console.log('end:::')}}
            />
        </View>
      )
    }

    refresh() {
      // this.props.test('mth-bs-park');
      this.setState({
        refreshing: true,
      });
      // 아래 코드 onListItemsChanged 에 추가시, rendering 순서가 꼬여서 제대로 안돌아가니 이부분에서 처리하도록 한다..
      setTimeout(() => {
        this.setState({
          items: [{}, {}, {}],
          refreshing: false,
        });
      }, 1000);
    }

    onListItemsChanged(info) {
      // console.log('items chage...', this.state.refreshing)
      this.setState({
        refreshing: false,
      });
    }
}

const mapStateToProps = (state) => {
  return {
    data: state.feed
  }
};

const mapDispatchToProps = (dispatch) => ({
  test: () => {dispatch(getFeeds())}
})

Feed = connect(mapStateToProps, mapDispatchToProps)(Feed);

export default Feed;
