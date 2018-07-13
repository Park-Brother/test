import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';

const CountryBasePath = '../../img/country';
const UserThumbnailErrorImgPath = '../../img/thumbnail.png';

export default class Thumbnail extends Component {
  static SIZE = 40;

  constructor(props) {
    super(props);

    const {user, country} = props;
    const userSource = this._isEmpty(user) ?
                      this._getUserThumbnailErrorImg() :
                      {
                        url: user,
                        cache: 'only-if-cached'
                      };

    this.state = {
      userSource,
      countrySource: this._getCountrySource(country)
    };
  }

  render() {
    const {user, country} = this.props;
    const {userSource, countrySource} = this.state;
    let {size, style, shrink} = this.props;

    size = size ? size : Thumbnail.SIZE;
    shrink = shrink ? shrink : 2;

    const userImageStyle = this._getImageStyle(size);
    const countryImageStyle = this._getImageStyle(size, shrink);

    return (
      <View style={[styles.container, style]}>
        <View>
          <Image
            style={[userImageStyle]}
            source={userSource}
            onError={()=> {
              const _userSource = this._getUserThumbnailErrorImg();
              this.setState({
                userSource: _userSource
              });
            }}
            />
        </View>
        <View>
          <Image
            style={[styles.country, countryImageStyle]}
            source={countrySource}
            />
        </View>
      </View>
    );
  }

  onPress(e = {}) {
    console.log(e);
  }

  _isEmpty(user = '') {
    return !user.trim() ? true : false;
  }

  _getUserThumbnailErrorImg() {
    return require(UserThumbnailErrorImgPath);
  }
  /**
  * Note.
  * 아래와 같이 하나하나의 경우에 대해서 모두 나열하지 않으면, error 가 발생한다.
  */
  _getCountrySource(country = '') {
    let source;
    const basePath = CountryBasePath;

    switch (country.trim()) {
      case 'china':
        source = require(`${basePath}/china.png`);
        break;
      case 'germany':
        source = require(`${basePath}/germany.png`);
        break;
      case 'japan':
        source = require(`${basePath}/japan.png`);
        break;
      case 'korea':
        source = require(`${basePath}/south-korea.png`);
        break;
      default:
        source = require(`${basePath}/united-states.png`);
    }
    return source;
  }

  _getImageStyle(size = Thumbnail.size, shrink = 1) {
    return {
      width: size / shrink,
      height: size / shrink,
      borderRadius: size / 2 / shrink
    };
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  user: {
  },
  country: {
    borderWidth: 1,
    borderColor: '#fff',
    position: 'absolute',
    bottom: 0
  }
});
