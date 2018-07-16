import {
  SHOW_DIM,
  HIDE_DIM,
  TOGGLE_DIM,
  TOGGLE_FLOATING_BTN_WITH_DIM
} from '../actions/actionTypes';

const InitialState = {
  visible: false
};

const DimReducer = (state = InitialState, action) => {
  const payload = action.payload;
  const toggleVisible = !state.visible;

  switch(action.type) {
    case SHOW_DIM:
        return {
          ...state,
          ...payload,
        };
    case HIDE_DIM:
      return {
        ...state,
        ...payload,
      };
    case TOGGLE_DIM:
      return {
        ...state,
        visible: toggleVisible
      };
    case TOGGLE_FLOATING_BTN_WITH_DIM:
      return {
        ...state,
        visible: toggleVisible
      };
    default:
        return state;
  }
};

export default DimReducer;
