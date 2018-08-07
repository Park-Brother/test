import {SET_USER_TOKEN} from "./actionTypes";


export const setUserToken = (token) => {
  return {
    type: SET_USER_TOKEN,
    payload: {
      token,
    }
  }
};

