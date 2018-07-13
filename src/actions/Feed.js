export const GET_REPOS = 'GET_REPOS';

export const getRepos = (user) => {
  return {
    type: GET_REPOS,
    payload: {
      request: {
        url: `/users/${user}/repos`
      }
    }
  };
};
