import {GET_RANKINGS, GET_NOTIFICATIONS, GET_USER, GET_FEEDS} from "./actionTypes";
import {convertQueryString} from '../util';

export const getRankings = (data) => {
  let queryString = convertQueryString(data);
  return {
    type: GET_RANKINGS,
    payload: {
      client: 'local',
      request: {
        url: `/rankings?${queryString}`,
      }
    }
  };
};

export const getNotifications = (data) => {
  let queryString = convertQueryString(data);
  return {
    type: GET_NOTIFICATIONS,
    payload: {
      client: 'local',
      request: {
        url: `/notifications?${queryString}`,
      }
    }
  };
};

export const getUser = (id) => {
  return {
    type: GET_USER,
    payload: {
      client: 'local',
      request: {
        url: `/users/${id}`,
      }
    }
  };
};

export const getFeeds = (data) => {

  return {
    type: GET_FEEDS,
    payload: {
      client: 'local',
      request: {
        url: `/feeds`,
        method: 'post',
        data: {
          ...data
        }
      }
    }
  };
};