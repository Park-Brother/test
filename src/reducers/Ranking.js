import {GET_RANKINGS, GET_RANKINGS_SUCCESS, GET_RANKINGS_FAIL} from "../actions/actionTypes";

const InitialState = {
  items: [],
  loading: false,
};

const RankingReducer = (state = InitialState, action) => {
  const payload = action.payload;

  switch(action.type) {

    case GET_RANKINGS:
      return {
        ...state,
      };
    case GET_RANKINGS_SUCCESS:
      return {
        ...state,
        items: payload.data.result,
        loading: true,
      };
    case GET_RANKINGS_FAIL:
      return {
        ...state,
        loading: false,
      };
    default: return state;
  }
};

export default RankingReducer;