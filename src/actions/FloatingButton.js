export const SHOW = 'SHOW';
export const HIDE = 'HIDE';
export const SET_ITEMS = 'SET_ITEMS';
export const TOGGLE = 'TOGGLE';

export function show() {
  return {
    type: SHOW,
    playload: {
      visible: true,
    }
  };
}

export function hide() {
  return {
    type: HIDE,
    playload: {
      visible: true,
    }
  };
}

export function setItems(items) {
  return {
    type: SET_ITEMS,
    payload: {
      items
    }
  };
}

export function toggle() {
  return {
    type: TOGGLE,
    payload: {}
  }
}
