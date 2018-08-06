import {GET_FEEDS, GET_FEEDS_SUCCESS, GET_FEEDS_FAIL} from "../actions/actionTypes";

const InitialState = {
  items: [],
  loading: false,
};

const FeedReducer = (state = InitialState, action) => {
  const payload = action.payload;

  switch(action.type) {

    case GET_FEEDS:
      return {
        ...state,
        loading: true,
      };
    case GET_FEEDS_SUCCESS:
      return {
        ...state,
        items: payload.data.result,
        loading: false,
      };
    case GET_FEEDS_FAIL:
      return {
        ...state,
        loading: false,
      };
    default: return state;
  }
};

export default FeedReducer;