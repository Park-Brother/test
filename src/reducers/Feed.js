import {
  GET_FEEDS,
  GET_FEEDS_SUCCESS,
  GET_FEEDS_FAIL,
} from '../actions/actionTypes';

export default function FeedReducer(state = { repos: [] }, action) {
  const payload = action.payload;

  switch (action.type) {
    case GET_FEEDS:
      console.log('get')
      return { ...state, loading: true };
    case GET_FEEDS_SUCCESS:
      console.log('success::');
      return {
        ...state,
        data: payload.data
      }
    case GET_FEEDS_FAIL:
      console.log('fail...');
      return {
        ...state,
        msg: 'fail....'
      };
    default:
      return state;
  }
}
