import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, FlatList} from 'react-native';

import FeedCard from '../../components/FeedCard';
import {getFeeds, getRepo} from '../../actions/Fetch';
import styles from './styles';

class Feed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      items: [],
      page: 1,
      size: 10,
      isFirst: false,
    };

    // this.onListItemsChanged = this.onListItemsChanged.bind(this);
  }

  componentDidMount() {
    const {page, size} = this.state;

    this.props.getFeeds({
      page, size
    });
  }

  componentWillReceiveProps(nextProps) {

    const {loading, data }= nextProps;
    let items = this.state.items;
    const refreshing = !loading;

    items = items.concat(data);

    this.setState({
      refreshing,
      items
    });
  }

  render() {
    const {refreshing, items} = this.state;

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.listContainer}
          data={items}
          renderItem={({item}) => <FeedCard item={item} height={250}/>}
          refreshing={refreshing}
          onRefresh={this.refresh.bind(this)}
          onEndReached={this.request.bind(this)}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }

  request() {
    let {page, size, isFirst}= this.state;

    if (isFirst) {
      this.setState({isFirst: false});
      return;
    }
    page++;
    this.setState({
      page
    }, () => {
      this.props.getFeeds({
        page, size
      });
    });
  }

  refresh() {

    console.log('refershing..');
    this.setState({
      refreshing: true,
      page: 1,
      items: [],
      isFirst: true
    }, ()=>{
      const {page, size} = this.state;
      console.log('kk');
      this.props.getFeeds({
        page, size
      });
    });
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.feed.data,
    loading: state.feed.loading
  }
};

const mapDispatchToProps = (dispatch) => ({
  getFeeds: (data) => {dispatch(getFeeds(data))},
  test: () => {dispatch(getRepo())}
});

Feed = connect(mapStateToProps, mapDispatchToProps)(Feed);

export default Feed;
