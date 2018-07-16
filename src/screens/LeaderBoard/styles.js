import {StyleSheet} from 'react-native';
import {LIST_BACKGROUND, LIST_TEXT_COLOR, BADGE_TEXT_COLOR} from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    backgroundColor: LIST_BACKGROUND
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 10,
  },
  orderContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  order: {
    color: LIST_TEXT_COLOR,
    fontSize: 12,
    fontWeight: '600'
  },
  orderChange: {
    color: LIST_TEXT_COLOR,
    fontSize: 10,
    fontWeight: '600',
    marginLeft: 3,
  },
  name: {
    color: LIST_TEXT_COLOR,
    fontSize: 10,
    fontWeight: '300'
  },
  pointContainer: {
    marginRight: 15,
    justifyContent: 'center',
    backgroundColor: '#ebebeb',
    borderRadius: 10,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 5,
    paddingRight: 5
  },
  point: {
    color: LIST_TEXT_COLOR,
    fontSize: 10,
    fontWeight: '600'
  }
});

export default styles;