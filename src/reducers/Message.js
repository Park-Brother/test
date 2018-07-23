import {
  GET_MESSAGES,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAIL,
  GET_MESSAGE,
  GET_MESSAGE_SUCCESS,
  GET_MESSAGE_FAIL,
} from '../actions/actionTypes';

const InitialState = {
  items: [],
};

const MessageReducer = (state = InitialState, action) => {
  const payload = action.payload;

  switch(action.type) {
    case GET_MESSAGES:
      return {...state};
      break;
    case GET_MESSAGES_SUCCESS:
      return {...state, items: payload.data.result};
      break;
    case GET_MESSAGES_FAIL:
      return {...state};
      break;
    case GET_MESSAGE:
      break;
    case GET_MESSAGE_SUCCESS:
      break;
    case GET_MESSAGE_FAIL:
      break;
    default:
      return state;
  }
};

export default MessageReducer;
