import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';


export default class Thumbnail extends Component {

  constructor(props) {
    super();

    this.state = {
      backgroundColor: '#E0E0E0'
    };

    this.minSize = 40;
    this.defaultImageSource = require('../../img/thumbnail.png');
    this.onError = this.onError.bind(this);
    this.onLoad = this.onLoad.bind(this);
  }

  shouldComponentUpdate(prevProps, nexProps) {
    const isChange = prevProps.backgroundColor !== nexProps.backgroundColor;
    return isChange;
  }

  render() {

    const {size, url} = this.props;
    const _size = size ? size : this.minSize;
    const style = {
      size: {
        width: _size,
        height: _size
      },
      border: {
        borderRadius: _size/2
      },
      image: {
        backgroundColor: this.state.backgroundColor
      }
    };

    const source = url ? {uri: url} : this.defaultImageSource;

    return (
      <View style={[style.size]}>
        <Image style={[style.size, style.border, style.image]}
               source={source}
               loadingIndicatorSource={this.defaultImageSource}
               onLoadEnd={this.onLoad}
               onError={this.onError}/>
      </View>
    );
  }

  onLoad() {
    this.setState({
      backgroundColor: 'transparent'
    });
  }

  onError() {
    console.log('kk');
  }
}

const styles = StyleSheet.create({
  image: {

  }
});