import {
  SET_ITEM_FLOATING_BTN,
  SHOW_FLOATING_BTN,
  HIDE_FLOATING_BTN,
  TOGGLE_FLOATING_BTN,
  TOGGLE_FLOATING_BTN_WITH_DIM,
} from "./actionTypes";

export function setItems(items) {
    return {
        type: SET_ITEM_FLOATING_BTN,
        payload: {
            items
        }
    };
}

export function show() {
  return {
    type: SHOW_FLOATING_BTN,
    playload: {
      visible: true,
    }
  };
}

export function hide() {
  return {
    type: HIDE_FLOATING_BTN,
    playload: {
      visible: true,
    }
  };
}

export function toggle() {
  return {
    type: TOGGLE_FLOATING_BTN,
    payload: {}
  }
}

export function toggleWithDim() {
    return {
        type: TOGGLE_FLOATING_BTN_WITH_DIM,
        payload: {}
    }
}
