export const SHOW = 'SHOW';
export const HIDE = 'HIDE';
export const TOGGLE = 'TOGGLE';

export function show() {
  return {
    type: SHOW,
    payload: {
      visible: true
    }
  };
}

export function hide() {
  return {
    type: HIDE,
    payload: {
      visible: false
    }
  };
}

export function toggle() {
  return {
    type: TOGGLE,
    payload: {}
  }
}
