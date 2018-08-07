import {
  GET_USER, GET_USER_FAIL, GET_USER_SUCCESS,
  SET_USER_TOKEN, SIGN_UP, SIGN_IN, LOGOUT
} from "../actions/actionTypes";

const InitialState = {
  user: null,
  loading: false,
  token: null,
};

const UserReducer = (state = InitialState, action) => {
  const payload = action.payload;

  switch(action.type) {

    case GET_USER:
      return {
        ...state,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: payload.data.result,
        loading: true,
      };
    case GET_USER_FAIL:
      return {
        ...state,
        loading: false,
      };
    case SET_USER_TOKEN:

      return {
        ...state,
        token: payload.token
      };
    default: return state;
  }
};



export default UserReducer;