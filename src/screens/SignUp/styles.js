import {StyleSheet} from 'react-native';
// import {LIST_BACKGROUND} from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: 'rgba(83, 85, 119, 1)',
    // alignItems: 'center',
    paddingTop: 60,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300
  },
  inputContainer: {
    height: 50,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
  },
  input: {
    flex: 1,
    height: 30,
    paddingLeft: 5,
    marginLeft: 10,
    marginRight: 10,
    color: '#fff',
    borderBottomColor: '#ededed',
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
  },
  signUpBtnContainer: {
    flex:1,
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  signInBtnContainer: {
    flex:1,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  signUpBtnText: {
    color: 'rgba(83, 85, 119, 1)'
  },
  signInBtnText: {
    color: '#fff'
  },
  sectionLineContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 30,
    marginLeft: 80,
    marginRight: 80,
  },
  sectionLine: {
    width: 150,
    borderBottomColor: 'rgba(255,255,255, 0.3)',
    borderBottomWidth: 1,
    borderRadius: 30,
  },
  loginIconContainer: {
    marginLeft: 10,
    marginRight: 10
  }
});

export default styles;