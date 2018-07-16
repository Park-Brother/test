import {
  SET_ITEM_FLOATING_BTN,
  SHOW_FLOATING_BTN,
  HIDE_FLOATING_BTN,
  TOGGLE_FLOATING_BTN_WITH_DIM,
  TOGGLE_DIM,
} from '../actions/actionTypes';

const initialState = {
  visible: true,
  folding: true,
  items: []
};

const FloatingButtonReducer = (state = initialState, action) => {
  const payload = action.payload;
  const toggleFolding = !state.folding;
  switch(action.type) {
    case SHOW_FLOATING_BTN:
        return {
          ...state,
          ...payload
        };

    case HIDE_FLOATING_BTN:
      return {
        ...state,
        ...payload
      };

    case SET_ITEM_FLOATING_BTN:
      return {
        ...state,
        ...payload
      };

    case TOGGLE_DIM:
      return {
        ...state,
        folding: toggleFolding
      };

    case TOGGLE_FLOATING_BTN_WITH_DIM:
      return {
        ...state,
        folding: toggleFolding
      };

    default:
      return state;
  }
};

export default FloatingButtonReducer;
