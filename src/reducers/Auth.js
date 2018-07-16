import {
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_UP_WITH_FACEBOOK,
  SIGN_UP_WITH_FACEBOOK_SUCCESS,
  SIGN_UP_WITH_FACEBOOK_FAIL,
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL
} from "../actions/actionTypes";

const InitialState = {
  hasLogin: false,
};

const AuthReducer = (state = InitialState, action) => {
  const payload = action.payload;

  switch(action.type) {

    default:
      return state;
  }
};

export default AuthReducer;
