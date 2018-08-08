import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Row from './Row';
import Col from './Col';

export default class TabMenu extends Component {

  constructor(props) {
    super(props);
    const {activeColor, inactiveColor, items, activeIndex} = props;

    this.defaultHeight = 50;
    this.activeColor = activeColor ? activeColor : '#000';
    this.inactiveColor = inactiveColor ? inactiveColor : '#e0e0e0';

    this.state = {
      items,
      activeIndex: activeIndex ? activeIndex : 0
    };

    this.onPress = this.onPress.bind(this);
  }

  render() {

    const {height} = this.props;
    const {items, activeIndex} = this.state;
    const _height = height ? height : this.defaultHeight;
    const containerHeightStyle = {
      height: _height,
    };

    return (
      <Row style={[styles.menuContainer, containerHeightStyle]}>
        {
          items.map((item, index) => {
            const isActive = index === activeIndex;
            const borderStyle = isActive ? styles.active : styles.inactive;
            const color = isActive ? this.activeColor : this.inactiveColor;
            const {onPress: _onPress} = item.label.props;

            const _label = React.cloneElement(item.label, {
              color,
              onPress: null
            });

            const onPress = () => {
              _onPress && _onPress();
              this.onPress(index);
            };

            return (
              <TouchableOpacity style={{flex:1}}
                                activeOpacity={1}
                                key={index}
                                onPress={onPress}>
                <Col style={[styles.menu, borderStyle]}>
                  {_label}
                </Col>
              </TouchableOpacity>
            );
          })
        }
      </Row>
    );
  }

  onPress(index) {
    this.setState({
      activeIndex: index
    });
  }
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: 0,
    borderTopColor: '#e0e0e0',
    borderTopWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  menu: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  inactive: {
    borderBottomColor: '#e0e0e0',
  },
  active: {
    borderBottomColor: '#000'
  }
});
