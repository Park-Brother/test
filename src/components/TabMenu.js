import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Dimensions} from 'react-native';

export default class TabMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      active: props.active || 0
    };
  }

  componentDidMount() {
    const { items, active} = this.state;
    const selectedItem = items[active];
    const onSelected = selectedItem.onSelected;
    onSelected && onSelected();
  }

  render() {
    const renderItem = this.props.renderItem;
    const items = this.state.items;
    let active = this.state.active;

    if (!active) active = 0;
    items[active].active = true;
    const onSelected = items[active].onSelected;

    return (
      <View style={styles.container}>
        {
          items.map((item, i) => {
            const labelContainerStyles = [styles.labelContainer];
            item.active && labelContainerStyles.push(styles.active);

            return (
              <TouchableOpacity
                  style={styles.item}
                  activeOpacity={1}
                  onPress={this.onPress.bind(this, i)}>
                <View style={labelContainerStyles}>
                  <Text>{item.label}</Text>
                </View>
              </TouchableOpacity>
            );
          })
        }
      </View>
    )
  }

  onPress(i) {
    const prevActiveIdx = this.state.active;

    if (i === prevActiveIdx) return;

    const items = this.state.items;
    const selectedItem = items[i];
    const onSelected = selectedItem.onSelected;

    delete items[prevActiveIdx].active;
    selectedItem.active = true;
    onSelected && onSelected();

    this.setState({
      items: items,
      active: i
    });
  }

  _isObject(object ={}) {
    return typeof object === 'object';
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  item: {
    flex: 1
  },
  labelContainer: {
    height: 46,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: '#ededed',
    borderBottomWidth: 1
  },
  active: {
    borderColor: '#000'
  }
})
