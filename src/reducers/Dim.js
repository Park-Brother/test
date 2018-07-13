import {SHOW, HIDE, TOGGLE} from '../actions/Dim';

const InitialState = {
  visible: false
};

const DimReducer = (state = InitialState, action) => {
  const payload = action.payload;
  
  switch(action.type) {
      case SHOW:
          return {
            ...state,
            ...payload,
          };
      case HIDE:
        return {
          ...state,
          ...payload,
        };
      case TOGGLE:
        const newVisible = !state.visible;
        return {
          ...state,
          visible: newVisible
        };
      default:
          return state;
  }
};

export default DimReducer;
