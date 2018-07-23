import {
  GET_NOTIFICATIONS,
  GET_NOTIFICATIONS_SUCCESS,
  GET_NOTIFICATIONS_FAIL
} from "../actions/actionTypes";

const InitialState = {
  data: [],
};

const NotificationReducer = (state = InitialState, action) => {
  const payload = action.payload;

  switch(action.type) {
    case GET_NOTIFICATIONS:
      return {...state};
      break;
    case GET_NOTIFICATIONS_SUCCESS:
      return {...state, data: payload.data.result};
      break;
    case GET_NOTIFICATIONS_FAIL:
      break;
    default:
      return {...state};
      return state;
  }
};

export default NotificationReducer;
