import {GET_FEEDS, GET_LEADER_BOARDS, GET_NOTIFICATIONS} from "./actionTypes";

export const getRepo = (user) => {
  return {
    type: GET_FEEDS,
    payload: {
      client: 'test',
      request: {
        url: `/users/${user}/repos`
      }
    }
  };
};

export const getMessages = (user) => {
  return {
    type: GET_FEEDS,
    payload: {
      client: 'local',
      request: {
        url: '/messages',
        method: 'post',
        data: {
          ...data
        }
      }
    }
  }
};

export const getFeeds = (data) => {
  return {
    type: GET_FEEDS,
    payload: {
      client: 'local',
      request: {
        url: '/feeds',
        method: 'post',
        data: {
          ...data
        }
      }
    }
  }
};

export const getLeaderBoards = (data) => {
  return {
    type: GET_LEADER_BOARDS,
    payload: {
      client: 'local',
      request: {
        url: '/leaderBoards',
        method: 'post',
        data: {
          ...data
        }
      }
    }
  }
};

export const getNotifications = (data) => {
  return {
    type: GET_NOTIFICATIONS,
    payload: {
      client: 'local',
      request: {
        url: '/notifications',
        method: 'post',
        data: {
          ...data
        }
      }
    }
  }
};

