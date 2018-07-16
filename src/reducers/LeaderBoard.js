import {
  GET_LEADER_BOARDS,
  GET_LEADER_BOARDS_SUCCESS,
  GET_LEADER_BOARDS_FAIL,
} from "../actions/actionTypes";

const InitialState = {

};

const LeaderBoardReducer = (state = InitialState, action) => {
  const payload = action.payload;

  switch(action.type) {

    case GET_LEADER_BOARDS:
      break;
    case GET_LEADER_BOARDS_SUCCESS:
      break;
    case GET_LEADER_BOARDS_FAIL:
      break;

    default:
      return state;
  }
};

export default LeaderBoardReducer;
