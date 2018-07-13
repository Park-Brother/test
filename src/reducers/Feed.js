import {GET_REPOS} from '../actions/Feed';

export default function FeedReducer(state = { repos: [] }, action) {
  const payload = action.payload;
  console.log(':::', action.type);
  switch (action.type) {
    case GET_REPOS:
      console.log('get')
      return { ...state, loading: true };
    case 'GET_REPOS_SUCCESS':
      console.log('success::');
      return {
        ...state,
        data: payload.data
      }
    case 'GET_REPOS_FAIL':
      console.log('fail...');
      return {
        ...state,
        msg: 'fail....'
      };
    default:
      return state;
  }
}
