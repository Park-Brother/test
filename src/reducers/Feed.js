import {
  GET_FEEDS,
  GET_FEEDS_SUCCESS,
  GET_FEEDS_FAIL,
} from '../actions/actionTypes';

const InitialState = {
  loading: false,
  data: []
};

export default function FeedReducer(state = InitialState, action) {
  const payload = action.payload;
  // console.log('kkkk', action.type);
  switch (action.type) {
    case GET_FEEDS:
      return { ...state, loading: true };
    case GET_FEEDS_SUCCESS:
      console.log('./..success::');
      return {
        ...state,
        // data: payload.data
        loading: true,
        data: payload.data.result
      }
    case GET_FEEDS_FAIL:
      console.log('fail...');
      return {
        ...state,
        msg: 'fail....',
        loading: false
      };
    default:
      return state;
  }
}
