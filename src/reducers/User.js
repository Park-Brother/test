import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL
} from '../actions/actionTypes';

const InitialState = {
  user: {}
};

const UserReducer = (state = InitialState, action) => {
  const payload = action.payload;

  switch(action.type) {

    default:
      return state;
  }
};

export default UserReducer;

