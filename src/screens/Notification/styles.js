import {StyleSheet} from 'react-native';
import {LIST_BACKGROUND, DIM_BACKGROUND_COLOR} from '../../config/styles';

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
  },
  modalContainer: {
    flex: 1
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: DIM_BACKGROUND_COLOR
  }
});

export default styles;