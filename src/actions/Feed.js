import {GET_FEEDS} from "./actionTypes";

export const getFeeds = (user) => {
  return {
    type: GET_FEEDS,
    payload: {
      request: {
        url: `/users/${user}/repos`
      }
    }
  };
};
