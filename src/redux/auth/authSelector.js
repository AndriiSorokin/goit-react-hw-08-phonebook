const getIsAuthentificated = state => state.auth.token;
const getUser = state => state.auth.user;

export default {
  getIsAuthentificated,
  getUser,
};
