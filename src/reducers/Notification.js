import {GET_NOTIFICATIONS, GET_NOTIFICATIONS_SUCCESS, GET_NOTIFICATIONS_FAIL} from "../actions/actionTypes";

const InitialState = {
  items: [],
  loading: false,
};

const NotificationReducer = (state = InitialState, action) => {
  const payload = action.payload;

  switch(action.type) {
    case GET_NOTIFICATIONS:
      return {
        ...state,
      };
    case GET_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        items: payload.data.result,
        loading: true,
      };
    case GET_NOTIFICATIONS_FAIL:
      return {
        ...state,
        loading: false,
      };
    default: return state;
  }
};

export default NotificationReducer;