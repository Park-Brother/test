import {StyleSheet} from 'react-native';
import {LIST_BACKGROUND} from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    backgroundColor: LIST_BACKGROUND
  },
  msg: {
    fontSize: 12,
    maxHeight: 40,
  },
  date: {
    marginTop: 5,
    fontSize: 12,
    color: '#9E9E9E',
  },
  icon: {
    width: 15, height: 15
  }
});

export default styles;