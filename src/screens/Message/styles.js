import {StyleSheet} from 'react-native';
import {LIST_BACKGROUND} from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    backgroundColor: LIST_BACKGROUND
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderStyle: 'solide',
    borderWidth: 1,
    borderColor: '#ededed',
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgContainer: {
    backgroundColor: '#ededed',
    maxWidth: 280,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 5,
  },
  rightMsgContainer: {
    backgroundColor: '#B2DFDB',
  },
  msg: {
    lineHeight: 20,
  },
  left: {
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  right: {
    alignItems: 'flex-end',
    paddingRight: 15,
  },
  triangleLeft: {
    position: 'absolute',
    borderStyle: 'solid',
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
    borderLeftWidth: 3,
    borderLeftColor: 'transparent',
    borderRightWidth: 3,
    borderRightColor: '#ededed',
    borderTopWidth: 3,
    borderTopColor: '#ededed',
    left: 14,
    top: 10,
    zIndex: 1,
  },
  triangleRight: {
    position: 'absolute',
    borderStyle: 'solid',
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
    borderTopWidth: 3,
    borderTopColor: '#ededed',
    borderLeftWidth: 3,
    borderLeftColor: '#ededed',
    borderRightWidth: 3,
    borderRightColor: 'transparent',
    right: 9,
    top: 10,
    zIndex: 1,
  },
  input: {
    flex: 1,
    minHeight: 30,
    fontSize: 15,
    maxHeight: 100,
    paddingLeft: 5,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 15,
    borderColor: '#ededed',
    borderStyle: 'solid',
    borderWidth: 1,
  }
});

export default styles;