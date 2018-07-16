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
  from: {
    color: LIST_TEXT_COLOR,
    fontSize: 12,
    fontWeight: '600',
  },
  msg: {
    color: LIST_TEXT_COLOR,
    fontSize: 10,
    fontWeight: '600',
  },
  dateContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    width: 50,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  date: {
    height: 20,
    fontSize: 12,
    color: LIST_TEXT_COLOR,
  },
  badgeContainer: {
    marginTop: 5,
    width: 20,
    height: 20,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 1,
  },
  badge: {
    color: BADGE_TEXT_COLOR,
    lineHeight: 20,
    fontSize: 10
  }
});

export default styles;