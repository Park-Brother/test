import {SHOW_DIM, HIDE_DIM, TOGGLE_DIM} from "./actionTypes";

export function show() {
  return {
    type: SHOW_DIM,
    payload: {
      visible: true
    }
  };
}

export function hide() {
  return {
    type: HIDE_DIM,
    payload: {
      visible: false
    }
  };
}

export function toggle() {
  return {
    type: TOGGLE_DIM,
    payload: {}
  }
}
