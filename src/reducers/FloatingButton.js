import {
  SHOW, HIDE, SET_ITEMS, TOGGLE
} from '../actions/FloatingButton';

const initialState = {
  visible: true,
  folding: true,
  items: []
};

const FloatingButtonReducer = (state = initialState, action) => {
  const payload = action.payload;

  switch(action.type) {
      case SHOW:
          return {
            ...state,
            ...payload
          };
      case HIDE:
        return {
          ...state,
          ...payload
        };
      case SET_ITEMS:
        return {
          ...state,
          ...payload
        };
      case TOGGLE:
        const folding = !state.folding;
        return {
          ...state,
          folding
        }
      default:
          return state;
  }
};

export default FloatingButtonReducer;
