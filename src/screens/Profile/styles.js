import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  userInfoContainer: {
    height: 130,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomColor: '#ededed',
    borderBottomWidth: 1,
  },
  sectionLine: {
    marginTop: 10,
    marginBottom: 10,
    borderLeftWidth: 1,
    borderLeftColor: '#ededed'
  },
  thumbnailContainer: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center'
  },
  editBtn: {
    width: 30,
    height: 30,
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderRadius: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },
  camera: {
    width: 15,
    height: 15
  },
  id: {
    paddingTop: 10,
    overflow: 'hidden'
  },
  infoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flex: 1,
    backgroundColor: '#fff'
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }
});

export default styles;