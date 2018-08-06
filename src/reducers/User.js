import {GET_USER, GET_USER_FAIL, GET_USER_SUCCESS} from "../actions/actionTypes";

const InitialState = {
  user: null,
  loading: false,
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
    default: return state;
  }
};

export default UserReducer;